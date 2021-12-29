import gulp from "gulp";
import gpug from "gulp-pug";
import del from "del";
import ws from "gulp-webserver";
import image from "gulp-image";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import miniCSS from "gulp-csso";
import browserify from "gulp-bro";
import babelify from "babelify";

sass.compiler = require("node-sass");

const routes = {
    pug: {
        watch:"src/**/*.pug",
        src:"src/*.pug",
        dest:"build"
    },
    img: {
        src:"src/img/*",
        dest:"build/img"
    },
    scss: {
        watch: "src/scss/**/*.scss",
        src:"src/scss/style.scss",
        dest:"build/css"
    },
    libScss: {
        watch: "src/scss/lib/**/*.scss",
        src:"src/scss/lib/semantic-ui.scss",
        dest:"build/css/lib"
    },
    js: {
        watch: "src/js/**/*.js",
        src:"src/js/main.js",
        dest:"build/js"
    }
};

const pug = () => 
    gulp
    .src(routes.pug.src)
    .pipe(gpug())
    .pipe(gulp.dest(routes.pug.dest));

const clean = () => del(["build"]);

const webserver = () => 
    gulp
    .src("build")
    .pipe(ws({livereload: true, open: true}));


const img = () =>  
    gulp.src(routes.img.src)
    .pipe(image())
    .pipe(gulp.dest(routes.img.dest));

const styles = () =>  
    gulp.src(routes.scss.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(miniCSS())
    .pipe(gulp.dest(routes.scss.dest));

const libStyles = () =>  
    gulp.src(routes.libScss.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(miniCSS())
    .pipe(gulp.dest(routes.libScss.dest));

const js = () =>  
    gulp.src(routes.js.src)
    .pipe(browserify({
        transform: [
            babelify.configure({ presets: ["@babel/preset-react", "@babel/preset-env"]}),
            ["uglifyify", {global: true}],
        ]
    }))
    .pipe(gulp.dest(routes.js.dest));


const watch = () => {
    gulp.watch(routes.pug.watch, pug);
    gulp.watch(routes.img.src, img);//이미지의 변동이 있을때마다 최적화 과정을 실행. 큰 사이즈 이미지가 있을경우 시간이 오래걸릴 수 있음.
    gulp.watch(routes.scss.watch, styles);
    gulp.watch(routes.libScss.watch, libStyles);
    gulp.watch(routes.js.watch, js);
};

const prepare = gulp.series([clean, img]);

const assets = gulp.series([pug, styles, libStyles, js]);

const postDev = gulp.parallel([webserver, watch]);

export const dev = gulp.series([prepare, assets, postDev]);