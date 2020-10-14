// Variables and constants initialization
var email_list = ['patrizia@alice.it', 'moira@tiscali.it', 'giovanni@libero.it', 'cinzia@gmail.com', 'mel@email.com', 'laura@virgilio.it', 'luigi@gmail.com', 'juan@alice.it', 'valentina@gmail.com'];
var user_email = prompt('Please enter your e-mail address.');

// ***************** Console input check *****************
console.log('INPUT CHECK');
console.log('This is your array: ' + email_list);
console.log('This array contains ' + email_list.length + ' elements.');
console.log('The user\'s e-mail is: ' + user_email);

// ***************** Email check & Output in Console *****************
console.log(' ');
console.log('EMAIL CHECK');

for (var i = 0; i < email_list.length; i++) {
  if (user_email === email_list[i]) {
    // Confirmation of presence
    var email_verified = 'present';
    // Message in console
    console.log ('The user\'s e-mail has been found in position ' + i + ' within the array.');
    // Message for the user
    console.log('Your e-mail ' + user_email + ' is already on our e-mail list.');
    // Message for the user about his subscription number
    var subscription_number = i + 1;
    if (subscription_number === 1) {
      console.log('You were the ' + subscription_number + 'st person who signed up for our mailing list.');
    } else if (subscription_number === 2) {
      console.log('You were the ' + subscription_number + 'nd person who signed up for our mailing list.');
    } else if (subscription_number === 3) {
      console.log('You were the ' + subscription_number + 'rd person who signed up for our mailing list.');
    } else if (subscription_number >= 4) {
      console.log('You were the ' + subscription_number + 'th person who signed up for our mailing list.');
    }
  }
}
// Sign up request
if (email_verified !== 'present') {
  // Message in console
  console.log('The user\'s e-mail is not in the array.');
  // Message for the user
  confirm('Sorry, your e-mail is not on our mailing list. Do you want to sign up for it?');
}
