var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var ENV = process.env.NODE_ENV;

// build public/main.css
gulp.task('styles', function() {
    gulp.src('app/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('public'));
});

//NODE_ENV=development
gulp.task('development', ['styles']);

//NODE_ENV=production
gulp.task('production', ['styles']);

gulp.task('default', 
    [ENV === 'production' ? 'production' : 'development']
);