let fname = document.getElementById("f-name");
let lname = document.getElementById("l-name");
var userName ="";
let formActive = true;
let form = document.getElementsByClassName("form")[0];
let container = document.getElementsByClassName("container")[0];
if (formActive) container.style.display = "none";
let timer = document.getElementsByClassName('timer')[0];
let score = 0;
let timeOut = false;
time = 10;
function timerfunc() 
{
    timer.innerText = time;
    if (time < 0){
        timeOut = true;
        time = 10;

    }
    if(timeOut) {
        if (count > countEnd) {
            console.log(userName)
        var table = `<table style = "font-size : 1.5rem; border : 1px solid #AAA; border-collapse : collapse; padding : 10px">
        <tr>
        <td>Name : </td> <td>${userName}</td>
        </tr>
        <tr>
        <td>Score : </td> <td>${score * 10}</td>
        </tr><tr>
        <td>Correct : </td><td>${score}</td></tr>
        <tr><td>Wrong : </td><td>${questionBank.length - score}</td></tr>
        </table>`
        document.getElementsByClassName('container')[0].innerHTML = table;
        }
        changeQs(count);
        count++;
        time = 10;
        timer.innerText = time;
        timeOut = false
    }
    time--;
    }

let questionBank = [
  {
    question: "What is the scientific name of a butterfly?",
    answers: ["Coleoptera", "Formicidae", "Rhopalocera"],
    correctIndex: 3,
  },
  {
    question: "How hot is the surface of the sun?",
    answers: ["1,233 K", "5,778 K", "101,300 K"],
    correctIndex: 2,
  },
  {
    question: "Who are the actors in The Internship?",
    answers: [
      "Ben Stiller, Jonah Hill",
      "Courteney Cox, Matt LeBlanc",
      "Kaley Cuoco, Jim Parsons",
    ],
    correctIndex: 3,
  },
];

let count = 0;
let countEnd = questionBank.length - 1;

var validation = () => {
  if (fname.value == "" || lname.value == "") {
    alert("Fields should be filled");
    fname.value = "";
    lname.value = "";
  } else {
    userName = fname.value + " " + lname.value;
    form.style.display = "none";
    container.style.display = "inherit";
    formActive = false;
    setInterval(timerfunc,1000);
  }
};

document.addEventListener("keydown", (e) => {
  if (e.key == "Enter" && formActive) {
    validation();
  }
});
function changeQs(count) {
  let ques = document.getElementById("quizQuestion");
  let options = document.getElementsByTagName("label");
  ques.innerText = questionBank[count].question;
  console.log(options);
  for (let i = 0; i < options.length - 2; i++) {
    options[i + 2].innerText = questionBank[count].answers[i];
  }
}
changeQs(0);
count++;
let next = () => {
  let selected = document.querySelector("input[name='one']:checked");
  if (selected != null) {
      time = 10;
      timeOut = false;
      setInterval(timerfunc, 1000);

    if (selected.value == questionBank[count].correctIndex) score++;
    if (count > countEnd ) {
        console.log(userName)
        var table = `<table style = "font-size : 1.5rem; border : 1px solid #AAA; border-collapse : collapse; padding : 10px">
        <tr>
        <td>Name : </td> <td>${userName}</td>
        </tr>
        <tr>
        <td>Score : </td> <td>${score * 10}</td>
        </tr><tr>
        <td>Correct : </td><td>${score}</td></tr>
        <tr><td>Wrong : </td><td>${questionBank.length - score}</td></tr>
        </table>`
        document.getElementsByClassName('container')[0].innerHTML = table;
    } else {
      changeQs(count);
    }
  }
  count++;
};