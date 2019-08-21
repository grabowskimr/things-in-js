(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var Ball = (function () {
    function Ball(radius, posX, posY, dirX, dirY) {
        this.radius = radius;
        this.posX = posX;
        this.posY = posY;
        this.dirX = dirX;
        this.dirY = dirY;
    }
    Ball.prototype.move = function () {
        if (this.posX + this.dirX <= this.minX) {
            this.dirX *= -1;
        }
        if (this.posY + this.dirY <= this.minY) {
            this.dirY *= -1;
        }
        if (this.posX + this.dirX + this.radius * 2 >= this.maxX) {
            this.dirX *= -1;
        }
        if (this.posY + this.dirY + this.radius * 2 >= this.maxY) {
            this.dirY *= -1;
        }
        this.posX += this.dirX;
        this.posY += this.dirY;
        return [this.posX, this.posY];
    };
    Ball.prototype.setConstraints = function (minX, minY, maxX, maxY) {
        this.minX = minX;
        this.minY = minY;
        this.maxX = maxX;
        this.maxY = maxY;
    };
    return Ball;
}());
var ballElement = document.querySelectorAll('.ball')[0];
var boardElement = document.querySelectorAll('.game-board')[0];
var ball = new Ball(parseInt(getComputedStyle(ballElement)['border-top-left-radius']), ballElement.offsetLeft, ballElement.offsetTop, 1, -1);
ball.setConstraints(0, 0, boardElement.offsetWidth, boardElement.offsetHeight);
setInterval(function () {
    var _a = ball.move(), posX = _a[0], posY = _a[1];
    ballElement.style.left = posX + 'px';
    ballElement.style.top = posY + 'px';
}, 15);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBsaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0lBV0UsY0FBWSxNQUFjLEVBQUUsSUFBWSxFQUFFLElBQVksRUFBRSxJQUFZLEVBQUUsSUFBWTtRQUNoRixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsbUJBQUksR0FBSjtRQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLENBQUM7UUFDRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsQixDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEIsQ0FBQztRQUNELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLENBQUM7UUFDRCxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXZCLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCw2QkFBYyxHQUFkLFVBQWUsSUFBWSxFQUFFLElBQVksRUFBRSxJQUFZLEVBQUUsSUFBWTtRQUNuRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUgsV0FBQztBQUFELENBN0NBLEFBNkNDLElBQUE7QUFFRCxJQUFJLFdBQVcsR0FBOEIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25GLElBQUksWUFBWSxHQUE4QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFMUYsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRTlFLFdBQVcsQ0FBQztJQUNWLElBQUEsZ0JBQThCLEVBQXpCLFlBQUksRUFBRSxZQUFJLENBQWdCO0lBRS9CLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztBQUV0QyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjbGFzcyBCYWxsIHtcbiAgcmFkaXVzOiBudW1iZXI7XG4gIHBvc1g6IG51bWJlcjtcbiAgcG9zWTogbnVtYmVyO1xuICBkaXJYOiBudW1iZXI7XG4gIGRpclk6IG51bWJlcjtcbiAgbWluWDogbnVtYmVyO1xuICBtaW5ZOiBudW1iZXI7XG4gIG1heFg6IG51bWJlcjtcbiAgbWF4WTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHJhZGl1czogbnVtYmVyLCBwb3NYOiBudW1iZXIsIHBvc1k6IG51bWJlciwgZGlyWDogbnVtYmVyLCBkaXJZOiBudW1iZXIpIHtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB0aGlzLnBvc1ggPSBwb3NYO1xuICAgIHRoaXMucG9zWSA9IHBvc1k7XG4gICAgdGhpcy5kaXJYID0gZGlyWDtcbiAgICB0aGlzLmRpclkgPSBkaXJZO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICBpZih0aGlzLnBvc1ggKyB0aGlzLmRpclggPD0gdGhpcy5taW5YKSB7XG4gICAgICB0aGlzLmRpclggKj0gLTE7XG4gICAgfVxuICAgIGlmKHRoaXMucG9zWSArIHRoaXMuZGlyWSA8PSB0aGlzLm1pblkpIHtcbiAgICAgIHRoaXMuZGlyWSAqPSAtMTtcbiAgICB9XG4gICAgaWYodGhpcy5wb3NYICsgdGhpcy5kaXJYICsgdGhpcy5yYWRpdXMgKiAyID49IHRoaXMubWF4WCkge1xuICAgICAgdGhpcy5kaXJYICo9IC0xO1xuICAgIH1cbiAgICBpZih0aGlzLnBvc1kgKyB0aGlzLmRpclkrIHRoaXMucmFkaXVzICogMiA+PSB0aGlzLm1heFkpIHtcbiAgICAgIHRoaXMuZGlyWSAqPSAtMTtcbiAgICB9XG4gICAgdGhpcy5wb3NYICs9IHRoaXMuZGlyWDtcbiAgICB0aGlzLnBvc1kgKz0gdGhpcy5kaXJZO1xuXG4gICAgcmV0dXJuIFt0aGlzLnBvc1gsIHRoaXMucG9zWV07XG4gIH1cblxuICBzZXRDb25zdHJhaW50cyhtaW5YOiBudW1iZXIsIG1pblk6IG51bWJlciwgbWF4WDogbnVtYmVyLCBtYXhZOiBudW1iZXIpIHtcbiAgICB0aGlzLm1pblggPSBtaW5YO1xuICAgIHRoaXMubWluWSA9IG1pblk7XG4gICAgdGhpcy5tYXhYID0gbWF4WDtcbiAgICB0aGlzLm1heFkgPSBtYXhZO1xuICB9XG5cbn1cblxudmFyIGJhbGxFbGVtZW50IDogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJhbGwnKVswXTtcbnZhciBib2FyZEVsZW1lbnQgOiBIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZS1ib2FyZCcpWzBdO1xuXG52YXIgYmFsbCA9IG5ldyBCYWxsKHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoYmFsbEVsZW1lbnQpWydib3JkZXItdG9wLWxlZnQtcmFkaXVzJ10pLCBiYWxsRWxlbWVudC5vZmZzZXRMZWZ0LCBiYWxsRWxlbWVudC5vZmZzZXRUb3AsIDEsIC0xKTtcbmJhbGwuc2V0Q29uc3RyYWludHMoMCwwLCBib2FyZEVsZW1lbnQub2Zmc2V0V2lkdGgsIGJvYXJkRWxlbWVudC5vZmZzZXRIZWlnaHQpO1xuXG5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gIGxldCBbcG9zWCwgcG9zWV0gPSBiYWxsLm1vdmUoKTtcblxuICBiYWxsRWxlbWVudC5zdHlsZS5sZWZ0ID0gcG9zWCArICdweCc7XG4gIGJhbGxFbGVtZW50LnN0eWxlLnRvcCA9IHBvc1kgKyAncHgnO1xuXG59LCAxNSk7Il19
