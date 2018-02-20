const _ = require('underscore');
const fa = require('fontawesome');

class OptionView {

    constructor(o) {
        const opts = this.opts = o;
        if(!opts) {
            return;
        }
    
        var template = _.template(`<div class="option">
            <div class="bz-row">
                <div class="bz-box-50 center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoTpV5mYFvydQVsNvwuM6Q7On_-Bl3PgyKM-5WYW_z9RmpbakWSw"/>
                    $<%= hourly%> | <%= jobs%> Jobs
                </div>
                <div class="bz-box-50">
                    <h2><%= name%></h2>
                    <h3><%= role%></h3>
                    <p><%= desc%></p>
                    <%= rating.html()%>
                </div>
            </div>
    
            <div class="bz-row">
                <% _.each(actions, function(ac){%>
                    <a href="<%= ac.action%>" class="btn <%=ac.btn%>"><%=ac.name%></a>    
                <%})%>
            </div>
            
        </div>`);
    
        
        var rating = $('<span>');
        for(var i = 0; i < 5; i ++) {
            var font = $('<i>');
            if(i < opts.rating)
                $(font).addClass('fas').addClass('fa-star');
            else
                $(font).addClass('far').addClass('fa-star');
    
            $(rating).append(font);
        }
        opts.rating = rating;
        this.el = $(template(opts));
    
    }
}
module.exports = OptionView;