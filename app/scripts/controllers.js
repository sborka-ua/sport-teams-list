angular.module('myApp.controllers', [])
;

function ListFilterCtrl(listFilterService) {
	this.listFilterService = listFilterService;
}

function TeamsListCtrl(teamsListFactory, listFilterService) {
	this.teamsList = teamsList;
	this.listFilterService = listFilterService;
}

