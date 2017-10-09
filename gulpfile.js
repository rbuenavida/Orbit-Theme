var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var path = require('path');

var srcBaseFolder = path.join(__dirname, 'assets', 'less');
var srcDestFolder = path.join(__dirname, 'assets', 'css')
var srcFolders = ['default', 'theme-2', 'theme-3', 'theme-4', 'theme-5', 'theme-6']

gulp.task('less', function () {
  srcFolders.map( function(srcFolder) {
      var destFile = srcFolder.replace(/default|theme/i, 'styles');
      gulp.src( path.join(srcBaseFolder, srcFolder, 'styles.less') )
        .pipe(less())
        .pipe(concat(destFile + '.css'))
        .pipe( gulp.dest( srcDestFolder ) );
  })
});