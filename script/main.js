$(document).ready(function(){

  $('.s_wrap > li:last-child').insertBefore('.s_wrap > li:first-child');
  $('.s_wrap').css('margin-top','-300px');

  function moveleft(){
    $('.s_wrap').animate({'margin-top':'-600px'},500,function(){
      $('.s_wrap > li:first-child').insertAfter('.s_wrap > li:last-child');
      $('.s_wrap').css('margin-top','-300px');
    });
  }

  let Timer = setInterval(moveleft, 3000);

  // 한꺼번에 나오게

  // $('.gnb > ul').hover(function(){
  //   $('.sub').stop().fadeIn();
  // },function(){
  //   $('.sub').stop().fadeOut();
  // });

  $('.gnb > ul > li').hover(function(){
    $(this).find('.sub').stop().fadeIn();
  },function(){
    $(this).find('.sub').stop().fadeOut();
  });


  // 탭메뉴 컨텐츠
  $('.t_con li:first-child .con').show();

  $('.t_con a').click(function(){
    $('.t_con a').removeClass('act');
    $(this).addClass('act');

    $('.con').hide();
    $(this).next().show();

    return false;
  });

});