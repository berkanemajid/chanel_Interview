var gulp = require('gulp');
var babel = require('gulp-babel');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var clean = require('gulp-clean');

/*task for add css,views and img in the dist*/
gulp.task('css', () => {
    return gulp.src(["front/css/styles.css"])
        .pipe(gulp.dest('dist/css'))
});

gulp.task('views', () => {
    return gulp.src(["views/*.twig"])
        .pipe(gulp.dest('dist/views'))
});

gulp.task('img', () => {
    return gulp.src(["front/img/*.jpg"])
        .pipe(gulp.dest('dist/img'))
});
/* */
gulp.task('es6', () => {
    return gulp.src(["app.js", "routes/*", 'lib/*', 'middleware/*', 'controllers/*'], {base: "."})
        .pipe(babel({presets: ['es2015']}))
        .pipe(gulp.dest('dist'))
});

var notify = require('gulp-notify');
var clean = require('gulp-clean');

gulp.task('json', () => {
    return gulp.src(['config/*'], {base: "."})
        .pipe(gulp.dest('dist'))
});

gulp.task('clean', function () {
    return gulp.src('dist/', {read: false})
        .pipe(clean());
});


gulp.task('server', function() {
    nodemon({
        script: 'dist/app.js',
        watch: ["app.js", "routes/*", 'lib/*', 'middleware/*', 'config/*'],
        ext: 'js json',
        tasks: ['build']
    }).on('restart', function() {
        gulp.src('app.js').pipe(notify('Server successfully restarted'));
    })
});

/*add css in default tasks */
gulp.task('default', ['build', 'server','css','views','img']);
gulp.task('build', ['es6', 'json']);
gulp.task('heroku', ['clean', 'build']);
