import PlausibleProvider from "next-plausible";
import { SITE_DOMAIN } from "@/utils/site";
import { PropsWithChildren } from "react";

export function AnalyticsProvider(props: PropsWithChildren) {
  return (
    <PlausibleProvider domain={SITE_DOMAIN} trackOutboundLinks={true}>
      {props.children}
    </PlausibleProvider>
  );
}
