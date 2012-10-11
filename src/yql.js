(function($) {
    $.YQL = function(query, callback) {

        if (!query || !callback) {
            throw new Error('$.YQL(): Parameters may be undefined');
        }

        var encodedQuery = encodeURIComponent(query.toLowerCase()),
            url = 'http://query.yahooapis.com/v1/public/yql?q=' + encodedQuery + '&format=json&callback=?';

        $.getJSON(url, callback);
    };
})($);