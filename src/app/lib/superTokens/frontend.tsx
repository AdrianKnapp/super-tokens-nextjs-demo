import PasswordlessWebJs from "supertokens-web-js/recipe/passwordless";
import SessionWebJs from "supertokens-web-js/recipe/session";
import { appInfo } from "./appInfo";
import { SuperTokensConfig } from "supertokens-web-js/types";

export const frontendConfig = (): SuperTokensConfig => {
  return {
    appInfo,
    recipeList: [PasswordlessWebJs.init(), SessionWebJs.init()],
  };
};
