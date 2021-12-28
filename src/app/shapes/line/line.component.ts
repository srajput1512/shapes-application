import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //Canvas
var canvas = <HTMLCanvasElement>document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//Variables
var canvasx = $(canvas).offset().left;
var canvasy = $(canvas).offset().top;
var last_mousex = 0; var last_mousey = 0;
var mousex = 0 ; var mousey = 0;
var mousedown = false;

//Mousedown
$(canvas).on('mousedown', function(e) {
    last_mousex = +(e.clientX-canvasx);
	last_mousey = +(e.clientY-canvasy);
    mousedown = true;
});

//Mouseup
$(canvas).on('mouseup', function(e) {
    mousedown = false;
}); 

//Mousemove
$(canvas).on('mousemove', function(e) {
    mousex = +(e.clientX-canvasx);
	mousey =   +(e.clientY-canvasy);
    if(mousedown) {
        ctx.clearRect(0,0,canvas.width,canvas.height); //clear canvas
        ctx.beginPath();
        ctx.moveTo(last_mousex,last_mousey);
        ctx.lineTo(mousex,mousey);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.lineJoin = ctx.lineCap = 'round';
        ctx.stroke();
    }
 
});
  }

}
