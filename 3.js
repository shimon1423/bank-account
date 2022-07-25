class BankAccount {
    status = 1;
    money = 0;
  constructor() {
   
  }
  
  Open() {
   if(this.status == 0)
   {  
     this.status = 1; 
     this.money = 0;
   }
   else 
      alert("hykujuy");  
  }
  
  close() {
   if(this.status > 0)
     this.status = 0;
   else 
     throw new ValueError();
  }
  
  
  myAction() {
     var reqType = document.getElementById('reqType').value;
     var amount = document.getElementById('amount').value;
     if(reqType == 'deposit')
         this.deposit(amount);
     else
         this.withdraw(amount);
  }
  
  deposit(sumOfMoney) {
   if(this.status > 0 && sumOfMoney > 0) {
     this.money += parseInt(sumOfMoney);
     document.getElementById('balance').innerHTML = this.money;
   }
   else
     throw new ValueError();
  }
  
  withdraw(sumOfMoney) {
   if(this.status > 0 && sumOfMoney > 0){
     if(this.money >= sumOfMoney) {
       this.money -= parseInt(sumOfMoney);
       document.getElementById('balance').innerHTML = this.money;
     }
     else
       throw new ValueError();        
   }
   else
     throw new ValueError();   
  }
  
  /*
  get balance() {
   if(this.status > 0)
     return this.money;
   else
     throw new ValueError();
  }
  */
  
  } 
  
  
  
  
  class ValueError extends Error {
  constructor() {
   super('Bank account error');
  }
  }
  

  // Sign up functions

const fillerror = `<span style="color:red;font-size:15px;">please fill</span>`
function myshoot() {
    const fillname1 = document.getElementById("firstname");
    choose1()
    choose2()
    choose3()
    choose4()
    ended()
    rfillname1 = document.getElementById("firstname").value;
    rfillname2 = document.getElementById("lastname").value;
    rfillemail1 = document.getElementById("myemail").value;
    rfillage1 = document.getElementById("myage").value;
    }
function choose1() {
     fillname1 = document.getElementById("firstname").value;
     fillname2 = document.getElementById("lastname").value;
     fillemail1 = document.getElementById("myemail").value;
     fillage1 = document.getElementById("myage").value;
     test = fillemail1.includes('@');
 
     if (fillname1 == "") {
    document.getElementById("thisname1").innerHTML = fillerror;}
    else { document.getElementById("thisname1").innerHTML = "";}
}
function choose2() {
    if (fillname2 == "") {
        document.getElementById("thisname2").innerHTML = fillerror;}
      else { document.getElementById("thisname2").innerHTML = "";}

}
function choose3() {
    if (test == false) {
        document.getElementById("thisemail").innerHTML = fillerror;}
  else { document.getElementById("thisemail").innerHTML = "";}

}
function choose4() {
    if (fillage1 == "") {
        document.getElementById("thisage").innerHTML = fillerror;}
else { document.getElementById("thisage").innerHTML = "";}
}
function ended() {
    insert = fillage1;
    console.log(insert);
        let x = Number(new Date(insert));
        let y = Number(new Date())
         finish = (y - x) /1000 /60 /60 /24 /365;
      if (fillname1 != "" && fillname2 != "" && test != false)  {
            if (fillage1 == "") {
                document.getElementById("thisage").innerHTML = fillerror;}
        else {
            if(finish < 18) {
                alert("you are under age")
              } else {
                mystyle()
              }
        }
      } 
}
// end Sign up functions


//change page (Sign up) --> (password)

  function mystyle() {
      document.getElementById
      myarray =  document.querySelectorAll('.blockme')
      for(var i = 0; i < myarray.length; i++){
        console.log(`choose num${[i]}:`, myarray[i].value);
    };
      // document.querySelector(".applicationpass").style.visibility  = "visible";
       textpass = `<br><br>
      Password: <span id="shortpass1"></span><input type="password" value="password" id="mypassword"  autocomplete="on"><br>
      fill agein <span id="shortpass2"></span><input type="password" value="password" id="mypassword1" autocomplete="on"><br>
      <input type="checkbox" onclick="showpassword()" ><span style="font-size:15px;">Show Password </span><br>
      <input type="button" value="Done" onclick="buttonpassword()"></input>
    `
    document.getElementById("push").innerHTML = textpass;
    document.getElementById("firstname").disabled = "on"
    document.getElementById("lastname").disabled = "on"
    document.getElementById("myemail").disabled = "on"
    document.getElementById("myage").disabled = "on"

      }
//end password input

console.log(new Date())


let limit = new Date();
let here = limit.toTimeString();


// set limt choose date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
var yyyy = today.getFullYear();
if(dd < 10){
  dd = '0' + dd
} 
if(mm < 10){
  mm = '0'+ mm
} 
today = yyyy +'-'+ mm+ '-'+ dd;
//document.getElementById("myage").setAttribute("max", today);
// end


// password fill

// checkbox
function showpassword() {
  var x = document.getElementById("mypassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function buttonpassword() {
  pass1 = document.getElementById("mypassword").value;
  pass2 = document.getElementById("mypassword1").value;
  spaninsert1 = document.getElementById("shortpass1");
  spaninsert2 = document.getElementById("shortpass2");
  pass1check = pass1.length;

  if (pass1 == "" && pass2 == "") { alert("nothing being filled")} else { 
    if (pass1 == pass2) { 
      if (pass1check > 4 ) {
       document.getElementById("shortpass1").innerHTML = "";
       document.getElementById("shortpass2").innerHTML = "" ;
      notshow1 = document.getElementById("mypassword").value
      savepass()
      

      ;} 
      else {
       document.getElementById("shortpass1").innerHTML = `<span style="color:red;font-size:15px;">too short</span>`
       document.getElementById("shortpass2").innerHTML = `<span style="color:red;font-size:15px;">too short</span>` } } 
    else { document.getElementById("shortpass1").innerHTML = `<span style="color:red;font-size:15px;">not mach</span>`
     document.getElementById("shortpass2").innerHTML = `<span style="color:red;font-size:15px;">not mach</span>`}
  }
}
  
// profile box insert
function myprofile() {
  dfillname1 = document.getElementById("firstname").value;
    dfillname2 = document.getElementById("lastname").value;
    dfillemail1 = document.getElementById("myemail").value;
    dfillage1 = document.getElementById("myage").value;
let dataonme = `
<ul>
        <h1>hello ${dfillname1}</h1>
        <li>your data account:</li>
        <li>fullname: ${dfillname1}  ${dfillname2}</li>
        <li>gmail: ${dfillemail1}</li>
        <li>Datebirth: ${dfillage1}</li>
      </ul>
`
document.getElementById("myprofile").innerHTML = dataonme;
}


function savepass() {
  console.log("password", notshow1);
  document.getElementById("myname").style.display = "none";
  document.getElementById("profilebox1").style.display = "block";
  document.getElementById("profilebox2").style.display = "block";
  document.getElementById("profilebox3").style.display = "block";
  document.getElementById("balanceInsert").style.display = (this.money);
  console.log("newpage...");
}

