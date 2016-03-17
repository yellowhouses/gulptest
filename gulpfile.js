var gulp = require('gulp');
var concat = require('gulp-concat');
var includer = require('gulp-content-includer');
var rename = require("gulp-rename");

gulp.task("html",function() {
    gulp.src("./src/html/*.html")
        .pipe(includer({
             includerReg:/<!\-\-include\s+"([^"]+)"\-\->/g
        }))
        .pipe(concat("test.html"))
        .pipe(gulp.dest('./src'));
})