export default (str) => {
  // 建立数据结构， 堆栈， 保存数据
  let r = 0
  let match = (str) => {
    let j = str.match(/^(0+|1+)/)[0]
    let o = (j[0] ^ 1).toString().repeat(j.length)
    let reg = new RegExp(`^(${j}${o})`)
    if (reg.test(str)) {
      return true
    }
    return false
  }
  //  通过循环控制程序运行流程
  for (let i = 0, len = str.length - 1; i < len; i++) {
    let sub = match(str.slice(i))
    if (sub) {
      r++
    }
  }
  return r
}
