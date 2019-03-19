const ui = require("..");

describe("Koa UI", () => {
  describe("middleware", () => {
    test("flow", () => {
      ui("/docs", {});
    });
  });
});
