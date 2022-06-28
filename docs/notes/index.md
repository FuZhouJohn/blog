---
layout: doc
title: Notes
---

## git 迁移当前修改至另一个分支

_2022/06/28_

输入 `git stash` 存储当前未提交修改，切换分支后使用 `git stash pop` 可以将存储列表中的第一份修改应用至当前分支，也可以使用 `git stash list` 看成当前存储的所有修改。

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
