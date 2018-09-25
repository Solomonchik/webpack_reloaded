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