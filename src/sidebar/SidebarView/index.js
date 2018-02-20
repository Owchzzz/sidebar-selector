const _ = require('underscore');
const SelectorView = require('./SelectorView');

module.exports = {
    template: _.template(`
        <div class="bz-sidebarpopup">
            <div class="bz-selectors"></div>
            <div class="bz-elements"></div>
        </div>
    `),

    initialize(opts) {
        _.bindAll(this,'toggleAllSelectors','toggleSelector');
        this.config = opts;

        this.$el = $('<div>').html(this.template());
        this.$elements = this.$el.find('.bz-elements');
        this.$selectors = this.$el.find('.bz-selectors');
        this.selectors = [];
        this.addElements(opts.items);
        return this.render();
    },

    addElements(items) {
        var self = this;
        _.forEach(items,function(item){
            item.parent = self.$el.find('.bz-sidebarpopup');
            var selector = new SelectorView(item);
            selector.$el.on('click',{selector: selector},self.toggleSelector);
            self.$selectors.append(selector.$el);
            self.selectors.push(selector);
        });

        // Click the first element as default
        self.selectors[0].$el.trigger('click');
    },

    toggleAllSelectors(e) {
        this.$elements.html('');
        this.selectors.forEach((selector) => {
            selector.$el.removeClass('active');
        });
    },
    toggleSelector(e) {

        this.toggleAllSelectors();
        e.data.selector.$el.addClass('active');
        this.$elements.html(e.data.selector.optEl);
    },

    render() {
        return this.$el;
    }
}