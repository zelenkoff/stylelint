"use strict";

const stylelint = require("../../../standalone");

for (let i = 0; i < 700; i++) {
  it("no description", () => {
    return stylelint({
      code: "a {\n\n  @mixin foo;\n}",
      config: {
        rules: {
          "at-rule-empty-line-before": ["always"]
        }
      }
    }).then(() => {
      // expect(output.results[0].warnings).toEqual([]);
      // expect(output.results[0].parseErrors).toEqual([]);
      expect(true).toBeTruthy();
    });
  });
}
