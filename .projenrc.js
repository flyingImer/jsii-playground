const { JsiiProject, Semver } = require('projen');

const project = new JsiiProject({
  name: 'jsii-playground',
  stability: 'experimental',
  
  authorName: 'Ej Wang',
  authorEmail: 'ej.wang.dev@gmail.com',
  repository: 'https://github.com/flyingImer/jsii-playground.git',

  dependencies: {
    'aws-sdk': Semver.caret('2.708.0'),
  },
  bundledDependencies: [
    'aws-sdk',
  ],

  java: {
    javaPackage: 'com.acme.hello',
    mavenGroupId: 'com.acme.hello',
    mavenArtifactId: 'jsii-playground',
  }
});

project.synth();
