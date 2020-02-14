function akan(){
  var day = document.getElementById("day").value;
  var DD = parseInt(day);
  var month = document.getElementById("month").value;
  var MM =parseInt(month);
  var year = document.getElementById("year").value;
  var YY= parseInt(year);

  var CC = parseInt(YY-1)/100+1;
  
  var dayOfTheWeek = parseInt (( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7;
  var dayOfTheWeek = Math.floor(dayOfTheWeek);

  if (document.getElementById("gender").checked){
    var gender = "male";
  }
  else {
    var gender = "female";
  }


  var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

  if (YY<1000 || YY>2020){
    alert("INVALID YEAR! PLEASE ENTER A VALID YEAR!");
  }
  else if (DD>31){
    alert("INVALID DAY! PLEASE ENTER A VALID DAY.");
  }
  else if (MM == 2 && DD>29){
    alert("INVALID DAY! PLEASE ENTER A VALID DAY!");
  }
  else if (MM == 4 && DD>30){
    alert("INVALID DAY! PLEASE ENTER A VALID DAY!");
  }
  else if(MM ==6 && DD>30){
    alert("INVALID DAY! PLEASE ENTER A VALID DAY!");
  }
  else if(MM == 9 && DD>30){
    alert("INVALID DAY! PLEASE ENTER A VALID DAY!");
  }
  else if (MM == 11 && DD>30){
    alert("INVALID DAY! PLEASE ENTER A VALID DAY!");
  }
  else if (MM<1 || MM>12){
    alert("INVALID MONTH! PLEASE ENTER VALID MONTH.");
  }

  else if (dayOfTheWeek == 0 && gender =="male"){
    document.getElementById("outcome").innerHTML=("Akan Name is : "+ maleNames[0] +".");
  }
  else if(dayOfTheWeek == 1 && gender == "male"){
    document.getElementById("outcome").innerHTML=("Akan Name is : "+ maleNames[1] +".");
  }
  else if(dayOfTheWeek == 2 && gender == "male"){
    document.getElementById("outcome").innerHTML=("Akan Name is : "+ maleNames[2] +".");
  }
  else if(dayOfTheWeek == 3 && gender == "male"){
    document.getElementById("outcome").innerHTML=("Akan Name is : "+ maleNames[3] +".");
  }
  else if(dayOfTheWeek == 4 && gender == "male"){
    document.getElementById("outcome").innerHTML=("Akan Name is : "+ maleNames[4] +".");
  }
  else if(dayOfTheWeek == 5 && gender == "male"){
    document.getElementById("outcome").innerHTML=("Akan Name is : "+ maleNames[5] +".");
  }
  else if(dayOfTheWeek == 6 && gender == "male"){
    document.getElementById("outcome").innerHTML=("Akan Name is : "+ maleNames[6] +".");
  }
  else if(dayOfTheWeek == 0 && gender == "female"){
    document.getElementById("outcome").innerHTML=("Akan Name is : "+ femaleNames[0] +".");
  }
  else if(dayOfTheWeek == 1 && gender == "female"){
    document.getElementById("outcome").innerHTML=("Akan Name is : "+ femaleNames[1] +".");
  }
  else if(dayOfTheWeek == 2 && gender == "female"){
    document.getElementById("outcome").innerHTML=("Akan Name is : "+ femaleNames[2] +".");
  }
  else if(dayOfTheWeek == 3 && gender == "female"){
    document.getElementById("outcome").innerHTML=("Akan Name is : "+ femaleNames[3] +".");
  }
  else if(dayOfTheWeek == 4 && gender == "female"){
    document.getElementById("outcome").innerHTML=("Akan Name is : "+ femaleNames[4] +".");
  }
  else if(dayOfTheWeek == 5 && gender == "female"){
    document.getElementById("outcome").innerHTML=("Akan Name is : "+ femaleNames[5] +".");
  }
  else if(dayOfTheWeek == 6 && gender == "female"){
    document.getElementById("outcome").innerHTML=("Akan Name is : "+ femaleNames[6] +".");
  }
  else{
    document.getElementById("outcome").innerHTML=("INVALID INPUT");
  }

}