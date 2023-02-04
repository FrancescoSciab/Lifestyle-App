let input = document.getElementsByTagName('h1')[0].textContent;
console.log(input);

$.getJSON(`https://api.teleport.org/api/urban_areas/slug:${input}/scores/`, function(data){//success callback function
        let items = [];// will store items of the loop below
        $.each(data.categories, function(key, val) {
            items.push("<li>" + val.name + ": " + val.score_out_of_10 + "</li>");
        });
        //creating ul, adding items inside and appending to body
        $("<ul/>", {
            "class": "list",
            html: items.join("")
        }).appendTo("body");
});