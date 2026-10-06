import del from "del";
// Чистим dist, но НЕ трогаем dist/img — так gulp-newer в images.js
// пропускает уже оптимизированные картинки и build не пересобирает их каждый раз.
// Для полной пересборки картинок удалить dist/img вручную.
export const reset = () => {
	return del([
		`${app.path.buildFolder}/**`,
		`!${app.path.buildFolder}`,
		`!${app.path.buildFolder}/img`,
		`!${app.path.buildFolder}/img/**`,
	]);
}
