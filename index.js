const form = document.querySelector('#email-form')
const email = document.querySelector('#email')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const emailAddress = email.value

  if (validateEmail(emailAddress)) {
    form.classList.remove('error')
  } else {
    form.classList.add('error')
  }
})

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
