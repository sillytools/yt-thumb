$( document ).ready(function() {
	$('[name=link]').on('input', function() {

		var youtubeApiUrl = "https://www.googleapis.com/youtube/v3/videos?part=snippet&key="
		var youtubeApiKey = "AIzaSyBGpsBV4IU_cOCkuS6mNGN7tZsBfRQlOBY"

		var inputId = document.createElement('a');
		inputId.href = $(this).val();
		inputId = inputId.search.split('v=')[1];

		var url = youtubeApiUrl + youtubeApiKey + "&id=" + inputId;

		$.getJSON(url, function(data){
			var thumbnails = data.items[0].snippet.thumbnails;
			var item = $('.main > div')[0];

			for (thumb in thumbnails) {
				var newItem = item.cloneNode(true);
				$(newItem).removeClass('hidden');
				$(newItem).find('img').attr('src', thumbnails[thumb].url);
				$(newItem).find('p').html(thumbnails[thumb].width + 'x' + thumbnails[thumb].height + 'px');
				$('.main > .hidden').after(newItem);
			}
		})

	})
});
