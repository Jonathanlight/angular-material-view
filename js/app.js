
angular
  .module('BlankApp', ['ngMaterial', 'ngMessages'])
  .config(function($mdThemingProvider){})
  .controller('DemoCtrl', function($scope, $timeout, $mdSidenav, $interval) {

  	var self = this, j= 0, counter = 0;

  	self.toggleLeft = buildToggler('left');
    self.toggleRight = buildToggler('right');
    self.greeting = "Vitae hendrerit eratest.";

    self.user = {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: '0102010000',
      address: '7 rue montaine, Paris, FRANCE',
      donation: 19.99
    };

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }

    self.buildAlert = function () {
    	console.log($scope.user);
	};

    self.mode = 'query';
    self.activated = true;
    self.determinateValue = 30;
    self.determinateValue2 = 30;
    self.showList = [ ];

    /**
     * Turn off or on the 5 themed loaders
     */
    self.toggleActivation = function() {
        if ( !self.activated ) self.showList = [ ];
        if (  self.activated ) {
          j = counter = 0;
          self.determinateValue = 30;
          self.determinateValue2 = 30;
        }
    };

    $interval(function() {
      self.determinateValue += 1;
      self.determinateValue2 += 1.5;

      if (self.determinateValue > 100) self.determinateValue = 30;
      if (self.determinateValue2 > 100) self.determinateValue2 = 30;

        // Incrementally start animation the five (5) Indeterminate,
        // themed progress circular bars

        if ( (j < 2) && !self.showList[j] && self.activated ) {
          self.showList[j] = true;
        }
        if ( counter++ % 4 === 0 ) j++;

        // Show the indicator in the "Used within Containers" after 200ms delay
        if ( j == 2 ) self.contained = "indeterminate";

    }, 100, 0, true);

    $interval(function() {
      self.mode = (self.mode == 'query' ? 'determinate' : 'query');
    }, 7200, 0, true);

        
});
