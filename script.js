angular.module('snowflakes', [])
  .controller('ngSnow', ['$scope', '$interval', function($scope,$interval) {
    $scope.flakes = [];
    var snowflake = function() {
      this.move = true;
      this.transitionT = 1 + 3 * Math.random();
      this.init  = {left : parseInt(100 * Math.random(),10) + "%", top : "-10%",  transition : "0s"};
      this.final = {left : parseInt(100 * Math.random(),10) + "%", top : "110%", transition : this.transitionT + "s linear"};
    };
    for (var i = 0; i < 25; i++) {
      var sflake = new snowflake();
      $scope.flakes.push(sflake);
    }
    $scope.finish = function(flake) {
      flake.final.left = parseInt(100 * Math.random(),10) + "%";
      flake.move = true;
      $scope.flakes.push(flake);
    };

    $scope.move = function(flake) {
      flake.move = false;
      flake.init.left = parseInt(100 * Math.random(),10) + "%";
      setTimeout(function() {
        $scope.finish(flake);
      }, 1000 * flake.transitionT);
    };

    $interval(function() {
     $scope.move($scope.flakes[Math.floor(Math.random() * $scope.flakes.length)]);
    }, 250);
    
    var xmas = new Date(2016,12,20,6,0,0,0);
    var now  = new Date();
    console.log(now);
    console.log(now > xmas);
    $scope.message = now > xmas ? "No Peeking".split("\n") : "Dear James,\n\nMerry Christmas!\n\nLove,\nAndrew".split("\n");
    $scope.link = now > xmas ? {message: "", src: ""} : {message: "P.S. - here's a bonus gift", src: "https://www.youtube.com/watch?v=xifmzUGpzJ8"};
    $scope.snowCover = false;
    $scope.day = true;
    console.log($scope.message);
    setTimeout(function(){
      $scope.snowCover = true;
      $scope.day = false;
    }, 60*1000);
  }]);