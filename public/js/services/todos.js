angular.module('trumpService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Questions', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/questions');
			},
		}
	}]);
