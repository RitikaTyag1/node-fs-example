const fs=require('fs');
const {promisifyReadDir, promisifyReadFile} = require('./utils/index')


const readAllFiles= async (dirPath)=>{
    const txtFileNames= await promisifyReadDir(dirPath);
    console.log(txtFileNames);

    const fileNames=txtFileNames.map((fileName)=>require('path').basename(fileName,'.txt'));
    //path.parse(fileName).name ?
    console.log(fileNames);
    // Not awaiting the promises yet. Storing the promises of all files. 
    const allFilesPromises= txtFileNames.map((fileName)=> promisifyReadFile(`${dirPath}/${fileName}`, 'c'));

    // Awaiting all promises at once and storing their resolve values. 
    const allFilesData=await Promise.all(allFilesPromises);

    console.log(allFilesData);

    const result =allFilesData.reduce((acc, fileContent, index) => {
        return {
            ...acc, 
            [fileNames[index]]: fileContent
        }
    },{})

    console.log(result);


}

readAllFiles('../seed');