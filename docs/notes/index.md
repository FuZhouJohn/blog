---
layout: doc
title: Notes
---

## 查找单链表中间点

_2022/06/17_

假设两「人」同时链表起点出发，A 一次走一步，B 一次走两步，当 B 到达终点时，A 所在的点为中心点。 ​​​​

```js
const middleNode = function (head) {
  let slow = head,
    fast = head;
  while (fast && fast.next) (slow = slow.next), (fast = fast.next.next);
  return slow;
};
```

## 锁定 npm 包安装时的版本号

_2022/05/27_

```bash
npm config set save-prefix=''
```
