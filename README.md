
# [Sport-teams-list](http://sborka.kr.ua/sport-teams-list/app/)

> micro app built with **AngularJS 1.5.8** and **Twitter Bootstrap 3**

> [Demo](http://sborka.kr.ua/sport-teams-list/app/)

The app shows the easily way of binding and filtering data between HTML table cells and form fields (exactly input, select and checkbox) using AngularJS

## MVC

AngularJS paradigm makes the app flexible due to MVC pattern implementation

### Model

1) teamsListFactory provides the sport teams array

2) listFilterService keeps the specific options that it could recieve from list-filter directive

### View

1) teams-list.html receives the sport teams list and shows all the data that matches to specific options chosen by user in the form fields

2) list-filter.html shows the form with specific options

### Controller

1) teams-list directive:
 - receives the sport teams array from teamsListFactory;
 - checks for specific options that could be stored in listFilterService (if user made changes in the list-filter.html form fields);
 - transfer all that data and options to teams-list.html via teamsListCtrl controller

2) list-filter directive:
 - receives the specific options from list-filter.html form;
 - transfer that data to listFilterService via listFilterCtrl controller

Copyright (c) 2016 [Vadim Zhivitskiy](https://github.com/sborka-ua)