/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 
function createEmployeeRecord(name){
  console.log(name)
  let newObj = {
    firstName : name[0],
    familyName : name[1],
    title : name[2],
    payPerHour : name[3],
    timeInEvents : [],
    timeOutEvents : []
  }
  return newObj
}

const createEmployeeRecords = (arr) => {
    let employeeRecordArray = [];
    for(let i = 0; i < arr.length; i++){
      employeeRecordArray.push(createEmployeeRecord(arr[i]));
    }
    return employeeRecordArray;
};

const createTimeInEvent = (date) => {
    this.timeInEvents.push({
      type: 'TimeIn',
      hour: parseInt(date.split(' ')[1]),
      date: date.split(' ')[0],
});  
    return this;
};

const createTimeOutEvent = (ate) => {
    this.timeOutEvents.push({
      type: 'TimeOut',
      hour: parseInt(date.split(' ')[1]),
      date: date.split(' ')[0],
});  
    return this;
};

const hoursWorkedOnDate = (ate) => {
    let timeIn = this.timeInEvents.find(time => time.date === date);              
    let timeOut = this.timeOutEvents.find(time => time.date === date);             
      return (timeOut.hour - timeIn.hour) / 100;                                              
};

const wagesEarnedOnDate = (employee, date) => {
    return parseInt(hoursWorkedOnDate(employee, date)) * parseInt(employee.payPerHour);
};

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}