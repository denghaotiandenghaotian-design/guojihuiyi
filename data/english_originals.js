/* =============================================================
 * 国际学术会议英语与跨文化交流 —— 英文原文（English Originals · 双语对照）
 * 配套 data/knowledge.js 的 23 个考点学习页（Part I 13 单元 + Part II 10 节点）。
 *
 * 重要说明：原书为扫描版（无文字层），无法逐字 OCR。
 * 本文件的英文原文依据教材体例（骆洪《国际学术会议英语与跨文化交流》）
 * 与学术会议英语通用规范整理，均为教材所授“定义 / 样例文本 / 常用表达”
 * 之忠实英文范例；中文译文为对应同步翻译，供中英对照学习。
 * 若日后取得原书文字版，可逐条替换。
 *
 * 结构：const EN_ORIGINALS = { "<nodeId>": [ {h:"英文小标题", segs:[{en,zh}, ...]} , ... ] }
 *   - 每个 section 的 segs 为「逐段 / 逐条」对齐单元：en=英文原文，zh=对应中文译文
 *   - <p> 段落各自成一条 seg；<ul><li> 列表每条 <li> 各自成一条 seg
 *   - 顺序与原文完全一致，渲染时左右并列，不遗漏任何段落
 * ============================================================= */

const EN_ORIGINALS = {

  /* ---------------- Part I ---------------- */
  u1: [
    {h:"Conference Types (教材定义)", segs:[
      {en:`<b>Conference</b> — a formal meeting, often lasting for a few days, organized on a particular subject to bring together people who share a professional interest.`,
       zh:`<b>Conference（会议）</b>——一种正式的集会，通常持续数日，围绕某一特定主题组织，旨在汇聚具有共同专业兴趣的人士。`},
      {en:`<b>Symposium</b> — a small conference on a specific academic topic; narrower and more specific in topic range than a conference. A large conference may include several simultaneous symposiums.`,
       zh:`<b>Symposium（专题研讨会）</b>——围绕某一特定学术议题的小型会议；议题范围比一般会议更窄、更专。大型会议可包含若干同时进行的专题研讨会。`},
      {en:`<b>Seminar</b> — a meeting for giving and discussing information, usually combining a lecture with discussion.`,
       zh:`<b>Seminar（研讨班）</b>——以讲授信息与展开讨论为目的的会议，通常将讲座与讨论相结合。`},
      {en:`<b>Colloquium</b> — a formal seminar, often involving specialists invited to present and discuss their work.`,
       zh:`<b>Colloquium（学术报告会）</b>——一种正式的研讨活动，通常邀请专家作报告并讨论其研究成果。`},
      {en:`<b>Forum</b> — a place, meeting, or medium where ideas and views are exchanged (e.g. <i>99 Forum on Asian Economics</i>).`,
       zh:`<b>Forum（论坛）</b>——交流思想与观点的场所、会议或媒介（如<i>“99 亚洲经济论坛”</i>）。`},
      {en:`<b>Congress</b> — a large formal meeting of representatives, often held periodically by a learned society (e.g. <i>World Congress</i>).`,
       zh:`<b>Congress（代表大会）</b>——由代表参加的大型正式会议，常由学术团体定期举办（如<i>世界大会</i>）。`},
      {en:`<b>Workshop</b> — a small meeting designed to get direct, hands-on experience. <b>Panel</b> — a group of specialists discussing a topic before an audience.`,
       zh:`<b>Workshop（工作坊）</b>——以获取直接、动手体验为目的的小型会议。<b>Panel（专题小组讨论）</b>——一组专家在听众面前就某主题展开讨论。`}
    ]},
    {h:"Conference Procedure (会议流程)", segs:[
      {en:`Call for Papers → Acceptance / Rejection of abstracts → Letter of Invitation → Acceptance of Invitation → Opening Ceremony → Paper Presentation → Q&amp;A Session → Panel / parallel sessions → Closing Speech → Further Cooperation.`,
       zh:`征文通知 → 摘要录用 / 退稿 → 邀请函 → 接受邀请 → 开幕典礼 → 论文宣读 → 问答环节 → 专题小组 / 平行分会场 → 闭幕辞 → 后续合作。`}
    ]},
    {h:"Key Roles (关键角色)", segs:[
      {en:`<b>Chair / Moderator</b> — presides over a session and keeps it on schedule.`,
       zh:`<b>Chair / Moderator（主持人 / 协调人）</b>——主持分会场并掌控议程进度。`},
      {en:`<b>Keynote speaker</b> — delivers the principal address of a conference.`,
       zh:`<b>Keynote speaker（主旨演讲人）</b>——在会议上作主旨发言者。`},
      {en:`<b>Panelist</b> — a member of a panel discussion.`,
       zh:`<b>Panelist（小组成员）</b>——专题小组讨论的参与者。`},
      {en:`<b>Presenter</b> — a person who reads or delivers a paper.`,
       zh:`<b>Presenter（报告人）</b>——宣读或发表论文的人。`},
      {en:`<b>Delegate / Participant</b> — a person attending the conference.`,
       zh:`<b>Delegate / Participant（代表 / 与会者）</b>——参加会议的人员。`}
    ]}
  ],

  u2: [
    {h:"Sample Letter of Invitation (邀请函样例)", segs:[
      {en:`On behalf of the Organizing Committee of the 12th International Conference on Applied Linguistics (ICAL 2026), I am pleased to invite you to attend the conference and deliver a keynote speech.`,
       zh:`谨代表第十二届应用语言学国际会议（ICAL 2026）组委会，诚挚邀请您出席会议并发表主旨演讲。`},
      {en:`The conference will be held at Yunnan University, Kunming, China, from October 16 to 18, 2026. The theme of this year's conference is <i>"Language, Society and Cross-Cultural Communication"</i>. We would be honored if you could give a 40-minute keynote address on a topic of your choice within this theme.`,
       zh:`会议将于 2026 年 10 月 16 日至 18 日在中国昆明云南大学举行。本届会议主题为<i>“语言、社会与跨文化交流”</i>。如蒙您围绕该主题自选题目作一场 40 分钟的主旨报告，我们将深感荣幸。`},
      {en:`Please confirm your participation by June 30, 2026, and send a short biography and an abstract of your talk to <i>ical2026@univ.edu.cn</i>. We will cover your local accommodation and meals during the conference.`,
       zh:`请于 2026 年 6 月 30 日前确认参会，并将简短个人简介及演讲摘要发送至<i>ical2026@univ.edu.cn</i>。会议期间的当地住宿与餐饮由我们承担。`},
      {en:`We look forward to your favorable reply.`,
       zh:`期盼您的佳音。`},
      {en:`Sincerely yours,<br>Prof. XXX<br>Chair of the Organizing Committee`,
       zh:`此致<br>XXX 教授<br>组委会主席`}
    ]}
  ],

  u3: [
    {h:"Sample Acceptance of an Invitation (接受邀请样例)", segs:[
      {en:`Dear Prof. XXX,`,
       zh:`尊敬的 XXX 教授：`},
      {en:`Thank you very much for your kind invitation to the 12th International Conference on Applied Linguistics. I am delighted to accept and would like to present a paper entitled <i>"Cross-Cultural Pragmatics in Academic Discourse"</i>.`,
       zh:`非常感谢您盛情邀请我参加第十二届应用语言学国际会议。我欣然接受，并愿宣读一篇题为<i>“学术话语中的跨文化语用学”</i>的论文。`},
      {en:`I plan to arrive in Kunming on October 15 and depart on October 19. Could you please advise on accommodation and on any documents I may need for my visa application?`,
       zh:`我计划 10 月 15 日抵昆、10 月 19 日离昆。烦请告知住宿安排，以及签证申请可能需要的材料。`},
      {en:`I look forward to seeing you and other colleagues in Kunming.`,
       zh:`期待在昆明与您及各位同仁相见。`},
      {en:`Yours sincerely,<br>Dr. YYY`,
       zh:`此致<br>YYY 博士`}
    ]}
  ],

  u4: [
    {h:"Sample Declining an Invitation to Speak (婉拒发言样例)", segs:[
      {en:`Dear Prof. XXX,`,
       zh:`尊敬的 XXX 教授：`},
      {en:`Thank you for the kind invitation to deliver a keynote speech at ICAL 2026. I am truly honored by your invitation.`,
       zh:`感谢您盛情邀请我在 ICAL 2026 作主旨演讲。获悉此邀，我深感荣幸。`},
      {en:`However, I very much regret that a prior teaching commitment in that period makes it impossible for me to attend. I have asked my colleague Dr. YYY to present our joint work in my place, and I hope this proves acceptable.`,
       zh:`然而，我十分遗憾地告知，该时段我已有既定教学安排，无法出席。我已请同事 YYY 博士代为宣读我们的合作成果，望能获允。`},
      {en:`I wish the conference every success and hope to participate in a future edition.`,
       zh:`谨祝会议圆满成功，期待日后有机会参会。`},
      {en:`With best regards,<br>Prof. ZZZ`,
       zh:`此致<br>ZZZ 教授`}
    ]}
  ],

  u5: [
    {h:"Sample Call for Papers (征文通知样例)", segs:[
      {en:`<b>CALL FOR PAPERS</b><br>The 12th International Conference on Applied Linguistics (ICAL 2026)<br>Kunming, China | October 16–18, 2026<br>Theme: Language, Society and Cross-Cultural Communication`,
       zh:`<b>征文通知</b><br>第十二届应用语言学国际会议（ICAL 2026）<br>中国昆明 | 2026 年 10 月 16–18 日<br>主题：语言、社会与跨文化交流`},
      {en:`The Organizing Committee invites submissions of original abstracts on the following sub-themes:`,
       zh:`组委会诚邀围绕以下分主题提交原创摘要：`},
      {en:`Pragmatics and discourse analysis`,
       zh:`语用学与话语分析`},
      {en:`Intercultural communication`,
       zh:`跨文化交际`},
      {en:`Academic writing and publishing`,
       zh:`学术写作与出版`},
      {en:`Corpus linguistics`,
       zh:`语料库语言学`},
      {en:`Abstracts (300–500 words) should be submitted to <i>ical2026@univ.edu.cn</i> by July 31, 2026. Notification of acceptance will be sent by August 31, 2026. For further information, please contact the secretariat.`,
       zh:`摘要（300–500 词）请于 2026 年 7 月 31 日前发送至<i>ical2026@univ.edu.cn</i>。录用通知将于 2026 年 8 月 31 日前发出。更多信息请联系秘书处。`}
    ]}
  ],

  u6: [
    {h:"Sample Acceptance of a Paper / Abstract (录用通知样例)", segs:[
      {en:`Dear Dr. YYY,`,
       zh:`尊敬的 YYY 博士：`},
      {en:`We are pleased to inform you that your abstract <i>"Cross-Cultural Pragmatics in Academic Discourse"</i> has been accepted for presentation in the parallel session on Intercultural Communication.`,
       zh:`我们荣幸地通知您，您的摘要<i>“学术话语中的跨文化语用学”</i>已被录用，将在“跨文化交际”平行分会场宣读。`},
      {en:`Reviewers suggested minor revisions regarding the literature review. Please revise accordingly and upload the full paper by September 15, 2026. Complete your registration at the conference website by August 31, 2026.`,
       zh:`审稿人针对文献综述提出了小幅修改建议。请据此修订，并于 2026 年 9 月 15 日前上传全文。请于 2026 年 8 月 31 日前在会议网站完成注册。`},
      {en:`We look forward to your presentation in Kunming.`,
       zh:`期盼您在昆明的报告。`},
      {en:`Sincerely,<br>The ICAL 2026 Program Committee`,
       zh:`此致<br>ICAL 2026 程序委员会`}
    ]}
  ],

  u7: [
    {h:"Sample Rejection of a Paper (退稿通知样例)", segs:[
      {en:`Dear Dr. YYY,`,
       zh:`尊敬的 YYY 博士：`},
      {en:`Thank you for submitting your abstract to ICAL 2026. We received a large number of high-quality submissions this year.`,
       zh:`感谢您向 ICAL 2026 提交摘要。今年我们收到了大量高质量来稿。`},
      {en:`Regrettably, due to the limited number of session slots, we are unable to include your paper in the program. Reviewers noted that, while your work is of interest, it falls outside the main scope of this year's themes.`,
       zh:`遗憾的是，受分会场名额所限，您的论文未能列入议程。审稿人指出，尽管您的研究颇具价值，但超出了本届主题的主要范围。`},
      {en:`We encourage you to submit to future conferences or to related journals. We wish you continued success with your research.`,
       zh:`我们鼓励您向今后的会议或相关期刊投稿，并祝研究不断取得新成果。`},
      {en:`Sincerely,<br>The ICAL 2026 Program Committee`,
       zh:`此致<br>ICAL 2026 程序委员会`}
    ]}
  ],

  u8: [
    {h:"Sample Introduction of a Speaker (介绍报告人样例)", segs:[
      {en:`It is my great pleasure to introduce our next speaker, Professor YYY of the University of X.`,
       zh:`我非常荣幸地向各位介绍下一位报告人——X 大学的 YYY 教授。`},
      {en:`Professor YYY is widely known for her pioneering work on cross-cultural pragmatics and is the author of over one hundred papers and three monographs. Today she will share her latest findings on academic discourse across cultures.`,
       zh:`YYY 教授以其跨文化语用学的开创性研究广为人知，著有百余篇论文与三部专著。今天她将分享关于跨文化学术话语的最新发现。`},
      {en:`Please join me in welcoming Professor YYY.`,
       zh:`让我们以掌声欢迎 YYY 教授。`}
    ]}
  ],

  u9: [
    {h:"Sample Welcome Speech (欢迎辞样例)", segs:[
      {en:`A very good morning to you all. On behalf of Yunnan University and the Organizing Committee, I would like to extend our warmest welcome to all distinguished guests and participants.`,
       zh:`各位早上好。我谨代表云南大学与组委会，向各位贵宾与与会代表致以最热烈的欢迎。`},
      {en:`It is a great honor to gather so many leading minds in applied linguistics here in Kunming. I would like to thank the members of the committee, our volunteers, and our sponsors for making this conference possible.`,
       zh:`能在昆明汇聚如此多应用语言学领域的领军学者，我们深感荣幸。感谢组委会成员、志愿者及赞助方，是你们让本次会议得以成行。`},
      {en:`I hope this conference will be both productive and enjoyable, and I wish it a complete success.`,
       zh:`愿本次会议既富有成效又令人愉快，并预祝圆满成功。`},
      {en:`Now, let us begin with our first keynote address.`,
       zh:`现在，让我们开始首场主旨演讲。`}
    ]}
  ],

  u10: [
    {h:"Sample Speech at the Opening Ceremony (开幕辞样例)", segs:[
      {en:`Distinguished guests, colleagues, and friends:`,
       zh:`尊敬的各位嘉宾、同仁、朋友们：`},
      {en:`It is my privilege to declare the 12th International Conference on Applied Linguistics officially open.`,
       zh:`我十分荣幸地宣布，第十二届应用语言学国际会议正式开幕。`},
      {en:`This year we are delighted to receive over 600 submissions from 45 countries. Over the next three days, we will explore how language, society and cross-cultural communication reshape our discipline. I thank the supporting institutions and all who have worked tirelessly to prepare this event.`,
       zh:`今年我们欣喜地收到来自 45 个国家的逾 600 篇投稿。在接下来的三天里，我们将探讨语言、社会与跨文化交流如何重塑我们的学科。感谢各支持机构，以及为筹备本次会议不辞辛劳的全体人员。`},
      {en:`I now declare the conference open. May our discussions be fruitful and our collaborations lasting.`,
       zh:`现在我宣布会议开幕。愿我们的讨论富有成果，合作长久延续。`}
    ]}
  ],

  u11: [
    {h:"Sample Conference Presentation Opening (论文宣读开场样例)", segs:[
      {en:`Good morning. I am Dr. YYY from the University of X. It is a privilege to present our recent work titled <i>"Cross-Cultural Pragmatics in Academic Discourse"</i>.`,
       zh:`早上好。我是 X 大学的 YYY 博士。很荣幸在此汇报我们近期题为<i>“学术话语中的跨文化语用学”</i>的研究。`},
      {en:`My presentation has three parts: first, the background; then, our method; and finally, the main findings.`,
       zh:`我的报告分为三部分：首先是研究背景，其次是方法，最后是主要发现。`}
    ]},
    {h:"Signposting Language (衔接 / 指示语)", segs:[
      {en:`<b>Sequencing:</b> First / To begin with / Next / Moving on to / Finally`,
       zh:`<b>顺序：</b>First（首先）/ To begin with（开头）/ Next（接下来）/ Moving on to（进而谈）/ Finally（最后）`},
      {en:`<b>Emphasis:</b> I would like to highlight / The key point is`,
       zh:`<b>强调：</b>I would like to highlight（我想强调）/ The key point is（关键在于）`},
      {en:`<b>Exemplifying:</b> For instance / A case in point is`,
       zh:`<b>举例：</b>For instance（例如）/ A case in point is（一个恰当的例子是）`},
      {en:`<b>Contrast:</b> However / In contrast`,
       zh:`<b>对比：</b>However（然而）/ In contrast（与之相反）`},
      {en:`<b>Summarizing:</b> In summary / To conclude`,
       zh:`<b>总结：</b>In summary（总而言之）/ To conclude（最后）`},
      {en:`<b>Referring to visuals:</b> As shown in Figure 1 / As you can see from this slide`,
       zh:`<b>指图：</b>As shown in Figure 1（如图 1 所示）/ As you can see from this slide（如本页所示）`}
    ]},
    {h:"Closing (结尾)", segs:[
      {en:`In summary, our study shows that cross-cultural awareness significantly improves the clarity of academic writing. Thank you for your attention. I am happy to take your questions.`,
       zh:`总而言之，我们的研究表明，跨文化意识能显著提升学术写作的清晰度。感谢聆听，欢迎提问。`}
    ]}
  ],

  u12: [
    {h:"Listening & Clarifying (听清与确认)", segs:[
      {en:`Pardon me? / Sorry, I didn't catch that. Could you repeat the question?`,
       zh:`抱歉？/ 对不起，我没听清。能否重复一下这个问题？`},
      {en:`If I understand you correctly, you are asking whether our method generalizes to low-resource settings.`,
       zh:`如果我理解正确，您是在问我们的方法是否能推广到资源匮乏的场景。`}
    ]},
    {h:"Buying Time (争取时间)", segs:[
      {en:`That's a very interesting question. Let me think for a moment.`,
       zh:`这是个很有意思的问题。请让我想一想。`},
      {en:`Well, I'm glad you raised that point.`,
       zh:`嗯，很高兴您提出这一点。`}
    ]},
    {h:"Responding Strategies (回应策略)", segs:[
      {en:`<b>Agree &amp; add:</b> Exactly. In addition, …`,
       zh:`<b>同意并补充：</b>正是如此。此外，……`},
      {en:`<b>Partly disagree:</b> I see your point, but from our data …`,
       zh:`<b>部分不同意：</b>我明白您的意思，但从我们的数据看……`},
      {en:`<b>Beyond scope:</b> That's beyond the scope of this study; I'd be happy to discuss it offline.`,
       zh:`<b>超出范围：</b>这超出了本研究范围；我很乐意会后私下讨论。`},
      {en:`<b>Clarify:</b> Could you clarify what you mean by … ?`,
       zh:`<b>澄清：</b>您能否澄清一下……是指什么？`}
    ]},
    {h:"Closing the Exchange (结束问答)", segs:[
      {en:`Thank you for the excellent question.`,
       zh:`感谢您提出这个出色的问题。`}
    ]}
  ],

  u13: [
    {h:"Sample Closing Speech (闭幕辞样例)", segs:[
      {en:`Now I would like to bring this memorable conference to a close.`,
       zh:`现在，我想为这场令人难忘的会议画上句号。`},
      {en:`On behalf of the committee, I thank every participant, our speakers, and especially the volunteers whose hard work made this event a success. We leave with new collaborations and fresh ideas.`,
       zh:`我谨代表组委会，感谢每一位与会者、各位报告人，尤其要感谢令本次会议圆满成功的志愿者们。我们满载新的合作与创意而归。`},
      {en:`The 13th ICAL will be held in 2028 in Shanghai. We look forward to meeting you there again.`,
       zh:`第十三届 ICAL 将于 2028 年在上海举行。期待届时与各位再会。`},
      {en:`I wish you all a pleasant journey home. Thank you.`,
       zh:`祝各位返程愉快。谢谢。`}
    ]}
  ],

  /* ---------------- Part II ---------------- */
  c1: [
    {h:"Definition of Culture (文化定义 · Tylor)", segs:[
      {en:`Culture is that complex whole which includes knowledge, belief, art, morals, law, custom, and any other capabilities acquired by a person as a member of society. — E. B. Tylor`,
       zh:`文化是一个复合的整体，包括知识、信仰、艺术、道德、法律、习俗，以及人作为社会成员所获得的任何其他能力与习惯。——E. B. 泰勒`}
    ]},
    {h:"Features of Culture (文化特征)", segs:[
      {en:`<b>Learned, not innate</b> — culture is acquired through socialization, not inherited biologically.`,
       zh:`<b>习得而非天生</b>——文化通过社会化习得，而非生物遗传。`},
      {en:`<b>Shared</b> — it is possessed in common by members of a group.`,
       zh:`<b>共享</b>——为群体成员所共有。`},
      {en:`<b>Symbolic</b> — language is the most important symbolic system through which culture is transmitted.`,
       zh:`<b>符号性</b>——语言是传递文化最重要的符号系统。`},
      {en:`<b>Dynamic</b> — culture changes over time as societies evolve.`,
       zh:`<b>动态性</b>——文化随社会发展而变迁。`}
    ]},
    {h:"Intercultural Communication (跨文化交际)", segs:[
      {en:`Intercultural communication refers to the interaction between people from different cultural backgrounds. In an international academic conference, scholars from various countries use English as a working language; awareness of cultural differences is a prerequisite for effective communication.`,
       zh:`跨文化交际指来自不同文化背景的人们之间的互动。在国际学术会议上，各国学者以英语为工作语言；意识到文化差异是有效沟通的前提。`},
      {en:`Its main areas of study include verbal communication, nonverbal communication, cultural dimensions, and acculturation.`,
       zh:`其主要研究领域包括言语交际、非言语交际、文化维度与涵化。`}
    ]}
  ],

  c2: [
    {h:"2.1 Preparatory Work (会前准备)", segs:[
      {en:`Study the target culture: its customs, taboos, and communication style.`,
       zh:`了解目标文化：其习俗、禁忌与交际风格。`},
      {en:`Improve your English proficiency and multimodal presentation skills.`,
       zh:`提升英语能力与多模态展示技巧。`},
      {en:`Familiarize yourself with the conference agenda.`,
       zh:`熟悉会议议程。`},
      {en:`Prepare name cards and learn the dress code and etiquette of the host culture.`,
       zh:`准备名片，并了解东道主文化的着装规范与礼仪。`}
    ]},
    {h:"2.2 First Encounter (初次接触)", segs:[
      {en:`At the first meeting, use <i>Nice to meet you</i> rather than asking for the person's name directly. Greetings, salutation, and the most useful expressions are covered in the sub-units below.`,
       zh:`初次见面时，用<i>Nice to meet you</i>（幸会）而非直接询问对方姓名。问候、称谓与最常用表达见以下子单元。`}
    ]},
    {h:"2.3 Encounters Later on (后续接触)", segs:[
      {en:`Small talk helps build rapport. Keep topics neutral — weather, travel, research interests — and avoid sensitive subjects such as religion, income, or politics.`,
       zh:`闲聊有助于建立融洽关系。话题宜中性——天气、旅行、研究兴趣——并避开宗教、收入或政治等敏感话题。`}
    ]},
    {h:"2.5–2.7 Sessions (宣讲 / 问答 / Panel)", segs:[
      {en:`In parallel sessions, control your time and coordinate with the chair. Q&amp;A styles differ across cultures: some are direct and challenging, others implicit. In a panel, the moderator manages turn-taking while panelists balance confrontation with consensus.`,
       zh:`在平行分会场中，要掌控时间并与主持人配合。问答风格因文化而异：有的直接而具挑战性，有的含蓄。在专题小组中，主持人管理发言次序，小组成员则在交锋与共识间取得平衡。`}
    ]},
    {h:"2.8 Compliments (赞美)", segs:[
      {en:`In English-speaking cultures, compliments are usually accepted directly (<i>Thank you</i>); in many East Asian cultures, they are modestly deflected (<i>No, not at all</i>). At international events, accepting gracefully fits the interlocutor's expectation.`,
       zh:`在英语文化中，赞美通常被直接接受（<i>Thank you</i>）；而在许多东亚文化中，人们会谦逊地推辞（<i>No, not at all</i>）。在国际场合，得体地接受更契合对方期待。`}
    ]},
    {h:"2.9 Further Cooperation (会后合作)", segs:[
      {en:`Send a thank-you and follow-up email within one to two weeks, referring to your meeting at the conference and proposing a concrete next step (sharing a draft, scheduling a video call).`,
       zh:`在一至两周内发送致谢与跟进邮件，提及会议上的相遇，并提出具体下一步（分享草稿、安排视频通话）。`}
    ]}
  ],

  c221: [
    {h:"Greetings (问候样例)", segs:[
      {en:`First meeting: <i>Nice to meet you!</i> / <i>Good to see you.</i>`,
       zh:`初次见面：<i>Nice to meet you!</i>（幸会）/ <i>Good to see you.</i>（很高兴见到你）`},
      {en:`Reunion: <i>Good to see you again.</i>`,
       zh:`重逢：<i>Good to see you again.</i>（很高兴再次见到你）`},
      {en:`Informal addition: <i>How are you?</i> / <i>How was your trip?</i>`,
       zh:`随意补充：<i>How are you?</i>（你好吗）/ <i>How was your trip?</i>（旅途如何）`},
      {en:`Comment on shared context: <i>I really enjoyed your paper on [topic].</i>`,
       zh:`就共同情境评论：<i>I really enjoyed your paper on [topic].</i>（我很喜欢您关于[主题]的论文）`},
      {en:`Note: do not open with <i>What's your name?</i> — it sounds abrupt. Observe the other person before any physical contact such as a handshake or a kiss on the cheek.`,
       zh:`注意：不要以<i>What's your name?</i>（你叫什么名字）开场——显得突兀。在任何肢体接触（如握手或贴面礼）前，先观察对方。`}
    ]}
  ],

  c222: [
    {h:"Salutation (称谓规范)", segs:[
      {en:`Use <b>Dr.</b> for a holder of a doctoral degree.`,
       zh:`博士学历者用<b>Dr.</b>（博士）。`},
      {en:`Use <b>Prof.</b> for a professor or associate professor.`,
       zh:`教授或副教授用<b>Prof.</b>（教授）。`},
      {en:`Use <b>Ms.</b> when gender or marital status is unknown; use <b>Mr.</b> for men.`,
       zh:`性别或婚姻状况不明时用<b>Ms.</b>（女士）；男性用<b>Mr.</b>（先生）。`},
      {en:`In academic correspondence, prefer academic titles (Prof. / Dr.) over Mr. / Mrs.`,
       zh:`学术信函中，优先使用学术头衔（Prof. / Dr.）而非 Mr. / Mrs.`},
      {en:`Do <b>not</b> combine titles: avoid <i>Dr. Professor X</i>.`,
       zh:`<b>不要</b>叠用头衔：避免<i>Dr. Professor X</i>。`}
    ]}
  ],

  c223: [
    {h:"The Most Useful Expressions (最常用表达)", segs:[
      {en:`<b>Asking for opinion:</b> What do you think of my presentation? (more appropriate than <i>Do you like my talk?</i>)`,
       zh:`<b>征求意见：</b>What do you think of my presentation?（您觉得我的报告如何？比 Do you like my talk? 更得体）`},
      {en:`<b>Agreeing:</b> That's right. / I couldn't agree more.`,
       zh:`<b>同意：</b>That's right.（没错）/ I couldn't agree more.（我再同意不过了）`},
      {en:`<b>Interrupting politely:</b> Sorry to interrupt, but … / May I add something?`,
       zh:`<b>礼貌打断：</b>Sorry to interrupt, but …（抱歉打断）/ May I add something?（我能补充一句吗）`},
      {en:`<b>Not catching:</b> Pardon me? / Could you repeat that?`,
       zh:`<b>没听清：</b>Pardon me?（抱歉）/ Could you repeat that?（能重复吗）`},
      {en:`<b>Needing time:</b> Give me a minute, please.`,
       zh:`<b>需要时间：</b>Give me a minute, please.（请给我一分钟）`},
      {en:`<b>Thanking the audience:</b> Thank you for your attention. / Thank you for listening.`,
       zh:`<b>感谢听众：</b>Thank you for your attention.（感谢聆听）/ Thank you for listening.（谢谢各位）`},
      {en:`Avoid <i>Stop talking</i> or <i>Listen to me</i>, which are extremely impolite in a conference setting.`,
       zh:`避免在会议场合使用<i>Stop talking</i>（别说了）或<i>Listen to me</i>（听我说），这在会议中极不礼貌。`}
    ]}
  ],

  c24: [
    {h:"Culturally Loaded Words & False Friends (文化负载词与假朋友)", segs:[
      {en:`A <b>culturally loaded word</b> carries meanings shaped by a specific culture; a literal translation often loses its connotation.`,
       zh:`<b>文化负载词</b>承载着特定文化塑造的意义；直译往往丢失其内涵。`},
      {en:`<b>dragon</b> — positive (auspicious) in Chinese culture, usually negative in the West; <i>loong</i> is preferred internationally.`,
       zh:`<b>dragon（龙）</b>——在中文文化中为正面（吉祥），在西方多为负面；国际场合宜用<i>loong</i>。`},
      {en:`<b>red</b> — festive / auspicious in China, but signals danger or deficit in the West.`,
       zh:`<b>red（红）</b>——在中国表示喜庆 / 吉祥，在西方则提示危险或赤字。`},
      {en:`<b>individualism</b> — positive (independence) in the West, sometimes negative in parts of East Asia.`,
       zh:`<b>individualism（个人主义）</b>——在西方为正面（独立），在东亚部分地区有时偏负面。`},
      {en:`<b>face / 面子</b> — a core concept of relation-based East Asian cultures.`,
       zh:`<b>face / 面子</b>——关系型东亚文化的核心概念。`},
      {en:`<b>False friends</b> are words that look similar but differ in meaning, e.g. <i>actual</i> (real, not "present") and <i>eventually</i> (finally, not "immediately").`,
       zh:`<b>假朋友</b>指形近而义异的词，例如 <i>actual</i>（真实的，非“当前的”）与 <i>eventually</i>（最终，非“立刻”）。`}
    ]}
  ],

  c28: [
    {h:"Compliments across Cultures (跨文化赞美)", segs:[
      {en:`English-speaking cultures tend to accept compliments directly:`,
       zh:`英语文化倾向于直接接受赞美：`},
      {en:`<i>Thank you. I'm glad you found the approach useful.</i>`,
       zh:`<i>谢谢。很高兴您觉得这个方法有用。</i>`},
      {en:`Many East Asian cultures tend to deflect modestly:`,
       zh:`许多东亚文化则倾向谦逊推辞：`},
      {en:`<i>No, not at all. / You flatter me.</i>`,
       zh:`<i>哪里，哪里。/ 您过奖了。</i>`},
      {en:`At international academic events, accepting gracefully is recommended to avoid awkwardness and to match the interlocutor's expectation.`,
       zh:`在国际学术场合，建议得体接受，以免尴尬并契合对方期待。`}
    ]}
  ],

  c29: [
    {h:"Follow-up Email after the Conference (会后跟进邮件样例)", segs:[
      {en:`Dear Prof. X,`,
       zh:`尊敬的 X 教授：`},
      {en:`Thank you again for the inspiring discussion at ICAL 2026. I would like to share our draft and explore a joint submission on [topic]. Would you be available for a short video call next week?`,
       zh:`再次感谢您在 ICAL 2026 上富有启发的讨论。我想分享我们的草稿，并探讨就[主题]联合投稿。您下周方便进行简短视频通话吗？`},
      {en:`Best regards,<br>[Name]`,
       zh:`此致<br>[姓名]`},
      {en:`<i>Tip: personalize the email by referring to your conference encounter; avoid a generic mass-mailing tone, and follow up within one to two weeks.</i>`,
       zh:`<i>提示：在邮件中提及会议相遇以体现个性化；避免群发式口吻，并一至两周内跟进。</i>`}
    ]}
  ],

  c3: [
    {h:"Hofstede's Dimensions of Culture (Hofstede 文化维度)", segs:[
      {en:`<b>Culture</b> is the collective programming of the mind that distinguishes the members of one group or category of people from others. (G. Hofstede)`,
       zh:`<b>文化</b>是区分一个群体或类别成员与另一群人的「整体心理程序」。（霍夫斯泰德）`},
      {en:`<b>Power Distance</b> — the extent to which the less powerful members of a society accept and expect that power is distributed unequally.`,
       zh:`<b>权力距离</b>——社会中权力较小者接受并预期权力不平等分配的程度。`},
      {en:`<b>Individualism vs. Collectivism</b> — the degree to which individuals are integrated into groups; personal goals versus group loyalty.`,
       zh:`<b>个人主义 vs 集体主义</b>——个体融入群体的程度；个人目标与群体忠诚之别。`},
      {en:`<b>Masculinity vs. Femininity</b> — assertiveness, competition and achievement versus caring, quality of life and negotiation.`,
       zh:`<b>男性化 vs 女性化</b>——果断、竞争与成就，对关怀、生活质量与协商。`},
      {en:`<b>Uncertainty Avoidance</b> — the tolerance of ambiguity; high-avoidance cultures prefer explicit rules and structure.`,
       zh:`<b>不确定性规避</b>——对模糊情境的容忍度；高规避文化偏好明确规则与结构化安排。`},
      {en:`<b>Long-term vs. Short-term Orientation</b> — thrift, perseverance and future rewards versus present gratification, tradition and face.`,
       zh:`<b>长期导向 vs 短期导向</b>——节俭、坚持与未来回报，对当下满足、传统与面子。`},
      {en:`<b>Indulgence vs. Restraint</b> — the degree to which a society allows the gratification of basic human desires.`,
       zh:`<b>放纵 vs 克制</b>——社会允许满足人类基本欲望的程度。`}
    ]},
    {h:"Hall's High- and Low-Context Communication (Hall 高/低语境)", segs:[
      {en:`In <b>high-context</b> cultures, most of the information is either in the physical context or internalized in the person, while very little is in the coded, explicit part of the message.`,
       zh:`在<b>高语境</b>文化中，大部分信息或存在于物理语境中，或内化于个人，而很少出现在信息中经过编码的显性部分。`},
      {en:`In <b>low-context</b> cultures, meanings are conveyed mainly through explicit verbal messages; clarity and logic are prized.`,
       zh:`在<b>低语境</b>文化中，意义主要通过显性的言语信息传达；清晰与逻辑备受重视。`},
      {en:`<b>Monochronic</b> time: one activity at a time, punctuality and schedules. <b>Polychronic</b> time: parallel activities, relationships over schedules.`,
       zh:`<b>单向时间观</b>：一次做一事，重准时与日程。<b>多向时间观</b>：并行处理多事，人际关系优先于日程。`}
    ]},
    {h:"Kluckhohn & Strodtbeck's Value Orientations (价值取向六维度)", segs:[
      {en:`<b>Relationship to the environment</b> — subjugation to nature, harmony with nature, or mastery over nature.`,
       zh:`<b>与环境的关系</b>——屈从自然、与自然和谐，或支配自然。`},
      {en:`<b>Time orientation</b> — focus on the past, the present, or the future.`,
       zh:`<b>时间取向</b>——重过去、重现在，或重未来。`},
      {en:`<b>Human nature</b> — people are good, evil, or mixed.`,
       zh:`<b>人性观</b>——人性本善、本恶，或善恶混合。`},
      {en:`<b>Activity orientation</b> — being, being-in-becoming, or doing.`,
       zh:`<b>活动取向</b>——存在享乐、自我成长，或做事成就。`},
      {en:`<b>Focus of responsibility</b> — the individual, the group, or hierarchical ranks.`,
       zh:`<b>责任中心</b>——个人、群体，或等级身份。`},
      {en:`<b>Concepts of space</b> — public versus private handling of affairs.`,
       zh:`<b>空间概念</b>——公开处理事务，或私密处理事务。`}
    ]},
    {h:"Berry's Acculturation Strategies (文化适应策略)", segs:[
      {en:`<b>Assimilation</b> — adopting the host culture while dropping one's own.`,
       zh:`<b>同化</b>——接受宿主文化而放弃自身文化。`},
      {en:`<b>Separation</b> — maintaining one's own culture while avoiding the host culture.`,
       zh:`<b>分离</b>——保持自身文化而回避宿主文化。`},
      {en:`<b>Integration</b> — maintaining one's own culture while engaging the host culture; widely regarded as the healthiest strategy.`,
       zh:`<b>整合</b>——保持自身文化同时积极融入宿主文化；普遍被认为是最健康的策略。`},
      {en:`<b>Marginalization</b> — losing contact with both cultures.`,
       zh:`<b>边缘化</b>——与两种文化都失去联系。`}
    ]}
  ],

  c4: [
    {h:"Case 1: The Chopsticks Advertisement (案例一：筷子广告)", segs:[
      {en:`A luxury brand was widely criticized for an advertisement in which a model used chopsticks in an exaggerated, mocking manner to eat Italian food.`,
       zh:`某奢侈品牌因一则广告受到广泛批评：广告中模特以夸张、戏谑的方式用筷子吃意大利食物。`},
      {en:`The controversy illustrates <b>ethnocentrism</b> and <b>cultural insensitivity</b>: a cultural symbol (chopsticks) was used out of context and mocked.`,
       zh:`该争议体现了<b>民族中心主义</b>与<b>文化不敏感</b>：文化符号（筷子）被脱离语境地使用并加以戏谑。`},
      {en:`Lesson: respect the meaning of cultural symbols, pre-screen content with local teams, apologize sincerely, and rebuild trust with long-term, respectful localization.`,
       zh:`启示：尊重文化符号的本义，前置本土团队审核内容，真诚致歉，并以长期、尊重的在地化重建信任。`}
    ]},
    {h:"Case 2: Mother–Daughter Conflict in The Joy Luck Club (案例二：《喜福会》)", segs:[
      {en:`Amy Tan's <i>The Joy Luck Club</i> portrays the conflict between Chinese immigrant mothers and their American-born daughters.`,
       zh:`谭恩美的<i>《喜福会》</i>描绘了华裔移民母亲与在美国出生的女儿之间的冲突。`},
      {en:`The mothers express care through Chinese 'face' and implicit expectation; the daughters respond with American directness and individualism.`,
       zh:`母亲以中国式‘面子’与含蓄期待表达关爱；女儿则以美式直接与个人主义回应。`},
      {en:`The mismatch is not merely linguistic but a clash of <b>high-context</b> versus <b>low-context</b> communication and of collectivist versus individualist values.`,
       zh:`这种错位不仅是语言层面的，更是<b>高语境</b>与<b>低语境</b>沟通方式、集体主义与个人主义价值观的碰撞。`}
    ]},
    {h:"Case 3: Media Frames and Double Standards (案例三：媒体框架与双重标准)", segs:[
      {en:`<b>Media frames</b> involve selecting, emphasizing and excluding information when constructing a report.`,
       zh:`<b>媒介框架</b>指在建构报道时对信息进行选择、强调与排除。`},
      {en:`<b>Labeling and stigmatizing</b> means using unfair terms to defame or belittle a group.`,
       zh:`<b>标签化与污名化</b>指使用不公正的词语贬损某一群体。`},
      {en:`<b>Out-of-context media</b> — an old photo or video used to misrepresent a current event.`,
       zh:`<b>脱离语境的媒介</b>——挪用旧照片或视频以歪曲描述当下事件。`},
      {en:`A <b>double standard</b> means treating identical situations inconsistently; <b>confirmation bias</b> means seeking information that supports preexisting beliefs.`,
       zh:`<b>双重标准</b>指对相同情形采取不一致的对待；<b>确认偏误</b>指倾向于寻找支持既有信念的信息。`},
      {en:`In academic exchange, respond with facts and data, distinguish media stances from individual scholars, and offer alternative narratives rationally.`,
       zh:`在学术交流中，应以事实与数据回应，区分媒体立场与个体学者，并理性地提供替代性叙事。`}
    ]},
    {h:"Case 4: Silence and Eye Contact in Meetings (案例四：沉默与眼神)", segs:[
      {en:`A Chinese participant remains silent and avoids prolonged eye contact; the Western chair misreads this as disengagement or diffidence.`,
       zh:`一位中国参会者保持沉默并回避长时间眼神接触；西方主持人误读为不投入或不自信。`},
      {en:`In high-context and East Asian cultures, silence may signify reflection or respect, and averting the eyes may signal deference.`,
       zh:`在高语境与东亚文化中，沉默可能表示思考或尊重，回避目光可能表示敬意。`},
      {en:`Implication: chairs should allow thinking time and offer written channels; participants may adapt by giving brief, timely responses.`,
       zh:`启示：主持人应留出思考时间并提供书面渠道；参会者亦可调适，以简短、及时的回应表明参与。`}
    ]}
  ]

};

/* 兜底：若某节点尚未补英文，render 时跳过而不报错 */
if (typeof module !== "undefined") { module.exports = { EN_ORIGINALS }; }
