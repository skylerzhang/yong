#!/usr/bin/env node

var command = require('commander');
var request = require('request');
var chalk = require('chalk');

command
    .version('0.0.1')
    .usage('<keywords>')
    .option('-b, --browser [broswer]', 'Filter by the browser')
    .parse(process.argv);

if(!command.args.length) {
    command.help();
} else {
    var keywords = command.args;
    var url = 'http://caniuse.jd-app.com/caniuse?keyword='+keywords;
    if(command.browser) {
        url = url + '&browser=' + command.browser;
    }
}

request({
    method:'GET',
    headers:{
        'User-Agent':''
    },
    url: url
},function(err, res, body){
    if(!err && res.statusCode == 200){
        var json = JSON.parse(body);
        if(json['err'] !== undefined){
            console.log(chalk.red.bold('无此属性'));
            process.exit(0);
        }
        for(var css in json){
            console.log(chalk.red('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<'));
            console.log(chalk.red.bold(json[css].title+'  (种类:'+json[css].categories+')'));

            var bro = json[css].stats;
            for(var browser in bro){
                console.log(chalk.gray('~')+chalk.blue(browser));

                var ver = json[css]['stats'][browser];

                for(var version in ver){
                    if(ver[version] == 'y'){
                        process.stdout.write(chalk.green(' '+version+':'+ver[version]+' ')+' ');
                    } else if (ver[version] == 'n'){
                        process.stdout.write(chalk.red(' '+version+':'+ver[version]+' ')+' ');
                    } else {
                        process.stdout.write(chalk.yellow(' '+version+':'+ver[version]+' ')+' ');
                    }
                }
                console.log(' ');
            }
            console.log(chalk.red('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'));
            console.log(' ');
        }
        process.exit(0);
    } else if (err){
        console.log(chalk.red('Error: ' + err));
        process.exit(1);
    }
});
