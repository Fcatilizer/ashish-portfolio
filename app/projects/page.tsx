import { GithubIcon, PlayStoreIcon } from "@/components/icons";
import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export default function ProjectsPage() {
  return (
    <div>
      <h1 className={title()}>My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8 md:py-10">
        <Card className="py-4 mt-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Eye Care</p>
            <small className="text-default-500 text-left">
              keep records of their prescription in the cloud and access them
              from anywhere.
            </small>
            <h4 className="font-bold text-large flex items-center">
              <PlayStoreIcon className="inline-block mr-2" />
              <a
                className="text-secondary"
                href="https://play.google.com/store/apps/details?id=com.a3group.eyecare"
              >
                Get On Play Store
              </a>
            </h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2 flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://www.a3group.co.in/_next/image?url=%2Feye-care%2Fimages%2Fcover.png&w=640&q=75"
            />
          </CardBody>
        </Card>
        <Card className="py-4 mt-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Library Management</p>
            <small className="text-default-500 text-left">
              Library Books Management Apps for both Student & Teachers Login.
              Easy Login with book search, assign, add options.
            </small>
            <h4 className="font-bold text-large flex items-center">
              <GithubIcon className="inline-block mr-2" />
              <a
                className="text-secondary"
                href="https://github.com/Fcatilizer/Library_Management"
              >
                Get On GitHub
              </a>
            </h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2 flex justify-center items-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="ic_launcher.png"
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
