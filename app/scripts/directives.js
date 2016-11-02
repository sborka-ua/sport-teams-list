angular.module('myApp.directives', [])
  .directive('listFilter', listFilter)
  .directive('teamsList', teamsList)
;

/**
 * listFilter - показывает форму с фильтрами и реагирует на выбранные
 * 	юзером options в поле select, клик по checkbox или при вводе текста в input.
 *	сервис featuredClickService делает более удобным клик по checkbox 'featured' 
 *
 * teamsList - показывает список спортивных команд в зависимости от выбранных юзером фильтров
 */

function listFilter() {
	var directive = {
		restrict: 'A',
		scope: {},
		templateUrl: 'views/list-filter.html',
		controllerAs: 'listFilterCtrl',
		controller: function (listFilterService,
							  featuredClickService
		){
			this.listFilterService = listFilterService;
			featuredClickService();
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