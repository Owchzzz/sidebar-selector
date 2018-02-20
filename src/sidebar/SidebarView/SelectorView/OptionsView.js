const _ = require('underscore');
const OptionView = require('./OptionView');


class OptionsView {
    constructor(o) {
        if(!o)
        return;
    
        // If the option exists
        if(!o.items)
            return;
        
        var html = _.template(`<div class="options"></div>`);
        this.el = $(html(o));
        var self = this;
        _.forEach(o.items, function(item) {
            var option = new OptionView(item);
            $(self.el).append(option.el);
        });
        if(! o.items.length) {
            $(self.el).append('<h1>No items</h1>');
        }
    }
}
module.exports = OptionsView;