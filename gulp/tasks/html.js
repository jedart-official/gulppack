/*
=======================================================
ИМПОРТЫ ПЛАГИНОВ 
=======================================================
*/

import fileinclude from "gulp-file-include";
import webpHTML from "gulp-webp-html";
/*
=======================================================
ВЫПОЛНЕНИЕ ЗАДАЧИ
=======================================================
*/
export const html = () => {
    return app.gulp
        .src(app.path.src.html) // Исходный путь
        .pipe(fileinclude()) // Импорт html в один файл
        .pipe(webpHTML())
        .pipe(app.gulp.dest(app.path.build.html)) // Конечный путь
        .pipe(app.server.stream()); // Обновление сервера
};

/*
=======================================================
ДЛЯ ОТДЕЛЬНЫХ СТРАНИЦ 
=======================================================
*/
export const pages = () => {
    return app.gulp
        .src(app.path.src.pages) // Исходный путь
        .pipe(app.gulp.dest(app.path.build.pages)); // Конечный путь
};
