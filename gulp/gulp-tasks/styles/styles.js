const sass = require("gulp-sass")(require("sass"));
const autoPrefixer = require("gulp-autoprefixer");
const minify = require("gulp-css-minify");
const gulpIf = require("gulp-if");

module.exports = function style() {
    return app.gulp
        .src(app.path.src.scss, { sourcemaps: true })
        .pipe(sass().on("error", sass.logError))
        .pipe(autoPrefixer())
        .pipe(gulpIf(app.isBuild, minify()))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.server.stream());
};
