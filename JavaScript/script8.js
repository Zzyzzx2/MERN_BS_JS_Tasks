(() => {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity())
        {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  }
)()

function validate_pw()
{
    var pw = document.getElementById('inp_pw').value
    var repw = document.getElementById('inp_repw').value
    // console.log(pw)
    // console.log(repw)
    // console.log(pw != repw       
  
    var forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (pw != repw)
        {
            event.preventDefault()
            event.stopPropagation()
        }
        form.classList.add('was-validated')
    }, false)})
}
