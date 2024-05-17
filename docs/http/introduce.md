# 介绍

该库主要封装了一些常用的请求方法，例如`get`和`post`等，同时对[`AxiosRequestConfig`](https://www.axios-http.cn/docs/req_config)进行了一些[功能扩展](/http/return-result)，你可以传入更多的参数用于快速实现业务。

::: warning 注意
原`$get`、`$post`方法已标记为过时，后续将删除，请尽快迁移到`get`和`post`方法。
:::