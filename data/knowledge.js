/* =============================================================
 * 国际学术会议英语与跨文化交流 —— 知识点 / 考点数据
 * 来源：骆洪《国际学术会议英语与跨文化交流》(云南大学出版社, 研究生教学用书)
 *       官方目录 + 网络补充练习/真题 + 学科通用规范
 * 说明：原书为扫描版(无文字层)，本库依据官方目录结构 + 学术会议英语与跨文化交际
 *       通用规范 + 已检索到的网络真题整理而成，作为学习系统权威知识骨架。
 * ============================================================= */

const BOOK_META = {
  title: "国际学术会议英语与跨文化交流",
  titleEn: "English for International Academic Conference and Intercultural Communication",
  author: "骆洪",
  publisher: "云南大学出版社",
  pages: 278,
  note: "研究生教学用书 · 课程考核覆盖 Part I 会议英语实务 与 Part II 跨文化交际理论"
};

/* 每个考点节点：
 * id, parent(思维导图父节点), title(英文/原书标题), cn(中文名),
 * summary(一句话考点), tags(考查方向),
 * content: [{h, body}], templates:[{label,text}], pitfalls:[...], hasPage:true
 */
const KNOWLEDGE = [
  /* ---------------- Part I ---------------- */
  { id:"p1", parent:null, title:"Part I  English for International Academic Conference", cn:"第一部分 国际学术会议英语", level:0, hasPage:false,
    summary:"会议全流程的英语书面与口头表达", tags:["写作","口语"], content:[] },

  { id:"u1", parent:"p1", title:"Unit 1  International Academic Conference: an Overview", cn:"国际学术会议概述", level:1, hasPage:true,
    summary:"辨识会议类型与学术会议基本流程、角色分工", tags:["词汇辨析","概念"],
    content:[
      {h:"1. 会议类型辨析（核心考点）", body:"<p>学术语境下常见集会类型需精准区分：</p><ul>"+
        "<li><b>Conference</b>：正式大型会议，常持续数日，围绕某一专业主题聚集各国学者（international conference 即跨国参与者）。</li>"+
        "<li><b>Symposium</b>：专题学术讨论会，主题比 conference 更窄、规模常更小；大型 conference 可下设若干 satellite symposium。</li>"+
        "<li><b>Seminar</b>：以主讲人报告+听众讨论为主（lecturing plus discussion），偏教学/研讨。</li>"+
        "<li><b>Colloquium</b>：seminar 的正式说法，指大型学术研讨会，邀约特定领域专家。</li>"+
        "<li><b>Forum</b>：公开交流意见的平台型会议（如 '99 Forum on Asian Economics）。</li>"+
        "<li><b>Congress</b>：规模极大、常由学会主办的周期性代表大会（如 World Congress）。</li>"+
        "<li><b>Workshop</b>：侧重动手/小组协作的研习会；<b>Panel</b>：多名专家同台的小组讨论（见 u12/c27）。</li></ul>"},
      {h:"2. 学术会议基本流程", body:"<p>典型流程：<b>Call for Papers</b>（征文）→ 摘要审稿 <b>Acceptance/Rejection</b> → 发送 <b>Letter of Invitation</b> → 参会确认 <b>Acceptance of Invitation</b> → <b>Opening Ceremony</b>（欢迎辞/开幕辞）→ <b>Paper Presentation</b>（宣读论文）→ <b>Q&amp;A Session</b> → <b>Panel/分论坛</b> → <b>Closing Speech</b>（闭幕辞）→ 会后 <b>Further Cooperation</b>。</p>"},
      {h:"3. 关键角色", body:"<p><b>Chair/Moderator</b>（主持人，负责组织流程）、<b>Keynote speaker</b>（主旨/大会报告人）、<b>Panelist</b>（panel 嘉宾）、<b>Presenter</b>（论文宣读人）、<b>Delegate/Participant</b>（与会代表）。</p>"}
    ],
    templates:[
      {label:"定义句式",text:"A conference is a formal meeting, often lasting for a few days, organized on a particular subject to bring together people who have a shared professional interest."},
      {label:"规模比较",text:"A symposium is usually narrower and more specific in topic range than a conference; sometimes a conference includes several simultaneous symposiums."}
    ],
    pitfalls:["易混淆 symposium 与 seminar：前者偏‘专家专题研讨’，后者偏‘主讲+讨论’的教学研讨。","congress 多指学会代表大会，不可与 conference 混用。"] },

  { id:"u2", parent:"p1", title:"Unit 2  Letter of Invitation", cn:"邀请函", level:1, hasPage:true,
    summary:"撰写正式会议邀请函：结构、要素与礼貌用语", tags:["写作","书信格式"],
    content:[
      {h:"1. 邀请函结构", body:"<p>① 称呼（Dear Prof. / Dr. / Mr. / Ms. + 姓氏）；② 表明身份与目的（We cordially invite you to…）；③ 会议关键信息（名称、时间、地点、主题）；④ 邀请事项（作大会报告/主持分论坛/参会）；⑤ 关键日期与提交方式（abstract deadline, submission email）；⑥ 联系方式与落款。</p>"},
      {h:"2. 常用表达", body:"<ul><li>We cordially invite you to attend / to deliver a keynote speech at…</li><li>The conference will be held at [venue], [city], from [date] to [date].</li><li>The theme of this year's conference is…</li><li>We would appreciate it if you could confirm your participation by [date].</li></ul>"}
    ],
    templates:[
      {label:"开头",text:"On behalf of the Organizing Committee, I am pleased to invite you to the [Nth] International Conference on [Topic]."},
      {label:"落款",text:"We look forward to your favorable reply.  Sincerely yours, [Chair of Organizing Committee]"}
    ],
    pitfalls:["邀请函应用正式称谓，避免 Mr./Mrs. 误用学者头衔（优先 Prof./Dr.）。","须明确截止日期与提交渠道，否则失礼且低效。"] },

  { id:"u3", parent:"p1", title:"Unit 3  Acceptance of an Invitation", cn:"接受邀请", level:1, hasPage:true,
    summary:"回复接受邀请并说明是否提交论文", tags:["写作","书信格式"],
    content:[
      {h:"1. 接受邀请结构", body:"<p>① 感谢邀请；② 明确接受（I am delighted to accept…）；③ 说明是否宣读论文（若宣读，给出题名）；④ 确认行程/需要的信息（签证、住宿）；⑤ 再次致谢与期待。</p>"},
      {h:"2. 常用表达", body:"<ul><li>Thank you very much for your kind invitation to… I am delighted to accept.</li><li>I would like to present a paper entitled “…”</li><li>I look forward to seeing you and other colleagues in [city].</li></ul>"}
    ],
    templates:[
      {label:"接受+宣读",text:"I am honored to accept your invitation and would like to present a paper titled “Cross-Cultural Pragmatics in Academic Discourse”."}
    ],
    pitfalls:["接受邀请时应尽早回复，并明确是否作报告，便于会务安排。","若需签证/住宿协助，应在回函中一并提出。"] },

  { id:"u4", parent:"p1", title:"Unit 4  Declining an Invitation to Speak", cn:"婉拒发言邀请", level:1, hasPage:true,
    summary:"礼貌谢绝作报告：致歉、给理由、留合作余地", tags:["写作","委婉表达"],
    content:[
      {h:"1. 婉拒结构", body:"<p>① 感谢邀请与认可；② 表达遗憾（I regret that…）；③ 给出真实、得体的理由（行程冲突/健康/已安排）；④ 肯定会议价值；⑤ 提供替代（派同事代讲/提交论文/未来参会）；⑥ 致歉与祝福。</p>"},
      {h:"2. 常用表达", body:"<ul><li>I am truly honored by your invitation, but I regret that a prior commitment prevents me from…</li><li>Unfortunately, I will be unable to attend due to…</li><li>I hope to have the opportunity to participate in future editions of the conference.</li></ul>"}
    ],
    templates:[
      {label:"婉拒模板",text:"Thank you for the kind invitation. I very much regret that a teaching commitment in that period makes it impossible for me to deliver the speech. I have asked my colleague Dr. X to present our joint work instead."}
    ],
    pitfalls:["婉拒须给具体理由，避免模糊推脱显得不诚恳。","不宜完全关闭合作之门，应留未来参与余地。"] },

  { id:"u5", parent:"p1", title:"Unit 5  Call for Papers", cn:"征文通知", level:1, hasPage:true,
    summary:"撰写征文启事：主题、范围、摘要提交规范", tags:["写作","学术规范"],
    content:[
      {h:"1. 征文通知要素", body:"<p>会议名称与届次、主办单位、主题与分议题（topics / sub-themes）、摘要字数/格式要求、提交邮箱与截止日期、录用与通知时间、联系方式。常用 <b>sub-theme</b> 列明征稿方向。</p>"},
      {h:"2. 常用表达", body:"<ul><li>The Organizing Committee invites submissions of original abstracts on the following themes:</li><li>Abstracts (300–500 words) should be sent to [email] by [date].</li><li>Notification of acceptance will be sent by [date].</li></ul>"}
    ],
    templates:[
      {label:"征文开头",text:"The [Nth] International Conference on [Topic] cordially invites scholars worldwide to submit abstracts for paper presentation."}
    ],
    pitfalls:["须明确摘要格式与字数，避免作者反复询问。","截止日期应留足审稿周期，并注明时区。"] },

  { id:"u6", parent:"p1", title:"Unit 6  Acceptance of a Paper or an Abstract", cn:"论文/摘要录用通知", level:1, hasPage:true,
    summary:"撰写录用通知：告知结果、审稿意见与后续事项", tags:["写作","学术规范"],
    content:[
      {h:"1. 录用通知结构", body:"<p>① 告知录用（We are pleased to inform you that your abstract… has been accepted）；② 简要反馈审稿意见（minor revision suggested）；③ 说明后续步骤（注册、全文提交、汇报安排）；④ 截止与联系。</p>"},
      {h:"2. 常用表达", body:"<ul><li>We are pleased to inform you that your paper “…” has been accepted for presentation.</li><li>Reviewers suggested minor revisions regarding…</li><li>Please complete your registration by [date].</li></ul>"}
    ],
    templates:[
      {label:"录用",text:"Congratulations! Your abstract has been accepted for the parallel session on [theme]."}
    ],
    pitfalls:["录用通知应区分‘全文录用’与‘摘要录用’，避免作者误解。","若需修改，应具体指出方向而非泛泛。"] },

  { id:"u7", parent:"p1", title:"Unit 7  Rejection of a Paper", cn:"退稿通知", level:1, hasPage:true,
    summary:"礼貌退稿：说明理由、保护作者自尊、鼓励再投", tags:["写作","委婉表达"],
    content:[
      {h:"1. 退稿结构", body:"<p>① 感谢投稿与付出；② 婉转告知未录用；③ 给出客观理由（超出主题范围/名额有限/与已录用重复）；④ 肯定价值并鼓励（欢迎 future submission / 转投他刊）；⑤ 祝福。</p>"},
      {h:"2. 常用表达", body:"<ul><li>Thank you for submitting your paper “…” to our conference.</li><li>Regrettably, due to the limited number of slots, we are unable to include your paper this year.</li><li>We encourage you to submit to future conferences / related journals.</li></ul>"}
    ],
    templates:[
      {label:"退稿",text:"While your work is of interest, it falls outside the main scope of this year's themes, and we are unable to accommodate it given the constraint on session length."}
    ],
    pitfalls:["退稿理由须客观、非个人化，避免打击作者。","应提供建设性出路（转投/再投），体现学术共同体善意。"] },

  { id:"u8", parent:"p1", title:"Unit 8  Introducing a Speaker", cn:"介绍嘉宾/报告人", level:1, hasPage:true,
    summary:"撰写与口头介绍报告人：身份、成就、引出", tags:["口语","礼仪"],
    content:[
      {h:"1. 介绍结构", body:"<p>① 欢迎并宣布下一位报告人；② 姓名、单位与职称；③ 学术背景与主要成就（代表性论文/奖项/职务）；④ 报告主题预告；⑤ 请出报告人（Please welcome / Let's welcome…）。</p>"},
      {h:"2. 常用表达", body:"<ul><li>It is my great pleasure to introduce our next speaker, Prof. X of [University].</li><li>Prof. X is widely known for her pioneering work on…</li><li>Please join me in welcoming Prof. X.</li></ul>"}
    ],
    templates:[
      {label:"介绍",text:"Our next speaker needs no introduction: a leading scholar in [field], author of over 100 papers, and today he will share his latest findings on…"}
    ],
    pitfalls:["介绍应突出与本次报告相关的成就，而非罗列全部履历。","避免过度吹捧，保持学术克制与真诚。"] },

  { id:"u9", parent:"p1", title:"Unit 9  Welcome Speech", cn:"欢迎辞", level:1, hasPage:true,
    summary:"开幕欢迎辞：问候、点明意义、表达祝愿", tags:["口语","演讲"],
    content:[
      {h:"1. 欢迎辞结构", body:"<p>① 代表主办方致欢迎（On behalf of…, I extend my warmest welcome）；② 感谢各方（嘉宾、组织者、赞助方）；③ 点明会议主题与意义；④ 预祝成功（wish the conference a complete success）；⑤ 转入下一项。</p>"},
      {h:"2. 常用表达", body:"<ul><li>On behalf of the Organizing Committee, I would like to extend our warmest welcome to all distinguished guests and participants.</li><li>It is a great honor to gather so many leading minds in [field].</li></ul>"}
    ],
    templates:[
      {label:"欢迎辞",text:"A very good morning to you all. On behalf of [host institution], I am honored to welcome you to the [Nth] International Conference on [Topic]."}
    ],
    pitfalls:["欢迎辞宜简短、热情、点题，避免长篇学术论述。","注意中外称谓差异，对高龄或高衔嘉宾优先用正式头衔。"] },

  { id:"u10", parent:"p1", title:"Unit 10  Speech at the Opening Ceremony", cn:"开幕辞", level:1, hasPage:true,
    summary:"宣布开幕、概述议程与愿景", tags:["口语","演讲"],
    content:[
      {h:"1. 开幕辞结构", body:"<p>① 宣布会议开幕（I now declare the conference open）；② 感谢筹备者与支持单位；③ 概述会议目标、规模与亮点；④ 展望领域发展与会议贡献；⑤ 再次欢迎并预祝圆满。</p>"},
      {h:"2. 常用表达", body:"<ul><li>I now have the pleasure of declaring the [Nth] International Conference on [Topic] officially open.</li><li>This year we receive over [N] submissions from [M] countries.</li></ul>"}
    ],
    templates:[
      {label:"开幕",text:"It is my privilege to declare the conference open. Over the next three days, we will explore how [theme] reshapes our discipline."}
    ],
    pitfalls:["开幕辞与欢迎辞不同：前者‘宣布开始’并概述议程，后者侧重‘欢迎’。","应区别于论文宣读，保持仪式感与高度概括。"] },

  { id:"u11", parent:"p1", title:"Unit 11  Conference Presentation", cn:"论文宣读 / 学术演讲", level:1, hasPage:true,
    summary:"学术汇报结构、衔接语与表达技巧", tags:["口语","演讲","高频考点"],
    content:[
      {h:"1. 汇报基本结构（IMRaD 思路）", body:"<p>① <b>开场</b>：问候、自报家门与题名（Good morning. I'm [name] from [uni]. My talk is titled…）；② <b>提纲</b>：用 signposting 预告结构（I'll first…, then…, finally…）；③ <b>主体</b>：背景—方法—结果—讨论；④ <b>结论</b>：总结要点；⑤ <b>致谢</b>：Thank you / I'm happy to take questions.</p>"},
      {h:"2. 衔接与指示语（signposting）", body:"<ul><li>顺序：First / To begin with / Next / Moving on to / Finally</li><li>强调：I'd like to highlight / The key point is</li><li>举例：For instance / A case in point is</li><li>转折：However / In contrast</li><li>总结：In summary / To conclude</li></ul>"},
      {h:"3. 表达技巧", body:"<p>控制语速、与听众眼神交流；图表用 ‘As shown in Figure 1…’ 引导；复杂处可放慢并重复关键词；预留 Q&amp;A 时间。</p>"}
    ],
    templates:[
      {label:"开场",text:"Good [morning/afternoon]. I am [Name] from [Institution]. It is a privilege to present our recent work titled “…”."},
      {label:"提纲",text:"My presentation has three parts: first the background, then our method, and finally the main findings."}
    ],
    pitfalls:["念稿（read verbatim）是大忌，应讲而非读。","signposting 缺失会让听众迷失结构，务必使用衔接语。","超时问题突出，需演练并预留 Q&A。" ] },

  { id:"u12", parent:"p1", title:"Unit 12  Question and Answer (Q&A) Session", cn:"提问与应答环节", level:1, hasPage:true,
    summary:"礼貌接招：听懂问题、争取时间、得体回应", tags:["口语","交际策略","高频考点"],
    content:[
      {h:"1. 听取问题", body:"<p>未听清可礼貌请求重复：<i>Pardon me? / Could you repeat the question? / Sorry, I didn't catch that.</i> 听懂后先确认：<i>If I understand you correctly, you are asking…</i></p>"},
      {h:"2. 争取时间（buy time）", body:"<p><i>That's a very interesting question. Let me think for a moment.</i> / <i>Well, I'm glad you raised that.</i> 避免沉默尴尬。</p>"},
      {h:"3. 回应策略", body:"<ul><li>同意补充：<i>Exactly. In addition…</i></li><li>部分不同意：<i>I see your point, but from our data…</i></li><li>不会答：<i>That's beyond the scope of this study; I'd be happy to discuss offline.</i></li><li>质疑：<i>Could you clarify what you mean by…?</i></li></ul>"},
      {h:"4. 结束", body:"<p><i>Thank you for the excellent question.</i> 控制单个问题时间，必要时引导至会后交流。</p>"}
    ],
    templates:[
      {label:"接招",text:"That's an insightful question. If I understand correctly, you are asking whether our method generalizes to low-resource settings."}
    ],
    pitfalls:["切忌当场与提问者争辩或 defensive；学术质疑应视为对话。","不要编造答案，‘转线下讨论’是得体退路。","文化上，部分学者直白批评方案，需以‘感谢指正’化解而非情绪化。" ] },

  { id:"u13", parent:"p1", title:"Unit 13  Closing Speech", cn:"闭幕辞", level:1, hasPage:true,
    summary:"闭幕辞：致谢、总结、展望与送别", tags:["口语","演讲"],
    content:[
      {h:"1. 闭幕辞结构", body:"<p>① 宣布接近尾声；② 感谢多方（组织者、志愿者、讲者、听众）；③ 总结会议成果（投稿数、亮点报告、共识）；④ 宣布下届信息（如有）；⑤ 祝福与送别（wish you a safe journey）。</p>"},
      {h:"2. 常用表达", body:"<ul><li>Now I'd like to bring this memorable conference to a close.</li><li>On behalf of the committee, I thank every participant for making this event a success.</li><li>I wish you all a pleasant journey home.</li></ul>"}
    ],
    templates:[
      {label:"闭幕",text:"It is time to conclude. We leave with new collaborations and fresh ideas, and we look forward to meeting again at the next edition."}
    ],
    pitfalls:["闭幕辞应‘收束’而非开启新议题。","对志愿者与幕后人员的致谢常被忽略，须包含。" ] },

  /* ---------------- Part II ---------------- */
  { id:"p2", parent:null, title:"Part II  Intercultural Communication and International Academic Conference", cn:"第二部分 跨文化交际与国际学术会议", level:0, hasPage:false,
    summary:"文化、跨文化交际理论及其在会议中的应用", tags:["理论","案例分析"], content:[] },

  { id:"c1", parent:"p2", title:"1. Culture and Intercultural Communication", cn:"文化概论与跨文化交际", level:1, hasPage:true,
    summary:"文化定义/特征、跨文化交际的重要性与研究领域", tags:["理论","概念","高频考点"],
    content:[
      {h:"1.1 Overview 概述", body:"<p>跨文化交际（Intercultural Communication）指不同文化背景者之间的互动。国际学术会议本身就是跨文化交际场域：中国学者以英语为工作语言与他国学者交流，须规避母语思维定势，提升表达效度。</p>"},
      {h:"1.2 Culture 文化", body:"<p><b>定义</b>：Tylor 经典定义——文化是一个复合整体，包括知识、信仰、艺术、道德、法律、习俗以及人作为社会成员所获得的其他能力与习惯。<b>特征</b>：习得性（learned, not innate）、共享性（shared）、符号性（symbolic, 语言为核心）、动态性（dynamic, 随时代演变）。<b>层次</b>：表层（食物/服饰/礼仪）—中层（规范/制度）—深层（价值观/世界观）。</p>"},
      {h:"1.3 Intercultural Communication", body:"<p><b>1.3.1 重要性</b>：全球化下学术合作跨越国界，文化误读会导致合作失败；理解差异是有效交流前提。<br><b>1.3.2 文化的影响</b>：价值观、信仰、社会规范、语言深刻影响交际方式与意义建构。<br><b>1.3.3 研究领域</b>：言语交际（verbal）、非言语交际（nonverbal）、文化维度理论、跨文化适应（acculturation）等。</p>"}
    ],
    templates:[
      {label:"文化定义",text:"Culture is that complex whole which includes knowledge, belief, art, morals, law, custom, and any other capabilities acquired by a person as a member of society. (E. Tylor)"}
    ],
    pitfalls:["文化是‘习得’而非‘遗传’，常考辨析。","文化三层次常作为案例分析框架：表层差异易见，深层价值观差异才是冲突根源。" ] },

  { id:"c2", parent:"p2", title:"2. Verbal Intercultural Communication in the Context of IAC", cn:"会议情境下的言语跨文化交际", level:1, hasPage:true,
    summary:"会前准备、初次接触、寒暄称谓、文化负载词、分会场与panel等", tags:["理论","实务","高频考点"],
    content:[
      {h:"2.1 Preparatory Work 会前准备", body:"<p>研究目标文化（习俗、禁忌、沟通风格）；提升英语与多模态演示能力；熟悉会议议程（agenda）；准备名片（name card）；了解目的地文化礼仪与着装规范。</p>"},
      {h:"2.2 Communication at the First Encounter 初次接触", body:"<p>含 2.2.1 问候（Greetings）、2.2.2 称谓（Salutation，见 c222）、2.2.3 最常用表达（见 c223）。初次见面用 <i>Nice to meet you</i> 而非直接问姓名。</p>"},
      {h:"2.3 Encounters Later on 后续接触", body:"<p>闲聊（small talk）建立融洽关系；话题宜中性（天气、旅行、研究兴趣），避免宗教、收入、政治等敏感话题。</p>"},
      {h:"2.4 Culturally Loaded Words 文化负载词", body:"<p>词在不同文化中承载不同情感/内涵：如 <i>dragon</i>（西方‘凶兽’ vs 中国‘祥瑞/loong’）、<i>red</i>（西方‘危险/赤字’ vs 中国‘喜庆’）、<i>individualism</i>（西方褒义‘独立’ vs 部分语境贬义）、<i>face/面子</i>。翻译与表达须注意‘假朋友’（false friends）。</p>"},
      {h:"2.5 Paper Sessions 论文宣讲场合", body:"<p>分会场（parallel session）中需注意时间控制、与主持人配合、 audience 文化背景差异下的措辞。</p>"},
      {h:"2.6 Q&A Session", body:"<p>跨文化下的提问风格差异：部分文化直率质疑，部分文化含蓄；回应须兼顾面子与学术严谨（见 u12）。</p>"},
      {h:"2.7 Panel Session", body:"<p>小组论坛：多位 panelist 围绕主题对话，moderator 控场，强调观点交锋与共识，须兼顾轮流发言与相互尊重。</p>"},
      {h:"2.8 Compliments 赞美", body:"<p>中西对赞美反应不同：英语文化常直接接受（Thank you），东亚文化常谦逊推辞（No, not at all）。跨文化场合宜入乡随俗、避免过度自贬。</p>"},
      {h:"2.9 Further Cooperation 会后合作", body:"<p>会后及时致谢邮件、跟进合作意向、维护学术网络（networking）；邮件须明确、礼貌、提及会议交集。</p>"}
    ],
    templates:[
      {label:"会后跟进",text:"It was a pleasure discussing [topic] with you at [conference]. I'd like to follow up on our idea of collaborating on…"}
    ],
    pitfalls:["文化负载词是翻译/写作高频失分点，须区分 denotation 与 connotation。","赞美回应差异体现‘面子’文化，国际场合建议采用接受式以契合对方预期。" ] },

  { id:"c221", parent:"c2", title:"2.2.1 Greetings", cn:"问候", level:2, hasPage:true,
    summary:"国际会议中的得体问候与开场寒暄", tags:["口语","交际"],
    content:[
      {h:"得体问候", body:"<p>初次见面：<i>Nice to meet you!</i> / <i>Good to see you.</i> 久别重逢：<i>Good to see you again.</i> 非正式场合可加 <i>How are you? / How was your trip?</i> 但初次不宜直接问 <i>What's your name?</i>（显得生硬）。</p>"}
    ],
    templates:[
      {label:"问候",text:"Nice to meet you! I'm [Name] from [University]. I really enjoyed your paper on [topic]."}
    ],
    pitfalls:["初次见面避免过于私人的问题。","不同文化对肢体接触（握手/贴面）接受度不同，观察对方再行动。" ] },

  { id:"c222", parent:"c2", title:"2.2.2 Salutation", cn:"称谓", level:2, hasPage:true,
    summary:"学术头衔的正确使用（Prof./Dr./Mr./Ms.）", tags:["写作","礼仪","高频考点"],
    content:[
      {h:"称谓规范", body:"<p>有博士学位用 <b>Dr.</b>；正副教授用 <b>Prof.</b>；不确定性别/婚姻用 <b>Ms.</b>；男性用 <b>Mr.</b>。学术邮件与信函优先用学术头衔而非 Mr./Mrs.。<b>不可</b>将 Dr. 与 Prof. 叠用（避免 Dr. Professor X）。</p>"}
    ],
    templates:[
      {label:"书信称呼",text:"Dear Prof. Smith, / Dear Dr. Zhang,"}
    ],
    pitfalls:["中文‘先生/女士’直译 Mr./Ms. 在学术语境偏随意，优先 Prof./Dr.。","已婚/未婚之分（Mrs./Miss）在英文正式信函中正被 Ms. 取代。" ] },

  { id:"c223", parent:"c2", title:"2.2.3 The Most Useful Expressions", cn:"最常用表达", level:2, hasPage:true,
    summary:"会议交际高频句型集（请求/赞同/打断/致谢/澄清）", tags:["口语","句型"],
    content:[
      {h:"高频场景句型", body:"<ul>"+
        "<li>请求意见：<i>What do you think of my presentation?</i>（比 Do you like… 更得体）</li>"+
        "<li>表达赞同：<i>That's right. / I couldn't agree more.</i></li>"+
        "<li>礼貌打断：<i>Sorry to interrupt, but… / May I add something?</i></li>"+
        "<li>未听清：<i>Pardon me? / Could you repeat that?</i></li>"+
        "<li>需要思考：<i>Give me a minute, please.</i></li>"+
        "<li>致谢听众：<i>Thank you for your attention / for listening.</i></li></ul>"}
    ],
    templates:[
      {label:"打断",text:"Excuse me, may I come in here? I'd like to add a point about…"}
    ],
    pitfalls:["‘Stop talking / Listen to me’ 在会议中极不礼貌。","‘That's a hard question’ 只评价不回应，应接 ‘Let me think’。" ] },

  { id:"c24", parent:"c2", title:"2.4 Culturally Loaded Words and Expressions", cn:"文化负载词与表达", level:2, hasPage:true,
    summary:"识别文化负载词、假朋友与跨文化误译", tags:["翻译","理论","高频考点"],
    content:[
      {h:"概念与举例", body:"<p><b>文化负载词</b>：语义受特定文化深刻塑造、直译易丢失内涵的词。<b>假朋友（false friends）</b>：形近但义异的词（如 actual 非‘现在的’而是‘实际的’；eventually 非‘立刻’而是‘最终’）。</p><p>典型：</p><ul>"+
        "<li>dragon → 中国‘龙/祥瑞’ vs 西方‘邪恶巨兽’（对外宜用 loong）</li>"+
        "<li>red → 中国‘喜庆/吉祥’ vs 西方‘危险/负债’</li>"+
        "<li>individualism → 西方‘独立自强（褒）’ vs 部分东亚语境‘个人主义（贬）’</li>"+
        "<li>face/面子 → 东亚关系本位文化核心概念</li></ul>"}
    ],
    templates:[
      {label:"说明",text:"The word ‘dragon’ carries positive connotations in Chinese culture but is often negative in the West; thus ‘loong’ is preferred in international communication."}
    ],
    pitfalls:["文化负载词翻译须传递 connotation 而非仅 denotation。","假朋友是阅读/写作常见陷阱，须结合语境判断。" ] },

  { id:"c28", parent:"c2", title:"2.8 Compliments", cn:"赞美与回应", level:2, hasPage:true,
    summary:"跨文化赞美接受/谦拒差异", tags:["交际","理论"],
    content:[
      {h:"赞美回应差异", body:"<p>英语文化倾向直接接受：<i>Thank you, that's very kind of you.</i> 东亚文化倾向谦逊推辞：<i>No, not at all / You flatter me.</i> 在国际学术场合，建议采用接受式以契合对方预期，避免过度自贬造成尴尬。</p>"}
    ],
    templates:[
      {label:"接受赞美",text:"Thank you. I'm glad you found the approach useful."}
    ],
    pitfalls:["在英语文化中将谦辞误解为‘不自信’或‘虚伪’。","适度接受赞美是跨文化得体表现。" ] },

  { id:"c29", parent:"c2", title:"2.9 Further Cooperation after the Conference", cn:"会后合作跟进", level:2, hasPage:true,
    summary:"会后致谢、合作意向邮件与学术网络维护", tags:["写作","实务"],
    content:[
      {h:"会后跟进", body:"<p>会议结束 1–2 周内发感谢/跟进邮件：提及会议交集、重申合作点、给出下一步（共享论文/约视频会议）。保持专业、简洁、具体。</p>"}
    ],
    templates:[
      {label:"跟进邮件",text:"Dear Prof. X, Thank you again for the inspiring discussion at [conf]. I'd like to share our draft and explore a joint submission on [topic]. Best regards, [Name]"}
    ],
    pitfalls:["跟进过迟或过于宽泛会降低转化率。","邮件须个性化提及会议交集，避免群发感。" ] },

  { id:"c3", parent:"p2", title:"3. Theories of Intercultural Communication", cn:"跨文化交际理论专题", level:1, hasPage:true,
    summary:"Hofstede 文化维度、Hall 高/低语境与时间观、Kluckhohn & Strodtbeck 价值取向、Berry 文化适应", tags:["理论","高频考点","案例分析"],
    content:[
      {h:"3.1 Hofstede 文化维度理论", body:"<p>Hofstede 称文化为‘集体心理程序’(the collective programming of the mind)。基于对 IBM 多国员工的调查，提出经典维度：</p><ul>"+
        "<li><b>权力距离 Power Distance</b>：社会对权力分配不平等的接受程度。高：层级分明、敬权威；低：倾向平等、可质疑上级。</li>"+
        "<li><b>个人主义 vs 集体主义 Individualism / Collectivism</b>：重个人目标与隐私，还是重群体和谐与忠诚。</li>"+
        "<li><b>男性化 vs 女性化 Masculinity / Femininity</b>：竞争、成就、决断 vs 关怀、生活质量、协商。</li>"+
        "<li><b>不确定性规避 Uncertainty Avoidance</b>：对模糊与未知情境的容忍度。高：偏好明确规则与程序。</li>"+
        "<li><b>长期导向 vs 短期导向 Long-term / Short-term Orientation</b>：重节俭、坚持、未来回报 vs 重当下、传统与面子。</li>"+
        "<li><b>放纵 vs 克制 Indulgence / Restraint</b>（后期补充）：社会允许满足基本欲望与享乐的程度。</li></ul>"},
      {h:"3.2 Hall：高/低语境与时间观", body:"<p><b>高语境文化（high-context）</b>：信息多隐含于语境、关系与非言语之中，表达含蓄、重面子与默契，如中国、日本。<b>低语境文化（low-context）</b>：信息主要靠显性语言编码，表达直接、重清晰与逻辑，如美国、德国。</p>"+
        "<p><b>单向时间观（monochronic）</b>：一次做一事、重准时与计划；<b>多向时间观（polychronic）</b>：并行多事、人际关系优先于日程。</p>"},
      {h:"3.3 Kluckhohn & Strodtbeck 价值取向六维度", body:"<ul>"+
        "<li><b>与环境的关系</b>：屈从自然 / 与自然和谐 / 支配自然</li>"+
        "<li><b>时间取向</b>：重过去 / 重现在 / 重未来</li>"+
        "<li><b>人性观</b>：性善 / 性恶 / 善恶混合</li>"+
        "<li><b>活动取向</b>：being（存在享乐）/ being-in-becoming（自我成长）/ doing（做事成就）</li>"+
        "<li><b>责任中心</b>：个人 / 群体 / 等级身份</li>"+
        "<li><b>空间概念</b>：公开处理事务 / 私密处理事务</li></ul>"},
      {h:"3.4 Berry 文化适应策略", body:"<p>个体进入异文化后的四种策略：<b>同化 assimilation</b>（弃旧融新）、<b>分离 separation</b>（守旧拒新）、<b>整合 integration</b>（保持己文化同时融入新文化，被认为最健康）、<b>边缘化 marginalization</b>（两头不靠）。</p>"},
      {h:"3.5 理论的批判与局限", body:"<p>① 样本局限（Hofstede 原研究以 IBM 男性员工为主）；② 维度过于抽象、范围重叠；③ 缺乏具体情境，易导向二元化（把文化简单二分）；④ 国家层面均值不能直接推及个人（生态谬误）。使用理论时应作为‘参考地图’而非‘刻板标签’。</p>"}
    ],
    templates:[
      {label:"Hofstede 定义",text:"Culture is the collective programming of the mind that distinguishes the members of one group or category of people from others. (G. Hofstede)"},
      {label:"高语境",text:"In high-context cultures, most of the information is either in the physical context or internalized in the person, while very little is in the coded, explicit part of the message. (E. T. Hall)"}
    ],
    pitfalls:["Hofstede 维度与国家均值不可直接套用于个人，避免‘生态谬误’。","高/低语境是连续谱而非二分，同一文化在不同场合可切换。","Kluckhohn 六维度与 Hofstede 六维度常被混淆，须分清提出者与内容。"] },

  { id:"c4", parent:"p2", title:"4. Case Studies in Intercultural Communication", cn:"跨文化交际案例分析", level:1, hasPage:true,
    summary:"D&G 筷子广告、《喜福会》、外媒涉华报道的框架与双重标准、刻板印象与民族中心主义", tags:["案例","分析","高频考点"],
    content:[
      {h:"4.1 案例一：D&G「筷子吃披萨」广告", body:"<p><b>事件</b>：某奢侈品牌广告让模特以夸张姿态用筷子吃意大利食物，并配以戏谑旁白，被广泛批评为蔑视中国饮食文化。<b>症结</b>：把筷子这一文化符号脱离其本义与情感语境地戏谑化，属典型的<b>民族中心主义</b>与<b>文化不敏感</b>。<b>启示</b>：① 尊重文化符号的本义与情感；② 前置本土团队与文化顾问审核；③ 危机时真诚致歉而非辩解；④ 以长期、尊重的在地化内容重建信任。</p>"},
      {h:"4.2 案例二：谭恩美《喜福会》中的母女冲突", body:"<p><b>文本</b>：华裔移民母亲与在美国长大的女儿之间的代际冲突。<b>症结</b>：母亲以中国式‘面子’与含蓄期待表达关爱，女儿以美式直接与个人主义回应，双方在<b>高语境 vs 低语境</b>、集体主义 vs 个人主义的错位中彼此误读。<b>启示</b>：跨文化冲突常源于深层价值观差异而非语言能力；理解对方的‘意义框架’是化解前提。</p>"},
      {h:"4.3 案例三：外媒涉华报道的框架与双重标准", body:"<p><b>表现</b>：<b>媒介框架 media frames</b>——通过选择、强调与排除信息建构认知；<b>标签化与污名化 labeling &amp; stigmatizing</b>——以不公正标签贬损群体；<b>脱离语境的图文 out-of-context media</b>——挪用旧照片/视频描述当下事件；<b>双重标准 double standard</b>——对性质相同的事件采取不一致立场；<b>确认偏误 confirmation bias</b>——倾向搜集支持既有信念的信息。<b>应对</b>：识别框架→以事实与数据回应→区分媒体立场与个体学者→以理性学术话语提供替代叙事。</p>"},
      {h:"4.4 案例四：国际会议中的沉默与眼神", body:"<p><b>现象</b>：中国学者在讨论中沉默、回避长时间直视；西方主持人误读为‘不参与’或‘不自信’。<b>解读</b>：沉默在高语境/东亚文化中常表思考与尊重，眼神回避亦可能表敬意；低语境文化则倾向把直视与即时发言视为投入。<b>启示</b>：主持人宜留出思考时间、以书面或会后渠道收集意见；参会者亦应适度调适，以简短的即时回应表明参与。</p>"},
      {h:"4.5 案例五：赞美与面子", body:"<p><b>现象</b>：面对‘Your paper is excellent’，中国学者常答‘哪里哪里/不敢当’，西方同行则困惑。<b>解读</b>：东亚文化以谦辞维护面子、避免自夸；英语文化则预期直接接受（Thank you）。<b>启示</b>：国际场合宜采用‘接受 + 简短致谢 + 转入学术内容’的折中回应，既不失礼也不自贬。</p>"}
    ],
    templates:[
      {label:"案例分析框架",text:"Surface (what was said/done) → Middle (which social norms are at work) → Deep (which values/worldview clash) → Implication (how to adapt)."},
      {label:"中性回应赞美",text:"Thank you, I'm glad you found the approach useful. We are now extending it to…"}
    ],
    pitfalls:["案例分析忌停留在‘谁的错’的道德评判，应落到‘表层—中层—深层’的意义错位。","评论外媒报道须以事实与数据为依据，区分媒体机构立场与个体学者，避免以偏概全。","文化符号（筷子、龙、颜色）的误用是高发风险点，跨文化传播须前置文化审核。"] },

  { id:"p3", parent:null, title:"Part III  Key to Exercises & Chinese Translation", cn:"第三部分 练习答案与参考译文", level:0, hasPage:false,
    summary:"各单元练习题答案与样文汉译（对应题库与各单元练习）", tags:["答案"], content:[] }
];

if (typeof module !== "undefined") { module.exports = { KNOWLEDGE, BOOK_META }; }

/* 单元与题库的映射：题库题目的 unit 字段对应上述 id，
   学习页练习 = 自动按 unit 过滤 QUESTIONS；真题区单独标记 source:'real' */
