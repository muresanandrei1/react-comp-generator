install: `npm i -g react-comp-generator`

run: `rcreate -n <name> -t <type>`

types: - func
       - class

Not adding -t param will create a Class component

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