var gulp = require('gulp');
var include = require('gulp-include');
var del = require('del');
var replace = require('gulp-replace');
var debug = require('gulp-debug');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

var ENV = process.env.NODE_ENV;

function build() {
    
    gulp.src(['src/templates/*.html'])
        .pipe(include())
        .pipe(replace(/public\/([a-z1-9\-\_]*)\.html/gi, '$1.html'))
        .pipe(gulp.dest('public'));
        
}

// delete build folder
gulp.task('del', function() {
    del('public/*.html');
});

gulp.task('styles', function() {
    gulp.src('src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public'))
        .pipe(browserSync.stream());
});

gulp.task('build', build);

gulp.task('serve', function() {
    browserSync.init({
        server: './public'
    });
    
    gulp.watch(['src/**/*.js', 'src/**/*.html', 'src/**/*.scss'], ['del', 'styles', 'build']);
    gulp.watch(['src/**/*.js', 'src/**/*.html']).on('change', browserSync.reload);
})

//NODE_ENV=development
gulp.task('development', ['serve']);

//NODE_ENV=production
gulp.task('production', ['del', 'styles', 'build']);

gulp.task('default', 
    [ENV === 'production' ? 'production' : 'development']
);