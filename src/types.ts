
const types = {
      string:               function(arg: any){ return typeof arg === 'string' || Object.prototype.toString.call(arg) === '[object String]'; }
    , number:               function(arg: any){ return typeof arg === 'number' || Object.prototype.toString.call(arg) === '[object Number]'; }
    , boolean:              function(arg: any){ return typeof arg === 'boolean' || Object.prototype.toString.call(arg) === '[object Boolean]'; }
    , array:                function(arg: any){ return Array.isArray(arg); }
    , intArray:             function(arg: any){ return types.int8Array(arg) || types.int16Array(arg) || types.int32Array(arg) || types.uInt8Array(arg) || types.uInt16Array(arg) || types.uInt32Array(arg) || types.uInt8ClampedArray(arg); }
    , floatArray:           function(arg: any){ return Array.isArray(arg) || types.float32Array(arg); }
    , object:               function(arg: any){ return Object.prototype.toString.call(arg) === '[object Object]' && !types.promise(arg);}
    , someObject:           function(arg: any){ return /\[object [^\]]+\]/i.test(Object.prototype.toString.call(arg));}
    , function:             function(arg: any){ return typeof arg === 'function'; }
    , symbol:               function(arg: any){ return typeof arg === 'symbol'; }
    , date:                 function(arg: any){ return arg instanceof Date && !isNaN(arg.valueOf()); }
    , regexp:               function(arg: any){ return arg instanceof RegExp; }
    , error:                function(arg: any){ return arg instanceof Error; }
    , undefined:            function(arg: any){ return typeof arg === 'undefined'; }
    , buffer:               function(arg: any){ return Buffer.isBuffer(arg); }
    , null:                 function(arg: any){ return null === arg || Object.prototype.toString.call(arg) === '[object Null]'; }
    , arrayBuffer:          function(arg: any){ return Object.prototype.toString.call(arg) === '[object ArrayBuffer]'; }
    , map:                  function(arg: any){ return Object.prototype.toString.call(arg) === '[object Map]'; }
    , weakMap:              function(arg: any){ return Object.prototype.toString.call(arg) === '[object WeakMap]'; }
    , set:                  function(arg: any){ return Object.prototype.toString.call(arg) === '[object Set]'; }
    , weakSet:              function(arg: any){ return Object.prototype.toString.call(arg) === '[object WeakSet]'; }
    , dataView:             function(arg: any){ return Object.prototype.toString.call(arg) === '[object DataView]'; }
    , float32Array:         function(arg: any){ return Object.prototype.toString.call(arg) === '[object Float32Array]'; }
    , float64Array:         function(arg: any){ return Object.prototype.toString.call(arg) === '[object Float64Array]'; }
    , int8Array:            function(arg: any){ return Object.prototype.toString.call(arg) === '[object Int8Array]'; }
    , int16Array:           function(arg: any){ return Object.prototype.toString.call(arg) === '[object Int16Array]'; }
    , int32Array:           function(arg: any){ return Object.prototype.toString.call(arg) === '[object Int32Array]'; }
    , uInt8Array:           function(arg: any){ return Object.prototype.toString.call(arg) === '[object Uint8Array]'; }
    , uInt16Array:          function(arg: any){ return Object.prototype.toString.call(arg) === '[object Uint16Array]'; }
    , uInt32Array:          function(arg: any){ return Object.prototype.toString.call(arg) === '[object Uint32Array]'; }
    , uInt8ClampedArray:    function(arg: any){ return Object.prototype.toString.call(arg) === '[object Uint8ClampedArray]'; }
    , generator:            function(arg: any){ return Object.prototype.toString.call(arg) === '[object Generator]'; }
    , promise:              function(arg: any){ return Object.prototype.toString.call(arg) === '[object Promise]' || (Object.prototype.toString.call(arg) === '[object Object]' && types.function(arg.then) && types.function(arg.catch)); }
    , scalar:               function(arg: any){ return this.string(arg) || this.number(arg) || this.boolean(arg) || this.symbol(arg) || this.date(arg); }
};



// this is the exported method, it returns
// the type as string
const typecheck = function(item: any) {
    return types.string(item) ? 'string' :
           types.number(item) ? 'number' :
           types.boolean(item) ? 'boolean' :
           types.object(item) ? 'object' : 
           types.array(item) ? 'array' :
           types.null(item) ? 'null' :
           types.undefined(item) ? 'undefined' :
           types.function(item) ? 'function' :
           types.date(item) ? 'date' :
           types.regexp(item) ? 'regexp' :
           types.error(item) ? 'error' :
           types.buffer(item) ? 'buffer' :
           types.symbol(item) ? 'symbol' :
           types.map(item) ? 'map' :
           types.weakMap(item) ? 'weakMap' :
           types.set(item) ? 'set' :
           types.weakSet(item) ? 'weakSet' :
           types.promise(item) ? 'promise' :
           types.dataView(item) ? 'dataView' :
           types.float32Array(item) ? 'float32Array' :
           types.float64Array(item) ? 'float64Array' :
           types.int8Array(item) ? 'int8Array' :
           types.int16Array(item) ? 'int16Array' :
           types.int32Array(item) ? 'int32Array' :
           types.generator(item) ? 'generator' :
           types.uInt8Array(item) ? 'uInt8Array' :
           types.uInt16Array(item) ? 'uInt16Array' :
           types.uInt32Array(item) ? 'uInt32Array' :
           types.intArray(item) ? 'intArray' :
           types.floatArray(item) ? 'floatArray' :
           types.uInt8ClampedArray(item) ? 'uInt8ClampedArray' :
           types.arrayBuffer(item) ? 'arrayBuffer' :
           types.someObject(item) ? 'object' : 'unknown';
};

const type = function (item: any): string {
    return typecheck(item);
}

type.prototype.string = types.string;
type.prototype.number = types.number;
type.prototype.boolean = types.boolean; 
type.prototype.array = types.array;
type.prototype.intArray = types.intArray;
type.prototype.floatArray = types.floatArray;
type.prototype.object = types.object;
type.prototype.someObject = types.someObject;
type.prototype.function = types.function;
type.prototype.symbol = types.symbol;
type.prototype.date = types.date;
type.prototype.regexp = types.regexp;
type.prototype.error = types.error;
type.prototype.undefined = types.undefined;
type.prototype.buffer = types.buffer;
type.prototype.null = types.null;
type.prototype.arrayBuffer = types.arrayBuffer;
type.prototype.map = types.map;
type.prototype.weakMap = types.weakMap;
type.prototype.set = types.set;
type.prototype.weakSet = types.weakSet;
type.prototype.dataView = types.dataView;
type.prototype.float32Array = types.float32Array;
type.prototype.float64Array = types.float64Array;
type.prototype.int8Array = types.int8Array;
type.prototype.int16Array = types.int16Array;
type.prototype.int32Array = types.int32Array;
type.prototype.uInt8Array = types.uInt8Array;
type.prototype.uInt16Array = types.uInt16Array;
type.prototype.uInt32Array = types.uInt32Array;
type.prototype.uInt8ClampedArray = types.uInt8ClampedArray;
type.prototype.generator = types.generator;
type.prototype.promise = types.promise;
type.prototype.scalar = types.scalar;


export default type;
