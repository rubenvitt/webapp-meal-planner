import { OnBeforeRenderResult } from "../../renderer/types";

export function onBeforeRender(): OnBeforeRenderResult {
  return {
    pageContext: {
      redirectTo: "/app/home",
    },
  };
}
