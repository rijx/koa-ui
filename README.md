# koa-ui

![build status](https://gitlab.com/rijx/koa-ui/badges/master/build.svg?style=flat) ![test coverage](https://gitlab.com/rijx/koa-ui/badges/master/coverage.svg?style=flat) ![npm version](https://img.shields.io/npm/v/koa-ui.svg) ![minified size](https://img.shields.io/bundlephobia/min/koa-ui.svg) ![MIT licensed](https://img.shields.io/npm/l/koa-ui.svg)

OpenAPI UI / Swagger UI for Koa.

![An example of what the UI looks like](https://swagger.io/swagger/media/Images/Tools/Opensource/Swagger_UI.png?ext=.png)

## Example

```js
const ui = require("koa-ui");
const Koa = require("koa");

const app = new Koa();

const spec = require("./swagger.json");

app.use(ui("/", spec));

app.listen(8080);
```
