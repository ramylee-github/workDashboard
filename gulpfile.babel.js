import gulp from "gulp";
import gpug from "gulp-pug";
import gsass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import miniCSS from "gulp-csso";
import image from "gulp-image";
import browserify from "gulp-bro";
import del from "del";
import dsass from "sass";
import babelify from "babelify";
// import gsourcemap from "gulp-sourcemap";
import grename from "gulp-rename";
import ws from "gulp-webserver";

/*
 * ========================
 * each elements's route
 * =======================
*/
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

/*
 * ====================================================
 *  delete build folder before new build is generated
 * ===================================================
*/
const clean = () => del(["build"]);

/*
 * ==============
 *  PUG to HTML
 * ==============
*/
const pug = () => 
    gulp
    .src(routes.pug.src)
    .pipe(gpug())
    // .pipe(gsourcemap.write())
    .pipe(gulp.dest(routes.pug.dest));

/*
 * =======================
 *  scss to css + minify
 * =======================
*/
const sass = gsass(dsass);
const styles = () =>  
    gulp.src(routes.scss.src)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(miniCSS())
    .pipe(gulp.dest(routes.scss.dest));
//for library styles
const libStyles = () =>  
    gulp.src(routes.libScss.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(miniCSS())
    .pipe(gulp.dest(routes.libScss.dest));

/*
 * ============================
 *  transpiling and minify js
 * ============================
*/
const js = () =>  
    gulp.src(routes.js.src)
    .pipe(browserify({
        transform: [
            babelify.configure({ presets: ["@babel/preset-env"]}),
            ["uglifyify", {global: true}],
        ]
    }))
    .pipe(grename('main.min.js'))
    .pipe(gulp.dest(routes.js.dest));

/*
 * ================
 *  minify images
 * ================
*/
const img = () =>  
    gulp.src(routes.img.src)
    .pipe(image())
    .pipe(gulp.dest(routes.img.dest));

/*
 * ==============================
 *  setting a live local server
 * =============================
*/
const webserver = () => 
    gulp
    .src("build")
    .pipe(ws({livereload: true, open: true}));

/*
 * =========================================
 *  setting real time watching environment
 * ========================================
*/
const watch = () => {
    gulp.watch(routes.pug.watch, pug);
    gulp.watch(routes.img.src, img);
    gulp.watch(routes.scss.watch, styles);
    gulp.watch(routes.libScss.watch, libStyles);
    gulp.watch(routes.js.watch, js);
};

//prepare step
const prepare = gulp.series([clean, img]);
//core step
const assets = gulp.series([pug, styles, js]);
//extra step for develop environment and automation
const postDev = gulp.parallel([webserver, watch]);

export const dev = gulp.series([prepare, assets, postDev]);