# 四人独立提示词（无需配图）

只需把每个人对应的文字发给本人，不附当前审核图片。独立 W3 仓库仅用 main。每人提交自己的候选图和分析，Tian Qin 决定最终采用版本。

## Tian Qin

```text
我是 Tian Qin，负责 ICE W3 微信海报的“平台规模、年度增长与组长统筹”。Team Leader 始终为 Tian Qin。
仓库：https://github.com/hansu650/ice-week3-wechat-poster
工作分支：main，不创建额外分支。
本人唯一提交目录：w3/contributions/tian-qin/
任务输出文件基名：01_platform_scale、05_annual_growth。

一手来源与数据：
1. Tencent Annual Report 2022，printed p. 4 / PDF p. 5：
https://static.www.tencent.com/uploads/2023/04/06/214dce4c5312264800b20cfab64861ba.pdf
2. Tencent Annual Report 2025，printed p. 4 / PDF p. 5：
https://static.www.tencent.com/uploads/2026/04/09/62d786fcf3d3c8cb7e54791ee95439ac.pdf
3. Tencent Offering Circular，9 June 2026，printed p. 16 / PDF p. 39：
https://www.hkexnews.hk/listedco/listconews/sehk/2026/0609/2026060900199.pdf
4. Tencent Interim Report 2026，printed p. 5 / PDF p. 6：
https://www.tencent.com/wp-content/uploads/2026/08/E700_IR.pdf
这些是发行方披露。逐项核对原文；若页码因封面偏移，以标题和数值定位。

年度合计 Weixin + WeChat monthly active accounts，单位 million accounts：
2021: 1268.2；2022: 1313.2；2023: 1343；2024: 1385；2025: 1418。
2022–2025 年度增加量：45.0、29.8、42.0、33.0 million accounts。
2021–2025 总增加 149.8 million，约 11.8%。
另外单独注明 30 June 2026 快照：1439 million；不能当成年末数据混入年度图。

主图 01_platform_scale：2320 × 1305，5 个年度柱形图，零基线，图中显示具体值。英文分析说明平台覆盖面的商业/社会意义，并讨论“覆盖”不能证明“收益”。
补充图 05_annual_growth：1500 × 650，4 个年度增加量，标为 calculated differences，不猜测增长原因。
统计口径：账号不是去重的人数；合并指标不是仅中国居民；年度增量不是新注册用户人数。

作为 Team Leader，另准备 w3/reviews/leader_review.md 的实际评审条目：成员 commit、发现的问题、具体意见、后续修订 commit、是否接收及理由。未收到贡献先保留空表。只有小图获我批准后再整合全海报。

视觉与内容规格：
无需任何参考图片，按以下文字规格从零制作。沿用 W1 的阅读结构，使用 W3 的独立内容和配色。
主模块：2320 × 1305 SVG；白底，顶部浅桃色标题带高 118。编号 x=55，标题 x=163。左侧放图表，右侧分析从 x=1385 开始，宽 865；竖分隔线 x=1335。
配色：深蓝 #355A70，陶橙 #BE673F，标题底 #F8EAE1，正文 #294052，次要文字 #667782，网格 #DCE3E7。
字体 Comic Sans MS；缺失时说明替代字体。正文约 32 px、行距 47；图注约 31/45；来源约 25/38。主模块来源分隔线 y=1195。标题过长时合理换行，不能溢出。
补充图：1500 × 650，同色系、同字体，顶部标题、中央图表、底部口径和来源，按尺寸调整字号保证可读。
图内使用英文；每张保留可编辑 SVG、相同尺寸 PNG 和可复现源码/生成说明。来源 URL、单位、统计量、样本和局限应可见。需要的话以确定性绘图代码生成；不能靠图像模型猜数据。
每个主模块左图右文，右文采用 Result / Meaning / Limitation 三段。给主模块写 120–180 个英文单词；补充图配 40–65 词图注。可适度调整排版，保证文字不重叠、不截断。
不要生成活动照片。当前小图审核稿留在 Tian Qin 本地；完成的候选图提交在本人目录。最终图由 Tian Qin 审核后挑选并统一整合。

执行与交付：
1. 先打开上方一手来源，核对相关表格/结果段；打不开时写“待核验”，不要声称已核验。给 source_check.md：原文位置、原值、采用值、统计口径、核对结论和限制。
2. 给 analysis.md：最终英文分析及简短中文解释，并提出 2 个帮助我理解论文的检查问题。把文献发现和自己的解释/建议分清。
3. 从零生成本任务规定的图，保存在本人目录的 figures/ 下，附 SVG、PNG、生成源码或可复现说明。检查每个数字、图例、来源、边界和小字。不依赖别人发来的草稿图片。
4. 给 contribution.md：列实际完成内容、AI 帮助范围、本人确认项和未完成项。没有发生的阅读、讨论、拍照、反馈或评价不能写成已经完成。
5. 只使用我自己的 GitHub 登录身份。确认本人接受协作者邀请后，在仓库现有 main 上提交本人目录；先拉取最新内容，只暂存本人文件，不使用 git add . 或强制推送。不要创建额外分支、PR，不覆盖他人文件。Tian Qin 可另改实际组长评审文件。
6. 如果无推送权限或当前工作区有冲突，保留所有成果，明确说明阻碍和下一步；不要替其他人署名或伪造他人的 commit。每次实际修订留具体提交说明。
7. 返回成果文件清单、可点击 commit 链接、主要结论、本人待确认项。Tian Qin 会审阅提交、提出修改并整合；上传成功本身不代表内容已经被组长接收。

仓库 w3/data/wechat_evidence.json、SOURCE_GUIDE.md、STYLE_GUIDE.md 可作文字/数据补充；本提示词本身已包含完成任务所需的主题、数据和风格，不需要接收草稿图片。
```

## Zhou Ziyue

```text
我是 Zhou Ziyue，负责 ICE W3 微信海报的“购物价值与复购意愿”。Team Leader 始终为 Tian Qin。
仓库：https://github.com/hansu650/ice-week3-wechat-poster
工作分支：main，不创建额外分支。
本人唯一提交目录：w3/contributions/zhou-ziyue/
任务输出文件基名：02_commerce_value、06_value_model。

一手论文：Guo & Li (2022), Exploring the Relationship Between Social Commerce Features and Consumers' Repurchase Intentions: The Mediating Role of Perceived Value。
https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2021.775056/full
期刊发表年为 2022；DOI 中的 2021 不是引用年。请核对正文 Table 4、Figure 2 和方法部分。

Table 4，与 repurchase intention 的五个非对角线 Pearson correlation r：
Utilitarian value: 0.661
Hedonic value: 0.584
Recommendations: 0.417
Feedback: 0.414
Interactivity: 0.404
主图 02_commerce_value：2320 × 1305，按上述顺序水平柱形图，轴名 correlation coefficient r；右侧分析实用价值、享乐价值、社交功能与购物意愿的关系。

Figure 2，通向 repurchase intention 的两个标准化路径：
Utilitarian value → repurchase intention: beta = 0.485, p < .001
Hedonic value → repurchase intention: beta = 0.284, p < .001
补充图 06_value_model：1500 × 650，两个柱或简洁路径示意，明确 standardized beta，与主图 r 分开。

样本：574 份返回，514 份有效；中国 WeChat 购物者，Sojump 在线问卷，样本主要为 20–39 岁且本科及以上；横断面自报。正文没有报告具体调查日期，不补写。
必须区分：复购意愿不是实际销量；r 不是 beta；Table 4 对角线 AVE 指标不能当相关系数；数字较大不代表两个系数差异经过显著性检验；相关不证明因果。
英文分析提出一个有依据但尚待验证的商业建议，例如优先改善实用价值，同时保留研究局限。

视觉与内容规格：
无需任何参考图片，按以下文字规格从零制作。沿用 W1 的阅读结构，使用 W3 的独立内容和配色。
主模块：2320 × 1305 SVG；白底，顶部浅桃色标题带高 118。编号 x=55，标题 x=163。左侧放图表，右侧分析从 x=1385 开始，宽 865；竖分隔线 x=1335。
配色：深蓝 #355A70，陶橙 #BE673F，标题底 #F8EAE1，正文 #294052，次要文字 #667782，网格 #DCE3E7。
字体 Comic Sans MS；缺失时说明替代字体。正文约 32 px、行距 47；图注约 31/45；来源约 25/38。主模块来源分隔线 y=1195。标题过长时合理换行，不能溢出。
补充图：1500 × 650，同色系、同字体，顶部标题、中央图表、底部口径和来源，按尺寸调整字号保证可读。
图内使用英文；每张保留可编辑 SVG、相同尺寸 PNG 和可复现源码/生成说明。来源 URL、单位、统计量、样本和局限应可见。需要的话以确定性绘图代码生成；不能靠图像模型猜数据。
每个主模块左图右文，右文采用 Result / Meaning / Limitation 三段。给主模块写 120–180 个英文单词；补充图配 40–65 词图注。可适度调整排版，保证文字不重叠、不截断。
不要生成活动照片。当前小图审核稿留在 Tian Qin 本地；完成的候选图提交在本人目录。最终图由 Tian Qin 审核后挑选并统一整合。

执行与交付：
1. 先打开上方一手来源，核对相关表格/结果段；打不开时写“待核验”，不要声称已核验。给 source_check.md：原文位置、原值、采用值、统计口径、核对结论和限制。
2. 给 analysis.md：最终英文分析及简短中文解释，并提出 2 个帮助我理解论文的检查问题。把文献发现和自己的解释/建议分清。
3. 从零生成本任务规定的图，保存在本人目录的 figures/ 下，附 SVG、PNG、生成源码或可复现说明。检查每个数字、图例、来源、边界和小字。不依赖别人发来的草稿图片。
4. 给 contribution.md：列实际完成内容、AI 帮助范围、本人确认项和未完成项。没有发生的阅读、讨论、拍照、反馈或评价不能写成已经完成。
5. 只使用我自己的 GitHub 登录身份。确认本人接受协作者邀请后，在仓库现有 main 上提交本人目录；先拉取最新内容，只暂存本人文件，不使用 git add . 或强制推送。不要创建额外分支、PR，不覆盖他人文件。Tian Qin 可另改实际组长评审文件。
6. 如果无推送权限或当前工作区有冲突，保留所有成果，明确说明阻碍和下一步；不要替其他人署名或伪造他人的 commit。每次实际修订留具体提交说明。
7. 返回成果文件清单、可点击 commit 链接、主要结论、本人待确认项。Tian Qin 会审阅提交、提出修改并整合；上传成功本身不代表内容已经被组长接收。

仓库 w3/data/wechat_evidence.json、SOURCE_GUIDE.md、STYLE_GUIDE.md 可作文字/数据补充；本提示词本身已包含完成任务所需的主题、数据和风格，不需要接收草稿图片。
```

## Qiaochu Zheng

```text
我是 Qiaochu Zheng，负责 ICE W3 微信海报的“交流方式与社会联系”。Team Leader 始终为 Tian Qin。
仓库：https://github.com/hansu650/ice-week3-wechat-poster
工作分支：main，不创建额外分支。
本人唯一提交目录：w3/contributions/qiaochu-zheng/
任务输出文件基名：03_social_connections。

一手论文：Zhang & Jung (2023)，Journal of Computer-Mediated Communication 28(1), zmac030。
https://academic.oup.com/jcmc/article/28/1/zmac030/6827860
请从原页面确认完整题名。卷期年 2023，在线发表于 2022 年；阅读 Structural model 段、Figure 2 和方法部分。

标准化路径 beta（每行依次为 bonding / bridging）：
Association（点赞、评论）：0.11, p < .05 / 0.04, p = .31
Private/dyadic interaction（私聊）：0.14, p < .01 / 0.07, p = .12
Broadcasting（发帖）：0.01, p = .78 / 0.13, p < .05
Reviewability（回看内容）：−0.02, p = .68 / 0.11, p < .05

主图 03_social_connections：2320 × 1305，分组点图或水平系数图，4 种使用方式 × 2 类社会资本，包含负数。bonding 深蓝、bridging 橙色；显著路径实心，不显著路径空心并写 NS。保留全部 8 个系数及 4 个不显著结果，图例清楚。
Bonding 指紧密关系带来的信任/支持；bridging 指更广网络带来的信息/观点等资源，不是好友数量。

研究是中国 WeChat 用户两轮面板调查，2020 年 1–5 月，间隔约 3 个月；T1 有效 1202，T2 留存 740，61.56%。模型考虑先前水平和所选协变量；仍是观察性证据，存在样本流失和自报限制。
英文分析需要解释：不同使用方式与不同社会资源相关；NS 不是证明完全无关系；不要写“多发帖必然增加朋友”。
用具体结果支持一个社会层面的解释或待检验建议，避免空泛的“微信使生活更好”。

视觉与内容规格：
无需任何参考图片，按以下文字规格从零制作。沿用 W1 的阅读结构，使用 W3 的独立内容和配色。
主模块：2320 × 1305 SVG；白底，顶部浅桃色标题带高 118。编号 x=55，标题 x=163。左侧放图表，右侧分析从 x=1385 开始，宽 865；竖分隔线 x=1335。
配色：深蓝 #355A70，陶橙 #BE673F，标题底 #F8EAE1，正文 #294052，次要文字 #667782，网格 #DCE3E7。
字体 Comic Sans MS；缺失时说明替代字体。正文约 32 px、行距 47；图注约 31/45；来源约 25/38。主模块来源分隔线 y=1195。标题过长时合理换行，不能溢出。
补充图：1500 × 650，同色系、同字体，顶部标题、中央图表、底部口径和来源，按尺寸调整字号保证可读。
图内使用英文；每张保留可编辑 SVG、相同尺寸 PNG 和可复现源码/生成说明。来源 URL、单位、统计量、样本和局限应可见。需要的话以确定性绘图代码生成；不能靠图像模型猜数据。
每个主模块左图右文，右文采用 Result / Meaning / Limitation 三段。给主模块写 120–180 个英文单词；补充图配 40–65 词图注。可适度调整排版，保证文字不重叠、不截断。
不要生成活动照片。当前小图审核稿留在 Tian Qin 本地；完成的候选图提交在本人目录。最终图由 Tian Qin 审核后挑选并统一整合。

执行与交付：
1. 先打开上方一手来源，核对相关表格/结果段；打不开时写“待核验”，不要声称已核验。给 source_check.md：原文位置、原值、采用值、统计口径、核对结论和限制。
2. 给 analysis.md：最终英文分析及简短中文解释，并提出 2 个帮助我理解论文的检查问题。把文献发现和自己的解释/建议分清。
3. 从零生成本任务规定的图，保存在本人目录的 figures/ 下，附 SVG、PNG、生成源码或可复现说明。检查每个数字、图例、来源、边界和小字。不依赖别人发来的草稿图片。
4. 给 contribution.md：列实际完成内容、AI 帮助范围、本人确认项和未完成项。没有发生的阅读、讨论、拍照、反馈或评价不能写成已经完成。
5. 只使用我自己的 GitHub 登录身份。确认本人接受协作者邀请后，在仓库现有 main 上提交本人目录；先拉取最新内容，只暂存本人文件，不使用 git add . 或强制推送。不要创建额外分支、PR，不覆盖他人文件。Tian Qin 可另改实际组长评审文件。
6. 如果无推送权限或当前工作区有冲突，保留所有成果，明确说明阻碍和下一步；不要替其他人署名或伪造他人的 commit。每次实际修订留具体提交说明。
7. 返回成果文件清单、可点击 commit 链接、主要结论、本人待确认项。Tian Qin 会审阅提交、提出修改并整合；上传成功本身不代表内容已经被组长接收。

仓库 w3/data/wechat_evidence.json、SOURCE_GUIDE.md、STYLE_GUIDE.md 可作文字/数据补充；本提示词本身已包含完成任务所需的主题、数据和风格，不需要接收草稿图片。
```

## Zeng Hongkai

```text
我是 Zeng Hongkai，负责 ICE W3 微信海报的“使用负担、疲劳焦虑与样本时长”。Team Leader 始终为 Tian Qin。
仓库：https://github.com/hansu650/ice-week3-wechat-poster
工作分支：main，不创建额外分支。
本人唯一提交目录：w3/contributions/zeng-hongkai/
任务输出文件基名：04_overload_and_fatigue、07_sample_daily_time。

一手论文：Liu, Feng, Chen & Yuan (2024)，Frontiers in Psychology，题名以 “Left on read” 开头。
https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2024.1406895/full
请从原文确认完整题名，阅读 Section 5.3 / Figure 2、Table 1 和方法部分。

Section 5.3 / Figure 2，标准化路径 beta；每行依次为 fatigue / anxiety：
Social comparison: 0.137 / 0.190
Privacy concern: 0.207 / 0.209
Information overload: 0.097 / 0.228
Functional overload: 0.187 / 0.221
Social overload: 0.301 / 0.214
以上 10 条路径均 p < .01。
Fatigue → lurking: beta = 0.291, p < .01
Anxiety → lurking: beta = 0.126, p < .01

主图 04_overload_and_fatigue：2320 × 1305，5 × 2 系数热图配准确数值，再用简洁路径/小图呈现通向 lurking 的 2 个系数。标题说 fatigue and anxiety。Lurking 定义为 observing content without active participation；不要扩大为退出平台。
这些是标准化模型路径，不是百分比；不要用其他表的中介估计替代；数字排序不是系数差异显著性检验。

Table 1，研究样本每日使用时长：
<2 h: 309, 37.0%
2–4 h: 374, 44.7%
4–6 h: 105, 12.6%
>6 h: 48, 5.7%
合计 836 人，100.0%。
补充图 07_sample_daily_time：1500 × 650，4 个类别的柱形图，人数和比例均标注，保留论文原分组名称及范围。

样本：2024 年 1–2 月，Credamo 中国 WeChat 用户，862 份返回，836 份有效；横断面自报。研究样本分布不能当全体用户分布；时长分组不构成“安全时长”或个人风险阈值；相关模型不证明因果。
英文分析解释一种平台设计/使用管理上的启示，并明确它是待验证建议。

视觉与内容规格：
无需任何参考图片，按以下文字规格从零制作。沿用 W1 的阅读结构，使用 W3 的独立内容和配色。
主模块：2320 × 1305 SVG；白底，顶部浅桃色标题带高 118。编号 x=55，标题 x=163。左侧放图表，右侧分析从 x=1385 开始，宽 865；竖分隔线 x=1335。
配色：深蓝 #355A70，陶橙 #BE673F，标题底 #F8EAE1，正文 #294052，次要文字 #667782，网格 #DCE3E7。
字体 Comic Sans MS；缺失时说明替代字体。正文约 32 px、行距 47；图注约 31/45；来源约 25/38。主模块来源分隔线 y=1195。标题过长时合理换行，不能溢出。
补充图：1500 × 650，同色系、同字体，顶部标题、中央图表、底部口径和来源，按尺寸调整字号保证可读。
图内使用英文；每张保留可编辑 SVG、相同尺寸 PNG 和可复现源码/生成说明。来源 URL、单位、统计量、样本和局限应可见。需要的话以确定性绘图代码生成；不能靠图像模型猜数据。
每个主模块左图右文，右文采用 Result / Meaning / Limitation 三段。给主模块写 120–180 个英文单词；补充图配 40–65 词图注。可适度调整排版，保证文字不重叠、不截断。
不要生成活动照片。当前小图审核稿留在 Tian Qin 本地；完成的候选图提交在本人目录。最终图由 Tian Qin 审核后挑选并统一整合。

执行与交付：
1. 先打开上方一手来源，核对相关表格/结果段；打不开时写“待核验”，不要声称已核验。给 source_check.md：原文位置、原值、采用值、统计口径、核对结论和限制。
2. 给 analysis.md：最终英文分析及简短中文解释，并提出 2 个帮助我理解论文的检查问题。把文献发现和自己的解释/建议分清。
3. 从零生成本任务规定的图，保存在本人目录的 figures/ 下，附 SVG、PNG、生成源码或可复现说明。检查每个数字、图例、来源、边界和小字。不依赖别人发来的草稿图片。
4. 给 contribution.md：列实际完成内容、AI 帮助范围、本人确认项和未完成项。没有发生的阅读、讨论、拍照、反馈或评价不能写成已经完成。
5. 只使用我自己的 GitHub 登录身份。确认本人接受协作者邀请后，在仓库现有 main 上提交本人目录；先拉取最新内容，只暂存本人文件，不使用 git add . 或强制推送。不要创建额外分支、PR，不覆盖他人文件。Tian Qin 可另改实际组长评审文件。
6. 如果无推送权限或当前工作区有冲突，保留所有成果，明确说明阻碍和下一步；不要替其他人署名或伪造他人的 commit。每次实际修订留具体提交说明。
7. 返回成果文件清单、可点击 commit 链接、主要结论、本人待确认项。Tian Qin 会审阅提交、提出修改并整合；上传成功本身不代表内容已经被组长接收。

仓库 w3/data/wechat_evidence.json、SOURCE_GUIDE.md、STYLE_GUIDE.md 可作文字/数据补充；本提示词本身已包含完成任务所需的主题、数据和风格，不需要接收草稿图片。
```

