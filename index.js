/**
 * 无限加载-当某个元素出现时加载更多数据
 * @author shijianan<greenfavo@qq.com>
 * @param {function} getData - 获取数据回调函数
 * @param {object} options - 配置项
 */
module.exports = function infiniteLoad (getData, options = {}) {
    try {
      let {
        target, // 目标对象
        root = document.body, // 目标对象根元素
        distance = '100px', // 用于提前或延迟加载
        direction = 'down' // 滚动方向
      } = options
      
      let rootMargin = `0 0 ${distance} 0`
      if (direction !== 'down') {
        rootMargin = `${distance} 0 0 0`
      }
      let io = new window.IntersectionObserver(entries => {
        if (entries[0].intersectionRatio <= 0) return
        getData()
      })
  
      if (!target) {
        target = document.createElement('div')
        if (direction === 'up') {
           // 在root之前插入节点
          root.insertBefore(target)
        } else if (direction === 'down') {
           // 在root里面插入节点
          root.appendChild(target)
        }
      }
      // 开始观察
      io.observe(target, {
        threshold: 1,
        rootMargin,
        root
      })
    } catch (error) {
      console.log('Your browser does not support IntersectionObserver,please upgrade your browser or use polyfill:https://github.com/WICG/IntersectionObserver/tree/gh-pages/polyfill')
      console.log(error)
    }
}
  