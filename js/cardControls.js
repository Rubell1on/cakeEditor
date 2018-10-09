$('.cardHeader').click(function(){
    var bottomNum = $('.cardOverlay').css("bottom");
    // console.log(typeof(bottomNum), typeof("-350px"));
    if(bottomNum == "-470px") {
        $('.cardOverlay').animate({bottom: "-325px"}, 400, "easeInOutBack", function(){
            camera.position.y = 0;
        });
        $('.closeCross').animate({opacity: 1}, 400);
    }
    else {
        $('.cardOverlay').animate({bottom: "-470px"}, 400, "easeInOutBack", function(){
            camera.position.y = 30;
        });
        $('.closeCross').animate({opacity: 0}, 400);
    }
});

var 
    cardPos = -450,
    isMouseDown = false,
    mstart = 0;

// $('.cardOverlay').mousedown(function(event){
//     var bottomNum = $('.cardOverlay').css("bottom");
//     isMouseDown = true;
//     mStart = event.pageY;
//     console.log(mStart);
//     console.log(event.pageY);
    
//         $('.cardHeader').mousemove(function(event){
//             if(isMouseDown == true) {
//             // console.log(mmove);
//             // cardPos += mmove;
            
//                 $('.cardOverlay').css('bottom', String(mStart - event.pageY+cardPos+"px"));
//             }
//         });
    
//     // console.log(typeof(bottomNum), typeof("-350px"));
//     // if(bottomNum == "-450px") {
//     //     $('.cardOverlay').animate({bottom: "-250px"}, 400, "easeInOutBack");
//     // }
//     // else {
//     //     console.log(2);
//     //     $('.cardOverlay').animate({bottom: "-450px"}, 400, "easeInOutBack");
//     // }
    
// });
// $('.cardHeader').mouseup(function(){
//     var bottomNum = $('.cardOverlay').css("bottom");
//     // console.log(typeof(bottomNum), typeof("-350px"));
//     if(bottomNum < "-350px") {
//         $('.cardOverlay').animate({bottom: "-250px"}, 400, "easeInOutBack", getOverPos());
//         camera.position.y = 0;
//     }
//     else {
//         $('.cardOverlay').animate({bottom: "-450px"}, 400, "easeInOutBack", getOverPos());
//         camera.position.y = 30;
//     }
//     isMouseDown = false;
//     // console.log(isMouseDown);
// });

// function getOverPos() {
//     var str = $('.cardOverlay').css('bottom');
//     subStr = str.substr(0,str.indexOf('px'));
//     // console.log(str,subStr);
//      cardPos = parseFloat(subStr);
// }



