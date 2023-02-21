// Note that this file isn't processed by Vite, see https://github.com/brillout/vite-plugin-ssr/issues/562

import express from "express";
import compression from "compression";
import { renderPage } from "vite-plugin-ssr";
import { root } from "./root.js";
import { PageContextAdded } from "../renderer/types";

const isProduction = process.env.NODE_ENV === "production";

startServer();

async function startServer() {
  const app = express();

  app.use(compression());

  if (isProduction) {
    const sirv = (await import("sirv")).default;
    app.use(sirv(`${root}/dist/client`));
  } else {
    const vite = await import("vite");
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true },
      })
    ).middlewares;
    app.use(viteDevMiddleware);
  }

  app.get("*", async (req, res, next) => {
    const pageContextInit = {
      urlOriginal: req.originalUrl,
    };
    const pageContext = await renderPage<PageContextAdded, {}>(pageContextInit);
    const { httpResponse } = pageContext;
    if (!httpResponse) return next();

    if (pageContext.redirectTo) {
      if (typeof pageContext.redirectTo === "string") {
        res.redirect(302, pageContext.redirectTo);
        return;
      }
      const { statusCode, path } = pageContext.redirectTo;
      console.log(`Redirecting to ${path}`);
      res.redirect(statusCode ?? 302, path);
      return;
    }

    const { body, statusCode, contentType, earlyHints } = httpResponse;
    if (res.writeEarlyHints)
      res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) });
    res.status(statusCode).type(contentType).send(body);
  });

  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
}
