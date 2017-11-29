### Buffer

- 缓冲区Buffer是暂时存放输入输出数据的一段**内存**。

- JS语言自身只有字符串数据类型，没有**二进制**数据类型，而在处理TCP和文件流的时候
必须要处理二进制数据。

- NodeJs提供了一个Buffer对象来提供对二进制数据的操作

- 是一个表示**固定**内存分配的全局对象，也就是说要放到缓冲区中的字节数
需要**提前确定**

- Buffer好比由一个**八位字节**(一个字符)元素组成的数组，可以有效的在javascript
中表示二进制数据

### 创建Buffer

- new Buffer(size)

- new Buffer(array)

- new Buffer(str,[encoding])

### Buffer操作

- Buffer和字符串长度

- Buffer和字符串的转换

- Buffer和数值对象转换

- Buffer和JSON对象转换

- 复制Buffer buf.copy(targetBuffer, [targetStart], [sourceStart], [sourceEnd]);

### Buffer静态方法

- concat

- isBuffer

- byteLength

- isEncoding