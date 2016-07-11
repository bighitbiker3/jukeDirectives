juke.directive('doubleClick', function(){
  return {
    restrict: 'A',
    scope: {
      song: '&doubleClick'
    },
    link: function(scope, element, attrs){
      element.on('click', function(){
        scope.song()
      })
    },
  }
})
