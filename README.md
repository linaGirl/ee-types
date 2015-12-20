# ee-types

Easy and reliable type detection with ES6+ support.


[![npm](https://img.shields.io/npm/dm/ee-types.svg?style=flat-square)](https://www.npmjs.com/package/ee-types)
[![Travis](https://img.shields.io/travis/eventEmitter/ee-types.svg?style=flat-square)](https://travis-ci.org/eventEmitter/ee-types)
[![node](https://img.shields.io/node/v/ee-types.svg?style=flat-square)](https://nodejs.org/)


## API

Explicity test for a type

    types.array([]) // true


Get the type of some input

    types(/[a-z]+/gi) // regexp



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



## Examples


    var types = require('ee-types');


    types.string('nope');                // true
    types.strign(new String('yeah'));    // true


    types(2) // number

    types([]]) // array
    types(new Array()]) // array
    types(new Int8Array()]) // int8Array


    types.promise(Promise.all()) // true

