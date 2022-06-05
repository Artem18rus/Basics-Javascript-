class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId;
  }

  addClock(idAddClock, time, callback) {
    if (idAddClock === undefined) {
      throw new Error('error text');
    }
    
    if (this.alarmCollection.indexOf(idAddClock) !== -1) {
      console.error('Ошибка');
    }    
    let bell = {
      idAddClock,
      time, 
      callback,
    };
    this.alarmCollection.push(idAddClock, time, callback);
  }

  removeClock(deleteId) {
    let beforeAlarmColl = this.alarmCollection.length;
    let i = this.alarmCollection.indexOf(deleteId);
      if (i !== -1) {
      this.alarmCollection.splice(i, 1);
    }
    let afterAlarmColl = this.alarmCollection.length;
    let res = beforeAlarmColl == afterAlarmColl;
      return res;
 }

  getCurrentFormattedTime() {
    let currentDate = new Date().toLocaleTimeString("ru", {hour: "2-digit", minute: "2-digit"});
      return currentDate;
  }

  start() {
    if (this.timerId == undefined) {
      return;
    }
    setInterval(function() {
      this.alarmCollection.forEach(function(item) {
        if(this.alarmCollection.time == this.getCurrentFormattedTime) {
          return this.alarmCollection.callback;
        }
      };
    } => console.log('tick'), 2000);
  }

  stop() {
    if (this.timerId !== undefined) {
      clearInterval(this.timerId);
      let value = this.alarmCollection.indexOf(this.timerId);
        this.alarmCollection.splice(value, 1);
    }
  }

  printAlarms() {
    
  }

  clearAlarms {
    
  }
}