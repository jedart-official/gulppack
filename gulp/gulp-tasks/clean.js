const clean = require("gulp-clean");
const gulpIf = require("gulp-if");
module.exports = function cleanDir() {
    return app.gulp
        .src("dist", { read: false, allowEmpty: true })
        .pipe(gulpIf(app.isBuild, clean())); // Очистка директории при обновлении сервера
};
