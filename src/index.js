const config = require('./config');
import Sidebar from './sidebar';


var createSidebar = function(opts) {
    var sidebar = new Sidebar(opts);
    return sidebar.render();
}


 if(! window.jQuery)
     throw '[Sidebar Popup Plugin] => Error Requires jQuery'

 // Declare global jquery
 window.$ = window.jQuery;
 // Declare self for use later in extended function
 // Extend the jQuery functionality
 $.fn.extend({
     sidebarpopup: function(opts) {
         var defaults = {
             items: []
         }
         //opts = $.extend(defaults, opts)
         if(!opts) {
             throw '[Sidebarpopup requires an array of items to initialize';
             return;
         }
         var sidebar = createSidebar({items:opts});
         
         //console.log('sidebar:',sidebar);
         $(this).append(sidebar);

         return this;   
     }
 });
 
 console.log('Extended jQuery with SidebarPopup');
