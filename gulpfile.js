/**
 * Import required libraries from `/node_modules/`.
 */
const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();

/**
 * Define the `styles` function.
 */
const styles = () => {
  return src("scss/*.scss")
         // convert
         .pipe(sass())
         // add vendor prefixes to support older browsers (see `.browserlistsrc` for details)
         .pipe(autoprefixer())
         // minify
         .pipe(cleanCSS({
           format: {
             breakWith: "lf"
           }
         }))
         // rename
         .pipe(rename({
           extname: ".min.css"
         }))
         .pipe(dest("css/"));
};

/**
 * Export the `default` function.
 */
exports.default = () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  // reload the live preview
  watch("scss/*.scss", styles).on("change", () => {
    browserSync.reload();
  });

  // reload the live preview
  watch("index.html").on("change", () => {
    browserSync.reload();
  });
};
