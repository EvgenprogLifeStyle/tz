export const copy_form = () => {
	return app.gulp.src(app.path.src.form)
		.pipe(app.gulp.dest(app.path.build.form))
}