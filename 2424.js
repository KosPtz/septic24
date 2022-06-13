<style>
/*Скрываем наши блоки по ID*/
/*#rec450797810 {
    display:none;
}
#rec452183809 {
    display:none;
}
#rec452184130 {
    display:none;
}
#rec452184584 {
    display:none;
}*/

</style>
<script>
$('#rec450797810').hide();
$('#rec452183809').hide();
$('#rec452184130').hide();
$('#rec452184584').hide();
$('.repeatbtn .tn-atom').hide();
//document.getElementsByClassName('scrollt').style.visibility='hidden';
//let a = document.getElementById('elem1').value;
//Итоговый список
//function sumfn(a,b){return a + b}
let fa = '.fmodel';
let fb = '.fchelo';
let fc = '.fsbros';
let fd = '.fobjem'; //sobrabotka
let fe = '.fscena';
let ff = '.fscroll';
let fv = ' .tn-atom';
let fi = 0;
const placesInfos = Array.from(  {length: 40 }, () => [fa + fi + fv, fb + fi + fv, fc + fi + fv, fd + fi + fv, fe + fi + fv, ff + fi + fv, fi++ ]);  

let pa = '.smodel';
let pb = '.schelo';
let pc = '.sobrabotka';
let pd = '.sobjem';
let pe = '.scena';
let pv = ' .tn-atom';
let pi = 0;
const placesOpt = Array.from(  {length: 40 }, () => [pa + pi + pv, pb + pi + pv, pc + pi + pv, pd + pi + pv, pe + pi + pv, pi++ ]);  

function finishlist(){
let septicOption = [
// ['тип (0 - авт канал. 1 - септик)', 'ИМЯ МОДЕЛИ','кол-о пользователей','объем в литрах','сброс','цена',]     
   ['1','ДАЛОС БИО 1.0','3','600','150','56000',],    //0
   ['1','ДАЛОС БИО 2.0','5','1000','250','72500',],    //1
   ['1','ДАЛОС БИО 3.0','8','1500','350','88000',], //2
]; 
let septicOption3 = [
// ['тип (0 - авт канал. 1 - септик)', 'ИМЯ МОДЕЛИ','кол-о пользователей','объем в литрах','сброс','цена',]     
   ['0','KoloVesi 3','3','600','210','175900',],    //0
   ['0','BioDeka 3','3','500','140','111000',],//1    
   ['0','OPTIMA 3','3','500','180','102000',], //2
   ['0','АСТРА 3','3','600','150','109310',],    //3
   ['0','GARDA 3','3','600','180','91170',],    //4
   ['0','ВОЛГАРЬ 3','3','600','190','112860',],//5
   ['0','ЕВРОЛОС ЭКО 3','3','600','0','59565',],//6 
   ['0','ЕВРОЛОС БИО 3','3','600','150','102505',], //7
   ['0','ЕВРОЛОС ПРО 3','3','600','150','107825',],  //8
   ['0','BioDevice 3 ECO','3','600','150','83610',],   //9
   ['0','BioDevice 3','3','600','153','107800',],     //10
   ['0','BioDevice 3 PRO','3','600','245','125910',],  //11
   ['0','ДАЛОС 3','3','600','250','115500',],   //12
   ['0','Юнисеп 0.6','3','600','150','83300',], //13
   ['0','КРИСТАЛЛ БИО 3','3','600','250','104186',],//14  
   ['0','КРИСТАЛЛ БИО 3 ПРО','3','600','250','115211',], //15
   ['0','ГРИНЛОС Аэро 3','3','600','150','113130',], //16
   ['0','ГРИНЛОС Накопитель 3','3','600','180','73130',], //17
]; //18
let septicOption4 = [
// ['тип (0 - авт канал. 1 - септик)', 'ИМЯ МОДЕЛИ','кол-о пользователей','объем в литрах','сброс','цена',]     
//   ['0','ТОПАС-С 4','4','800','175','126180','',],
   ['0','ТОПАС 4','4','800','175','120000',],
   ['0','Zörde 4','4','800','260','139900',],
 //  ['0','Zörde 4-M','4','800','260','155900',],
 //  ['0','Zörde 4-L','4','800','260','164900',],   
   ['0','BioDeka 4','4','800','190','117000',],     
   ['0','OPTIMA 4','4','700','210','107000',],       
 //  ['0','OPTIMA 4-M','3','500','180','109500',],    
   ['0','Genesis 350','4','800','350','186300',],
   ['0','АСТРА 4','4','800','180','113815',],   
   ['0','GARDA 4','4','800','210','95220',],
   ['0','ЕВРОЛОС ЭКО 4','4','800','0','66310 ',], 
   ['0','ЕВРОЛОС БИО 4','4','800','180','107635',],  
   ['0','ЕВРОЛОС ПРО 4','4','800','180','116470',], 
   ['0','BioDevice 4 ECO','4','800','200','88110',],   
   ['0','BioDevice 4 ','4','800','209','115500',],   
   ['0','BioDevice 4 PRO','4','800','300','135810',],  
   ['0','ЕВРОБИОН РАУНД 4','4','800','200','118000',], 
   ['0','Юнисеп 0.8','4','800','180','96050',],  
   ['0','ГРИНЛОС Аэро 4','4','800','200','119610',], //16
   ['0','ГРИНЛОС Накопитель 4','4','800','230','77760',], //17   
]; 

let septicOption5 = [
// ['тип (0 - авт канал. 1 - септик)', 'ИМЯ МОДЕЛИ','кол-о пользователей','объем в литрах','сброс','цена',]     
  // ['0','ТОПАС-С 5','5','1000','220','150120',],
   ['0','ТОПАС 5','5','1000','220','142560',],
   ['0','KoloVesi 5','5','1000','260','208900',],
   ['0','BioDeka 5','5','1000','250','128000',],
   ['0','OPTIMA 5','5','900','260','121000',],
   ['0','АСТРА 5','5','1000','250','131325',],
   ['0','GARDA 5','5','1000','270','102420',],   
   ['0','ВОЛГАРЬ 5','5','1000','280','117090',],   
   ['0','ЕВРОЛОС ЭКО 5','5','1000','0','73055',],   
   ['0','ЕВРОЛОС БИО 5','5','1000','210','114380',],  
   ['0','ЕВРОЛОС ПРО 5','5','1000','210','122930',],
   ['0','BioDevice 5 ECO','5','1000','250','94410',],  
   ['0','BioDevice 5','5','1000','263','124900',],   
   ['0','BioDevice 5 PRO','5','1000','350','143910',],
   ['0','КОЛОС','5','800','180','102000',],
   ['0','ДАЛОС 5','5','1000','340','142500',],
   ['0','ЕВРОБИОН 5','5','900','320','125000',],
   ['0','Юнисеп 1.0','5','1000','250','104550',],   
   ['0','КРИСТАЛЛ БИО 5','5','1000','300','115762',],   
   ['0','КРИСТАЛЛ БИО 5 ПРО','5','1000','300','126787',],   
   ['0','ГРИНЛОС Аэро 5','5','1000','300','124020',], //16
   ['0','ГРИНЛОС Накопитель 5','5','1000','280','83520',], //17      
   //['0','КРИСТАЛЛ 5','5','1000','300','126787',],   
]; 
let septicOption6 = [
   ['0','ТОПАС 6','6','1150','250','145520',],
   ['0','BioDeka 6','6','1200','290','155000',],
   ['0','OPTIMA 6','6','1100','320','135000',],
   ['0','Genesis 500','6','1200','500','229300',],
   ['0','АСТРА 6','6','1200','280','139315',],
   ['0','GARDA 6','6','1200','210','110880',],   
   ['0','ЕВРОЛОС ЭКО 6','6','1300','0','82460',],   
   ['0','ЕВРОЛОС БИО 6','6','1300','270','125400',],  
   ['0','ЕВРОЛОС ПРО 6','6','1300','270','135280',],
   ['0','ГРИНЛОС Аэро 6','6','1200','360','134910',], //16
   ['0','ГРИНЛОС Накопитель 6','6','1200','340','91440',], //17         
   //['0','КРИСТАЛЛ 5','5','1000','300','126787',],   
]; 
let septicOption7 = [
   ['0','Zörde 7 ','7','1400','320','168900',],
   ['0','АСТРА 7','7','1400','300','145775',],
   //['0','КРИСТАЛЛ 5','5','1000','300','126787',],   
]; 
let septicOption8 = [
   ['0','ТОПАС 8','8','1500','440','214600',],
   ['0','KoloVesi 8','8','1600','320','232900',],
   ['0','BioDeka 8','8','1600','380','179000',],
   ['0','OPTIMA 8','8','1500','410','165000',],
   ['0','АСТРА 8','8','1600','350','160140',],
   ['0','GARDA 8','8','1600','400','128790',],   
   ['0','ВОЛГАРЬ 8','8','1600','520','143280',],   
   ['0','ЕВРОЛОС ЭКО 8','8','1600','0','97850',],   
   ['0','ЕВРОЛОС БИО 8','8','1600','370','146585',], 
   ['0','ЕВРОЛОС ПРО 8','8','1600','370','154755',],  
   ['0','BioDevice 8 ECO','8','1400','350','132210',],  
   ['0','BioDevice 8','8','1600','421','168210',],   
   ['0','BioDevice 8 PRO','8','1600','510','207810',],
   ['0','КОЛОС ПРО','8','1400','410','148500',],
   ['0','ДАЛОС 8','8','1600','500','160500',],
   ['0','ЕВРОБИОН 8','8','1600','630','166100',],
   ['0','Юнисеп 1.8','8','1600','350','121550',],   
   ['0','КРИСТАЛЛ БИО 8','8','1600','600','138075',],   
   ['0','КРИСТАЛЛ БИО 8 ПРО','8','1600','600','148837 ',], 
   ['0','ГРИНЛОС Аэро 8','8','1400','400','154440',], //16
   ['0','ГРИНЛОС Накопитель 8','8','1400','390','106380',], //17    
   ['0','ГРИНЛОС Профи 8','8','1600','480','175900',], //17    
   
   //['0','КРИСТАЛЛ 5','5','1000','300','126787',],   
]; 
let septicOption9 = [
   ['0','Genesis 700','9','1800','700','269300',],
   ['0','АСТРА 9','9','1800','450','166515',],
   //['0','КРИСТАЛЛ 5','5','1000','300','126787',],   
]; 
let septicOption10 = [
   ['0','ТОПАС-С 10','10','2000','760','214320',],
   ['0','KoloVesi 10','10','2000','400','278900',],
   ['0','BioDeka 10','10','2000','570','211000',],
   ['0','АСТРА 10','10','2000','350','210460',],
   ['0','GARDA 10','10','2000','590','161550',],   
   ['0','ВОЛГАРЬ 10','10','2000','690','176580',],   
   ['0','ЕВРОЛОС ЭКО 10','10','2000','0','119700',],   
   ['0','ЕВРОЛОС БИО 10','10','2000','550','184015',], 
   ['0','ЕВРОЛОС ПРО 10','10','2000','550','192565',],  
   ['0','BioDevice 10 ECO','10','1800','450','141210',],  
   ['0','BioDevice 10','10','2000','503','185310',],   
   ['0','ДАЛОС 10','10','2000','700','186500',],
   ['0','ЕВРОБИОН 10','10','2000','800','221100',],
   ['0','ГРИНЛОС Аэро 10','10','2000','550','196830',], 
   ['0','ГРИНЛОС Накопитель 10','10','2000','560','129240',],    
   ['0','ГРИНЛОС Профи 10','10','2200','650','203900',],      
   //['0','КРИСТАЛЛ 5','5','1000','300','126787',],   
];
let septicOption12 = [
   
   ['0','ЕВРОЛОС ЭКО 12','12','2400','0','136895',],  
   ['0','ГРИНЛОС Профи 12','12','2800','850','276900',],      
   //['0','КРИСТАЛЛ 5','5','1000','300','126787',],   
];
let septicOption13 = [
   ['0','Genesis 1000','13','2600','1000','321100',],
];
let septicOption15 = [
   ['0','KoloVesi 15','15','3000','600','344900',],    
   ['0','BioDeka 15','15','3000','750','245000',],
   ['0','ЕВРОЛОС ЭКО 15','15','3000','0','164635',],  
   ['0','ГРИНЛОС Профи 15','15','3400','950','312900',],    
   //['0','КРИСТАЛЛ 5','5','1000','300','126787',],   
]; 
let septicOption20 = [
   ['0','BioDeka 20','20','4000','950','300000',],
   //['0','КРИСТАЛЛ 5','5','1000','300','126787',],   
]; 
 //Получаем значение Тип объекта
  var myElement = document.querySelector('.warning_btn .tn-atom');
  var tip = $('input[name="tips"]').val(); 
  var ppl = $('input[name="lydi"]').val() / 200;
  var cenamontaja = $('input[name="montaj"]').val();
  let finalCost = [
  [+septicOption[0][5] + +cenamontaja,],      
  [+septicOption[1][5] + +cenamontaja,],
  [+septicOption[2][5] + +cenamontaja,], 
  ];
  let finalCost3 = [
  [+septicOption3[0][5] + +cenamontaja,],      
  [+septicOption3[1][5] + +cenamontaja,],
  [+septicOption3[2][5] + +cenamontaja,],
  [+septicOption3[3][5] + +cenamontaja,],      
  [+septicOption3[4][5] + +cenamontaja,],
  [+septicOption3[5][5] + +cenamontaja,],  
  [+septicOption3[6][5] + +cenamontaja,],      
  [+septicOption3[7][5] + +cenamontaja,],
  [+septicOption3[8][5] + +cenamontaja,],
  [+septicOption3[9][5] + +cenamontaja,],      
  [+septicOption3[10][5] + +cenamontaja,],
  [+septicOption3[11][5] + +cenamontaja,],    
  [+septicOption3[12][5] + +cenamontaja,],
  [+septicOption3[13][5] + +cenamontaja,],  
  [+septicOption3[14][5] + +cenamontaja,],  
  [+septicOption3[15][5] + +cenamontaja,],  
  [+septicOption3[16][5] + +cenamontaja,],  
  [+septicOption3[17][5] + +cenamontaja,],  
  ];
 let finalCost4 = [
  [+septicOption4[0][5] + +cenamontaja,],      
  [+septicOption4[1][5] + +cenamontaja,],
  [+septicOption4[2][5] + +cenamontaja,],
  [+septicOption4[3][5] + +cenamontaja,],      
  [+septicOption4[4][5] + +cenamontaja,],
  [+septicOption4[5][5] + +cenamontaja,],  
  [+septicOption4[6][5] + +cenamontaja,],      
  [+septicOption4[7][5] + +cenamontaja,],
  [+septicOption4[8][5] + +cenamontaja,],
  [+septicOption4[9][5] + +cenamontaja,],      
  [+septicOption4[10][5] + +cenamontaja,],
  [+septicOption4[11][5] + +cenamontaja,],    
  [+septicOption4[12][5] + +cenamontaja,],
  [+septicOption4[13][5] + +cenamontaja,],  
  [+septicOption4[14][5] + +cenamontaja,],  
  [+septicOption4[15][5] + +cenamontaja,],  
  [+septicOption4[16][5] + +cenamontaja,],    
  ];  
 let finalCost5 = [
  [+septicOption5[0][5] + +cenamontaja,],      
  [+septicOption5[1][5] + +cenamontaja,],
  [+septicOption5[2][5] + +cenamontaja,],
  [+septicOption5[3][5] + +cenamontaja,],      
  [+septicOption5[4][5] + +cenamontaja,],
  [+septicOption5[5][5] + +cenamontaja,],  
  [+septicOption5[6][5] + +cenamontaja,],      
  [+septicOption5[7][5] + +cenamontaja,],
  [+septicOption5[8][5] + +cenamontaja,],
  [+septicOption5[9][5] + +cenamontaja,],      
  [+septicOption5[10][5] + +cenamontaja,],
  [+septicOption5[11][5] + +cenamontaja,],    
  [+septicOption5[12][5] + +cenamontaja,],
  [+septicOption5[13][5] + +cenamontaja,],  
  [+septicOption5[14][5] + +cenamontaja,],  
  [+septicOption5[15][5] + +cenamontaja,],    
  [+septicOption5[16][5] + +cenamontaja,],
  [+septicOption5[17][5] + +cenamontaja,],  
  [+septicOption5[18][5] + +cenamontaja,],  
  [+septicOption5[19][5] + +cenamontaja,],  
  [+septicOption5[20][5] + +cenamontaja,],  
  ];  
  let finalCost6 = [
  [+septicOption6[0][5] + +cenamontaja,],      
  [+septicOption6[1][5] + +cenamontaja,],
  [+septicOption6[2][5] + +cenamontaja,],
  [+septicOption6[3][5] + +cenamontaja,],      
  [+septicOption6[4][5] + +cenamontaja,],
  [+septicOption6[5][5] + +cenamontaja,],  
  [+septicOption6[6][5] + +cenamontaja,],      
  [+septicOption6[7][5] + +cenamontaja,],
  [+septicOption6[8][5] + +cenamontaja,],
  [+septicOption6[9][5] + +cenamontaja,],
  [+septicOption6[10][5] + +cenamontaja,],
  ];  
  let finalCost7 = [
  [+septicOption6[0][5] + +cenamontaja,],      
  [+septicOption6[1][5] + +cenamontaja,],
  ];    
 let finalCost8 = [
  [+septicOption8[0][5] + +cenamontaja,],      
  [+septicOption8[1][5] + +cenamontaja,],
  [+septicOption8[2][5] + +cenamontaja,],
  [+septicOption8[3][5] + +cenamontaja,],      
  [+septicOption8[4][5] + +cenamontaja,],
  [+septicOption8[5][5] + +cenamontaja,],  
  [+septicOption8[6][5] + +cenamontaja,],      
  [+septicOption8[7][5] + +cenamontaja,],
  [+septicOption8[8][5] + +cenamontaja,],
  [+septicOption8[9][5] + +cenamontaja,],      
  [+septicOption8[10][5] + +cenamontaja,],
  [+septicOption8[11][5] + +cenamontaja,],    
  [+septicOption8[12][5] + +cenamontaja,],
  [+septicOption8[13][5] + +cenamontaja,],  
  [+septicOption8[14][5] + +cenamontaja,],  
  [+septicOption8[15][5] + +cenamontaja,],    
  [+septicOption8[16][5] + +cenamontaja,],
  [+septicOption8[17][5] + +cenamontaja,],  
  [+septicOption8[18][5] + +cenamontaja,],  
  [+septicOption8[19][5] + +cenamontaja,],
  [+septicOption8[20][5] + +cenamontaja,],  
  [+septicOption8[21][5] + +cenamontaja,], 
  ];   
  let finalCost9 = [
  [+septicOption9[0][5] + +cenamontaja,],      
  [+septicOption9[1][5] + +cenamontaja,],
  ];   
  let finalCost10 = [
  [+septicOption10[0][5] + +cenamontaja,],      
  [+septicOption10[1][5] + +cenamontaja,],
  [+septicOption10[2][5] + +cenamontaja,],
  [+septicOption10[3][5] + +cenamontaja,],      
  [+septicOption10[4][5] + +cenamontaja,],
  [+septicOption10[5][5] + +cenamontaja,],  
  [+septicOption10[6][5] + +cenamontaja,],      
  [+septicOption10[7][5] + +cenamontaja,],
  [+septicOption10[8][5] + +cenamontaja,],
  [+septicOption10[9][5] + +cenamontaja,],      
  [+septicOption10[10][5] + +cenamontaja,],
  [+septicOption10[11][5] + +cenamontaja,],    
  [+septicOption10[12][5] + +cenamontaja,],
  [+septicOption10[13][5] + +cenamontaja,],
  [+septicOption10[14][5] + +cenamontaja,],    
  [+septicOption10[15][5] + +cenamontaja,],
  ];   
  let finalCost12 = [
  [+septicOption12[0][5] + +cenamontaja,],      
  [+septicOption12[1][5] + +cenamontaja,], 
  ];  
  let finalCost13 = [
  [+septicOption13[0][5] + +cenamontaja,],      
  ];    
  let finalCost15 = [
  [+septicOption15[0][5] + +cenamontaja,],      
  [+septicOption15[1][5] + +cenamontaja,],   
  [+septicOption15[2][5] + +cenamontaja,],   
  [+septicOption15[3][5] + +cenamontaja,],  
  ];  
  let finalCost20 = [
  [+septicOption20[0][5] + +cenamontaja,],      
 
  ];    
  for (let i=0, j=0; i<=placesInfos.length, j<placesOpt.length; i++, j++)
      {  
        $(placesOpt[j][0]).show();
        $(placesOpt[j][1]).show();
        $(placesOpt[j][2]).show();
        $(placesOpt[j][3]).show();
        $(placesOpt[j][4]).show();      
        $(placesInfos[i][0]).show();
        $(placesInfos[i][1]).show();
        $(placesInfos[i][2]).show();
        $(placesInfos[i][3]).show();
        $(placesInfos[i][4]).show();      
        $(placesInfos[i][5]).show(); 
      }
      
  if (tip==0)
  {
      if (ppl <= 3) 
      {
        for (let i=0, j=0; i<=septicOption3.length, j<18; i++, j++)
        {         
        $(placesOpt[j][0]).html(septicOption3[i][1]);      
        $(placesOpt[j][1]).html(septicOption3[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption3[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption3[i][4] + ' л.');
        $(placesOpt[j][4]).html(finalCost3[i][0] + ' ₽'); 
      }
      for (let i=0, j=18; i<=septicOption4.length, j<35; i++, j++)
      {  
        $(placesOpt[j][0]).html(septicOption4[i][1]);      
        $(placesOpt[j][1]).html(septicOption4[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption4[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption4[i][4] + ' л.');
        $(placesOpt[j][4]).html(finalCost4[i][0] + ' ₽');           
      }
      for (let i=35, j=35; i<=placesInfos.length, j<placesOpt.length; i++, j++)
      {  
        $(placesOpt[j][0]).hide();
        $(placesOpt[j][1]).hide();
        $(placesOpt[j][2]).hide();
        $(placesOpt[j][3]).hide();
        $(placesOpt[j][4]).hide();      
        $(placesInfos[i][0]).hide();
        $(placesInfos[i][1]).hide();
        $(placesInfos[i][2]).hide();
        $(placesInfos[i][3]).hide();
        $(placesInfos[i][4]).hide();      
        $(placesInfos[i][5]).hide(); 
      };      
    } else if (ppl == 4) 
    {
        for (let i=0, j=0; i<=septicOption4.length, j<17; i++, j++)
        {         
        $(placesOpt[j][0]).html(septicOption4[i][1]);      
        $(placesOpt[j][1]).html(septicOption4[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption4[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption4[i][4] + ' л.');
        $(placesOpt[j][4]).html(finalCost4[i][0] + ' ₽'); 
      }
      for (let i=0, j=17; i<=septicOption5.length, j<38; i++, j++)
      {  
        $(placesOpt[j][0]).html(septicOption5[i][1]);      
        $(placesOpt[j][1]).html(septicOption5[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption5[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption5[i][4] + ' л.');
        $(placesOpt[j][4]).html(finalCost5[i][0] + ' ₽');           
      }
      for (let i=38, j=38; i<=placesInfos.length, j<placesOpt.length; i++, j++)
      {  
        $(placesOpt[j][0]).hide();
        $(placesOpt[j][1]).hide();
        $(placesOpt[j][2]).hide();
        $(placesOpt[j][3]).hide();
        $(placesOpt[j][4]).hide();      
        $(placesInfos[i][0]).hide();
        $(placesInfos[i][1]).hide();
        $(placesInfos[i][2]).hide();
        $(placesInfos[i][3]).hide();
        $(placesInfos[i][4]).hide();      
        $(placesInfos[i][5]).hide(); 
      };
  } else if (ppl == 5) 
    {
        for (let i=0, j=0; i<=septicOption5.length, j<21; i++, j++)
        {         
        $(placesOpt[j][0]).html(septicOption5[i][1]);      
        $(placesOpt[j][1]).html(septicOption5[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption5[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption5[i][4] + ' л.');
        $(placesOpt[j][4]).html(finalCost5[i][0] + ' ₽'); 
      }
      for (let i=0, j=21; i<=septicOption6.length, j<32; i++, j++)
      {  
        $(placesOpt[j][0]).html(septicOption6[i][1]);      
        $(placesOpt[j][1]).html(septicOption6[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption6[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption6[i][4] + ' л.');
        $(placesOpt[j][4]).html(finalCost6[i][0] + ' ₽');           
      }
      for (let i=32, j=32; i<=placesInfos.length, j<placesOpt.length; i++, j++)
      {  
        $(placesOpt[j][0]).hide();
        $(placesOpt[j][1]).hide();
        $(placesOpt[j][2]).hide();
        $(placesOpt[j][3]).hide();
        $(placesOpt[j][4]).hide();      
        $(placesInfos[i][0]).hide();
        $(placesInfos[i][1]).hide();
        $(placesInfos[i][2]).hide();
        $(placesInfos[i][3]).hide();
        $(placesInfos[i][4]).hide();      
        $(placesInfos[i][5]).hide(); 
      };
    } else if (ppl == 6) 
    {
        for (let i=0, j=0; i<=septicOption6.length, j<11; i++, j++)
        {         
        $(placesOpt[j][0]).html(septicOption6[i][1]);      
        $(placesOpt[j][1]).html(septicOption6[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption6[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption6[i][4] + ' л.');
        $(placesOpt[j][4]).html(finalCost6[i][0] + ' ₽'); 
      }
      for (let i=0, j=11; i<=septicOption7.length, j<13; i++, j++)
      {  
        $(placesOpt[j][0]).html(septicOption7[i][1]);      
        $(placesOpt[j][1]).html(septicOption7[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption7[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption7[i][4] + ' л.');
        $(placesOpt[j][4]).html(finalCost7[i][0] + ' ₽');           
      }
      for (let i=0, j=13; i<=septicOption8.length, j<33; i++, j++)
      {  
        $(placesOpt[j][0]).html(septicOption8[i][1]);      
        $(placesOpt[j][1]).html(septicOption8[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption8[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption8[i][4] + ' л.');
        $(placesOpt[j][4]).html(finalCost8[i][0] + ' ₽');           
      }
      for (let i=33, j=33; i<=placesInfos.length, j<placesOpt.length; i++, j++)
      {  
        $(placesOpt[j][0]).hide();
        $(placesOpt[j][1]).hide();
        $(placesOpt[j][2]).hide();
        $(placesOpt[j][3]).hide();
        $(placesOpt[j][4]).hide();      
        $(placesInfos[i][0]).hide();
        $(placesInfos[i][1]).hide();
        $(placesInfos[i][2]).hide();
        $(placesInfos[i][3]).hide();
        $(placesInfos[i][4]).hide();      
        $(placesInfos[i][5]).hide(); 
      };
} else if (ppl == 7) 
    {
        for (let i=0, j=0; i<=septicOption7.length, j<2; i++, j++)
        {         
        $(placesOpt[j][0]).html(septicOption7[i][1]);      
        $(placesOpt[j][1]).html(septicOption7[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption7[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption7[i][4] + ' л.');
        $(placesOpt[j][4]).html(finalCost7[i][0] + ' ₽'); 
      }
      for (let i=0, j=2; i<=septicOption8.length, j<23; i++, j++)
      { 
        $(placesOpt[j][0]).html(septicOption8[i][1]);      
        $(placesOpt[j][1]).html(septicOption8[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption8[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption8[i][4] + ' л.');
        $(placesOpt[j][4]).html(finalCost8[i][0] + ' ₽'); 
      }
    for (let i=0, j=23; i<=septicOption9.length, j<25; i++, j++)
        {         
        $(placesOpt[j][0]).html(septicOption9[i][1]);      
        $(placesOpt[j][1]).html(septicOption9[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption9[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption9[i][4] + ' л.');
        $(placesOpt[j][4]).html(finalCost9[i][0] + ' ₽'); 
      }
      for (let i=25, j=25; i<=placesInfos.length, j<placesOpt.length; i++, j++)
      {  
        $(placesOpt[j][0]).hide();
        $(placesOpt[j][1]).hide();
        $(placesOpt[j][2]).hide();
        $(placesOpt[j][3]).hide();
        $(placesOpt[j][4]).hide();      
        $(placesInfos[i][0]).hide();
        $(placesInfos[i][1]).hide();
        $(placesInfos[i][2]).hide();
        $(placesInfos[i][3]).hide();
        $(placesInfos[i][4]).hide();      
        $(placesInfos[i][5]).hide(); 
      };
    } else if (ppl == 8) 
    {
        for (let i=0, j=0; i<=septicOption8.length, j<22; i++, j++)
        {         
        $(placesOpt[j][0]).html(septicOption8[i][1]);      
        $(placesOpt[j][1]).html(septicOption8[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption8[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption8[i][4] + ' л.');
        $(placesOpt[j][4]).html(finalCost8[i][0] + ' ₽'); 
      }
    for (let i=0, j=22; i<=septicOption9.length, j<24; i++, j++)
        {         
        $(placesOpt[j][0]).html(septicOption9[i][1]);      
        $(placesOpt[j][1]).html(septicOption9[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption9[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption9[i][4] + ' л.');
        $(placesOpt[j][4]).html(finalCost9[i][0] + ' ₽'); 
      }
    for (let i=0, j=24; i<=septicOption10.length, j<38; i++, j++)
        {         
        $(placesOpt[j][0]).html(septicOption10[i][1]);      
        $(placesOpt[j][1]).html(septicOption10[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption10[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption10[i][4] + ' л.');
        $(placesOpt[j][4]).html(finalCost10[i][0] + ' ₽'); 
      }      
      for (let i=38, j=38; i<=placesInfos.length, j<placesOpt.length; i++, j++)
      {  
        $(placesOpt[j][0]).hide();
        $(placesOpt[j][1]).hide();
        $(placesOpt[j][2]).hide();
        $(placesOpt[j][3]).hide();
        $(placesOpt[j][4]).hide();      
        $(placesInfos[i][0]).hide();
        $(placesInfos[i][1]).hide();
        $(placesInfos[i][2]).hide();
        $(placesInfos[i][3]).hide();
        $(placesInfos[i][4]).hide();      
        $(placesInfos[i][5]).hide(); 
      };
    } else if (ppl == 9) 
    {
    for (let i=0, j=0; i<=septicOption9.length, j<2; i++, j++)
        {         
        $(placesOpt[j][0]).html(septicOption9[i][1]);      
        $(placesOpt[j][1]).html(septicOption9[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption9[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption9[i][4] + ' л.');
        $(placesOpt[j][4]).html(finalCost9[i][0] + ' ₽'); 
      }
    for (let i=0, j=2; i<=septicOption10.length, j<18; i++, j++)
        {         
        $(placesOpt[j][0]).html(septicOption10[i][1]);      
        $(placesOpt[j][1]).html(septicOption10[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption10[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption10[i][4] + ' л.');
        $(placesOpt[j][4]).html(finalCost10[i][0] + ' ₽'); 
      }      
      for (let i=18, j=18; i<=placesInfos.length, j<placesOpt.length; i++, j++)
      {  
        $(placesOpt[j][0]).hide();
        $(placesOpt[j][1]).hide();
        $(placesOpt[j][2]).hide();
        $(placesOpt[j][3]).hide();
        $(placesOpt[j][4]).hide();      
        $(placesInfos[i][0]).hide();
        $(placesInfos[i][1]).hide();
        $(placesInfos[i][2]).hide();
        $(placesInfos[i][3]).hide();
        $(placesInfos[i][4]).hide();      
        $(placesInfos[i][5]).hide(); 
      };
    }else if (ppl == 10) 
    {
    for (let i=0, j=0; i<=septicOption10.length, j<16; i++, j++)
        {         
        $(placesOpt[j][0]).html(septicOption10[i][1]);      
        $(placesOpt[j][1]).html(septicOption10[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption10[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption10[i][4] + ' л.');
        $(placesOpt[j][4]).html(finalCost10[i][0] + ' ₽'); 
      }  
        for (let i=0, j=16; i<=septicOption12.length, j<18; i++, j++)
        {         
        $(placesOpt[j][0]).html(septicOption12[i][1]);      
        $(placesOpt[j][1]).html(septicOption12[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption12[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption12[i][4] + ' л.');
        $(placesOpt[j][4]).html(finalCost12[i][0] + ' ₽'); 
      }    
      for (let i=18, j=18; i<=placesInfos.length, j<placesOpt.length; i++, j++)
      {  
        $(placesOpt[j][0]).hide();
        $(placesOpt[j][1]).hide();
        $(placesOpt[j][2]).hide();
        $(placesOpt[j][3]).hide();
        $(placesOpt[j][4]).hide();      
        $(placesInfos[i][0]).hide();
        $(placesInfos[i][1]).hide();
        $(placesInfos[i][2]).hide();
        $(placesInfos[i][3]).hide();
        $(placesInfos[i][4]).hide();      
        $(placesInfos[i][5]).hide(); 
      };
    } else if (ppl == 11 || ppl == 12) 
    {
        for (let i=0, j=0; i<=septicOption12.length, j<2; i++, j++)
        {         
        $(placesOpt[j][0]).html(septicOption12[i][1]);      
        $(placesOpt[j][1]).html(septicOption12[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption12[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption12[i][4] + ' л.');
        $(placesOpt[j][4]).html(finalCost12[i][0] + ' ₽'); 
        }
        for (let i=0, j=2; i<=septicOption13.length, j<3; i++, j++)
        {         
        $(placesOpt[j][0]).html(septicOption13[i][1]);      
        $(placesOpt[j][1]).html(septicOption13[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption13[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption13[i][4] + ' л.');
        $(placesOpt[j][4]).html(finalCost13[i][0] + ' ₽'); 
        } 
        for (let i=0, j=3; i<=septicOption15.length, j<7; i++, j++)
        {         
        $(placesOpt[j][0]).html(septicOption15[i][1]);      
        $(placesOpt[j][1]).html(septicOption15[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption15[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption15[i][4] + ' л.');
        $(placesOpt[j][4]).html(finalCost15[i][0] + ' ₽'); 
      }       
      for (let i=7, j=7; i<=placesInfos.length, j<placesOpt.length; i++, j++)
      {  
        $(placesOpt[j][0]).hide();
        $(placesOpt[j][1]).hide();
        $(placesOpt[j][2]).hide();
        $(placesOpt[j][3]).hide();
        $(placesOpt[j][4]).hide();      
        $(placesInfos[i][0]).hide();
        $(placesInfos[i][1]).hide();
        $(placesInfos[i][2]).hide();
        $(placesInfos[i][3]).hide();
        $(placesInfos[i][4]).hide();      
        $(placesInfos[i][5]).hide(); 
      };
    } else if (ppl == 13) 
    {
        for (let i=0, j=0; i<=septicOption13.length, j<1; i++, j++)
        {         
        $(placesOpt[j][0]).html(septicOption13[i][1]);      
        $(placesOpt[j][1]).html(septicOption13[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption13[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption13[i][4] + ' л.');
        $(placesOpt[j][4]).html(finalCost13[i][0] + ' ₽'); 
      } 
        for (let i=0, j=1; i<=septicOption15.length, j<5; i++, j++)
        {         
        $(placesOpt[j][0]).html(septicOption15[i][1]);      
        $(placesOpt[j][1]).html(septicOption15[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption15[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption15[i][4] + ' л.');
        $(placesOpt[j][4]).html(finalCost15[i][0] + ' ₽'); 
      }       
      for (let i=5, j=5; i<=placesInfos.length, j<placesOpt.length; i++, j++)
      {  
        $(placesOpt[j][0]).hide();
        $(placesOpt[j][1]).hide();
        $(placesOpt[j][2]).hide();
        $(placesOpt[j][3]).hide();
        $(placesOpt[j][4]).hide();      
        $(placesInfos[i][0]).hide();
        $(placesInfos[i][1]).hide();
        $(placesInfos[i][2]).hide();
        $(placesInfos[i][3]).hide();
        $(placesInfos[i][4]).hide();      
        $(placesInfos[i][5]).hide(); 
      };
    } else if (ppl > 13) 
    {
        for (let i=0, j=0; i<=septicOption15.length, j<4; i++, j++)
        {         
        $(placesOpt[j][0]).html(septicOption15[i][1]);      
        $(placesOpt[j][1]).html(septicOption15[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption15[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption15[i][4] + ' л.');
        $(placesOpt[j][4]).html(finalCost15[i][0] + ' ₽'); 
      }     
        for (let i=0, j=4; i<=septicOption20.length, j<5; i++, j++)
        {         
        $(placesOpt[j][0]).html(septicOption20[i][1]);      
        $(placesOpt[j][1]).html(septicOption20[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption20[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption20[i][4] + ' л.');
        $(placesOpt[j][4]).html(finalCost20[i][0] + ' ₽'); 
      }           
      for (let i=5, j=5; i<=placesInfos.length, j<placesOpt.length; i++, j++)
      {  
        $(placesOpt[j][0]).hide();
        $(placesOpt[j][1]).hide();
        $(placesOpt[j][2]).hide();
        $(placesOpt[j][3]).hide();
        $(placesOpt[j][4]).hide();      
        $(placesInfos[i][0]).hide();
        $(placesInfos[i][1]).hide();
        $(placesInfos[i][2]).hide();
        $(placesInfos[i][3]).hide();
        $(placesInfos[i][4]).hide();      
        $(placesInfos[i][5]).hide(); 
      };
    };
} else {
        if( ppl <=2)
        {
        for (let j=0, i=0; i<1, j<1; i++, j++){       
        $(placesOpt[j][0]).html(septicOption[i][1]);      
        $(placesOpt[j][1]).html(septicOption[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption[i][4] + ' л.');  
        $(placesOpt[j][4]).html(finalCost[i][0] + ' ₽'); 
        }
        for (let i=1, j=1; i<=placesInfos.length, j<placesOpt.length; i++, j++)
        {  
        $(placesOpt[j][0]).hide();
        $(placesOpt[j][1]).hide();
        $(placesOpt[j][2]).hide();
        $(placesOpt[j][3]).hide();
        $(placesOpt[j][4]).hide();      
        $(placesInfos[i][0]).hide();
        $(placesInfos[i][1]).hide();
        $(placesInfos[i][2]).hide();
        $(placesInfos[i][3]).hide();
        $(placesInfos[i][4]).hide();      
        $(placesInfos[i][5]).hide(); 
        }           
        }
        else if (ppl <=3)
        {
        for (let j=0, i=0; i<2, j<2; i++, j++){       
        $(placesOpt[j][0]).html(septicOption[i][1]);      
        $(placesOpt[j][1]).html(septicOption[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption[i][4] + ' л.');
        $(placesOpt[j][4]).html(finalCost[i][0] + ' ₽'); 
        }
        for (let i=2, j=2; i<=placesInfos.length, j<placesOpt.length; i++, j++)
        {  
        $(placesOpt[j][0]).hide();
        $(placesOpt[j][1]).hide();
        $(placesOpt[j][2]).hide();
        $(placesOpt[j][3]).hide();
        $(placesOpt[j][4]).hide();      
        $(placesInfos[i][0]).hide();
        $(placesInfos[i][1]).hide();
        $(placesInfos[i][2]).hide();
        $(placesInfos[i][3]).hide();
        $(placesInfos[i][4]).hide();      
        $(placesInfos[i][5]).hide(); 
        } 
    }
        else if (ppl == 4 || ppl <= 5)
        {
        for (let j=0, i=1; i<2, j<1; i++, j++){       
        $(placesOpt[j][0]).html(septicOption[i][1]);      
        $(placesOpt[j][1]).html(septicOption[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption[i][4] + ' л.');
        $(placesOpt[j][4]).html(finalCost[i][0] + ' ₽'); 
        }   
        for (let i=1, j=1; i<=placesInfos.length, j<placesOpt.length; i++, j++)
        {  
        $(placesOpt[j][0]).hide();
        $(placesOpt[j][1]).hide();
        $(placesOpt[j][2]).hide();
        $(placesOpt[j][3]).hide();
        $(placesOpt[j][4]).hide();      
        $(placesInfos[i][0]).hide();
        $(placesInfos[i][1]).hide();
        $(placesInfos[i][2]).hide();
        $(placesInfos[i][3]).hide();
        $(placesInfos[i][4]).hide();      
        $(placesInfos[i][5]).hide(); 
        }     
    }
        else if (ppl >= 6 || ppl <= 8)
        {
        for (let j=0, i=2; i<3, j<1; i++, j++){       
        $(placesOpt[j][0]).html(septicOption[i][1]);      
        $(placesOpt[j][1]).html(septicOption[i][2] + ' человек');  
        $(placesOpt[j][2]).html(septicOption[i][3] + ' л.');  
        $(placesOpt[j][3]).html(septicOption[i][4] + ' л.');   
        $(placesOpt[j][4]).html(finalCost[i][0] + ' ₽'); 
        }    
        for (let i=1, j=1; i<=placesInfos.length, j<placesOpt.length; i++, j++)
        {  
        $(placesOpt[j][0]).hide();
        $(placesOpt[j][1]).hide();
        $(placesOpt[j][2]).hide();
        $(placesOpt[j][3]).hide();
        $(placesOpt[j][4]).hide();      
        $(placesInfos[i][0]).hide();
        $(placesInfos[i][1]).hide();
        $(placesInfos[i][2]).hide();
        $(placesInfos[i][3]).hide();
        $(placesInfos[i][4]).hide();      
        $(placesInfos[i][5]).hide(); 
        }         
    }
$('#rec452183809').hide();
$('#rec452184130').hide();
$('#rec452184584').hide();    
  }; 
  
if (tip==1 && ppl >= 9)
{
myElement.click() ;
} else {
//Открываем первый блок 
/*  $('#rec450797810').slideToggle(500); t_lazyload_update();
  $('#rec452183809').slideToggle(500); t_lazyload_update();
  $('#rec452184130').slideToggle(500); t_lazyload_update();
  $('#rec452184584').slideToggle(500); t_lazyload_update();*/
  $('#rec450797810').show();
$('#rec452183809').show();
$('#rec452184130').show();
$('#rec452184584').show();
      setTimeout(function(){
     window.scrollTo({
     top: 800,
     behavior: 'smooth',
   });	
$('.showresult .tn-atom').hide(400);
$('.repeatbtn .tn-atom').show(400);   
//$('.showresult .tn-atom').slideDown(20);
//$('.repeatbtn .tn-atom').slideUp(20);
   }, 300); 
};
};

function repeatthis(){
$('.repeatbtn .tn-atom').hide(400);
$('.showresult .tn-atom').show(400);  
//$('.repeatbtn .tn-atom').slideDown(20);
//$('.showresult .tn-atom').slideUp(20);
$('#rec450797810').hide();
$('#rec452183809').hide();
$('#rec452184130').hide();
$('#rec452184584').hide();
};
//При нажатии вперёд
   $(document).on('click','.showresult .tn-atom',function(e){ finishlist();});
   $(document).on('click','.repeatbtn .tn-atom',function(e){ repeatthis();});   
  //При изменении чана
  $('input').change(function() {
  montaj();spincheck();finishlist();
  //Вычисляем позицию выбора
 /*var place = $('input[name="typechan"]:checked').parent('.t-img-select__control').index();
 var selectList = 'select[name="typesteel"]';$(selectList).empty();
 
 if (place==0){//Если первый вариант, то 
$(selectList).append( $('<option value="Полированная пищ. нерж.сталь 2 мм" data-calc-value="110000">Полированная пищ. нерж.сталь 2 мм</option>'));     
$(selectList).append( $('<option value="Матовая пищ. нерж.сталь 3 мм" data-calc-value=" 136000">Матовая пищ. нерж.сталь 3 мм</option>'));
$('input[name="typetrenoga"]:eq(2)').attr('data-calc-value' , '21000');
$('input[name="typedimohod"]').parent('.t-input-block').find('input[type="checkbox"]:eq(1)').attr('data-calc-value' , '16000');

 };
  if (place==1){//Если второй вариант, то 
$(selectList).append( $('<option value="Полированная пищ. нерж.сталь 2 мм" data-calc-value="132000">Полированная пищ. нерж.сталь 2 мм</option>'));     
$(selectList).append( $('<option value="Матовая пищ. нерж.сталь 3 мм" data-calc-value=" 154000">Матовая пищ. нерж.сталь 3 мм</option>'));
$('input[name="typetrenoga"]:eq(2)').attr('data-calc-value' , '25000');
$('input[name="typedimohod"]').parent('.t-input-block').find('input[type="checkbox"]:eq(1)').attr('data-calc-value' , '17000');

 };
  if (place==2){//Если третий вариант, то 
$(selectList).append( $('<option value="Полированная пищ. нерж.сталь 2 мм" data-calc-value="134000">Полированная пищ. нерж.сталь 2 мм</option>'));     
$(selectList).append( $('<option value="Матовая пищ. нерж.сталь 3 мм" data-calc-value=" 155000">Матовая пищ. нерж.сталь 3 мм</option>'));
$('input[name="typetrenoga"]:eq(2)').attr('data-calc-value' , '26000');
$('input[name="typedimohod"]').parent('.t-input-block').find('input[type="checkbox"]:eq(1)').attr('data-calc-value' , '21000');

 };*/
});
//При нажатии на кнопку со ссылкой #collection
//Открываем первый блок 
history.pushState("", document.title, window.location.pathname);
</script>
