/*
The HTML AudioElement Interface can be used to play audio in the browser 
Create an alarm clock which displays time and plays sound as a user specified time
*/

class AlarmClock {
  constructor() {
    this.alarmTime = null;
    this.audio = new Audio('alarm-sound.mp3'); // Replace with your audio file path
  }

  setAlarm(hours, minutes) {
    const now = new Date();
    this.alarmTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0);
    if (this.alarmTime < now) {
      this.alarmTime.setDate(this.alarmTime.getDate() + 1); // Set for next day if time is in the past
    }
    console.log(`Alarm set for ${this.alarmTime.toLocaleTimeString()}`);
  }

  start() {
    this.checkAlarm();
  }

  checkAlarm() {
    const now = new Date();
    if (this.alarmTime && now >= this.alarmTime) {
      console.log("Alarm ringing!");
      this.audio.play();
      this.alarmTime = null; // Reset alarm after ringing
    }
    setTimeout(() => this.checkAlarm(), 1000); // Check every second
  }
}

// Example usage:
const myAlarm = new AlarmClock();
myAlarm.setAlarm(20, 51); // Set alarm for 8:51 PM
myAlarm.start(); // Start checking for the alarm    