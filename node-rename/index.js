const fs = require('fs');
const path = require('path');

var dir = path.join(__dirname, '2018/10/29/361');

function newFileName(filename, ext) {
    var name = filename.split('.')[0];
    return name + '_ths.' + ext;
}

fs.readdir(dir, function(err, files){

    if(err) {
        throw err;
    }

    console.log(files);

    files.forEach(function(file, index){

        try {
            fs.renameSync(path.join(dir, file), path.join(dir, newFileName(file, path.extname(file).slice(1))))
        } catch(e) {
            throw new Error(`Error: ${e.message}`);
        }

    })

})