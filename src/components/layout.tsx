import { SITE_NAME, SOCIAL_GITHUB, SOCIAL_TWITTER } from "@/utils/site";
import Link from "next/link";
import { PropsWithChildren } from "react";

export function Layout(props: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex p-4">
        <h1 className="text-secondary text-2xl font-bold">{SITE_NAME}</h1>
      </header>

      <main className="flex flex-col flex-1 container max-w-screen-xl mx-auto my-4 px-4">
        {props.children}
      </main>

      <footer className="mx-auto mt-auto p-4 text-center text-neutral/80 text-sm flex items-center gap-2">
        <span className="font-bold">{SITE_NAME}</span>
        <span className="text-secondary">|</span>
        <Link
          href={`https://github.com/${SOCIAL_GITHUB}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </Link>
        <span className="text-secondary">|</span>
        <Link
          href={`https://x.com/${SOCIAL_TWITTER}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {SOCIAL_TWITTER}
        </Link>
      </footer>
    </div>
  );
}
