# jsApp

#### 选择器大都采用querySelector

#### 1.tabController:原生js 制作的tabcontroller,可以扩展,标题和内容都是ul的形式
```javascript
function Controller(t, c, s) {} //分别是 标题,内容(class/id),和点击加上的css
```
使用方法: ```Controller(".title", ".content", "isActive");```

#### 2.rollTest:原生js 制作的无缝滚动效果,测试例子使用了js函数立即执行的方式
#### 这个例子必须配合提供的css一起,因为在没在js里面改style

```javascript
(function Roll(c, g, l){
//some code here
})(".container", ".gallery", "li")
```

#### 3.dropdownMenu.html  css写的下拉菜单,通过:hover控制display的属性,细节地方值得完善


#### 4.toolTip
纯css导航条,toolTip效果,主要目的是练习stylus,熟悉transition,transform等
``` npm install stylus -g  ```
or
``` yarn global add stylus ```

watch  ```stylus -w style.styl -o  style.css```
compress  ``` stylus -c app.styl -o test.css ```


#### 5.放大镜效果
参考慕课网上写的

#### 6.改变checkbox, radio 样式的js插件
> 伪类的实现方式
> 更改元素伪类是简单粗暴的插入style标签实现的