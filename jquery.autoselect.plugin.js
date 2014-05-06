(function($) {
	
	$.fn.autoselect = function (filterCallback) {
		return this.each(function() {
			$(this).keyup(function(ev){
				var currentValue = filterCallback.apply(this);
				$(this).data('currentValue', currentValue);
				if (typeof this.innerText == 'undefined') {
					$(this).val(currentValue);
				} else {
					var selectionStart = this.selectionStart;
					var selectionEnd = this.selectionEnd;
					try {
						this.innerText = val;
					} catch (e) {
						this.value = val;
					}
					this.selectionStart = selectionStart;
					this.selectionEnd = selectionEnd;
				}
			}).focusin(function() {
				if ($.browser.safari) {
					var previousValue = $(this).val();
					$(this).data('previousValue', previousValue);
					$(this).data('currentValue', previousValue);
				}
			}).focusout(function() {
				if ($.browser.safari) {
					var previousValue = $(this).data('previousValue');
					var currentValue = $(this).data('currentValue');
					if (previousValue != currentValue) {
						$(this).trigger('change');
					}
				}
			});
		});
	};
	
})(jQuery);