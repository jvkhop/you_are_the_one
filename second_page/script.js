let highestZ = 1;

class Paper {
  constructor() {
    this.holdingPaper = false;
    this.startX = 0;
    this.startY = 0;
    this.moveX = 0;
    this.moveY = 0;
    this.prevX = 0;
    this.prevY = 0;
    this.velX = 0;
    this.velY = 0;
    this.rotation = Math.random() * 30 - 15;
    this.currentX = 0;
    this.currentY = 0;
    this.rotating = false;
  }

  init(paper) {
    // Common event handler for touch and mouse movement
    const moveHandler = (x, y) => {
      if (!this.rotating) {
        this.moveX = x;
        this.moveY = y;

        this.velX = this.moveX - this.prevX;
        this.velY = this.moveY - this.prevY;
      }

      const dirX = x - this.startX;
      const dirY = y - this.startY;
      const dirLength = Math.sqrt(dirX * dirX + dirY * dirY);
      const dirNormalizedX = dirX / dirLength;
      const dirNormalizedY = dirY / dirLength;

      const angle = Math.atan2(dirNormalizedY, dirNormalizedX);
      let degrees = 180 * angle / Math.PI;
      degrees = (360 + Math.round(degrees)) % 360;
      if (this.rotating) {
        this.rotation = degrees;
      }

      if (this.holdingPaper) {
        if (!this.rotating) {
          this.currentX += this.velX;
          this.currentY += this.velY;
        }
        this.prevX = this.moveX;
        this.prevY = this.moveY;

        paper.style.transform = `translateX(${this.currentX}px) translateY(${this.currentY}px) rotateZ(${this.rotation}deg)`;
      }
    };

    paper.addEventListener('touchmove', (e) => {
      // grab the location of touch
      var touchLocation = e.targetTouches[0];
    
      // assign box new coordinates based on the touch.
      paper.style.left = touchLocation.pageX + 'px';
      paper.style.top = touchLocation.pageY + 'px';
    });

    paper.addEventListener('touchend', (e) => {
      // current box position.
      var x = parseInt(box.style.left);
      var y = parseInt(box.style.top);
    });

    paper.addEventListener('mousemove', (e) => {
      e.preventDefault();
      moveHandler(e.clientX, e.clientY);
    });

    paper.addEventListener('touchstart', (e) => {
      if (this.holdingPaper) return;
      this.holdingPaper = true;

      paper.style.zIndex = highestZ;
      highestZ += 1;

      this.startX = e.touches[0].clientX;
      this.startY = e.touches[0].clientY;
      this.prevX = this.startX;
      this.prevY = this.startY;
    });

    paper.addEventListener('mousedown', (e) => {
      if (this.holdingPaper) return;
      this.holdingPaper = true;

      paper.style.zIndex = highestZ;
      highestZ += 1;

      this.startX = e.clientX;
      this.startY = e.clientY;
      this.prevX = this.startX;
      this.prevY = this.startY;
    });

    const endHandler = () => {
      this.holdingPaper = false;
      this.rotating = false;
    };

    paper.addEventListener('touchend', endHandler);
    paper.addEventListener('mouseup', endHandler);
    paper.addEventListener('mouseleave', endHandler);

    // For two-finger rotation on touch screens
    paper.addEventListener('gesturestart', (e) => {
      e.preventDefault();
      this.rotating = true;
    });
    paper.addEventListener('gestureend', () => {
      this.rotating = false;
    });
  }
}

const papers = Array.from(document.querySelectorAll('.paper'));

papers.forEach(paper => {
  const p = new Paper();
  p.init(paper);
});
