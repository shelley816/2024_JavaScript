var body = document.body;


function goRocket(e){
    switch(e.keyCode){
        case 90:
            document.querySelector('.rocket-1').style.bottom = '2000px';
            break;
        case 88:
            document.querySelector('.rocket-2').style.bottom = '2000px';
            break;
        case 67:
            document.querySelector('.rocket-3').style.bottom = '2000px';
            break;
    }
}

body.addEventListener('keydown',goRocket,false);