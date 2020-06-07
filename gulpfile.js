var gulp = require('gulp');
var html = require('gulp-htmlmin');
var sass = require('gulp-sass');

// sass
gulp.task('sass', function() {
    return gulp.src('./src/scss/style.scss')
        .pipe(sass({outputStyle: "compressed"}))
        .pipe(gulp.dest('./dist/css/'));
});

// task html
gulp.task('html', function(){
    return gulp.src('./src/index.html')
        .pipe(html({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('default',['html'], function(){
    gulp.watch('./src/index.html', ['html']);
});