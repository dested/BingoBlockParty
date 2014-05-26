

var gulp = require('gulp');
var gutil = require('gulp-util');
require('./client');
require('./server');
var runSequence = require('run-sequence');


gulp.task('default', function (callback) {

    runSequence(
        [
            'client', 
            'server' 
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

gulp.task('server', function (callback) {
    process.chdir('../');

    runSequence(
        [
            'server.packageScripts',
            'server.packageLibs'
        ],
        'server.watch',
        callback);
});