export const data = JSON.parse("{\"key\":\"v-373dabc0\",\"path\":\"/database/mysql/write-process.html\",\"title\":\"MySQL-写入过程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"MySQL-写入过程\",\"icon\":\"mysql\",\"date\":\"2022-10-22T00:00:00.000Z\",\"tag\":[\"MySQL\",\"数据库\"],\"category\":[\"数据库\"],\"description\":\"执行流程 查询语句执行的流程，更新语句也会执行类似的过程，稍有差别的地方是更新语句会将更新表的所有缓存清理，这就是为什么不建议使用查询缓存。 交互流程 日志模块 更重要的是MySQL的日志模块，这是数据库提供高可用以及事务的重要模块 我们以InnoDB引擎和一条更新语句为例 写流程 蓝色框是MySQL服务层处理过程; 绿色框是InnoDB引擎层处理过程...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://Hexiaopi.github.io/database/mysql/write-process.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Hexiaopi\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"MySQL-写入过程\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"执行流程 查询语句执行的流程，更新语句也会执行类似的过程，稍有差别的地方是更新语句会将更新表的所有缓存清理，这就是为什么不建议使用查询缓存。 交互流程 日志模块 更重要的是MySQL的日志模块，这是数据库提供高可用以及事务的重要模块 我们以InnoDB引擎和一条更新语句为例 写流程 蓝色框是MySQL服务层处理过程; 绿色框是InnoDB引擎层处理过程...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://Hexiaopi.github.io/\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"MySQL-写入过程\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Hexiaopi\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"MySQL\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"数据库\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-10-22T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"MySQL-写入过程\\\",\\\"image\\\":[\\\"https://Hexiaopi.github.io/\\\"],\\\"datePublished\\\":\\\"2022-10-22T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Hexiaopi\\\",\\\"url\\\":\\\"https://github.com/Hexiaopi\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"执行流程\",\"slug\":\"执行流程\",\"link\":\"#执行流程\",\"children\":[{\"level\":3,\"title\":\"日志模块\",\"slug\":\"日志模块\",\"link\":\"#日志模块\",\"children\":[]}]}],\"readingTime\":{\"minutes\":1.66,\"words\":499},\"filePathRelative\":\"database/mysql/write-process.md\",\"localizedDate\":\"2022年10月22日\",\"excerpt\":\"\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
