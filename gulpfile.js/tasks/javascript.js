// Обработка javascript 
const webpack = require("webpack-stream")

const js = () => {
    return $.gulp.src($.path.js.src, {sourcemaps: $.app.isDev})
        .pipe($.gp.plumber({errorHandler: $.gp.notify.onError()}))
        .pipe($.gp.babel())
        .pipe(webpack({
            mode: "development"
        }))
        .pipe($.gulp.dest($.path.js.dest, {sourcemaps: $.app.isDev}))
        .pipe($.browserSync.stream());
}
module.exports = js;