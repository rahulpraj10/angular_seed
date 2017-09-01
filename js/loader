app.service('loader', function($mdDialog, $rootScope) {
     return {
       hideWait: hideWait,
       showWait: showWait
     }
     
     function hideWait(){
          setTimeout(function(){
                   $mdDialog.cancel();
                },100);
      }
      
     function showWait(){
              $mdDialog.show({
                template: '<md-dialog id="plz_wait" style="background-color:transparent;box-shadow:none">' +
                            '<div layout="row" layout-sm="column" layout-align="center center" aria-label="wait">' +
                                '<ion-spinner icon="ripple"></ion-spinner>' +
                            '</div>' +
                         '</md-dialog>',
                parent: angular.element(document.body),
                clickOutsideToClose:false,
                fullscreen: false
              })
              .then(function(answer) {
                
              });
       }	
	
});
