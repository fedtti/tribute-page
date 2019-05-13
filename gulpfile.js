/**
 *
 */
const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
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
         .pipe(cleanCSS({
           format: {
             breakWith: "lf"
           }
         }))
         .pipe(rename({
           extname: ".min.css"
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

  //
  watch("scss/*.scss", styles).on("change", () => {
    browserSync.reload();
  });

  //
  watch("index.html").on("change", () => {
    browserSync.reload();
  });
};
