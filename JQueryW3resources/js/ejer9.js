$(principal)

const maxLength = 15;

function principal(){
  $('textarea').keyup(function() {
    let textlen = maxLength - $(this).val().length;
    $('#rchars').text(textlen);
  });
}