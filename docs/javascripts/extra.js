window.onload = function() {
	Countly.init({
		app_key: '0aa00941e616694b98ef57839a26afee4758cc5e', // xmas-docs
		url: 'https://try.count.ly'
	});

	Countly.track_sessions();
	// Countly.track_pageview(); // won't work with SPA (navigation.instant feature)
	Countly.track_links();
	Countly.track_clicks(); // enterprise only
	Countly.track_scrolls(); // enterprise only
	Countly.track_errors();

	Countly.enable_feedback({
		'widgets': ['5f762b92c8a81567c38420c0']
	});

	// Countly.get_available_feedback_widgets(function (countlyPresentableFeedback, err) {
	// 	if (err) {
	// 		console.log(err);
	// 		return;
	// 	}
	// 	let countlyFeedbackWidget = countlyPresentableFeedback[0];		
	// 	Countly.present_feedback_widget(countlyFeedbackWidget);
	// });

	app.location$.subscribe(function (url) {
		Countly.track_pageview(url.pathname); // works with SPA/instant feature
	});

	app.document$.subscribe(function () {
		let tables = document.querySelectorAll('article table');
		tables.forEach(function (table) {
			new Tablesort(table);
		});
	})

};

function analytics_opt_out() {
	let confirmation = confirm('Are you sure you want to opt-out?\nI promise I\'m not evil!')

	if (confirmation) {
		Countly.opt_out();
		alert('You have opted-out of anonymous analytical data collection.');
	}
}