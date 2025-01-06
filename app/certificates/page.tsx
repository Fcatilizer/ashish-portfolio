import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";

export default function CertificatesPage() {
  return (
    <div>
      <h1 className={title()}>My Certificates</h1>

      <div className="mt-4 py-8 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-rebrand-logo-square.png?auto=format%2Ccompress&dpr=1"
              width={40}
            />
            <div className="flex flex-col text-left">
              <p className="text-md">Getting started with Git and Github</p>
              <p className="text-small text-default-500">Coursera, IBM</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              Usage of Git and Github with the appropiate license for projects.
              CLI configuration and experience.
            </p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://www.coursera.org/account/accomplishments/verify/J4LRPNWMG5KQ"
            >
              Check Credentaials on Coursera.
            </Link>
          </CardFooter>
        </Card>
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-rebrand-logo-square.png?auto=format%2Ccompress&dpr=1"
              width={40}
            />
            <div className="flex flex-col text-left">
              <p className="text-md">Introduction to Cloud Computing</p>
              <p className="text-small text-default-500">Coursera, IBM</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              An introduction course of cloud computing and hands on experience
              with IBM cloud deployment. Course provided by IBM.
            </p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://www.coursera.org/account/accomplishments/certificate/2C7WE69LR6FQ"
            >
              Check Credentaials on Coursera.
            </Link>
          </CardFooter>
        </Card>
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              // height={40}
              radius="sm"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/EdX_newer_logo.svg/1200px-EdX_newer_logo.svg.png"
              width={40}
            />
            <div className="flex flex-col text-left">
              <p className="text-md">
                CS50 Web Programming with Python and Javascript
              </p>
              <p className="text-small text-default-500">EDX, HarvardX</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              A course of study offered by HarvardX, an online learning
              initiative of Harvard University for Web Programming with Python
              and Javascript.
            </p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://courses.edx.org/certificates/d70991c00ec44aed8c50b23e4c52a4e5"
            >
              Check Credentaials on Edx Courses.
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
