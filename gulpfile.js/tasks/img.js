// Сжатие изображений, перевод в webp
const img = () => {
    return $.gulp.src($.path.img.src)
        .pipe($.gp.plumber({errorHandler: $.gp.notify.onError ()}))
        .pipe($.gp.newer($.path.img.dest))
        .pipe($.gp.webp())
        .pipe($.gulp.dest($.path.img.dest)) 
        .pipe($.gulp.src($.path.img.src))
        .pipe($.gp.newer($.path.img.dest))
        .pipe($.gp.imagemin({verbose: true}))
        .pipe($.gulp.dest($.path.img.dest))
        .pipe($.browserSync.stream());
}
module.exports = img;