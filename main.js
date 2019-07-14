function myInput(){
    
        var InputBirthYear =document.getElementById("birthyear");
       

        var InputBirthMonth = document.getElementById("birthmonth");
     
        var InputBirthDate = document.getElementById("birthdate");
     
        var gender1 = document.getElementById("gender");

        var gender2 = document.getElementById("gender");
     
     
        var Malename = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
     
        var Femalename = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
     
        var DD = ["Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Sunday"];
     

       
        
        var century = parseInt(InputBirthYear.toString().slice(0, 2));

        var birthyear = parseInt(InputBirthYear.toString().slice(2, 4));
        


        var DayofBirth = parseInt(((century / 4) - 2 * century - 1) + ((5 * birthyear / 4)) + ((26 * (InputBirthMonth + 1) / 10))+ InputBirthDate) % 7;

        var Mname = Malename[DayofBirth - 1];
        var day = DD[DayofBirth -1];
        4
        var Fname = Femalename[DayofBirth -1];
        var day = DD[DayofBirth - 1];

        
        if (gender1.checked == true) {
            
        
        
       document.getElementById("result").innerHTML=(" Since you were born on " + day + " Your name is " + Mname);

        }else if (gender2.checked == true) {
            
       
            document.getElementById("result").innerHTML=(" Since you were born on " + day + " Your name is " + Fname);
        };

    };  

myInput();




