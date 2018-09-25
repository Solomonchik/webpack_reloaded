/**
 * Main project javascript file (entry point)
 **/

import '../scss/mein.scss';
import $ from 'jquery';
import 'bootstrap';


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