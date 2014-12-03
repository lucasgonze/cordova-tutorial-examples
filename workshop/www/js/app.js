// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
	var homeTpl = Handlebars.compile($("#home-tpl").html());
	var employeeListTpl = Handlebars.compile($("#employee-list-tpl").html());
	var service = new EmployeeService();
	service.initialize().done(function () {
	    renderHomeView();
	});
	
    /* --------------------------------- Event Registration -------------------------------- */
	document.addEventListener('deviceready', function () {
		StatusBar.overlaysWebView( false );
		StatusBar.backgroundColorByHexString('#ffffff');
		StatusBar.styleDefault();
	    if (navigator.notification) { // Override default HTML alert with native dialog
	      window.alert = function (message) {
	          navigator.notification.alert(
	              message,    // message
	              null,       // callback
	              "Workshop", // title
	              'OK'        // buttonName
	          );
	      };
	  };
      FastClick.attach(document.body);
	}, false);
 
    /* ---------------------------------- Local Functions ---------------------------------- */
	
}());