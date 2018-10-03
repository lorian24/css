$(function() {
	function load(currency, selector) {
		$.get(
			'https://api.exchangeratesapi.io/latest',
			{ 'base': currency },
			function(curr) {
				$(selector).text(Math.round(curr.rates.RUB))
			}
		);
	}
	
	load('USD', '.usd');
	load('EUR', '.eur');
	
});


