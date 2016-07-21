angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('golf-course/golf-course.tpl.html','<div class="text-center">\n\n  <div class="page-header">\n    <h1>Search for a golf</h1>\n  </div>\n\n  <div class="alert alert-info text-center" role="alert" ng-if="!$ctrl.golfsListReady">\n  A moment, please,<br/>golfs list is being loaded...\n  </div>\n\n  <div class="form-group form-group-lg" ng-class="{hidden: !$ctrl.golfsListReady}">\n    <input class="form-control" type="text" id="searchGolf" ng-model="$ctrl.golfClub.name" placeholder="Enter golf name"/>\n  </div>\n\n  <a href="/#!/players"\n     class="btn btn-success btn-block"\n     ng-repeat="course in $ctrl.golfClub.terrains"\n     ng-class="{active: course.code == $ctrl.golfCourse.code}"\n     ng-click="$ctrl.submit(course.code)">\n      {{course.name}}\n  </a>\n\n</div>\n');
$templateCache.put('players/players.tpl.html','<div class="page-header text-center">\n  <h1>Set players</h1>\n</div>\n\n<div class="form-inline well well-sm text-center player-add-player-form" ng-repeat="player in $ctrl.players">\n  <div class="form-group player-name">\n    <input type="text" class="form-control" ng-model="player.name" placeholder="Nom du joueur"/>\n  </div>\n  \n  <div class="form-group player-index">\n    <input type="number" class="form-control" ng-model="player.index" placeholder="Index" min="0" max="54"/>\n  </div>\n  \n  <div class="form-group player-gender">\n    <div class="btn-group" data-toggle="buttons">\n      <label class="btn btn-default man" ng-class="{active: player.gender == \'man\'}" ng-click="$ctrl.updateGender(player.id,\'man\')">\n        <input type="radio" ng-name="\'gender\'+player.id" value="man" ng-model="player.gender"> \u2642\n      </label>\n      <label class="btn btn-default woman" ng-class="{active: player.gender == \'woman\'}" ng-click="$ctrl.updateGender(player.id,\'woman\')">\n        <input type="radio" ng-name="\'gender\'+player.id" value="woman" ng-model="player.gender"> \u2640\n      </label>\n    </div>\n  </div>\n  \n  <div class="form-group player-tee">\n    <div class="btn-group" data-toggle="buttons">\n      <label class="btn teeBlack" ng-class="{active: player.tee == \'black\'}" ng-click="$ctrl.updateTee(player.id,\'black\')">\n        <input type="radio" ng-name="tee+$player.id" value="black" ng-model="player.tee">&nbsp;\n      </label>\n      <label class="btn teeWhite" ng-class="{active: player.tee == \'white\'}" ng-click="$ctrl.updateTee(player.id,\'white\')">\n        <input type="radio" ng-name="tee+$player.id" value="white" ng-model="player.tee">&nbsp;\n      </label>\n      <label class="btn teeYellow" ng-class="{active: player.tee == \'yellow\'}" ng-click="$ctrl.updateTee(player.id,\'yellow\')">\n        <input type="radio" ng-name="tee+$player.id" value="yellow" ng-model="player.tee">&nbsp;\n      </label>\n      <label class="btn teeBlue" ng-class="{active: player.tee == \'blue\'}" ng-click="$ctrl.updateTee(player.id,\'blue\')">\n        <input type="radio" ng-name="tee+$player.id" value="blue" ng-model="player.tee">&nbsp;\n      </label>\n      <label class="btn teeRed" ng-class="{active: player.tee == \'red\'}" ng-click="$ctrl.updateTee(player.id,\'red\')">\n        <input type="radio" ng-name="tee+$player.id" value="red" ng-model="player.tee">&nbsp;\n      </label>\n    </div>\n  </div>\n  \n  <div class="btn-group pull-right">\n    <button class="btn btn-danger" ng-click="$ctrl.removePlayer(player.id)" ng-class="{hidden: $ctrl.players.length<2}"> X </button>\n  </div>\n  \n</div>\n\n<div class="form-group">\n  <button class="btn btn-default btn-block" ng-click="$ctrl.addPlayer()" ng-class="{hidden: $ctrl.players.length>3}">Add a player</button>\n</div>\n\n<div class="form-group">\n  <a href="/#!/golf" class="btn btn-warning" ng-click="$ctrl.updatePlayersService()">Back</a>\n\n  <a href="/#!/scorecard" class="btn btn-success pull-right" ng-click="$ctrl.updatePlayersService()">Start Game</a>\n</div>\n');
$templateCache.put('score-card/score-card.tpl.html','<!--\n<div>\nGolf: {{$ctrl.golf.name}}<br/>\nParcours: {{$ctrl.course.name}}\n</div>\n-->\n<div ng-if="!$ctrl.showTotal" class="text-center">\n  <div class="page-header">\n    <h2>Hole {{$ctrl.currentHole}}<br/><small>Par {{$ctrl.course.tees[0].holes[$ctrl.currentHole].par}} - Hcp {{$ctrl.course.tees[0].holes[$ctrl.currentHole].hcp}}</small></h2> \n  </div>\n\n  <div ng-repeat="player in $ctrl.players" class="form-inline well well-sm">\n    {{player.name}}<br/>\n    CR: {{player.holes[$ctrl.currentHole-1].cr}}<br/>\n    Tee: {{player.tee}}<br/>\n    Gender: {{player.gender}}<br/>\n\n    <span ng-if="player.tee == \'red\'">{{$ctrl.course.tees[0].holes[$ctrl.currentHole].distance}}</span>\n    <span ng-if="player.tee == \'blue\'">{{$ctrl.course.tees[1].holes[$ctrl.currentHole].distance}}</span>\n    <span ng-if="player.tee == \'yellow\'">{{$ctrl.course.tees[2].holes[$ctrl.currentHole].distance}}</span>\n    <span ng-if="player.tee == \'white\'">{{$ctrl.course.tees[3].holes[$ctrl.currentHole].distance}}</span>\n    <span ng-if="player.tee == \'black\'">{{$ctrl.course.tees[4].holes[$ctrl.currentHole].distance}}</span>\n    m<br/>\n    \n    <button class="btn btn-default" ng-click="$ctrl.removeStroke(player)">-</button>\n    <strong class="h1">{{player.holes[$ctrl.currentHole-1].score}}</strong>\n    <button class="btn btn-default" ng-click="$ctrl.addStroke(player)">+</button>\n\n  </div>\n\n  <div class="clearfix">\n    <button class="btn btn-default pull-left" ng-click="$ctrl.prevHole()" ng-if="$ctrl.currentHole > 1">Prev hole</button>\n    <button class="btn btn-success pull-right" ng-click="$ctrl.nextHole()" ng-if="$ctrl.currentHole < $ctrl.course.holesCount">Next hole</button>\n    <button class="btn btn-danger pull-right" ng-click="$ctrl.toggleTotal()" ng-if="$ctrl.currentHole == $ctrl.course.holesCount">Total</button>\n  </div>\n\n</div>\n\n<div ng-if="$ctrl.showTotal">\n  <div class="page-header text-center">\n    <h2>Total</h2>\n  </div>\n\n  <div ng-repeat="player in $ctrl.players" class="panel panel-default">\n    <div class="panel-heading"><strong>{{player.name}}</strong><br/>Stroke: {{player.scoreStroke}} - Stb Brut: {{player.scoreStbBrut}} - Stb Net: {{player.scoreStbNet}}</div>\n\n    <div class="table-responsive">\n      <table class="table table-striped table-bordered table-condensed text-center">\n        <tr>\n          <!--<th>#</th>-->\n          <th ng-repeat="hole in player.holes">\n            {{hole.num}}\n          </th>\n        </tr>\n        <!--\n        <tr>\n          <th>HCP</th>\n          <td ng-repeat="hole in player.holes">\n            {{hole.hcp}}\n          </td>\n        </tr>\n        <tr>\n          <th>CR</th>\n          <td ng-repeat="hole in player.holes">\n            {{hole.cr}}\n          </td>\n        </tr>\n        -->\n        <tr>\n          <!--<th>Score</th>-->\n          <td ng-repeat="hole in player.holes">\n            {{hole.score}}\n          </td>\n        </tr>\n      </table>\n    </div>\n\n  </div>\n\n  <button class="btn btn-default" ng-click="$ctrl.toggleTotal()">Back</button>\n\n  <a href="/#!/" class="btn btn-primary pull-right">Homepage</a>\n\n</div>\n');}]);