// First Get grabs names of pokemon
// Second get uses those names to create a mega array of pokemon
$(document).ready(function () {
  let names;
  $.get(
    "https://randomuser.me/api/?results=20",
    function (res) {
      //console.log(res);
      names = res.results;
      console.log(names);

      for (i = 0; i < names.length; i++) {
        draw(names[i]);
      }
    },
    "json"
  );
});

$("#alpha").click(function () {
  console.log(names);
});

function draw(foo) {
  var htmlText = "";
  console.log(foo);
  console.log(foo.picture.medium);
  imgurl = foo.picture.medium;

  htmlText += `<div class="col-12 col-lg-6 bg-secondary border border-danger rounded p-2 mb-2" >

   <div class="row">
       <div class="col-4">
           <img src="${imgurl}" alt="computer" height="120px" width="120px" class="border border-dark rounded">
       </div>
       <div class="col-8 text-center">
           <h2>${foo.name.first} ${foo.name.last}</h2>
           <p>Every link on this page will lead to my video description of my code</p>
       </div>
   </div> 
  </div>`;
  $("#showroom").append(htmlText);
}
