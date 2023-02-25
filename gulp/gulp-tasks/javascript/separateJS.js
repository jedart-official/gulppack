/*
ИМПОРТЫ ПЛАГИНОВ GULP
=======================================================
*/
const babel = require("gulp-babel");

/*
ОСНОВНАЯ ЗАДАЧА
=======================================================
*/
module.exports = function sepateJavascript() {
    return app.gulp
        .src(app.path.src.separateJS)
        .pipe(babel({ presets: ["@babel/preset-env"] }))
        .pipe(app.gulp.dest(app.path.build.js)) // Итоговая директория
        .pipe(app.server.stream()); // Проверка обновлений
};
