class Time {
    
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
    }
    
    get getDiff() {
        
        if (this.hour < 10) {
            this.hour = "0" + this.hour;
        }
        if (this.minute < 10) {
            this.minute = "0" + this.minute;
        }
        
        return this.hour + ':' + this.minute;
    }
    
};


function calculate() {
    
    //Exception: Is empty
    
    var temp1;
    var temp2;
    
    debugger;
    
    //Store into data structure
    time_1 = new Time(document.getElementById("time-1").value);
    time_2 = new Time(document.getElementById("time-2").value);
    
    //Hour adjustment - do this later, check functionality first
    
    //Convert to minutes
    temp1 = (time_1.hour * 60) + time_1.minute;
    temp2 = (time_2.hour * 60) + time_2.minute;
    
    //Calculation
    temp1 = temp2 - temp1;
    
    //Use calculation result to adjust numbers
    time_1.hour = Math.floor(temp1/60);
    time_1.minute = temp1 % 60;
    time_1.meridian = undefined;
    
    //Automatic deallocation of all variables
}


function test() {
    calculate();
    window.alert("Difference between two times is " + time_1.getDiff);
}