/**
 * Main project javascript file (entry point)
 **/

import '../scss/mein.scss';
import './_vendor';
import './_app';


$(document).ready(function(){
    if ($) {
        // jQuery is loaded
        console.log("Yeah!");
    } else {
        // jQuery is not loaded
        console.log("Doesn't Work");
    }
});

/////////////////////////////////////////////////////////////////////////////

console.log("hi! Распиздяй!");