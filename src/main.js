// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import 'codemirror/lib/codemirror.css'

// theme
import 'codemirror/theme/abcdef.css'
import 'codemirror/theme/yeti.css'
import 'codemirror/theme/mdn-like.css'

// addon
import 'codemirror/addon/lint/lint.css'
import 'codemirror/addon/fold/foldgutter.css'

// lint
import 'codemirror/addon/lint/lint.js'
import 'codemirror/addon/lint/json-lint.js'

// mode
import 'codemirror/mode/xml/xml.js'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/htmlmixed/htmlmixed.js'

// merge
import 'codemirror/addon/merge/merge.js'
import 'codemirror/addon/merge/merge.css'

// fold
import 'codemirror/addon/fold/foldcode.js'
import 'codemirror/addon/fold/foldgutter.js'
import 'codemirror/addon/fold/xml-fold.js'

Vue.use(Element)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
