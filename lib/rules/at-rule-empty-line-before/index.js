"use strict";

const ruleMessages = require("../../utils/ruleMessages");

const ruleName = "at-rule-empty-line-before";

const messages = ruleMessages(ruleName, {
  expected: "Expected empty line before at-rule",
  rejected: "Unexpected empty line before at-rule"
});

const rule = function() {
  return () => {};
};

rule.ruleName = ruleName;
rule.messages = messages;
module.exports = rule;
