# W3 四人协作指南

## 仓库和负责人

仓库：[ice-week3-wechat-poster](https://github.com/hansu650/ice-week3-wechat-poster)。  
**Team Leader：Tian Qin**。成员：Zhou Ziyue、Qiaochu Zheng、Zeng Hongkai。

按最新约定，新建独立仓库，直接使用 main。同学各自上传负责的文件，你来检查、要求修改并整合。

## 你先邀请三位同学

打开 [Collaborators 设置](https://github.com/hansu650/ice-week3-wechat-poster/settings/access)，点击 **Add people**，按同学的 GitHub 用户名邀请。
同学接受后便能推送，使用自己的账号即可。

[GitHub 官方邀请说明](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository)；[个人仓库权限](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/permission-levels-for-a-personal-account-repository)。

## 分工

| 成员 | 负责 | 最少提交 |
|---|---|---|
| Tian Qin | 平台数据、分工、质量评审、最终整合 | 数据核对与实际评审记录 |
| Zhou Ziyue | 购物价值与复购意愿 | 原文核对、分析、自行生成候选图 |
| Qiaochu Zheng | 交流方式与社会联系 | 8 个系数核对、分析、图例说明 |
| Zeng Hongkai | 使用负担与样本时长 | 路径/样本核对、分析、自行生成候选图 |

每人读原文相关段落、检查数值、说明一个结果。可以用 AI 辅助，但本人需要看懂并确认提交。
只把独立提示词发给本人，不附当前审核图片。每人按文字规格生成候选图，保存在本人目录 figures/ 下；最终整合使用 Tian Qin 选定的最终图。

## 最简单的网页上传方式

1. 打开仓库，进入自己负责的 `w3/contributions/姓名/` 目录。
2. 让 AI 按任务提示词生成并核对文件。
3. 点击 **Add file → Upload files**，上传本人的分析、核对表、SVG/PNG 和生成源码。
4. 在提交说明中写具体做了什么，提交到 main。
5. 把 commit 链接发给 Tian Qin 检查。每人只改本人目录中的候选图。

## 使用 Git 或让 AI 直接提交

```bash
git clone https://github.com/hansu650/ice-week3-wechat-poster.git
cd ice-week3-wechat-poster
git switch main
git pull --ff-only
# 编辑自己的目录
git add w3/contributions/自己的目录
# 候选图也保存在本人目录的 figures/ 中
git commit -m "W3: verify my assigned evidence module"
git pull --rebase origin main
git push origin main
```

遇到未提交改动或冲突时先检查，保留双方内容，不强制推送。每人只动自己目录，减少冲突。当前不新建分支或 PR。

## Team Leader 的检查与整合

- 看每个 commit 的文件差异，核对来源、数字、统计口径和解释。
- 在 `w3/reviews/leader_review.md` 记录实际反馈与对应 commit 链接。
- 让成员按反馈继续提交具体修改，再记录复查结果。
- 所有小图获准后，由 Tian Qin 整合大海报，统一字体、色彩、结论和引用。
- 保存修改前后版本，配合真实审图照片和个人反思。

任务分配与初始 AI 草稿仅是起点。后续贡献以每个人实际提交的内容为准。组长整合确认后的最终图，当前本地审核图不在协作包中分发。

