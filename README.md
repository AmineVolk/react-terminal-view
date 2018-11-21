# react-terminal-view

> add terminal view with possibility to have typing animation

[![NPM](https://img.shields.io/npm/v/react-terminal-view.svg)](https://www.npmjs.com/package/react-terminal-view) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-terminal-view
```

## Usage

```jsx
import React, { Component } from "react";
import Terminal from "react-terminal-view";

export default class App extends Component {
  render() {
    return (
      <div>
        <Terminal
          line1="Hello"
          line2="My name's Amine"
          line3="I'm a full-stack developer"
          line4="I love everything that's related to new technology"
          line5="I hope this component has been useful to you"
        />
      </div>
    );
  }
}
```

## Result of Example

![](./Result.gif)

## Properties

| Propertie             | Description                             |
| --------------------- | --------------------------------------- |
| height                | The height of the terminal view         |
| width                 | The width of the terminal view          |
| background            | The background of terminal body         |
| textColor             | The color of Text in terminal body      |
| textSize              | The size of text                        |
| enableTypingAnimation | Enable/desable typing animation fortext |

## License

MIT © [AmineVolk](https://github.com/AmineVolk)
