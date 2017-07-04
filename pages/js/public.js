//font size
(function (doc,win) {
	var docEl = doc.documentElement;
	var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
	var recalc = function () {
		var clientWidth = docEl.clientWidth;
		if (!clientWidth) return;
		docEl.style.fontSize = (clientWidth / 320 * 10).toFixed(1) + 'px';
	};
	recalc();
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
})(document, window);
//nav show and hide
$.fn.navShow = function(options){
    var options = $.extend({
        eventType: "click",
        menu_tag: ".menu_tag",
        nav_menu: ".nav_menu",
        header_main: ".header-main",
        header_fixed: "header-fixed",
        header_mark: ".header-mark",
    },options||{});
    return this.each(function(){
        var _this = $(this);
        _this.find(options.menu_tag).bind(options.eventType, function(){
            _this.find(options.nav_menu).toggle();
            _this.find(options.header_main).toggleClass(options.header_fixed);
        });
        _this.find(options.header_mark).bind(options.eventType, function(){
        	_this.find(options.header_main).removeClass(options.header_fixed);
        	_this.find(options.nav_menu).hide();
        });
    });
}

$(function(){
	$(".header-box").navShow();	
});

// tab切换
$.fn.tabSwitch = function(options){
    var options = $.extend({
        eventType: "hover",
        switchNav: ".switchNav",
        switchCont: ".switchCont",
        active: "active"
    },options||{});
    return this.each(function(){
        var _this = $(this);
        _this.find(options.switchNav).bind(options.eventType, function(){
            var _index = $(this).index();
            $(this).addClass(options.active).siblings(options.switchNav).removeClass(options.active);
            _this.find(options.switchCont).eq(_index).addClass(options.active).siblings(options.switchCont).removeClass(options.active);
        });
    });
};
 