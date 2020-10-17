const { JsiiProject, Semver, Stability } = require('projen');

const project = new JsiiProject({
  name: 'jsii-playground',
  stability: Stability.EXPERIMENTAL,
  compat: true,
  
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
    mavenGroupId: 'com.acme',
    mavenArtifactId: 'jsii-playground',
  }
});

project.synth();
