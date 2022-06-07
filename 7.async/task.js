class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(id, time, callback) {
    if (!id) {
      throw new Error('id не передан');
    }

    let validId = this.alarmCollection.some((item) => id == this.alarmCollection[0].id);
    if (validId == true) {
      console.error('Звонок с данным id уже существует');
      return;
    }
      let bell = {id, time, callback};
    this.alarmCollection.push(bell);
  }

  removeClock(delId) {
    let beforeAlarmColl = this.alarmCollection.length;
    let validDel = this.alarmCollection.findIndex((item, idx) => delId == this.alarmCollection[0].id);    
      if (validDel !== -1) {
      this.alarmCollection.splice(validDel, 1);
    }
    let afterAlarmColl = this.alarmCollection.length;
      return beforeAlarmColl !== afterAlarmColl;
  }

  getCurrentFormattedTime() {
    let currentDate = new Date().toLocaleTimeString("ru", {hour: "2-digit", minute: "2-digit"});
      return currentDate;
  }
  
  start(){
    if (this.timerId != null){
      return;
    }
    let interval = setInterval( () => {
        this.alarmCollection.forEach((el) => checkClock(el));
      }, 3000);
      this.timerId = interval;

    const checkClock = (el) => {
      if (this.getCurrentFormattedTime() === el.time) {
        return el.callback();
      }
    };
  }

  stop() {
    if(this.timerId == null) {
      return;
    }
    clearInterval(this.timerId);
    this.timerId == null;
  }

  printAlarms() {
    this.alarmCollection.forEach((item) => console.log(`id: ${item.id}, time: ${item.time}`));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}