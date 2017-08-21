# InfiniteLoad
> The use of Intersection Observer to achieve performance infinite scrolling loading effect, no scroll event.

# Install
```
npm install @xunlei/infinite-load
```

# Example
```javascript
let infiniteLoad = require('@xunlei/infinite-load')

infiniteLoad(() => {
  // some get data code here
}, {
  observeDOM: document.getElementById('#observe')
})
```
# Options
name | type |  defaultValue |description
---    |---    | --- | ---
threshold | Array | [0, 1] | 触发get Data的阈值 
observeDOM | Object | null |观测对象DOM Element
root | Object | document.body | 观察对象根元素
rootMargin | String | '0 0 100px 0' | 用于提前或延迟加载
direction | String | 'down' | 向上滚动或向下滚动加载

# Attention
It depends on the Intersection Observer API, so it  only can be used in chrome 51+.

# Licence
The MIT License (MIT)


Copyright (c) 2017 shijianan




