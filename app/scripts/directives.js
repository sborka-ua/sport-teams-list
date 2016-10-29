angular.module('myApp.directives', [])
  .directive('listFilter', listFilter)
  .directive('teamsList', teamsList)
;

function listFilter() {
	var directive = {
		restrict: 'A',
		scope: {},
		templateUrl: 'views/list-filter.html',
		controllerAs: 'listFilterCtrl',
		controller: function (listFilterService) {
			this.listFilterService = listFilterService;
		}
	};
	return directive;
}

function teamsList() {
	var directive = {
		restrict: 'A',
		scope: {},
		templateUrl: 'views/teams-list.html',
		controllerAs: 'teamsListCtrl',
		controller: function (teamsListFactory, listFilterService) {
			this.teamsList = teamsList;
			this.listFilterService = listFilterService;
		}
	};
	return directive;
}