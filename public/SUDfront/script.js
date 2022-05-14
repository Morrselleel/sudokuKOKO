var b, idd, val, iid;

var x = 1;
var y = 9;
var color = 1;
var swtch = 1;
var padding = '5px 36.7px 20px  56.7px';
var puzzleStatus = 'unsolved';
var brToSolv;


$(document).ready(function () {

    lampInterval()


})




//br table is used to apply the puzzle in it and this is where the user interacts with the puzzle.
//This is were all the checking happens, the sudokoSolver method takes place here.
//The reason we need this middle layer is because the answer provided must be != to the relevent 
//cells in the table so comparing brToSolve to brToSolve will always be equal out and we can't solve the puzzle!
//every answer accepted by the solver won't be stored in brToSolve it will be stored in br and treated as part 
//of the puzzle to check againest it for the future answers.

var br = [

    b, b, b, b, b, b, b, b, b,
    b, b, b, b, b, b, b, b, b,
    b, b, b, b, b, b, b, b, b,
    b, b, b, b, b, b, b, b, b,
    b, b, b, b, b, b, b, b, b,
    b, b, b, b, b, b, b, b, b,
    b, b, b, b, b, b, b, b, b,
    b, b, b, b, b, b, b, b, b,
    b, b, b, b, b, b, b, b, b
]








function colorTrans(id1, color, trans) {
    document.getElementById(id1).style.backgroundColor = color;
    document.getElementById(id1).style.WebkitTransition = trans; // Code for Safari 3.1 to 6.0
    document.getElementById(id1).style.transition = trans;
}








//Applys certain styling on correct answer to the table.
//removes the number button if the table is satisfied from this number and can't accept anymore.
function boxId(id) {
    idd = id
    iid = parseInt(id)
    var g, h;
    var w = 1;
    var boxVal = document.getElementById(id).value;
    if (boxVal != '') {
        for (h = 0; h < 81; h++) {
            if (document.getElementById(h).value != '') {
                document.getElementById(h).style.backgroundColor = 'teal'
            } else if (document.getElementById(h).value == '') {
                document.getElementById(h).style.backgroundColor = 'white'
            }
        }
        for (g = 0; g < 81; g++) {
            if (boxVal != null && document.getElementById(g).value == boxVal) {
                document.getElementById(g).style.backgroundColor = 'orange';

                document.getElementById(g).style.WebkitTransition = "all 2s"; // Code for Safari 3.1 to 6.0
                document.getElementById(g).style.transition = "all .5s";
                var wp = w++
                if (boxVal * wp == 9 && boxVal == 1) {
                    document.getElementById('btn1').style.visibility = 'hidden'
                } else if (boxVal * wp == 18 && boxVal == 2) {
                    document.getElementById('btn2').style.visibility = 'hidden'

                } else if (boxVal * wp == 27 && boxVal == 3) {
                    document.getElementById('btn3').style.visibility = 'hidden'

                } else if (boxVal * wp == 36 && boxVal == 4) {
                    document.getElementById('btn4').style.visibility = 'hidden'

                } else if (boxVal * wp == 45 && boxVal == 5) {
                    document.getElementById('btn5').style.visibility = 'hidden'

                } else if (boxVal * wp == 54 && boxVal == 6) {
                    document.getElementById('btn6').style.visibility = 'hidden'

                } else if (boxVal * wp == 63 && boxVal == 7) {
                    document.getElementById('btn7').style.visibility = 'hidden'

                } else if (boxVal * wp == 72 && boxVal == 8) {
                    document.getElementById('btn8').style.visibility = 'hidden'

                } else if (boxVal * wp == 81 && boxVal == 9) {
                    document.getElementById('btn9').style.visibility = 'hidden'
                }
            }
        }
    }
}








//assign number from 1 to 9 as an anser to the highlighted cell through clicking on button
function addNum(val) {
    var element = document.getElementById(idd)
    element.value = val;
    ev = document.createEvent('Event');
    ev.initEvent('change', true, false);
    element.dispatchEvent(ev);
}








//Apply puzzle and special styling.
function loadPuzzel() {

    if (localStorage.getItem('puzzle') == null){
        localStorage.setItem('puzzle', 1);
    }
    

    for (var i = 0; i < 81; i++) {
        document.getElementById(i).value = '';
        document.getElementById(i).style.backgroundColor = 'white'
    }

    for (var i = 1; i < 10; i++) {
        document.getElementById('btn' + i).style.visibility = 'visible'
    }

    if (localStorage.getItem('puzzle') == 1) {


        brToSolv = [

            5, 9, b, b, 7, 2, 8, 4, 1,
            b, 1, 2, b, b, 5, b, b, b,
            b, 6, 4, 3, b, 8, 5, 9, 2,
            b, 4, 7, 1, b, b, 9, 3, b,
            3, 5, b, 9, b, b, b, b, b,
            b, b, b, 7, b, b, 2, b, b,
            b, b, 6, 8, 3, 9, 4, 5, 7,
            b, b, b, 5, b, b, b, b, b,
            b, b, b, b, b, b, b, b, 3
        ];

        if (puzzleStatus == 'solved') {

            localStorage.setItem('puzzle', 2);
            brToSolv = [
                b, b, b, 2, 6, b, 7, b, 1,
                6, 8, b, b, 7, b, b, 9, b,
                1, 9, b, b, b, 4, 5, b, b,
                8, 2, b, 1, b, b, b, 4, b,
                b, b, b, 6, b, 2, 9, b, b,
                b, 5, b, b, b, 3, b, 2, 8,
                b, b, 9, 3, b, b, b, 7, 4,
                b, 4, b, b, 5, b, b, 3, 6,
                7, b, 3, b, 1, 8, b, b, b
            ];
            puzzleStatus = 'unsolved';

        }




    } else if (localStorage.getItem('puzzle') == 2) {

        brToSolv = [
            b, b, b, 2, 6, b, 7, b, 1,
            6, 8, b, b, 7, b, b, 9, b,
            1, 9, b, b, b, 4, 5, b, b,
            8, 2, b, 1, b, b, b, 4, b,
            b, b, b, 6, b, 2, 9, b, b,
            b, 5, b, b, b, 3, b, 2, 8,
            b, b, 9, 3, b, b, b, 7, 4,
            b, 4, b, b, 5, b, b, 3, 6,
            7, b, 3, b, 1, 8, b, b, b
        ];

        if (puzzleStatus == 'solved') {
            localStorage.setItem('puzzle', 3);
            brToSolv = [
                5, 3, b, b, 7, b, b, b, b,
                6, b, b, 1, 9, 5, b, b, b,
                b, 9, 8, b, b, b, b, 6, b,
                8, b, b, b, 6, b, b, b, 3,
                4, b, b, 8, b, 3, b, b, 1,
                7, b, b, b, 2, b, b, b, 6,
                b, 6, b, b, b, b, 2, 8, b,
                b, b, b, 4, 1, 9, b, b, 5,
                b, b, b, b, 8, b, b, 7, 9
            ];
            puzzleStatus = 'unsolved';
        }




    } else if (localStorage.getItem('puzzle') == 3) {
        brToSolv = [
            5, 3, b, b, 7, b, b, b, b,
            6, b, b, 1, 9, 5, b, b, b,
            b, 9, 8, b, b, b, b, 6, b,
            8, b, b, b, 6, b, b, b, 3,
            4, b, b, 8, b, 3, b, b, 1,
            7, b, b, b, 2, b, b, b, 6,
            b, 6, b, b, b, b, 2, 8, b,
            b, b, b, 4, 1, 9, b, b, 5,
            b, b, b, b, 8, b, b, 7, 9
        ];

        if (puzzleStatus == 'solved') {
            localStorage.setItem('puzzle', 4);
            brToSolv = [
                1, b, b, 4, 8, 9, b, b, 6,
                7, 3, b, b, b, b, b, 4, b,
                b, b, b, b, b, 1, 2, 9, 5,
                b, b, 7, 1, 2, b, 6, b, b,
                5, b, b, 7, b, 3, b, b, 8,
                b, b, 6, b, 9, 5, 7, b, b,
                9, 1, 4, 6, b, b, b, b, b,
                b, 2, b, b, b, b, b, 3, 7,
                8, b, b, 5, 1, 2, b, b, 4
            ];
            puzzleStatus = 'unsolved';
        }



    } else if (localStorage.getItem('puzzle') == 4) {
        brToSolv = [
            1, b, b, 4, 8, 9, b, b, 6,
            7, 3, b, b, b, b, b, 4, b,
            b, b, b, b, b, 1, 2, 9, 5,
            b, b, 7, 1, 2, b, 6, b, b,
            5, b, b, 7, b, 3, b, b, 8,
            b, b, 6, b, 9, 5, 7, b, b,
            9, 1, 4, 6, b, b, b, b, b,
            b, 2, b, b, b, b, b, 3, 7,
            8, b, b, 5, 1, 2, b, b, 4
        ];

        if (puzzleStatus == 'solved') {
            localStorage.setItem('puzzle', 5);
            brToSolv = [
                b, 6, b, 3, b, b, 8, b, 4,
                5, 3, 7, b, 9, b, b, b, b,
                b, 4, b, b, b, 6, 3, b, 7,
                b, 9, b, b, 5, 1, 2, 3, 8,
                b, b, b, b, b, b, b, b, b,
                7, 1, 3, 6, 2, b, b, 4, b,
                3, b, 6, 4, b, b, b, 1, b,
                b, b, b, b, 6, b, 5, 2, 3,
                1, b, 2, b, b, 9, b, 8, b
            ];
            puzzleStatus = 'unsolved';
        }



    } else if (localStorage.getItem('puzzle') == 5) {
        brToSolv = [
            b, 6, b, 3, b, b, 8, b, 4,
            5, 3, 7, b, 9, b, b, b, b,
            b, 4, b, b, b, 6, 3, b, 7,
            b, 9, b, b, 5, 1, 2, 3, 8,
            b, b, b, b, b, b, b, b, b,
            7, 1, 3, 6, 2, b, b, 4, b,
            3, b, 6, 4, b, b, b, 1, b,
            b, b, b, b, 6, b, 5, 2, 3,
            1, b, 2, b, b, 9, b, 8, b
        ];

        if (puzzleStatus == 'solved') {
            localStorage.setItem('puzzle', 6);
            brToSolv = [
                5, 3, b, b, 7, b, b, b, b,
                6, b, b, 1, 9, 5, b, b, b,
                b, 9, 8, b, b, b, b, 6, b,
                8, b, b, b, 6, b, b, b, 3,
                4, b, b, 8, b, 3, b, b, 1,
                7, b, b, b, 2, b, b, b, 6,
                b, 6, b, b, b, b, 2, 8, b,
                b, b, b, 4, 1, 9, b, b, 5,
                b, b, b, b, 8, b, b, 7, 9
            ];
            puzzleStatus = 'unsolved';
        }



    } else if (localStorage.getItem('puzzle') == 6) {
        brToSolv = [
            5, 3, b, b, 7, b, b, b, b,
            6, b, b, 1, 9, 5, b, b, b,
            b, 9, 8, b, b, b, b, 6, b,
            8, b, b, b, 6, b, b, b, 3,
            4, b, b, 8, b, 3, b, b, 1,
            7, b, b, b, 2, b, b, b, 6,
            b, 6, b, b, b, b, 2, 8, b,
            b, b, b, 4, 1, 9, b, b, 5,
            b, b, b, b, 8, b, b, 7, 9
        ];

        if (puzzleStatus == 'solved') {
            localStorage.setItem('puzzle', 7);
            brToSolv = [
                b, 9, 6, b, 4, b, b, 3, b,
                b, 5, 7, 8, 2, b, b, b, b,
                1, b, b, 9, b, b, 5, b, b,
                b, b, 9, b, 1, b, b, b, 8,
                5, b, b, b, b, b, b, b, 2,
                4, b, b, b, 9, b, 6, b, b,
                b, b, 4, b, b, 3, b, b, 1,
                b, b, b, b, 7, 9, 2, 6, b,
                b, 2, b, b, 5, b, 9, 8, b

            ];
            puzzleStatus = 'unsolved';
        }



    } else if (localStorage.getItem('puzzle') == 7) {
        brToSolv = [
            b, 9, 6, b, 4, b, b, 3, b,
            b, 5, 7, 8, 2, b, b, b, b,
            1, b, b, 9, b, b, 5, b, b,
            b, b, 9, b, 1, b, b, b, 8,
            5, b, b, b, b, b, b, b, 2,
            4, b, b, b, 9, b, 6, b, b,
            b, b, 4, b, b, 3, b, b, 1,
            b, b, b, b, 7, 9, 2, 6, b,
            b, 2, b, b, 5, b, 9, 8, b

        ];

        if (puzzleStatus == 'solved') {
            localStorage.setItem('puzzle', 8);
            brToSolv = [
                b, 6, b, b, b, b, b, 1, b,
                b, b, b, 6, 5, 1, b, b, b,
                1, b, 7, b, b, b, 6, b, 2,
                6, 2, b, 3, b, 5, b, 9, 4,
                b, b, 3, b, b, b, 2, b, b,
                4, 8, b, 9, b, 7, b, 3, 6,
                9, b, 6, b, b, b, 4, b, 8,
                b, b, b, 7, 9, 4, b, b, b,
                b, 5, b, b, b, b, b, 7, b
            ];
            puzzleStatus = 'unsolved';
        }


    } else if (localStorage.getItem('puzzle') == 8) {
        brToSolv = [
            b, 6, b, b, b, b, b, 1, b,
            b, b, b, 6, 5, 1, b, b, b,
            1, b, 7, b, b, b, 6, b, 2,
            6, 2, b, 3, b, 5, b, 9, 4,
            b, b, 3, b, b, b, 2, b, b,
            4, 8, b, 9, b, 7, b, 3, 6,
            9, b, 6, b, b, b, 4, b, 8,
            b, b, b, 7, 9, 4, b, b, b,
            b, 5, b, b, b, b, b, 7, b
        ];

        if (puzzleStatus == 'solved') {
            localStorage.setItem('puzzle', 9);
            brToSolv = [
                7, 4, b, b, 3, b, b, 1, b,
                b, 1, 9, b, 6, 8, 5, b, 2,
                b, b, b, b, b, 4, 3, b, b,
                b, 5, 6, 3, 7, b, b, b, 1,
                b, b, 1, 8, b, b, b, 9, 5,
                b, 9, b, b, 2, b, 6, b, b,
                1, b, 3, 4, b, 7, 2, b, b,
                5, b, b, 2, b, b, b, b, 8,
                b, 8, b, b, b, 1, 4, 7, b
            ];
            puzzleStatus = 'unsolved';
        }


    } else if (localStorage.getItem('puzzle') == 9) {
        brToSolv = [
            7, 4, b, b, 3, b, b, 1, b,
            b, 1, 9, b, 6, 8, 5, b, 2,
            b, b, b, b, b, 4, 3, b, b,
            b, 5, 6, 3, 7, b, b, b, 1,
            b, b, 1, 8, b, b, b, 9, 5,
            b, 9, b, b, 2, b, 6, b, b,
            1, b, 3, 4, b, 7, 2, b, b,
            5, b, b, 2, b, b, b, b, 8,
            b, 8, b, b, b, 1, 4, 7, b
        ];

        if (puzzleStatus == 'solved') {
            localStorage.setItem('puzzle', 10);
            brToSolv = [
                5, b, b, 4, 6, 7, 3, b, 9,
                9, b, 3, 8, 1, b, 4, 2, 7,
                1, 7, 4, 2, b, 3, b, b, b,
                2, 3, 1, 9, 7, 6, 8, 5, 4,
                8, 5, 7, 1, 2, 4, b, 9, b,
                4, 9, 6, 3, b, 8, 1, 7, 2,
                b, b, b, b, 8, 9, 2, 6, b,
                7, 8, 2, 6, 4, 1, b, b, 5,
                b, 1, b, b, b, b, 7, b, 8
            ];
            puzzleStatus = 'unsolved';
        }


    } else if (localStorage.getItem('puzzle') == 10) {
        brToSolv = [
            5, b, b, 4, 6, 7, 3, b, 9,
            9, b, 3, 8, 1, b, 4, 2, 7,
            1, 7, 4, 2, b, 3, b, b, b,
            2, 3, 1, 9, 7, 6, 8, 5, 4,
            8, 5, 7, 1, 2, 4, b, 9, b,
            4, 9, 6, 3, b, 8, 1, 7, 2,
            b, b, b, b, 8, 9, 2, 6, b,
            7, 8, 2, 6, 4, 1, b, b, 5,
            b, 1, b, b, b, b, 7, b, 8
        ];

        if (puzzleStatus == 'solved') {
            localStorage.setItem('puzzle', 1);
            brToSolv = [

                5, 9, b, b, 7, 2, 8, 4, 1,
                b, 1, 2, b, b, 5, b, b, b,
                b, 6, 4, 3, b, 8, 5, 9, 2,
                b, 4, 7, 1, b, b, 9, 3, b,
                3, 5, b, 9, b, b, b, b, b,
                b, b, b, 7, b, b, 2, b, b,
                b, b, 6, 8, 3, 9, 4, 5, 7,
                b, b, b, 5, b, b, b, b, b,
                b, b, b, b, b, b, b, b, 3
            ];

            puzzleStatus = 'unsolved';
        }

    }


    document.getElementById(0).style.borderTopLeftRadius = '10px'
    document.getElementById(8).style.borderTopRightRadius = '10px'
    document.getElementById(72).style.borderBottomLeftRadius = '10px'
    document.getElementById(80).style.borderBottomRightRadius = '10px'
    var q = ['0', '9', '18', '27', '36', '45', '54', '63', '72']
    var r = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
    var s = ['8', '17', '26', '35', '44', '53', '62', '71', '80']
    var t = ['72', '73', '74', '75', '76', '77', '78', '79', '80']
    var u = ['2', '11', '20', '29', '38', '47', '56', '65', '74']
    var v = ['5', '14', '23', '32', '41', '50', '59', '68', '77']
    var w = ['27', '28', '29', '30', '31', '32', '33', '34', '35']
    var x = ['54', '55', '56', '57', '58', '59', '60', '61', '62']

    for (var op = 0; op < 9; op++) {
        document.getElementById(q[op]).style.borderLeft = '2px solid black'
        document.getElementById(r[op]).style.borderTop = '2px solid black'
        document.getElementById(s[op]).style.borderRight = '2px solid black'
        document.getElementById(t[op]).style.borderBottom = '2px solid black'
        document.getElementById(u[op]).style.borderRight = '2px solid black'
        document.getElementById(v[op]).style.borderRight = '2px solid black'
        document.getElementById(w[op]).style.borderTop = '2px solid black'
        document.getElementById(x[op]).style.borderTop = '2px solid black'

    }



    // Assign (brToSolv) filled cells values to (br) then recolor (br) filled cells aqua 
    for (var i = 0; i < 81; i++) {
        if (brToSolv[i] != null) {
            br[i] = brToSolv[i];
            document.getElementById(i).value = brToSolv[i]
            document.getElementById(i).style.backgroundColor = 'teal'

        }
    }



}




var col = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
var row = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var square3by3 = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9];








//giving every cell a unique value that consists of column alphabet + row number + 3by3 number.
//draftTable role is to tell the sodukoSolver method on which cells to run.
var draftTable = [

    'A11', 'B11', 'C11', 'D14', 'E14', 'F14', 'G17', 'H17', 'I17',
    'A21', 'B21', 'C21', 'D24', 'E24', 'F24', 'G27', 'H27', 'I27',
    'A31', 'B31', 'C31', 'D34', 'E34', 'F34', 'G37', 'H37', 'I37',

    'A42', 'B42', 'C42', 'D45', 'E45', 'F45', 'G48', 'H48', 'I48',
    'A52', 'B52', 'C52', 'D55', 'E55', 'F55', 'G58', 'H58', 'I58',
    'A62', 'B62', 'C62', 'D65', 'E65', 'F65', 'G68', 'H68', 'I68',

    'A73', 'B73', 'C73', 'D76', 'E76', 'F76', 'G79', 'H79', 'I79',
    'A83', 'B83', 'C83', 'D86', 'E86', 'F86', 'G89', 'H89', 'I89',
    'A93', 'B93', 'C93', 'D96', 'E96', 'F96', 'G99', 'H99', 'I99'

];








function sodukoSolver(mstrt, mend, istrt, iend, pos, ans, lookUpPosition, rowPos, colPos, id) {
    var m;
    var i;
    var j;
    var position;


    //Answer applyed must be from 1 to 9                                        
    if (ans == 1 || ans == 2 || ans == 3 || ans == 4 || ans == 5 || ans == 6 || ans == 7 || ans == 8 || ans == 9) {




        /* ---------------------m & i positioning map-----------------------
        
        
           m (0 to 3) / i (0 to 3) / pos (0) = '0 A11' , '1 B11' , '2 C11',
                                               '9 A21' , '10 B21', '11 C21',
                            '                  '18 A31', '19 B31', '20 C31',
        
           m (3 to 6) / i (0 to 3) / pos (0) = '27 A42', '28 B42', '29 C42', 
                                               '36 A52', '37 B52', '38 C52',
                                               '45 A62', '46 B62', '47 C62',
        
           m (6 to 9) / i (0 to 3) / pos (0) = '54 A73', '55 B73', '56 C73',
                                               '63 A83', '64 B83', '65 C83',
                                               '72 A93', '73 B93', '74 C93',                        
                                               
           m (0 to 3) / i (3 to 6) / pos (3) = '3 D14' , '4 E14' , '5 F14',
                                               '12 D24', '13 E24', '14 F24',   
                                               '21 D34', '22 E34', '23 F34',  
                                               
           m (3 to 6) / i (3 to 6) / pos (3) = '30 D45', '31 E45', '32 F45',
                                               '39 D55', '40 E55', '41 F55',   
                                               '48 D65', '49 E65', '50 F65',   
                                             
           m (6 to 9) / i (3 to 6) / pos (3) = '57 D76', '58 E76', '59 F76',
                                               '66 D86', '67 E86', '68 F86', 
                                               '75 D96', '76 E96', '77 F96',
                                            
           m (0 to 3) / i (6 to 9) / pos (6) = '6 G17' , '7 H17' , '8 I17',
                                               '15 G27', '16 H27', '17 I27',
                                               '24 G37', '25 H37', '26 I37',
                                            
           m (3 to 6) / i (6 to 9) / pos (6) = '33 G48', '34 H48', '35 I48',
                                               '42 G58', '43 H58', '44 I58',
                                               '51 G68', '52 H68', '53 I68',
                                               
           m (6 to 9) / i (6 to 9) / pos (6) = '60 G79', '61 H79', 62 I79',
                                               '69 G89', '70 H89', '71 I89',
                                               '78 G99', '79 H99', '80 I99'
           -----------------------------------------------------------------     
        */

        //The m & i loop is to run the comparison of answered cell againest its 3by3 array.
        for (m = mstrt; m < mend; m += 3) { // move 3by3 downwords 0to3 => 3to6 => 6to9
            for (i = istrt; i < iend; i++) {  //move 3by3 to the side  0to3 => 3to6 => 6to9
                for (j = m; j < m + 3; j++) {  //row

                    //var postion takes the draftTable cell value and returns its actual array position.
                    position = draftTable.indexOf(col[i] + row[j] + (square3by3[m] + pos))

                    br[lookUpPosition] = ans  //user input
                    console.log(br[lookUpPosition] + ' / ' + brToSolv[position])
                    //compares the user answer to wards the cell's 3by3 array.
                    //if there is nothing equal to the answer in the 3by3---(  br[lookUpPosition] != brToSolv[position] )---then 
                    //the method will move to checking the row and column of the relevent cell. 
                    //if ---(  br[lookUpPosition] == brToSolv[position] )--- then the answer is wrong and it will be removed.

                    if (br[lookUpPosition] != brToSolv[position]) {

                        if (position == lookUpPosition) {

                            //compares the user answer applied in ex:cell 5 to the whole row where the cell exists 
                            //doesn't start checking from the cell the user filled but starts from the begining of the row.
                            if (br[position] != brToSolv[rowPos + 1] && br[position] != brToSolv[rowPos + 2] && br[position] != brToSolv[rowPos + 3]
                                && br[position] != brToSolv[rowPos + 4] && br[position] != brToSolv[rowPos + 5] && br[position] != brToSolv[rowPos + 6]
                                && br[position] != brToSolv[rowPos + 7] && br[position] != brToSolv[rowPos + 8]) {

                                //same mechanism applied on the row but for the column where the cell exists.
                                if (br[position] != brToSolv[colPos + 9] && br[position] != brToSolv[colPos + 18] && br[position] != brToSolv[colPos + 27]
                                    && br[position] != brToSolv[colPos + 36] && br[position] != brToSolv[colPos + 45] && br[position] != brToSolv[colPos + 54]
                                    && br[position] != brToSolv[colPos + 63] && br[position] != brToSolv[colPos + 72]) {

                                    colorTrans(id, 'teal', "all .5s");
                                    document.getElementById(id).readOnly = true;
                                    // brToSolv[position] = ans;
                                    lampInterval1('orange');
                                    boxId(id);


                                    var f;
                                    var nl = 81;
                                    for (f = 0; f < 81; f++) {
                                        if (document.getElementById(f).value < 1) {
                                            nl = nl - 1
                                        }
                                        if (nl == 81 && f == 80) {
                                            //do some cool animation after the soduko puzzle is solved completely.
                                            lampInterval3()

                                            puzzleStatus = 'solved'
                                            loadPuzzel()
                                        }
                                    }
                                } else {
                                    colorTrans(id, 'red', "all .5s");
                                    lampInterval2();
                                    setTimeout(function () {
                                        colorTrans(id, 'white', "all .5s");
                                        document.getElementById(id).value = '';
                                        lampInterval1('red');
                                    }, 500)



                                    return false;
                                }
                            } else {
                                colorTrans(id, 'red', "all .5s");
                                lampInterval2();
                                setTimeout(function () {
                                    colorTrans(id, 'white', "all .5s");
                                    document.getElementById(id).value = '';
                                    lampInterval1('red');
                                }, 500)
                                return false;
                            }
                        }
                    } else {
                        colorTrans(id, 'red', "all .5s");
                        lampInterval2();
                        setTimeout(function () {
                            colorTrans(id, 'white', "all .5s");
                            document.getElementById(id).value = '';
                            lampInterval1('red');
                        }, 500)
                        return false;
                    }
                }
            }
        }
    } else {
        colorTrans(id, 'red', "all .5s");
        lampInterval2();
        setTimeout(function () {
            colorTrans(id, 'white', "all .5s");
            document.getElementById(id).value = '';
            lampInterval1('red');
        }, 500)
        return false;
    }
}



function editNum() {

    if (brToSolv[iid] == null) {
        document.getElementById(iid).value = '';
        document.getElementById(iid).readOnly = false;
        colorTrans(iid, 'white', "all .5s");
    }
}




//Arrow control
$(document).ready(function () {
    $('.container').animate({ opacity: "100%" }, 500);
    iid = 0;
    $('#40').focus();
    document.addEventListener("keydown", function (event) {
        const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
        switch (key) { // change to event.key to key to use the above variable
            case "ArrowLeft":
                event.preventDefault();
                if (iid > 0) {
                    iid = iid - 1
                    $('#' + iid).focus();
                } else if (iid == 0) {
                    $('#0').focus();
                }
                break;
            case "ArrowRight":
                // Right pressed
                event.preventDefault();
                if (iid < 80) {
                    iid = iid + 1
                    $('#' + iid).focus();
                } else if (iid = 80) {
                    $('#80').focus();
                }
                break;
            case "ArrowUp":
                // Up pressed
                event.preventDefault();
                if (iid >= 9) {
                    iid = iid - 9
                    $('#' + iid).focus();
                }
                break;
            case "ArrowDown":
                // Down pressed
                event.preventDefault();
                if (iid < 72) {
                    iid = iid + 9
                    $('#' + iid).focus();
                }
                break;
        }
    });
})

function lampInterval() {

    var next = setInterval(function () {

        if (x < y) {

            $('#lamp' + (x)).css('background-color', 'yellow')
            $('#lamp' + (x)).css('box-shadow', '0 0 7px 7px yellow');

            $('#lamp' + (x + 8)).css('background-color', 'yellow')
            $('#lamp' + (x + 8)).css('box-shadow', '0 0 7px 7px yellow');


            $('.background' + (x)).css('background-color', 'yellow')


            x++;
        } else {
            x = 1;
            clearInterval(next);
            lampInterval1('red');
            Letters();


        }
    }, 400);
}






function lampInterval1(color) {

    var next1 = setInterval(function () {

        for (var z = 0; z < 17; z++) {

            $('.background' + z).css('transition', 'none')
            $('#lamp' + (z + 1)).css('background-color', 'yellow')
            $('#lamp' + (z + 1)).css('box-shadow', '0 0 7px 7px yellow');
            $('.background' + (z + 1)).css('background-color', 'yellow')
        }

        if (x < y) {

            $('#lamp' + x).css('background-color', color)
            $('#lamp' + (x + 1)).css('background-color', color)
            $('#lamp' + (x + 8)).css('background-color', color)
            $('#lamp' + ((x + 8) + 1)).css('background-color', color)
            $('#lamp' + x).css('box-shadow', '0 0 7px 7px ' + color);
            $('#lamp' + (x + 1)).css('box-shadow', '0 0 7px 7px ' + color);
            $('#lamp' + (x + 8)).css('box-shadow', '0 0 7px 7px ' + color);
            $('#lamp' + ((x + 8) + 1)).css('box-shadow', '0 0 7px 7px ' + color);
            $('.background' + (x + 1)).css('background-color', color)
            $('.background' + (x + 2)).css('background-color', color)
            x++
        } else {

            x = 1;
            clearInterval(next1);
            for (var z = 0; z < 8; z++) {

                $('.background' + (z)).css('box-shadow', '2px 0px 35px 3px rgb(90, 90, 90)')

                $('.background' + (z)).css('margin-top', '-2px')
                $('.background' + (z)).css('transition', 'all 1.' + (z + 10) + 's')

            }

        }
    }, 100);
}





function lampInterval2() {

    var next2 = setInterval(function () {

        if (x < y) {


            $('.background' + (x)).css('box-shadow', '2px 2px 10px 1px rgb(90, 90, 90)')
            $('.background' + (x)).css('transition', 'all 1.' + (x + 10) + 's')

            $('#lamp' + (x)).css('background-color', 'red')
            $('#lamp' + (x)).css('box-shadow', '0 0 7px 7px red');

            $('#lamp' + (x + 8)).css('background-color', 'red')
            $('#lamp' + (x + 8)).css('box-shadow', '0 0 7px 7px red');


            $('.background' + (x)).css('background-color', 'red')

            x++;
        } else {
            x = 1;
            clearInterval(next2);


        }
    }, 10);
}



function lampInterval3() {


    var next3 = setInterval(function () {


        if (x < y) {

            $('.background' + x).css('transition', 'all 1.' + (x + 10) + 's')
            $('.background' + x).css('margin-top', '0')
            $('.background' + x).css('box-shadow', '2px 2px 10px 1px rgb(90, 90, 90)')

            x++

            if (swtch == 1) {

                $('.background' + x).css('transition', 'none')
                swtch = 2
                for (var z = 0; z < 9; z++) {

                    $('.background' + (z + 1)).css('background-color', 'teal');

                    $('#lamp' + (z + 1)).css('background-color', 'teal')
                    $('#lamp' + (z + 1)).css('box-shadow', '0 0 7px 7px teal');

                    $('#lamp' + ((z + 8) + 1)).css('background-color', 'teal')
                    $('#lamp' + ((z + 8) + 1)).css('box-shadow', '0 0 7px 7px teal');

                }

            } else
                if (swtch == 2) {
                    swtch = 1

                    for (var z = 0; z < 9; z++) {
                        $('.background' + z).css('background-color', 'yellow');

                        $('#lamp' + (z + 1)).css('background-color', 'yellow')
                        $('#lamp' + (z + 1)).css('box-shadow', '0 0 7px 7px yellow');

                        $('#lamp' + ((z + 8) + 1)).css('background-color', 'yellow')
                        $('#lamp' + ((z + 8) + 1)).css('box-shadow', '0 0 7px 7px yellow');
                    }
                }

        } else {
            x = 1;
            clearInterval(next3);
            lampInterval4()
        }
    }, 400);
}


function lampInterval4() {

    var next4 = setInterval(function () {
        if (x < 20) {
            x++
            for (var z = 0; z < 9; z++) {

                var randColorR = Math.random() * 255
                var randColorG = Math.random() * 255
                var randColorB = Math.random() * 255


                $('.background' + (z + 1)).css('background-color', 'rgb(' + randColorR + ',' + randColorG + ', ' + randColorB + ')');

                $('#lamp' + (z + 1)).css('background-color', 'rgb(' + randColorR + ',' + randColorG + ', ' + randColorB + ')')
                $('#lamp' + (z + 1)).css('box-shadow', '0 0 7px 7px rgb(' + randColorR + ',' + randColorG + ', ' + randColorB + ')');

                $('#lamp' + (z + 9)).css('background-color', ' rgb(' + randColorR + ',' + randColorG + ', ' + randColorB + ')');
                $('#lamp' + (z + 9)).css('box-shadow', '0 0 7px 7px  rgb(' + randColorR + ',' + randColorG + ', ' + randColorB + ')');


            }
        } else {

            for (var z = 0; z < 9; z++) {

                $('.background' + (z + 1)).css('background-color', 'yellow');
                $('.background0').css('background-color', 'white');
                $('#lamp' + (z + 1)).css('background-color', 'yellow')
                $('#lamp' + (z + 1)).css('box-shadow', '0 0 7px 7px yellow');

                $('#lamp' + ((z + 8) + 1)).css('background-color', 'yellow')
                $('#lamp' + ((z + 8) + 1)).css('box-shadow', '0 0 7px 7px yellow');
            }

            x = 1;
            clearInterval(next4);
            noLetters();
        }

    }, 100);






}

function noLetters() {

    var letters = ['s', 'u', 'd', 'o1', 'k1', 'o2', 'k2', 'o3', 'k3', 'o4']


    for (var z = 0; z < 10; z++) {

        $('.' + letters[z]).css('transform', 'translate(0px,0)');

    }



    setTimeout(function () {
        for (var z = 0; z < 10; z++) {
            $('.' + letters[z]).css('opacity', '0');
        }
        Letters()
    }, 500)

}


function Letters() {

    var letters = ['s', 'u', 'd', 'o1', 'k1', 'o2', 'k2', 'o3', 'k3', 'o4']

    for (var z = 0; z < 10; z++) {

        if (z < 6) {
            $('.' + letters[z]).css('opacity', '1');
            $('.' + letters[z]).css('transform', 'translate(-50px,0)');
        } else
            if (z > 5) {
                $('.' + letters[z]).css('opacity', '1');
                $('.' + letters[z]).css('transform', 'translate(50px,0)');
            }
    }


    lettersInterval()

}


function lettersInterval() {

    var letters = ['s', 'u', 'd', 'o1', 'k1', 'o2', 'k2', 'o3', 'k3', 'o4']
    var next5 = setInterval(function () {

        if (x < 9) {
            x++

            for (var z = 0; z < 10; z++) {


                var randColorR = Math.random() * 255
                var randColorG = Math.random() * 255
                var randColorB = Math.random() * 255


                $('.' + letters[z]).css('color', 'rgb(' + randColorR + ',' + randColorG + ', ' + randColorB + ')');


            }

        } else {
            x = 1;
            for (var z = 0; z < 10; z++) {

                $('.' + letters[z]).css('color', 'teal');
            }
            clearInterval(next5);
        }

    }, 300);

}








