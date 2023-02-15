(function ($) {
    "use strict";
    $(document).ready(function () {
        var jsonData = "";
        $.getJSON("https://raw.githubusercontent.com/joynal9933/cs/main/data.json", function(jsonData) {
            console.log(jsonData);
            const container = document.getElementById('data-container');
            jsonData.data.forEach((item) => {
                const wrap = $('div.'+item.id).text(" ");
                const title = $('<h2>').text(item.title);
                const description = $('<div>').html(item.description);
                const wrapper = $('<div class="item" id="item-'+item.id+'">').append(title).append(description);
                $('#data-container').append(wrapper);
            });
        });
    });
}(jQuery));