var gulp = require('gulp');
var browser = require('browser-sync');

gulp.task('default', function () {
    browser.init({
        //指定服务器启动根目录
        server: "../vuebase"
    });
    var watcher = gulp.watch('./base/**.html');
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});
