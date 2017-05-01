## 放大镜特效

### 原理分析

半透明的放大镜

右侧高清图

随动,方向相反

offsetWidth 和 offsetHeight 不包括滚动条

- style.left 返回的是字符串,如'30px', offsetLeft 返回的是数值,30
- style.left 是可读写的,offsetLeft 是只读的,改变div位置, 要修改style.left 或者transform(css3)

- style.left 的值需要先定义,否则取到是空值


大图和小图比例相等,移动比例也相等

