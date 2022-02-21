
const result=require('./fileReader.js')

describe('readFileContent to return data in the form of array', () => {
   
    it('should return error if dir doesnt exist', () =>{
        return result.fileRead('noDir').then(null, (data)=>{
            expect(data).toBe('Cannot read dir files');
        });
    });
    it('should return error if file doesnt exist', () =>{
        return result.fileRead('seed/noFile.txt').then(null, (data)=>{
            expect(data).toBe('Cannot read dir files');
        });
    });
  
    it('should return error if no file passed', () =>{
        return result.fileRead().then(null, (data)=>{
            expect(data).toBe('Cannot read dir files');
        });
    });
});