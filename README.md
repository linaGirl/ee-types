# ee-types

Easy and reliable type detection with ES6+ support.

Supported by [joinbox.com](https://joinbox.com/), your swiss node.js & javascript agency :rocket:


[![npm](https://img.shields.io/npm/dm/ee-types.svg?style=flat-square)](https://www.npmjs.com/package/ee-types)
[![Travis](https://img.shields.io/travis/eventEmitter/ee-types.svg?style=flat-square)](https://travis-ci.org/eventEmitter/ee-types)


## Compatibility

For a version supporting older browsers and node version please use ee-types version < 3.0.0.
Compatible with node 10+ (`--experimental-modules` flag) and browsers supporting es modules.



## Importing

***node***
```javascript
import types from 'ee-types';
```


***browser***

from html
```
<script type="module" src="node_modules/ee-types/src/types.mjs"></script>
```

from within a module

```javascript
import types from 'node_modules/ee-types/src/types.mjs';
```



## API

Be aware that the different object types like Maps, Promises and so on are not 
detected as objects but as their respective type. If you need to detect them as 
objects please use the `types.someObject()` method instead of the `types.object()`
method.

Explicitly test for a type.

```javascript
types.array([]) // true
```


Get the type of some variable

```javascript
types(/[a-z]+/gi) // regexp
``` 



## Supported Types

- string
- number
- boolean
- array
- intArray
- floatArray
- object
- function
- symbol
- date
- regexp
- error
- undefined
- buffer
- null
- arrayBuffer
- map
- weakMap
- set
- weakSet
- dataView
- float32Array
- float64Array
- int8Array
- int16Array
- int32Array
- uInt8Array
- uInt16Array
- uInt32Array
- uInt8ClampedArray
- generator
- promise
- someObject


#### Object Types

Since many of the types defined by javascript are just special 
objects that also can be treated as normal objects ee-types has 
a bunch of methods that allow you to handle that correctly.

For example, `Map` is an object, or a custom class where you 
define a getter that returns a specific name for your object:

```javascript
const X = class {
    get [Symbol.toStringTag]() {
        return 'AQL query';;
    }
};

console.log(Object.prototype.toString.call(new X()));
// prints: [object AQL Query]
```

##### Check for a classic object

```javascript
types.object({}); // true
types.object(new Map()); // false

// be aware that if you are not explicitly testing
// for an object any object will be treated as one
types({}) // 'object'
types(new Map()) // 'object'

```


##### Check any type of object

```javascript
types.someObject({}); // true
types.someObject(new Map()); // false
types(new Map()) // 'object'

```



## Examples


```javascript
var types = require('ee-types');


types.string('nope');                // true
types.strign(new String('yeah'));    // true


types(2) // number

types([]]) // array
types(new Array()]) // array
types(new Int8Array()]) // int8Array


types.promise(Promise.all()) // true
```
