# 最佳实践

## 上报页面提交后返回列表页面，如何触发列表页面重新加载数据？

`upload.vue`

```ts
uploadApi().then(() => {
  // 触发列表页面重新加载数据
  uni.$emit('refresh')
  // 返回列表页面
  uni.navigateBack()
})
```

`list.vue`

```ts
onLoad() {
  uni.$on('refresh', () => {
    // 监听refresh事件
    listRef.value?.refresh()
  })
},

onUnload() {
  // 移除refresh事件监听器
  uni.$off('refresh')
},
```
