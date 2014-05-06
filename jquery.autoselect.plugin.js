(function($) {
	
	$.fn.autoselect = function () {
		return this.each(function() {
			$(this).focus(function(ev) {
				if (ev.isSimulated) {
					var that = this;
					setTimeout(function() { that.select(); }, 100);
				}
			});
		});
	};
	
})(jQuery);