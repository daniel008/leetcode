// export default (str) => {
//   // 字符串按空格分隔， 保存数组，并保持元素先后顺序即单词顺序。
//   let arr = str.split(' ')
//   // 对数组进行遍历， 然后每个元素进行反转
//   let result = arr.map(item => {
//     return item.split('').reverse().join('')
//   })
//   return result.join(' ')
// }
// export default (str) => {
//   // 1. 字符串按空格分隔， 保存数组，并保持元素先后顺序即单词顺序。
//   // 2. 对数组进行遍历， 然后每个元素进行反转
//   return str.split(' ').map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

// export default (str) => {
//   // 1. 字符串按空格分隔， 保存数组，并保持元素先后顺序即单词顺序。
//   // 2. 对数组进行遍历， 然后每个元素进行反转
//   return str.split(/\s/g).map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

export default (str) => {
  // 1. 字符串按空格分隔， 保存数组，并保持元素先后顺序即单词顺序。
  // 2. 对数组进行遍历， 然后每个元素进行反转
  return str.match(/[\w']+/g).map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}
