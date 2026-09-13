/* =============================================================
 * 国际学术会议英语与跨文化交流 —— 记忆背诵辅助模块
 * 配套 23 个考点学习页 + 全本总纲。
 *
 * 结构：const MEMORY_AIDS = { "_global": {...}, "<unitId>": { points, mnemonic, framework } }
 *   points:    背诵要点（短句，宜逐条记忆）
 *   mnemonic:  记忆口诀（顺口/联想，帮助快速回忆）
 *   framework: 知识框架（HTML 提纲，呈现层级结构）
 *
 * 说明：原书为扫描版，以下背诵要点/口诀/框架依据教材目录结构与课程考核高频点整理，
 *       作为高效记忆与背诵的脚手架。
 * ============================================================= */

const MEMORY_AIDS = {
  _global: {
    points:[
      "全书两大部分：Part I 会议英语实务（13 单元书信/演讲）+ Part II 跨文化交际理论（文化、言语交际、维度）。",
      "写作类（信函/演讲）通用结构：身份—目的—关键信息—具体请求—截止/落款；口头类：问候—点题—收束。",
      "跨文化理论三大柱：Hofstede 文化维度、Hall 高/低语境、Kluckhohn-Strodtbeck 价值取向；另记民族中心主义、刻板印象、Berry 适应四策略。",
      "礼貌原则贯穿始终：邀请/接受/婉拒/录用/退稿皆有‘致谢+原因+出路/替代’模板。",
      "国际场合两条底线：母语思维定势要悬置；赞美接受式优于谦辞。"
    ],
    mnemonic:"两大部分十三单元，写信演讲套路全；文化维度高低境，礼貌致谢留余地。",
    framework:`<ul>
      <li><b>Part I 会议英语实务</b>
        <ul><li>会前：概述/邀请/接受/婉拒/征文/录用/退稿（书信 7 类）</li>
        <li>会中：介绍/欢迎辞/开幕辞/论文宣读/问答/闭幕辞（口语 6 类）</li></ul></li>
      <li><b>Part II 跨文化交际</b>
        <ul><li>文化概论：定义(Tylor)/特征/三层次/研究领域</li>
          <li>言语交际：会前—初次接触(问候/称谓/常用语)—后续—文化负载词—分会场/问答/panel—赞美—会后</li>
          <li>理论：Hofstede 六维度 / Hall 高低语境 / Kluckhohn 取向 / 民族中心主义 / 刻板印象 / Berry 四策略</li></ul></li>
      <li><b>贯穿能力</b>：艾宾浩斯间隔复习 + 写作模板迁移 + 跨文化敏感度</li>
    </ul>`
  },

  /* ---------------- Part I ---------------- */
  u1:{points:[
      "八种集会：conference, symposium, seminar, colloquium, forum, congress, workshop, panel。",
      "conference 大、数日、主题宽；symposium 主题更窄、常附属于 conference。",
      "seminar=主讲+讨论(教学向)；colloquium=正式 seminar；forum=意见交流平台。",
      "congress=学会代表大会；workshop=动手研习；panel=多专家同台讨论。",
      "流程：CfP→审稿→邀请→接受→开幕→宣读→Q&A→panel→闭幕→合作。",
      "角色：Chair/Moderator、Keynote、Panelist、Presenter、Delegate。"
    ],mnemonic:"大会议题宽，研讨主题专；论坛交流意，大会代表权；作坊动手练，小组同台谈。",
    framework:`<ol>
      <li>会议类型：conference / symposium / seminar / colloquium / forum / congress / workshop / panel</li>
      <li>流程链：Call for Papers → Acceptance → Invitation → Opening → Presentation → Q&amp;A → Closing → Cooperation</li>
      <li>角色：主持(Chair) · 主旨(Keynote) · 嘉宾(Panelist) · 宣读者(Presenter) · 代表(Delegate)</li>
    </ol>`},
  u2:{points:[
      "邀请函六要素：称谓—身份目的—会议信息—邀请事项—截止渠道—联系落款。",
      "开头：On behalf of the Organizing Committee, I am pleased to invite you to…",
      "须写明名称、时间、地点、主题、keynote 事项、摘要截止邮箱。",
      "称谓优先 Prof./Dr.，避免 Mr./Mrs.；不可 Dr. Professor 叠用。",
      "结尾：We look forward to your favorable reply."
    ],mnemonic:"邀函六要记心间：称谓身份会信息，事项截止加落款。",
    framework:`<ol>
      <li>Salutation（正确头衔）</li>
      <li>身份与目的：On behalf of… I am pleased to invite…</li>
      <li>会议信息：name / date / venue / theme</li>
      <li>邀请事项：keynote / panel / attendance</li>
      <li>截止与渠道：deadline + submission email</li>
      <li>联系与落款：favorable reply + signature</li>
    </ol>`},
  u3:{points:[
      "接受邀请：感谢→明确接受(I am delighted to accept)→是否宣读(题名)→行程/签证需求→期待。",
      "尽早回复，便于会务安排。",
      "若宣读，务必给出 paper title。"
    ],mnemonic:"接受先谢再言喜，报题行程需求提。",
    framework:`<ol>
      <li>Thank you + delighted to accept</li>
      <li>是否宣读：I would like to present a paper titled…</li>
      <li>行程与协助：arrival date / visa / accommodation</li>
      <li>致谢与期待</li>
    </ol>`},
  u4:{points:[
      "婉拒四步：致谢认可→表达遗憾(regret)→具体理由→替代/未来参与。",
      "理由须真实得体，避免模糊推脱。",
      "留合作余地：派同事代讲或转投/再投。"
    ],mnemonic:"婉拒致谢表遗憾，理由具体替未来。",
    framework:`<ol>
      <li>Thank you + I am truly honored</li>
      <li>I regret that… (具体理由)</li>
      <li>替代：colleague presents / future edition</li>
    </ol>`},
  u5:{points:[
      "征文通知要素：会议名称届次、主办、主题与分议题、摘要格式字数、提交邮箱截止、录用通知时间。",
      "常用 sub-theme 列明征稿方向。",
      "须注明时区，留足审稿周期。"
    ],mnemonic:"征文名题分议题，格式字数截止明。",
    framework:`<ol>
      <li>Conference name / edition / date / venue / theme</li>
      <li>Sub-themes（征稿方向）</li>
      <li>Abstract: 300–500 words → email by [date]</li>
      <li>Notification of acceptance: [date]</li>
    </ol>`},
  u6:{points:[
      "录用通知：告知录用→区分摘要/全文→具体审稿意见→后续步骤与截止。",
      "minor revision 须具体指出方向。",
      "区分层级避免作者误解 session 义务。"
    ],mnemonic:"录用告知分层级，意见具体后续清。",
    framework:`<ol>
      <li>We are pleased to inform you that… has been accepted</li>
      <li>区分：abstract accepted vs full paper accepted</li>
      <li>Reviewers suggested minor revisions on…</li>
      <li>Next: registration / full paper by [date]</li>
    </ol>`},
  u7:{points:[
      "退稿：致谢→婉转未录用→客观非个人化理由→建设性出路→祝福。",
      "理由：slots limited / out of scope。",
      "鼓励 future submission / related journals，保护作者自尊。"
    ],mnemonic:"退稿致谢客观由，给出路来护自尊。",
    framework:`<ol>
      <li>Thank you for submitting…</li>
      <li>Regrettably, due to limited slots…</li>
      <li>客观理由：out of this year’s scope</li>
      <li>出路：future conferences / journals</li>
    </ol>`},
  u8:{points:[
      "介绍报告人：欢迎宣布→姓名/单位/职称→相关成就→主题预告→请出。",
      "突出‘与本次报告相关’的成就，勿罗列全部履历。",
      "收束：Please join me in welcoming…"
    ],mnemonic:"介绍嘉宾三步走：姓名单位成就点，主题预告请出前。",
    framework:`<ol>
      <li>It is my great pleasure to introduce…</li>
      <li>Name / affiliation / title</li>
      <li>Relevant achievement（贴题）</li>
      <li>Theme preview + Please welcome</li>
    </ol>`},
  u9:{points:[
      "欢迎辞：代表致欢迎→感谢各方→点明主题意义→预祝成功→转场。",
      "宜简短热情、点题，避免长篇学术论述。",
      "对高龄/高衔嘉宾优先正式头衔。"
    ],mnemonic:"欢迎致辞三句半：欢迎致谢点主题，预祝成功把场转。",
    framework:`<ol>
      <li>On behalf of… warmest welcome</li>
      <li>Thank organizers / sponsors / guests</li>
      <li>Highlight theme’s significance</li>
      <li>Wish a complete success</li>
    </ol>`},
  u10:{points:[
      "开幕辞：宣布开幕(I now declare… open)→感谢筹备→概述规模亮点→展望→再宣布。",
      "与欢迎辞区别：开幕‘宣布开始+概述议程’，欢迎‘问候致谢’。",
      "保持仪式感与高度概括，非论文宣读。"
    ],mnemonic:"开幕宣布会议开，规模亮点愿景来。",
    framework:`<ol>
      <li>I declare the conference officially open</li>
      <li>Thank preparation & supporters</li>
      <li>规模/亮点：submissions, countries</li>
      <li>Vision + 再宣布 open</li>
    </ol>`},
  u11:{points:[
      "演讲五段：开场(问候+自报家门+题名)→提纲(signposting)→主体(背景-方法-结果-讨论)→结论→致谢邀问。",
      "衔接语：First / Next / However / In summary。",
      "忌照稿宣读；图表用 As shown in Figure 1 引导；预留 Q&A。"
    ],mnemonic:"开场提纲主体结，衔接signposting；照稿大忌图引导，预留问答最得体。",
    framework:`<ol>
      <li>Opening: greet + self-intro + title</li>
      <li>Roadmap: First… Then… Finally…</li>
      <li>Body: Background → Method → Results → Discussion</li>
      <li>Conclusion + Thanks / Q&amp;A</li>
    </ol>`},
  u12:{points:[
      "Q&A 三策略：确认理解→争取时间→得体退路。",
      "未听清：Pardon? / Could you repeat? / If I understand correctly, you are asking…",
      "争取时间：That’s an interesting question, let me think.",
      "不会答：beyond the scope, discuss offline；切忌争辩或编造。"
    ],mnemonic:"问答三策记心间：确认时间退路边。",
    framework:`<ol>
      <li>Listen: Pardon? / Could you repeat?</li>
      <li>Confirm: If I understand you correctly…</li>
      <li>Buy time: That’s an interesting question…</li>
      <li>Respond: agree / partly disagree / beyond scope → offline</li>
      <li>Close: Thank you for the excellent question</li>
    </ol>`},
  u13:{points:[
      "闭幕辞：宣布收束→致谢多方(含志愿者)→总结成果→下届信息→祝福送别。",
      "应‘收束’而非开启新议题。",
      "志愿者致谢常被忽略，须包含。"
    ],mnemonic:"闭幕收束谢众人，成果下届祝福行。",
    framework:`<ol>
      <li>Bring the conference to a close</li>
      <li>Thank participants / speakers / volunteers</li>
      <li>Summarize outcomes</li>
      <li>Next edition + Wish a pleasant journey</li>
    </ol>`},

  /* ---------------- Part II ---------------- */
  c1:{points:[
      "Tylor 定义：Culture is that complex whole… acquired by a person as a member of society.",
      "文化四特征：习得性、共享性、符号性(语言为核心)、动态性。",
      "三层次：表层(食/服/礼)—中层(规范/制度)—深层(价值观/世界观)，深层是冲突根源。",
      "跨文化交际研究领域：言语、非言语、文化维度、跨文化适应。",
      "民族中心主义=以己文化为标准的评判倾向，是交际障碍。"
    ],mnemonic:"泰勒复合整体说，习得共享符号动；三层表象深价值，民族中心是障碍。",
    framework:`<ul>
      <li><b>定义</b>：Tylor — complex whole, acquired, member of society</li>
      <li><b>特征</b>：learned / shared / symbolic / dynamic</li>
      <li><b>三层次</b>：surface → middle → deep(values=冲突根源)</li>
      <li><b>研究领域</b>：verbal / nonverbal / dimensions / acculturation</li>
    </ul>`},
  c2:{points:[
      "言语跨文化交际主线：会前准备→初次接触→后续寒暄→宣讲→问答→panel→赞美→会后合作。",
      "寒暄中性话题：天气/旅行/研究兴趣/城市；避宗教/收入/政治。",
      "文化负载词：dragon→loong；red 中西异义；individualism 褒贬异。",
      "赞美：西方接受式(Thank you)，东亚谦辞；国际场合建议接受式。",
      "会后跟进：1–2 周内、个性化、给具体下一步。"
    ],mnemonic:"会前准备接触寒，宣讲问答panel赞；负载词与赞美异，会后跟进个性化。",
    framework:`<ol>
      <li>Preparatory work（研究目标文化/提升英语）</li>
      <li>First encounter：greetings / salutation / useful expressions</li>
      <li>Later encounters：small talk（中性话题）</li>
      <li>Paper sessions / Q&amp;A / Panel</li>
      <li>Culturally loaded words & Compliments</li>
      <li>Further cooperation（跟进邮件）</li>
    </ol>`},
  c221:{points:[
      "初次见面：Nice to meet you! / Good to see you. 久别：Good to see you again.",
      "不宜直接问 What’s your name?（生硬）。",
      "肢体接触先观察对方，握手较通用。"
    ],mnemonic:"初见nice to meet，姓名莫先问。",
    framework:`<ul>
      <li>First meeting: Nice to meet you!</li>
      <li>Reunion: Good to see you again.</li>
      <li>避免：What’s your name?（生硬）</li>
      <li>肢体：先观察，握手通用</li>
    </ul>`},
  c222:{points:[
      "博士 Dr.；正副教授 Prof.；性别/婚姻未知 Ms.；优先学术头衔。",
      "不可 Dr. Professor 叠用。",
      "Mrs./Miss 正被 Ms. 取代（中性、不显婚姻）。"
    ],mnemonic:"博士Dr教授Prof，Ms中性莫叠用。",
    framework:`<ul>
      <li>Dr.（博士）/ Prof.（正副教）/ Ms.（未知）</li>
      <li>优先学术头衔 &gt; Mr./Mrs.</li>
      <li>禁忌：Dr. Professor X（叠用）</li>
    </ul>`},
  c223:{points:[
      "打断：Sorry to interrupt, but… / May I add something? / Excuse me, may I come in here?",
      "征求意见：What do you think of my presentation?（比 Do you like… 得体）。",
      "未听清：Pardon me? / Could you repeat that?",
      "禁忌：Stop talking / Listen to me（威胁面子）。"
    ],mnemonic:"打断礼貌三句式，征询what do you think。",
    framework:`<ul>
      <li>Interrupt：Sorry to interrupt, but… / May I add something?</li>
      <li>Opinion：What do you think of my presentation?</li>
      <li>Not catch：Pardon me? / Could you repeat?</li>
      <li>禁忌：Stop talking / Listen to me</li>
    </ul>`},
  c24:{points:[
      "文化负载词：语义受文化塑造，直译易丢内涵（传 connotation 非仅 denotation）。",
      "例：dragon(祥瑞vs凶兽→loong)、red(喜庆vs危险)、individualism(褒vs贬)、face/面子。",
      "假朋友：actual≠现在的；eventually≠立刻；sympathetic≠同情的。"
    ],mnemonic:"负载词传内涵意，龙用loong红异义；假朋友要警惕，actual非现在。",
    framework:`<ul>
      <li><b>概念</b>：culturally loaded = connotation 受文化塑造</li>
      <li><b>举例</b>：dragon→loong / red / individualism / face</li>
      <li><b>假朋友</b>：actual, eventually, sympathetic</li>
    </ul>`},
  c28:{points:[
      "赞美回应：西方直接接受(Thank you)，东亚谦辞(No, not at all)。",
      "国际场合建议接受式，避免被读成不自信/虚伪。",
      "适度接受=跨文化得体表现。"
    ],mnemonic:"西接东辞面子异，国际场合接受宜。",
    framework:`<ul>
      <li>English-speaking：accept directly (Thank you)</li>
      <li>East Asian：deflect (No, not at all)</li>
      <li>国际场合：采用接受式</li>
    </ul>`},
  c29:{points:[
      "会后跟进邮件：个性化提及会议交集→重申合作点→具体下一步(共享论文/约会议)。",
      "时机：会后 1–2 周内。",
      "避免群发腔，保持专业简洁。"
    ],mnemonic:"会后跟进提交集，具体下一步不群发。",
    framework:`<ol>
      <li>Thank again for the discussion at [conf]</li>
      <li>Reiterate collaboration point</li>
      <li>Next step：share draft / video call</li>
      <li>1–2 周内、个性化</li>
    </ol>`},
  c3:{points:[
      "Hofstede 六维度：权力距离、个人/集体主义、男性化/女性化、不确定性规避、长期/短期导向、放纵/克制。",
      "Hofstede 定义：the collective programming of the mind（集体心理程序）。",
      "Hall：高语境(含蓄/重关系) ↔ 低语境(直接/重清晰)；单向时间(准时/计划) ↔ 多向时间(并行/关系优先)。",
      "Kluckhohn & Strodtbeck 六取向：环境、时间、人性、活动、责任、空间。",
      "Berry 四策略：同化 / 分离 / 整合(最健康) / 边缘化。",
      "使用原则：作参考地图而非刻板标签；群体均值不可套个体(生态谬误)。"
    ],mnemonic:"霍氏六维权个男，不确长放纵；霍尔高低境，单向多向行；克氏六取向，贝里四适从。",
    framework:`<ol>
      <li>Hofstede：Power Distance · Individualism · Masculinity · Uncertainty Avoidance · Long-term · Indulgence</li>
      <li>Hall：High/Low Context · Monochronic/Polychronic</li>
      <li>Kluckhohn &amp; Strodtbeck：Environment · Time · Human Nature · Activity · Responsibility · Space</li>
      <li>Berry：Assimilation / Separation / Integration / Marginalization</li>
      <li>局限：样本窄、维度抽象重叠、无情境、生态谬误</li>
    </ol>`},
  c4:{points:[
      "案例分析四步：表层(行为)—中层(规范)—深层(价值观)—启示(如何调适)。",
      "案例1 筷子广告：文化符号脱语境地戏谑 = 民族中心主义；对策=前置本土审核+真诚致歉+长期在地化。",
      "案例2《喜福会》：母女冲突=高/低语境 + 集体/个人主义的双重错位，非纯语言问题。",
      "案例3 媒体：框架(选择/强调/排除)、标签污名化、脱离语境图、双重标准、确认偏误。",
      "案例4 沉默与眼神：高语境中沉默=思考/尊重，低语境误读为不投入。",
      "案例5 赞美与面子：国际场合用‘接受+致谢+转入学术内容’折中回应。"
    ],mnemonic:"表规深启四步走；筷子喜福媒体沉默，谦辞赞美折中收。",
    framework:`<ol>
      <li>分析框架：Surface → Middle → Deep → Implication</li>
      <li>案例：① 筷子广告 ②《喜福会》 ③ 媒体框架/双重标准 ④ 沉默与眼神 ⑤ 赞美与面子</li>
      <li>通用对策：尊重符号原义 · 前置文化审核 · 事实与数据回应 · 区分对象 · 长期修复信任</li>
    </ol>`}
};
