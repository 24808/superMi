const STORAGE_KEY = "mall"
export default {
  //存储值
  setItem(key, value, nodule_name) {
    if (nodule_name) {

      let val = this.getItem(nodule_name);
      val[key] = value
      return this.setItem(nodule_name, val)
    }
    let val = this.getStorage();
    val[key] = value;
    return window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  },
  //获取某一个模块下面的属性，user下面的username
  getItem(key, nodule_name) {
    // 如果有父级
    if (nodule_name) {
      let val = this.getItem(nodule_name);
      if (val) {
        // 返回子值
        return val[key]
      }
    }
    // 返回最外层值
    return this.getStorage()[key];
  },
  getStorage() {
    // 返回sessionStorage
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
  },
  clear(key, nodule_name) {
    let val = this.getStorage();
    if (nodule_name) {
      if (!val[nodule_name]) {
        return
      }
      delete val[nodule_name][key];
    } else {
      delete val[key]
    }
    return window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  }
}