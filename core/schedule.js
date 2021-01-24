const schedule = require('node-schedule');
var moment = require('moment');
const gpio = require('./driver/gpio');

const bigValve = 37;
const smallValve = 35;

var job = schedule.scheduleJob("0/10 * * * * *", function(){
    var hour = moment().hour();
    var minute = moment().minute();
    var dayOfWeek = moment().weekday();
    if (dayOfWeek == 0 && hour == 8 && minute == 0){
        gpio.outPutHigh(bigValve);
        gpio.outPutHigh(smallValve);
        console.log('open valve :'+moment().format());
    }
    if (dayOfWeek == 0 && hour == 8 && minute == 30){
        gpio.outPutLow(bigValve);
        gpio.outPutLow(smallValve);
        console.log('close valve :'+moment().format());
    }
    if (dayOfWeek == 0 && hour == 14 && minute == 50){
        console.log('test :'+moment().format());
    }
 });



module.exports = {
    init: () => {
        console.log('===init job===');
    }
}