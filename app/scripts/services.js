angular.module('myApp.services', [])
  .service('listFilterService', listFilterService)
  .factory('teamsListFactory', teamsListFactory)
;

function listFilterService() {
	return {
		activeFilters: {},
		searchText: '',
		sportTypes: ['', 'Basketball', 'Hockey', 'Football'],
		cities: ['', 'Dallas', 'Los Angeles', 'Boston', 'New York']
	};
}

function teamsListFactory() {
	return 	teamsList = [
		{
		id: 1, name: 'Dallas Mavericks', sport: 'Basketball',
		city: 'Dallas', featured: true
		}, {
		id: 2, name: 'Dallas Cowboys', sport: 'Football',
		city: 'Dallas', featured: false
		}, {
		id: 3, name: 'New York Knicks', sport: 'Basketball',
		city: 'New York', featured: false
		}, {
		id: 4, name: 'Brooklyn Nets', sport: 'Basketball',
		city: 'New York', featured: false
		}, {
		id: 5, name: 'New York Jets', sport: 'Football',
		city: 'New York', featured: false
		}, {
		id: 6, name: 'New York Giants', sport: 'Football',
		city: 'New York', featured: true
		}, {
		id: 7, name: 'Los Angeles Lakers', sport: 'Basketball',
		city: 'Los Angeles', featured: true
		}, {
		id: 8, name: 'Los Angeles Clippers', sport: 'Basketball',
		city: 'Los Angeles', featured: false
		}, {
		id: 9, name: 'Dallas Stars', sport: 'Hockey',
		city: 'Dallas', featured: false
		}, {
		id: 10, name: 'Boston Bruins', sport: 'Hockey',
		city: 'Boston', featured: true
		}
	];
}

