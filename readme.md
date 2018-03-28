install: `npm i -g react-comp-generator`

#Commands
Run: 
```shell
$ npm i -g react-comp-generator
```

##Usage
```shell
$ rcreate <name>
```

`-t Chose component type`


###React-Redux  
`-c` Connects the component to redux

###Types: 
  * func
  * class

Not adding `-t` param will create a Class component.

Func type: 
```js
import React from 'react';

const ${name} = React.createClass({
  render() {
    return (
      <div></div>
    );
  }
});

export default ${name};
```

Class type
```js
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
```

#Structure

```
─ComponentName
  │ index.js
  │ style.scss
  │ style.theme.scss
```