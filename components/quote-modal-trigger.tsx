"use client";

import { type FormEvent, useMemo, useState } from "react";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export function QuoteModalTrigger() {
  const [isOpen, setIsOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [details, setDetails] = useState("");
  const [consent, setConsent] = useState(false);
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [message, setMessage] = useState("");

  const isSubmitDisabled = useMemo(() => {
    return (
      submissionState === "submitting" ||
      fullName.trim().length < 2 ||
      email.trim().length < 5 ||
      projectType.trim().length < 1 ||
      details.trim().length < 10 ||
      !consent
    );
  }, [consent, details, email, fullName, projectType, submissionState]);

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setProjectType("");
    setBudget("");
    setDetails("");
    setConsent(false);
    setMessage("");
    setSubmissionState("idle");
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      resetForm();
    }, 150);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionState("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          projectType,
          budget,
          details,
          consent,
        }),
      });

      const result = (await response.json()) as {
        message?: string;
        error?: string;
      };

      if (!response.ok) {
        setSubmissionState("error");
        setMessage(result.error ?? "Unable to submit right now.");
        return;
      }

      setSubmissionState("success");
      setMessage(result.message ?? "Submitted.");
      setFullName("");
      setEmail("");
      setProjectType("");
      setBudget("");
      setDetails("");
      setConsent(false);
    } catch {
      setSubmissionState("error");
      setMessage("Unable to submit right now. Please try again.");
    }
  };

  return (
    <>
      <Button
        size="lg"
        variant="flat"
        color="success"
        className="rounded-full px-8"
        onPress={() => setIsOpen(true)}
      >
        Get a Quote
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        size="lg"
        scrollBehavior="inside"
        classNames={{
          base: "bg-white dark:bg-gray-900",
          backdrop: "bg-black/50 backdrop-blur-sm",
        }}
      >
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <ModalHeader className="flex flex-col gap-1">
              Get a Quote
              <p className="text-sm font-normal text-default-500">
                Fill out the form and I will contact you with a custom quote.
              </p>
            </ModalHeader>
            <ModalBody className="gap-4">
              <label className="flex flex-col gap-1 text-sm">
                <span className="text-default-600">Full name</span>
                <input
                  type="text"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  placeholder="Your name"
                  maxLength={80}
                  required
                  className="w-full rounded-xl border border-default-200 bg-transparent px-3 py-2 outline-none transition focus:border-primary"
                />
              </label>

              <label className="flex flex-col gap-1 text-sm">
                <span className="text-default-600">Email address</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  maxLength={160}
                  required
                  className="w-full rounded-xl border border-default-200 bg-transparent px-3 py-2 outline-none transition focus:border-primary"
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1 text-sm">
                  <span className="text-default-600">Project type</span>
                  <select
                    value={projectType}
                    onChange={(event) => setProjectType(event.target.value)}
                    required
                    className="w-full rounded-xl border border-default-200 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 px-3 py-2 outline-none transition focus:border-primary"
                  >
                    <option className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100" value="">
                      Select type
                    </option>
                    <option className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100" value="android-app">
                      Android app
                    </option>
                    <option className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100" value="ios-app">
                      iOS app
                    </option>
                    <option className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100" value="web-app">
                      Web app
                    </option>
                    <option className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100" value="dashboard">
                      Admin dashboard
                    </option>
                    <option className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100" value="other">
                      Other
                    </option>
                  </select>
                </label>

                <label className="flex flex-col gap-1 text-sm">
                  <span className="text-default-600">Estimated budget</span>
                  <select
                    value={budget}
                    onChange={(event) => setBudget(event.target.value)}
                    className="w-full rounded-xl border border-default-200 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 px-3 py-2 outline-none transition focus:border-primary"
                  >
                    <option className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100" value="">
                      Select budget
                    </option>
                    <option className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100" value="under-50k">
                      Under INR 50,000
                    </option>
                    <option className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100" value="50k-2l">
                      INR 50,000 - 2,00,000
                    </option>
                    <option className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100" value="2l-10l">
                      INR 2,00,000 - 10,00,000
                    </option>
                    <option className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100" value="above-10l">
                      Above INR 10,00,000
                    </option>
                  </select>
                </label>
              </div>

              <label className="flex flex-col gap-1 text-sm">
                <span className="text-default-600">Project details</span>
                <textarea
                  value={details}
                  onChange={(event) => setDetails(event.target.value)}
                  placeholder="Describe your idea, required features, and timeline."
                  rows={5}
                  maxLength={2000}
                  required
                  className="w-full resize-y rounded-xl border border-default-200 bg-transparent px-3 py-2 outline-none transition focus:border-primary"
                />
              </label>

              <label className="flex items-center gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(event) => setConsent(event.target.checked)}
                  required
                  className="h-4 w-4 rounded border-default-300"
                />
                <span className="text-default-600">
                  I agree to be contacted regarding this quote request.
                </span>
              </label>

              {message && (
                <p
                  className={`text-sm ${
                    submissionState === "success"
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {message}
                </p>
              )}
            </ModalBody>
            <ModalFooter>
              <Button variant="light" onPress={handleClose}>
                Close
              </Button>
              <Button
                type="submit"
                color="success"
                isLoading={submissionState === "submitting"}
                isDisabled={isSubmitDisabled}
              >
                Submit Request
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
