/*
OK, so, since there is input type of time, which I was unaware of, we will have to reconstruct this entire function to become a stack that watches out for colon.

Additionally, PM just converts the value returned to military time which may prove to be useful.
*/

class Time {
  constructor(hour,minute,meridian)  {
      this.hour = hour;
      this.minute = minute;
      this.meridian = meridian;
  }
};

function calculate() {
    
    //Exception: Is empty
    throw (isEmpty)
    
    /*
    Handle:
    alert("Fields cannot be empty!");
    */
    
    var temp1;
    var temp2;
    
    //Convert all strings to int and store into variables
    var time_1_hour = parseInt(document.getElementById("time_1_hour").value);
    var time_1_minute = parseInt(document.getElementById("time_1_minute").value);
    var time_2_hour = parseInt(document.getElementById("time_2_hour").value);
    var time_2_minute = parseInt(document.getElementById("time_2_minute").value);
    
    
    //Store into data structure
    time_1 = new Time(time_1_hour, time_1_minute, time_1_meridian);
    time_2 = new Time(time_2_hour, time_2_minute, time_2_meridian);
    
    //Hour adjustment
    if (time_1.meridian !== time_2.meridian) {
        time_2.hour += 12; //Have to rethink this in case it's 9AM to 12PM or 9AM to 1PM...
    }
    
    //Convert to minutes
    temp1 = (time_1.hour * 60) + time_1.minute;
    temp2 = (time_2.hour * 60) + time_2.minute;
    
    //Calculation
    temp1 = time_2 - time_1;
    
    //Use calculation result to adjust numbers
    time_1.hour = Math.floor(temp1/60);
    time_1.minute = temp1 % 60;
    time_1.meridian = undefined;
    
    //Return Time
    return time_1;
    
    //Automatic deallocation of all variables
}