

const Metawear = require('node-metawear');


Metawear.discoverByAddress('df:3b:60:5e:69:87',function(device) {
    console.log('discovered device ', device.address);

    device.on('disconnect', function() {
        console.log('we got disconnected! :( ');
    });

    device.connectAndSetup(function(error) {
        console.log('were connected!');
        
        var gyro = new device.Gyro(device);

        gyro.config.setRate(1600);
        gyro.config.setRange(125);
        gyro.commitConfig();

        gyro.enable();
        gyro.onChange(function(x, y, z) {
            console.log("x:", x, "\t\ty:", y, "\t\tz:", z);
        });
    });
});
