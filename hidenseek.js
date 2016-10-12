const fs = require('fs');
const random = require('./random').random;
const randomArr = require('./random').randomArr;
const compareNumeric = require('./compareNum');

function hide(path, pocemoneSource, callback) {
    const pocemoneList = require('./' + pocemoneSource);
    maxPocemones = pocemoneList.length < 4 ? pocemoneList.length : 3;
    var pocemonesAmount = random(1, maxPocemones);
    var pocemonesNums = [];
    var foldersNums = [];
    var hiddenList = [];
    var recordDone = 0;
    var data;
    // console.log(pocemoneList);
    console.log(randomArr(1, 9, pocemonesAmount, foldersNums));

    const writeFile = (filename, data) => {
        fs.writeFile(filename, data, (err) => {
            if (err) throw err;
        });
    }

    foldersNums = foldersNums.sort(compareNumeric);
    randomArr(0, pocemoneList.length - 1, pocemonesAmount, pocemonesNums);

    fs.exists(path, function (value) {
        if (!value) {
            fs.mkdir(path, function () {
                for (let i = 1; i < 11; i++) {
                    let name = ('0' + i).slice(-2);
                    fs.mkdir(path + '/' + name, () => {
                        if (i == foldersNums[recordDone] && recordDone < pocemonesAmount + 1) {
                            data = pocemoneList[pocemonesNums[recordDone]];
                            hiddenList.push(data);
                            callback(null,hiddenList);
                            recordDone++;
                            writeFile(path + '/' + name + '/' + 'pocemon.txt', data.name + '|' + data.level);
                        }
                    });
                }
            })
        }
    });


}
function seek(path, callback) {
    const pocemoneList = [];
    fs.exists(path, function (value) {
        if (value) {
            for (let i = 1; i < 11; i++) {
                let name = ('0' + i).slice(-2);
                fs.exists(path + '/' + name + '/' + 'pocemon.txt', (value) => {
                    if (value) {
                        fs.readFile(path + '/' + name + '/' + 'pocemon.txt', 'utf8', (err, data) => {
                            if (err) throw err;
                            pocemoneList.push({
                                name: data.slice(0, data.indexOf('|')),
                                level: data.slice(data.indexOf('|') + 1)
                            });
                            callback(null, pocemoneList);
                        });
                    }
                });

            }

        }
    });

}
module.exports = {
    hide,
    seek
}
/**
 * Created by HP on 10/9/2016.
 */
