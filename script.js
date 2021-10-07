'use strict'

// ダイヤをクリックしたとき
document.getElementById('daiya1').onclick = function(){
  //文字を非表示にする
  document.getElementById('start').style.display = 'none';
  //他のダイヤの表示を消す
  for(let i=2; i<7;i++){
    let name = 'daiya'+i;
    document.getElementById(name).style.display = 'none';
  }
  //新たなクラスを付与してダイヤを中央に移動させる
  document.getElementById('daiya1').classList.add('daiya_after1');
  // ②の画面の文字を表示する
  document.getElementById('start_after').classList.remove('no_screen');
  document.getElementById('start_after').classList.add('start_after');
  // 中央に移動させたダイヤのIDを変更
  document.getElementById('daiya1').id = 'moved';
  // クリックしたら画面遷移してほしい
  document.getElementById('moved').onclick = function(){
    console.log('click');
    location.href = 'https://techacademy.jp/magazine/32006';
  }
}


document.getElementById('daiya2').onclick = function(){
  document.getElementById('start').style.display = 'none';
  document.getElementById('daiya2').classList.add('daiya_after2');
  for(let i=1; i<7;i++){
    if(i==2){
      ;
    }else{
      let name = 'daiya'+i;
      document.getElementById(name).style.display = 'none';
    }
  }
  document.getElementById('start_after').classList.remove('no_screen');
  document.getElementById('start_after').classList.add('start_after');
  // 中央に移動させたダイヤのIDを変更
  document.getElementById('daiya2').id = 'moved';
  // クリックしたら画面遷移してほしい
  document.getElementById('moved').onclick = function(){
    console.log('click');
    location.href = 'https://techacademy.jp/magazine/32006';
  }
}

document.getElementById('daiya3').onclick = function(){
  document.getElementById('start').style.display = 'none';
  document.getElementById('daiya3').classList.add('daiya_after3');
  for(let i=1; i<7;i++){
    if(i==3){
      ;
    }else{
      let name = 'daiya'+i;
      document.getElementById(name).style.display = 'none';
    }
  }
  document.getElementById('start_after').classList.remove('no_screen');
  document.getElementById('start_after').classList.add('start_after');
  // 中央に移動させたダイヤのIDを変更
  document.getElementById('daiya3').id = 'moved';
  // クリックしたら画面遷移してほしい
  document.getElementById('moved').onclick = function(){
    console.log('click');
    location.href = 'https://techacademy.jp/magazine/32006';
  }
}

document.getElementById('daiya4').onclick = function(){
  document.getElementById('start').style.display = 'none';
  document.getElementById('daiya4').classList.add('daiya_after4');
  for(let i=1; i<7;i++){
    if(i==4){
      ;
    }else{
      let name = 'daiya'+i;
      document.getElementById(name).style.display = 'none';
    }
  }
  document.getElementById('start_after').classList.remove('no_screen');
  document.getElementById('start_after').classList.add('start_after');
  // 中央に移動させたダイヤのIDを変更
  document.getElementById('daiya4').id = 'moved';
  // クリックしたら画面遷移してほしい
  document.getElementById('moved').onclick = function(){
    console.log('click');
    location.href = 'https://techacademy.jp/magazine/32006';
  }
}

document.getElementById('daiya5').onclick = function(){
  document.getElementById('start').style.display = 'none';
  document.getElementById('daiya5').classList.add('daiya_after5');
  for(let i=1; i<7;i++){
    if(i==5){
      ;
    }else{
      let name = 'daiya'+i;
      document.getElementById(name).style.display = 'none';
    }
  }
  document.getElementById('start_after').classList.remove('no_screen');
  document.getElementById('start_after').classList.add('start_after');
  // 中央に移動させたダイヤのIDを変更
  document.getElementById('daiya5').id = 'moved';
  // クリックしたら画面遷移してほしい
  document.getElementById('moved').onclick = function(){
    console.log('click');
    location.href = 'https://techacademy.jp/magazine/32006';
  }
}

document.getElementById('daiya6').onclick = function(){
  document.getElementById('start').style.display = 'none';
  document.getElementById('daiya6').classList.add('daiya_after6');
  for(let i=1; i<7;i++){
    if(i==6){
      ;
    }else{
      let name = 'daiya'+i;
      document.getElementById(name).style.display = 'none';
    }
  }
  document.getElementById('start_after').classList.remove('no_screen');
  document.getElementById('start_after').classList.add('start_after');
  // 中央に移動させたダイヤのIDを変更
  document.getElementById('daiya6').id = 'moved';
  // クリックしたら画面遷移してほしい
  document.getElementById('moved').onclick = function(){
    console.log('click');
    location.href = 'https://techacademy.jp/magazine/32006';
  }
}