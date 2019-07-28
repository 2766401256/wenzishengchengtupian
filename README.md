# 一个用html2canvas制作的文字生成打印图片在线工具
这两天实在是没事干，然后写了一个在线小工具，这个小工具是用来写文章、写信，然后在线生成图片打印出来。
最主要的里面有很多知识可以学，采用的是一个名叫html2canvas的js库来生成图片的。
## html2canvas使用指南：
```
html2canvas(document.body).then(function(canvas) {
    document.body.appendChild(canvas);
    });
```

![使用参数1](https://cecebk.cn/zb_users/upload/2019/07/201907281564312800557298.png)
![使用参数1](https://cecebk.cn/zb_users/upload/2019/07/201907281564312859753953.png)

以上便是html2canvas的使用指南，开拓自己使用想想还能做些什么。

我做的工具地址：https://cecebk.cn/paging/wzcdtp/index.html

我做的这个小工具支持字体变换，字号设置，标题字号与行高按正文字号等比例放大缩小，还有在线预览效果：

![效果图](https://cecebk.cn/zb_users/upload/2019/07/201907281564313360148118.png)

html2canvas下载地址：https://cdnjs.com/libraries/html2canvas

我要去工作了，拜拜