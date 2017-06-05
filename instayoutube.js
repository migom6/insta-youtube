$(document).ready(function () {
    $('#searchVideo').on('keyup', function (e) {
        console.log(e.target.value);
        let videoName = e.target.value;
        getRequest(videoName);
    });

    function setThumbnails(i,data){
         i = i + 1;
            j = 0;
            while (j <= 6) {
                if (data.items[i].id.kind != 'youtube#channel') {
                    var idstring = '#i' + j;
                    console.log(data.items[i].snippet.thumbnails.high.url)
                    $(idstring).attr('src', data.items[i].snippet.thumbnails.high.url);
                    j++;
                }
                i++;
            }

    }
    function getRequest(videoName) {
        $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/search',
            data: {
                part: 'snippet',
                key: 'AIzaSyDtcvilBuNQjSWNbft_bi5lDSzABPW_-50',
                q: videoName,
                maxResults: 15
            }
        }).done(function (data) {
            console.log(data.items["0"].snippet.thumbnails.high.url);
            console.log(data);
            let videoID;
            let i = 0;
            while (data.items[i].id.kind == 'youtube#channel') {
                i++;
            }
            videoID = data.items[i].id.videoId;
            $('iframe').attr('src', "https://www.youtube.com/embed/" + videoID + "?autoplay=1");
            setThumbnails(i,data);
           
        });
    }
});

