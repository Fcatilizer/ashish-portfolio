import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
// import { Code } from "@nextui-org/code";
// import { button as buttonStyles } from "@nextui-org/theme";

// import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
// import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">

        <img src="logo.jpg" alt="Ashish Gaurav" className="w-40 h-40 rounded-full mx-auto mb-4" />
        
        <span className={title()}>I am&nbsp;</span>
        <span className={title({ color: "violet" })}>Ashish Gaurav&nbsp;</span>
        <br />
        <span className={title()}>
          A passionate <span className="text-primary">Frontend Developer</span>
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Intereseted in both Android App and Web Development
        </div>
      </div>

      

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Learn About Me More. 
            <button
              className="bg-gradient-to-tr from-blue-300 to-slate-300 text-white shadow-lg rounded-full px-2 py-2 ml-2"
            >
              <Link href="/about">
                <span style={{ color: "white" }}>About Me</span>
              </Link>
            </button>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
