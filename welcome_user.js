$(document).ready(function() {
  
      $('#user-login-form').addClass('form-hide');
      $('#user-login-form .item-list').addClass('form-hide');
      $('.acces-user-login').click(function(){
        $('#user-login-form').toggleClass('form-hide');
      });
      $('#user-login-form img').click(function(){
        $('#user-login-form .item-list').toggleClass('form-hide');
        $('#user-login-form ').toggleClass('bg-form');
        $('#user-login-form .triangle-info').toggleClass('rotate');
      });
      $('#user-login-form .user-info').click(function(){
        $('#user-login-form .item-list').toggleClass('form-hide');
        $('#user-login-form ').toggleClass('bg-form');
        $('#user-login-form .triangle-info').toggleClass('rotate');
      });



});
