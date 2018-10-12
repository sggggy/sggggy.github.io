Jira可以让相关人员保持对事务的知会，并关注在你关心的问题上。 要使通知有效，就不能过度通知参与者。 Jira有三种通知方法，被称为**通知方案**，**关注**与**@提及**。

在本篇文章中，我们将重点关注和@提及应用于所有用户的效果。 让我们来看看如何使用这两种方式向我们自己以及我们的团队发送适量的通知。 作为参考，通知方案由Jira Admin设置，并且可以为每个项目定制。


### 关注：密切的跟进某个问题


当关注某个问题时，关注者会在问题的整个生命周期中获得更完整的通知。 系统管理员可以使用通知方案设置关注者接收的通知。 默认情况下，关注者可以查看问题生命周期中的所有主要事件：所有字段更改，重新分配与注释。

![关注](http://upload-images.jianshu.io/upload_images/2859735-16991942251ef6fd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

为什么要关注某个问题？ 如果计划中存在某个关键问题，那么你需要保持对团队在该问题上所有更新的跟进。 关注可以帮助保持从发现到解决某个事件整个过程的跟踪。 请记住，关注会产生大量电子邮件流，所以需要在关注的问题上谨慎选择。

在Jira 6中，我们发布了名为批量关注（和取消关注）的新功能。 此功能可让你直接从问题导航器的列表视图中选择问题方便地关注。

![批量关注](http://upload-images.jianshu.io/upload_images/2859735-f32470407d5ac5eb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![批量取消关注](http://upload-images.jianshu.io/upload_images/2859735-1146b9fe73b0b11e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### @提及：只通知一次

如果你在解决某个事件中需要通知某人，但不需要持续通知，那么@提及是个完美方案。让我们看几个例子，能够通过@节省事件，并确保某个人都在同个进度上。

当你和某个同事发现同样的问题；显然只需要其中一人提交就可以。在事件描述中你可以使用@提及来通知同事。当你提交JIRA任务后，说明问题已提交。这样，他们就不会认为这个问题没有被提交。使用@提及，而不用关注的好处是，通知只发生一次。

![提及@](http://upload-images.jianshu.io/upload_images/2859735-cff94cdc2df7af82.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在处理问题时，经常需要经理或同事的反馈意见。 你当然可以重新分配它，但这对于单个问题来说，是一个相当繁琐的操作。 通过使用@提及，可以快速将需要反馈的相关人员纳入对话，并使确保自己能够继续前进。 通过这种方法事件将一直处于被分配状态，并且处于你的搜索雷达范围中。

![提及](http://upload-images.jianshu.io/upload_images/2859735-6e70548067f9d603.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![提及](http://upload-images.jianshu.io/upload_images/2859735-20da74de5353c34c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 过滤器和仪表板：保持对通知的关注

我们都知道在电子邮件中迷路是个经常发生的事。 借助Jira强大的过滤和仪表板，你可以轻松创建视图，显示作为关注着参与的所有问题，或者被提及的所有问题。 我想在仪表板上放置一个小工具，以显示我正在关注的所有问题，以及另一个小工具，显示我最近被提到的所有问题。 我正关注的问题是我等待别人的问题，我被提到的问题是别人等着我的问题。 有两个小工具使责任分工明确。

### 我正在关注的问题


要生成我正在关注的所有问题列表，我们可以使用以下JQL，也称为高级搜索。 如果你对JQL不熟悉，请参阅我们的教程系列。

```
[cc lang=’sql’](watcher = currentUser()) AND status not in (closed) ORDER BY updated DESC[/cc]
```
这将返回我正在观看的所有未完全关闭的问题。 使用以下查询只查看尚未解决的问题。

```
[cc lang=’sql’](watcher = currentUser()) AND resolution is EMPTY ORDER BY updated DESC[/cc]
```

### 提及我的问题

对于@提及，我们正在任何文本字段中查找提到我们用户名的字段。 这将展示在评论、描述和其他文本字段中的所有提及。 我们可以任意设置限制，只包括过去7天内更新的问题。 一旦我收到通知，我通常会很快回应。 这样对方很快得到他们需要的信息。 我发现有七天的时间可以让我回应（假期除外）。
```
[cc lang=’sql’](text ~ currentUser()) AND updatedDate >= -7d ORDER BY updated DESC[/cc]
```
### 在仪表板上显示

然后，你可以在仪表板上显示这两个查询，以便提供方便的位置来跟踪正在关注和提及的所有问题。由于我们使用的是currentuser（）函数，因此可以与团队共享这些查询和仪表板。 当团队成员查看此仪表板时，Jira将为其定制内容。

![image.png](http://upload-images.jianshu.io/upload_images/2859735-0519977ecb69f642.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
[cc lang ='sql']（text〜currentUser（））AND updatedDate> = -7d ORDER BY updated DESC [/ cc]
```

**点我获取** 

 [**阿里云购买优惠券**](https://link.jianshu.com/?t=https://promotion.aliyun.com/ntms/act/ambassador/sharetouser.html?userCode=ym6mcf8h&utm_source=ym6mcf8h)
