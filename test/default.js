(function() {
    'use strict';

    let Class = require('ee-class');
    let assert = require('assert');
    let type = require('../');



    describe('Type Checking [<ES6]', function() {
        it('Strings', function() {
            assert(type.string('s'));
            assert(type.string(new String('s')));
        });

        it('Numbers', function() {
            assert(type.number(-1));
            assert(type.number(new Number(0)));
            assert(type.number(Infinity));
        });

        it('Booleans', function() {
            assert(type.boolean(false));
            assert(type.boolean(new Boolean(true)));
        });

        it('Arrays', function() {
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

        it('Objects', function() {
            assert(type.object({}));
            assert(!type.object(new String('s')));
            assert(!type.object(null));
            assert(!type.object([]));
            assert(!type.object(new Map()));
            assert(!type.object(new Set()));
            assert(!type.object(new Promise(() => {})));
            assert(!type.object((function* (){yield 1;})()));
        });

        it('Null', function() {
            assert(type.null(null));
        });

        it('Undefined', function() {
            assert(type.undefined(undefined));
            assert(type.undefined());
        });

        it('Function', function() {
            assert(type.function(function(){}));
            assert(type.function(() => {}));
            assert(type.function(function* a() {}));
            assert(!type.function((function* (){yield 1;})()));
        });

        it('Dates', function() {
            assert(type.date(new Date()));
        });

        it('RegExps', function() {
            assert(type.regexp(/s/gi));
        });

        it('Errors', function() {
            assert(type.error(new Error()));
            assert(type.error(new EvalError()));
            assert(type.error(new RangeError()));
            assert(type.error(new ReferenceError()));
            assert(type.error(new SyntaxError()));
            assert(type.error(new TypeError()));
            assert(type.error(new URIError()));
        });

        it('Buffers', function() {
            assert(type.buffer(new Buffer(12)));
        });
    });


    describe('Type Checking [>=ES6]', function() {
        it('Symbols', function() {
            assert(type.symbol(Symbol()));
        });

        it('ArrayBuffers', function() {
            assert(type.arrayBuffer(new ArrayBuffer()));
        });

        it('Maps', function() {
            assert(type.map(new Map()));
        });

        it('Sets', function() {
            assert(type.set(new Set()));
        });

        it('WeakMaps', function() {
            assert(type.weakMap(new WeakMap()));
        });

        it('WeakSets', function() {
            assert(type.weakSet(new WeakSet()));
        });

        it('DataViews', function() {
            assert(type.dataView(new DataView(new ArrayBuffer())));
        });

        it('Promises', function() {
            assert(type.promise(new Promise(() => {})));
            assert(type.promise(Promise.all()));
            assert(type.promise(Promise.resolve()));
        });

        it('Float32Arrays', function() {
            assert(type.float32Array(new Float32Array()));
        });

        it('Float64Arrays', function() {
            assert(type.float64Array(new Float64Array()));
        });

        it('Int8Arrays', function() {
            assert(type.int8Array(new Int8Array()));
        });

        it('Int16Arrays', function() {
            assert(type.int16Array(new Int16Array()));
        });

        it('Int32Arrays', function() {
            assert(type.int32Array(new Int32Array()));
        });

        it('UInt8Arrays', function() {
            assert(type.uInt8Array(new Uint8Array()));
        });

        it('UInt16Arrays', function() {
            assert(type.uInt16Array(new Uint16Array()));
        });

        it('UInt32Arrays', function() {
            assert(type.uInt32Array(new Uint32Array()));
        });

        it('IntArrays', function() {
            assert(type.intArray(new Uint32Array()));
        });

        it('FloatArrays', function() {
            assert(type.floatArray(new Float32Array()));
        });

        it('Uint8ClampedArrays', function() {
            assert(type.uInt8ClampedArray(new Uint8ClampedArray()));
        });

        it('Generators', function() {
            assert(type.generator((function* (){yield 1;})()));
        });
    });
})();
