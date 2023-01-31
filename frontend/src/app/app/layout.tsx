import AppHeader from "@/components/organisms/app-header";
import React from "react";

export default function AppLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
}
