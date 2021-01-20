document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  let input;
  let result;
    // Get value of the input
  input = document.getElementById('text').value;
  let regex = /[aeiou]/gi;
  //unify the case and get the length
  let count = input.match(regex).length;
  
  if (count > 0) {
    result = "Vowels found : " + count;
  } else {
    result = "No vowels found";
  }
  //print the number of vowels if any
  document.getElementById("demo").innerHTML = result;
  });

