(function() {


    var   Class 		= require('ee-class')
		, assert 		= require('assert');



	var type = require('../')



	describe('Types', function() {
		it('must be detected reliable', function() {
            assert(type.string('s'));
            assert(type.string(new String('s')));

            assert(type.number(-1));
            assert(type.number(new Number(0)));

            assert(type.boolean(false));
            assert(type.boolean(new Boolean(true)));

            assert(type.array([]));
            assert(type.array(new Array()));

            assert(type.object({}));
            assert(!type.object(new String('s')));
            assert(!type.object(null));

            assert(type.symbol(Symbol()));

            assert(type.null(null));

            assert(type.undefined(undefined));
            assert(type.undefined());

            assert(type.function(function(){}));

            assert(type.date(new Date()));

            assert(type.regexp(/s/gi));

            assert(type.error(new Error()));

            assert(type.buffer(new Buffer(12)));
		});
	});
})();
