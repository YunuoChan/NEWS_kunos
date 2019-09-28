var NEWS_ALL = {
    get: function(){
            return $.ajax({
                type: 'get',
                url: ALLNEWS_API
            });
        },
}