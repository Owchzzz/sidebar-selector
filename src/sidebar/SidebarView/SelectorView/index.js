const _ = require('underscore');
const OptionsView = require('./OptionsView');
var template= _.template(`<div class="selector"><h1 class="title"><%= name %></h1><div class="content"></div>`);
   
class Selector {
    constructor(config) {
        this.config = config;
        this.$el = $(template(config));
        this.options = new OptionsView(config);
        this.optEl = $('<div>').html(this.options.el);
        
        
    }
}

module.exports = Selector;