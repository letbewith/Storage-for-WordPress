/**
 * Created by Administrator on 2014-8-13 9:25:45
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
    length: 0
}


});
