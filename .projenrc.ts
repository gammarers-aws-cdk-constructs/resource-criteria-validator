import { ProjenCdkConstructLibrary } from '@gammarers/projen-projects';
const project = new ProjenCdkConstructLibrary({
  name: 'resource-criteria-validator',
  description:
    'Helpers for CDK construct resource criteria, including ConstructResourceTagCriteria validation.',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/gammarers-aws-cdk-constructs/resource-criteria-validator.git',
  cdkVersion: '2.232.0',
  devDeps: [
    '@gammarers/projen-projects@^0.8.1',
  ],
  keywords: [
    'aws',
    'cdk',
    'construct',
    'resource',
    'criteria',
  ],
  releaseToNpm: true,
  npmTrustedPublishing: true,
});
project.synth();
