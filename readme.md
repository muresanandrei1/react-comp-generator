install: `npm i -g react-comp-generator`

#Commands
run: `rcreate <name>`

`-t Chose component type`

types: - func
       - class

Not adding -t param will create a Class component

`-c Connects the component to redux`

func type: 
```
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
class type
```
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