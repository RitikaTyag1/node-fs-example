
const fs = require('fs');



const fileRead = (dirName='') => {
    return new Promise((resolve, reject) => {
        fs.readdir(dirName, (error, files) => {
            if (error)
               return reject('Cannot read dir files');
               resolve('Read file names correctly');
               files.forEach((file)=>{
                fs.readFile(file, (error, data) => {
                    if(error)
                        return reject('Cannot read file');
                    const fileObj={};
                    const fileArray=data.toString().split('\r\n');
                    const fileName=file.toString();
                    fileObj[fileName]=fileArray;
                    console.log(fileObj);
                });   

               })
              
            
        });
    });
};

fileRead('seed');

module.exports = {fileRead};