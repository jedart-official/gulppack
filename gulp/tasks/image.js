/*
=======================================================
ИМПОРТЫ ПЛАГИНОВ 
=======================================================
*/

import webp from "gulp-webp";
import newer from "gulp-newer";
import imagemin from "gulp-imagemin";

/*
=======================================================
ВЫПОЛНЕНИЕ ЗАДАЧИ
=======================================================
*/
export const images = () => {
    return app.gulp
        .src(app.path.src.images) // Исходный путь
        .pipe(webp()) // Конвертация изображений в формат Webp
        .pipe(newer(app.path.build.images))
        .pipe(
            imagemin({
                progressive: true,
                svgoPlugins: [{ removeViewBox: false }],
                interlaced: true,
                optimizationLevel: 2,
            })
        )
        .pipe(app.gulp.dest(app.path.build.images)) // Конечный путь
        .pipe(app.gulp.src(app.path.src.svg)) // Исходный путь
        .pipe(app.gulp.dest(app.path.build.images)) // Конечный путь
        .pipe(app.server.stream()); // Обновление сервера
};
