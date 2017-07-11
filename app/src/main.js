import './styles/base.scss';

$( document ).ready(function() {
    console.log( "ready!" );

    $('#octocat').click(function(){
      console.log( "yay you clicked it!" );

      window.location.href='https://github.com/cmhnk';
      return false;

    });

    $('#root').click(function(){
      console.log( "yay you clicked it!" );

      window.location.href='https://github.com/cmhnk';
      return false;

    });


});
