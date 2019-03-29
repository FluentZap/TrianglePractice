$(document).ready(function(){
  $("#triangle-sides").submit(function(event){
    event.preventDefault();
    var one = parseFloat($("#form-side1Input").val());
    var two = parseFloat($("#form-side2Input").val());
    var three = parseFloat($("#form-side3Input").val());
    var triangle_type = triangle(one, two, three);
    $("#result").text(triangle_type);
    if (rightTriangle(one, two, three)){
      $("#result").append(" And it's Right on!")
    }
  });

});


function rightTriangle(one, two, three) {
  var isTriangle = (Math.pow(one, 2) + Math.pow(two, 2)) === Math.pow(three, 2);
  if (isTriangle) {
    return true;
  } else {
    return false;
  }
}

function triangle(one, two, three) {
  //All sides Equal
   if (one === two && two === three) {
      return "Nice Equilateral Triangle, Bro!";
    //Isosceles
  } else if (one === two || one === three || two === three) {
    return "Nice Isosceles Triangle, Bro!";
  } else {
    return "Nice Scalene Triangle, Far out!";
}
  //if (one <= 0 && two > 0 )
  return "Not a Triangle, Bro!";
  return    //Equilateral, Isosceles, Scalene, Not a Triangle
}
