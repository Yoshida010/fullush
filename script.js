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
    document.getElementById('start_container').style.display = 'none';
    document.getElementById('q_container').classList.remove('no_screen');
    document.getElementById('select1').classList.add('bg_anim');
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
    document.getElementById('start_container').style.display = 'none';
    document.getElementById('q_container').classList.remove('no_screen');
    document.getElementById('select1').classList.add('bg_anim');
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
    document.getElementById('start_container').style.display = 'none';
    document.getElementById('q_container').classList.remove('no_screen');
    document.getElementById('select1').classList.add('bg_anim');
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
    document.getElementById('start_container').style.display = 'none';
    document.getElementById('q_container').classList.remove('no_screen');
    document.getElementById('select1').classList.add('bg_anim');
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
    document.getElementById('start_container').style.display = 'none';
    document.getElementById('q_container').classList.remove('no_screen');
    document.getElementById('select1').classList.add('bg_anim');
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
    document.getElementById('start_container').style.display = 'none';
    document.getElementById('q_container').classList.remove('no_screen');
    document.getElementById('select1').classList.add('bg_anim');
  }
}


// 追加
let qNum = 1;
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');

yesBtn.onclick = () => {
  if(qNum == 1){
    question.textContent = '決断力が欲しい';
    qNum = 3;
    document.getElementById('select1').style.display = 'none'
    document.getElementById('select3').style.display = 'block'
  }else if(qNum == 3){
    question.textContent = '疲れている';
    qNum = 6;
    document.getElementById('select3').style.display = 'none'
    document.getElementById('select6').style.display = 'block'
  }else if(qNum == 4){
    question.textContent = '感情の起伏が激しい';
    qNum = 8;
    document.getElementById('select4').style.display = 'none'
    document.getElementById('select8').style.display = 'block'
  }else if(qNum == 5){
    question.textContent = '貯金をすることが好きだ';
    qNum = 10;
    document.getElementById('select5').style.display = 'none'
    document.getElementById('select10').style.display = 'block'
  }else if(qNum == 2 || qNum == 6 || qNum == 7 || qNum == 8 || qNum == 9 || qNum == 10 || qNum == 11){
    document.getElementById('q_container').style.display = 'none';
    if(qNum == 2 || qNum == 7){
      document.getElementById('a01').classList.remove('no_screen');
      document.getElementById('a01').classList.add('exult');
    }else if(qNum == 6 || qNum == 8){
      document.getElementById('a03').classList.remove('no_screen');
      document.getElementById('a03').classList.add('exult');
    }else if(qNum == 9){
      document.getElementById('a05').classList.remove('no_screen');
      document.getElementById('a05').classList.add('exult');
    }else if(qNum == 10 || qNum == 11){
      document.getElementById('a04').classList.remove('no_screen');
      document.getElementById('a04').classList.add('exult');
    }
    document.getElementById('return').classList.remove('no_screen');
    document.getElementById('root').style.backgroundImage=`url(img/select12.png)`;
    document.getElementById('root').style.backgroundSize = '100% 100%';
  }
}

noBtn.onclick = () => {
  if(qNum == 1){
    question.textContent = '気になる人がいる';
    qNum = 2;
    document.getElementById('select1').style.display = 'none'
    document.getElementById('select2').style.display = 'block'
  }else if(qNum == 2){
    question.textContent = 'コミュニケーションが苦手';
    qNum = 4;
    document.getElementById('select2').style.display = 'none'
    document.getElementById('select4').style.display = 'block'
  }else if(qNum == 3){
    question.textContent = '今の自分に満足している';
    qNum = 5;
    document.getElementById('select3').style.display = 'none'
    document.getElementById('select5').style.display = 'block'
  }else if(qNum == 4){
    question.textContent = '友達より恋愛が大切';
    qNum = 7;
    document.getElementById('select4').style.display = 'none'
    document.getElementById('select7').style.display = 'block'
  }else if(qNum == 5){
    question.textContent = '今頑張っていることがある';
    qNum = 9;
    document.getElementById('select5').style.display = 'none'
    document.getElementById('select9').style.display = 'block'
  }else if(qNum == 6){
    question.textContent = '今欲しいものがある';
    qNum = 11;
    document.getElementById('select6').style.display = 'none'
    document.getElementById('select11').style.display = 'block'
  }else if(qNum == 7 || qNum == 8 || qNum == 9 || qNum == 10 || qNum == 11){
    document.getElementById('q_container').style.display = 'none';
    if(qNum == 7 || qNum == 8){
      document.getElementById('a02').classList.remove('no_screen');
      document.getElementById('a02').classList.add('exult');
    }else if(qNum == 9){
      document.getElementById('a06').classList.remove('no_screen');
      document.getElementById('a06').classList.add('exult');
    }else if(qNum == 10){
      document.getElementById('a04').classList.remove('no_screen');
      document.getElementById('a04').classList.add('exult');
    }else if(qNum == 11){
      document.getElementById('a05').classList.remove('no_screen');
      document.getElementById('a05').classList.add('exult');
    }
    document.getElementById('return').classList.remove('no_screen');
    document.getElementById('root').style.backgroundImage=`url(img/select12.png)`;
    document.getElementById('root').style.backgroundSize = '100% 100%';
  }
}
