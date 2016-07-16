<script>
        var c = document.getElementById("inside");
        var baseEl = document.getElementById("test");

        var ctx = c.getContext("2d");

        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.fill()
        ctx.fillRect(0, 0, c.width, c.height);
        //ctx.clearRect(0, 0, 30, 30);

        function getMousePos(canvas, evt) {
            var rect = canvas.getBoundingClientRect();
            return {
                x: Math.floor(evt.clientX - rect.left)
                , y: Math.floor(evt.clientY - rect.top)
            };
        }
        var cleardLocations = [];

        var getIndexOfArray = function (position) {
            return {
                xIndex: Math.floor(position.x / 80)
                , yIndex: Math.floor(position.y / 80)
            }
        }


        var checkAndAddLocation = function (point) {

            var pnt = getIndexOfArray(point);

            for (var itm in cleardLocations) {
                if (cleardLocations[itm].xIndex == pnt.xIndex && cleardLocations[itm].yIndex == pnt.yIndex) {
                    cleardLocations[itm].opacity = cleardLocations[itm].opacity - .005;
                    return cleardLocations[itm];
                }
            }

            pnt.opacity = .965;
            cleardLocations.push(pnt);
            return pnt;

        }

        c.onmousedown = function (e) {

            var clickPosition = getMousePos(c, e);


            var point = checkAndAddLocation(clickPosition);

            //position.opacity = .1;
            ctx.fillStyle = 'rgba(0, 0, 0 , ' + point.opacity + ')';


            var startX = point.xIndex * 80;
            var startY = point.yIndex * 80;
            ctx.clearRect(startX, startY, 80, 80);
            ctx.fillRect(startX, startY, 80, 80);

            //addLocation(position);
            //ctx.fill();
            //ctx.stroke();

            //console.log(position.x + ':' + position.y + '>' + position.opacity);
            //console.log(startX + ':' + startY + '>' + position.opacity);
        }
    </script>