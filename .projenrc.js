const { JsiiProject } = require('projen');

const project = new JsiiProject({
  "name": "jsii-playground",
  "authorName": "Ej Wang",
  "authorEmail": "ej.wang.dev@gmail.com",
  "repository": "https://github.com/flyingImer/jsii-playground.git"
});

project.synth();
