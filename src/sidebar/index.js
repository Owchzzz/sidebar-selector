const SidebarView = require('./SidebarView/');
const _ = require('underscore');
var template = _.template(
    `<div class="bz-sidebarpopup">
    </div>`);

import styles from "styles/main.scss";

class Sidebar{
    constructor(opts) {
        _.bindAll(this,'render');
        opts.targetB = $('<div>');
        this.view = SidebarView.initialize(opts);
        
        $('body').append(opts.targetB);
    }

    render() {
        return this.view;
    }
}

export { Sidebar as default }