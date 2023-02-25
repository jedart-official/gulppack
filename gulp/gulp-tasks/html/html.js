const fileinclude = require("gulp-file-include");

module.exports = function html() {
    return app.gulp
        .src(app.path.src.html)
        .pipe(fileinclude()) // Импорт html в один файл
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.server.stream());
};
