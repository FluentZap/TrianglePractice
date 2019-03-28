$(document).ready(function(){
  $("#triangle-sides").submit(function(event){
    event.preventDefault();
    var one = $("#form-side1Input").val();
    var two = $("#form-side2Input").val();
    var three = $("#form-side3Input").val();
    var triangle_type = triangle(one, two, three);
    $("#result").text(triangle_type);
  });

});


function triangle(one, two, three) {
  



  return    //Equilateral, Isosceles, Scalene, Not a Triangle
}
