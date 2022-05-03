var forms=document.getElementById("for");

var form=document.getElementById("form");
var message=document.getElementById("message");
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
var umair=document.getElementById("umair");
var btnmain=document.getElementById("btn-main");
var home=document.getElementById("home");
var students=document.getElementById("students");
var newadmission=document.getElementById("new-admission");
var rfid=document.getElementById("rfid");
var headerhome=document.getElementById("header-home");
var headerallstudents=document.getElementById("header-allstudents");
var headernewadmission=document.getElementById("header-newadmission");
var headertakeattendance=document.getElementById("header-takeattendance");
var headerrfid=document.getElementById("header-rfid");
var resultsdive=document.getElementById("results-dive");
var studentsresults=document.getElementById("students-results");
var attendancedive=document.getElementById("attendance-dive");
var studentid=document.getElementById("student-id");


resultsdive.addEventListener("click", funcresultdive);
attendancedive.addEventListener("click", funcattendancedive);
form.addEventListener('submit', king);

umair.remove();
studentsresults.remove();
studentid.remove();

function funcresultdive(e){
    e.preventDefault();
    console.log("button is Clicked...")
    var front=document.getElementById("front");
    home.remove();
    front.appendChild(studentsresults);
}
function funcattendancedive(e){
    e.preventDefault();
    console.log("button is Clicked...")
    var front=document.getElementById("front");
    home.remove();
    front.appendChild(studentid);
}
function king(e){
    e.preventDefault();
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    
//   window.alert('king')   
   
    if(email=="basharatalidogar14@gmail.com" && password=="king"){
             message.innerHTML="Succesful Congrats ...";
            
           

             setTimeout(() => {
                forms.remove();
            header.appendChild(umair);
            // console.log(a)  
                
             }, 2000);
    }
    else{
      
    message.innerHTML="Invalid User E-Mail & Password ! <br> Please Try Again . `       ";
   
        var email=document.getElementById("email");
        var password=document.getElementById("password");
        console.log("Button is Clicked");
       var a = email.value=" ";
        var b=password.value="";
         email.appendChild(a);
         password.appendChild(b);
    }
}

// btnmain.addEventListener("click", btnclick);
// function btnclick(){
   
// var side1=document.getElementById("side-1");
// var side1nav=document.getElementById("side-1nav");
//     console.log("btn is Clicked");
//     side1.className="king"
//     if(btnmain.className=="open"){
//        btnmain.className=" ";
//     //    side1.remove;
    
//     }
//     else{
//         btnmain.className="open";
//         // side1nav.appendChild(side1);
            
//     }
// }

// home.remove();
students.remove();
newadmission.remove();
rfid.remove()

headerhome.addEventListener("click", funcheadhome);
headerallstudents.addEventListener("click" , funcallstudents);
headernewadmission.addEventListener("click", funcnewadmission);
headerrfid.addEventListener("click", funcrfid);
function funcheadhome(e){
    var front=document.getElementById("front");
    e.preventDefault();
    console.log("button is Clicked...")
    studentsresults.remove();
    students.remove();
    studentid.remove();
    newadmission.remove();
    rfid.remove();
    front.appendChild(home);
   
  
}

function funcallstudents(e){
    e.preventDefault();
    var front=document.getElementById("front");
    studentsresults.remove();
    home.remove();
    newadmission.remove();
    rfid.remove();
    front.appendChild(students);
  
}
function funcnewadmission(e){
    e.preventDefault();
    var front=document.getElementById("front");
    studentsresults.remove();
    home.remove();
    students.remove();
    rfid.remove();
    front.appendChild(newadmission);
}
function funcrfid(e){
  e.preventDefault();
  var front=document.getElementById("front");
  studentsresults.remove();
  home.remove();
  students.remove();
  newadmission.remove();
  front.appendChild(rfid);
}