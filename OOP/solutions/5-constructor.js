// BEGIN
function Point(x, y) {
  this.getX = function getX() {
    return x;
  };
  this.getY = function getY() {
    return y;
  };
}

function Segment(beginPoint, endPoint) {
  this.getBeginPoint = function getBeginPoint() {
    return beginPoint;
  };
  this.getEndPoint = function getEndPoint() {
    return endPoint;
  };
}

function reverse(segment) {
  const beginPoint = new Point(
    segment.getEndPoint().getX(),
    segment.getEndPoint().getY(),
  );
  const endPoint = new Point(
    segment.getBeginPoint().getX(),
    segment.getBeginPoint().getY(),
  );
  return new Segment(beginPoint, endPoint);
}

export { Point, Segment, reverse };

// END
