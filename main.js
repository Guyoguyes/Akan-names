function myInput() {
    var InputBirthYear =document.getElementById("birthyear");
    
    var InputBirthMonth = document.getElementById("birthmonth");

    var InputBirthDate = document.getElementById("birthdate");

    var gender = document.getElementById("M or F");
    

    var Malename = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    var Femalename = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];

    var DD = ["Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Sunday"];
}
    var Century = parseInt(InputBirthYear.slice(0, 2));
    

    var birthyear = parseInt(InputBirthYear.slice(2, 4));

    var DayofBirth = parseInt(((Century / 4) - 2 * Century - 1) + ((5 * birthyear / 4)) + ((26 * (InputBirthMonth + 1) / 10))+ InputBirthDate ) % 7;
    

    if (gender === "M") {
        var Mname = Malename[DayofBirth - 1]
        var day = DD[DayofBirth -1]
        
        alert(" Since you were born on " + day + " Your name is "+ Mname);

        }
        else if (gender === "F") {
            var Fname = Femalename[DayofBirth -1]
            var day = DD[DayofBirth - 1]
            alert(" Since you were born on " + day + " Your name is "+ Fname);
        }


    

myInput();

    