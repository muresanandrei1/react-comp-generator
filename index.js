#!/usr/bin/env node
var shell = require("shelljs");
var program = require("commander");

program
  .version('0.1.0')
  .option('--name <name>', 'created folder with name: ')
  .option('-t, --type <type>', 'chose component type: ')
  .option('-c, --connect', 'connect component')
  .parse(process.argv);

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}
const name = capitalize(program.args[0]);

const classComponentConnect = `
import React from "react";
import { connect } from "react-redux";
import "./style.css";

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

const mapDispatchToProps = dispatch => ({
  // dispatch
});

const mapStateToProps = state => ({
  // state
});

export default connect(mapStateToProps, mapDispatchToProps)(${name});
`

const funcComponentConnect = `
import React from "react";
import { connect } from "react-redux";
import "./style.css";

const ${name} = React.createClass({
  render() {
    return (
      <div></div>
    );
  }
});

const mapDispatchToProps = dispatch => ({
  // dispatch
});

const mapStateToProps = state => ({
  // state
});

export default connect(mapStateToProps, mapDispatchToProps)(${name});
`


const funcComponent = `
import React from "react";
import "./style.css";

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
import React from "react";
import "./style.css";

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

switch (program.connect) {
  case true:
    switch (program.type) {
      case "func":
        shell.exec("echo " + `'${funcComponentConnect}'` + ">> ./" + name + "/index.js");
        shell.exec("echo >> ./" + name + "/style.scss");
        shell.exec("echo >> ./" + name + "/style.theme.scss");
        break;
      case "class":
        shell.exec("echo " + `'${classComponentConnect}'` + ">> ./" + name + "/index.js");
        shell.exec("echo >> ./" + name + "/style.scss");
        shell.exec("echo >> ./" + name + "/style.theme.scss");
        break;
      default:
        shell.exec("echo " + `'${classComponentConnect}'` + ">> ./" + name + "/index.js");
        shell.exec("echo >> ./" + name + "/style.scss");
        shell.exec("echo >> ./" + name + "/style.theme.scss");
    }
    break;
  default:
    switch (program.type) {
      case "func":
        shell.exec("echo " + `'${funcComponent}'` + ">> ./" + name + "/index.js");
        shell.exec("echo >> ./" + name + "/style.scss");
        shell.exec("echo >> ./" + name + "/style.theme.scss");
        break;
      case "class":
        shell.exec("echo " + `'${classComponent}'` + ">> ./" + name + "/index.js");
        shell.exec("echo >> ./" + name + "/style.scss");
        shell.exec("echo >> ./" + name + "/style.theme.scss");
        break;
      default:
        shell.exec("echo " + `'${classComponent}'` + ">> ./" + name + "/index.js");
        shell.exec("echo >> ./" + name + "/style.scss");
        shell.exec("echo >> ./" + name + "/style.theme.scss");
    }
    break;
}