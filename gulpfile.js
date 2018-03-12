var gulp = require('gulp');
var mocha = require('gulp-mocha');
var fs = require('fs');
var istanbul = require('gulp-istanbul');

gulp.task('test', ['pre-test'] ,function () {
    gulp.src('tests/**/*.js')
        .pipe(mocha({
          reporter: 'mocha-junit-reporter',
          reporterOptions: {
            mochaFile: './TEST-RESULTS.xml'
          }
        })).pipe(istanbul.writeReports())
    // Enforce a coverage of at least 90%
    // .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));;
});

gulp.task('pre-test', function () {
  return gulp.src(['src/**/*.js'])
    // Covering files
    .pipe(istanbul())
    // Force `require` to return covered files
    .pipe(istanbul.hookRequire());
});