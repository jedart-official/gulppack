const srcFolder = "./src";
const buildFolder = `./dist`;

module.exports = path = {
    src: {
        js: `${srcFolder}/js/*.js`,
        separateJS: `${srcFolder}/js/separateJS/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/images/**/*.svg`,
        html: `${srcFolder}/*.html`,
        pages: `${srcFolder}/pages/**/*.html`,
        fonts: `${srcFolder}/fonts/*.{woff, woff2, ttf}`,
    },
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        pages: `${srcFolder}/pages/`,
        images: `${buildFolder}/images/`,
        fonts: `${buildFolder}/fonts/`,
    },
};
