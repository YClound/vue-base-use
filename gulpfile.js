var gulp = require('gulp');

gulp.task('default', function () {
    var watcher = gulp.watch('./base/**.html');
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});
