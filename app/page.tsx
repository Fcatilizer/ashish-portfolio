import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-8 md:py-12">
      {/* Profile Intro */}
      <div className="inline-block max-w-xl text-center">
        <img
          src="logo.jpg"
          alt="Ashish Gaurav"
          className="w-40 h-40 rounded-full mx-auto mb-5 shadow-md border-2 border-primary/30"
        />

        <span className={title()}>I am&nbsp;</span>
        <span className={title({ color: "violet" })}>Ashish Gaurav</span>
        <br />
        <span className={title()}>
          A passionate <span className="text-primary">Python Developer</span>
        </span>

        <div className={subtitle({ class: "mt-4 text-default-600" })}>
          Building innovative <span className="text-primary">Android Apps</span> and{" "}
          <span className="text-primary">Web Applications</span> with clean,
          scalable solutions.
        </div>
      </div>

      {/* CTA Snippet */}
      <div className="mt-6">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span className="flex items-center gap-2">
            Learn more about me
            <Link href="/about">
              <button className="bg-gradient-to-tr from-blue-400 to-violet-400 hover:from-blue-500 hover:to-violet-500 text-white shadow-md rounded-full px-4 py-2 transition">
                About Me
              </button>
            </Link>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
