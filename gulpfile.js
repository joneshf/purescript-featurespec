'use strict'

var gulp       = require('gulp')
  , exec       = require('child_process').exec
  , path       = require('path')
  , purescript = require('gulp-purescript')
  , rimraf     = require('gulp-rimraf')
  ;

var paths = {
    src: 'src/**/*.purs',
    bowerSrc: [
      'bower_components/purescript-*/src/**/*.purs',
      'bower_components/purescript-*/src/**/*.purs.hs'
    ],
    npmSrc: [
      'node_modules/purescript-*/src/**/*.purs',
      'node_modules/purescript-*/src/**/*.purs.hs'
    ],
    dest: '',
    docsDest: 'README.md',
    testSrc: 'test/**/*.purs',
    testDest: 'test/output'
};

var options = {
    src: {},
    test: {
        output: 'test.js',
        main: 'Test.Test.FeatureSpec'
    }
};

var allSrc = [paths.src].concat(
  paths.bowerSrc,
  paths.npmSrc
);

var compile = function(compiler) {
    var psc = compiler(options.src);
    psc.on('error', function(e) {
        console.error(e.message);
        psc.end();
    });
    return gulp.src(allSrc)
        .pipe(psc)
        .pipe(gulp.dest(paths.dest));
};

gulp.task('make', function() {
    return compile(purescript.pscMake);
});

gulp.task('browser', function() {
    return compile(purescript.psc);
});

gulp.task('docs', function() {
    return gulp.src(paths.src)
        .pipe(purescript.docgen())
        .pipe(gulp.dest(paths.docsDest));
});

gulp.task('watch-browser', function() {
    gulp.watch(paths.src, ['browser', 'docs']);
});

gulp.task('watch-make', function() {
    gulp.watch(paths.src, ['make', 'docs']);
});

gulp.task('watch-test', function() {
    gulp.watch([paths.src, paths.testSrc], ['test']);
});

gulp.task('clean-test', function() {
    return gulp.src(paths.testDest)
        .pipe(rimraf());
});

gulp.task('compile-test', ['clean-test'], function() {
    return gulp.src([paths.testSrc].concat(allSrc))
        .pipe(purescript.psc(options.test))
        .pipe(gulp.dest(paths.testDest));
});

gulp.task('run-tests', ['compile-test'], function() {
    require(path.resolve(path.join(paths.testDest, options.test.output)));
});

gulp.task('test', ['compile-test', 'run-tests']);
gulp.task('default', ['make', 'docs']);
