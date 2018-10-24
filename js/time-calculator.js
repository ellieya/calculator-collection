class my_time {
    
    constructor(time)  {  
      var holder;
      var flag = false; //Turns to true once : is passed
      
      //Initialize time and minute variables to avoid a string with 'undefined'
      this.hour = ""; 
      this.minute = "";
      
      //For loop to go through every character
      for (var i = 0; i < time.length; i++) {
          if (time[i] != ':') {
            if (flag) {
                this.minute += time[i];
            }
            else {
                this.hour += time[i];
            }
          }
          else {
              flag = true;
          }
      }
      
      //Parse hour and min variables to integer values
      this.minute = parseInt(this.minute);
      this.hour = parseInt(this.hour);
        
        return this;
    }
};


function calculate() {
    
    var times_nodes = document.getElementsByClassName("times");
    var times = [];
    
    //Error handling: If empty
    if (times_nodes[0].value == "" || times_nodes[1].value == "") {
        throw "ERROR: Fields cannot be empty!";
    }
    
    //Store into data structure
    for (i = 0; i < times_nodes.length; i++) {
        times[i] = new my_time(times_nodes[i].value);
    }
    
    //Fix numbers according to whether today is true or false (+24)
    var selects = document.getElementsByClassName("time-selects");
    for (i = 0; i < selects.length; i++) {
        if (selects[i].value == "tomorrow")
            times[i].hour += 24;
    }
    
    //Error handling: If time1 > time 2
    if (times[0].hour > times[1].hour) {
        throw "ERROR: my_time #1 cannot be greater than my_time #2!";
    } else if (times[0].hour == times[1].hour && times[0].minute > times[1].minute) {
        throw "ERROR: my_time #1 cannot be greater than my_time #2!";
    }
    
    
    //Define temp/counter vars
    var temp = [];
    var i;
    
    //Convert to minutes
    for (i = 0; i < times.length; i++) {
        temp[i] = (times[i].hour * 60) + times[i].minute;
        }
    
    //Calculation
    temp[0] = temp[1] - temp[0];
    
    //Return string
    return "Difference between the two times is " + Math.floor(temp[0]/60) + " hour(s) and " + temp[0] % 60 + " minute(s).";
    
    //Deallocation of all variables
}


function submit() {
    try {
    window.alert(calculate());
        }
    catch (e) {
        alert(e);
    }
}

function get_cur() {
    var re_edit_spawn = false;
    var d = new Date();
    var times = document.getElementsByClassName("times");
    var hours = d.getHours();
    var min = d.getMinutes();
    
    //Fix time to conform to input type requirements
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (min < 10) {
        min = "0" + min;
    }
    
    times[0].value = hours + ":" + min;
    times[0].disabled = true;
    
    //spawn button that makes re-editable
    
    if (!re_edit_spawn) {
        var get_cur = document.getElementById("get-cur");
        var re_edit = document.createElement("button");
        re_edit.innerHTML = "Use custom time";

        get_cur.parentNode.insertBefore(re_edit,get_cur);
        
        re_edit_spawn = true;
    }
    //
    
}

//Add EventListener to HTML elements
document.getElementById("submit").addEventListener("click", submit);
document.getElementById("get-cur").addEventListener("click", get_cur);
