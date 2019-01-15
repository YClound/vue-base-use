var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer'); //自动添加css前缀
var connect = require('gulp-connect');
var proxy = require('http-proxy-middleware');

// less 转化成 css
gulp.task('less', function () {
    gulp.src('./assets/less/*.less')
    .pipe(less())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./report/assets/styles'))
})

//定义html任务
gulp.task('html', function () {
    gulp.src(['./*.html',
        './base/*.html',
        './javascript/**/*.html',
        './javascript/**/*.js',
        './javascript/*.html',
        './javascript/*.js'])
    .pipe(connect.reload());
});

// 监听文件改变
gulp.task('watch', function () {
    gulp.watch('./less/*.less', ['less']);
    gulp.watch(['./*.html',
        './base/*.html',
        './javascript/**/*.html',
        './javascript/**/*.js',
        './javascript/*.html',
        './javascript/*.js'], ['html']);
})

// 起服务
gulp.task('connect', function () {
    connect.server({
        root: '',
        livereload: true,
        host: '10.1.8.220',
        port: 9000, //服务器端口
        middleware: function (connect, opt) {
            return [
                proxy('/datahub', {
                    target: 'http://test.openapi.shuli.com',
                    changeOrigin:true
                })
            ]
        }
    });
});

gulp.task('live', ['watch', 'less', 'connect'])

