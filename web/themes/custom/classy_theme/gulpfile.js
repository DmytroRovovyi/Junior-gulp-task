var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', done => {
    gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            browsers: ['IE 9'],
            cascade: false
        }))
        .pipe(gulp.dest('./css'));
    gulp.src('./sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./css'));
    done();
});
