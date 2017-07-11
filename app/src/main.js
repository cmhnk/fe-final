import './styles/base.scss';

$( document ).ready(function() {
    console.log( "ready!" );

    $('#root').click(function(){
      console.log( "yay you clicked it!" );
    });
});
