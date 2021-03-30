// First Get grabs names of pokemon
// Second get uses those names to create a mega array of pokemon

let names;
$(document).ready(function () {
  $.get(
    "https://randomuser.me/api/?results=20",
    function (res) {
      //console.log(res);
      names = res.results;
      //      console.log(names);
      //   for (i = 0; i < names.length; i++) {
      //     draw(names[i]);
      //   }
    },
    "json"
  );
});

$("#start").click(function () {
  for (i = 0; i < names.length; i++) {
    draw(names[i]);
  }
  console.log(names);
});

$("#women").click(function () {
  $("#sausage").hide();
  $("#clam").show();
  console.log(names);
});

$("#men").click(function () {
  $("#sausage").show();
  $("#clam").hide();
  console.log(names);
});

function draw(foo) {
  var htmlText = "";
  //  console.log(foo);
  //  console.log(foo.picture.medium);
  imgurl = foo.picture.medium;
  sex = foo.gender;
  let bodytype;

  htmlText += `<div class="border border-danger rounded p-2 mb-2" id="${sex}">

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

  if (sex == "male") {
    $("#sausage").append(htmlText);
  } else {
    $("#clam").append(htmlText);
  }
}
