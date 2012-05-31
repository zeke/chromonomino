$(document).ready(function () {

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  $('img').bind('load', function (event) {
    var image = event.target;
    var rgb = getDominantColor(image);
    var hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
    var name = ntc.name(hex);
    console.log(rgb, hex, name);
  });
    
});