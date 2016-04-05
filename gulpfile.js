var gulp = require('gulp');
var include = require('gulp-include');
var del = require('del');
var replace = require('gulp-replace');
var debug = require('gulp-debug');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var ENV = process.env.NODE_ENV;

// delete build folder
gulp.task('del', function() {
    del('index.html, main.css, main.bundle.js');
});

// build public/main.css
gulp.task('styles', function() {
    gulp.src('src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('.'))
        .pipe(browserSync.stream());
});

// build src/**/*.html into public/*.html
gulp.task('build', function() {
    gulp.src(['src/templates/*.html'])
        .pipe(include())
        //.pipe(replace(/public\/([a-z1-9\-\_]*)\.html/gi, '$1.html'))
        .pipe(gulp.dest('.'));
        
    gulp.src(['src/js/*.js'])
        .pipe(concat('main.bundle.js'))
        .pipe(gulp.dest('.'));
});

gulp.task('serve', function() {
    
    browserSync.init({
        server: {
            baseDir: './',
        },
        notify: false,
        reloadOnRestart: true,
        open: false,
        ui: false
    });
    
    gulp.watch(['src/**/*.scss'], ['styles']);
    gulp.watch(['src/**/*.html', 'src/js/*.js'], ['build']);
    
    // fire reload when public files change
    gulp.watch([
        '*.html', 
        '*.css',
        'src/img/*.svg'
    ]).on('change', browserSync.reload);
});

//NODE_ENV=development
gulp.task('development', ['serve']);

//NODE_ENV=production
gulp.task('production', ['del', 'styles', 'build']);

gulp.task('default', 
    [ENV === 'production' ? 'production' : 'development']
);