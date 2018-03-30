const cp = require('child_process');
var filename = 'image_encoding.py';
cp.exec('python'+' '+filename,function(err,stdout,stderr){
    if(err)
    {
        console.log('stderr',err);
    }
    if(stdout)
    {
        console.log('stdout',stdout);
    }
});
