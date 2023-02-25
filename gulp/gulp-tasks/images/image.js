const webp = require("gulp-webp");
module.exports = function images() {
    return app.gulp
        .src(app.path.src.images)
        .pipe(webp())
        .pipe(app.gulp.dest(app.path.build.images));
};
