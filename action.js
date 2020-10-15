// Variables and constants initialization
var email_list = ['patrizia@alice.it', 'moira@tiscali.it', 'giovanni@libero.it', 'cinzia@gmail.com', 'mel@email.com', 'laura@virgilio.it', 'luigi@gmail.com', 'juan@alice.it', 'valentina@gmail.com'];
var user_email = prompt('Please enter your e-mail address.');

// ***************** Check data in Console *****************
console.log('INPUT CHECK');
console.log('This is your array: ' + email_list);
console.log('This array contains ' + email_list.length + ' elements.');
console.log('The user\'s e-mail is: ' + user_email);

// ***************** Print data in HTML *****************
document.getElementById('emails-number').innerHTML = email_list.length;
document.getElementById('user-email').innerHTML = user_email;

// ********** Email check - Output in Console & HTML **********
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
    document.getElementById('email-check').innerHTML = 'Your e-mail is already on our e-mail list.';
    // Message for the user about his subscription number
    var subscription_number = i + 1;
    if (subscription_number === 1) {
      console.log('You were the ' + subscription_number + 'st person who signed up for our mailing list.');
      document.getElementById('subscription-number').innerHTML = 'You were the ' + subscription_number + 'st person who signed up for our mailing list.';
    } else if (subscription_number === 2) {
      console.log('You were the ' + subscription_number + 'nd person who signed up for our mailing list.');
      document.getElementById('subscription-number').innerHTML = 'You were the ' + subscription_number + 'nd person who signed up for our mailing list.';
    } else if (subscription_number === 3) {
      console.log('You were the ' + subscription_number + 'rd person who signed up for our mailing list.');
      document.getElementById('subscription-number').innerHTML = 'You were the ' + subscription_number + 'rd person who signed up for our mailing list.';
    } else if (subscription_number >= 4) {
      console.log('You were the ' + subscription_number + 'th person who signed up for our mailing list.');
      document.getElementById('subscription-number').innerHTML = 'You were the ' + subscription_number + 'th person who signed up for our mailing list.';
    }
  }
}

// ***************** Sign-up Request *****************
if (email_verified !== 'present') {
  // Message in console & HTML
  console.log('The user\'s e-mail is not in the array.');
  document.getElementById('signup-request-title').innerHTML = 'Sign-up';
  // Message for the user
  var subscription_request = prompt('Sorry, your e-mail is not on our mailing list. Do you want to sign up for it? Please enter YES or NO.');

  if ((subscription_request === 'YES') || (subscription_request === 'yes') || (subscription_request === 'Yes')) {
    // Joining the mailing list
    console.log(' ');
    console.log('SIGN-UP REQUEST ACCEPTED');
    email_list.push(user_email);
    console.log('Your e-mail ' + user_email + ' has been added to our mailing list.');
    console.log('The user\'s e-mail ' + user_email + ' has been added to the array');
    console.log('It now contains ' + email_list.length + ' elements.');
    console.log('The new array is: ' + email_list);
    // Output in HTML
    document.getElementById('signup-request').innerHTML = 'Sign-up request accepted';
    document.getElementById('signup-accepted').innerHTML = 'Your e-mail ' + user_email + ' has been added to our mailing list.';
    document.getElementById('emails-number-updated').innerHTML = 'There are now ' + email_list.length + ' e-mails in our database.';

  } else if ((subscription_request === 'NO') || (subscription_request === 'no') || (subscription_request === 'No')) {
    // NOT joining the mailing list
    console.log(' ');
    console.log('SIGN-UP REQUEST DENIED');
    console.log('Thank you for visiting our website. If you ever change your mind, please reload the page.');
    // Output in HTML
    document.getElementById('signup-request').innerHTML = 'Sign-up request denied';
    document.getElementById('signup-denied').innerHTML = 'Thank you for visiting our website. If you ever change your mind, please reload the page.';

  } else {
    // Error message
    console.log('ERROR: Invalid value was entered to our sign-up request. Please reload the page.');
    document.getElementById('error').innerHTML = 'ERROR: Invalid value was entered to our sign-up request. Please reload the page.';
  }
}
