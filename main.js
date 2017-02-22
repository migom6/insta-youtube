$(document).ready(function(){
    console.log('working');
    $('#searchVideo').on('keyup', function(e){
        console.log(e.target.value);
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
            $('iframe').attr('src',"http://www.youtube.com/embed/"+ data.items[0].id.videoId+ "?autoplay=1")
            changeiframe(data.items[0].id.videoId);
         });
    } 
});