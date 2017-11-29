####module属性和方法

- module.id 模块的ID，也就是模块的**绝对路径**

- module.filename 模块文件名 模块的**绝对路径**

- module.loaded 是否**加载完成**

- module.parent **父模块**，即调用当前模块的模块对象

- module.children **子模块**对象，即当前模块require的模块对象

- module.exports **导出对象**

- module.paths 模块的**查找路径**