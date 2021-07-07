# 安装

npm 安装

```bash
npm i fe-ui -S
```

## CDN 方式

目前打包后会生成一个 `lib` 文件，通过页面上引入 `lib` 下方的 `js` 和 `css` 文件即可开始使用。

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="fe-ui/lib/index.css">
<!-- 引入组件库 -->
<script src="fe-ui/lib/index.js"></script>
```

## Hello world

通过 CDN 的方式我们可以很容易地使用 Element 写出一个 Hello world 页面。

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <!-- 引入样式 -->
  <link rel="stylesheet" href="fe-ui/lib/index.css">
</head>
<body>
  <div id="app">
    <f-button @click="visible = true">按钮</f-button>
    <f-dialog :visible.sync="visible" title="Hello world">
      <p>欢迎使用 Element</p>
    </f-dialog>
  </div>
</body>
  <!-- 先引入 Vue -->
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <!-- 引入组件库 -->
  <script src="fe-ui/lib/index.js"></script>
  <script>
    new Vue({
      el: '#app',
      data: function() {
        return { visible: false }
      }
    })
  </script>
</html>
```

如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节：[快速上手](/guide/quickstart)。
