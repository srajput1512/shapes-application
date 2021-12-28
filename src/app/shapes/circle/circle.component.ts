import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    this.loadCircle();
  }

  fillColorInShape = () => {

  }

  loadCircle = () => {
    var canvas = <HTMLCanvasElement>document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var canvasOffset = $("#canvas").offset();
    var offsetX = canvasOffset.left;
    var offsetY = canvasOffset.top;
    var startX;
    var startY;
    var isDown = false;



    function drawOval(x, y) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(startX, startY + (y - startY) / 2);
      ctx.bezierCurveTo(startX, startY, x, startY, x, startY + (y - startY) / 2);
      ctx.bezierCurveTo(x, y, startX, y, startX, startY + (y - startY) / 2);
      ctx.closePath();
      ctx.stroke();
    }

    function handleMouseDown(e) {
      e.preventDefault();
      e.stopPropagation();
      startX = +(e.clientX - offsetX);
      startY = +(e.clientY - offsetY);
      isDown = true;
    }

    function handleMouseUp(e) {
      if (!isDown) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      isDown = false;
    }

    function handleMouseOut(e) {
      if (!isDown) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      isDown = false;
    }

    function handleMouseMove(e) {
      if (!isDown) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      let mouseX = +(e.clientX - offsetX);
      let mouseY = +(e.clientY - offsetY);
      drawOval(mouseX, mouseY);
    }

    $("#canvas").mousedown(function (e) {
      handleMouseDown(e);
    });
    $("#canvas").mousemove(function (e) {
      handleMouseMove(e);
    });
    $("#canvas").mouseup(function (e) {
      handleMouseUp(e);
    });
    
    canvas.addEventListener('dblclick', function (evt) {
      ctx.fill();
    })
  }



}
