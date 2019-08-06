## Popover

主要是对 `addEventListener` 冒泡和委托的处理

https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener

问题
1. `addEventListener('click', fn)`, 这样声明会直接执行 `fn`
2. `addEventListener('click', function(){}, false)`, 这样多次声明会添加多个事件; `addEventListener('click', foo, false)` 这样多次调用只会添加一个事件
2. 延迟添加 document 关闭事件, 会立即关闭, 因为冒泡未完成, 需要阻止冒泡
