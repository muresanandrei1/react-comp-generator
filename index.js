#!/usr/bin/env node
var shell = require("shelljs");
var program = require("commander");

program
  .version('0.1.0')
  .option('-n, --name <name>', 'created folder with name: ')
  .option('-t, --type <type>', 'chose component type: ')
  .parse(process.argv);

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}
const name = capitalize(program.name);

const funcComponent = `
import React from 'react';

const ${name} = React.createClass({
  render() {
    return (
      <div></div>
    );
  }
});

export default ${name};
`;

const classComponent = `
import React from 'react';

class ${name} extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div></div>
    );
  }
}

export default ${name};
`;
shell.exec("mkdir " + name);

switch (program.type) {
  case "func": 
    shell.exec("echo " + `'${funcComponent}'` + ">> ./" + name + "/index.js");
    break;
  case "class":
    shell.exec("echo " + `'${classComponent}'` + ">> ./" + name + "/index.js");
    break;
  default:
    shell.echo("Not a valid component type")
}