angular.module('myApp.directives', [])
  .directive('listFilter', listFilter)
  .directive('teamsList', teamsList)
;

function listFilter() {
	var directive = {
		restrict: 'A',
		scope: {},
		controllerAs: 'listFilterCtrl',
		controller: ListFilterCtrl,
		templateUrl: 'views/list-filter.html'
	};
	return directive;
}

function teamsList() {
	var directive = {
		restrict: 'A',
		scope: {},
		controllerAs: 'teamsListCtrl',
		controller: TeamsListCtrl,
		templateUrl: 'views/teams-list.html'
	};
	return directive;
}

