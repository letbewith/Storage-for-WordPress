/**
 * Created by lake on 2014-8-13 9:25:45
 * 简化版的 jQuery
 *
 */
(function(global,factory){
    if ( typeof module === "object" && typeof module.exports === "object" ) {
        module.exports = global.document ?
            factory( global, true ) :
            function( w ) {
                if ( !w.document ) {
                    throw new Error( "jQuery requires a window with a document" );
                }
                return factory( w );
            };
    } else { factory( global )  }
})(typeof window !== 'undefined' ? window : this,function(noGlobal){

    var arr = [];

    var slice = arr.slice;

    var concat = arr.concat;

    var push = arr.push;

    var indexOf = arr.indexOf;

    var class2type = {};

    var toString = class2type.toString;

    var hasOwn = class2type.hasOwnProperty;

    var support = {};

    var
        document = window.document,
        version = "2.1.1",

        jQuery = function( selector, context ) {
            return new jQuery.fn.init( selector, context );
        },

        rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        rmsPrefix = /^-ms-/,
        rdashAlpha = /-([\da-z])/gi,
        fcamelCase = function( all, letter ) {
            return letter.toUpperCase();
        };
jQuery.fn = jQuery.prototype = {
    jquery : version,
    constructor: jQuery,
    selector: "",
	length: 0,
	toArray: function() {
		return slice.call( this );
	},
	get: function( num ) {
		return num != null ?
			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :
			// Return all the elements in a clean array
			slice.call( this );
	},
	pushStack: function( elems ) {
		// Build a new jQuery matched element set
		// 创建一个匹配的对象 如果没有就创空的 jQuery 对象 里面没undifend null 
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;
		// Return the newly-formed element set
		return ret;
	},
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},
	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},
	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},
	end: function() {
		return this.prevObject || this.constructor(null);
	},
	push: push,
	sort: arr.sort,
	splice: arr.splice
}

    jQuery.extend = jQuery.fn.extend = function(){

    }


});
