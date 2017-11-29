### fs模块中几种流的读写方法的区别

- 将文件作为**整体**读入缓存区
    - 异步 readFile 同步 readFileSync

- 将文件**部分**读入缓存区
    - 异步 read 同步 readSync

- 将数据**完整**写入文件
    - 异步 writeFile 同步 writeFileSync

- 将缓存区的**部分**内容写入文件
    - 异步 write 同步 writeSync


#### read&readSync读取文件

- **一小块**一小块读入缓存区
- 最后从缓存区读取**完整**文件内容

#### write&writeSync写入文件

- 将需要书写的数据写到一个**系统缓存区**
- 待缓存区写满后再将缓存区写到文件中
- 重复执行上面二个步骤