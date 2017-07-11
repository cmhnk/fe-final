import './styles/base.scss';

$( document ).ready(function() {
    console.log( "ready!" );

    $('.icon-1').click(function(){
      window.location.href='https://github.com/cmhnk';
      return false;
    });

    $('.icon-2').click(function(){
      window.location.href='https://www.linkedin.com/in/corinne-henk-774459108/';
      return false;
    });

    $('.icon-3').click(function(){
      window.location.href='https://www.instagram.com/corinnehenk/?hl=en';
      return false;
    });

});
