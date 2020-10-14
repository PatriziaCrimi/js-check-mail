// Variables and constants initialization
var email_list = ['patrizia@alice.it', 'moira@tiscali.it', 'giovanni@libero.it', 'cinzia@gmail.com', 'mel@email.com', 'laura@virgilio.it', 'luigi@gmail.com', 'juan@alice.it', 'valentina@gmail.com'];
var user_email = prompt('Please enter your e-mail address.');

// ***************** Console input check *****************
console.log('This is your array: ' + email_list);
console.log('This array contains ' + email_list.length + ' elements.');
console.log('The user e-mail is: ' + user_email);

// ***************** Email check *****************
for (var i = 0; i < email_list.length; i++) {
  if (user_email === email_list[i]) {
    console.log('Your e-mail ' + user_email + ' is already on our mailing list.');
  }
}
