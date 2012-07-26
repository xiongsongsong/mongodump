/**
 * Created with JetBrains WebStorm.
 * User: 松松
 * Date: 12-7-26
 * Time: 下午8:08
 * To change this template use File | Settings | File Templates.
 */

var exec = require('child_process').exec;

function mongodump() {
    console.log(Date.now('mongodump start!'))
    exec('mongodump -d fed -o ~/Ubuntu\\ One/Database/' + Date.now(),function(err,stdout){
        if(err) {
            console.log(err);
        }else{
            console.log('Success!\t'+Date.now()+'\n'+stdout);
        }
    });
    setTimeout(mongodump, 86400000);
}

mongodump();

