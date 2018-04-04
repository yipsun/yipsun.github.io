var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("styles", function() {
    return gulp
        .src("./src/sass/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./web/css"));
});

gulp.task("default", function() {
    gulp.watch("./src/sass/**/*.scss", ["styles"]);
});
