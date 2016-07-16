 var Board = function (elmentId) {
     //$(elmentId).empty();
     var self = {};
     self.MakeBoard = function (count) {
         $(elmentId).empty();
         for (var i = 0; i < count * count; i++) {
             var clickArea = document.createElement('div');
             $(clickArea).html();
             $(clickArea).addClass('clickArea');
             clickArea.style.width = 100 / count + '%';
             clickArea.style.height = 100 / count + '%';

             $(elmentId).append(clickArea);

         }
         return '.clickArea';
     }

     self.ClickAreaMethod = function (method) {
         $('.clickArea').click(function () {
             method(this);
         });
     };
     self.ToggleHideShowImage = function () {
         $(elmentId).toggle('fast');
     }
     return self;
 }

 function SimpleClick(elmentId) {

     var board = new Board(elmentId);
     board.MakeBoard(1);

     board.ClickAreaMethod(function (elment) {
         var opacity = $(elment).css('opacity');

         if (opacity === '1')
             $(elment).css({
                 opacity: 0
             });
         else
             $(elment).css({
                 opacity: 1
             });

     })
 }

 function BoardFadeToggle(elementId) {
     var board = new Board(elementId);
     board.MakeBoard(1);
     this.fadeIn = false;
     board.ClickAreaMethod(function (element) {
         if (!this.fadeIn) {
             // $(element).slideDown(1000);
             $(element).animate({
                 opacity: .9
             }, 40000).animate({
                 opacity: .75
             }, 3500).animate({
                 opacity: .5
             }, 3500).animate({
                 opacity: .0
             }, 1500);

             this.fadeIn = true;
             return;
         };

         $(element).animate({
             opacity: 1
         });
         this.fadeIn = false;
     });

 }

 function BoardClick(elementId) {
     var board = new Board(elementId);

     board.MakeBoard(1);

     board.ClickAreaMethod(function (element) {
         var opacity = $(element).css('opacity');

         if (opacity >= 0.6)
             opacity = opacity - 0.04;
         else if (opacity < 0.6 && opacity > 0)
             opacity = opacity - 0.2;
         else if (opacity == 0) {
             debugger
             opacity = 1;
         }

         $(element).css({
             opacity: opacity
         })
     })
 }

 function PositionClick(elementId) {
     var board = new Board(elementId);

     board.MakeBoard(8);

     board.ClickAreaMethod(function (element) {
         var opacity = $(element).css('opacity');
         opacity = opacity - .035;
         if (opacity < .9)
             opacity = opacity - .3;
         else if (opacity < .7)
             opacity = opacity - .5;
         $(element).css({
             opacity: opacity
         });

     });

 }

 function OnePositionClick(elementId) {
     var board = new Board(elementId);

     var elementsClass = board.MakeBoard(8);

     board.ClickAreaMethod(function (element) {
         $(elementsClass).css({
             opacity: 1
         });
         $(element).css({
             opacity: 0
         });
     });

 }

 function InverseOneClick(elementId) {
     var board = new Board(elementId);

     var elementsClass = board.MakeBoard(8);
     $(elementsClass).css({
         opacity: 0
     });

     board.ClickAreaMethod(function (element) {
         $(element).css({
             opacity: 1
         });
     });

 }

 function HideRandomelement(elementId) {
     var board = new Board(elementId);

     var count = 5;
     var elementsClass = board.MakeBoard(count);
     $(elementsClass).css({
         opacity: 0
     });

     var hideElementIndex = 0;

     var getRandomIndex = function () {
         var x = Math.floor(Math.random() * ((count * count) - 1 + 1)) + 1;

         if (hideElementIndex === x) {
             getRandomIndex();
         } else {
             //console.log(hideElementIndex + ":" + x);
             hideElementIndex = x;
             return
         }
     }

     board.ClickAreaMethod(function (element) {

         $("#Board " + elementsClass + ":nth-child(" + hideElementIndex + ")").css({
             opacity: 0
         });

         getRandomIndex();
         var x = hideElementIndex;
         var elem = elementsClass + ":nth-child(" + x + ")";
         $(elem).css({
             opacity: 1
         });
     });

 }

 //program

 var currentPractice = 1;

 function setClass(practiceNumber) {
     currentPractice = practiceNumber;
 }

 $(document).on("pageshow", "#practicePage", function () {

     switch (currentPractice) {
     case 1:
         SimpleClick('#Board');
         break;
     case 2:
         BoardFadeToggle('#Board');
         break;
     case 3:
         BoardClick('#Board');
         break;
     case 4:
         PositionClick('#Board');
         break;
     case 5:
         OnePositionClick('#Board');
         break;
     case 6:
         InverseOneClick('#Board');
         break;
     case 7:
         HideRandomelement('#Board');
         break;

     }

 });

 // var obj = SimpleClick('#Board');
 //BoardFadeToggle('#Board');
 //BoardClick('#Board');
 //PositionClick('#Board');
 //OnePositionClick('#Board');
 //InverseOneClick('#Board');
 //HideRandomelement('#Board');