module.exports = function Pages() {
    return app.gulp
        .src(app.path.src.pages)
        .pipe(app.gulp.dest(app.path.build.pages))
        .pipe(app.server.stream());
};
