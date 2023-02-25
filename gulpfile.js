/*
ИМПОРТЫ ПЛАГИНОВ GULP
=======================================================
*/
const gulp = require("gulp");
const browserSync = require("browser-sync");
const yargs = require("yargs");
/*
КОНФИГ 
=======================================================
*/
const path = require("./gulp/config.js");
/*
ИМПОРТЫ ЗАДАЧ GULP
=======================================================
*/

const javascript = require("./gulp/gulp-tasks/javascript/js.js");
const sepateJavascript = require("./gulp/gulp-tasks/javascript/separateJS.js");
const scss = require("./gulp/gulp-tasks/styles/styles.js");
const html = require("./gulp/gulp-tasks/html/html.js");
const pages = require("./gulp/gulp-tasks/html/pagesHtml.js");
const images = require("./gulp/gulp-tasks/images/image.js");
const svg = require("./gulp/gulp-tasks/images/svg.js");
const fonts = require("./gulp/gulp-tasks/fonts.js");
const cleanDir = require("./gulp/gulp-tasks/clean.js");
const server = browserSync.create();

/*
ОСНОВНЫЕ ЗАДАЧИ GULP
=======================================================
*/
const serve = () => {
    server.init({
        server: {
            baseDir: "dist",
        },
    });
};

/*
ГЛОБАЛЬНЫЕ НАСТРОЙКИ GULP
=======================================================
*/
global.app = {
    isDev: !process.argv.includes("--build"),
    isBuild: process.argv.includes("--build"),
    gulp,
    server,
    yargs,
    path,
};

/*
РАСПРЕДЕЛЕНИЕ ЗАДАЧ
=======================================================
*/
const mainTasks = gulp.series(
    gulp.parallel(
        cleanDir,
        scss,
        javascript,
        sepateJavascript,
        html,
        pages,
        images,
        svg,
        fonts
    )
);
const watcher = () => {
    gulp.watch(path.src.fonts, fonts);
    gulp.watch(path.src.images, images, svg);
    gulp.watch(path.src.scss, scss);
    gulp.watch(["./src/*.html", "./src/**/*.html"], html, pages);
    gulp.watch("./src/js/**/*.js", javascript, sepateJavascript);
    gulp.watch("dist/*.html").on("change", server.reload);
};

/*
СЦЕНАРИИ ЗАДАЧ
=======================================================
*/
const dev = gulp.series(mainTasks, gulp.parallel(watcher, serve));

gulp.task("default", dev);
