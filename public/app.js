var quizQuestions = [
    {
      num: 1,
      question: "HTML stand for",
      Option: {
        a: "Hyper text markup Language",
        b: "Hyper text programming Language",
        c: "Hyper text styling Language",
        d: "Hyper text scripting Language",
      },
      answer: "Hyper text markup Language",
    },
    {
      num: 2,
      question: "Which type of JavaScript Languages is",
      Option: {
        a: "Object-Oriented ",
        b: "Object-Base",
        c: "Assembly Languages",
        d: "high Level",
      },
      answer: "Object-Base",
    },
    {
      num: 3,
      question: "The 'function' and  'var' are known as:",
      Option: {
        a: "Keywords",
        b: "Data types",
        c: "Declaration statements",
        d: "Prototypes",
      },
      answer: "Declaration statements",
    },
    {
      num: 4,
      question: "who is the present president of pakistan",
      Option: {
        a: "Arif Alvi",
        b: "Imran Khan",
        c: "Nawaz Sharif",
        d: "Zardari",
      },
      answer: "Arif Alvi",
    },
    {
      num: 5,
      question: "How many prayers in a day:",
      Option: {
        a: "6",
        b: "5",
        c: "3",
        d: "none",
      },
      answer: "5",
    },
    {
      num: 6,
      question: "How many total surah in quran",
      Option: {
        a: "113",
        b: "114",
        c: "112",
        d: "111",
      },
      answer: "114",
    },
    {
      num: 7,
      question: "The correct sequence of HTML tags for starting a webpage is",
      Option: {
        a: "Head, Title, HTML, body",
        b: "HTML, Body, Title, Head",
        c: "HTML, Head, Title, Body",
        d: "HTML, Title , Head,  Body",
      },
      answer: "HTML, Head, Title, Body",
    },
  ];
  
  var htmlQuestion = document.getElementById("htmlQuestion");
  var htmlOptionList = document.getElementsByClassName("htmlOptionList");
  var nextQuestion = document.getElementById("nextQuestion");
  var countValue = document.getElementById("countValue");
  var quizBox = document.getElementById("quizBox");
  var counter = 0;
  var score = 0;
  var resultValue = document.getElementById("resultValue");
  
  function setQuestion() {
    htmlQuestion.innerHTML = quizQuestions[counter].question;
    htmlOptionList[0].innerHTML = quizQuestions[counter].Option.a;
    htmlOptionList[1].innerHTML = quizQuestions[counter].Option.b;
    htmlOptionList[2].innerHTML = quizQuestions[counter].Option.c;
    htmlOptionList[3].innerHTML = quizQuestions[counter].Option.d;
  }
  
  function nextQuest() {
    var scoreCard = document.getElementById('scoreCard')
    counter++;
    if (counter < quizQuestions.length) {
        setQuestion();
        countValue.innerHTML = counter + 1 + " / " + quizQuestions.length;
    } else {
      quizBox.style.display = "none";
      resultValue.className = "show";
      resultValue.innerHTML ;
      scoreCard.innerHTML = score
      scoreCard.style.color = "white"
    }
    nextQuestion.className = "hide";
  
    for (var i = 0; i < htmlOptionList.length; i++) {
      htmlOptionList[i].classList.remove("disabled");
      htmlOptionList[i].style.backgroundColor = "";
    }
  }
  function checkOption(e) {
    nextQuestion.className = "show";
    if (e.innerHTML == quizQuestions[counter].answer) {
      score += 10;
      e.style.backgroundColor = "#85D8CE";
    } else {
      e.style.backgroundColor = "#F45C43";

  
      for (var i = 0; i < htmlOptionList.length; i++) {
        if (htmlOptionList[i].innerHTML == quizQuestions[counter].answer) {
          htmlOptionList[i].style.backgroundColor = "#85D8CE";
        }
      }
    }
  
    for (var i = 0; i < htmlOptionList.length; i++) {
      htmlOptionList[i].className += " disabled";
    }
}

function checkInformation() {
  var name = document.getElementById('name')
  var text = document.getElementById('text')
  // console.log(name.value.length)
  
  if (name.value.length == 0){
    text.innerHTML = "Please Write Your Name"
    text.style.color = "red"
  }

var email = document.getElementById("email")
var emailAddress = document.getElementById("emailAddress")
  
  if (email.value.length == 0) {
   emailAddress.innerHTML = "Email Is Required";
   emailAddress.style.color = "red"
  }

var number = document.getElementById('number')
var phoneNumber = document.getElementById('phoneNumber')
  if (number.value.length  == 0 ){
    phoneNumber.innerHTML = "Number Is Required "
    phoneNumber.style.color = "red"
  } 

var code = document.getElementById('code')
var codeNumber = document.getElementById('codeNumber')
  if (code.value.length  == 0 ){
    codeNumber.innerHTML = "Code Is Required "
    codeNumber.style.color = "red"
  }

else {
    window.location.assign("./start.html")
} 
}
