module.exports = function svg() {
    return app.gulp
        .src(app.path.src.svg)
        .pipe(app.gulp.dest(app.path.build.images));
};
