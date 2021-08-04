var blue_1 = false;
var blue_2 = false;
var blue_3 = false;
var blue_4 = false;
var blue_5 = false;
var blue_6 = false;
var blue_7 = false;
var blue_8 = false;
var blue_9 = false;

var red_1 = false;
var red_2= false;
var red_3= false;
var red_4= false;
var red_5= false;
var red_6= false;
var red_7= false;
var red_8= false;
var red_9= false;

function btn_1_b(blue_1, red_1){
    if((blue_1 == false) && (red_1 == false)){
        document.getElementById('c1').innerHTML = 'O';
        var blue_1 = true;
        var red_1 = true;
        blue_win();
    }

}

function btn_2_b(blue_2, red_2){
    if((blue_2 == false) && (red_2 == false)){
        document.getElementById('c2').innerHTML = 'O';
        var blue_2 = true;
        var red_2 = true;
        blue_win();
    }
}

function btn_3_b(blue_3, red_3){
    if((blue_3 == false) && (red_3 == false)){
        document.getElementById('c3').innerHTML = 'O';
        var blue_3 = true;
        var red_3 = true;
        blue_win();
    }
}

function btn_4_b(blue_4, red_4){
    if((blue_4 == false) && (red_4 == false)){
        document.getElementById('c4').innerHTML = 'O';
        var blue_4 = true;
        var red_4 = true;
    }
}

function btn_5_b(blue_5, red_5){
    if((blue_5 == false) && (red_5 == false)){
        document.getElementById('c5').innerHTML = 'O';
        var blue_5 = true;
        var red_5 = true;
        blue_win();
    }
}

function btn_6_b(blue_6, red_6){
    if((blue_6 == false) && (red_6 == false)){
        document.getElementById('c6').innerHTML = 'O';
        var blue_6 = true;
        var red_6 = true;
        blue_win();
    }
}

function btn_7_b(blue_7, red_7){
    if((blue_7 == false) && (red_7 == false)){
        document.getElementById('c7').innerHTML = 'O';
        var blue_7 = true;
        var red_7 = true;
        blue_win();
    }
}

function btn_8_b(blue_8, red_8){
    if((blue_8 == false) && (red_8 == false)){
        document.getElementById('c8').innerHTML = 'O';
        var blue_8 = true;
        var red_8 = true;
        blue_win();
    }
}

function btn_9_b(blue_9, red_9){
    if((blue_9 == false) && (red_9 == false)){
        document.getElementById('c9').innerHTML = 'O';
        var blue_9 = true;
        var red_9 = true;
        blue_win();
    }
}

// Red Buttons

function btn_1_r(blue_1, red_1){
    if((blue_1 == false) && (red_1 == false)){
        document.getElementById('c1').innerHTML = 'X';
        var blue_1 = true;
        var red_1 = true;
        red_win();
    }
}

function btn_2_r(blue_2, red_2){
    if((blue_2 == false) && (red_2 == false)){
        document.getElementById('c2').innerHTML = 'X';
        var blue_2 = true;
        var red_2 = true;
        red_win();
    }
}

function btn_3_r(blue_3, red_3){
    if((blue_3 == false) && (red_3 == false)){
        document.getElementById('c3').innerHTML = 'X';
        var blue_3  = true;
        var red_3  = true;
        red_win();
    }
}

function btn_4_r(blue_4, red_4){
    if((blue_4 == false) && (red_4 == false)){
        document.getElementById('c4').innerHTML = 'X';
        var blue_4 = true;
        var red_4 = true;
        red_win();
    }
}

function btn_5_r(blue_5, red_5){
    if((blue_5 == false) && (red_5 == false)){
        document.getElementById('c5').innerHTML = 'X';
        var blue_5 = true;
        var red_5 = true;
        red_win();
    }
}

function btn_6_r(blue_6, red_6){
    if((blue_6 == false) && (red_6 == false)){
        document.getElementById('c6').innerHTML = 'X';
        var blue_6 = true;
        var red_6 = true;
        red_win();
    }
}

function btn_7_r(blue_7, red_7){
    if((blue_7 == false) && (red_7 == false)){
        document.getElementById('c7').innerHTML = 'X';
        var blue_7 = true;
        var red_7 = true;
        red_win();
    }
}

function btn_8_r(blue_8, red_8){
    if((blue_8 == false) && (red_8 == false)){
        document.getElementById('c8').innerHTML = 'X';
        var blue_8 = true;
        var red_8 = true;
        red_win();
    }
}

function btn_9_r(blue_9, red_9){
    if((blue_9 == false) && (red_9 == false)){
        document.getElementById('c9').innerHTML = 'X';
        var blue_9 = true;
        var red_9 = true;
        red_win();
        
    }
}

function blue_win(){
    var one = document.getElementById('c1');
    var two = document.getElementById('c2');
    var three = document.getElementById('c3');
    var four = document.getElementById('c4');
    var five = document.getElementById('c5');
    var six = document.getElementById('c6');
    var seven = document.getElementById('c7');
    var eight = document.getElementById('c8');
    var nine = document.getElementById('c9');

    if((one.innerHTML == 'O') && (five.innerHTML == 'O') && (nine.innerHTML == "O")){
        var celeb = document.createElement('img');
        celeb.src = "images/rickroll.gif"
        document.getElementById('winner-blue').appendChild(celeb)
        document.getElementById('tag-2').innerHTML = 'WINNER !!'
        replay();
    }

    if((three.innerHTML == 'O') && (five.innerHTML == 'O') && (seven.innerHTML == "O")){
        var celeb = document.createElement('img');
        celeb.src = "images/rickroll.gif"
        document.getElementById('winner-blue').appendChild(celeb)
        document.getElementById('tag-2').innerHTML = 'WINNER !!'
        replay();
    }

    if((one.innerHTML == 'O') && (two.innerHTML == 'O') && (three.innerHTML == "O")){
        var celeb = document.createElement('img');
        celeb.src = "images/rickroll.gif"
        document.getElementById('winner-blue').appendChild(celeb)
        document.getElementById('tag-2').innerHTML = 'WINNER !!'
        replay();
    }

    if((four.innerHTML == 'O') && (five.innerHTML == 'O') && (six.innerHTML == "O")){
        var celeb = document.createElement('img');
        celeb.src = "images/rickroll.gif"
        document.getElementById('winner-blue').appendChild(celeb)
        document.getElementById('tag-2').innerHTML = 'WINNER !!'
        replay();
    }

    if((seven.innerHTML == 'O') && (eight.innerHTML == 'O') && (nine.innerHTML == "O")){
        var celeb = document.createElement('img');
        celeb.src = "images/rickroll.gif"
        document.getElementById('winner-blue').appendChild(celeb)
        document.getElementById('tag-2').innerHTML = 'WINNER !!'
        replay();
    }

    if((one.innerHTML == 'O') && (four.innerHTML == 'O') && (seven.innerHTML == "O")){
        var celeb = document.createElement('img');
        celeb.src = "images/rickroll.gif"
        document.getElementById('winner-blue').appendChild(celeb)
        document.getElementById('tag-2').innerHTML = 'WINNER !!'
        replay();
    }

    if((three.innerHTML == 'O') && (six.innerHTML == 'O') && (nine.innerHTML == "O")){
        var celeb = document.createElement('img');
        celeb.src = "images/rickroll.gif"
        document.getElementById('winner-blue').appendChild(celeb)
        document.getElementById('tag-2').innerHTML = 'WINNER !!'
        replay();
    }

    if((two.innerHTML == 'O') && (five.innerHTML == 'O') && (eight.innerHTML == "O")){
        var celeb = document.createElement('img');
        celeb.src = "images/rickroll.gif"
        document.getElementById('winner-blue').appendChild(celeb)
        document.getElementById('tag-2').innerHTML = 'WINNER !!'
        replay();
    }

}

function red_win(){
    var one = document.getElementById('c1');
    var two = document.getElementById('c2');
    var three = document.getElementById('c3');
    var four = document.getElementById('c4');
    var five = document.getElementById('c5');
    var six = document.getElementById('c6');
    var seven = document.getElementById('c7');
    var eight = document.getElementById('c8');
    var nine = document.getElementById('c9');

    if((one.innerHTML == 'X') && (five.innerHTML == 'X') && (nine.innerHTML == "X")){
        var celeb = document.createElement('img');
        celeb.src = "images/rickroll.gif"
        document.getElementById('winner-red').appendChild(celeb)
        document.getElementById('tag-1').innerHTML = 'WINNER !!'
        replay();
    }

    if((three.innerHTML == 'X') && (five.innerHTML == 'X') && (seven.innerHTML == "X")){
        var celeb = document.createElement('img');
        celeb.src = "images/rickroll.gif"
        document.getElementById('winner-red').appendChild(celeb)
        document.getElementById('tag-1').innerHTML = 'WINNER !!'
        replay();
    }

    if((one.innerHTML == 'X') && (two.innerHTML == 'X') && (three.innerHTML == "X")){
        var celeb = document.createElement('img');
        celeb.src = "images/rickroll.gif"
        document.getElementById('winner-red').appendChild(celeb)
        document.getElementById('tag-1').innerHTML = 'WINNER !!'
        replay();
    }

    if((four.innerHTML == 'X') && (five.innerHTML == 'X') && (six.innerHTML == "X")){
        var celeb = document.createElement('img');
        celeb.src = "images/rickroll.gif"
        document.getElementById('winner-red').appendChild(celeb)
        document.getElementById('tag-1').innerHTML = 'WINNER !!'
        replay();
    }

    if((seven.innerHTML == 'X') && (eight.innerHTML == 'X') && (nine.innerHTML == "X")){
        var celeb = document.createElement('img');
        celeb.src = "images/rickroll.gif"
        document.getElementById('winner-red').appendChild(celeb)
        document.getElementById('tag-1').innerHTML = 'WINNER !!'
        replay();
    }

    if((one.innerHTML == 'X') && (four.innerHTML == 'X') && (seven.innerHTML == "X")){
        var celeb = document.createElement('img');
        celeb.src = "images/rickroll.gif"
        document.getElementById('winner-red').appendChild(celeb)
        document.getElementById('tag-1').innerHTML = 'WINNER !!'
        replay();
    }

    if((two.innerHTML == 'X') && (five.innerHTML == 'X') && (eight.innerHTML == "X")){
        var celeb = document.createElement('img');
        celeb.src = "images/rickroll.gif"
        document.getElementById('winner-red').appendChild(celeb)
        document.getElementById('tag-1').innerHTML = 'WINNER !!'
        replay();
    }

    if((three.innerHTML == 'X') && (six.innerHTML == 'X') && (nine.innerHTML == "X")){
        var celeb = document.createElement('img');
        celeb.src = "images/rickroll.gif";
        document.getElementById('winner-red').appendChild(celeb);
        document.getElementById('tag-1').innerHTML = 'WINNER !!';
        replay();
    }
}

function replay(){
    var r_btn = document.createElement('a');
    r_btn.innerHTML = 'REPLAY';
    r_btn.setAttribute('id', 'reset_btn')
    r_btn.href = 'index.html'
    document.getElementById('replay').appendChild(r_btn);
}

// function reset(){
//     document.getElementById('row', 'div-1', 'div-2', 'div-3','div-4','div-5','div-6','div-7','div-8','div-9').remove;
//     var rs_btn = createElement('btn');
//     rs_btn.innerHTML = 'RESET';
//     document.getElementById('playboard').appendChild(rs_btn);
// }