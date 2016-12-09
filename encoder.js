/**
 * Author: Benjamin Holdermann
 * EMail: B.Holdermann@iXenso.com
 * Description: Konvertiert Sonderzeichen zur Uebertragung an den Webdienst.
 * 
 */
 
/** 
 * Charset:ISO-8859-1
 * @param {type} c
 * @returns {Boolean}
 */
function containsChar(c) {
    "use strict";
    return c.charCodeAt(0) < 256;
}

/**
 * Transforms <>"&\' in input string
 * @param {type} input
 * @returns {String}
 */
function encode(input) {
    var output = "";
    for (var i = 0; i < input.length; i++) { //iterate over input string
        var j = '<>"&\''.indexOf(input.charAt(i));
        if (j !== -1) {
            output += '&' + ['lt', 'gt', 'quot', 'amp', '#39'][j] + ';';
        } else if (!containsChar(input.charAt(i))) {
            output += '&#' + input.charCodeAt(i) + ';';
        } else {
            output += input.charAt(i);
        }
    }
    return output;
}