# InfiniteLoad
> Based on Intersection Observer to achieve performance infinite scrolling loading effect, can replace scroll event.

# Install
```
npm install @xunlei/infinite-load
```

# Example
```javascript
let infiniteLoad = require('@xunlei/infinite-load')

// when the target element completely show in the root element,the function will be run
infiniteLoad(() => {
  // some get data code here
}, {
  target: document.getElementById('#target')
})
```
# Options
name | type |  defaultValue |description
---    |---    | --- | ---
target | Object | null |目标元素DOM Element
root | Object | document.body | 目标元素祖先元素
distance | String | '100px' | 当root存在时,用于提前或延迟加载
direction | String | 'down' | 向上滚动或向下滚动加载

# Attention
It depends on the Intersection Observer API, so it  only can be used in chrome 51+ or use polyfill:https://github.com/WICG/IntersectionObserver/tree/gh-pages/polyfill.

# Licence
The MIT License (MIT)


Copyright (c) 2017 shijianan




