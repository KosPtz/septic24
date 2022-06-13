<style>
/*Общий Контейнер*/
.wheel_wrp {
    width: inherit;
    box-sizing: border-box;
    box-shadow: 0 0 0 10px #ffffff, 0 0 15px 3px #ababab;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
}
/*Ось колеса в центре*/
.wheel_wrp:after {
    content: "";
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
/*Оформление сектора*/
.wheel_sector{
    width: 0px;
    height: 0px;
    border-style: solid;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
/*Оформление разделительных линий*/
.wheel_line {
    background-color: #fff; /*Цвет линии*/
    transform: rotate(0deg);
    height: 4px;
    position: absolute;
    z-index: 99;
}
/*Оформление текста*/
.wheel_textcont {
    position: absolute;
    top: 0;
    z-index: 99999;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    align-items: center;
    font-family: 'Open Sans',Arial,sans-serif;
    font-weight: 300;
    color: #000;
    font-size: 13px;
    line-height: 1.4;
    text-align: center;
}
.wheel_textcont div {
    transform: rotate(-90deg);
    margin-top: 30px;
    width: 120px;
}
/*Иконка*/
.wheel_textcont img {
    width: 55px;
    transform: rotate(-90deg);
    margin-top: 15px;
}
/*Адаптив текст + иконка*/
@media screen and (max-width:1200px){
.wheel_textcont div
{
    width: 75px;
    margin-top: 27px;    
    font-size: 10px;    
}    
.wheel_textcont img {
    width: 50px;
    margin-top: 15px;
}
}
@media screen and (max-width:480px){
    .wheel_textcont div
{
    width: 70px;
    margin-top: 25px;    
    font-size: 10px;    
} 
.wheel_textcont img {
    width: 55px;
    margin-top: 10px;
}
}
.spin_wheel , .open-wheel , .close-wheel{ cursor:pointer}
.spin_wheel {  transition: all 0.3s linear}
.spin_wheel:hover {filter: sepia(1)}
.form_noactive{
    opacity:0.4;
    pointer-events:none;
}
.wheel_form .t-input-subtitle,
.wheel_form input.t-input{
    text-align: center;
}
/*Показать блок если ширина более 480*/
@media screen and (min-width:1200px){
.wheel-pos{
    position:fixed;    
    width:100%;
    top:0;
    z-index:9999;
}
.wheel-time{transition: transform 1.2s ease-in-out}
.slide-wheel{transform: translateX(-100%)}
.wheel-open-body{overflow:hidden}
}
html {
  scroll-behavior: smooth;
}
</style>
<script>
$( document ).ready(function() {
    
//Список секторов : Цвет - Текст - ссылка на иконку    
let wheelOption = [
    ['#EBF7FE' , 'Сервисный<br><strong>Выезд <p>инженера</p></strong>' , 'https://static.tildacdn.com/tild3365-3561-4838-a232-636635383232/premium-icon-enginee.png' , 'https://static.tildacdn.com/tild6537-3936-4337-b838-653339383138/party_2.png',],
    ['#C7E2FB' , 'Аварийная<br><strong>Сигнализация</strong>' , 'https://static.tildacdn.com/tild6135-6638-4563-a233-626366323239/premium-icon-fire-al.png' , 'https://static.tildacdn.com/tild6537-3936-4337-b838-653339383138/party_2.png',],
    ['#f9b8c9' , '-10%<br><strong>На покупку <p>септика</p></strong>' , 'https://static.tildacdn.com/tild3263-6562-4539-b939-363131383438/nasospng_32.png' , 'https://static.tildacdn.com/tild6537-3936-4337-b838-653339383138/party_2.png',],
    ['#EBF7FE' , 'Игрушка<br><strong>Плюшевый <p>мишка</p></strong>' , 'https://static.tildacdn.com/tild6631-3132-4330-b130-643839333161/3989895.svg' , 'https://static.tildacdn.com/tild6537-3936-4337-b838-653339383138/party_2.png',],
    ['#C7E2FB' , 'Запас<br><strong>Бактерий</strong>' , 'https://static.tildacdn.com/tild6164-3032-4638-b435-323934626333/free-icon-bacteria-8.png' , 'https://static.tildacdn.com/tild6537-3936-4337-b838-653339383138/party_2.png',],
    ['#f9b8c9' , '-20%<br><strong>На монтаж септика</strong>' , 'https://static.tildacdn.com/tild3930-3330-4965-a566-333163353536/free-icon-repair-too.png' , 'https://static.tildacdn.com/tild6537-3936-4337-b838-653339383138/party_2.png',],
    
    ['#EBF7FE' , 'Бесплатная<br><strong>Доставка</strong>' , 'https://thumb.tildacdn.com/tild3936-3539-4738-b932-666431616163/-/resize/200x/-/format/webp/free-icon-free-shipp.png' , 'https://static.tildacdn.com/tild6537-3936-4337-b838-653339383138/party_2.png',],
    ['#C7E2FB' , 'Дренажный<br><strong>Насос</strong>' , 'https://static.tildacdn.com/tild6162-6162-4466-a337-386465613163/nasospng_32.png' , 'https://static.tildacdn.com/tild6537-3936-4337-b838-653339383138/party_2.png',],
    ['#f9b8c9' , '-20%<br><strong>На покупку септика</strong>' , 'https://static.tildacdn.com/tild3536-6639-4366-a134-363437316131/premium-icon-discoun.png' , 'https://static.tildacdn.com/tild6537-3936-4337-b838-653339383138/party_2.png',],
    
];

//Создаём элемент в Zero
let sector = wheelOption.length;
$('.wheelfortune').append('<div class="wheel_wrp"></div>');
$('.wheelfortune').html($('.wheel_wrp'));
let wheelRec = $('.wheelfortune').closest('.t-rec');
wheelRec.addClass('wheel-pos slide-wheel');
$('.close-wheel').fadeOut(200);
//Кол-во оборотов до остановки
let maxRevolution = 20;
//Время вращения
let spinTime = 7;
let spinFinish = false;
let resizeTxt;
let diameter;

//Создание колеса
function creatingWheel(){
//Диаметр колеса
diameter = $('.wheel_wrp').width();
//Угол сектора
let angle = Number(((360*Math.PI)/(sector*180)).toFixed(3));
//Катет сектора
let sectorHalfWidth = 0.5*diameter*Math.tan(angle/2);
//Заполняем сектора
for (let i=0; i<sector; i++){
$('.wheel_wrp').append('<div class="wheel_sector bg-sector'+i+'"></div><div class="wheel_line line-sector'+i+'"></div><div class="wheel_textcont text-sector'+i+'"><div></div><img src='+wheelOption[i][2]+'></div><img2 src='+wheelOption[i][3]+'></div>');
//Формируем угол поворота и задаём цвет
$('.bg-sector'+i+'').css({
    "transform":"rotate("+(360*i/sector+90)+"deg)",
    "border-color": ""+wheelOption[i][0]+" transparent"
});
//Отрисовка границ сектора
$('.line-sector'+i+'').css({
    "width" : diameter/2+"px",
    "transform" : "rotate("+((360*i/sector)+(180*(sector-1))/sector)+"deg)",
    "height":"4px",
    "top" : "calc(50% - 2px)",
    "transform-origin" : diameter/2+"px 2px"
});
//Расставляем текст
$('.text-sector'+i+' div').html(wheelOption[i][1]);
// Формируем угол для текста
$('.text-sector'+i+'').css({"transform":"rotate("+(360*i/sector+90)+"deg)"});
};
//Форма сектора
$('.wheel_sector').css({
    "border-width": (diameter/2)+"px "+sectorHalfWidth+"px 0",
    "transform-origin": ""+sectorHalfWidth+"px "+(diameter/2)+"px",
    "left":((diameter/2)-sectorHalfWidth)+"px"
});
//Форма текста
$('.wheel_textcont').css({
    "width": (diameter/2)+"px",
    "height": (diameter/2)+"px",
    "transform-origin": ""+(diameter/4)+"px "+(diameter/2)+"px",
    "left":((diameter/2)-(diameter/4))+"px",
});
}; creatingWheel();

//Вращение колеса
function spinWheel(deg){
    $('.wheel_wrp').css({
       "height": diameter+"px",
       "transform" : "rotate("+deg+"deg)",
       "transition": "transform "+spinTime+"s cubic-bezier(0, 0.76, 0.5, 1.01)"
    });
};spinWheel(0);
//Случайный сектор    
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let finalSector = -1;
//При нажатии на кнопку вращения
$('.spin_wheel .tn-atom').click(function(e) {
 
    //Получаем финальный сектор 
    finalSector = getRandomInRange(0, sector-1);
    //Поворачиваем колесо
setTimeout(function(){
spinWheel(maxRevolution*360 +  (finalSector*360)/sector );
}, 325);
	
    if (finalSector==0) finalSector=sector;
    //Выводим текст и картинку
    setTimeout(function(){
    let prizTxt = wheelOption[sector-finalSector][1];
    let prizeImg = wheelOption[sector-finalSector][2];
    let salutimg = wheelOption[sector-finalSector][3];
    spinFinish = true;
    finalStep('Ваш приз:<br>'+prizTxt, prizeImg, salutimg);
    //Сохраняем результат
    let finalResult  = {
        text: prizTxt , 
        img: prizeImg ,
		img2: salutimg ,
        sect:finalSector
    };
    localStorage.setItem('_code_w', JSON.stringify(finalResult));
    }, spinTime*1000);
    setTimeout(function(){
	window.scrollTo('.wheel_form button', document.body.scrollHeight);	
    }, spinTime*1150);
});
  
//Проверка прошлого вращения
let prevResult = localStorage.getItem('_code_w');let prevList;
let prevSend = localStorage['_wh_send'];
if (prevResult) {
    prevList = JSON.parse(prevResult);
    spinFinish = true;
    $('.wheel_form button').attr('type','submit');
    let preffTxt = '<u>Ваш прошлый приз:</u><br>';
    if(prevSend){
        preffTxt = '<u>Заявка уже была отправлена</u><br>';
        blockForm();
        spinFinish = false;
    };
    	window.scrollTo('.wheel_form button', document.body.scrollHeight);	
    finalStep(preffTxt+prevList.text, prevList.img, prevList.img2);
    spinWheel( (prevList.sect*360)/sector );
	
};

//Блокируем форму
function blockForm(){
if(!prevResult || prevSend ){
$('.wheel_form').addClass('form_noactive');
setTimeout(function(){$('.wheel_form button').attr('type','button')}, 1500);
};
};blockForm();

//Отправка формы
$('.wheel_form').delegate(".t-submit", "click", function(){
    setTimeout(function(){
        if ( $('.wheel_form .t-form').hasClass("js-send-form-success")){
            console.log(4654);
            localStorage['_wh_send'] = 'sf';blockForm();closeWheel();
        };
    }, 1000);
});

//Отрисовка финального шага
function finalStep(prizTxt, prizeImg, salutimg){
	//Удаляем кнопку
   $('.spin_wheel').remove(); 
   
    $('.present_text .tn-atom').html(prizTxt);
    $('.present_img img').attr({
        'data-original':prizeImg,
        'src':prizeImg
    });
    $('.salut_img img').attr({
        'data-original':salutimg,
        'src':salutimg
    });	
    //Открываем форму
   if(spinFinish){ 
    $('.wheel_form').removeClass('form_noactive');
    $('.wheel_form button').attr('type','submit');
	};
    //Заполняем поле
    setTimeout(function(){
        resizeTxt = prizTxt.replace(/<\/?[^>]+>/g,' ');
        $('input[name="sector_prize"]').val(resizeTxt);
    }, 2500);
};
//Изменение размера окна
$( window ).resize(function() {
clearTimeout(window.resizedFinished); 
window.resizedFinished = setTimeout(function(){
    $('.wheel_wrp').empty();creatingWheel();
    if(finalSector>=0) { spinWheel( (finalSector*360)/sector )
    }else if (prevResult) {
        spinWheel( (prevList.sect*360)/sector );
    }else{spinWheel();};
    setTimeout(function(){    
        if(!spinFinish){  $('.wheel_form button').attr('type','button');
        }else{ $('input[name="sector_prize"]').val(resizeTxt) };
    }, 3500);    
}, 500);
});  
//Показать блок
let firstOpen = true;
    $('body').addClass('wheel-open-body');
    wheelRec.addClass('wheel-time').removeClass('slide-wheel');
    if(firstOpen && !prevResult ) {spinWheel(360); firstOpen = false};
    setTimeout(function(){
       $('.close-wheel').fadeIn(200);
       t_lazyload_update();
    }, 550);
});
function closeWheel()
{
setTimeout(function(){
	location.reload();
}, 2500);
};
</script>
