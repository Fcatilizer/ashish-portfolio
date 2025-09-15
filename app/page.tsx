import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { title, subtitle } from "@/components/primitives";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 py-12 md:py-20 px-4">
      {/* Profile Intro */}
      <div className="text-center max-w-2xl">
        <div className="relative inline-block">
          <img
            src="logo.jpg"
            alt="Ashish Gaurav"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-2xl backdrop-blur-lg"
          />
          <span className="absolute bottom-4 right-4 w-4 h-4 bg-green-400 border-2 border-background rounded-full shadow-sm"></span>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          <span className={title()}>I am </span>
          <span className={title({ color: "violet" })}>Ashish Gaurav</span>
        </h1>

        <p className="mt-3 text-lg md:text-xl text-default-600 font-medium">
          A passionate{" "}
          <span className="text-primary font-semibold">Python Developer</span>
        </p>

        <p
          className={subtitle({
            class: "mt-4 text-default-500 leading-relaxed",
          })}
        >
          Building innovative{" "}
          <span className="text-primary">Android Apps</span> and{" "}
          <span className="text-primary">Web Applications</span> with clean,
          scalable solutions.
        </p>
      </div>

      {/* CTA Snippet */}
      <div className="flex flex-col items-center gap-4">
        <Snippet
          hideCopyButton
          hideSymbol
          variant="bordered"
          className="bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl shadow-lg"
        >
          <span className="flex items-center gap-2 text-sm text-default-500">
            Learn more about me
          </span>
        </Snippet>

        <Link href="/about">
          <Button
            radius="full"
            className="bg-gradient-to-tr from-blue-500 to-violet-500 text-white shadow-lg shadow-black/20 hover:scale-105 transition-transform"
          >
            About Me
          </Button>
        </Link>
      </div>
    </section>
  );
}
