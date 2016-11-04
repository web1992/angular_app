angluar 项目骨架
---

目录结构：
---

angular_app
    |-gulpfile.js
    |-index.html
    |-package.json
    |-dist  #gulp 压缩，打包之后的文件目录
    |-node_modules
    |-readme.md




1,集成gulp
----
    cnpm install gulp --save
    #安装gulp 依赖，会自动生成`package.json`文件(因为有--save参数)

[gulp参考](http://www.cnblogs.com/starof/p/5194622.html)

压缩js插件是 gulp-uglify
压缩image插件是 gulp-image
压缩css插件是 gulp-cssnano

    #安装gulp-uglify
    cnpm install gulp-uglify --save-dev
    #安装gulp- image
    cnpm install gulp-image --save-dev
    #安装gulp-cssnano
    cnpm install gulp-cssnano --save-dev
    #安装del
    cnpm install del --save-dev

    cnpm install gulp-concat --save-dev

    cnpm install gulp-rename --save-dev

    cnpm install gulp-less --save-dev


2,集成browser-sync

    cnpm install --save-dev browser-sync

    cnpm install --save-dev immutable

    cnpm install --save-dev resp-modifier

    cnpm install --save-dev dev-ip

    cnpm install --save-dev portscanner

    cnpm install --save-dev ua-parser-js








