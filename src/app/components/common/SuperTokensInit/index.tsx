"use client";
import { frontendConfig } from "@/app/lib/superTokens/frontend";
import React from "react";
import SuperTokensWebJs from "supertokens-web-js";

if (typeof window !== "undefined") {
  // we only want to call this init function on the frontend, so we check typeof window !== 'undefined'
  SuperTokensWebJs.init(frontendConfig());
}

export const SuperTokensInit: React.FC<React.PropsWithChildren<object>> = ({
  children,
}) => {
  return <>{children}</>;
};
