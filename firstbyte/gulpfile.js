/** @format */

import pkg from "gulp";
import gulpSass from "gulp-sass";
import * as sassCompiler from "sass";
import autoprefixer from "gulp-autoprefixer";
import cssMinify from "gulp-clean-css";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from "gulp-imagemin";

const sass = gulpSass(sassCompiler);
const { src, dest, series, watch } = pkg;

const styles = () => {
  return src("./src/styles/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(cssMinify())
    .pipe(dest("./src/styles/css/"))
    .pipe(dest("./dist/css"));
};

const tsxScripts = () => {
  return src("./src/**/*.tsx")
    .pipe(
      babel({
        presets: [
          "@babel/preset-env",
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
      })
    )
    .pipe(uglify())
    .pipe(dest("./dist/ts/"));
};

const tsScripts = () => {
  return src("./src/**/*.ts")
    .pipe(
      babel({
        presets: ["@babel/preset-env", "@babel/preset-typescript"],
      })
    )
    .pipe(uglify())
    .pipe(dest("./dist/ts/"));
};

const imageMinifier = () => {
  return src("public/images/*")
    .pipe(imagemin())
    .pipe(
      imagemin([
        gifsicle({ interlaced: true }),
        mozjpeg({ quality: 75, progressive: true }),
        optipng({ optimizationLevel: 5 }),
        svgo({
          plugins: [
            {
              name: "removeViewBox",
              active: true,
            },
            {
              name: "cleanupIDs",
              active: false,
            },
          ],
        }),
      ])
    )
    .pipe(dest("public/images_minified/"));
};

const watchTask = () => {
  watch("./src/styles/**/*.scss", styles);
  watch("./src/**/*.tsx", tsxScripts);
  watch("./src/**/*.ts", tsScripts);
  watch("public/images/*", imageMinifier);
};

export default series(styles, tsxScripts, tsScripts, watchTask);
