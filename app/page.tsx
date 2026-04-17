import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import Image from "next/image";
import { QuoteModalTrigger } from "@/components/quote-modal-trigger";

export default function Home() {
  return (
    <section className="relative min-h-[calc(100vh-200px)] py-8 md:py-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-1/2 right-0 h-44 w-44 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl flex flex-col gap-8 md:gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 items-center">
          <div className="relative mx-auto lg:mx-0">
            <div className="w-44 h-44 md:w-52 md:h-52 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-gray-900">
              <Image
                src="/me.jpg"
                alt="Ashish Gaurav"
                width={208}
                height={208}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-4 border-black" />
          </div>

          <div className="text-center lg:text-left space-y-4">
            <p className="text-xs tracking-[0.2em] uppercase text-default-500">
              Portfolio
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              I build practical digital products for real business workflows.
            </h1>
            <p className="text-lg md:text-xl text-default-500">
              Ashish Gaurav, Python developer focused on Android apps and web
              applications with clean, scalable architecture.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
              <Button
                as={Link}
                href="/projects"
                color="primary"
                size="lg"
                className="rounded-full px-8"
              >
                View Projects
              </Button>
              <Button
                as={Link}
                href="/about"
                variant="bordered"
                size="lg"
                className="rounded-full px-8"
              >
                About Me
              </Button>
              <QuoteModalTrigger />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="rounded-3xl border border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-xl shadow-lg">
            <CardBody className="p-5">
              <p className="text-xs uppercase tracking-[0.15em] text-default-500">
                Current Focus
              </p>
              <p className="mt-2 text-lg font-semibold">Freelancing</p>
              <p className="mt-1 text-default-500 text-sm">
                Building custom business tools and web portals.
              </p>
            </CardBody>
          </Card>

          <Card className="rounded-3xl border border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-xl shadow-lg">
            <CardBody className="p-5">
              <p className="text-xs uppercase tracking-[0.15em] text-default-500">
                Tech Stack
              </p>
              <p className="mt-2 text-lg font-semibold">Python, Django, Next.js</p>
              <p className="mt-1 text-default-500 text-sm">
                Practical full-stack delivery from backend to polished UI.
              </p>
            </CardBody>
          </Card>

          <Card className="rounded-3xl border border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-xl shadow-lg">
            <CardBody className="p-5">
              <p className="text-xs uppercase tracking-[0.15em] text-default-500">
                Explore
              </p>
              <div className="mt-2 flex flex-wrap gap-3 text-sm font-medium">
                <Link href="/projects">Projects</Link>
                <Link href="/certificates">Certificates</Link>
                <Link href="/about">About</Link>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
