var gulp = require('gulp');
var include = require('gulp-include');
var del = require('del');
var replace = require('gulp-replace');
var debug = require('gulp-debug');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

var ENV = process.env.NODE_ENV;

gulp.task('index', function() {
    gulp.src('src/templates/index.html')
        .pipe(include())
        .pipe(gulp.dest('.'));
})

function build() {
    console.log('building');
    gulp.src(['!src/templates/index.html', 'src/templates/*.html'])
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
});

gulp.task('build', build);

gulp.task('watch', function() {
    gulp.watch(['src/**/*.js', 'src/**/*.html', 'src/**/*.scss'], ['del', 'styles', 'index', 'build'])
})

//NODE_ENV=development
gulp.task('development', ['watch']);

//NODE_ENV=production
gulp.task('production', ['del', 'styles', 'build']);

gulp.task('default', 
    [ENV === 'production' ? 'production' : 'development']
);