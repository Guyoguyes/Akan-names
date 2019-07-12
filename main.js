function myInput() {
    var InputBirthYear =prompt("Enter your year of Birth:");
    
    var InputBirthMonth = prompt("Enter your month of Birth");

    var InputBirthDate = prompt("Enter your Date of Birth ");

    var gender = prompt('M or F');


    var Malename = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    var Femalename = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];

    var DD = ["Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Sunday"];

    var Century = parseInt(InputBirthYear.slice(0, 2));
    

    var birthyear = parseInt(InputBirthYear.slice(2, 4));

    var DayofBirth = parseInt(((Century / 4) - 2 * Century - 1) + ((5 * birthyear / 4)) + ((26 * (InputBirthMonth + 1) / 10))) % 7;
    

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


    }
    myInput()