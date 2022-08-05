const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event){
    if(event.code === "Enter"){
        search();
    }
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input + "&oq=hello&aqs=chrome.0.69i59j46i67i433j0i131i433i512j0i131i433j0i67i457j69i60l3.3257j0j4&sourceid=chrome&ie=UTF-8"
}



// var language; 
// function getLanguage() {
// (localStorage.getItem('language') == null) ? setLanguage('en') : false;
// $.ajax({ 
// url:  '/language/' +  localStorage.getItem('language') + '.json', 
// dataType: 'json', async: false, dataType: 'json', 
// success: function (lang) { language = lang } });
// }

// function setLanguage(lang) {
// localStorage.setItem('language', lang);
// }



function loadlang()
  {
  var lng = document.getElementById("langselector").value;
  var cnt = document.getElementById("contents");
  switch (lng)
    {
        case "en":
            cnt.src = "https://jsfiddle.net/q2nw8o35/";
        break;
        case "hi":
            cnt.src = "https://jsfiddle.net/q6mchkat/";
        break;
    }
   }
  