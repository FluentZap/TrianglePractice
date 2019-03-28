$(document).ready(function(){
  $("#triangle-sides").submit(function(event){
    event.preventDefault();
    var one = parseFloat($("#form-side1Input").val());
    var two = parseFloat($("#form-side2Input").val());
    var three = parseFloat($("#form-side3Input").val());
    var triangle_type = triangle(one, two, three);
    $("#result").text(triangle_type);
  });

});


function triangle(one, two, three) {
  var isTriangle = (Math.pow(one, 2) + Math.pow(two, 2)) === Math.pow(three, 2);
  if (!isTriangle) {
    return "Right angle, right on!"
  }
  // {
  //   return "Not a Triangle, Dude!";
  // }
  //All sides Equal
   if (one === two && two === three) {
      return "Nice Equilateral Triangle, Bro!";
    //Isosceles
  } else if (one === two || one === three || two === three) {
    return "Nice Isosceles Triangle, Bro!";
  } else {
    return "Nice Scalene Triangle, Far out!";
}



  return    //Equilateral, Isosceles, Scalene, Not a Triangle
}
