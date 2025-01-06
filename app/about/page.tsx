import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button, ButtonGroup } from "@nextui-org/button";
import {
  BreifcaseIcon,
  LanguageIcon,
  LocationIcon,
  UniversityIcon,
} from "@/components/icons";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
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
              width={270}
            />
          </CardBody>
        </Card>
        <ul className="gap-2 grid grid-cols-1 md:grid-cols-2 px-8 list-none">
          <li>
            <Card>
              <CardBody>
                <h4 className="font-bold text-large">About Me</h4>
                <p>
                  {
                    "I am a passionate Frontend Developer interested in both Android App and Web Development."
                  }
                </p>
                <p className="mt-2">
                  <UniversityIcon className="inline-block mr-2" />
                  <span className="text-default-500">Adamas University</span>
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
                  <span className="text-primary">+91-7321073159</span>
                </p>
                <p className="mt-2">
                  <LocationIcon className="inline-block mr-2" />
                  <span className="text-default-500">India, Bihar, Patna</span>
                </p>
              </CardBody>
            </Card>
          </li>
          <li>
            <Card>
              <CardBody>
                <h4 className="font-bold text-large">Experience</h4>
                <p>
                  FrontEnd Devlopment of 25+ Webpage based on Figma Designs.
                  Buit with pure HTML, CSS and JS
                </p>
                <p className="mt-2">
                  <BreifcaseIcon className="inline-block mr-2" />
                  <span className="text-default-500">
                    VRAIO Software Solutions Pvt Ltd
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
                  <span>Language : </span>
                  English, Hindi
                </p>
              </CardBody>
            </Card>
          </li>
        </ul>
      </div>
    </div>
  );
}
