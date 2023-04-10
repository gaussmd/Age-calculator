function calculateAge() {
    var birthdate = new Date(document.getElementById("birthdate").value);
    var now = new Date();
    var ageYears = now.getFullYear() - birthdate.getFullYear();
    var ageMonths = now.getMonth() - birthdate.getMonth();
    var ageDays = now.getDate() - birthdate.getDate();
    
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--;
      ageMonths += 12;
      if (ageDays < 0) {
        var daysInLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 0).getDate();
        ageDays += daysInLastMonth;
      }
    }
    
    document.getElementById("years").innerHTML = ageYears + " years";
    document.getElementById("months").innerHTML = ageMonths + " months";
    document.getElementById("days").innerHTML = ageDays + " days";
    document.getElementById("result").style.display = "block";
  }