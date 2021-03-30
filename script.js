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
  $("#women").hide();
  $("#men").hide();
  $("#either").hide();
});

$("#start").click(function () {
  for (i = 0; i < names.length; i++) {
    draw(names[i]);
  }
  $(this).slideUp();
  $("#women").slideDown();
  $("#men").slideDown();
  $("#either").slideDown();
});

$("#women").click(function () {
  $("#sausage").hide();
  $("#clam").show();
});

$("#men").click(function () {
  $("#sausage").show();
  $("#clam").hide();
});

$("#either").click(function () {
  $("#sausage").show();
  $("#clam").show();
});

function draw(foo) {
  var htmlText = "";
  var address_line_1 = "";
  var address_line_2 = "";

  imgurl = foo.picture.medium;
  sex = foo.gender;

  address_line_1 += `${foo.location.street.number}`;
  address_line_1 += " ";
  address_line_1 += `${foo.location.street.name}`;

  address_line_2 += `${foo.location.city}`;
  address_line_2 += ", ";
  address_line_2 += `${foo.location.country}`;

  htmlText += `<div class="border border-danger rounded p-2 mb-2" id="${sex}">

   <div class="row">
       <div class="col-4">
           <img src="${imgurl}" alt="computer" class="border border-dark rounded">
       </div>
       <div class="col-8 text-center">
           <h2>${foo.name.first} ${foo.name.last}</h2>
           <p>${address_line_1}</p>
           <p>${address_line_2}</p>
       </div>
   </div> 
  </div>`;

  if (sex == "male") {
    $("#sausage").append(htmlText);
  } else {
    $("#clam").append(htmlText);
  }
}
