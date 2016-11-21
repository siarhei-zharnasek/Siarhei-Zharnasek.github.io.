# babel-plugin-true

true-false

## Example

**In**

```js
// input code
```

**Out**

```js
"use strict";

// output code
```

## Installation

```sh
$ npm install babel-plugin-true
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["true"]
}
```

### Via CLI

```sh
$ babel --plugins true script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["true"]
});
```
