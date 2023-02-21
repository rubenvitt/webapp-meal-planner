import { createApp } from "./app";
import type { PageContextClient } from "./types";
import "./styles.css";

export { render };

async function render(pageContext: PageContextClient) {
  const app = createApp(pageContext);
  app.mount("#app");
}

export const clientRouting = true;
export const prefetchStaticAssets = window.matchMedia("(any-hover: none)")
  .matches
  ? { when: "VIEWPORT" }
  : { when: "HOVER" };
