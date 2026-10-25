"use client";

import { type FormEvent, useEffect, useId, useRef, useState } from "react";
import { Button } from "@heroui/button";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/modal";
import { useReducedMotion } from "framer-motion";

import { aboutProfile } from "@/app/about/aboutData";
import { quoteBudgetOptions, quoteProjectTypes, type QuoteProjectType } from "@/config/quote";

import styles from "./quote-modal.module.css";

type SubmissionState = "idle" | "submitting" | "success" | "error";
type Field = "fullName" | "email" | "projectType" | "details" | "consent";
type QuoteErrors = Partial<Record<Field, string>>;

function Arrow() {
  return <svg aria-hidden="true" fill="none" viewBox="0 0 24 24"><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>;
}

export function QuoteModalTrigger({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState<QuoteProjectType | "">("");
  const [budget, setBudget] = useState("");
  const [details, setDetails] = useState("");
  const [consent, setConsent] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [message, setMessage] = useState("");
  const prefix = useId();
  const feedback = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const busy = submissionState === "submitting";
  const success = submissionState === "success";
  const emailLink = "mailto:" + aboutProfile.email;

  useEffect(() => {
    if (submissionState === "success" || submissionState === "error") {
      feedback.current?.focus({ preventScroll: true });
      feedback.current?.scrollIntoView({ block: "nearest" });
    }
  }, [submissionState]);

  const validate = (): QuoteErrors => {
    const errors: QuoteErrors = {};
    if (fullName.trim().length < 2) errors.fullName = "Please enter your name (at least 2 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.email = "Please enter a valid email address.";
    if (!projectType) errors.projectType = "Choose a project type, or select Something else.";
    if (details.trim().length < 10) errors.details = "Add a little more detail (at least 10 characters).";
    if (!consent) errors.consent = "Please confirm that I can contact you about this project.";
    return errors;
  };
  const errors = attempted ? validate() : {};

  const handleOpen = () => {
    setFullName("");
    setEmail("");
    setProjectType("");
    setBudget("");
    setDetails("");
    setConsent(false);
    setAttempted(false);
    setMessage("");
    setSubmissionState("idle");
    setIsOpen(true);
  };

  const handleClose = () => {
    if (!busy) setIsOpen(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (busy || success) return;
    setAttempted(true);
    const invalidField = Object.keys(validate())[0] as Field | undefined;
    if (invalidField) {
      document.getElementById(prefix + "-" + invalidField)?.focus();
      return;
    }
    setSubmissionState("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName: fullName.trim(), email: email.trim(), projectType, budget, details: details.trim(), consent }),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) {
        setSubmissionState("error");
        setMessage(result.error || "Your enquiry couldn't be sent. Please try again, or email me directly.");
        return;
      }
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
      setMessage("Your enquiry couldn't be sent. Please try again, or email me directly.");
    }
  };

  return (
    <>
      <Button size="lg" variant="flat" color="success" className={className ?? "rounded-full px-8"} onPress={handleOpen}>
        Get a Quote
      </Button>
      <Modal
        aria-label="Get a Quote"
        disableAnimation={!!reducedMotion}
        hideCloseButton={busy}
        isDismissable={!busy}
        isKeyboardDismissDisabled={busy}
        isOpen={isOpen}
        placement="center"
        scrollBehavior="inside"
        size="3xl"
        classNames={{ base: styles.dialog, wrapper: styles.wrapper, backdrop: styles.backdrop, closeButton: styles.closeButton }}
        onClose={handleClose}
      >
        <ModalContent>
          <ModalHeader className={styles.header}>
            <p className={styles.eyebrow}>{success ? "ENQUIRY RECEIVED" : "LET'S WORK TOGETHER"}</p>
            <h2>{success ? <>Thanks for <span>the introduction.</span></> : <>Tell me about <span>your project.</span></>}</h2>
            <p className={styles.intro}>{success ? "The first step is taken. Here's what happens next." : "Share the essentials. I'll follow up by email to discuss scope and a quote."}</p>
          </ModalHeader>
          {success ? (
            <>
              <ModalBody className={styles.successBody}>
                <div ref={feedback} aria-live="polite" className={styles.successContent} role="status" tabIndex={-1}>
                  <span aria-hidden="true" className={styles.successIcon}><svg fill="none" viewBox="0 0 24 24"><path d="m6 12 4 4 8-8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg></span>
                  <h3>Your enquiry is in.</h3>
                  <p>I'll review the details and reply to <strong>{email.trim()}</strong> to talk through your project.</p>
                  <dl className={styles.summary}>
                    <div><dt>Project</dt><dd>{quoteProjectTypes.find((type) => type.value === projectType)?.label}</dd></div>
                    <div><dt>Budget</dt><dd>{quoteBudgetOptions.find((option) => option.value === budget)?.label}</dd></div>
                  </dl>
                </div>
              </ModalBody>
              <ModalFooter className={styles.footer}>
                <span className={styles.footerNote}>Something to add? <a href={emailLink}>Email me <span aria-hidden="true">↗</span></a></span>
                <Button className={styles.submitButton} onPress={handleClose}>Done <Arrow /></Button>
              </ModalFooter>
            </>
          ) : (
            <form noValidate aria-busy={busy} className={styles.form} onSubmit={handleSubmit}>
              <ModalBody className={styles.body}>
                <fieldset className={styles.fields} disabled={busy}>
                  <legend className={styles.srOnly}>Project enquiry details</legend>
                  <section aria-labelledby={prefix + "-contact-heading"} className={styles.section}>
                    <h3 className={styles.sectionTitle} id={prefix + "-contact-heading"}><span>01</span> A little about you</h3>
                    <div className={styles.contactFields}>
                      <div className={styles.field}>
                        <label htmlFor={prefix + "-fullName"}>Full name</label>
                        <input required aria-describedby={errors.fullName ? prefix + "-fullName-error" : undefined} aria-invalid={!!errors.fullName} autoComplete="name" id={prefix + "-fullName"} maxLength={80} name="fullName" placeholder="Your name" type="text" value={fullName} onChange={(event) => setFullName(event.target.value)} />
                        {errors.fullName && <p className={styles.fieldError} id={prefix + "-fullName-error"}>{errors.fullName}</p>}
                      </div>
                      <div className={styles.field}>
                        <label htmlFor={prefix + "-email"}>Email address</label>
                        <input required aria-describedby={errors.email ? prefix + "-email-error" : undefined} aria-invalid={!!errors.email} autoComplete="email" id={prefix + "-email"} maxLength={160} name="email" placeholder="you@example.com" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                        {errors.email && <p className={styles.fieldError} id={prefix + "-email-error"}>{errors.email}</p>}
                      </div>
                    </div>
                  </section>
                  <fieldset aria-describedby={errors.projectType ? prefix + "-projectType-error" : undefined} className={styles.projectSection}>
                    <legend className={styles.sectionTitle}><span>02</span> What are we building?</legend>
                    <div className={styles.projectTypes}>
                      {quoteProjectTypes.map((type, index) => (
                        <label key={type.value} className={styles.projectChoice}>
                          <input required aria-invalid={!!errors.projectType} className={styles.srOnly} checked={projectType === type.value} id={index === 0 ? prefix + "-projectType" : prefix + "-projectType-" + type.value} name="projectType" type="radio" value={type.value} onChange={() => setProjectType(type.value)} />
                          <span>{type.label}</span>
                          <svg aria-hidden="true" fill="none" viewBox="0 0 16 16"><path d="m4 8 3 3 5-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
                        </label>
                      ))}
                    </div>
                    {errors.projectType && <p className={styles.fieldError} id={prefix + "-projectType-error"}>{errors.projectType}</p>}
                  </fieldset>
                  <div className={styles.field}>
                    <label htmlFor={prefix + "-details"}>A little about the project</label>
                    <textarea required aria-describedby={(errors.details ? prefix + "-details-error " : "") + prefix + "-details-hint"} aria-invalid={!!errors.details} id={prefix + "-details"} maxLength={2000} name="details" placeholder="What should it do? Who is it for? Any must-have features or timeline?" rows={4} value={details} onChange={(event) => setDetails(event.target.value)} />
                    <div className={styles.detailHint}><span id={prefix + "-details-hint"}>A few sentences are plenty.</span><span aria-label={details.length + " of 2000 characters"}>{details.length} / 2000</span></div>
                    {errors.details && <p className={styles.fieldError} id={prefix + "-details-error"}>{errors.details}</p>}
                  </div>
                  <div className={styles.budgetRow}>
                    <div className={styles.field}>
                      <label htmlFor={prefix + "-budget"}>Estimated budget <span className={styles.optional}>Optional · INR</span></label>
                      <div className={styles.selectWrapper}>
                        <select id={prefix + "-budget"} name="budget" value={budget} onChange={(event) => setBudget(event.target.value)}>
                          {quoteBudgetOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                        </select>
                        <svg aria-hidden="true" fill="none" viewBox="0 0 16 16"><path d="m4 6 4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" /></svg>
                      </div>
                    </div>
                    <p>A starting point for the conversation. It&apos;s okay if you&apos;re still figuring it out.</p>
                  </div>
                  <div className={styles.consentField}>
                    <label className={styles.consent}>
                      <input required aria-describedby={errors.consent ? prefix + "-consent-error" : undefined} aria-invalid={!!errors.consent} checked={consent} id={prefix + "-consent"} name="consent" type="checkbox" onChange={(event) => setConsent(event.target.checked)} />
                      <span>I agree to be contacted about this project enquiry.</span>
                    </label>
                    {errors.consent && <p className={styles.fieldError} id={prefix + "-consent-error"}>{errors.consent}</p>}
                  </div>
                </fieldset>
                {submissionState === "error" && <div ref={feedback} className={styles.errorMessage} role="alert" tabIndex={-1}><p>{message}</p><a href={emailLink}>Send an email instead <span aria-hidden="true">↗</span></a></div>}
              </ModalBody>
              <ModalFooter className={styles.footer}>
                <span className={styles.footerNote}>Prefer email? <a href={emailLink}>Write to me <span aria-hidden="true">↗</span></a></span>
                <div className={styles.footerButtons}>
                  <Button className={styles.cancelButton} isDisabled={busy} variant="light" onPress={handleClose}>Cancel</Button>
                  <Button className={styles.submitButton} isDisabled={busy} isLoading={busy} type="submit">{busy ? "Sending enquiry…" : "Send enquiry"}{!busy && <Arrow />}</Button>
                </div>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
