"use strict";

var element = document.querySelector("#canvas");
var ctx = element.getContext("2d");
var w = document.body.clientWidth;
var h = document.body.clientHeight;
element.width = w;
element.heigth = h;
var posicion = Array(300).join(0).split("");

var initMatrix = function initMatrix() {
  ctx.fillStyle = "rgba(0, 15, 2, 0.15)";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "#4caf50";
  ctx.font = "11pt";
  posicion.map(function (y, index) {
    var texto = String.fromCharCode(1e3 + Math.random() * 30);
    var x = index * 15 + 15;
    canvas.getContext("2d").fillText(texto, x, y);
    y > 100 + Math.random() * 1e5 ? posicion[index] = 0 : posicion[index] = y + 15;
  });
};

setInterval(initMatrix, 100);