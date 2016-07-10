$(function() {

$('.paizi span').on('click',function(){
      $(this).parent().removeClass('diao').addClass('huiqu')

$('.changjin').addClass('huilai');



})







      //画场景 规划坐标
    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 20; j++) {
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            var r = Math.floor(Math.random() * 30);
            $('<div>').addClass('block').attr('id', i + '-' + j).appendTo('.changjin');
        }
    }
    var she = [
    {
        x: 5,
        y: 3
    }, 
    {
        x: 5,
        y: 4
    }, 
    {
        x: 5,
        y: 5
    }, 
    
    ];
    var diia={
      '0-0':true,
      '0-1':true,
      '0-2':true
    }
    for (var i = 0; i < she.length; i++) {
        $('#' + she[i].x + '-' + she[i].y).addClass('she');
    }
    function fangshiwu() {
        var a = Math.floor(Math.random() * 20);
        var b = Math.floor(Math.random() * 20);
        $('#' + a + '-' + b).addClass('shiwu');
        return {
            x: a,
            y: b
        };
    }
    
    var shiwu = fangshiwu();
    //方向就是移动函数
    fangxiang = 'you';
    move = function() {
        var jiutou = she[she.length - 1];
        if (fangxiang === 'you') {
            var xintou = {
                x: jiutou.x,
                y: jiutou.y + 1
            };
            if(xintou.y>19){
              $('<div>').addClass('out').appendTo('.changjin');
              zanting();
              return
            }
        }
        if (fangxiang === 'zuo') {
            var xintou = {
                x: jiutou.x,
                y: jiutou.y - 1
            };
             if(xintou.y<0){
              $('<div>').addClass('out').appendTo('.changjin');
              zanting();
              return
            }
        }
        if (fangxiang === 'xia') {
            var xintou = {
                x: jiutou.x + 1,
                y: jiutou.y
            };
             if(xintou.x>19){
              $('<div>').addClass('out').appendTo('.changjin');
              zanting();
              return
            }
        }
        if (fangxiang === 'shang') {
            var xintou = {
                x: jiutou.x - 1,
                y: jiutou.y
            };
             if(xintou.x<0){
              $('<div>').addClass('out').appendTo('.changjin');
              zanting();
              return
            }
        }
           
            if(diia[xintou.x+'-'+xintou.y]){
               $('<div>').addClass('out').appendTo('.changjin');
                       console.log('撞自己');
                zanting();
                return
          } 
      /*  if(xintou.y>19||xintou.y<0||xintou.x<0||xintou.x>19){
                      zanting()
                      return
        }*/


        she.push(xintou);
        diia[xintou.x+'-'+xintou.y]=true;
        $('#' + xintou.x + '-' + xintou.y).addClass('she');
        
        if (xintou.x === shiwu.x && xintou.y === shiwu.y) {
            $('#' + shiwu.x + '-' + shiwu.y).removeClass('shiwu');
            shiwu = fangshiwu();
        } else {
            var weiba = she.shift();
             delete diia[weiba.x+'-'+weiba.y];
            $('#' + weiba.x + '-' + weiba.y).removeClass('she');
        }
    
    
    }
     var kaishi=function(){
             /* clearInterval(t)*/
             t=setInterval(move,300);
        }
        var zanting=function(){
             clearInterval(t);
        }

   /* var t=setInterval(move, 300);*/
    
    $(document).on('keyup', function(e) {
               e.precentDefault;
      var biao={
        'zuo':37,
        'you':39,
        'shang':38,
        'xia':40
      }
      if(Math.abs(e.keyCode-biao[fangxiang])===2){
        return
      }

        if (e.keyCode === 37) {
            fangxiang = 'zuo';
        }
        if (e.keyCode === 39) {
            fangxiang = 'you';
        }
        if (e.keyCode === 38) {
            fangxiang = 'shang';
        }
        if (e.keyCode === 40) {
            fangxiang = 'xia';
        }
        if(e.keyCode===32){
          zanting()
        }
    });

//开始和暂停
       
        $(document).on('click',function(){
          kaishi()
        })

})







/*$(function(){
var g=Math.floor(Math.random()*200);
var b=Math.floor(Math.random()*30);
for (var i = 0; i < 20; i++) {
   for (var j = 0; j < 20; j++) {
     
   
   $('<div>')
   .addClass('block')
   .attr('id',i+'-'+j)
   .css('backgroundColor','rgba(0,'+g+',0,0.7)')
   .appendTo('.changjin')
}
}
var she=[
    {x:0,y:0},
    {x:0,y:1},
    {x:0,y:2}
];
var shebiao={
  '0-0':true,
  '0-1':true,
  '0-2':true
}
var shiwu={x:9,y:9};
function fangshiwu(){
  var a=Math.floor(Math.random()*20);
  var b=Math.floor(Math.random()*20);
  $('#'+a+'-'+b).sddClass('shiwu');
  return {x:a,y:b}

}
var zhaodian=function(dian){
  return $('#'+dian.x+'-'+dian.y)
}
for(var i=0;i<she.length;i++){
  zhaodian(she[i]).addClass('snake')
}
zhaodian(shiwu).addClass('shiwu');
var fangxiang='you'
function move(){
  var jiutou=she[she.length-1];
  if(fangxiang==='you'){
    var xintou={x:jiutou.x,y:jiutou.y+1};
  

  }else if(fangxiang==='zuo'){
        var xintou={x:jiutou.x,y:jiutou.y-1};
  }else if(fangxiang==='shang'){
        var xintou={x:jiutou.x-1,y:jiutou.y};
  }else if(fangxiang==='xia'){
       var xintou={x:jiutou.x+1,y:jiutou.y};
  }
  if(xintou.y>19||xintou.y<0||xintou.x>19||xintou.x<0){
      console.log('GAME OVER')
      zanting();
}
if(shebiao[xintou.x+'-'+xintou.y]){
      console.log('撞到自己')
      zanting();
    }
  zhaodian(xintou).addClass('snake')
    she.push(xintou);
    shebiao[xintou.x+'-'+xintou.y]=true;



var biao={
  'zuo':37,
  'you':39,
  'shang':38,
  'xia':40
}




})*/















