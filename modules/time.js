var OSinfo = require('../modules/OSinfo');
process.stdin.setEncoding('utf-8');

function time (uptime) {
    var hour = Math.floor(uptime / 3600);
    var minute = Math.floor(uptime % 3600 / 60);
    var second = (uptime % 60).toFixed(0);
    return hour + "h " + minute + "min " + second + "s ";
}

exports.print = time;

//jakiś błąd z gitem
