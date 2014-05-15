var gulp = require('gulp');


var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var insert = require('gulp-insert');
var watch = require('gulp-watch');

var codePaths = ['BingoBlockParty/BingoBlockParty.Client/bin/Debug/**/*.js',
    'BingoBlockParty/BingoBlockParty.Common/bin/Debug/**/*.js',
    'Client.Interfaces/bin/Debug/**/*.js',
    'Engine.Interfaces/bin/Debug/**/*.js',
    'Client.Web/bin/Debug/**/*.js',
    'Engine.Web/bin/Debug/**/*.js'
];
var libPaths = ['packages/Saltarelle.Runtime.2.3.1/mscorlib.js', 'BingoBlockParty/Libraries/JBox2d/bin/Debug/**/*.js'];

var assetPaths = ['Client.Web/Assets/Content/images/**/*.*'];



gulp.task('client.packageScripts', function () {
    return gulp.src(codePaths)
        .pipe(gulp.dest('output/Client/js'));
});


gulp.task('client.packageAssets', function () {
    return gulp.src(assetPaths)
        .pipe(gulp.dest('output/Client/images'));
});


gulp.task('client.packageLibs', function () {
    return gulp.src(libPaths)
        .pipe(gulp.dest('output/Client/libs'));
});


gulp.task('client.watch', function () {
    gulp.watch(codePaths, ['client.packageScripts']);
    gulp.watch(libPaths, ['client.packageLibs']);

});

gulp.task('client.express', function () {
    console.log(process.cwd());
    var express = require('express');
    var http = require('http');
    var app = express();
    app.set('port', 3000);
    app.use(express.static('output/Client'));



    http.createServer(app).listen(app.get('port'), function () {
        console.log('Express server listening on port ' + app.get('port'));
    });
});
