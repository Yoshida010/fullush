'use strict'
let qNum = 1;
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');

yesBtn.onclick = () => {
  if(qNum == 1){
    question.textContent = '決断力が欲しい';
    qNum = 3;
  }else if(qNum == 3){
    question.textContent = '疲れている';
    qNum = 6;
  }else if(qNum == 4){
    question.textContent = '感情の起伏が激しい';
    qNum = 8;
  }else if(qNum == 5){
    question.textContent = '貯金をすることが好きだ';
    qNum = 10;
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
    qNum = 12;
    document.getElementById('return').classList.remove('no_screen');
  }
  document.getElementById('root').style.backgroundImage=`url(../2021_gten/img/select${qNum}.png)`;
}

noBtn.onclick = () => {
  if(qNum == 1){
    question.textContent = '気になる人がいる';
    qNum = 2;
  }else if(qNum == 2){
    question.textContent = 'コミュニケーションが苦手';
    qNum = 4;
  }else if(qNum == 3){
    question.textContent = '今の自分に満足している';
    qNum = 5;
  }else if(qNum == 4){
    question.textContent = '友達より恋愛が大切';
    qNum = 7;
  }else if(qNum == 5){
    question.textContent = '今頑張っていることがある';
    qNum = 9;
  }else if(qNum == 6){
    question.textContent = '今欲しいものがある';
    qNum = 11;
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
    qNum = 12;
    document.getElementById('return').classList.remove('no_screen');
  }
  document.getElementById('root').style.backgroundImage=`url(../2021_gten/img/select${qNum}.png)`;
}