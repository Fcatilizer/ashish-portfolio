import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button, ButtonGroup } from "@nextui-org/button";
import {
  AttachmentIcon,
  BreifcaseIcon,
  GithubIcon,
  LanguageIcon,
  LocationIcon,
  UniversityIcon,
} from "@/components/icons";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className={title()}>About Me</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 py-8 md:py-10">
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
            <p className="text-tiny uppercase font-bold text-center">
              {"Ashish Gaurav"}
            </p>
            <small className="text-default-500">
              {"Android App & Web Developer"}
            </small>
            <h4 className="font-bold text-large">B.Tech (Hons.) CSE</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="me.jpg"
              width={400}
            />
          </CardBody>
        </Card>
        <ul className="gap-2 grid grid-cols-1 md:grid-cols-2 px-0 list-none">
          <li>
            <Card>
              <CardBody>
                <h4 className="font-bold text-large">About Me</h4>
                <p>
                  {
                    "I am a passionate Android App and Web Developr. Developer of "
                  }
                  <a
                    className="text-primary"
                    href="https://play.google.com/store/apps/details?id=com.a3.eyecare"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Eye Care App"
                  >
                    Eye Care
                  </a>
                  {" App."}
                </p>
                <p className="mt-2">
                  <UniversityIcon className="inline-block mr-2" />
                  <span className="text-default-500">
                    <a
                      href="https://adamasuniversity.ac.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Adamas University"
                    >
                      Adamas University
                    </a>
                  </span>
                </p>
              </CardBody>
            </Card>
          </li>
          <li>
            <Card>
              <CardBody>
                <h4 className="font-bold text-large">Contact Info</h4>
                <p>
                  <span className="text-default-500">Email : </span>
                  <a
                    className="text-primary"
                    href="mailto:ashish.gaurav2003@gmail.com"
                  >
                    ashish.gaurav2003@gmail.com
                  </a>
                </p>
                <p>
                  <span className="text-default-500">Phone : </span>

                  <a
                    className="text-primary"
                    href="tel:+917321073159"
                    aria-label="Phone Number"
                  >
                    +91 7321073159
                  </a>
                </p>
                <p className="mt-2">
                  <LocationIcon className="inline-block mr-2" />
                  <a
                    className="text-default-500"
                    href="https://www.google.com/maps/place/Patna,+Bihar,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Location"
                  >
                    India, Bihar, Patna
                  </a>
                </p>
              </CardBody>
            </Card>
          </li>
          <li>
            <Card>
              <CardBody>
                <h4 className="font-bold text-large">Experience</h4>
                <p>
                  Frontend Development of 25+ Webpages based on{" "}
                  <a
                    className="text-primary"
                    href="https://www.figma.com/design/c2hRWKAuq2Xn1vMU3v16Cj/Insta-KAS-(21-06-23)"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Frontend Projects"
                  >
                    Figma Designs.{" "}
                  </a>
                  Built with pure HTML, CSS, and JS.
                </p>
                <p className="mt-2">
                  <BreifcaseIcon className="inline-block mr-2" />
                  <span className="text-default-500">
                    <a
                      href="https://github.com/Fcatilizer/INSTAKAS/blob/main/Internship%20Letter%20-%20Ashish%20Gaurav.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Internship Letter"
                    >
                      VRAIO Software Solutions Pvt Ltd
                    </a>
                  </span>
                </p>
              </CardBody>
            </Card>
          </li>
          <li>
            <Card>
              <CardBody>
                <h4 className="font-bold text-large">Skills</h4>
                <p>
                  <span>Language : </span>
                  HTML, CSS, JS, MySQL, Python, Dart
                </p>
                <p>
                  <span>Framework : </span>
                  Flutter, React, Next.js
                </p>
                <p className="mt-2">
                  <LanguageIcon className="inline-block mr-2" />
                  <span className="text-default-500">English, Hindi</span>
                </p>
              </CardBody>
            </Card>
          </li>
        </ul>
      </div>
      <Card>
        <CardBody>
          <h4>Build With:</h4>
          <p>NextJS + NextUI</p>
          <div className="flex items-center justify-center">
            <small className="text-secondary">
              <a
                href="https://github.com/Fcatilizer/ashish-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github Repository"
              >
                <GithubIcon className="inline-block mr-2" />
              </a>
            </small>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
