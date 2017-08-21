/**
 * 无限加载-当某个元素出现时加载更多数据
 * @author shijianan<greenfavo@qq.com>
 * @param {function} getData - 获取数据回调函数
 * @param {object} options - 配置项
 */
module.exports = function infiniteLoad (getData, options = {}) {
    try {
      let {
        threshold = [0, 1], // 触发getData的阈值
        observeDOM, // 观测对象
        root = document.body, // 观测对象根元素
        rootMargin = '0 0 100px 0', // 用于提前或延迟加载
        direction = 'down' // 滚动方向
      } = options
  
      let io = new window.IntersectionObserver(entries => {
        if (entries[0].intersectionRatio <= 0) return
        getData()
      })
  
      if (!observeDOM) {
        observeDOM = document.createElement('div')
        if (direction === 'up') {
           // 在root之前插入节点
          root.insertBefore(observeDOM)
        } else if (direction === 'down') {
           // 在root里面插入节点
          root.appendChild(observeDOM)
        }
      }
      // 开始观察
      io.observe(observeDOM, {
        threshold,
        rootMargin,
        root
      })
    } catch (error) {
      console.log('Your browser does not support IntersectionObserver,please upgrade your browser or use polyfill:https://github.com/WICG/IntersectionObserver/tree/gh-pages/polyfill')
      console.log(error)
    }
}
  