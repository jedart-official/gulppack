const pathSrc = "./src";
const pathDest = "./public";
const pathParts = "./src/parts/*.html";

module.exports = {
    root: pathDest,
    html: {
        src: pathSrc + "/html/*.html",
        watch: pathSrc + "/html/**/*.html",
        dest: pathDest,
        parts: pathParts,
    },
    css: {
        src: pathSrc + "/css/*.css",
        watch: pathSrc + "/css/**/*.css",
        dest: pathDest + "/css",
    },
    scss: {
        src: pathSrc + "/sass/*.{scss, sass}",
        watch: pathSrc + "/sass/**/*.{scss, sass}",
        dest: pathDest + "/css",
    },
    js: {
        src: pathSrc + "/js/*.js",
        watch: pathSrc + "/js/**/*.js",
        dest: pathDest + "/js",
    },
    img: {
        src: pathSrc + "/img/*.{jpg,png,jpeg,svg,gif}",
        watch: pathSrc + "/img/**/*.{png,jpeg,jpg,gif,svg}",
        dest: pathDest + "/img",
    },
    fonts: {
        src: pathSrc + "/fonts/*.{ttf,eot,otf,otc,woff,woff2}",
        watch: pathSrc + "/fonts/**/*.{tff,eot,ttf,otf,otc,woff,woff2}",
        dest: pathDest + "/fonts",
    },
}