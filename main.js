function myFunction(){
    
        var InputBirthYear =document.getElementById("birthyear");
       

        var InputBirthMonth = document.getElementById("birthmonth");
     
        var InputBirthDate = document.getElementById("birthdate ");
     
        var gender1 = document.getElementById("radio1");

        var gender2 = document.getElementById("radio2");
     
     
        var Malename = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
     
        var Femalename = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
     
        var DD = ["Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Sunday"];
     
};

function Century(){

    myFunction();
        var century = parseInt(document.getElementById("birthyear").slice(0, 2));
        
        var birthyear = parseInt(document.getElementById("birthyear").slice(2, 4));

        


        var DayofBirth = parseInt(((century / 4) - 2 * century - 1) + ((5 * birthyear / 4)) + ((26 * (InputBirthMonth + 1) / 10))+ InputBirthDate) % 7;
};

function myInput() {
        
        Century();
    
        if (gender1.checked == true) {
            gender1 === "male";
        var Mname = Malename[DayofBirth - 1];
        var day = DD[DayofBirth -1];
        
        document.getElementById("result").innerHTML = (" Since you were born on " + day + " Your name is " + Mname);

        }else if (gender2.checked == true) {
        gender2 === "female";
    
          
        var Fname = Femalename[DayofBirth -1];
            var day = DD[DayofBirth - 1];
            document.getElementById("result").innerHTML = (" Since you were born on " + day + " Your name is " + Fname);
        }else{
            alert("No Gender selected")
        }

    };  

myInput();




