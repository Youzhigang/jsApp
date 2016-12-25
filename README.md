# jsApp

#### 1.tabController:原生js 制作的tabcontroller,可以扩展,标题和内容都是ul的形式
```javascript
function Controller(t, c, s) {} //分别是 标题,内容(class/id),和点击加上的css
```
使用方法 Controller(".title", ".content", "isActive");

#### 2.rollTest:原生js 制作的无缝滚动效果,测试例子使用了js函数立即执行的方式
```javascript
(function Roll(c, g, l){
//some code here
})(".container", ".gallery", "li")
```
