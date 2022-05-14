<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SudokuKOKO</title>
    <link rel="shortcut icon" href="{{asset('SUDfront/icon/sudoku.ico')}}">
    <link rel="stylesheet" href="{{asset('SUDfront/style.css')}}">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
</head>

<body onload="loadPuzzel()">








    <div class="container background8">



        <h1 class="letter s">s</h1>
        <h1 class="letter o4">o</h1>


        <div class="container background7">
            <h1 class="letter u">u</h1>
            <h1 class="letter k3">k</h1>

            <div class="container background6">

                <h1 class="letter d">d</h1>
                <h1 class="letter o3">o</h1>

                <div class="container background5">
                    <h1 class="letter o1">o</h1>
                    <h1 class="letter k2">k</h1>
                    <div class="container background4">
                        <h1 class="letter k1">k</h1>

                        <div class="container background3">
                            <h1 class="letter o2">u</h1>

                            <div class="container background2">

                                <div class="container background1">

                                    <div class="container background0">

                                        <div class="container lightWallLeft">
                                            <div class="container lightningBall" id="lamp1"></div>
                                            <div class="container lightningBall" id="lamp2"></div>
                                            <div class="container lightningBall" id="lamp3"></div>
                                            <div class="container lightningBall" id="lamp4"></div>
                                            <div class="container lightningBall" id="lamp5"></div>
                                            <div class="container lightningBall" id="lamp6"></div>
                                            <div class="container lightningBall" id="lamp7"></div>
                                            <div class="container lightningBall" id="lamp8"></div>

                                        </div>

                                        <div class="container lightWallRight">
                                            <div class="container lightningBall" id="lamp9"></div>
                                            <div class="container lightningBall" id="lamp10"></div>
                                            <div class="container lightningBall" id="lamp11"></div>
                                            <div class="container lightningBall" id="lamp12"></div>
                                            <div class="container lightningBall" id="lamp13"></div>
                                            <div class="container lightningBall" id="lamp14"></div>
                                            <div class="container lightningBall" id="lamp15"></div>
                                            <div class="container lightningBall" id="lamp16"></div>

                                        </div>

                                        <table style="margin-bottom:43px">
                                            <tr>
                                                <td><input type="text" class="box" name="" id="0" maxlength="1"
                                                        onchange="sodukoSolver(0,3,0,3,0,document.getElementById('0').value,0,0,0,'0') "
                                                        onfocus=" boxId('0')"></td>
                                                <td><input type="text" class="box" name="" id="1" maxlength="1"
                                                        onchange="sodukoSolver(0,3,0,3,0,document.getElementById('1').value,1,0,1,'1') "
                                                        onfocus=" boxId('1')"></td>
                                                <td><input type="text" class="box" name="" id="2" maxlength="1"
                                                        onchange="sodukoSolver(0,3,0,3,0,document.getElementById('2').value,2,0,2,'2') "
                                                        onfocus=" boxId('2')"></td>
                                                <td><input type="text" class="box" name="" id="3" maxlength="1"
                                                        onchange="sodukoSolver(0,3,3,6,3,document.getElementById('3').value,3,0,3,'3') "
                                                        onfocus=" boxId('3')"></td>
                                                <td><input type="text" class="box" name="" id="4" maxlength="1"
                                                        onchange="sodukoSolver(0,3,3,6,3,document.getElementById('4').value,4,0,4,'4') "
                                                        onfocus=" boxId('4')"></td>
                                                <td><input type="text" class="box" name="" id="5" maxlength="1"
                                                        onchange="sodukoSolver(0,3,3,6,3,document.getElementById('5').value,5,0,5,'5') "
                                                        onfocus=" boxId('5')"></td>
                                                <td><input type="text" class="box" name="" id="6" maxlength="1"
                                                        onchange="sodukoSolver(0,3,6,9,6,document.getElementById('6').value,6,0,6,'6') "
                                                        onfocus=" boxId('6')"></td>
                                                <td><input type="text" class="box" name="" id="7" maxlength="1"
                                                        onchange="sodukoSolver(0,3,6,9,6,document.getElementById('7').value,7,0,7,'7') "
                                                        onfocus=" boxId('7')"></td>
                                                <td><input type="text" class="box" name="" id="8" maxlength="1"
                                                        onchange="sodukoSolver(0,3,6,9,6,document.getElementById('8').value,8,0,8,'8') "
                                                        onfocus=" boxId('8')"></td>

                                            </tr>
                                            <tr>
                                                <td><input type="text" class="box" name="" id="9" maxlength="1"
                                                        onchange="sodukoSolver(0,3,0,3,0,document.getElementById('9').value,9,9,0,'9') "
                                                        onfocus=" boxId('9')"></td>
                                                <td><input type="text" class="box" name="" id="10" maxlength="1"
                                                        onchange="sodukoSolver(0,3,0,3,0,document.getElementById('10').value,10,9,1,'10') "
                                                        onfocus=" boxId('10')"></td>
                                                <td><input type="text" class="box" name="" id="11" maxlength="1"
                                                        onchange="sodukoSolver(0,3,0,3,0,document.getElementById('11').value,11,9,2,'11') "
                                                        onfocus=" boxId('11')"></td>
                                                <td><input type="text" class="box" name="" id="12" maxlength="1"
                                                        onchange="sodukoSolver(0,3,3,6,3,document.getElementById('12').value,12,9,3,'12') "
                                                        onfocus=" boxId('12')"></td>
                                                <td><input type="text" class="box" name="" id="13" maxlength="1"
                                                        onchange="sodukoSolver(0,3,3,6,3,document.getElementById('13').value,13,9,4,'13') "
                                                        onfocus=" boxId('13')"></td>
                                                <td><input type="text" class="box" name="" id="14" maxlength="1"
                                                        onchange="sodukoSolver(0,3,3,6,3,document.getElementById('14').value,14,9,5,'14') "
                                                        onfocus=" boxId('14')"></td>
                                                <td><input type="text" class="box" name="" id="15" maxlength="1"
                                                        onchange="sodukoSolver(0,3,6,9,6,document.getElementById('15').value,15,9,6,'15') "
                                                        onfocus=" boxId('15')"></td>
                                                <td><input type="text" class="box" name="" id="16" maxlength="1"
                                                        onchange="sodukoSolver(0,3,6,9,6,document.getElementById('16').value,16,9,7,'16') "
                                                        onfocus=" boxId('16')"></td>
                                                <td><input type="text" class="box" name="" id="17" maxlength="1"
                                                        onchange="sodukoSolver(0,3,6,9,6,document.getElementById('17').value,17,9,8,'17') "
                                                        onfocus=" boxId('17')"></td>

                                            </tr>

                                            <tr id="row">
                                                <td><input type="text" class="box" name="" id="18" maxlength="1"
                                                        onchange="sodukoSolver(0,3,0,3,0,document.getElementById('18').value,18,18,0,'18') "
                                                        onfocus=" boxId('18')"></td>
                                                <td><input type="text" class="box" name="" id="19" maxlength="1"
                                                        onchange="sodukoSolver(0,3,0,3,0,document.getElementById('19').value,19,18,1,'19') "
                                                        onfocus=" boxId('19')"></td>
                                                <td><input type="text" class="box" name="" id="20" maxlength="1"
                                                        onchange="sodukoSolver(0,3,0,3,0,document.getElementById('20').value,20,18,2,'20') "
                                                        onfocus=" boxId('20')"></td>
                                                <td><input type="text" class="box" name="" id="21" maxlength="1"
                                                        onchange="sodukoSolver(0,3,3,6,3,document.getElementById('21').value,21,18,3,'21') "
                                                        onfocus=" boxId('21')"></td>
                                                <td><input type="text" class="box" name="" id="22" maxlength="1"
                                                        onchange="sodukoSolver(0,3,3,6,3,document.getElementById('22').value,22,18,4,'22') "
                                                        onfocus=" boxId('22')"></td>
                                                <td><input type="text" class="box" name="" id="23" maxlength="1"
                                                        onchange="sodukoSolver(0,3,3,6,3,document.getElementById('23').value,23,18,5,'23') "
                                                        onfocus=" boxId('23')"></td>
                                                <td><input type="text" class="box" name="" id="24" maxlength="1"
                                                        onchange="sodukoSolver(0,3,6,9,6,document.getElementById('24').value,24,18,6,'24') "
                                                        onfocus=" boxId('24')"></td>
                                                <td><input type="text" class="box" name="" id="25" maxlength="1"
                                                        onchange="sodukoSolver(0,3,6,9,6,document.getElementById('25').value,25,18,7,'25') "
                                                        onfocus=" boxId('25')"></td>
                                                <td><input type="text" class="box" name="" id="26" maxlength="1"
                                                        onchange="sodukoSolver(0,3,6,9,6,document.getElementById('26').value,26,18,8,'26') "
                                                        onfocus=" boxId('26')"></td>

                                            </tr>

                                            <tr id="row">
                                                <td><input type="text" class="box" name="" id="27" maxlength="1"
                                                        onchange="sodukoSolver(3,6,0,3,0,document.getElementById('27').value,27,27,0,'27') "
                                                        onfocus=" boxId('27')"></td>
                                                <td><input type="text" class="box" name="" id="28" maxlength="1"
                                                        onchange="sodukoSolver(3,6,0,3,0,document.getElementById('28').value,28,27,1,'28') "
                                                        onfocus=" boxId('28')"></td>
                                                <td><input type="text" class="box" name="" id="29" maxlength="1"
                                                        onchange="sodukoSolver(3,6,0,3,0,document.getElementById('29').value,29,27,2,'29') "
                                                        onfocus=" boxId('29')"></td>
                                                <td><input type="text" class="box" name="" id="30" maxlength="1"
                                                        onchange="sodukoSolver(3,6,3,6,3,document.getElementById('30').value,30,27,3,'30') "
                                                        onfocus=" boxId('30')"></td>
                                                <td><input type="text" class="box" name="" id="31" maxlength="1"
                                                        onchange="sodukoSolver(3,6,3,6,3,document.getElementById('31').value,31,27,4,'31') "
                                                        onfocus=" boxId('31')"></td>
                                                <td><input type="text" class="box" name="" id="32" maxlength="1"
                                                        onchange="sodukoSolver(3,6,3,6,3,document.getElementById('32').value,32,27,5,'32') "
                                                        onfocus=" boxId('32')"></td>
                                                <td><input type="text" class="box" name="" id="33" maxlength="1"
                                                        onchange="sodukoSolver(3,6,6,9,6,document.getElementById('33').value,33,27,6,'33') "
                                                        onfocus=" boxId('33')"></td>
                                                <td><input type="text" class="box" name="" id="34" maxlength="1"
                                                        onchange="sodukoSolver(3,6,6,9,6,document.getElementById('34').value,34,27,7,'34') "
                                                        onfocus=" boxId('34')"></td>
                                                <td><input type="text" class="box" name="" id="35" maxlength="1"
                                                        onchange="sodukoSolver(3,6,6,9,6,document.getElementById('35').value,35,27,8,'35') "
                                                        onfocus=" boxId('35')"></td>

                                            </tr>

                                            <tr id="row">
                                                <td><input type="text" class="box" name="" id="36" maxlength="1"
                                                        onchange="sodukoSolver(3,6,0,3,0,document.getElementById('36').value,36,36,0,'36') "
                                                        onfocus=" boxId('36')"></td>
                                                <td><input type="text" class="box" name="" id="37" maxlength="1"
                                                        onchange="sodukoSolver(3,6,0,3,0,document.getElementById('37').value,37,36,1,'37') "
                                                        onfocus=" boxId('37')"></td>
                                                <td><input type="text" class="box" name="" id="38" maxlength="1"
                                                        onchange="sodukoSolver(3,6,0,3,0,document.getElementById('38').value,38,36,2,'38') "
                                                        onfocus=" boxId('38')"></td>
                                                <td><input type="text" class="box" name="" id="39" maxlength="1"
                                                        onchange="sodukoSolver(3,6,3,6,3,document.getElementById('39').value,39,36,3,'39') "
                                                        onfocus=" boxId('39')"></td>
                                                <td><input type="text" class="box" name="" id="40" maxlength="1"
                                                        onchange="sodukoSolver(3,6,3,6,3,document.getElementById('40').value,40,36,4,'40') "
                                                        onfocus=" boxId('40')"></td>
                                                <td><input type="text" class="box" name="" id="41" maxlength="1"
                                                        onchange="sodukoSolver(3,6,3,6,3,document.getElementById('41').value,41,36,5,'41') "
                                                        onfocus=" boxId('41')"></td>
                                                <td><input type="text" class="box" name="" id="42" maxlength="1"
                                                        onchange="sodukoSolver(3,6,6,9,6,document.getElementById('42').value,42,36,6,'42') "
                                                        onfocus=" boxId('42')"></td>
                                                <td><input type="text" class="box" name="" id="43" maxlength="1"
                                                        onchange="sodukoSolver(3,6,6,9,6,document.getElementById('43').value,43,36,7,'43') "
                                                        onfocus=" boxId('43')"></td>
                                                <td><input type="text" class="box" name="" id="44" maxlength="1"
                                                        onchange="sodukoSolver(3,6,6,9,6,document.getElementById('44').value,44,36,8,'44') "
                                                        onfocus=" boxId('44')"></td>

                                            </tr>

                                            <tr id="row">
                                                <td><input type="text" class="box" name="" id="45" maxlength="1"
                                                        onchange="sodukoSolver(3,6,0,3,0,document.getElementById('45').value,45,45,0,'45') "
                                                        onfocus=" boxId('45')"></td>
                                                <td><input type="text" class="box" name="" id="46" maxlength="1"
                                                        onchange="sodukoSolver(3,6,0,3,0,document.getElementById('46').value,46,45,1,'46') "
                                                        onfocus=" boxId('46')"></td>
                                                <td><input type="text" class="box" name="" id="47" maxlength="1"
                                                        onchange="sodukoSolver(3,6,0,3,0,document.getElementById('47').value,47,45,2,'47') "
                                                        onfocus=" boxId('47')"></td>
                                                <td><input type="text" class="box" name="" id="48" maxlength="1"
                                                        onchange="sodukoSolver(3,6,3,6,3,document.getElementById('48').value,48,45,3,'48') "
                                                        onfocus=" boxId('48')"></td>
                                                <td><input type="text" class="box" name="" id="49" maxlength="1"
                                                        onchange="sodukoSolver(3,6,3,6,3,document.getElementById('49').value,49,45,4,'49') "
                                                        onfocus=" boxId('49')"></td>
                                                <td><input type="text" class="box" name="" id="50" maxlength="1"
                                                        onchange="sodukoSolver(3,6,3,6,3,document.getElementById('50').value,50,45,5,'50') "
                                                        onfocus=" boxId('50')"></td>
                                                <td><input type="text" class="box" name="" id="51" maxlength="1"
                                                        onchange="sodukoSolver(3,6,6,9,6,document.getElementById('51').value,51,45,6,'51') "
                                                        onfocus=" boxId('51')"></td>
                                                <td><input type="text" class="box" name="" id="52" maxlength="1"
                                                        onchange="sodukoSolver(3,6,6,9,6,document.getElementById('52').value,52,45,7,'52') "
                                                        onfocus=" boxId('52')"></td>
                                                <td><input type="text" class="box" name="" id="53" maxlength="1"
                                                        onchange="sodukoSolver(3,6,6,9,6,document.getElementById('53').value,53,45,8,'53') "
                                                        onfocus=" boxId('53')"></td>

                                            </tr>

                                            <tr id="row">
                                                <td><input type="text" class="box" name="" id="54" maxlength="1"
                                                        onchange="sodukoSolver(6,9,0,3,0,document.getElementById('54').value,54,54,0,'54') "
                                                        onfocus=" boxId('54')"></td>
                                                <td><input type="text" class="box" name="" id="55" maxlength="1"
                                                        onchange="sodukoSolver(6,9,0,3,0,document.getElementById('55').value,55,54,1,'55') "
                                                        onfocus=" boxId('55')"></td>
                                                <td><input type="text" class="box" name="" id="56" maxlength="1"
                                                        onchange="sodukoSolver(6,9,0,3,0,document.getElementById('56').value,56,54,2,'56') "
                                                        onfocus=" boxId('56')"></td>
                                                <td><input type="text" class="box" name="" id="57" maxlength="1"
                                                        onchange="sodukoSolver(6,9,3,6,3,document.getElementById('57').value,57,54,3,'57') "
                                                        onfocus=" boxId('57')"></td>
                                                <td><input type="text" class="box" name="" id="58" maxlength="1"
                                                        onchange="sodukoSolver(6,9,3,6,3,document.getElementById('58').value,58,54,4,'58') "
                                                        onfocus=" boxId('58')"></td>
                                                <td><input type="text" class="box" name="" id="59" maxlength="1"
                                                        onchange="sodukoSolver(6,9,3,6,3,document.getElementById('59').value,59,54,5,'59') "
                                                        onfocus=" boxId('59')"></td>
                                                <td><input type="text" class="box" name="" id="60" maxlength="1"
                                                        onchange="sodukoSolver(6,9,6,9,6,document.getElementById('60').value,60,54,6,'60') "
                                                        onfocus=" boxId('60')"></td>
                                                <td><input type="text" class="box" name="" id="61" maxlength="1"
                                                        onchange="sodukoSolver(6,9,6,9,6,document.getElementById('61').value,61,54,7,'61') "
                                                        onfocus=" boxId('61')"></td>
                                                <td><input type="text" class="box" name="" id="62" maxlength="1"
                                                        onchange="sodukoSolver(6,9,6,9,6,document.getElementById('62').value,62,54,8,'62') "
                                                        onfocus=" boxId('62')"></td>


                                            </tr>
                                            <tr id="row">
                                                <td><input type="text" class="box" name="" id="63" maxlength="1"
                                                        onchange="sodukoSolver(6,9,0,3,0,document.getElementById('63').value,63,63,0,'63') "
                                                        onfocus=" boxId('63')"></td>
                                                <td><input type="text" class="box" name="" id="64" maxlength="1"
                                                        onchange="sodukoSolver(6,9,0,3,0,document.getElementById('64').value,64,63,1,'64') "
                                                        onfocus=" boxId('64')"></td>
                                                <td><input type="text" class="box" name="" id="65" maxlength="1"
                                                        onchange="sodukoSolver(6,9,0,3,0,document.getElementById('65').value,65,63,2,'65') "
                                                        onfocus=" boxId('65')"></td>
                                                <td><input type="text" class="box" name="" id="66" maxlength="1"
                                                        onchange="sodukoSolver(6,9,3,6,3,document.getElementById('66').value,66,63,3,'66') "
                                                        onfocus=" boxId('66')"></td>
                                                <td><input type="text" class="box" name="" id="67" maxlength="1"
                                                        onchange="sodukoSolver(6,9,3,6,3,document.getElementById('67').value,67,63,4,'67') "
                                                        onfocus=" boxId('67')"></td>
                                                <td><input type="text" class="box" name="" id="68" maxlength="1"
                                                        onchange="sodukoSolver(6,9,3,6,3,document.getElementById('68').value,68,63,5,'68') "
                                                        onfocus=" boxId('68')"></td>
                                                <td><input type="text" class="box" name="" id="69" maxlength="1"
                                                        onchange="sodukoSolver(6,9,6,9,6,document.getElementById('69').value,69,63,6,'69') "
                                                        onfocus=" boxId('69')"></td>
                                                <td><input type="text" class="box" name="" id="70" maxlength="1"
                                                        onchange="sodukoSolver(6,9,6,9,6,document.getElementById('70').value,70,63,7,'70') "
                                                        onfocus=" boxId('70')"></td>
                                                <td><input type="text" class="box" name="" id="71" maxlength="1"
                                                        onchange="sodukoSolver(6,9,6,9,6,document.getElementById('71').value,71,63,8,'71') "
                                                        onfocus=" boxId('71')"></td>


                                            </tr>
                                            <tr id="row">
                                                <td><input type="text" class="box" name="" id="72" maxlength="1"
                                                        onchange="sodukoSolver(6,9,0,3,0,document.getElementById('72').value,72,72,0,'72') "
                                                        onfocus=" boxId('72')"></td>
                                                <td><input type="text" class="box" name="" id="73" maxlength="1"
                                                        onchange="sodukoSolver(6,9,0,3,0,document.getElementById('73').value,73,72,1,'73') "
                                                        onfocus=" boxId('73')"></td>
                                                <td><input type="text" class="box" name="" id="74" maxlength="1"
                                                        onchange="sodukoSolver(6,9,0,3,0,document.getElementById('74').value,74,72,2,'74') "
                                                        onfocus=" boxId('74')"></td>
                                                <td><input type="text" class="box" name="" id="75" maxlength="1"
                                                        onchange="sodukoSolver(6,9,3,6,3,document.getElementById('75').value,75,72,3,'75') "
                                                        onfocus=" boxId('75')"></td>
                                                <td><input type="text" class="box" name="" id="76" maxlength="1"
                                                        onchange="sodukoSolver(6,9,3,6,3,document.getElementById('76').value,76,72,4,'76') "
                                                        onfocus=" boxId('76')"></td>
                                                <td><input type="text" class="box" name="" id="77" maxlength="1"
                                                        onchange="sodukoSolver(6,9,3,6,3,document.getElementById('77').value,77,72,5,'77') "
                                                        onfocus=" boxId('77')"></td>
                                                <td><input type="text" class="box" name="" id="78" maxlength="1"
                                                        onchange="sodukoSolver(6,9,6,9,6,document.getElementById('78').value,78,72,6,'78') "
                                                        onfocus=" boxId('78')"></td>
                                                <td><input type="text" class="box" name="" id="79" maxlength="1"
                                                        onchange="sodukoSolver(6,9,6,9,6,document.getElementById('79').value,79,72,7,'79') "
                                                        onfocus=" boxId('79')"></td>
                                                <td><input type="text" class="box" name="" id="80" maxlength="1"
                                                        onchange="sodukoSolver(6,9,6,9,6,document.getElementById('80').value,80,72,8,'80') "
                                                        onfocus=" boxId('80')"></td>
                                            </tr>

                                        </table>

                                        <div class="container"
                                            style="border:0px solid red;height:50px;margin-left:2px;margin-top:-30px">

                                            <div class="container ">

                                                <input type="button" value="1" id="btn1" class="btn press"
                                                    onclick="addNum(1)">

                                            </div>

                                            <div class="container " style="margin-left:32px">

                                                <input type="button" value="2" id="btn2" class="btn press"
                                                    onclick="addNum(2)">

                                            </div>
                                            <div class="container " style="margin-left:64px">

                                                <input type="button" value="3" id="btn3" class="btn press"
                                                    onclick="addNum(3)">

                                            </div>
                                            <div class="container " style="margin-left:96px">

                                                <input type="button" value="4" id="btn4" class="btn press"
                                                    onclick="addNum(4)">
                                            </div>

                                            <div class="container " style="margin-left:128px">

                                                <input type="button" value="5" id="btn5" class="btn press"
                                                    onclick="addNum(5)">
                                            </div>

                                            <div class="container " style="margin-left:160px">

                                                <input type="button" value="6" id="btn6" class="btn press"
                                                    onclick="addNum(6)">
                                            </div>

                                            <div class="container " style="margin-left:192px">

                                                <input type="button" value="7" id="btn7" class="btn press"
                                                    onclick="addNum(7)">
                                            </div>

                                            <div class="container " style="margin-left:224px">

                                                <input type="button" value="8" id="btn8" class="btn press"
                                                    onclick="addNum(8)">
                                            </div>

                                            <div class="container " style="margin-left:256px">

                                                <input type="button" value="9" id="btn9" class="btn press"
                                                    onclick="addNum(9)">
                                            </div>
                                            <div class="container " style="margin-left:288px;">
                                                <div class="btn press edit ">
                                                    <a value="" id="btnEdit" class="bi bi-pencil-square "
                                                        onclick="editNum()"><a>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <script src="{{asset('SUDfront/script.js')}}"></script>

    <script>





    </script>

</body>

</html>