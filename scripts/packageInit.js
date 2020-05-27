const fs = require('fs');
const glob = require('glob');

const argv = require('minimist')(process.argv.slice(2));
const replace = require('replace-in-file');

const projectName = argv.prjectname.toString();
const packageName = argv.packagename.toString();

if (!projectName || !packageName) {
  process.exit(1);
}

fs.rename('./package/project-name', './package/' + projectName, (error) => {
  if (error) {
    console.log('Failed to rename package folder');
  } else {
    console.log('Package folder renamed');
  }
});

let fileReplacementOptions = {
  files: '**',
  from: /project-name/g,
  to: projectName
};

replace(fileReplacementOptions).then((results) => {
  console.log('Succesfully replaced project-name in files.');
  console.log('Replacement results:', results);
});

fileReplacementOptions = {
  files: '**',
  from: /package-name/g,
  to: packageName
};

replace(fileReplacementOptions).then((results) => {
  console.log('Succesfully replaced package-name in files.');
  console.log('Replacement results:', results);
});
