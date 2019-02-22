

function toggleMenu(x) {
    x.classList.toggle("animate")
    document.getElementsByTagName('body')[0].classList.toggle('perspective')
    document.getElementsByClassName('main-container')[0].classList.toggle("animate-main")
}
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();




function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    text.style.borderColor = "#6ADC91";
    
    console.log("deuuu")
  } else {
    text.style.borderColor = "#ccc";
  }
}


/*$('#boxid').click(function() {
  if ($(this).is(':checked')) {
    $(this).siblings('label').html('checked');
  } else {
    $(this).siblings('label').html(' not checked');
  }
});*/