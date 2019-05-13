/**
 *
 */
const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();

/**
 *
 */
const styles = () => {
  return src("scss/*.scss")
         .pipe(sass())
         .pipe(autoprefixer({

         }))

         .pipe(rename({
           extname: ".min.js"
         }))
         .pipe(dest("css/"));
};

/**
 *
 */
exports.default = () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  watch("scss/*.scss", styles, browserSync.reload());
};
