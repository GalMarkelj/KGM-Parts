//------------------------------------map glowing automatic changer ------------------------
$(document).ready(function(){
    var umetnina = $('.umetnina');
    var barve =[
        '#00FFFF',
        '0089FF',
        '#0A1AFF',
        '#9A00FF',
        '#9A00FF',
        '#FF00AB',
        '#FF0000'
    ]
    var stevec = 0;
    function changeBackground(){
        ukaz = '0px 0px 40px 20px' + barve[stevec];
        umetnina.css('box-shadow', ukaz);
        stevec++;

        if(stevec >= 7){
            stevec = 0
        }
    }
    setInterval(changeBackground,1000);
})
//------------------------------------map glowing automatic changer ------------------------

