



var baseUrl = "https://api.finna.fi"
document.getElementById("getPicture").addEventListener("click", function (event) {
  fetch(`${baseUrl}/v1/search?lookfor=sibelius&filter[]=online_boolean:"1"&filter[]=format:"0/Image/"&field[]=title&field[]=images`)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {

      console.log(myJson.records);
      var li;
      var a;
      var linkText
      var img
      myJson.records.forEach(el => {
        console.log(el);
        li = document.createElement("li")
        a = document.createElement("a")
        a.title = el.images[0]
        a.style.cursor = "pointer"
        a.addEventListener("click", function (event) {
          document.getElementById("image").src = `${baseUrl}${el.images[0]}`
        })
        linkText = document.createTextNode(`${baseUrl}${el.images[0]}`)
        a.appendChild(linkText)
        li.appendChild(a)
        document.getElementById("links").appendChild(li)
      });
    });
  console.log("toimii");

});