import { PropsWithChildren } from "react";
import { AnalyticsProvider } from "./analytics";
import { QueryProvider } from "./query";

export function Providers(props: PropsWithChildren) {
  return (
    <AnalyticsProvider>
      <QueryProvider>{props.children}</QueryProvider>
    </AnalyticsProvider>
  );
}
