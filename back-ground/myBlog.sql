set
  names utf8;

drop database if exists myblog;

create database myblog charset = utf8;

use myblog;

create table notice(
  nid int primary key auto_increment comment "笔记编号",
  title varchar(128) comment "笔记标题",
  keywords varchar(128) comment "笔记关键词",
  content text comment "笔记内容",
  notice_describe varchar(256) comment "笔记描述",
  update_time bigint comment "笔记更新时间"
);

insert into
  notice
values
  (
    null,
    "走进高并发（二）Java并行程序基础",
    "java,高并发",
    '<div class="markdown-body editormd-preview-container" previewcontainer="true" style="padding: 20px;"><h1 id="h1--markdown-mdeditor"><a name="欢迎使用 Markdown在线编辑器 MdEditor" class="reference-link"></a><span class="header-link octicon octicon-link"></span>欢迎使用 Markdown在线编辑器 MdEditor</h1><p><strong>Markdown是一种轻量级的「标记语言」</strong></p>
        <p><img src="https://www.mdeditor.com/images/logos/markdown.png" alt="markdown" title="markdown">
        </p><p>Markdown是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。它允许人们使用易读易写的纯文本格式编写文档，然后转换成格式丰富的HTML页面，Markdown文件的后缀名便是“.md”</p>
        <h2 id="h2-mdeditor-markdown-"><a name="MdEditor是一个在线编辑Markdown文档的编辑器" class="reference-link"></a><span class="header-link octicon octicon-link"></span>MdEditor是一个在线编辑Markdown文档的编辑器</h2><p><em>MdEditor扩展了Markdown的功能（如表格、脚注、内嵌HTML等等），以使让Markdown转换成更多的格式，和更丰富的展示效果，这些功能原初的Markdown尚不具备。</em></p>
        <blockquote>
        <p>Markdown增强版中比较有名的有Markdown Extra、MultiMarkdown、 Maruku等。这些衍生版本要么基于工具，如<del>Pandoc</del>，Pandao；要么基于网站，如GitHub和Wikipedia，在语法上基本兼容，但在一些语法和渲染效果上有改动。</p>
        </blockquote>
        <p>MdEditor源于Pandao的JavaScript开源项目，开源地址<a href="https://github.com/pandao/editor.md" title="Editor.md">Editor.md</a>，并在MIT开源协议的许可范围内进行了优化，以适应广大用户群体的需求。向优秀的markdown开源编辑器原作者Pandao致敬。</p>
        <h1>测试标题1</h1>
        胜多负少
        大师傅大师傅
        dsfs 



        士大夫
        士大夫 
        <h2>c测试副标题1</h2>
        第三方
        士大夫 
        <h3>c测试副标题1</h3>
        第三方
        士大夫 
        <h1>测试标题2</h1>
        第三方
        士大夫 
        <h2>c测试副标题2</h2>
        、第三方
        士大夫 
        <h3>c测试副标题2</h3>
        第三方
        士大夫 
        <h1>测试标题3</h1>
        第三方
        士大夫 
        <h2>c测试副标题3</h2>
        第三方
        士大夫 
        <h1>测试标题4</h1>
        第三方
        士大夫 
        <h2>c测试副标题4</h2>
        第三方
        士大夫 
        </div>',
    "java基础知识",
    1578992472852
  );

insert into
  notice
values
  (
    null,
    "走进高并发（二）Java并行程序基础",
    "java,高并发",
    '## MdEditor的功能列表演示

        # 标题H1

        ## 标题H2

        ### 标题H3

        #### 标题H4

        ##### 标题H5

        ###### 标题H5

        ### 字符效果和横线等
        ----

        ~~删除线~~ <s>删除线（开启识别HTML标签时）</s>

        *斜体字*      _斜体字_

        **粗体**  __粗体__

        ***粗斜体*** ___粗斜体___

        上标：X<sub>2</sub>，下标：O<sup>2</sup>

        **缩写(同HTML的abbr标签)**
        > 即更长的单词或短语的缩写形式，前提是开启识别HTML标签时，已默认开启

        The <abbr title=" Hyper Text Markup Language ">HTML</abbr> specification is maintained by the <abbr title=" World Wide Web Consortium ">W3C</abbr>.
        ### 引用 Blockquotes

        > 引用文本 Blockquotes

        引用的行内混合 Blockquotes

        > 引用：如果想要插入空白换行`即<br />标签`，在插入处先键入两个以上的空格然后回车即可，[普通链接](https://www.mdeditor.com/)。

        ### 锚点与链接 Links
        [普通链接](https://www.mdeditor.com/)
        [普通链接带标题](https://www.mdeditor.com/ " 普通链接带标题 ")
        直接链接：<https://www.mdeditor.com>
        [锚点链接][anchor-id]
        [anchor-id]: https://www.mdeditor.com/
        [mailto:test.test@gmail.com](mailto:test.test@gmail.com)
        GFM a-tail link @pandao
        邮箱地址自动链接 test.test@gmail.com  www@vip.qq.com
        > @pandao

        ### 多语言代码高亮 Codes

        #### 行内代码 Inline code


        执行命令：`npm install marked`

        #### 缩进风格

        即缩进四个空格，也做为实现类似 `<pre>` 预格式化文本 ( Preformatted Text ) 的功能。

            <?php
                echo " Hello world ! ";
            ?>
        预格式化文本：

            | First Header  | Second Header |
            | ------------- | ------------- |
            | Content Cell  | Content Cell  |
            | Content Cell  | Content Cell  |

        #### JS代码
        ```javascript
        function test() {
          console.log(" Hello world ! ");
        }
        ```

        #### HTML 代码 HTML codes
        ```html
        <!DOCTYPE html>
        <html>
            <head>
                <mate charest=" utf -8 " />
                <meta name=" keywords " content=" Editor.md,
            Markdown,
            Editor " />
                <title>Hello world!</title>
                <style type=" text / css ">
                    body{font-size:14px;color:#444;font-family: " Microsoft Yahei ", Tahoma, " Hiragino Sans GB ", Arial;background:#fff;}
                    ul{list-style: none;}
                    img{border:none;vertical-align: middle;}
                </style>
            </head>
            <body>
                <h1 class=" text - xxl ">Hello world!</h1>
                <p class=" text - green ">Plain text</p>
            </body>
        </html>
        ```
        那么线程和进程究竟是什么关系呢？简单说来，进程就是线程的“母亲”，是承载线程的基本单位，也是承载线程的容器。举个例子，一栋公司大楼里，许多员工都在各司其职，井然有序地工作着，每个员工就可以理解为一个活动线程，多个员工有时候会进行分组，每个组的员工共同协调合作完成一份工作，那么可以理解为线程分组，线程组内的线程共同合作完成工作，有时候，员工会排队等待领取下午茶，只有当前员工成功领取了下午茶之后才会走出队列，那么可以理解为线程访问临界区，多个线程等待临界区线程完成任务后离开临界区。那么进程就可以被理解为这栋公司大楼，它是承载公司正常运行（员工日常工作）的载体。
        一个进程是由多个线程组合而成，那么可以这么说线程其实就是轻量级的进程，是程序执行的最小单位。现在的程序设计中，强调使用多线程，而不是多进程，那是因为线程间的切换与调度所消耗的成本远远低于进程所消耗的成本。',
    "java基础知识",
    1570992472852
  );

create table practical(
  pid int primary key auto_increment comment "实用编号",
  title varchar(128) comment "实用标题",
  keywords varchar(128) comment "分类关键词",
  link varchar(256) comment "链接地址",
  practical_describe varchar(256) comment "实用描述",
  jump_times int comment "链接跳转次数"
);

insert into
  practical
values
  (
    null,
    "npm官网",
    "nodejs",
    "https://www.npmjs.com",
    "查找第三方模块，并提供下载使用文档",
    0
  ),
  (
    null,
    "es6新特性电子书",
    "javascript",
    "http://es6.ruanyifeng.com/",
    "详细的es6新特性手册，方便工作时查找",
    0
  ),
  (
    null,
    "产品大牛",
    "原型",
    "http://www.pmdanniu.com",
    "提供免费的网站原型查看和下载",
    0
  ),
  (
    null,
    "animate.css",
    "css",
    "https://daneden.github.io/animate.css/",
    "css动画库",
    0
  ),
  (
    null,
    "git使用教程",
    "git",
    "https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/",
    "比较完整的git使用教程",
    0
  ),
  (
    null,
    "雪碧图（精灵图）在线制作",
    "css",
    "https://www.toptal.com/developers/css/sprite-generator",
    "在线生成雪碧图",
    0
  ),
  (
    null,
    "百度绘图库echart",
    "echart",
    "https://echarts.baidu.com/",
    "echart官方文档",
    0
  ),
  (
    null,
    "数组方法手册",
    "echart",
    "http://30ke.cn/doc/js-array-method",
    "数组方法快速查询手册",
    0
  ),
  (
    null,
    "获取随机图片",
    "api",
    "http://lorempixel.com/",
    "获取随机图片的api",
    0
  ),
  (
    null,
    "获取fake用户数据",
    "api",
    "http://jsonplaceholder.typicode.com/users",
    "模拟用户数据的接口",
    0
  );