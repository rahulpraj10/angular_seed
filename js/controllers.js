app.controller('LoginCtrl', function($scope,$state,$ionicPopup) {

  $scope.logindata = {uname:"ra@gmail.com",pwd:"qwerty1"};
  $scope.login = function(){
    if($scope.logindata.uname=="ra@gmail.com" && $scope.logindata.pwd=="qwerty"){
    console.log($scope.logindata);
    $state.go('page1');}
    else{
    var alertPopup = $ionicPopup.alert({
      title: 'Incorrect UName and PWD',
      template: 'Please Enter It Correctly'
    });

    alertPopup.then(function(res) {
      //$cordovaVibration.vibrate(100);
    });

    }
  }
})
app.controller('page1Ctrl', function($scope,$state,$ionicPopup) {



})