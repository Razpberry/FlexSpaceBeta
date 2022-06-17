var dcurr = new Date();

var dayoftheweekword = dcurr.getDay();
var dayoftheweek = dcurr.getDay();
var hours = dcurr.getHours();
var minutes = dcurr.getMinutes();
var seconds = dcurr.getSeconds();

var curdaynum;

function myTimer() {
  dcurr = new Date();
  dayoftheweek = dcurr.getDay();
  dayoftheweekword = weekdays[dayoftheweek];
  hours = dcurr.getHours();
  minutes = dcurr.getMinutes();
  document.getElementById("dateandtime").innerHTML =
    dayoftheweekword + ", " + dcurr.toLocaleTimeString();

  function getMinInDay() {
    let minutes1 = hours * 60 + minutes;
    return minutes1;
  }

  var dmins = getMinInDay();
  var next3classes = "The next 3 classes are:";

  var nextclass1;
  var nextclass2;
  var nextclass3;

  var currentclasssentence = "The class you have right now is:";
  var currentday = "It is currently a day:";

  var nextclasswhen;

  var curclass = "";
  dayoftheweekword = weekdays[dayoftheweek];

  if (dayoftheweek == 6 || dayoftheweek == 0) {
    curdaynum = "It's the weekend!";
  } else {
    curdaynum = dayoftheweek - 3;

    if (curdaynum < 0) {
      curdaynum += 5;
    }
  }

  function classFind(num, max) {
    var start = p[num];
    var end = p[num + 1];
    curclass = days[curdaynum][num];
    nextclass1 = days[curdaynum][num + 1];
    nextclass2 = days[curdaynum][num + 2];
    nextclass3 = days[curdaynum][num + 3];
    nextclasswhen = end - dmins;
    if (num + 2 > max) {
      nextclass2 = "There's nothing else!";
      nextclass3 = "";
    } else if (num + 3 > max) {
      nextclass2 = days[curdaynum][num + 2];
      nextclass3 = "There's nothing else!";
    }
  }

  function setAllEmpty() {
    nextclass1 = "";
    nextclass2 = "";
    nextclass3 = "";
    next3classes = "";
    nextclasswhen = "";
  }

  function getPeriod() {
    if (dayoftheweek == 6 || dayoftheweek == 0) {
      curclass = "It's the weekend!";
      setAllEmpty();
    } else if (dmins >= p[0] && dmins < p[1]) {
      classFind(0, 9);
    } else if (dmins >= p[1] && dmins < p[2]) {
      classFind(1, 9);
    } else if (dmins >= p[2] && dmins < p[3]) {
      classFind(2, 9);
    } else if (dmins >= p[3] && dmins < p[4]) {
      classFind(3, 9);
    } else if (dmins >= p[4] && dmins < p[5]) {
      classFind(4, 9);
    } else if (dmins >= p[5] && dmins < p[6]) {
      classFind(5, 9);
    } else if (dmins >= p[6] && dmins < p[7]) {
      classFind(6, 9);
    } else if (dmins >= p[7] && dmins < p[8]) {
      classFind(7, 9);
    } else if (dmins >= p[8] && dmins <= p[9]) {
      classFind(8, 9);
    } else {
      curclass = "You're not supposed to be in school right now?!";
      setAllEmpty();
    }
    return curclass;
  }

  if (curdaynum == "It's the weekend!") {
    document.getElementById("day").innerHTML = "";
    document.getElementById("currentday").innerHTML = "";
    document.getElementById("currentclass").innerHTML = "";
  } else {
    document.getElementById("day").innerHTML = daysnum[curdaynum];
    document.getElementById("currentday").innerHTML = currentday;
    if (getPeriod() == "You're not supposed to be in school right now?!") {
      currentclasssentence = "";
    }
    document.getElementById("currentclass").innerHTML = currentclasssentence;
  }

  document.getElementById("class").innerHTML = getPeriod();
  if (nextclasswhen != "") {
    nextclasswhen = "Your next class is in " + nextclasswhen + " minute(s)";
  }
  document.getElementById("nextclasswhen").innerHTML = nextclasswhen;
  document.getElementById("next3classes").innerHTML = next3classes;

  document.getElementById("nextclass1").innerHTML = nextclass1;
  document.getElementById("nextclass2").innerHTML = nextclass2;
  document.getElementById("nextclass3").innerHTML = nextclass3;

  var nextSpcfClassNum = document.getElementById("nextSpcfClass").value;
  var nextSpcfClass, nextSpcfClassWhen;
  if (nextSpcfClassNum != "---") {
    switch (nextSpcfClassNum) {
      case "1":
        nextSpcfClass = "Math";
        break;
      case "2":
        nextSpcfClass = "English";
        break;
      case "3":
        nextSpcfClass = "History";
        break;
      case "4":
        nextSpcfClass = "Science";
        break;
      case "5":
        nextSpcfClass = "Gym";
        break;
      case "6":
        nextSpcfClass = "French";
        break;
      case "7":
        nextSpcfClass = "Art";
        break;
      case "8":
        nextSpcfClass = "Health";
        break;
      case "9":
        nextSpcfClass = "Music";
        break;
    }
    nextSpcfClass =
      "Your next " + nextSpcfClass + " class is " + nextSpcfClassWhen;
    document.getElementById("whenNextSpcfClass").innerHTML = nextSpcfClass;
  } else {
    document.getElementById("whenNextSpcfClass").innerHTML = "";
  }
}
setInterval(myTimer, 250);

$(document).on("click", "#showAllClasses", function () {
  if (curdaynum == "It's the weekend!") {
    if (document.getElementById("showAllClassesText").innerHTML != "") {
      document.getElementById("showAllClassesText").innerHTML = "";
    } else {
      document.getElementById("showAllClassesText").innerHTML =
        "Still the weekend...";
    }
  } else {
    if (document.getElementById("showAllClassesText").innerHTML != "") {
      document.getElementById("showAllClassesText").innerHTML = "";
    } else {
      let text;
      for (var i = 0; i < 9; i++) {
        if (i == 0) {
          text = "Period " + (i + 1) + ": " + days[curdaynum][i];
        } else {
          text =
            text + "<br/> " + "Period " + (i + 1) + ": " + days[curdaynum][i];
        }
      }
      document.getElementById("showAllClassesText").innerHTML = text;
    }
  }
});
