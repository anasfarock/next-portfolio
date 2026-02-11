import userData from "@/config/userData";
import TextButton from "../ui/text-button";
import { TechAccessIcon, ZayupIcon } from "../icons";
import Link from "next/link";

const About = () => {
  const { about } = userData;

  // Split the about text into parts
  const splitRegex = /a software engineer/i;
  const parts = about.split(splitRegex);
  const beforeSoftwareEngineer = parts[0];
  const afterSoftwareEngineer = parts[1] || "";
  // previouslyWorkedPart logic removed as it was unused and caused crashes with new data
  const mainPart = afterSoftwareEngineer;

  return (
    <div className="border-b border-border border-dashed">
      <div className="border-x border-border border-dashed p-4 w-full mx-auto space-y-4 py-8 md:py-16">
        <div className="text-muted-foreground text-base tracking-tight">
          {beforeSoftwareEngineer}
          <div className="mt-4">
            A&nbsp;
            <h1 className="inline-block border-foreground/60 text-foreground">
              Software Engineer
            </h1>
            &nbsp;{mainPart}
          </div>

          {/* Previously I worked section */}
          <div className="mt-6">
            <div className="text-muted-foreground leading-relaxed">
              Previously, I worked at&nbsp;
              {/* Techaccess */}
              <Link href="https://www.techaccesspak.com/" target="_blank" rel="noopener noreferrer" className="cursor-pointer inline-flex items-center gap-1.5 mx-1 translate-y-1.5">
                <TechAccessIcon className="size-5.5 border border-[#212121] rounded-sm bg-gradient-to-b from-black to-black/90" />
                <span
                  className="text-sm border-b cursor-pointer border-dashed border-foreground/60 text-foreground hover:text-primary transition-colors"
                >
                  Techaccess
                </span>
              </Link>
              &nbsp;and&nbsp;
              {/* Zayup */}
              <Link href="https://zayup.com/" target="_blank" rel="noopener noreferrer" className="cursor-pointer inline-flex items-center gap-1.5 mx-1 translate-y-0.5">
                <ZayupIcon className="size-4" />
                <span
                  className="text-sm border-b cursor-pointer border-dashed border-foreground/60 text-foreground hover:text-primary transition-colors"
                >
                  Zayup Communications
                </span>
              </Link>
              &nbsp;as Customer Support Executive and Technical Intern.
            </div>
          </div>

          {/* proof of work */}
          <div className="mt-6">
            <div className="text-muted-foreground leading-relaxed">
              Checkout my&nbsp;
              {/* Proof of Work */}
              <Link
                href="/work"
                rel="noopener noreferrer"
                className="border-b cursor-pointer border-dashed border-foreground/60 text-foreground hover:text-primary transition-colors"
              >
                Proof of Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
