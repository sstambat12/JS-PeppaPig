//document.getElementById("myBody").style.backgroundColor ="lightblue";
let mommy = document.getElementById('mommy');
let daddy = document.getElementById('daddy');
let george = document.getElementById('george');
let peppa = document.getElementById('peppa');
let piggy = peppa;
daddy.addEventListener('touchend', function(e){
    piggy = daddy;
});

mommy.addEventListener('touchend', function(e){
    piggy = mommy;
});

george.addEventListener('touchend', function(e){
    piggy = george;
});

peppa.addEventListener('touchend', function(e){
    piggy = peppa;
});
document.body.addEventListener('keydown', function(e)
{
    switch (e.key) {
        case "ArrowLeft":
            // Left pressed
            if(Number.parseInt(piggy.style.left) > 0)
            {
                piggy.style.left = (Number.parseInt(piggy.style.left) - 10) + "px" ;
                piggy.style.transform = "none";
            }
            break;
        case "ArrowRight":
            // Right pressed
            if(Number.parseInt(piggy.style.left) + piggy.clientWidth < document.body.clientWidth)
            {
                piggy.style.left = (Number.parseInt(piggy.style.left) + 10) + "px" ;
                piggy.style.transform = "scaleX(-1)";
            }
            break;
        case "ArrowUp":
            // Up pressed
            let origpos = Number.parseInt(piggy.style.top);
            let curpos = origpos;
            var id = setInterval(frame, 10);
            function frame() {
                if (curpos <= origpos-(piggy.clientHeight/2)) {
                    clearInterval(id);
                    id = setInterval(frameDown, 10);
                } else {
                    curpos--;
                    piggy.style.top = curpos + 'px';
                    
                }
            }

            function frameDown(){
                if(curpos >= origpos)
                {
                    clearInterval(id);
                }else{
                    curpos++;
                    piggy.style.top = curpos + 'px';
                }
            }
            break;
        case "ArrowDown":
            // Down pressed
            break;
    }
});
