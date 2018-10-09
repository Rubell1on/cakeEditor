var 
    clickBtn = new Audio('sounds/button-15.wav'), 
    sliderInr = new Audio('sounds/button-31.wav'),
    sliderDcr = new Audio('sounds/button-32.wav');

    clickBtn.load();
    sliderInr.load();
    sliderDcr.load();
    
$('.add').click(function(){
    clickBtn.play();
    createCylinder();
    console.log(cake.children);
    
    // sound.play();
    var timeCounter = 0;
    var timerId = setInterval(function(){
        
        if(timeCounter<15) {
            camera.position.y += 1;
            timeCounter++;
        }
        else
            clearInterval(timerId); 
    }, 15);

    // camera.position.y += 15;
    $('.slider').attr('value', cylSize[$('.sel').find(':selected').val()]);
    console.log(camera.position.y);
    console.log(cake.length);
});

$('.del').click(function(){
    clickBtn.play();
    if(cylHeight>0){
        cylCounter--;
        cylHeight -= 15;
    }
    cylSize[$('.sel').find(':selected').val()] = 1;
    // cake.remove(cake.getObjectByName($('.sel').find(':selected').val()));
    $('option[value=cyl'+cake.children.length+']').remove();
    cake.remove(cake.getObjectByName('cyl'+cake.children.length));
    
    // $('.sel').find(':selected').remove();
    
    console.log(camera.position.y);
    var timeCounter = 0;
    var timerId = setInterval(function(){
        
        if(timeCounter<15) {
            if(camera.position.y>30){
                camera.position.y -= 1;
            }
        timeCounter++;
        }
        else
        clearInterval(timerId); 
    }, 15);
    // if(camera.position.y>30){
    //     camera.position.y -= 15;
    // }
    
    // $('.slider').attr('value', cylSize[$('.sel').find(':selected').val()]);
    $('.slider').attr('value', cylSize[$('.sel').find(':selected').val()]);
    console.log(cake.children);
    // console.log(cake.children.length);
});

/* $('.btn').click(function(){
    $(this).animate({width: "140px", height: "20px", 'font-size':'12px', 'line-height': '20px'} ,200,'easeOutElastic', function(){
        $(this).animate({width: "150px", height: "30px", 'font-size':'16px', 'line-height': '30px'} ,200);
    });
}); */


$('.sel').click(function(){
    var layerName = $('.sel').find(':selected').val();
    selLayer(layerName);
});

function selLayer(layerName){
    var timeCounter = cake.getObjectByName(layerName).position.y;
    if(timeCounter<camera.position.y) {
        
        var timerId = setInterval(function(){
            
            if(timeCounter<camera.position.y) {
            camera.position.y -= 1;
            // timeCounter++;
            }
            else
            clearInterval(timerId); 
        }, 15);
    }
    else
    {
        // var timeCounter = cake.getObjectByName($('.sel').find(':selected').val()).position.y + 30;
        var timerId = setInterval(function(){
            
            if(timeCounter>camera.position.y) {
            camera.position.y += 1;
            // timeCounter++;
            console.log(timeCounter, camera.position.y);
            }
            else
            clearInterval(timerId); 
        }, 15);
    }
    console.log(camera.position.y);
    $('.slider').attr('value', cylSize[layerName]);
    
}

$('.slider1').change(function(){
    if(parseInt($('.sel').find(':selected').attr('id')) == 1) {
        
        cylSize[$('.sel').find(':selected').val()] = parseFloat($(this).val());
        
        cake.getObjectByName($('.sel').find(':selected').val()).scale.x = $(this).val();
        cake.getObjectByName($('.sel').find(':selected').val()).scale.z = $(this).val();
    }
    else {
        if(parseFloat($(this).val()) <= cylSize["cyl"+(parseInt($('.sel').find(':selected').attr('id'))-1)]) {
            
            cylSize[$('.sel').find(':selected').val()] = parseFloat($(this).val());

            cake.getObjectByName($('.sel').find(':selected').val()).scale.x = $(this).val();
            cake.getObjectByName($('.sel').find(':selected').val()).scale.z = $(this).val();
        }
        else {
            $(this).attr('value',cylSize["cyl"+(parseInt($('.sel').find(':selected').attr('id'))-1)]);
            alert("Диаметр текущего слоя не должен превышать предыдущий!");
        }
    }
    switch($('.slider').val()) {
        case '1': $('.cs').text('16 см')
            break;
        case '1.05': $('.cs').text('18 см')
            break;
        case '1.1': $('.cs').text('20 см');
            break;
        case '1.15': $('.cs').text('22 см')
            break;
        case '1.2': $('.cs').text('24 см')
            break;
        case '1.25': $('.cs').text('26 см')
            break;
        case '1.3': $('.cs').text('28 см')
            break;
        case '1.35': $('.cs').text('30 cм')
            break;
        case '1.4': $('.cs').text('32 см')
            break;
        case '1.45': $('.cs').text('34 см')
            break;
        case '1.5': $('.cs').text('36 см')
            break;
    }
    matchSize();
});

$('.slider').change(function(){
    if(parseInt($('.sel>option[value='+layerName+']').attr('id')) == 1) {
        
        cylSize[layerName] = parseFloat($(this).val());
        
        cake.getObjectByName(layerName).scale.x = $(this).val();
        cake.getObjectByName(layerName).scale.z = $(this).val();
    }
    else {
        if(parseFloat($(this).val()) <= cylSize["cyl"+(parseInt($('.sel>option[value='+layerName+']').attr('id'))-1)]) {
            
            cylSize[layerName] = parseFloat($(this).val());

            cake.getObjectByName(layerName).scale.x = $(this).val();
            cake.getObjectByName(layerName).scale.z = $(this).val();
        }
        else {
            $(this).attr('value',cylSize["cyl"+(parseInt($('.sel>option[value='+layerName+']').attr('id'))-1)]);
            alert("Диаметр текущего слоя не должен превышать предыдущий!");
        }
    }
    switch($('.slider').val()) {
        case '1': $('.cs').text('16 см')
            break;
        case '1.05': $('.cs').text('18 см')
            break;
        case '1.1': $('.cs').text('20 см');
            break;
        case '1.15': $('.cs').text('22 см')
            break;
        case '1.2': $('.cs').text('24 см')
            break;
        case '1.25': $('.cs').text('26 см')
            break;
        case '1.3': $('.cs').text('28 см')
            break;
        case '1.35': $('.cs').text('30 cм')
            break;
        case '1.4': $('.cs').text('32 см')
            break;
        case '1.45': $('.cs').text('34 см')
            break;
        case '1.5': $('.cs').text('36 см')
            break;
    }
    matchSize();
});

function matchSize(){
    if (parseFloat($('.slider').val()) > prevSize) {
        sliderInr.play();
    }
    else {
        sliderDcr.play();
    }
    prevSize = parseFloat($('.slider').val());
}

//Mouse moving
$('.output').mousedown(function(e){
    mouseStartPos.x = e.pageX;
    mouseStartPos.y = e.pageY;
    console.log(mouseStartPos.x);
    console.log(mouseStartPos.y);

    isDragging = true;
});

$('.output').mouseup(function(){
    isDragging = false;
});

$('.output').mousemove(function(e){
    if(isDragging == true){
        // camera.rotation.x = camera.rotation.x * Math.cos(e.pageX - mouseStartPos.x) + camera.rotation.z * Math.sin(e.pageX - mouseStartPos.x);
        cake.rotation.y += (e.pageX - mouseStartPos.x)/10000;
        // camera.rotation.x += (e.pageY - mouseStartPos.y)/10000;
    }
});

// renderer.domElement.addEventListener("click", onclick, true);
// var selectedObject;
// var raycaster = new THREE.Raycaster();
// function onclick(event) {
//     alert("onclick");
//     var mouse = new THREE.Vector2();
//     raycaster.setFromCamera(mouse, camera);
//     var intersects = raycaster.intersectObjects(cake.children, true); //array
//     console.log(intersects);
//     if (intersects.length > 0) {
//         selectedObject = intersects[0];
//         alert(selectedObject);
//         console.log(selectedObject);
//     }
// }

