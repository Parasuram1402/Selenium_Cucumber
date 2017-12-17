$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyApplication.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 19,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 21,
  "name": "Test Mercury Login",
  "description": "",
  "id": "test-mercury-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 23,
  "name": "Positive Login",
  "description": "",
  "id": "test-mercury-login;positive-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "Open Mercury URL",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I Give Valid Credentials",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Click Sign_In",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Validate Flight Finder",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.open_Mercury_URL()"
});
formatter.result({
  "duration": 9834148335,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_Give_Valid_Credentials()"
});
formatter.result({
  "duration": 244919312,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.click_Sign_In()"
});
formatter.result({
  "duration": 3711807673,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_Validate_Flight_Finder()"
});
formatter.result({
  "duration": 53920956,
  "status": "passed"
});
});