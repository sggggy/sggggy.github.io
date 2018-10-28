## 2018-10-28 Mac下使用dlib的imglab标注图片

## 原始信息

作者：yeah的第七章 
来源：CSDN 
原文：https://blog.csdn.net/yeahDeDiQiZhang/article/details/83346480 
官方文档见 https://github.com/davisking/dlib/tree/master/tools/imglab

### 安装依赖
需要先安装 cmake 和 X11，
cmake 通过下面命令安装
```
$ brew install cmake
```

X11 需要下载安装 https://www.xquartz.org/ ，直接安装后，需要创建软连接，命令如下
```
$ cd /usr/local/opt
$ ln -s /opt/X11 X11
```

完成后重启

### 获取 dlib
在 GitHub 上获取 dlib
```
$ git clone https://github.com/davisking/dlib.git
```
### 安装imglab
```
cd dlib/examples
mkdir build
cd build
cmake .. 
cmake --build . --config Release
```

### 进行标注
如果你要对 ~/Documents/pic/ 目录下的图像进行标注
首先使用 imglab 工具创建一个 xml 文件

```
$ ./imglab -c data.xml ~/Documents/pic
```

xml 文件创建后，会生成 pic 文件夹里所有的图片信息
此时执行
```
$ ./imglab data.xml
```

就会生成标注窗口了
标注时需要注意：
先框物体，然后双击框，才能标注框内的关键点

按键使用方法：

| 操作                 | 含义     |
| -------------------- | -------- |
| shift + 左键长按拖动 | 框取物体 |
| 左键双击框 | 选中框体 |
| shift+左键单击 | 标注关键点 |
| ctrl+滚轮 | 放大或缩小 |
| 键盘上下键 | 上/下一张图片 |
| alt+d | 删除当前图片 |
| 选中+del | 删除标注 |