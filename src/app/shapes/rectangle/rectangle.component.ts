import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    var canvas = <HTMLCanvasElement>document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    //Variables
    var canvasx = $(canvas).offset().left;
    var canvasy = $(canvas).offset().top;
    var last_mousex = 0; var last_mousey = 0;
    var mousex = 0; var mousey = 0;
    var mousedown = false;

    $(canvas).on('mousedown', function (e:any) {
      last_mousex = +(e.clientX - canvasx);
      last_mousey = +(e.clientY - canvasy);
      mousedown = true;
    });

    //Mouseup
    $(canvas).on('mouseup', function (e) {
      mousedown = false;
    });

    //Mousemove
    $(canvas).on('mousemove', function (e) {
      mousex = +(e.clientX - canvasx);
      mousey = +(e.clientY - canvasy);
      if (mousedown) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
        ctx.beginPath();
        var width = mousex - last_mousex;
        var height = mousey - last_mousey;
        ctx.rect(last_mousex, last_mousey, width, height);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    
    });

    canvas.addEventListener('dblclick', function (evt) {
      ctx.fill();
    })
  }

}
