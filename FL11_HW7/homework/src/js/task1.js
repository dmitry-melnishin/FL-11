const email = prompt('Enter your email', '');
const minLengthEmail = 6;
const minLengthPass = 5
let password;
let isChangePass;
let newPassAgain;

if (!email) {
  alert('Canceled.');
} else if (email.length < minLengthEmail) {
  alert('I do not know any emails having name length less than 6 symbols');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
  password = prompt('Enter your password', '');
  if (!password) {
    alert('Canceled.');
  } else if (email === 'user@gmail.com' && password === 'UserPass' ||
             email === 'admin@gmail.com' && password === 'AdminPass') {
    isChangePass = confirm('Do you want to change your password?');
    if (!isChangePass) {
      alert('You have failed the change.')
    } else {
      password = prompt('Enter your old password', '');
      if (!password) {
        alert('Canceled.');
      } else if (email === 'user@gmail.com' && password === 'UserPass' ||
                 email === 'admin@gmail.com' && password === 'AdminPass') {
        password = prompt('Enter a new password', '');
        if (password && password.length < minLengthPass) {
          alert('It’s too short password. Sorry.');
        } else if (password) {
          newPassAgain = prompt('Enter the new password again', '');
          if (!newPassAgain) {
            alert('Canceled.');
          } else if (newPassAgain !== password) {
            alert('You wrote the wrong password.');
          } else {
            alert('You have successfully changed your password.');
          }
        } else {
          alert('Canceled.');
        }
      } else {
        alert('Wrong password');
      }
    }
  } else {
    alert('Wrong password');
  }
} else {
  alert('I don’t know you');
}
