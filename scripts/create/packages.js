/* eslint-disable prettier/prettier */
const fs = require('fs');
const { mkdirsSync } = require('./utils');
const folderName = process.argv[2];

if (!folderName) {
  console.warn('组件目录名不能为空');
  console.log('eg: npm run create:pkg [component-folder]');
  process.exit(0);
}

const dirname = `./packages/${folderName}`;
const isExist = fs.existsSync(dirname);
if (isExist) {
  console.warn(`目录(${folderName})已存在`);
  process.exit(0);
}

const folderNameToUpperCase = folderName.replace(/^\S/, s => s.toUpperCase());
const pkgTpl = `{
  "name": "@fe-ui/${folderName}",
  "version": "1.0.0",
  "main": "dist/index.js",
  "license": "MIT"
}
`;

const entryTpl = `import { VueConstructor } from 'vue';
import ${folderNameToUpperCase} from './src/index.vue';

export default {
  ...${folderNameToUpperCase},
  install(Vue: VueConstructor) {
    Vue.component(${folderNameToUpperCase}.name, ${folderNameToUpperCase});
  }
};
`;

mkdirsSync(dirname); // mkdir $1
process.chdir(dirname); // cd $1
// fs.writeFileSync(`index.tsx`, indexTep); // write tsx
fs.writeFileSync(`package.json`, pkgTpl); // write package
fs.writeFileSync(`index.ts`, entryTpl); // write entry file

// 创建源文件
const vueTpl = `<template>
  <div>${folderNameToUpperCase}</div>
</template>

<script>
export default {
  name: '${folderNameToUpperCase}',
  props: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

`;

mkdirsSync(`src`); // mkdir $1
process.chdir(`src`); // cd $1
fs.writeFileSync(`index.vue`, vueTpl); // write vue file


console.log('创建成功');
process.exit(0);
