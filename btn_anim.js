$('#yesBtn').on('mouseenter touchstart', function(){
  $(this).addClass('btn_anim');
})

$('#yesBtn').on('mouseenter touchend', function(){
  $(this).removeClass('btn_anim');
})

$('#noBtn').on('mouseenter touchstart', function(){
  $(this).addClass('btn_anim');
})

$('#noBtn').on('mouseenter touchend', function(){
  $(this).removeClass('btn_anim');
})