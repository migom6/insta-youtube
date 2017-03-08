$(document).ready(function(){
    $('#searchVideo').on('keyup', function(e){
        let videoName = e.target.value;
        getRequest(videoName);
    });
    function getRequest(videoName){
        $.ajax({
            url : 'https://www.googleapis.com/youtube/v3/search',
            data : {
                part: 'snippet',
                key: 'AIzaSyDtcvilBuNQjSWNbft_bi5lDSzABPW_-50',
                q: videoName
            }
        }).done(function(data){
            let videoID;
            let i = 0;
            while(data.items[i].id.kind == 'youtube#channel'){
                i++; 
            }
            videoID = data.items[i].id.videoId;
            $('iframe').attr('src',"https://www.youtube.com/embed/"+ videoID+ "?autoplay=1");
        });
    } 
});
