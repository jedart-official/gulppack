// Запуск сервера
const runServer =  () => {
    $.browserSync.init({
         server: {
            baseDir: $.path.root,
         }
    })
}
module.exports = runServer;