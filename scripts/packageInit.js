const fs = require('fs');

const argv = require('minimist')(process.argv.slice(2));
const replace = require('replace-in-file');

if (!argv.projectname || !argv.packagename) {
  console.log('Please provide "projectname" and "packagename" arguments');
  process.exit(1);
}

const projectName = argv.projectname.toString();
const packageName = argv.packagename.toString();

fs.rename('./package/project-name', './package/' + projectName, (error) => {
  if (error) {
    console.log('Failed to rename package folder');
  } else {
    console.log('Package folder renamed');
  }
});

let fileReplacementOptions = {
  files: [
    './package/' + projectName + '/*',
    './package/' + projectName + '/src/public-api.ts',
    'package.json',
    'angular.json',
    'azure-pipelines.yml',
    'tsconfig.json'
  ],
  from: /project-name/g,
  to: projectName
};

replace(fileReplacementOptions).then((results) => {
  console.log('Succesfully replaced project-name in files.');
  console.log('Replacement results:', results);

  fileReplacementOptions = {
    files: ['package.json', './package/' + projectName + '/package.json'],
    from: /package-name/g,
    to: packageName
  };

  replace(fileReplacementOptions).then((results) => {
    console.log('Succesfully replaced package-name in files.');
    console.log('Replacement results:', results);
  });
});

fs.unlink('package-lock.json', (error) => {
  if (error) {
    console.log('Warning!!! Failed to delete package-lock.json, please check and delete it manually!');
  } else {
    console.log('Succesfully deleted package-lock.json to avoid naming collisinos');
  }
});
