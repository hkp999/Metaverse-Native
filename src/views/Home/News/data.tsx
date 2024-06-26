
import IconFont from '@components/IconFont';
const data = [
  {
    id: 33122,
    time: '2024-01-08 23:35',
    author: '元力社',
    title: '亚洲首个8K沉浸式体验空间“深空未来”落地上海',
    icon: <IconFont name='Time' size={20} />,
    description: '近日，亚洲首个8K沉浸式体验空间“深空未来”落地上海，西岸美术馆B1多功能厅化身“时空任意门”，8K投影结合激光追踪系统、3D视觉成像等数字科技开启文旅元宇宙新坐标，自去年12月下旬启动试运营以来已接待观众约1.2万人次。日前，《上海市贯彻落实国家文化数字化战略的实施方案》印发，明确7项14条重点任务，其中包括绘制上海文化数据资源图谱、打造上海特色文化数据库、部署上海数字文化智算中心、搭建上海文化数据服务平台等涉及数字经济底层逻辑的布局。'
  },
  {
    id: 33123,
    time: '2024-01-08 23:34',
    author: '元力社',
    title: '昆山大力发展元宇宙',
    icon: <IconFont name='Article' size={20}color='rgb(101,176,255)' />,
    description: '昆山打造以云昆大厦为核心的元宇宙产业园，亮风台、五一元生、黑湖网络科技等首批32家企业入驻云昆大厦，未来3年预计入驻元宇宙相关企业超200家，年产值超50亿元。元宇宙是新一代信息技术集成创新和应用的未来产业，孕育着巨大发展潜力。2022年以来，昆山大力实施元宇宙产业创新发展行动计划，精心举办元宇宙产业大会2023春季会、元宇宙国际装备展等品牌活动，集聚元宇宙重点企业近百家，涵盖硬件研制、软件开发、内容创造、应用创新各领域，初步形成了上下游贯通的完整产业链条，“打造元宇宙产业看昆山、发展元宇宙产业来昆山”已经成为新的城市产业标识。'
  },
  {
    id: 33143,
    time: '2024-01-08 23:32',
    author: '元力社',
    title: 'OpenAI又出新花招',
    icon: <IconFont name='Time' size={20} />,
    description: '趋势一：从AI大模型迈向通用人工智能趋势二：合成数据打破人工智能训练数据瓶颈趋势三：量子计算机可能率先应用于人工智能趋势四：AI代理和无代码软件开发带来“冲击波”比尔·盖茨近日发长文解读AI代理未来，表示AI代理将彻底改变人们使用计算机的方式，带来自键盘、屏幕和鼠标发明以来人类与计算机互动方式上最重大的革新。'
  },
  {
    id: 3314344,
    time: '2024-01-08 23:30',
    author: '元力社',
    title: '奔驰将在2024年国际消费电子展（CES）上发布全新的 MBUX 虚拟助手',
    icon: <IconFont name='Time' size={20} />,
    description: '1月9日，奔驰将在2024年国际消费电子展（CES）上发布全新的 MBUX 虚拟助手，该虚拟助手将配备人工智能技术，为驾驶者提供个性化的控制和互动体验。这一功能被视为奔驰多媒体系统的下一代版本，旨在为用户提供前所未有的个性化服务，并通过自然、人类般的交互将驾驶员与汽车之间的关系提升到一个新的维度。今年6月，奔驰宣布美国车主可在部分豪华车型中使用 ChatGPT 聊天机器人。该公司表示，ChatGPT 与大约 90 万辆搭载 MBUX 智能人机交互系统的汽车兼容，车主可通过梅赛德斯应用或语音命令选择加入该测试计划，并通过无线方式下载 ChatGPT 功能。'
  },
  {
    id: 3133,
    time: '2023-11-29 19:22',
    author: '新浪VR',
    title: '谷歌推出了一项名为 AI Core 的新 Google 应用程序更新',
    icon: <IconFont name='Article' size={20} color='rgb(101,176,255)'/>,
    description: '根据 Google Play 商店的描述，AI Core 将为 Google Pixel 8 Pro 手机的 Android 系统和应用程序提供最新的 AI 模型支持，以及其他一系列 AI 驱动功能。\n昨日，有消息爆出三星近在商标注册方面动作频频，不仅涵盖了几个月后推出的产品，还包括像 Galaxy S25 或 Galaxy Z Fold 7 这样几乎还有两年时间才会推出的产品。\n三星不仅申请了智能戒指和 AR 眼镜等其他类别产品的商标，而且在不同国家提交了许多其他申请，其中一项确认了 Galaxy S24 将作为 AI 手机进行市场推广。'
  },
  {
    id: 2311,
    time: '2023-11-29 19:22',
    author: '财联社',
    title: '中国首个国家级“数字人存证保护平台”完成国内首个数字人存证备案',
    icon: <IconFont name='Article' size={20} color='rgb(101,176,255)'/>,
    description: '中国首个国家级“数字人存证保护平台”完成国内首个数字人存证备案\n据澎湃新闻报道，8月8日，国内首个国家级数字人存证保护平台“中国数字人”存证保护平台完成了首个产品迭代，2.0版本上线。\n本次迭代版本，主要强化了“合规审核”的模块，对于制作完成等待上线的数字人，首先由人民动漫平台进行外观合规审核，审核通过后发放“人民动漫•审核证书”，以保证数字人的形象合规合法。'
  },
  {
    id: 3312,
    time: '2023-11-19 18:27',
    author: '元力社',
    title: 'Menlo Ventures 宣布已筹集13.5亿美元新资金',
    icon: <IconFont name='Time' size={20} />,
    description: '近日，风险投资公司 Menlo Ventures 宣布已筹集13.5亿美元新资金，主要投资新一代人工智能初创公司。\nMenlo Ventures 消费和游戏合伙人 Amy Wu（前 FTX Ventures 负责人）表示，还将用这笔资金支持消费、游戏和区块链领域创始人。\nMenlo Ventures 成立于1976年，投资组合包括70多家上市公司和100多项并购，管理资产达50亿美元。到目前为止，已经支持了Abnormal、Anthropic、Cleanlab、Pinecone和Typeface等公司。\nMenlo 最近的投资包括领导 Finch 的4000万美元 B 轮融资和 Sana Labs 的3400万美元融资，以及人工智能宠儿 Anthropic 在5月份的4.5亿美元融资。\nMenlo 并不是目前唯一一家筹集超过10亿美元资金的风险投资公司。今年10月，Greylock Partners公布了两项新举措：一个是10亿美元的早期基金，另一个是Greylock Edge，该计划旨在支持创始人将想法发展成具有早期收入和产品市场契合度的公司。'
  },

]

export default data
