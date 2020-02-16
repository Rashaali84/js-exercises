/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/
function call() {
  var name = "Daniel";
  var danielsRole = "mentor";
  return danielsRole === 'mentor' ? "Hi, I'm Daniel, I'm a mentor." : "Hi, I'm Daniel, I'm a student.";
}
/*
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/
console.log(call());
