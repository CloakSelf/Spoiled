(function($) {
	'use strict';

	function init() {
		$('.spoilers-button').click(function() {
			$(this).parents('.spoilers').children('.spoilers-body').toggle();
			$(this).children().toggle();
		});
	}

	$(init);
}(this.jQuery));
