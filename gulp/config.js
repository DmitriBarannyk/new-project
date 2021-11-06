const srcPath = "src";
const destPath = "build";

const config = {
    src: {
        root: srcPath,
        sass: `${srcPath}/sass`,
        js: `${srcPath}/js`,
        fonts: `${srcPath}/assets/fonts`,
        images: `${srcPath}/assets/images`,
        iconsMono: `${srcPath}/assets/icons/mono`,
        iconsMulti: `${srcPath}/assets/icons/multi`,
        pug: `${srcPath}/pug`,
    },
};
export default config;