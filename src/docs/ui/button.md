# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

:::  demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```vue
<template>
  <div>
    <el-row>
      <f-button @click="openAlert">默认按钮</f-button>
      <f-button type="primary">主要按钮</f-button>
      <f-button type="success">成功按钮</f-button>
      <f-button type="info">信息按钮</f-button>
      <f-button type="warning">警告按钮</f-button>
      <f-button type="danger">危险按钮</f-button>
    </el-row>

    <el-row>
      <f-button plain>朴素按钮</f-button>
      <f-button type="primary" plain>主要按钮</f-button>
      <f-button type="success" plain>成功按钮</f-button>
      <f-button type="info" plain>信息按钮</f-button>
      <f-button type="warning" plain>警告按钮</f-button>
      <f-button type="danger" plain>危险按钮</f-button>
    </el-row>

    <el-row>
      <f-button shape="round">圆角按钮</f-button>
      <f-button type="primary" shape="round">主要按钮</f-button>
      <f-button type="success" shape="round">成功按钮</f-button>
      <f-button type="info" shape="round">信息按钮</f-button>
      <f-button type="warning" shape="round">警告按钮</f-button>
      <f-button type="danger" shape="round">危险按钮</f-button>
    </el-row>

    <el-row>
      <f-button icon="el-icon-search" shape="circle"></f-button>
      <f-button type="primary" icon="el-icon-edit" shape="circle"></f-button>
      <f-button type="success" icon="el-icon-check" shape="circle"></f-button>
      <f-button type="info" icon="el-icon-message" shape="circle"></f-button>
      <f-button
        type="warning"
        icon="el-icon-star-off"
        shape="circle"
      ></f-button>
      <f-button type="danger" icon="el-icon-delete" shape="circle"></f-button>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    openAlert() {
      alert('alert');
    },
  },
};
</script>

<style scoped>
.fui-button {
  margin-bottom: 16px;
}
</style>
```

:::

## 禁用状态

按钮不可用状态。

> 你可以使用 `disabled` 属性来定义按钮是否可用，它接受一个 `Boolean` 值。

::: demo

```vue
<template>
  <div>
    <el-row>
      <f-button disabled>默认按钮</f-button>
      <f-button type="primary" disabled>主要按钮</f-button>
      <f-button type="success" disabled>成功按钮</f-button>
      <f-button type="info" disabled>信息按钮</f-button>
      <f-button type="warning" disabled>警告按钮</f-button>
      <f-button type="danger" disabled>危险按钮</f-button>
    </el-row>

    <el-row>
      <f-button plain disabled>朴素按钮</f-button>
      <f-button type="primary" plain disabled>主要按钮</f-button>
      <f-button type="success" plain disabled>成功按钮</f-button>
      <f-button type="info" plain disabled>信息按钮</f-button>
      <f-button type="warning" plain disabled>警告按钮</f-button>
      <f-button type="danger" plain disabled>危险按钮</f-button>
    </el-row>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.fui-button {
  margin-bottom: 16px;
}
</style>
```

:::

## 文字按钮

没有边框和背景色的按钮。

::: demo

```vue
<template>
  <div>
    <f-button type="text">文字按钮</f-button>
    <f-button type="text" disabled>文字按钮</f-button>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.fui-button {
  margin-bottom: 16px;
}
</style>
```

:::

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

> 设置 `icon` 属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用 `i` 标签即可，可以使用自定义图标。

::: demo

```vue
<template>
  <div>
    <f-button type="primary" icon="el-icon-edit"></f-button>
    <f-button type="primary" icon="el-icon-share"></f-button>
    <f-button type="primary" icon="el-icon-delete"></f-button>
    <f-button type="primary" icon="el-icon-search">搜索</f-button>
    <f-button type="primary">
      上传
      <i class="el-icon-upload el-icon--right"></i>
    </f-button>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.fui-button {
  margin-bottom: 16px;
}
</style>
```

:::

## 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

> 要设置为 loading 状态，只要设置 `loading` 属性为 `true` 即可。

::: demo

```vue
<template>
  <div>
    <el-row>
      <f-button type="primary" loading>加载中</f-button>
      <f-button type="primary" loading icon="el-icon-upload" />
      <f-button type="primary" loading icon="el-icon-upload">
        loading
      </f-button>
    </el-row>
    <el-row>
      <f-button type="primary" :loading="loading1" @click="loading1 = true">
        点击按钮
      </f-button>
      <f-button
        type="primary"
        :loading="loading2"
        @click="loading2 = true"
        icon="el-icon-upload"
      />
      <f-button
        type="primary"
        :loading="loading3"
        @click="loading3 = true"
        icon="el-icon-upload"
      >
        点击按钮
      </f-button>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false
    };
  }
};
</script>
<style scoped>
.fui-button {
  margin-bottom: 16px;
}
</style>
```

:::

## 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

> 额外的尺寸：`large`、`medium`、`small`、`mini`，通过设置 `size` 属性来配置它们。并且提供了快捷设置按钮宽度的 `width` 属性，`block` 属性将使按钮适合其父宽度。

::: demo

```vue
<template>
  <div>
    <el-row>
      <f-button type="primary" size="large">大型按钮</f-button>
      <f-button type="primary">默认按钮</f-button>
      <f-button type="primary" size="small">小型按钮</f-button>
      <f-button type="primary" size="mini">超小按钮</f-button>
    </el-row>
    <el-row>
      <f-button type="primary" size="large" shape="round">大型按钮</f-button>
      <f-button type="primary" shape="round">默认按钮</f-button>
      <f-button type="primary" size="small" shape="round">小型按钮</f-button>
      <f-button type="primary" size="mini" shape="round">超小按钮</f-button>
    </el-row>
    <el-row>
      <f-button type="primary" :width="120">自定义宽度</f-button>
      <f-button type="primary" :width="120" shape="round">
        自定义宽度
      </f-button>
    </el-row>
    <el-row>
      <f-button type="primary" block>自适应宽度</f-button>
    </el-row>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.fui-button {
  margin-bottom: 16px;
}
</style>
```

:::

## API

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：type -> shape -> size -> loading -> disabled。

按钮的属性说明如下：

| 参数     | 说明                           | 类型    | 可选值                                             | 默认值 |
| -------- | ------------------------------ | ------- | -------------------------------------------------- | ------ |
| size     | 尺寸                           | string  | large / medium / small / mini                      | medium |
| type     | 类型                           | string  | primary / success / warning / danger / info / text | —      |
| width    | 宽度                           | number  | —                                                  | —      |
| block    | 将按钮宽度调整为其父宽度的选项 | boolean | —                                                  | false  |
| plain    | 是否朴素按钮                   | boolean | —                                                  | false  |
| shape    | 设置按钮形状                   | string  | circle / round                                     | —      |
| loading  | 是否加载中状态                 | boolean | —                                                  | false  |
| disabled | 是否禁用状态                   | boolean | —                                                  | false  |
| icon     | 图标类名                       | string  | —                                                  | —      |
