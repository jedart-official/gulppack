// Обработка scss 
const sass = require("gulp-sass")(require("sass"))

const scss = () => {
    return $.gulp.src($.path.scss.src, {sourcemaps: $.app.isDev})
        .pipe($.gp.plumber({errorHandler: $.gp.notify.onError()}))
        .pipe($.gp.sassGlob())
        .pipe(sass())
        .pipe($.gp.webpCss())
        .pipe($.gp.autoprefixer())
        .pipe($.gp.shorthand())
        .pipe($.gp.groupCssMediaQueries())
        .pipe($.gp.size({ title: "До сждатия"}))
        .pipe($.gulp.dest($.path.scss.dest, {sourcemaps: $.app.isDev}))
        .pipe($.gp.rename({suffix: ".min"}))
        .pipe($.gp.csso())
        .pipe($.gp.size({ title: "После сжатия"})) 
        .pipe($.gulp.dest($.path.scss.dest, {sourcemaps: $.app.isDev}))
        .pipe($.browserSync.stream());
}
module.exports = scss;