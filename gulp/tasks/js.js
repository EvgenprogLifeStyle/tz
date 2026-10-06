import { gulpEsbuild } from "gulp-esbuild";

export const js = () => {
    return app.gulp.src(app.path.src.js)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "JS",
                message: "Error: <%= error.message %>"
            }))
        )
        .pipe(gulpEsbuild({
            entryPoints: [app.path.src.js],
            outfile: 'app.min.js',
            bundle: true,
            minify: app.isBuild,
            sourcemap: app.isDev,
            target: 'es2017',
            legalComments: 'none'
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream());
}


export const libsJs = () => {
    return app.gulp.src(app.path.src.libsJs)
        .pipe(app.gulp.dest(app.path.build.libsJs))
}
