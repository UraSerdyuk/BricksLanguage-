
//  start variable for lang


let string = '';
let arr2 = [];
let result = [];
let arr = [];


// end variable for lang

var textarea = document.querySelector('textarea');
let textareaOut = document.getElementById('output');

textarea.addEventListener('keydown', autosize);
textareaOut.addEventListener('mousemove', autosize2);    
function autosize(){
  var el = this;
  output(textarea.value);
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}
function autosize2(){
    var el = this;
    setTimeout(function(){
      el.style.cssText = 'height:auto; padding:0';
      // for box-sizing other than "content-box" use:
      // el.style.cssText = '-moz-box-sizing:content-box';
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
    },0);
  }



function output(){
    string = this.textarea.value;
     arr = blow(string);
 if(arr.length != 0 ){

    arr2 = arr.map(function(e){
        if(e =='а'){
            return e + 'са';
        } else if(e =='о'){
            return e + 'со';
        }else if(e =='е'){
        return e + 'се';
        }else if(e =='и'){
            return e + 'си';
        }else if(e =='у'){
            return e + 'су';
        }else if(e =='я'){
            return e + 'ся';
        }else if(e =='ы'){
            return e + 'сы';
        }else if(e =='ю'){
            return e + 'сю';
        }else {
            return e;
        }

    });
    result = arr2.reduce((acum,val) => acum + val);


    textareaOut.value =result;
 }
}

// добавление окончания к гласной букве

arr2 = arr.map(function(e){
if(e =='а'){
    return e + 'са';
} else if(e =='о'){
    return e + 'со';
}else if(e =='е'){
return e + 'се';
}else if(e =='и'){
    return e + 'си'
}else if(e =='у'){
    return e + 'су'
}else {
    return e;
}
});






// склеивание масива в строку
let clay = (arr)=>{
    arr.reduce((acum,val) => acum + val);
}
// разбивка строки на масив

let blow = (str)=>{
    return str.split('');
}
