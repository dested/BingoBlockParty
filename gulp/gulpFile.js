

var gulp = require('gulp');
var gutil = require('gulp-util');
require('./client');
var runSequence = require('run-sequence');


gulp.task('default', function (callback) {

    runSequence(
        [
            'client' 
        ],
        callback);
});

gulp.task('client', function (callback) {
    process.chdir('../');

    runSequence(
        [
            'client.packageAssets',
            'client.packageScripts',
            'client.packageLibs'
        ],
        'client.watch',
        'client.express',
        callback);
}); 