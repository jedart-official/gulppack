/*
=======================================================
ИМПОРТЫ ПЛАГИНОВ 
=======================================================
*/

import webp from "gulp-webp";

/*
=======================================================
ВЫПОЛНЕНИЕ ЗАДАЧИ
=======================================================
*/
export const images = () => {
    return (
        app.gulp
            .src(app.path.src.images) // Исходный путь
            .pipe(webp()) // Конвертация изображений в формат Webp
            .pipe(app.gulp.dest(app.path.build.images)) // Конечный путь
            /*
            =======================================================
            SVG ИЗОБРАЖЕНИЯ
            =======================================================
            */
            .pipe(app.gulp.src(app.path.src.svg)) // Исходный путь
            .pipe(app.gulp.dest(app.path.build.images)) // Конечный путь
            .pipe(app.server.stream())
    ); // Обновление сервера
};
