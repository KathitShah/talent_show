function hi(){
  var list = ["Steven", "Khava", "Jessica", "Dimitre", "Harshita", "Roopak", "Sydney", "Walter", "Juan", "Isabela", "Sloane", "Zoë", "Zoe", "Camilla", "Morgan", "Darya", "Aishat", "Diana", "Alison", "Kathit", "Candace", "Kowalyk"]
  var password = ["kathitisthebest"];
  var myName = document.getElementById("demo").value;
  var letter = myName.slice(0,1);
  var myPassword = document.getElementById("password").value;
  var capitalize = letter.toUpperCase();
  var letters = myName.slice(1,myName.length);
  var noCapital = letters.toLowerCase();
  var yourName = capitalize + noCapital;
  
  if(list.includes(yourName) && password.includes(myPassword)){
    if(yourName === "Candace" && password.includes(myPassword)|| yourName === "Kowalyk" && password.includes(myPassword)){
      document.getElementById("cofl").style.display = "none";
      document.getElementById("message").innerHTML = "Mrs. Kowalyk";
      alert("Aww, Thanks Mrs.Kowalyk, Thanks for confirming that I am! Now that you have accepted it... you must refer to me as 'God Kathit', Just Kidding! 🤣");
    }
    else{
      document.getElementById("message").innerHTML = yourName;
      document.getElementById("cofl").style.display = "none";
      alert("Aww, Thanks " + yourName + ", Thanks for confirming that I am!  Now that you have accepted it... you must refer to me as 'God Kathit', Just Kidding! 🤣");
      }
  }
  else{
    alert("Please stop here and retry");
    if (password.includes(myPassword)){
      document.getElementById("demo").value = "";
    }
    else if(list.includes(yourName)){
      document.getElementById("password").value = "";
    }
  }
}

function noWay(){
  if (document.getElementById("message").innerHTML == "Mrs. Kowalyk"){
    document.getElementById("clue").innerHTML = "BCEEHIKLMPQRSUV(rw&23wb6axzs9yxz)";
    document.getElementById("classteach").src = "images/teacher.jpg";
  }
  else if (document.getElementById("message").innerHTML == "Steven"){
    document.getElementById("clue").innerHTML = "Yr";
    document.getElementById("classteach").src = "images/Steven.jpg";
  }
  else if (document.getElementById("message").innerHTML == "Khava"){
    document.getElementById("clue").innerHTML = "ow";
    document.getElementById("classteach").src = "images/Khava.jpg";
  }
  else if (document.getElementById("message").innerHTML == "Jessica"){
    document.getElementById("clue").innerHTML = "ua";
    document.getElementById("classteach").src = "images/Jessica.png";
  }
  else if (document.getElementById("message").innerHTML == "Dimitre"){
    document.getElementById("clue").innerHTML = "&2";
    document.getElementById("classteach").src = "images/Dimitre.jpg";
  }
  else if (document.getElementById("message").innerHTML == "Harshita"){
    document.getElementById("clue").innerHTML = "re";
    document.getElementById("classteach").src = "images/Harshita.jpg";
  }
  else if (document.getElementById("message").innerHTML == "Roopak"){
    document.getElementById("clue").innerHTML = "t3";
    document.getElementById("classteach").src = "images/Roopak.jpg";
  }
  else if (document.getElementById("message").innerHTML == "Sydney"){
    document.getElementById("clue").innerHTML = "hw";
    document.getElementById("classteach").src = "images/Sydney.jpg";
  }
  else if (document.getElementById("message").innerHTML == "Walter"){
    document.getElementById("clue").innerHTML = "eb";
    document.getElementById("classteach").src = "images/Walter.jpg";
  }
  else if (document.getElementById("message").innerHTML == "Juan"){
    document.getElementById("clue").innerHTML = "6e";
    document.getElementById("classteach").src = "images/Juan.png";
  }
  else if (document.getElementById("message").innerHTML == "Isabela"){
    document.getElementById("clue").innerHTML = "as";
    document.getElementById("classteach").src = "images/Isabela.png";
  }
  else if (document.getElementById("message").innerHTML == "Sloane"){
    document.getElementById("clue").innerHTML = "xt";
    document.getElementById("classteach").src = "images/Sloane.png";
  }
  else if (document.getElementById("message").innerHTML == "Zoe" || document.getElementById("message").innerHTML == "Zoë"){
    document.getElementById("clue").innerHTML = "te";
    document.getElementById("classteach").src = "images/Zoe.jpg";
  }
  else if (document.getElementById("message").innerHTML == "Camilla"){
    document.getElementById("clue").innerHTML = "za";
    document.getElementById("classteach").src = "images/Camilla.jpg";
  }
  else if (document.getElementById("message").innerHTML == "Morgan"){
    document.getElementById("clue").innerHTML = "sc";
    document.getElementById("classteach").src = "images/Morgan.jpg";
  }
  else if (document.getElementById("message").innerHTML == "Darya"){
    document.getElementById("clue").innerHTML = "9h";
    document.getElementById("classteach").src = "images/Darya.jpg";
  }
  else if (document.getElementById("message").innerHTML == "Aishat"){
    document.getElementById("clue").innerHTML = "ye";
    document.getElementById("classteach").src = "images/Aishat.jpg";
  }
  else if (document.getElementById("message").innerHTML == "Diana"){
    document.getElementById("clue").innerHTML = "rx";
    document.getElementById("classteach").src = "images/Diana.jpg";
  }
  else if (document.getElementById("message").innerHTML == "Alison"){
    document.getElementById("clue").innerHTML = "!z";
    document.getElementById("classteach").src = "images/Alison.jpg";
  }
}
