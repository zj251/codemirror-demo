<template>
 <el-tabs v-model="tabType" @tab-click="handleClick">
    <el-tab-pane label="Codemirror Lint" name="lint">
      <codemirror
          v-if="this.tabType === 'lint'"
          ref="cmLint"
          :value="lintContent"
          :options="lintOptions"
          @input="changes">
      </codemirror>
    </el-tab-pane>
    <el-tab-pane label="Codemirror Merge" name="merge">
      <codemirror
          v-if="this.tabType === 'merge'"
          ref="cmMerge"
          :merge="true"
          :options="mergeOptions"
          @input="changes">
      </codemirror>
    </el-tab-pane>
    <el-tab-pane label="Codemirror Folding" name="folding">
     <codemirror
          v-if="this.tabType === 'folding'"
          :value="foldContent"
          ref="cmFold"
          :options="foldOptions"
          @input="changes">
      </codemirror>
    </el-tab-pane>
  </el-tabs>
</template>

<script>

import Vue from 'vue'
import Component from 'vue-class-component'
import { codemirror } from 'vue-codemirror'

    @Component({
      name: 'Demo',
      components: {
        codemirror
      }
    })

export default class Demo extends Vue {
  tabType = 'lint'

  lintContent = ''

  foldContent = `<html>
  <body>
    <h4>三行三列：</h4>
    <table border="1">
      <tr>
        <td>100</td>
        <td>200</td>
        <td>300</td>
      </tr>
      <tr>
        <td>400</td>
        <td>500</td>
        <td>600</td>
      </tr>
      <tr>
        <td>700</td>
        <td>800</td>
        <td>900</td>
      </tr>
    </table>
  </body>
</html>
`
  lintOptions = {
    mode: 'application/json', // 模式
    theme: 'abcdef', // 主题
    gutters: ['CodeMirror-lint-markers'],
    lint: true,
    indentUnit: 4, // 缩进多少个空格
    tabSize: 4, // 制表符宽度
    lineNumbers: true, // 是否显示行号
    lineWrapping: true, // 是否默认换行
    firstLineNumber: 3, // 在哪个数字开始计数行。默认值为1
    readOnly: false, // 禁止用户编辑编辑器内容
    line: true,
    smartIndent: true // 智能缩进
  }

  mergeOptions = {
    mode: 'application/json', // 模式
    theme: 'yeti', // 主题
    lineNumbers: true, // 是否显示行号
    origLeft: null,
    showDifferences: true, // 当为true(默认值)时, 更改的文本片段将高亮显示
    collapseIdentical: false, // 当为true(默认为false)时，未修改的文本段将被折叠。
    connect: 'center', // 设置用于连接更改的代码块的样式
    value: '{\n    "k1":"v1",\n    "k2":"v2",\n    "k3":"v3",\n    "k4":"v4",\n    "k5":"v5",\n    "k6":"v6",\n    "k7":"v7"\n}', // 左侧老文件
    orig: '{\n    "k1":"v1",\n    "k3":"v3",\n    "k4":"v4",\n    "k7":"v7"\n}' // 右侧新文件
  }

  foldOptions = {
    mode: 'text/html', // 模式
    theme: 'mdn-like', // 主题
    lineNumbers: true, // 是否显示行号
    lineWrapping: true,
    foldGutter: true, // 支持折叠
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter']
  }

  handleClick (value) {
    this.tabType = value.name
  }

  changes (value) {
  }
    }
</script>

<style>
.codemirror-con {
  width: 600px;
  height: 400px;
  margin: 0 auto;
}
.eg-titile {
  font-weight: bold;
  margin-bottom: 30px;
}
</style>
