/*
ИМПОРТЫ ПЛАГИНОВ GULP
=======================================================
*/
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const gulpIf = require("gulp-if");

/*
ОСНОВНАЯ ЗАДАЧА
=======================================================
*/
module.exports = function javascript() {
    return app.gulp
        .src(app.path.src.js, { sourcemaps: true }) // Использование souse карт
        .pipe(babel({ presets: ["@babel/preset-env"] }))
        .pipe(concat("index.js")) // Обьединение в файлов в один
        .pipe(gulpIf(app.isBuild, uglify()))
        .pipe(app.gulp.dest(app.path.build.js)) // Итоговая директория
        .pipe(app.server.stream()); // Проверка обновлений
};
