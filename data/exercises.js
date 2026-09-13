/* =============================================================
 * 国际学术会议英语与跨文化交流 —— 课文习题库（课后练习 / 思考题 / 例题）
 * 配套 23 个考点学习页（Part I 13 单元 + Part II 10 节点）。
 *
 * 重要说明：原书为扫描版（无文字层），无法逐字 OCR 出每道原题。
 * 本库依据教材体例（Part I 各单元 Exercises、Part II Questions for Discussion /
 * Case Studies）与课程考核要点，复原了教材典型习题类型（问答、翻译、写作、
 * 讨论、改错、选择、填空），并逐题给出标准答案与关键解析，供对照练习。
 * 其中 U2 Exercise 1-3 来自用户提供的教材截图；其余题目为结合单元知识点、
 * 教材范文体例与网络真题重构的同步练习。
 *
 * 结构：const EXERCISES = { "<unitId>": [ {type, stem, answer, analysis} ] }
 *   type: 习题类型标签（问答/翻译/写作/讨论/改错/填空）
 *   stem: 题目
 *   answer: 标准答案 / 参考范文
 *   analysis: 关键解析（采分点、易错、思路）
 * ============================================================= */

const EXERCISES = {

  /* ---------------- Part I ---------------- */
  u1: [
    {type:"问答", stem:"Distinguish between a conference, a symposium and a seminar.", answer:"A conference is a large formal meeting lasting several days on a broad professional theme. A symposium is narrower and more specific in topic, often a part of or smaller than a conference. A seminar combines a lecture with discussion and is more teaching-oriented.",
     analysis:"采分点：① conference 规模大、主题宽、天数多；② symposium 主题更窄、常附属于 conference；③ seminar = 主讲+讨论、偏教学。三者按‘规模/主题广度/互动方式’区分。"},
    {type:"翻译", stem:"将下列句子译成英文：学术会议是来自不同国家、围绕共同专业兴趣聚首的学者们的正式集会。", answer:"An academic conference is a formal meeting where scholars from different countries gather to share a common professional interest.",
     analysis:"要点：① ‘学术会议’ academic conference；② ‘正式集会’ formal meeting；③ ‘围绕共同专业兴趣’ share a common professional interest / with a shared professional interest。避免逐字直译。"},
    {type:"讨论", stem:"Why is it important for a participant to know the difference between a keynote speech, a parallel session and a panel?", answer:"Knowing the format helps a participant prepare appropriately: a keynote sets the theme and is plenary; a parallel session is where most papers are presented in breakout rooms; a panel is a multi-speaker discussion. Preparation, length and interaction differ sharply.",
     analysis:"思路：从‘准备方式/时长/互动形式’三个维度说明差异，体现对会议流程的整体把握。"},
    {type:"填空", stem:"A ______ is a periodic, large-scale representative assembly usually convened by a learned society.", answer:"congress",
     analysis:"教材定义：congress 多指由学会主办、周期性、规模极大的代表大会。"},
    {type:"写作", stem:"List the main stages of an international academic conference from Call for Papers to further cooperation.", answer:"(1) Call for Papers; (2) Acceptance/Rejection of abstracts; (3) Letter of Invitation; (4) Acceptance of Invitation; (5) Opening Ceremony; (6) Paper Presentation; (7) Q&A Session; (8) Panel/parallel sessions; (9) Closing Speech; (10) Further Cooperation.",
     analysis:"采分点：按时间顺序列出会议全流程 10 个关键环节，不可遗漏或颠倒。"}
  ],
  u2: [
    {type:"写作", stem:"Write a formal letter of invitation inviting Professor Smith to deliver a keynote speech at an international conference.", answer:"Dear Professor Smith,\nOn behalf of the Organizing Committee of the 12th International Conference on Applied Linguistics, I am pleased to invite you to attend the conference and deliver a keynote speech. The conference will be held at Yunnan University, Kunming, from October 16 to 18, 2026. The theme is “Language, Society and Cross-Cultural Communication”. Please confirm your participation by June 30 and send an abstract to ical2026@univ.edu.cn. We look forward to your favorable reply.\nSincerely yours,\nProf. XXX\nChair of the Organizing Committee",
     analysis:"采分点：① 开头用 On behalf of… I am pleased to invite…；② 写明会议名称、时间、地点、主题；③ 说明邀请事项（keynote）；④ 明确截止日期与提交方式；⑤ 正式落款。称谓优先 Prof./Dr.。"},
    {type:"问答", stem:"What are the essential elements of a formal invitation letter?", answer:"They include: (1) salutation with correct title; (2) identity of the inviter and purpose; (3) key conference information (name, date, venue, theme); (4) the specific invitation (keynote/panel/attendance); (5) deadlines and submission channel; (6) contact and signature.",
     analysis:"记忆要点：称谓—身份目的—会议信息—邀请事项—截止与渠道—联系落款，六要素齐全方为正式。"},
    {type:"改错", stem:"Correct the error: “Mr. Professor Smith, we invite you to the conference.”", answer:"Use only one title. Prefer “Dear Professor Smith,” (or “Dear Dr. Smith,”). Never combine Mr. with Professor.",
     analysis:"易错点：Dr. 与 Prof. 不可叠加（Dr. Professor X 错误）；学术信函优先用学术头衔而非 Mr./Mrs.。"},
    {type:"填空", stem:"Exercise 1.1 （教材原文填空）ICIC 2007—A Welcome Invitation to Visit Qingdao: ______ the 2007 International Conference on Intelligent Computing (ICIC 2007) to be held on August 21–24, 2007 in Qingdao, Shandong Province, China.（①我们诚挚地邀请您参加）", answer:"We cordially invite you to attend",
     analysis:"教材原文用 cordially invite you to attend 表达‘诚挚邀请参加’；不可漏掉 to attend。"},
    {type:"填空", stem:"Exercise 1.2 ______ The Ocean University of China, The Institute of Intelligent Machines, The University of Science & Technology of China, Chinese Academy of Sciences…（②会议将由……主办）", answer:"The conference is sponsored by",
     analysis:"‘由……主办’用 be sponsored by；主语 the conference 须与后面列举单位匹配。"},
    {type:"填空", stem:"Exercise 1.3 …and technically co-sponsored by The IEEE Computational Intelligence Society (pending) and The International Neural Network Society, and ______.（③国家自然科学基金委员会提供资助）", answer:"financially supported by the National Natural Science Foundation of China",
     analysis:"‘国家自然科学基金委员会’译为 the National Natural Science Foundation of China；‘提供资助’用 financially supported by。"},
    {type:"填空", stem:"Exercise 1.4 ______ is Advanced Intelligent Computing Technology and Applications.（④本次会议的主题是）", answer:"The theme of this conference is",
     analysis:"主题句固定表达：The theme of this conference is…"},
    {type:"填空", stem:"Exercise 1.5 Only ______ are especially solicited, including theories, methodologies, and applications in science and technology.（⑤与这一主题相关且有原创性、质量高的论文）", answer:"original and high-quality papers related to this theme",
     analysis:"‘与……相关’用 related to；‘原创性、质量高’用 original and high-quality。"},
    {type:"填空", stem:"Exercise 1.6 ______ will be published in ______ by Springer, including Lecture Notes in Computer Sciences (LNCS) / Lecture Notes in Artificial Intelligence (LNAI) / Communications in Computer and Information Science (CCIS).（⑥会议论文集）", answer:"The conference proceedings",
     analysis:"‘会议论文集’为 conference proceedings；注意 proceeding 用复数。"},
    {type:"填空", stem:"Exercise 1.7 The conference proceedings will be published in ______ by Springer, including LNCS / LNAI / CCIS.（⑦学术讲座纪要系列）", answer:"the Lecture Notes series",
     analysis:"Springer 的 LNCS/LNAI/CCIS 均属 Lecture Notes series（学术讲座纪要系列）。"},
    {type:"填空", stem:"Exercise 1.8 ______ will be strictly refereed.（⑧所有提交的论文）", answer:"All submitted papers",
     analysis:"‘所有提交的论文’译为 All submitted papers；submitted 为过去分词作定语。"},
    {type:"翻译", stem:"Exercise 2. Directions: Translate the following into English. 诚邀参加第三届国际跨学科中国研究论坛：东西方跨文化交流。各位同仁：为庆祝中国外国文学协会成立30周年，江海大学中文系与艺术系将联合举办“第三届国际跨学科中国研究论坛：东西方跨文化交流”。会议将于2012年9月2–4日在江海大学海天宾馆举行。本次会议共邀请到8位来自世界各地，包括美国、英国、法国、日本和俄罗斯的专家学者出席，学者们将对以下的专题进行研讨：当代中外文学中的身份认同；外国文学中的中国；文学与影视中的中国人；影视语言与翻译。除主题发言外，还有一个由国际学者组成的分组讨论，议题为“谭恩美的《喜福会》”。这次会议是学术界的盛事，会议讨论的问题涵盖不同的知识领域，充分反映出学者们在中国研究领域的多元性。研讨涉及文学、艺术、历史、人类学、影视学、社会学、政治学、语言学、传播学等领域。欢迎参加第三届国际跨学科中国研究论坛：东西方跨文化交流。会议将主要以中文进行，但有些分组讨论以英文进行。详情可浏览中国外国文学协会网页。谨启。第三届国际跨学科中国研究论坛：东西方跨文化交流组委会。",
     answer:"Invitation to the Third International Interdisciplinary Forum on China Studies: East-West Intercultural Communication\nDear Colleagues,\nTo celebrate the 30th anniversary of the China Foreign Literature Association, the Department of Chinese and the Department of Arts of Jianghai University will jointly host the \"Third International Interdisciplinary Forum on China Studies: East-West Intercultural Communication\". The forum will be held from September 2 to 4, 2012, at Haitian Hotel, Jianghai University.\nA total of eight experts and scholars from around the world, including the United States, the United Kingdom, France, Japan and Russia, have been invited to attend. They will discuss the following topics: identity in contemporary Chinese and foreign literature; China in foreign literature; Chinese people in literature and film; film language and translation. In addition to keynote speeches, there will be a panel discussion composed of international scholars on \"Amy Tan's The Joy Luck Club\".\nThis conference is a grand event in academia. The issues to be discussed cover various fields of knowledge, fully reflecting the diversity of scholars in China Studies. The discussions will involve literature, art, history, anthropology, film and television studies, sociology, political science, linguistics, communication studies, and other fields.\nYou are welcome to participate in the Third International Interdisciplinary Forum on China Studies: East-West Intercultural Communication. The conference will be conducted mainly in Chinese, but some panel discussions will be held in English. For details, please visit the website of the China Foreign Literature Association.\nSincerely yours,\nThe Organizing Committee of the Third International Interdisciplinary Forum on China Studies: East-West Intercultural Communication",
     analysis:"采分点：① 标题/称呼/落款格式；② ‘联合举办’用 jointly host；③ ‘来自世界各地’用 from around the world；④ ‘分组讨论’用 panel discussion；⑤ ‘以中文进行’用 be conducted mainly in Chinese。译文须正式、信息完整。"},
    {type:"写作", stem:"Exercise 3. Directions: Study the samples in this Unit or refer to a sample in the relevant website and write an invitation to a conference in your academic field.", answer:"Dear Colleagues,\nOn behalf of the Organizing Committee of the 3rd International Conference on Environmental Humanities (ICEH 2026), I am pleased to invite you to attend the conference to be held at Sichuan University, Chengdu, China, from November 6 to 8, 2026.\nThe theme of this year's conference is \"Climate Change, Culture and Sustainable Futures\". We invite scholars from across the humanities and social sciences to submit original abstracts on topics including ecological criticism, environmental history, climate justice, and sustainable development communication.\nAbstracts of 300–500 words should be sent to iceh2026@scu.edu.cn by June 30, 2026. Notification of acceptance will be sent by August 15, 2026.\nWe look forward to your favorable reply.\nSincerely yours,\nProf. XXX\nChair of the Organizing Committee",
     analysis:"范文结构：① 代表组委会发出邀请；② 会议名称/时间/地点/主题；③ 征稿方向/摘要要求/截止；④ 期待回复与落款。写作时可替换为自己学科领域的会议信息。"}
  ],
  u3: [
    {type:"写作", stem:"Write a reply accepting an invitation and stating that you will present a paper.", answer:"Dear Professor XXX,\nThank you very much for your kind invitation to the 12th ICAL. I am delighted to accept and would like to present a paper entitled “Cross-Cultural Pragmatics in Academic Discourse”. I plan to arrive on October 15. Could you advise on accommodation and visa documents? I look forward to seeing you in Kunming.\nYours sincerely,\nDr. YYY",
     analysis:"采分点：① 感谢+明确接受（delighted to accept）；② 说明宣读论文及题名；③ 提出行程/签证等实际需求；④ 致谢与期待。尽早回复是礼仪。"},
    {type:"问答", stem:"When accepting an invitation, what information should you include besides saying yes?", answer:"Besides accepting, state whether you will present a paper (and its title), your travel dates, and any practical needs such as visa support or accommodation.",
     analysis:"思路：接受不是只说‘去’，要让会务方能安排（是否报告、行程、协助事项）。"},
    {type:"翻译", stem:"将下列句子译成英文：非常感谢您的盛情邀请，我欣然接受，并将在会议上宣读题为《学术话语中的跨文化语用学》的论文。", answer:"Thank you very much for your kind invitation. I am delighted to accept and would like to present a paper entitled “Cross-Cultural Pragmatics in Academic Discourse” at the conference.",
     analysis:"要点：① ‘盛情邀请’ kind invitation；② ‘欣然接受’ delighted to accept；③ ‘宣读论文’ present a paper；④ 书名/论文题用引号。"},
    {type:"讨论", stem:"Why is it important to confirm travel dates and visa needs when accepting an invitation?", answer:"Because the organizing committee needs this information to arrange accommodation, airport pickup and invitation letters for visa applications; early notice prevents last-minute problems.",
     analysis:"实务要点：接受邀请时提供行程与签证需求，便于会务统筹安排。"}
  ],
  u4: [
    {type:"写作", stem:"Write a polite letter declining an invitation to speak, giving a reason and offering an alternative.", answer:"Dear Professor XXX,\nThank you for the kind invitation to deliver a keynote at ICAL 2026. I am truly honored. However, a prior teaching commitment in that period makes it impossible for me to attend. I have asked my colleague Dr. YYY to present our joint work instead, and I hope to join a future edition. With best regards,\nProf. ZZZ",
     analysis:"采分点：① 致谢与认可；② 表达遗憾（regret）；③ 真实得体理由；④ 提供替代（同事代讲/未来参会）；⑤ 保持合作余地。理由须具体，避免含糊推脱。"},
    {type:"问答", stem:"Why should a declination leave the door open for future cooperation?", answer:"Because academic circles are a community; a graceful decline with an alternative preserves the relationship and may lead to future collaboration or publication.",
     analysis:"跨文化要点：婉拒≠断联，‘留余地’体现学术共同体的善意与长期主义。"},
    {type:"翻译", stem:"将下列句子译成英文：由于该时段我已有既定教学安排，无法出席会议，深感遗憾。我已请我的同事代为宣读我们的合作论文。", answer:"However, I very much regret that a prior teaching commitment in that period makes it impossible for me to attend. I have asked my colleague to present our joint paper on my behalf.",
     analysis:"要点：① ‘既定教学安排’ prior teaching commitment；② ‘无法出席’ makes it impossible for me to attend；③ ‘代为’ on my behalf / in my place。"},
    {type:"讨论", stem:"If you decline an invitation because the topic is outside your expertise, how can you phrase it politely?", answer:"You can say: “I am honored by the invitation, but the topic falls somewhat outside my main area of expertise. I would not be able to do it justice. Perhaps my colleague Prof. X, whose work directly addresses this area, would be a better fit.”",
     analysis:"跨文化/婉拒策略：将原因归于‘专业匹配度’而非个人能力，并主动推荐更合适人选。"}
  ],
  u5: [
    {type:"写作", stem:"Draft a Call for Papers for an international conference, including themes and submission rules.", answer:"CALL FOR PAPERS\nThe 12th International Conference on Applied Linguistics (ICAL 2026)\nKunming, China | October 16–18, 2026\nTheme: Language, Society and Cross-Cultural Communication\nThe Committee invites abstracts on: (1) Pragmatics; (2) Intercultural communication; (3) Academic writing; (4) Corpus linguistics. Abstracts (300–500 words) should be sent to ical2026@univ.edu.cn by July 31. Notification of acceptance: August 31.",
     analysis:"采分点：① 会议名称/届次/时间/地点/主题；② 分议题（sub-themes）；③ 摘要字数格式；④ 提交邮箱与截止；⑤ 录用通知时间。须注明时区与格式，减少反复询问。"},
    {type:"问答", stem:"What details must a Call for Papers specify to avoid confusion?", answer:"It must specify abstract length and format, the submission email, the deadline (with time zone), topics/sub-themes, and the date of acceptance notification.",
     analysis:"实务要点：模糊的截止日期或格式会造成大量无效投稿与邮件追问。"},
    {type:"填空", stem:"A typical Call for Papers invites scholars to submit original ______ on specified topics or sub-themes.", answer:"abstracts",
     analysis:"教材常用表达：submit original abstracts（提交原创摘要）。"},
    {type:"改错", stem:"Correct: “Abstracts (300–500 words) should be send to ical2026@univ.edu.cn.”", answer:"“Abstracts (300–500 words) should be sent to ical2026@univ.edu.cn.” (passive voice requires the past participle sent, not send).",
     analysis:"语法点：被动语态 be + 过去分词，send 的过去分词为 sent。"}
  ],
  u6: [
    {type:"写作", stem:"Write an acceptance notice for a submitted abstract, including reviewers’ comments.", answer:"Dear Dr. YYY,\nWe are pleased to inform you that your abstract “Cross-Cultural Pragmatics in Academic Discourse” has been accepted for the parallel session on Intercultural Communication. Reviewers suggested minor revisions on the literature review. Please upload the full paper by September 15 and complete registration by August 31.\nSincerely,\nThe ICAL 2026 Program Committee",
     analysis:"采分点：① 明确录用（accepted for…）；② 区分 ‘摘要录用’ 与 ‘全文录用’；③ 给出具体审稿意见（minor revisions…）；④ 说明后续步骤与截止。意见要具体而非泛泛。"},
    {type:"问答", stem:"Why must an acceptance notice distinguish ‘abstract accepted’ from ‘full paper accepted’?", answer:"Because authors may assume a full-paper slot when only the abstract passed; clarifying prevents misunderstanding about session length and registration obligations.",
     analysis:"易错点：录用层级不同，注册与全文提交义务不同，必须点明。"},
    {type:"填空", stem:"An acceptance notice usually begins with “We are pleased to ______ you that your abstract has been accepted.”", answer:"inform",
     analysis:"固定句型：We are pleased to inform you that…（我们很高兴通知您……）。"},
    {type:"翻译", stem:"将下列句子译成英文：审稿人建议对文献综述部分进行小幅修改，并请于9月15日前上传全文。", answer:"Reviewers suggested minor revisions to the literature review section. Please upload the full paper by September 15.",
     analysis:"要点：① ‘审稿人’ reviewers；② ‘小幅修改’ minor revisions；③ ‘文献综述’ literature review；④ ‘上传全文’ upload the full paper。"}
  ],
  u7: [
    {type:"写作", stem:"Write a rejection letter that is polite and encourages future submission.", answer:"Dear Dr. YYY,\nThank you for submitting your abstract to ICAL 2026. Regrettably, due to the limited number of session slots, we are unable to include your paper this year. Reviewers noted that, while your work is of interest, it falls outside the main scope of this year’s themes. We encourage you to submit to future conferences or related journals. We wish you continued success.\nSincerely,\nThe ICAL 2026 Program Committee",
     analysis:"采分点：① 致谢付出；② 婉转告知未录用；③ 客观非个人化理由（slots limited / out of scope）；④ 提供建设性出路（future / journals）；⑤ 祝福。理由须保护作者自尊。"},
    {type:"问答", stem:"What should a rejection letter avoid doing?", answer:"It should avoid personal criticism, vague dismissals, or anything that discourages the author; reasons must be objective and the tone supportive.",
     analysis:"跨文化/学术伦理：退稿体现学术共同体善意，避免打击作者积极性。"},
    {type:"填空", stem:"A rejection letter should give an objective, non-personal reason, such as limited session ______ or the topic being outside the conference ______.", answer:"slots|scope",
     analysis:"常用客观理由：limited number of session slots（分会场名额有限）/ outside the scope（超出主题范围）。"},
    {type:"翻译", stem:"将下列句子译成英文：虽然您的论文很有价值，但与本年度会议主题范围不符，因此今年无法录用。", answer:"While your work is of interest, it falls outside the main scope of this year's themes, so we are unable to include it this year.",
     analysis:"要点：① ‘虽然……但……’用 While 引导让步状语从句；② ‘主题范围’ scope of themes；③ ‘无法录用’ unable to include。"}
  ],
  u8: [
    {type:"写作", stem:"Write a spoken introduction for the next speaker, highlighting relevant achievements.", answer:"It is my great pleasure to introduce our next speaker, Professor YYY of the University of X. She is widely known for her pioneering work on cross-cultural pragmatics and is the author of over one hundred papers. Today she will share her latest findings on academic discourse across cultures. Please join me in welcoming Professor YYY.",
     analysis:"采分点：① 欢迎并宣布；② 姓名/单位/职称；③ 与本次报告相关的成就（勿罗列全部履历）；④ 主题预告；⑤ 请出。避免过度吹捧，保持学术克制。"},
    {type:"问答", stem:"What should you emphasize when introducing a speaker?", answer:"Emphasize achievements relevant to the current talk, not the person’s entire CV; keep it sincere and appropriately brief.",
     analysis:"易错点：介绍应‘贴题’，而非炫耀式堆砌。"},
    {type:"翻译", stem:"将下列句子译成英文：下面有请我们的下一位演讲嘉宾，X 大学的 YYY 教授，她将介绍跨文化学术话语方面的最新研究成果。", answer:"Please join me in welcoming our next speaker, Professor YYY of the University of X, who will present her latest research findings on academic discourse across cultures.",
     analysis:"要点：① ‘有请’ welcome；② ‘演讲嘉宾’ speaker；③ ‘最新研究成果’ latest research findings；④ 注意定语从句使用。"},
    {type:"改错", stem:"Correct: “It is my great pleasure to introduce our next speaker, Professor YYY. She is famous for everything she has done.”", answer:"Make the introduction relevant: “It is my great pleasure to introduce our next speaker, Professor YYY of the University of X, widely known for her pioneering work on cross-cultural pragmatics.” Avoid vague “everything”.",
     analysis:"介绍应具体、贴题，避免空泛表述。"}
  ],
  u9: [
    {type:"写作", stem:"Deliver a short welcome speech (about 80 words) for an international conference.", answer:"A very good morning to you all. On behalf of Yunnan University and the Organizing Committee, I would like to extend our warmest welcome to all distinguished guests and participants. It is a great honor to gather so many leading minds in applied linguistics here in Kunming. I thank the committee, volunteers and sponsors. I wish the conference a complete success. Now let us begin.",
     analysis:"采分点：① 代表主办方致欢迎（On behalf of… warmest welcome）；② 感谢各方；③ 点明主题与意义；④ 预祝成功；⑤ 转入下一项。欢迎辞宜简短热情、点题，避免长篇学术论述。"},
    {type:"问答", stem:"How does a welcome speech differ from an opening speech?", answer:"A welcome speech focuses on greeting and thanking; an opening speech additionally declares the conference open and outlines the agenda and vision.",
     analysis:"区分：‘欢迎’重问候致谢，‘开幕’重宣布开始与议程概述。"},
    {type:"填空", stem:"A welcome speech usually begins with “On behalf of the ______ Committee, I would like to extend our warmest welcome…”", answer:"Organizing",
     analysis:"固定表达：On behalf of the Organizing Committee（代表组委会）。"},
    {type:"填空", stem:"In a welcome speech, the speaker often wishes the conference a complete ______.", answer:"success",
     analysis:"常见祝福语：wish the conference a complete success（预祝会议圆满成功）。"}
  ],
  u10: [
    {type:"写作", stem:"Give the key sentences of an opening-ceremony speech that declares the conference open.", answer:"Distinguished guests, colleagues, and friends: It is my privilege to declare the 12th International Conference on Applied Linguistics officially open. This year we receive over 600 submissions from 45 countries. Over the next three days we will explore how language, society and cross-cultural communication reshape our discipline. I now declare the conference open.",
     analysis:"采分点：① 宣布开幕（declare … officially open）；② 感谢筹备与支持单位；③ 概述目标/规模/亮点；④ 展望领域发展；⑤ 再次欢迎预祝圆满。保持仪式感与高度概括。"},
    {type:"问答", stem:"What elements make an opening speech different from a paper presentation?", answer:"An opening speech is ceremonial and high-level (declares open, outlines vision), whereas a paper presentation reports specific research (background, method, results).",
     analysis:"易错点：开幕辞不可变成论文宣读，须保持概括与仪式感。"},
    {type:"翻译", stem:"将下列句子译成英文：我谨宣布第十二届应用语言学国际会议正式开幕。", answer:"It is my privilege to declare the 12th International Conference on Applied Linguistics officially open.",
     analysis:"要点：① ‘谨宣布’ it is my privilege to declare；② ‘正式开幕’ officially open。"},
    {type:"填空", stem:"An opening ceremony speech usually ______ the conference open and outlines the agenda and vision.", answer:"declares",
     analysis:"开幕辞核心功能：declare the conference open（宣布会议开幕）。"}
  ],
  u11: [
    {type:"问答", stem:"Outline the standard structure of an academic presentation.", answer:"(1) Opening: greet, self-introduce, state title; (2) Roadmap: signpost the structure; (3) Body: background–method–results–discussion; (4) Conclusion: summarize; (5) Thanks + invite questions.",
     analysis:"采分点：IMRaD 思路 + signposting。开场自报家门、提纲用衔接语、主体按背景-方法-结果-讨论、结尾总结并致谢邀请提问。"},
    {type:"翻译", stem:"译为中文：First, I will give the background; then I will explain our method; finally, I will present the main findings.", answer:"首先，我将介绍研究背景；接着说明我们的方法；最后，呈现主要发现。",
     analysis:"要点：signposting 衔接语（First / then / finally）体现结构清晰，是学术演讲高频得分表达。"},
    {type:"讨论", stem:"Why is reading from a script discouraged in conference presentations?", answer:"Reading verbatim reduces eye contact and engagement, makes the talk sound monotone, and signals lack of preparation; speaking naturally with slides is far more effective.",
     analysis:"跨文化/演讲技巧：念稿是大忌，应‘讲’而非‘读’，配合眼神交流与图表引导。"},
    {type:"填空", stem:"In a presentation, phrases such as “First…”, “Next…” and “Finally…” are called ______, which help the audience follow the structure.", answer:"signposts|signposting language",
     analysis:"教材术语：signposting / signposting language（路标语/衔接语）。"},
    {type:"写作", stem:"Write the opening 60 words of an academic presentation, including greeting, self-introduction, title and roadmap.", answer:"Good morning. I am Dr. Zhang from Yunnan University. Thank you for coming. My presentation today is entitled “Digital Humanities and Minority Languages in Southwest China”. I will first introduce the background, then describe our data and method, and finally discuss the main findings and implications.",
     analysis:"采分点：① 问候；② 自报姓名单位；③ 报告题目；④ 结构预告（roadmap）。开场控制在 1 分钟内。"}
  ],
  u12: [
    {type:"问答", stem:"What are three strategies for handling a difficult question in Q&A?", answer:"(1) Confirm you understood: “If I understand you correctly, you are asking…”; (2) Buy time: “That’s an interesting question, let me think.”; (3) If unsure: “That’s beyond the scope; I’d be happy to discuss offline.”",
     analysis:"采分点：听懂确认、争取时间、得体退路三策略。切忌当场争辩或编造答案。"},
    {type:"翻译", stem:"译为中文：Could you repeat the question, please? I didn’t catch that.", answer:"请问您能重复一下问题吗？我刚才没听清。",
     analysis:"要点：未听清时礼貌请求重复是 Q&A 基本交际策略，体现尊重而非尴尬。"},
    {type:"讨论", stem:"How should one respond to harsh criticism across cultures?", answer:"Treat academic critique as dialogue, not attack. Thank the questioner, acknowledge the point, and respond with evidence rather than emotion; offer offline discussion if needed.",
     analysis:"跨文化要点：部分文化直率质疑属常态，应以‘感谢指正’化解，保持专业与面子兼顾。"},
    {type:"填空", stem:"If you did not hear a question clearly, you may say: “______ the question, please? I didn’t catch that.”", answer:"Could you repeat",
     analysis:"Q&A 常用表达：Could you repeat the question, please?（请您重复一下问题好吗？）"},
    {type:"写作", stem:"Write a polite response to a question you cannot answer immediately in a Q&A session.", answer:"That's an interesting question. I don't have the data at hand to give you a definitive answer, but I would be happy to discuss it with you after the session. Thank you for raising it.",
     analysis:"采分点：① 肯定问题；② 诚实说明无法当场回答；③ 提供会后讨论；④ 致谢。避免编造或回避。"}
  ],
  u13: [
    {type:"写作", stem:"Write a brief closing speech (about 70 words).", answer:"Now I would like to bring this memorable conference to a close. On behalf of the committee, I thank every participant, our speakers, and especially the volunteers. We leave with new collaborations and fresh ideas. The 13th ICAL will be held in 2028 in Shanghai. I wish you all a pleasant journey home. Thank you.",
     analysis:"采分点：① 宣布接近尾声；② 致谢多方（含志愿者）；③ 总结成果；④ 宣布下届（如有）；⑤ 祝福送别。闭幕辞应‘收束’而非开启新议题。"},
    {type:"问答", stem:"Whom should a closing speech thank, and why is the volunteer acknowledgment important?", answer:"It should thank organizers, speakers, sponsors, participants and volunteers. Volunteers are often overlooked though essential, so explicit thanks reflects courtesy and accuracy.",
     analysis:"易错点：志愿者与幕后人员致谢常被忽略，须包含以体现周全。"},
    {type:"翻译", stem:"将下列句子译成英文：现在我宣布本次难忘的会议圆满结束。祝大家归途愉快。", answer:"Now I would like to bring this memorable conference to a close. I wish you all a pleasant journey home.",
     analysis:"要点：① ‘圆满结束’ bring … to a close；② ‘归途愉快’ pleasant journey home。"},
    {type:"填空", stem:"A closing speech often announces information about the next ______ of the conference, if available.", answer:"edition",
     analysis:"常用表达：the next edition of the conference（下一届会议）。"}
  ],

  /* ---------------- Part II ---------------- */
  c1: [
    {type:"问答", stem:"Give Tylor’s definition of culture and explain its key words.", answer:"“Culture is that complex whole which includes knowledge, belief, art, morals, law, custom, and any other capabilities acquired by a person as a member of society.” Key words: complex whole (复合整体), acquired (习得，非遗传), member of society (社会成员).",
     analysis:"采分点：能复述定义并点出‘习得性/复合整体/社会性’三关键词。常考辨析。"},
    {type:"问答", stem:"What are the three levels of culture, and why do deep-level differences cause conflict?", answer:"Surface (food, dress, rituals), middle (norms, institutions), deep (values, worldview). Surface differences are visible but harmless; deep value differences are invisible yet the root of cross-cultural conflict.",
     analysis:"思路：三层次框架是案例分析常用工具；表层易见、深层价值观才是冲突根源。"},
    {type:"讨论", stem:"Why is intercultural communication essential in international academic conferences?", answer:"Because scholars from diverse backgrounds use English as a working language; misunderstandings from values, norms and communication styles can derail collaboration. Awareness is the prerequisite for effective exchange.",
     analysis:"跨文化要点：国际会议本身就是跨文化场域，文化误读可致合作失败。"},
    {type:"填空", stem:"According to E. B. Tylor, culture is ______, not innate; it is learned by individuals as members of society.", answer:"acquired|learned",
     analysis:"文化核心特征：acquired/learned（后天习得），而非 innate（先天遗传）。"},
    {type:"案例讨论", stem:"Case: A Chinese scholar says “It’s just so-so” after a Western colleague praises her paper. The colleague looks confused and stops praising. Analyze the incident using the three levels of culture.", answer:"Surface: modest verbal response. Middle: social norm in Chinese culture that self-praise is inappropriate; one should deflect compliments. Deep: collectivism/relational face vs. individualism; in Western contexts direct acceptance is expected. The mismatch at the deep level causes the colleague to misread modesty as insecurity or disagreement.",
     analysis:"案例分析框架：表层（语言行为）—中层（社会规范）—深层（价值观/世界观）。跨文化冲突多源于深层差异。"}
  ],
  c2: [
    {type:"问答", stem:"List the main stages of verbal intercultural communication in a conference context.", answer:"Preparatory work → first encounter (greetings, salutation) → later encounters (small talk) → paper sessions → Q&A → panel → compliments → further cooperation.",
     analysis:"采分点：按会议时间线梳理言语跨文化交际全流程，是 Part II 2.1–2.9 的主线。"},
    {type:"问答", stem:"What topics are appropriate for small talk at a conference, and which should be avoided?", answer:"Appropriate: weather, travel, research interests, the host city. Avoid: religion, income, politics, and overly personal questions.",
     analysis:"易错点：寒暄须中性，敏感话题（宗教/收入/政治）易引发不适。"},
    {type:"讨论", stem:"Why should one study the target culture before a conference?", answer:"Preparation (customs, taboos, communication style, etiquette, dress) prevents unintentional offense and improves the effectiveness of cross-cultural interaction.",
     analysis:"实务要点：会前准备是跨文化得体交际的前提。"},
    {type:"填空", stem:"______ talk at a conference should be neutral and light; avoid sensitive topics such as religion, income and politics.", answer:"Small",
     analysis:"small talk 指闲聊/寒暄，是会议社交中建立融洽关系的重要手段。"},
    {type:"翻译", stem:"将下列句子译成英文：会前了解目标文化的习俗、禁忌和沟通风格，有助于避免无意冒犯并提高跨文化交际效果。", answer:"Learning about the target culture's customs, taboos and communication style before the conference helps avoid unintentional offense and improve the effectiveness of intercultural communication.",
     analysis:"要点：① ‘会前了解’ learn about… before the conference；② ‘禁忌’ taboos；③ ‘无意冒犯’ unintentional offense。"}
  ],
  c221: [
    {type:"问答", stem:"What are appropriate English greetings at a first meeting of a conference?", answer:"“Nice to meet you!” / “Good to see you.” For reunion: “Good to see you again.” Avoid opening with “What’s your name?” which sounds abrupt.",
     analysis:"采分点：初次见面用 Nice to meet you，不宜直接问姓名；肢体接触须看对方文化。"},
    {type:"翻译", stem:"译为中文：Nice to meet you! I really enjoyed your paper on cross-cultural pragmatics.", answer:"很高兴认识您！我非常欣赏您关于跨文化语用学的论文。",
     analysis:"要点：greeting + comment on shared context 是得体的初次接触开场。"},
    {type:"填空", stem:"When meeting someone for the first time at a conference, it is polite to say “Nice to ______ you!” rather than directly asking for their name.", answer:"meet",
     analysis:"固定问候语：Nice to meet you!（很高兴认识您！）"}
  ],
  c222: [
    {type:"问答", stem:"Summarize the rules for academic salutations in English correspondence.", answer:"Use Dr. for doctoral holders, Prof. for professors; Ms. when gender/marital status is unknown; prefer academic titles over Mr./Mrs. Never combine titles (no “Dr. Professor X”).",
     analysis:"采分点：头衔使用规范；不可叠用；Ms. 已逐步取代 Mrs./Miss 的婚姻状态区分。"},
    {type:"改错", stem:"Correct: “Dear Mr. Professor Smith,”", answer:"Use a single title: “Dear Professor Smith,” (or “Dear Dr. Smith,”). Do not combine Mr. with Professor.",
     analysis:"易错点：中文‘先生/教授’叠加的思维惯性在英文中会出错。"},
    {type:"填空", stem:"In formal academic correspondence, if you do not know the recipient's gender or marital status, use ______ rather than Mrs. or Miss.", answer:"Ms.",
     analysis:"现代学术信函中，Ms. 适用于所有女性，不区分已婚未婚。"}
  ],
  c223: [
    {type:"问答", stem:"Give three polite ways to interrupt and one way to ask for opinion in a conference.", answer:"Interrupt: “Sorry to interrupt, but…” / “May I add something?” / “Excuse me, may I come in here?”. Ask opinion: “What do you think of my presentation?” (more appropriate than “Do you like my talk?”).",
     analysis:"采分点：打断须礼貌；征求意见用 What do you think… 比 Do you like… 更得体。"},
    {type:"讨论", stem:"Why is “Stop talking” inappropriate in a conference?", answer:"It is blunt and face-threatening; conference interaction requires politeness strategies. Use “May I add a point?” instead.",
     analysis:"跨文化/语用：直接打断/命令极不礼貌，须用缓和策略。"},
    {type:"填空", stem:"To ask for an opinion politely, say “What do you ______ of my presentation?” rather than “Do you like my talk?”", answer:"think",
     analysis:"What do you think of… 是征求学术意见的得体表达。"},
    {type:"翻译", stem:"将下列句子译成英文：抱歉打断一下，但我想补充一点关于研究方法的意见。", answer:"Sorry to interrupt, but I'd like to add a point about the research method.",
     analysis:"要点：① ‘抱歉打断’ sorry to interrupt；② ‘补充一点’ add a point；③ 注意 but 连接转折。"}
  ],
  c24: [
    {type:"问答", stem:"Explain ‘culturally loaded words’ with two examples and note the translation pitfall.", answer:"They carry culture-specific connotations. E.g. dragon = auspicious in China but evil in the West (use ‘loong’); red = festive in China but danger/deficit in the West. Pitfall: translate connotation, not just denotation; beware false friends (actual ≠ present, eventually ≠ immediately).",
     analysis:"采分点：定义+举例+翻译陷阱（connotation vs denotation，假朋友）。高频失分点。"},
    {type:"翻译", stem:"译为中文：The word ‘dragon’ carries positive connotations in Chinese culture but is often negative in the West.", answer:"“龙”一词在中国文化中含积极内涵，但在西方常含消极内涵。",
     analysis:"要点：connotation 译为‘内涵/联想意义’，准确传达文化负载差异。"},
    {type:"填空", stem:"False friends are words that look similar in two languages but have different ______.", answer:"meanings",
     analysis:"假朋友（false friends）：外形相似但意义不同，是翻译与阅读中的常见陷阱。"},
    {type:"讨论", stem:"Case: A Chinese presenter uses “dragon” to refer to China’s spirit, but Western listeners feel uneasy. How would you explain or avoid this problem?", answer:"Explain that in Chinese culture the dragon symbolizes auspiciousness, power and good fortune, while in the West it often represents evil. For international audiences, consider using the loanword “loong” or adding an explicit cultural note to avoid misunderstanding.",
     analysis:"文化负载词案例：龙的 connotation 在东西方差异显著；对外传播宜用 loong 或加注释。"}
  ],
  c28: [
    {type:"问答", stem:"Contrast how compliments are accepted in English-speaking and East Asian cultures.", answer:"English-speaking cultures accept directly (“Thank you”); many East Asian cultures deflect modestly (“No, not at all”). At international events, accepting gracefully fits the interlocutor’s expectation.",
     analysis:"采分点：赞美回应差异体现‘面子’文化；国际场合建议接受式以避免尴尬。"},
    {type:"讨论", stem:"Should a Chinese scholar modestly deflect compliments at an international conference? Why or why not?", answer:"Generally no—accepting gracefully is recommended, because in English-speaking contexts modest deflection may be read as insecure or insincere. Adapt to the interlocutor’s norm.",
     analysis:"跨文化要点：入乡随俗，避免过度自贬造成误解。"},
    {type:"填空", stem:"In English-speaking cultures, the most common response to a compliment is simply “______ you.”", answer:"Thank",
     analysis:"英语文化直接接受赞美：Thank you. 与东亚谦逊推辞形成对比。"}
  ],
  c29: [
    {type:"写作", stem:"Write a short follow-up email after a conference to propose collaboration.", answer:"Dear Prof. X,\nThank you again for the inspiring discussion at ICAL 2026. I would like to share our draft and explore a joint submission on [topic]. Would you be available for a short video call next week? Best regards, [Name]",
     analysis:"采分点：① 个性化提及会议交集；② 重申合作点；③ 给出下一步（共享论文/约会议）；④ 专业简洁。跟进须及时（1–2 周内）且具体。"},
    {type:"问答", stem:"What makes a post-conference follow-up email effective?", answer:"It is sent within 1–2 weeks, personalized (references the conference encounter), states a concrete next step, and avoids a generic mass-mailing tone.",
     analysis:"实务要点：个性化+及时+具体，才能提高合作转化率。"},
    {type:"翻译", stem:"将下列句子译成英文：非常感谢您在会议期间富有启发性的讨论，我希望与您探讨就某一主题联合投稿的可能性。", answer:"Thank you again for the inspiring discussion during the conference. I would like to explore the possibility of a joint submission on a certain topic with you.",
     analysis:"要点：① ‘富有启发性的讨论’ inspiring discussion；② ‘联合投稿’ joint submission；③ 注意介词搭配。"}
  ],
  c3: [
    {type:"问答", stem:"List Hofstede's six cultural dimensions and give one example of each.", answer:"① Power Distance (acceptance of unequal power); ② Individualism vs. Collectivism (personal goals vs. group loyalty); ③ Masculinity vs. Femininity (competition vs. caring/quality of life); ④ Uncertainty Avoidance (tolerance of ambiguity); ⑤ Long-term vs. Short-term Orientation (thrift/future vs. present/tradition); ⑥ Indulgence vs. Restraint (gratification of desires).",
     analysis:"采分点：六维度名称+一句释义，不可混淆维度归属。"},
    {type:"问答", stem:"Distinguish Kluckhohn & Strodtbeck's framework from Hofstede's in terms of focus.", answer:"Kluckhohn & Strodtbeck (1950s–60s) proposed six value orientations — relationship to environment, time, human nature, activity, responsibility, space — focusing on fundamental value dilemmas. Hofstede (from IBM data) proposed dimensions measured across national samples, focusing on quantifiable cultural indices. Both are maps of difference, but their origins, dimensions and units differ.",
     analysis:"采分点：提出者/年代/维度内容/测量方式四方面对比。"},
    {type:"填空", stem:"In Hall's terms, a culture where meaning is largely implicit and carried by context is called a ______-context culture.", answer:"high",
     analysis:"高语境文化（high-context）信息多隐含于语境与关系，表达含蓄。"},
    {type:"翻译", stem:"将下列句子译成英文：文化是区分一个群体成员与另一群人的集体心理程序。", answer:"Culture is the collective programming of the mind that distinguishes the members of one group from those of another.",
     analysis:"要点：① ‘集体心理程序’ collective programming of the mind；② distinguish A from B。"},
    {type:"讨论", stem:"What are the main criticisms of Hofstede's and Hall's frameworks, and how should we use them responsibly?", answer:"Criticisms: Hofstede's original sample was narrow (IBM male employees) and dimensions are abstract and overlapping; Hall's high/low context is a continuum, not a binary. Nation-level averages cannot be applied to individuals (ecological fallacy). Use them as heuristic maps, not stereotypes: treat them as hypotheses to test in each encounter.",
     analysis:"采分点：样本、抽象重叠、连续谱、生态谬误；结论：作参考地图而非刻板标签。"}
  ],
  c4: [
    {type:"案例讨论", stem:"Case: A luxury brand advertises with a model using chopsticks to eat Italian food in a mocking tone, and is widely criticized. Analyze the case using the three levels of culture and propose remedies.", answer:"Surface: mocking use of chopsticks and exaggerated gesture. Middle: the ad ignores the norm in Chinese culture that dining etiquette and its utensils carry respect and hospitality. Deep: an ethnocentric (Western-coded) gaze treats another culture's symbol as a joke. Remedies: respect the symbol's meaning, pre-screen with local teams/cultural consultants, apologize sincerely rather than justify, and rebuild trust through long-term respectful localization.",
     analysis:"案例框架：表层（行为）—中层（规范）—深层（价值观）；对策含前置审核与长期修复。"},
    {type:"案例讨论", stem:"Case: In The Joy Luck Club, immigrant mothers and American-born daughters repeatedly misunderstand each other. Explain this in terms of high/low context and individualism/collectivism.", answer:"Mothers communicate in a high-context, collectivist mode—indirect, face-protecting, group-oriented. Daughters use a low-context, individualist mode—direct, explicit, self-assertive. Each reads the other's style as deficient, producing conflict that is value-based rather than purely linguistic.",
     analysis:"采分点：高/低语境 + 集体/个人主义两组概念的双重错位。"},
    {type:"问答", stem:"Define 'media frame', 'labeling and stigmatizing', and 'confirmation bias', and explain how they distort cross-cultural perception.", answer:"Media frame: selecting, emphasizing and excluding information to shape perception. Labeling/stigmatizing: using unfair terms to defame or belittle a group. Confirmation bias: seeking information that supports preexisting beliefs. Together they can build and reinforce stereotypes, making audiences see other cultures through a distorted lens rather than through facts.",
     analysis:"采分点：三个术语定义 + 对跨文化认知的扭曲机制。"},
    {type:"讨论", stem:"In an academic discussion, a Western scholar criticizes your country's policies based on a media report. How would you respond professionally?", answer:"Stay calm and evidence-based: acknowledge the right to raise the issue, question the reliability of the specific source (ask which data/method it used), present alternative data and peer-reviewed studies, distinguish the media institution's stance from individual scholars, and invite follow-up discussion. Avoid emotional confrontation; the academic setting rewards rational argument.",
     analysis:"采分点：冷静—质疑信源与证据—提供替代数据—区分对象—邀后续讨论；忌情绪对抗。"}
  ]
};

if (typeof module !== "undefined") { module.exports = { EXERCISES }; }
