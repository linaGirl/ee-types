'use strict';

import section, {SpecReporter} from 'section-tests';
import assert from 'assert';
import type from '../';


section.use(new SpecReporter());



section('Type Checking [<ES6]', (section) =>{
    section.test('Strings', () => {
        assert(type.string('s'));
        assert(type.string(new String('s')));
    });

    section.test('Numbers', () => {
        assert(type.number(-1));
        assert(type.number(new Number(0)));
        assert(type.number(Infinity));
    });

    section.test('Booleans', () => {
        assert(type.boolean(false));
        assert(type.boolean(new Boolean(true)));
    });

    section.test('Arrays', () => {
        assert(type.array([]));
        assert(type.array(new Array()));
        assert(!type.array(new Float32Array()));
        assert(!type.array(new Float64Array()));
        assert(!type.array(new Int8Array()));
        assert(!type.array(new Int16Array()));
        assert(!type.array(new Int32Array()));
        assert(!type.array(new Uint8Array()));
        assert(!type.array(new Uint16Array()));
        assert(!type.array(new Uint32Array()));
        assert(!type.array(new Uint8ClampedArray()));
    });

    section.test('Objects', () => {
        assert(type.object({}));
        assert(!type.object(new String('s')));
        assert(!type.object(null));
        assert(!type.object([]));
        assert(!type.object(new Map()));
        assert(!type.object(new Set()));
        assert(!type.object(new Promise(() => {})));
        assert(!type.object((function* (){yield 1;})()));
    });

    section.test('Null', () => {
        assert(type.null(null));
    });

    section.test('Undefined', () => {
        assert(type.undefined(undefined));
        assert(type.undefined());
    });

    section.test('Function', () => {
        assert(type.function(function(){}));
        assert(type.function(() => {}));
        assert(type.function(function* a() {}));
        assert(!type.function((function* (){yield 1;})()));
    });

    section.test('Dates', () => {
        assert(type.date(new Date()));
    });

    section.test('RegExps', () => {
        assert(type.regexp(/s/gi));
    });

    section.test('Errors', () => {
        assert(type.error(new Error()));
        assert(type.error(new EvalError()));
        assert(type.error(new RangeError()));
        assert(type.error(new ReferenceError()));
        assert(type.error(new SyntaxError()));
        assert(type.error(new TypeError()));
        assert(type.error(new URIError()));
    });

    section.test('Buffers', () => {
        assert(type.buffer(new Buffer(12)));
    });
});


section('Type Checking [>=ES6]', (section) => {
    section.test('Symbols', () => {
        assert(type.symbol(Symbol()));
    });

    section.test('ArrayBuffers', () => {
        assert(type.arrayBuffer(new ArrayBuffer()));
    });

    section.test('Maps', () => {
        assert(type.map(new Map()));
    });

    section.test('Sets', () => {
        assert(type.set(new Set()));
    });

    section.test('WeakMaps', () => {
        assert(type.weakMap(new WeakMap()));
    });

    section.test('WeakSets', () => {
        assert(type.weakSet(new WeakSet()));
    });

    section.test('DataViews', () => {
        assert(type.dataView(new DataView(new ArrayBuffer())));
    });

    section.test('Promises', () => {
        assert(type.promise(new Promise(() => {})));
        assert(type.promise(Promise.all([])));
        assert(type.promise(Promise.resolve()));
    });

    section.test('Float32Arrays', () => {
        assert(type.float32Array(new Float32Array()));
    });

    section.test('Float64Arrays', () => {
        assert(type.float64Array(new Float64Array()));
    });

    section.test('Int8Arrays', () => {
        assert(type.int8Array(new Int8Array()));
    });

    section.test('Int16Arrays', () => {
        assert(type.int16Array(new Int16Array()));
    });

    section.test('Int32Arrays', () => {
        assert(type.int32Array(new Int32Array()));
    });

    section.test('UInt8Arrays', () => {
        assert(type.uInt8Array(new Uint8Array()));
    });

    section.test('UInt16Arrays', () => {
        assert(type.uInt16Array(new Uint16Array()));
    });

    section.test('UInt32Arrays', () => {
        assert(type.uInt32Array(new Uint32Array()));
    });

    section.test('IntArrays', () => {
        assert(type.intArray(new Uint32Array()));
    });

    section.test('FloatArrays', () => {
        assert(type.floatArray(new Float32Array()));
    });

    section.test('Uint8ClampedArrays', () => {
        assert(type.uInt8ClampedArray(new Uint8ClampedArray()));
    });

    section.test('Generators', () => {
        assert(type.generator((function* (){yield 1;})()));
    });

    section.test('Promises', () => {
        assert(type.promise(Promise.resolve()));
    });

    section.test('someObject', () => {
        const X = class {
            get [Symbol.toStringTag]() {
                return 'AQL query';;
            }
        };

        assert(!type.object(new X));
        assert(type.someObject(new X));
        assert.equal(type(new X), 'object');
    });
});
