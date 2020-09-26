# react-terminal-view

> add a simple terminal view with possibility to have typing animation

[![NPM](https://img.shields.io/npm/v/react-terminal-view.svg)](https://www.npmjs.com/package/react-terminal-view) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Install

```bash
npm install --save react-terminal-view
```

# Usage

```jsx
import React, { Component } from "react";
import Terminal from "react-terminal-view";

export default class App extends Component {
  render() {
    let lines = [
      "Hello,",
      "My name's Amine",
      "I'm a full-stack developer",
      "I love everything that's related to new technology",
      "I hope this component has been useful to you"
    ];
    return (
      <div>
        <Terminal lines={lines} />
      </div>
    );
  }
}
```

# Examples

## Result of Example

![Result](https://raw.githubusercontent.com/AmineVolk/react-terminal-view/master/example.gif)

## Reduce and expand window

![Result](https://raw.githubusercontent.com/AmineVolk/react-terminal-view/master/reduce-example.gif)

## Close window

![Result](https://raw.githubusercontent.com/AmineVolk/react-terminal-view/master/close-example.gif)

# Properties

| Propertie             | Description                                 |
| --------------------- | ------------------------------------------- |
| height                | The height of the terminal view             |
| width                 | The width of the terminal view              |
| background            | The background of the terminal's body       |
| textColor             | The text color of the terminal's body       |
| textSize              | The size of the text                        |
| enableTypingAnimation | Enable/disable typing animation of the text |

## License

> You can check out the full license [here](https://github.com/AmineVolk/react-terminal-view/blob/master/LICENSE)

This project is licensed under the terms of the **MIT** license.
