const fs=require('fs');

// need filenames - readDir
const promisifyReadDir=(dirPath)=> {
    return new Promise ((resolve, reject) => {

        fs.readdir(dirPath, 'utf-8', (error, data)=>{
            if(error)
            {
                reject(error);
            }
            resolve(data);
        })
    })

}


// read the files - readFile
const promisifyReadFile=(filePath, character)=> {
    return new Promise ((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (error,data)=>{
        
           if(error)
        {
            reject(error);
        }
        resolve(data.toString().split('\r\n').filter(c=>c.toLowerCase().startsWith(character.toLowerCase())));
    })
})
}

module.exports={
    promisifyReadFile, 
    promisifyReadDir
}