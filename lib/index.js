const compose = require("koa-compose");
const mount = require("koa-mount");
const openApiUI = require("openapi-ui");
const Router = require("koa-router");
const staticHandler = require("koa-static");

function installSwaggerMiddleware(basePath, spec) {
  const router = new Router();

  router.get("/json", ctx => {
    ctx.body = spec;
  });

  const index = openApiUI.generateIndex({
    baseUrl: basePath,
    title: (spec && spec.info && spec.info.title) || null,
    url: `${basePath.replace(/\/$/, "")}/json`
  });

  router.get("/", ctx => {
    ctx.body = index;
  });

  const app = compose([
    router.routes(),
    router.allowedMethods(),
    staticHandler(openApiUI.getAssetsPath())
  ]);

  if (basePath && basePath != "/") {
    return mount(basePath, app);
  } else {
    return app;
  }
}

module.exports = installSwaggerMiddleware;
