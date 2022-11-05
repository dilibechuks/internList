const namesOfInterns = [
  "Nwadilibe Chukwuemeka",
  "Ojimadu Jerry",
  "Somto Obi",
  "Chigozie Peters",
  "Ugwuanyi Diamond",
  "Anachunam Augustine",
  "Nwefuru James",
  "Uban Samuel",
  "Omenoke Chidera",
  "Nwamuta Raphael",
  "Didigwu Paul",
  "Onyemachi Solomon",
  "Victory Amobi",
];

function myFunction() {
  let action = prompt(
    "Welcome to PMT Interns Database, Who are you looking for?"
  );
  if (action == null || action == "") {
    document.getElementById("responseText").innerHTML = "Please Enter a name!";
  } else if (action == "Chukwuemeka" || action == "Nwadilibe") {
    document.getElementById("responseText").innerHTML = namesOfInterns[0];
  } else if (action == "Ojimadu" || action == "Jerry") {
    document.getElementById("responseText").innerHTML = namesOfInterns[1];
  } else if (action == "Somto" || action == "Obi") {
    document.getElementById("responseText").innerHTML = namesOfInterns[2];
  } else if (action == "Chigozie" || action == "Peters") {
    document.getElementById("responseText").innerHTML = namesOfInterns[3];
  } else if (action == "Ugwuanyi" || action == "Diamond") {
    document.getElementById("responseText").innerHTML = namesOfInterns[4];
  } else if (action == "Anachunam" || action == "Augustine") {
    document.getElementById("responseText").innerHTML = namesOfInterns[5];
  } else if (action == "Nwefuru" || action == "James") {
    document.getElementById("responseText").innerHTML = namesOfInterns[6];
  } else if (action == "Uban" || action == "Samuel") {
    document.getElementById("responseText").innerHTML = namesOfInterns[7];
  } else if (action == "Omenoke" || action == "Chidera") {
    document.getElementById("responseText").innerHTML = namesOfInterns[8];
  } else if (action == "Nwamuta" || action == "Raphael") {
    document.getElementById("responseText").innerHTML = namesOfInterns[9];
  } else if (action == "Didigwu" || action == "Paul") {
    document.getElementById("responseText").innerHTML = namesOfInterns[10];
  } else if (action == "Onyemachi" || action == "Solomon") {
    document.getElementById("responseText").innerHTML = namesOfInterns[11];
  } else if (action == "Victory" || action == "Amobi") {
    document.getElementById("responseText").innerHTML = namesOfInterns[12];
  } else {
    document.getElementById("responseText").innerHTML = "Incorrect Intern Name";
  }
}
