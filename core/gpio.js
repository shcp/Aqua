var rpio = require('rpio');

const options = {
    gpiomem: true,
    mapping: 'physical',
    mock: undefined,
    close_on_exit: true,
};
const valveNumber = 4;
const waterLevel = 5;
rpio.init(options);
rpio.open(valveNumber, rpio.OUTPUT, rpio.LOW);
rpio.open(waterLevel, rpio.INPUT, rpio.LOW);

function read(pin) {
    return rpio.read(pin);
}
rpio.poll(waterLevel, read);

process.on('exit', function () {
    rpio.exit();
});

module.exports = {
    openValve: () => {
        rpio.write(valveNumber, rpio.HIGH);
    },
    closeValve: () => {
        rpio.write(valveNumber, rpio.LOW);
    }

}
