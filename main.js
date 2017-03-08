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
            console.log(data.items[0].id.videoId);
            $('iframe').attr('src',"https://www.youtube.com/embed/"+ data.items[0].id.videoId+ "?autoplay=1")
            changeiframe(data.items[0].id.videoId);
         });
    } 
});
