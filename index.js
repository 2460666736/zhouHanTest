/*
 * @Version: 2.0
 * @Autor: Zhou Han
 * @Date: 2022-01-06 09:46:49
 * @LastEditors: Zhou Han
 * @LastEditTime: 2022-01-06 09:49:24
 * @Description: file content
 */

import ZhInput from './src/components/ZhInput';
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('yyl-npm-practice', ZhInput)
}
  //这样就可以使用Vue.use进行全局安装了。
  ZhInput.install = function(Vue){
  Vue.component(ZhInput.name, ZhInput)
}
export default ZhInput;