$( document ).ready(function() {
	$('[name=video_url]').on('input', function() {

		var youtubeApiUrl = "https://www.googleapis.com/youtube/v3/videos?part=snippet&key="
		var youtubeApiKey = "AIzaSyBGpsBV4IU_cOCkuS6mNGN7tZsBfRQlOBY"

		var inputId = document.createElement('a');
		inputId.href = $(this).val();
		inputId = inputId.search.split('v=')[1];

		var url = youtubeApiUrl + youtubeApiKey + "&id=" + inputId;

		$.getJSON(url, function(data){
			var thumbnails = data.items[0].snippet.thumbnails;
			for (thumb in thumbnails) {
				// console.log(thumb);
				$('p').after('<img src="' + thumbnails[thumb].url + '">');
			}
		})

		$('p').html(url)

	})
});
