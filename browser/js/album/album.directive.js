juke.directive('albumList', function () {
  return {
    scope: {
      albums: '='
    },
    templateUrl: 'js/album/templates/albums.html'
  };
});

juke.directive('songList', function(){
	return{
		scope:{
			album: '='
		},
		templateUrl: 'js/album/templates/table.html'
	};
});