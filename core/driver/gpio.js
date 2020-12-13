var rpio = require('rpio');

const options = {
    gpiomem: true,
    mapping: 'physical',
    mock: undefined,
    close_on_exit: true,
};
rpio.init(options);

const giopList = [
    {
        pinNo: 29
    },
    {
        pinNo: 31
    },
    {
        pinNo: 33
    },
    {
        pinNo: 35
    },
    {
        pinNo: 37
    }
];

giopList.forEach(i => {
    console.log("init--" + i.pinNo + "--LOW");
    rpio.open(i.pinNo, rpio.OUTPUT, rpio.LOW);
});


rpio.open(36, rpio.INPUT, rpio.LOW);


process.on('exit', function () {
    rpio.exit();
});

module.exports = {
    outPutHigh: (pin) => {
        console.log("out_put--" + pin + "--HIGH");
        rpio.write(pin, rpio.HIGH);
    },
    outPutLow: (pin) => {
        console.log("out_put--" + pin + "--LOW");
        rpio.write(pin, rpio.LOW);
    },
    openValve: () => {
        console.log("no valve");
    },
    closeValve: () => {
        console.log("no valve");
    }

}
