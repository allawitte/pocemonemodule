'use strict';
const hide = require('./hidenseek').hide;
const seek = require('./hidenseek').seek;
let argv = process.argv.length;
var path, list;
if( argv == 2) {
    console.log('commnads:');
    console.log('    hide ./field pocemonesData.json');
    console.log('    seek ./field');
}
if (argv > 2) {
    if(process.argv[2] == 'hide') {
        console.log("hide");
        path = process.argv[3];
        list = process.argv[4];
        hide(path, list,  (error, data) => {
            if(error) throw error;
            console.log('hide:',data);
        });
    }
    if(process.argv[2] == 'seek') {
        path = process.argv[3];
        seek(path, (error, data) => {
            if(error) throw error;
            console.log('seek:', data);
        });
    }
}