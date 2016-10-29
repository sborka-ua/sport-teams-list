
# [Sport-teams-list](http://sborka.kr.ua/sport-teams-list/app/)

> micro app built with **AngularJS** framework

> [Demo](http://sborka.kr.ua/sport-teams-list/app/)

The app shows the easily way of binding and filtering data between HTML table cells and form fields (exactly input, select and checkbox) using AngularJS

## MVC

AngularJS paradigm makes the app flexible due to MVC pattern implementation

### Model

1) teamsListFactory provides an array of sport teams to show it in the teams-list.html

2) listFilterService receives and keeps the parameters from the list-filter.html when user makes changes in the form fields

### View

1) teams-list.html shows the sport teams list

2) list-filter.html shows the form with fields to choose specific filters

### Controller

The directives instantly transfer changes between the views and the models

1) teams-list

2) list-filter

each directive has its own controller


Copyright (c) 2016 [Vadim Zhivitskiy](https://github.com/sborka-ua)