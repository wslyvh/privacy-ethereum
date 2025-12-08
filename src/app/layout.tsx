import { PropsWithChildren } from "react";
import { Layout } from "@/components/layout";
import { Providers } from "@/context";
import { Viewport } from "next/types";
import {
  SITE_DESCRIPTION,
  SITE_INFO,
  SITE_NAME,
  SITE_URL,
  SOCIAL_TWITTER,
} from "@/utils/site";
import "@/assets/globals.css";

export async function generateMetadata() {
  return {
    applicationName: SITE_NAME,
    title: {
      default: `${SITE_NAME} · ${SITE_INFO}`,
      template: `%s · ${SITE_NAME}`,
    },
    metadataBase: new URL(SITE_URL),
    description: SITE_DESCRIPTION,
    openGraph: {
      type: "website",
      title: SITE_NAME,
      siteName: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      images: `${SITE_URL}/og.png`,
    },
    twitter: {
      card: "summary_large_image",
      site: SOCIAL_TWITTER,
      title: SITE_NAME,
      description: SITE_DESCRIPTION,
      images: `${SITE_URL}/og.png`,
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1.0,
  viewportFit: "cover",
  themeColor: "#000000",
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          <Layout>{props.children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
