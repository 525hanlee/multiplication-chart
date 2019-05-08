function getNum(){
  var str = '';
  for (var i = 2; i < 10; i++) {
    str += '<div class="card">';
    str += '<ul>';
    str += '<li class="big-num">'+i+'</li>';
    for (var a = 1; a < 10; a++) {
      str += '<li>'+i+' x '+a+' = '+(i*a)+'</li>';
    }
    str += '</ul>';
    str += '</div>';
  }
  document.getElementById('wrap').insertAdjacentHTML('beforeend',str);
}

getNum();
