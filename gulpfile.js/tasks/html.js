// Обработка html, минификация
const html = () => {
    return $.gulp.src($.path.html.src)
        .pipe($.gp.plumber({errorHandler: $.gp.notify.onError()}))
        .pipe($.gp.fileInclude())
        .pipe($.gp.webpHtml($.app.webpack.mode))
        .pipe($.gp.size({title: "До сждатия"}))
        .pipe($.gp.htmlmin($.app.htmlMin.collapseWhitespace))
        .pipe($.gp.size({title: "После сжатия"})) 
        .pipe($.gulp.dest($.path.html.dest))
        .pipe($.browserSync.stream());
}
module.exports = html;