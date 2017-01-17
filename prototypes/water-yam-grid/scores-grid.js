// Use Google Sheet (published as public web page) as source of JSON data

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {

  if (this.readyState == 4 && this.status == 200) {

    // loop through Google Sheets entries, create cards and get list of all tags
    var i, w, x, y, z = "";
    var myObj = JSON.parse(this.responseText);
    for ( i in myObj.feed.entry ) {

      x = myObj.feed.entry[i].gsx$file.$t;
      y = myObj.feed.entry[i].gsx$tags.$t;
      w = myObj.feed.entry[i].gsx$width.$t;

      scale = .5;

      var image = document.createElement("img");
      image.setAttribute('src', 'assets/' + x );
      image.setAttribute('width', w * (72 * scale) );

      var caption = document.createElement("figcaption");
      var text = x + ": " + y
      var t = document.createTextNode(text);
      caption.appendChild(t);

      var card = document.createElement("figure");
      card.setAttribute('class', 'card' );
      if ( y == "" ) {
        card.setAttribute("data-tag", "untagged" );
        z += "untagged";
      } else {
        var taglist = y.replace(/, /g, "+").replace(/ /g, "-").replace(/\+/g, " ");
        card.setAttribute('data-tag', taglist );
      };
      card.appendChild(image);
      card.appendChild(caption);

      document.getElementById("cards").appendChild(card);

      z += y + ", ";
    };

    // trim extra comma at the end of the string and split values into an array
    var arr = z.substring(0, z.length - 2).split(", ");

    // filter array to eliminate duplicates, sort alphabetically
    var unique = arr.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    });
    unique.sort();

    // create a button for each unique tag
    for ( i in unique ) {
      var button = document.createElement("button");
      var label = unique[i];
      var id = label.replace(/ /g, "-");
      var t = document.createTextNode(label);
      button.setAttribute('type', 'button' );
      button.setAttribute('value', id );
      button.appendChild(t);
      document.getElementById("tags").appendChild(button);
    };

    // attach click event to buttons to hide and unhide cards based on tag match
    var button = document.querySelectorAll("button");
    for (var i = 0; i < button.length; i++) {
      button[i].addEventListener("click", function() {
        var tag = this.getAttribute("value");
        var match = document.querySelectorAll(".card[data-tag~=" + tag + "]");
        var nomatch = document.querySelectorAll(".card:not([data-tag~=" + tag + "])");
        if ( tag == "all") {
          var cards = document.querySelectorAll(".card");
          for ( i in cards ) {
            cards[i].hidden = false;
          };
        } else {
          for ( i in nomatch ) {
            nomatch[i].hidden = true;
          };
          for ( i in match ) {
            match[i].hidden = false;
          };
        }
        highlightSelected(this);
      });
    };

    // function to add "selected" id to current button
    // css :focus along wasn't working in Firefox to style
    function highlightSelected(current) {
      var previous = document.getElementById("selected");
      current.setAttribute("id", "selected");
      previous.setAttribute("id", "");
    };

  }

};
xmlhttp.open("GET", "https://spreadsheets.google.com/feeds/list/1_RuA9_hrOkchts-Or9CrFnp8NW-IVVnok6bRfSJZhR8/od6/public/values?alt=json", true);
xmlhttp.send();
