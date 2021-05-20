function clickHandler(str) {
  alert(str);
};

function emailReceived(str) {
  alert('Thank you for submitting and reaching out to us.');
};

function daysVisiting() {
  let x, text;

  // Get the value of the input field with id="daysNum"
  x = document.getElementById("daysNum").value;

  // If x is not a number or less than one or greater than 14 days
  if (isNaN(x) || x < 1 || x > 14) {
    alert(text = "14 days is the limit and must be a numeric value.");
  } else {
    alert(text = "Thank you for submitting your days of visit");
  }
  document.getElementById().innerHTML = text;
}