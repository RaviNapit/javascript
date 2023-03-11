
var p0_global = 0;
var p0_local  = 0;
var p1_global = 0;
var p1_local  = 0;
var activeplayer = 0;
var dice_value = 1;




function render() {
    document.getElementById('score-0').textContent = p0_global;
    document.getElementById('current-0').textContent = p0_local;
    
    document.getElementById('score-1').textContent = p1_global;
    document.getElementById('current-1').textContent = p1_local;

    document.getElementById('dice-value').textContent = dice_value;

    if (activeplayer == 0){
        document.getElementById('player-0-panel').classList.add('active');
        document.getElementById('player-1-panel').classList.remove('active');
    } else {
        document.getElementById('player-0-panel').classList.remove('active');
        document.getElementById('player-1-panel').classList.add('active');
    }
    
}


function check_for_one() {
    if ( dice_value == 1 ) {
        p0_local = 0;
        p1_local = 0;
        activeplayer = (activeplayer + 1) % 2;
        console.log(" got one changing the player to ", activeplayer);
        return true; 
    }
    return false;
}




function new_game() {
    activeplayer = 0;
    p0_global = 0;
    p0_local  = 0;
    p1_global = 0;
    p1_local  = 0;
    dice_value = 1;

    render()
}




function roll_dice() {
    dice_value = 1 + Math.floor(Math.random()*6);
    
    if (check_for_one()) {
        render();
        return
    }

    if(activeplayer == 0) {
        p0_local += dice_value;
        console.log("player one local", p0_local);
    } else {
        p1_local += dice_value;
        console.log("player two local", p1_local);
    }
    render();
}


 function hold() {
    if (activeplayer == 0) {
        p0_global += p0_local;
        p0_local  = 0;
    } else {
        p1_global += p1_local;
        p1_local = 0;
    }
    activeplayer = (activeplayer + 1) % 2;
    render();
 }





document.querySelector('.btn-new')
    .addEventListener('click', new_game);



document.querySelector('.btn-roll')
    .addEventListener('click', roll_dice)


document.querySelector('.btn-hold')
    .addEventListener('click', hold)

