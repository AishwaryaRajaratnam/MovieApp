var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify',function(){
    browserify('src/js/main.js')
        .transform('reactify')
        .bundle()
        .pipe(source('main.js'))//source
        .pipe(gulp.dest('dist/js'))//put it to destination
});

gulp.task('copy',function(){//copying similar structure in dist
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
    gulp.src('src/css/*.*')
        .pipe(gulp.dest('dist/css'));
    gulp.src('src/js/vendors/*.*')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default',['browserify','copy'],function(){//when gulp starts running
    return gulp.watch('src/**/*.*',['browserify','copy']);
});
