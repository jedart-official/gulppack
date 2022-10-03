// Глобальная переменная
global.$ = {

    // Gulp переменные и плагины
    gp: require("gulp-load-plugins")(),
    gulp: require("gulp"),
    browserSync: require("browser-sync").create(),

    // Настройки сборки и путей
    path: require("./config/path.js"),
    app: require("./config/app.js"),
}

// Импорт задач
const clear = require("./tasks/clear.js")
const html = require("./tasks/html.js")
const css = require("./tasks/css.js")
const scss = require("./tasks/scss.js")
const runServer = require("./tasks/server.js")
const js = require("./tasks/javascript.js")
const fonts = require("./tasks/fonts.js")
const img = require("./tasks/img.js")

// Наблюдатель 
const watcher = () => {
    $.gulp.watch([$.path.html.watch, $.path.html.parts], html)
    $.gulp.watch($.path.scss.watch, scss)
    $.gulp.watch($.path.js.watch, js)
    $.gulp.watch($.path.img.watch, img)
    $.gulp.watch($.path.fonts.watch, fonts)
}

// Сборка проекта
const build = $.gulp.series(
    clear, $.gulp.parallel(html, scss, js, img, fonts), 
)

// Разработка проекта
const dev = $.gulp.series(
    build, $.gulp.parallel(watcher, runServer) ,
)   

// Задачи по отдельности
exports.html = html;
exports.scss = scss;
exports.css = css;
exports.js = js;
exports.img = img;
exports.fonts = fonts;

// Основные задачи по отдельности
exports.dev = dev;
exports.build = build;

// Задача по умолчанию
exports.default = $.app.isProd ? build : dev;