var NEWS_ALL = {
    get: function(){
            return $.ajax({
                type: 'get',
                url:  'https://newsapi.org/v2/top-headlines?apiKey=77d9f0fc9d9d4819a2980f0e829d0da5&country=ph'
            });
        },
}