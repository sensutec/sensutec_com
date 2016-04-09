var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

var ENV = process.env.NODE_ENV;

// build public/main.css
gulp.task('styles', function() {
    console.log('Reloading styles...');
    
    gulp.src('app/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('public'))
        .pipe(browserSync.stream());
});

// watch for scss changes
gulp.task('serve', ['styles'], function() {
    
    browserSync.init({
        port: 3000,
        server: '.',
        open: false,
        reloadOnRestart: true,
        notify: false
    });
    
    gulp.watch('app/scss/*.scss', ['styles']);
    gulp.watch('app/**/*.js').on('change', browserSync.reload);
    
});

//NODE_ENV=development
gulp.task('development', ['serve']);

//NODE_ENV=production
gulp.task('production', ['styles']);

gulp.task('default', 
    [ENV === 'prod' ? 'production' : 'development']
);