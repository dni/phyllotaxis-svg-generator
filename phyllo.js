
var count = 100;
var size = 10;
// fib
var theta = Math.PI * (3 - Math.sqrt(5));

makeSlider(20, 10, 1000, function(value){
  count = Math.ceil(value);
  updateData();
});

makeSlider(60, 1, 30, function(value){
  size = value;
  updateData();
});

makeSlider(90, 1, 10, function(value){
  theta = value;
  updateData();
});

updateData();

function updateData() {
  var points = d3.range(count).map(phyllotaxis(size));
  var circles = g.selectAll("circle")
    .data(points)
  // update old
  circles
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
  // create new
  circles
    .enter().append("circle")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", function(d) { return d.size; })
  // delete unused
  circles.exit().remove();
}


function phyllotaxis(radius) {
 return function(i) {
   var r = radius * Math.sqrt(i), a = theta * i;
   return {
     size: radius,
     x: width / 2 + r * Math.cos(a),
     y: height / 2 + r * Math.sin(a)
   };
 };
}
