juke.directive('albumList', function () {
  return {
    scope: {
      albums: '='
    },
    templateUrl: 'js/album/templates/albums.html'
  };
});

juke.directive('songList', function(PlayerFactory){
	return{
		scope:{
			album: '='
		},
		templateUrl: 'js/album/templates/table.html',
    link: function(scope, element, attrs){
      scope.toggle = function (song) {
        if (song !== PlayerFactory.getCurrentSong()) {
          PlayerFactory.start(song, scope.album.songs);
        } else if ( PlayerFactory.isPlaying() ) {
          PlayerFactory.pause();
        } else {
          PlayerFactory.resume();
        }
      };

      scope.getCurrentSong = function () {
        return PlayerFactory.getCurrentSong();
      };

      scope.isPlaying = function (song) {
        return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
      };
    }
	};
});
