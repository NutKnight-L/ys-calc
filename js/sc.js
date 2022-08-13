window.onload = function () {
    var url = "js/TextMapCHS.json";
    var req = new XMLHttpRequest();
    req.open("get", url);
    req.send(null);
    req.onload = function () {
        if (req.status == 200) {
            var json = JSON.parse(req.responseText);
            // console.log(json[1003108497]);
            for (let i = 0; i < we.length; i++) {
                // if (!we[i]['storyId'] != true) {
                var wname = we[i]["nameTextMapHash"];
                console.log(we[i]["rankLevel"], we[i]['weaponType'], we[i]['storyId'], we[i]['id'], we[i]['nameTextMapHash'], json[wname]);
                // }
            }
        }
    }
}

