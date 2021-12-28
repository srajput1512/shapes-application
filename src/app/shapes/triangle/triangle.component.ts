import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // declaring local variables for canvas, canvas context and clear button
    const $canvas = <HTMLCanvasElement>document.querySelector("#canvas");
    const $clear = document.querySelector("#clear-button");
    const ctx = $canvas.getContext("2d");


    // variables to point at starting and ending indices of imaginary rectangle, inside which triangle will be drawn
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;


    // mousedown event mimicks to drag start event and stores x, y cords to start the imaginary rectangle
    $canvas.addEventListener("mousedown", e => {
      let cX = $canvas.getBoundingClientRect().left + window.scrollX;
      let cY = $canvas.getBoundingClientRect().top + window.scrollY;
      startX = e.pageX - cX;
      startY = e.pageY - cY;
    });


    // mouseup event mimicks to drag end event and stores x, y cords to end the imaginary rectangle
    $canvas.addEventListener("mouseup", e => {
      let cX = $canvas.getBoundingClientRect().left + window.scrollX;
      let cY = $canvas.getBoundingClientRect().top + window.scrollY;
      endX = e.pageX - cX;
      endY = e.pageY - cY;

      if (startX !== endX) {
        if (startY > endY) {
          let tempX = startX;
          let tempY = startY;
          startX = endX;
          startY = endY;
          endX = tempX;
          endY = tempY;
        }
        drawRectangle();
      }
    });


    // draws triangle with given x, y cords and random color
    function drawRectangle() {
      ctx.beginPath();
      // ctx.fillStyle = randomColor(); // method to get random color
      // ctx.strokeStyle = "black";
      ctx.lineWidth = 1;
      ctx.moveTo(startX + (endX - startX) / 2, startY);
      ctx.lineTo(startX, endY);
      ctx.lineTo(endX, endY);
      ctx.lineTo(startX + (endX - startX) / 2, startY);
      ctx.stroke();
      ctx.closePath();
    }

    $canvas.addEventListener('dblclick', function (evt) {
      ctx.fill();
    })

    // clear event to clear th canvas
    // $clear.addEventListener('click', (e) => {
    //   ctx.clearRect(0, 0, $canvas.width, $canvas.height);
    // });
  }

}
