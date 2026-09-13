/* ============================================================
 * 全文数据 · 骆洪《国际学术会议英语与跨文化交流》
 * 云南大学出版社 · 研究生教学用书 · ISBN 978-7-5482-1100-6
 * ------------------------------------------------------------
 * 说明：原书为扫描版 PDF（286 页，无文字层），本模块为逐页
 *      人工校录的全文文本。block 语法：
 *      #  一级小节   ##  二级小节   @  居中/署名行
 *      -  列表项     >  说明行     其余  正文段落
 * ============================================================ */
const FULLTEXT = {
  meta: {
    title_cn: "国际学术会议英语与跨文化交流",
    title_en: "English for International Academic Conference and Intercultural Communication",
    author: "骆　洪　编著",
    contributors: "把　明　倪筱菊　牛　培　张洁颖",
    publisher: "云南大学出版社",
    isbn: "978-7-5482-1100-6",
    price: "20.00元",
    edition: "2012年7月第1版 · 2012年7月第1次印刷",
    funding: "云南大学研究生精品课程建设项目资助",
    cip: "中国版本图书馆CIP数据核字（2012）第136330号",
    total_pages: 286,
    transcribed_pages: 286,
    verified_pages: 68,
    structured_pages: 218
  },

  /* 结构化目录（用于侧栏 / 目录导航） */
  contents: [
    { part: "Part I", title_en: "English for International Academic Conference", title_cn: "第一部分　国际学术会议英语", print: 1, units: [
      { unit: "Unit 1", title_en: "International Academic Conference: an Overview", title_cn: "国际学术会议简介", print: 1 },
      { unit: "Unit 2", title_en: "Letter of Invitation", title_cn: "邀请函", print: 3 },
      { unit: "Unit 3", title_en: "Acceptance of an Invitation", title_cn: "接受邀请", print: 13 },
      { unit: "Unit 4", title_en: "Declining an Invitation to Speak", title_cn: "谢绝邀请发言", print: 19 },
      { unit: "Unit 5", title_en: "Call for Papers", title_cn: "征稿启事", print: 24 },
      { unit: "Unit 6", title_en: "Acceptance of a Paper or an Abstract", title_cn: "录用稿件", print: 40 },
      { unit: "Unit 7", title_en: "Rejection of a Paper", title_cn: "拒稿", print: 54 },
      { unit: "Unit 8", title_en: "Introducing a Speaker", title_cn: "介绍演讲人", print: 61 },
      { unit: "Unit 9", title_en: "Welcome Speech", title_cn: "欢迎词", print: 72 },
      { unit: "Unit 10", title_en: "Speech at the Opening Ceremony", title_cn: "开幕词", print: 91 },
      { unit: "Unit 11", title_en: "Conference Presentation", title_cn: "会议发言", print: 109 },
      { unit: "Unit 12", title_en: "Question and Answer (Q&A) Session", title_cn: "问答环节", print: 139 },
      { unit: "Unit 13", title_en: "Closing Speech", title_cn: "闭幕词", print: 148 }
    ] },
    { part: "Part II", title_en: "Intercultural Communication and International Academic Conference", title_cn: "第二部分　跨文化交际与国际学术会议", print: 166, units: [
      { unit: "1", title_en: "Culture and Intercultural Communication", title_cn: "文化与跨文化交际", print: 166 },
      { unit: "1.1", title_en: "Overview", title_cn: "概述", print: 166 },
      { unit: "1.2", title_en: "Culture", title_cn: "文化", print: 167 },
      { unit: "1.3", title_en: "Intercultural Communication", title_cn: "跨文化交际", print: 168 },
      { unit: "1.3.1", title_en: "The Importance of Intercultural Communication", title_cn: "跨文化交际的重要性", print: 170 },
      { unit: "1.3.2", title_en: "The Influences of Culture on Intercultural Communication", title_cn: "文化对跨文化交际的影响", print: 172 },
      { unit: "1.3.3", title_en: "The Domain of Intercultural Communication Studies", title_cn: "跨文化交际研究的领域", print: 173 },
      { unit: "2", title_en: "Verbal Intercultural Communication in the Context of International Academic Conference", title_cn: "国际学术会议语境中的言语跨文化交际", print: 174 },
      { unit: "2.1", title_en: "Preparatory Work", title_cn: "准备工作", print: 174 },
      { unit: "2.2", title_en: "Communication at the First Encounter", title_cn: "初次见面时的交流", print: 176 },
      { unit: "2.3", title_en: "Communication at the Encounters Later on", title_cn: "后续见面的交流", print: 180 },
      { unit: "2.4", title_en: "Culturally Loaded Words and Expressions", title_cn: "文化负载词与表达", print: 181 },
      { unit: "2.5", title_en: "Paper Sessions: The Occasion of Paper Presentation", title_cn: "论文宣读环节", print: 186 },
      { unit: "2.6", title_en: "Question & Answer Session", title_cn: "问答环节", print: 190 },
      { unit: "2.7", title_en: "Panel Session", title_cn: "小组讨论", print: 191 },
      { unit: "2.8", title_en: "Compliments", title_cn: "称赞", print: 192 },
      { unit: "2.9", title_en: "Further Cooperation after the Conference", title_cn: "会后进一步合作", print: 193 }
    ] },
    { part: "Part III", title_en: "Chinese Translation of the Sample Texts and Key to Exercise", title_cn: "第三部分　范文中文译文与练习答案", print: 196, units: [
      { unit: "Unit 2", title_en: "Letter of Invitation", title_cn: "邀请函", print: 196 },
      { unit: "Unit 3", title_en: "Acceptance of an Invitation", title_cn: "接受邀请", print: 202 },
      { unit: "Unit 4", title_en: "Declining an Invitation to Speak", title_cn: "谢绝邀请发言", print: 205 },
      { unit: "Unit 5", title_en: "Call for Papers", title_cn: "征稿启事", print: 208 },
      { unit: "Unit 6", title_en: "Acceptance of a Paper or an Abstract", title_cn: "录用稿件", print: 217 },
      { unit: "Unit 7", title_en: "Rejection of a Paper", title_cn: "拒稿", print: 225 },
      { unit: "Unit 8", title_en: "Introducing a Speaker", title_cn: "介绍演讲人", print: 229 },
      { unit: "Unit 9", title_en: "Welcome Speech", title_cn: "欢迎词", print: 235 },
      { unit: "Unit 10", title_en: "Speech at the Opening Ceremony", title_cn: "开幕词", print: 245 },
      { unit: "Unit 11", title_en: "Conference Presentation", title_cn: "会议发言", print: 255 },
      { unit: "Unit 12", title_en: "Question and Answer (Q&A) Session", title_cn: "问答环节", print: 262 },
      { unit: "Unit 13", title_en: "Closing Speech", title_cn: "闭幕词", print: 267 },
      { unit: "后记", title_en: "Postscript", title_cn: "后记", print: 277 }
    ] }
  ],

  /* 正文（按节组织，每节含若干页） */
  sections: [
    {
      id: "front",
      part: "",
      unit: "",
      title_en: "Front Matter",
      title_cn: "封面 · 内容提要 · 前言 · 目录",
      pages: [
        { pdf: 1, print: null, cover: true, content:
`@研究生精品丛书　研究生教学用书
@国际学术会议英语
@与跨文化交流
@English for International Academic Conference
@and Intercultural Communication
@骆　洪　编著
@云南大学出版社` },

        { pdf: 2, print: null, content:
`#内容提要
“国际学术会议英语”是一门综合性较强的实践性课程，既有会议交流的基本知识和专业知识，又有英语运用的综合训练。通过该课程的学习，学生能够熟练掌握国际会议基本流程、征集论文及论文提交、会议发言、学术交流活动、研究项目等内容的英语表达；能够用英语撰写学术论文、完成学术会议发言（Presentation）、回答听众的问题等。此外，国际学术交流本身即是跨文化交流活动，中国学者用英语作为工作语言开展国际交流与合作，有必要掌握相关的跨文化交流知识，尤其是语言、文化与跨文化交流方面的知识。学生通过该课程的学习，将能在国际交流过程中尽量避免母语的思维定势，提高英语表达的效度，更好地达到学术交流的实际效果。
>ISBN 978-7-5482-1100-6　定价：20.00元` },

        { pdf: 3, print: null, content:
`@研究生精品丛书　研究生教学用书
@本教材由云南大学研究生精品课程建设项目资助
@国际学术会议英语
@与跨文化交流
@English for International Academic Conference
@and Intercultural Communication
@编　著：骆　洪
@参编人员：把　明　倪筱菊
@牛　培　张洁颖
@云南大学出版社` },

        { pdf: 4, print: null, content:
`#图书在版编目（CIP）数据
国际学术会议英语与跨文化交流：英文／骆洪编著．—昆明：云南大学出版社，2012
ISBN 978-7-5482-1100-6
Ⅰ.①国…　Ⅱ.①骆…　Ⅲ.①会议—英语—研究　Ⅳ.①H31
中国版本图书馆CIP数据核字（2012）第136330号
##国际学术会议英语与跨文化交流　骆　洪　编著
策划编辑：张丽华
责任编辑：张丽华　李　江　潘　芮
封面设计：丁群亚
出版发行：云南大学出版社
印　　装：昆明宝王印务有限公司
开　　本：889mm×1194mm　1/32
印　　张：8.875
字　　数：250千
版　　次：2012年7月第1版
印　　次：2012年7月第1次印刷
书　　号：ISBN 978-7-5482-1100-6
定　　价：20.00元
地　　址：昆明市翠湖北路2号云南大学英华园内
邮　　编：650091
发行电话：0871-5031071　5033244
E-mail：market@ynup.com` },

        { pdf: 5, print: 1, content:
`#前　言
用英语进行国际学术交流是研究生英语应用能力的较好体现，也是把握相关学科前沿、从事国际学术交流与合作、促进专业学习和开展创新活动的重要手段之一。
“国际学术会议英语”是一门综合性较强的实践性课程，既有参加会议进行交流的基本知识和专业知识，又有英语运用的综合训练。通过该课程的学习，学生能够熟悉英语语境下国际会议的基本流程，掌握有关论文征集、论文提交、论文宣读、小组讨论、问答等内容的英语表达，了解会议不同场景中用英语所作的发言。此外，国际学术交流本身即是跨文化交流活动，中国学者用英语作为工作语言开展学术交流，加强学术合作，有必要掌握相关的跨文化交流知识，尤其是语言、文化与跨文化交流方面的知识。该课程将有助于有效的跨文化交流活动。
本教材加强了对所选素材的解释，所有范文均附有中文译文，便于学生更好地理解原文，掌握相应的表达方式；其次，补充的模拟发言稿和阅读范文提纲为学生进一步提高英语学习效率和运用能力提供了指导；第三，增加了“跨文化语境中的国际学术会议交流”部分，介绍有关跨文化交流的知识以及在国际学术会议不同场景中需要注意的语言文化知识。虽然篇幅有限，但勾勒出了国际学术会议语境中有关跨文化交流的一些基本知识。
本教材编写过程中，骆洪承担教材内容和体系的总体策划与设计；负责所有资料的查询，编选、整理出第一部分的范文；撰写第一部分的第一单元、“Presentation”部分的模拟发言稿和阅读范文提纲；撰写第二部分（“跨文化语境中的国际学术会议交流”）；编` },

        { pdf: 6, print: 2, content:
`写第三部分的“练习及练习答案”；审校第三部分的译文；翻译“邀请函”部分的正文；负责全书的统稿、审校和修改。参编人员编写第一部分范文之后的词汇和表达，完成第三部分中各部分范文的翻译。具体分工如下，把明承担“接受邀请、谢绝邀请和Presentation”部分，倪筱菊承担“征稿、录用稿件和邀请函”部分，牛培承担“欢迎词、开幕词和问答”部分，张洁颖承担“拒稿、介绍演讲人和闭幕词”部分。此外，考虑到第一部分的第一单元“国际学术会议简介”无须设计练习，第三部分省略了“第一单元”。
本教材主要适用于非英语专业研究生、英语爱好者以及相关人员。
由于编者水平有限，书中一定存在不少问题，请大家批评指正。
@骆　洪
@2012年4月` },

        { pdf: 7, print: null, content:
`#Contents
>Part I　English for International Academic Conference　……（1）
- Unit 1　International Academic Conference: an Overview　……（1）
- Unit 2　Letter of Invitation　……（3）
- Unit 3　Acceptance of an Invitation　……（13）
- Unit 4　Declining an Invitation to Speak　……（19）
- Unit 5　Call for Papers　……（24）
- Unit 6　Acceptance of a Paper or an Abstract　……（40）
- Unit 7　Rejection of a Paper　……（54）
- Unit 8　Introducing a Speaker　……（61）
- Unit 9　Welcome Speech　……（72）
- Unit 10　Speech at the Opening Ceremony　……（91）
- Unit 11　Conference Presentation　……（109）
- Unit 12　Question and Answer (Q&A) Session　……（139）
- Unit 13　Closing Speech　……（148）
>Part II　Intercultural Communication and International Academic Conference　……（166）
- 1. Culture and Intercultural Communication　……（166）
- 1.1 Overview　……（166）
- 1.2 Culture　……（167）
- 1.3 Intercultural Communication　……（168）
- 1.3.1 The Importance of Intercultural Communication　……（170）
- 1.3.2 The Influences of Culture on Intercultural Communication　……（172）
- 1.3.3 The Domain of Intercultural Communication Studies　……（173）` },

        { pdf: 8, print: null, content:
`#Contents（续）
- 2. Verbal Intercultural Communication in the Context of International Academic Conference　……（174）
- 2.1 Preparatory Work　……（174）
- 2.2 Communication at the First Encounter　……（176）
- 2.2.1 Greetings　……（176）
- 2.2.2 Salutation　……（179）
- 2.2.3 The Most Useful Expressions　……（180）
- 2.3 Communication at the Encounters Later on　……（180）
- 2.4 Culturally Loaded Words and Expressions　……（181）
- 2.5 Paper Sessions: The Occasion of Paper Presentation　……（186）
- 2.6 Question & Answer Session　……（190）
- 2.7 Panel Session　……（191）
- 2.8 Compliments　……（192）
- 2.9 Further Cooperation after the Conference　……（193）
>Part III　Chinese Translation of the Sample Texts and Key to Exercise　……（196）
- Unit 2　Letter of Invitation　……（196）
- Unit 3　Acceptance of an Invitation　……（202）
- Unit 4　Declining an Invitation to Speak　……（205）
- Unit 5　Call for Papers　……（208）
- Unit 6　Acceptance of a Paper or an Abstract　……（217）
- Unit 7　Rejection of a Paper　……（225）
- Unit 8　Introducing a Speaker　……（229）
- Unit 9　Welcome Speech　……（235）
- Unit 10　Speech at the Opening Ceremony　……（245）
- Unit 11　Conference Presentation　……（255）
- Unit 12　Question and Answer (Q&A) Session　……（262）
- Unit 13　Closing Speech　……（267）
- 后　记　……（277）` }
      ]
    },

    {
      id: "p1-u1",
      part: "Part I",
      unit: "Unit 1",
      title_en: "International Academic Conference: an Overview",
      title_cn: "国际学术会议简介",
      print_start: 1,
      pages: [
        { pdf: 9, print: 1, content:
`#Unit 1　International Academic Conference: an Overview
An international academic conference refers to the conference for scholars, experts, and researchers from different countries and regions to present their work, to exchange ideas, and to share their experiences in a certain academic field. Generally, the participants are academics but quite often other people concerned are also invited or welcome to the conference in favor of research, cooperation, and development. It is an important occasion for researchers and scholars for exchange of information, for mutual development and for further cooperative work.
There are three common types of international academic conference, the themed conference, small and organized around a major subject, the general conference, larger and organized on various subjects at different sessions, and the professional conference, medium-sized or large in scale, for both academics and non-academics but around the given academically related subjects.
International conferences feature various presentations which are often followed by a question and answer session. There are also keynote speeches generally by important scholars, researchers, or administrators. Keynote speech can be long while paper presentations are usually required to be concise and short, conducted usually in a limited period of time. Besides, there are panel sessions where speakers present their` },

        { pdf: 10, print: 2, content:
`ideas and have discussions on the subjects presented.
Generally, papers or abstract of papers are submitted ahead of time and requirements about such writings are expected to be exactly followed. In the preparation of the papers for presentation or inclusion in the conference proceedings, citation is always highlighted. It means that when you write your paper, you must give a brief reference to the original sources such as a book, article, or website, including the name of the author, title, publication, date, page number, and things concerned. Particularly the ideas and statistic data of other people must be noted in some form. Ways of direct or indirect quotations are given in different Citation Guides. Here, “Chicago-Style Citation Quick Guide” is recommended unless otherwise specially required by different conferences. This “Chicago-Style” is easily learned, currently popular, and applicable to the fields of the liberal arts and science.
The papers of the prospective presenters are usually peer-reviewed by the conference committee members or other designated referees ahead of time.
For larger international academic conferences, academic publishing houses will come up concerning publication of conference proceedings and the like. Besides, many conferences have their own journals publishing the articles of the researchers in their academic field.
Sometimes, social or entertainment activities like tours and receptions may be included in the conference program (usually at the expense of the participants).
##References
- 1. http://en.wikipedia.org/wiki/Academic_conference
- 2. http://ubishops.ca.libguides.com/content.php?pid=64683&sid=485393
- 3. http://www.chicagomanualofstyle.org/tools_citationguide.html` }
      ]
    },

    {
      id: "p1-u2",
      part: "Part I",
      unit: "Unit 2",
      title_en: "Letter of Invitation",
      title_cn: "邀请函",
      print_start: 3,
      pages: [
        { pdf: 11, print: 3, content:
`#Unit 2　Letter of Invitation
##Sample Study
>Directions: Read the following samples and learn the useful expressions.
##Sample 1
@2008 China Top High Schools Alliance International Education Conference, Beijing
@Letter of Invitation
Respected Excellency,
We would like to avail this opportunity to invite you to participate in the 2008 China Top Schools Alliance International Education Conference to be convened on 14th December 2008 in Beijing.
2008 China Top High Schools Alliance International Education Conference is an international exchange platform based on Foundation College of China Scholarship Council and International Education Fund. It has access to all the Chinese Top high schools and advanced international educational resources and faces China's basic education. There are over 400 Chinese Top high schools as institutional members on this platform. They are all making unswerving efforts to promote the exchanges, coordination and cooperation between China's Top high schools and world's advanced educational resources.
At the meantime, it will offer a platform for well-known international educational institutions to better learn about the quality, characteristics and status of development of China's basic education and a chance to select well qualified Chinese students for overseas studies.` },

        { pdf: 12, print: 4, content:
`Through a series of debates and exchange activities, the conference will aim to introduce advanced international education resources and mature specialized theoretical methods and experiences into China and promote the studies and practice in the development of the sense of responsibilities, innovative abilities, creativity and abilities to engage in international exchanges of Chinese students.
China Top High Schools Alliance International Education Conference focuses on the academic aspects and the integration between theories and practice and is committed to promoting exchanges between China's senior high schools and overseas institutions of higher learning. We plan to organize the Conference on an annual basis and build it as a platform for the interactions and exchanges among practitioners and researchers of senior high schools, enriching and developing theories and practice in the internationalization of education.
@12 October 2008
@China Top High Schools Alliance International Education Conference
@Organizing Committee
（http://www.topschoolcn.org/english2008/Conferenceinvitatio/200909/23.shtml）
##Words and Expressions
- 1. unswerving [ʌnˈswɜːviŋ] adj. strong and not changing or becoming weaker 坚定的；始终不渝的
- 2. have access to... 接近……；通向……
- 3. institutions of higher learning 高等院校
##Useful Sentence Patterns
- 1. We would like to avail this opportunity to... 我们借此机会……` },

        { pdf: 13, print: 5, content:
`- 2. ... to make unswerving efforts to promote the exchanges, coordination and cooperation between... and... 坚持不懈地努力推进……和……之间的交流、协调与合作
- 3. At the meantime, it will offer a platform for... 同时，此次会议为……提供了平台。
##Sample 2
@Invitation to Participate HPAIR Conference
On behalf of the Harvard Project for Asian and International Relations, our organization would like to invite you and your students to collaborate with us to further the global understanding of Asian and international relations through our annual summer conference in Asia.
The Harvard Project for Asian and International Relations (HPAIR) is a partnership between the students and faculty of Harvard University, offering a sustained academic program and a forum of exchange to facilitate discussion of the most important economic, political, and social issues relevant to the Asia-Pacific region. HPAIR's international conference has emerged as the largest annual Harvard event in Asia and the largest annual student conference in the Asia-Pacific region, attracting a wide variety of distinguished speakers and future leaders as Harvard's student outpost in Asia.
Our conference this year, co-hosted by Fudan University, will be held August 22 – 25th, 2005 in Tokyo, Japan. The theme will be “Futuring Asia: Contemporary Challenges and Emerging Realities”. Our workshops will focus on the following six topics:
- • Interests, Institutions and Identities: Understanding Security Issues in East Asia` },

        { pdf: 14, print: 6, content:
`- • A Matter of Trust: The Role of Trust in Shaping Civil Society and Rule of Law in Asia
- • Higher Education and Active Citizenship: The Public Role of Universities in East Asia
- • Global Health Care Systems: Working Towards a Higher Health Standard
- • Reinventing Diaspora: Exploring Globalization through Human Migration
- • Visualizing Asia: Global Culture and National Narratives in Contemporary “Asian” Art
The HPAIR Conference extends invitation to all students in college level and beyond. Please go to http://www.hpair.org/ to apply. We are looking forward to your participation!
（http://www.cenet.org.cn/article.asp?articleid=16935）
##Words and Expressions
- 1. facilitate [fəˈsɪlɪteɪt] vt. to make an action or a process possible or easier 促进；帮助；使容易
- 2. diaspora [daɪˈæspərə] n. the movement of the Jewish people away from their own country to live and work in other countries 离散的犹太人；散居
- 3. collaborate [kəˈlæbəreɪt] vi. to work together with somebody in order to produce or achieve something 合作
- 4. on behalf of... 谨代表……
##Useful Sentence Patterns
- 1. to further the understanding of... 进一步推进对……的理解
- 2. to offer a sustained academic program and a forum of exchange to` },

        { pdf: 15, print: 7, content:
`- facilitate discussion of... 提供持续的学术计划，搭建交流的平台，推进有关……问题的探讨
- 3. Our conference this year (is) co-hosted by... 我们今年的大会由……共同主办。
##Exercise
- 1. Directions: Fill in the blanks in English based on the information given in the brackets.
@ICIC 2007—A Welcome Invitation to Visit Qingdao
__________（①我们诚挚地邀请您参加）the 2007 International Conference on Intelligent Computing (ICIC 2007) to be held on August 21 - 24, 2007 in Qingdao, Shandong Province, China. __________（②会议将由……主办）The Ocean University of China, The Institute of Intelligent Machines, The University of Science & Technology of China, Chinese Academy of Sciences, and technically co-sponsored by The IEEE Computational Intelligence Society (pending) and The International Neural Network Society, and __________（③国家自然科学基金委员会提供资助）. __________（④本次会议的主题是）is Advanced Intelligent Computing Technology and Applications. Only __________（⑤与这一主题相关且有原创性、质量高的论文）are especially solicited, including theories, methodologies, and applications in science and technology. Topics covering industrial issues/applications and academic research into intelligent computing will be welcome. __________（⑥会议论文集）will be published in __________（⑦学术讲座纪要系列）by Springer, including Lecture Notes in Computer Sciences (LNCS) / Lecture Notes in Artificial Intelligence (LNAI) / Communications in Computer and Information Science (CCIS). __________（⑧所有提交的论文）` },

        { pdf: 16, print: 8, content:
`will __________（⑨由同行专家严格评审）based on originality, significance and clarity. Only papers presenting novel research results or successful innovative applications are __________（⑩才会被考虑出版）.
@Organized by The Ocean University of China
@Co-Organized by The Institute of Intelligent Machines, CAS
@University of Science & Technology of China
（http://www.ic-ic.org/2007/welcome.htm）
- 2. Directions: Translate the following into English.
@诚邀参加第三届国际跨学科中国研究论坛：东西方跨文化交流
各位同仁：
为庆祝中国外国文学协会成立30周年，江海大学中文系与艺术系将联合举办“第三届国际跨学科中国研究论坛：东西方跨文化交流”。会议将于2012年9月2-4日在江海大学海天宾馆举行。
本次会议共邀请到8位来自世界各地，包括美国、英国、法国、日本和俄罗斯的专家学者出席，学者们将对以下的专题进行研讨：当代中外文学中的身份认同；外国文学中的中国；文学与影视中的中国人；影视语言与翻译。除主题发言外，还有一个由国际学者组成的分组讨论，议题为“谭恩美的《喜福会》”。
这次会议是学术界的盛事，会议讨论的问题涵盖不同的知识领域，充分反映出学者们在中国研究领域的多元性。研讨涉及文学、艺术、历史、人类学、影视学、社会学、政治学、语言学、传播学等领域。
欢迎参加第三届国际跨学科中国研究论坛：东西方跨文化交流。会议将主要以中文进行，但有些分组讨论以英文进行。详情可浏览中国外国文学协会网页。
@谨启
@第三届国际跨学科中国研究论坛：东西方跨文化交流组委会` },

        { pdf: 17, print: 9, content:
`- 3. Writing
>Directions: Study the samples in this Unit or refer to a sample in the relevant website and write an invitation to a conference in your academic field.
##Supplementary Reading
@INVITATION TO ATTEND 3rd ICRBM
Dear colleagues:
Since the first International Conference on Rodent Biology and Management (ICRBM) was successfully launched in October 1998, the ICRBM has attracted much attention from worldwide experts in many fields of rodent studies. The 2nd ICRBM was held in Canberra in February 2003 and built on the tremendous foundation of the inaugural meeting. More than 145 people from 35 countries attended the 2nd ICRBM. Now the ICRBM has become a very important platform for academic exchanges and collaboration among scientists internationally.
Rodents are the most important group of mammals in terms of species number, abundance, scope of distribution and their impact on the livelihoods of people. Due to increasing human disturbances and climate anomalies in the new century, we are now facing more challenges in dealing with the impacts and conservation of rodent species in agricultural, forested, peri-urban, urban and natural landscapes. A strong understanding of the ecology and social behavior of rodents has proven to be essential in the management of rodent problems. Since the 2nd ICRBM, there have been many exciting developments in the study of rodent biology and management, and in our understanding of rodent systematics. And there has been a noticeable increase in studies of rodent-disease interactions, including rodent zoonoses.
We are very pleased to announce that the 3rd ICRBM will be held` },

        { pdf: 18, print: 10, content:
`from August 28 to September 1, 2006, in Hanoi, Vietnam. A highlight of the conference will be the plenary program that will consist of eight invited presentations. The conference will end on a high note with an overview of the week's presentations by Professor Charles Krebs. Of course, the conference will also have stimulating symposia, posters and workshops. The conference will provide a unique opportunity to further develop the synergy between rodent biology and management. Plus there is the bonus of meeting in a magnificent setting: the beautiful city of Hanoi with its long and colorful history.
On behalf of the organizing committee, we invite all of our friends and colleagues from across the scientific disciplines and around the globe, to come and participate in this important conference.
@Sincerely
@Professor Zhibin Zhang, Co-chair
@Professor Nguyen Van Tuat, Co-chair
@December 2005
@3rd ICRBM Organizing Committee
@Honorary Chairman
@Prof. Charles Krebs
@CSIRO Sustainable Ecosystems
@GPO 284
@Canberra, ACT 2601
@AUSTRALIA
@charles.krebs@csiro.au
（http://icrbm2006.ioz.ac.cn/2nd/2ndannouncement.htm）
##Words and Expressions
- 1. rodent [ˈrəʊdənt] n. any small animal that belongs to a group of animals with strong sharp front teeth. Mice, rats and squirrels are all` },

        { pdf: 19, print: 11, content:
`- rodents. ［脊椎］啮齿动物
- 2. mammal [ˈmæməl] n. any animal that gives birth to live babies, not eggs, and feeds its young on milk. Cows, humans and whales are all mammals. ［脊椎］哺乳动物
- 3. anomaly [əˈnɒməli] n. a thing, situation, etc. that is different from what is normal or expected 异常；不规则；反常事物
- 4. zoonoses [zəʊəˈnəʊsɪs] n. a disease that can be transferred between human and rodents 人畜共患病（zoonosis 的复数）
- 5. symposia [sɪmˈpəʊzɪə] n. a meeting at which experts have discussions about a particular subject; a small conference 座谈会；专题讨论会；专题论文集
- 6. synergy [ˈsɪnədʒi] n. the extra energy, power, success, etc. that is achieved by two or more people or companies working together, instead of on their own 协同；协同作用；增效
##Useful Sentence Patterns
- 1. ... to become a very important platform for academic exchanges and collaboration among... 已成为……进行学术交流与相互合作的重要平台
- 2. A strong understanding of... has proven to be essential 对……进行深入了解已显得尤为重要。
- 3. The conference will provide a unique opportunity to... 大会将为……提供良好的契机。
##References
- 1. http://www.topschoolcn.org/english2008/Conferenceinvitatio/200909/23.shtml
- 2. http://www.cenet.org.cn/article.asp?articleid=16935
- 3. http://www.ic-ic.org/2007/welcome.htm` },

        { pdf: 20, print: 12, content:
`- 4. http://icrbm2006.ioz.ac.cn/2nd/2ndannouncement.htm
- 5. 张知彬：《第三届国际鼠类生物学及治理大会在越南召开》，《兽类学报》，2006年第04期。http://mall.cnki.net/magazine/Article/SLXX200604017.htm
- 6. http://oald8.oxfordlearnersdictionaries.com/
- 7. 有道词典　http://dict.youdao.com/
- 8. Wehmeier, Sally. Oxford Advanced Learner's English-Chinese Dictionary. Sixth edition. Beijing: The Commercial Press, 2004.` }
      ]
    },

    {
      id: "p1-u3",
      part: "Part I",
      unit: "Unit 3",
      title_en: "Acceptance of an Invitation",
      title_cn: "接受邀请",
      print_start: 13,
      pages: [
        { pdf: 21, print: 13, content:
`#Unit 3　Acceptance of an Invitation
##Sample Study
>Directions: Read the following samples and learn the useful expressions.
##Sample 1
Dear [Recipient],
I am very much elated to have been invited to speak at the AIDS Conference this year. As informed, I shall be present for the Conference to be held at City Hall on Saturday, March 13 at 9:00 a.m.
I have been making some inroads into certain new concepts regarding AIDS prevention and wish to take up this opportunity to make my findings known to people attending the conference. Since I have many transparencies I wish to show for my presentation, I would want to have the facilities of an overhead projector in addition to a projector and a projection screen.
I thank you for making all arrangements towards stay and travel and thankfully accept your kind offer of a $1000 honorarium.
@Sincerely,
@Patricia White
（http://www.samplelettersworld.com/sample-letters/acceptance-letters/1598-accept-an-invitation-to-speak-or-perform-sample-letter-8）
##Words and Expressions
- 1. elated [i'leitid] adj. happy; pleased 兴高采烈的
- 2. transparency [træns'pærənsi] n. 幻灯片
- 3. overhead projector 高射投影仪` },

        { pdf: 22, print: 14, content:
`- 4. honorarium [ˌɔnə'rɛəriəm] n. allowance 报酬，谢礼
##Useful Sentence Patterns
- I have been making some inroads into... 我一直在探索……
##Sample 2
I am extremely honored by the invitation to speak at the Annual Technology Conference on Saturday, June 19, at 11:00 a.m. My topic on that day will cover on “VoIP—The New Technology in Improved Communications” and I shall be able to cover it in the stipulated thirty-minute schedule that you have allotted for me. I hope there will be adequate arrangements like an overhead projector and screen for me to make my presentation. I again thank you for providing me with this opportunity. I hope to be able to meet with many like minded people during the conference.
@Sincerely,
@Emily Ellison
（http://www.samplelettersworld.com/sample-letters/acceptance-letters/1599-accept-an-invitation-to-speak-or-perform-sample-letter-9）
##Words and Expressions
- 1. stipulate ['stipjuleit] vt. require or rule 规定
- 2. VoIP = Voice over Internet Protocol 网络电话
##Useful Sentence Patterns
- I hope to be able to meet with many like minded people during the conference. 会议期间，我希望能见到许多有识之士。` },

        { pdf: 23, print: 15, content:
`##Exercise
- 1. Directions: Fill in the blanks in English based on the information given in the brackets.
Dear Oscar,
__________（①我很荣幸收到您的邀请）asking me __________（②做有关……的演讲）on the 5th Public Relations Students Conference at Delaware University on June 1, 2010 at 1:00 p.m. I am pleased to inform you that __________（③我表示感谢并接受您的邀请）to inspire the students about the new trend of public relations.
I am at present developing new synergies of public relations. In fact, during the last few months I've been __________（④参加不同的研讨活动）to uplift my knowledge and techniques __________（⑤就这一话题/领域）. This event is a good opportunity to __________（⑥展示我的专门知识）and to share with the students the evolution of public relations.
I am planning to __________（⑦使用 PPT）in my presentation and I would appreciate it very much __________（⑧如果您能为我提供）an overhead projector and projection screen. Since I will be speaking to more than 200 students, it would be more comfortable to speak on a podium.
Thank you for __________（⑨安排宾馆住宿）for me. I look forward to seeing you at the conference.
@Sincerely,
@…
（http://officewriting.com/category/sample-letters/acceptance-letter/）
- 2. Directions: Translate the following into English.
@我很高兴地接受您的邀请，请我参加 2012 年 5 月 11 日星期五` },

        { pdf: 24, print: 16, content:
`在主校区肯特中心举行的会议并作发言。
因发言所需，恳请给我安排在有投影和屏幕的多功能厅，我还需要使用衣领话筒。如果方便的话，请给我一些有关听众的教育背景和经历等方面的情况简介，以便我更好地准备演讲的专业材料。
我很快就会安排我的行程。我将在会议开始前两天将我到达的确切日期电邮给您。下周我会给您电话确认我的行程并安排报销事宜。
我期待着会议的到来。
- 3. Writing
>Directions: Study the samples in this Unit or refer to a sample in the relevant website and write a letter to accept an invitation to a conference in your academic field.
##Supplementary Reading
Dear [Recipient],
I am extremely honored to agree to your invitation to speak at your seminar to be held at Charleston University. I am so happy that I was chosen for this occasion.
You have provided me with a list of topics and I opt to speak about Stem Cell Preservation. I have been doing a lot of research lately in this regard and would like to present my findings during the seminar.
My associate and I will fly down on October 21 and we shall come down to the seminar at the University at 9:00 a.m. on October 22. I shall be carrying some data on the laptop, so I will need some arrangements to connect this to the projector screen. I know that the audience will be of a type who has a lot of interest in the subject and will be happy to interact with them. Will it be possible to have an interaction session following the presentation?` },

        { pdf: 25, print: 17, content:
`Thank you for making the necessary arrangements beforehand. I have already received the tickets and the details about hotel reservations. I wish to once again take up this chance to thank you. I very much look ahead to being present at the seminar and making my speech.
@Sincerely,
@John White
（http://www.samplelettersworld.com/sample-letters/acceptance-letters/1596-accept-an-invitation-to-speak-or-perform-sample-letter-6）
##Words and Expressions
- 1. Stem Cell 干细胞
- 2. interact with sb. 与某人进行交流
- 3. take up 利用
- 4. look ahead to doing sth. 期待做某事
##Useful Sentence Patterns
- 1. I am extremely honored to agree to your invitation. 我非常荣幸地接受您的邀请。
- 2. Thank you for making the necessary arrangements beforehand. 感谢您提前所做的必要安排。
##References
- 1. http://www.samplelettersworld.com/sample-letters/acceptance-letters/1598-accept-an-invitation-to-speak-or-perform-sample-letter-8
- 2. http://www.samplelettersworld.com/sample-letters/acceptance-letters/1599-accept-an-invitation-to-speak-or-perform-sample-letter-9
- 3. http://officewriting.com/category/sample-letters/acceptance-letter/` },

        { pdf: 26, print: 18, content:
`- 4. http://www.samplelettersworld.com/sample-letters/acceptance-letters/1592-accept-an-invitation-to-speak-or-perform-sample-letter-2
- 5. http://www.samplelettersworld.com/sample-letters/acceptance-letters/1596-accept-an-invitation-to-speak-or-perform-sample-letter-6
- 6. 有道词典　http://dict.youdao.com/
- 7. 百度词典　http://dict.baidu.com/` }
      ]
    },

    {
      id: "p1-u4",
      part: "Part I",
      unit: "Unit 4",
      title_en: "Declining an Invitation to Speak",
      title_cn: "谢绝邀请发言",
      print_start: 19,
      pages: [
        { pdf: 27, print: 19, content:
`#Unit 4　Declining an Invitation to Speak
##Sample Study
>Directions: Read the following samples and learn the useful expressions.
##Sample 1
Dear [Recipient],
Thank you for your invitation to address your annual convention in October. Unfortunately, I am unable to accept your thoughtful invitation as I will be overseas during that time.
You may, perhaps, consider approaching Jenny Smith who is also an expert in stem cell research and who has just returned from a study program in France. I am sure her experience and knowledge would be of interest to your members. I am sure your conference will be a success and thank you for considering me.
@Sincerely,
@Albert Smith
（http://www.samplelettersworld.com/sample-letters/rejection-letters/3169-decline-an-invitation-to-speak-or-perform-sample-letter-1）
##Words and Expressions
- 1. address [ə'dres] v. to give a speech 发言，演讲
- 2. convention [kən'venʃən] n. conference or meeting 会议，大会` },

        { pdf: 28, print: 20, content:
`##Useful Sentence Patterns
- 1. Thank you for your invitation to address your annual convention. 感谢您邀请我在年会上发言。
- 2. I am sure your conference will be a success. 我相信，您的会议一定会取得圆满成功。
##Sample 2
Dear Ms. Hughes,
Thank you for your invitation to speak at your upcoming public works conference on November 8. I am sorry, but I must decline. I have a board meeting that day, and given the critical nature of our agenda, I am afraid I would not make it to the Regency.
If you have not yet considered an alternative speaker, I would suggest you give Elizabeth Forestall a call. She is extremely well-versed in matters of public works legalities—my firm has used her as an independent consultant on a number of occasions. Moreover, I know from first-hand experience that she gives thought-provoking, factually accurate presentations. Her number is 583-7952.
I wish you well on your conference, and regret that I cannot be a part of it.
@Sincerely,
@Lily Ong
（http://www.bizdocx.com/public-relations/invitations/declining-invitation-to-speak/）
##Words and Expressions
- 1. public works 市政工程，公共建筑工程
- 2. given ['givən] prep. take... into consideration 考虑到
- 3. first-hand experience 亲身经历` },

        { pdf: 29, print: 21, content:
`##Useful Sentence Patterns
- 1. Thank you for your invitation to speak at your upcoming... conference. 感谢您邀请我在……会议上发言。
- 2. I wish you well on your conference, and regret that I cannot be a part of it. 我衷心祝愿会议取得圆满成功，并为不能参加会议而表示遗憾。
##Exercise
- 1. Directions: Fill in the blanks in English based on the information given in the brackets.
Dear Mrs. Esteban,
I was __________（①很高兴应邀）to speak on breaking into publishing at your upcoming Writer's Conference. __________（②遗憾的是）, I will be in Missoula, Montana that weekend, on a book tour.
I'm sure you know how much I respect your organization and the work it does. I want you to know __________（③我很愿意下一次做演讲）, at a monthly meeting, or a non-fiction __________（④研讨会）, or whenever you feel it would be appropriate. __________（⑤祝您万事如意，会议成功）.
@Yours Truly,
（http://www.bizdocx.com/public-relations/invitations/declining-invitation-to-speak/）
- 2. Directions: Translate the following into English.
@谢绝邀请函的回复
尊敬的沙姆森教授：
非常感谢您 2011 年 12 月 29 日的来信，邀请我参加并主持将` },

        { pdf: 30, print: 22, content:
`于 2012 年 3 月 24–25 日在美国西雅图举行的第 7 届国际经济与可持续发展国际会议。
遗憾的是，因我今年夏天身体一直不好，不能接受您的邀请。医生强烈建议我近期不宜长途旅行。
我很遗憾错过这次机会，不能与您以及国际经济与可持续发展的诸位同仁见面、交流。
祝愿大会获得圆满成功！
@谨上
- 3. Writing
>Directions: Study the samples in this Unit or refer to a sample in the relevant website and write a letter to decline to speak at the conference in your academic field.
##Supplementary Reading
Dear Mr. Letterman,
Thank you for your invitation to do three interactive sessions on desktop publishing at your October 3 training conference. As much as I enjoy teaching people how to use such programs, I am afraid I must decline. My daughter is getting married that weekend, and is expecting me to walk her down the aisle!
Bruce Kerr is an associate of mine, and he frequently teaches such classes. You may want to get in touch with him. I'm not sure of his home number but I do know he works in the computing division at CitiCorp. He is a true professional, and your students would no doubt learn a lot from him.
Good luck with your conference!
@Cordially,` },

        { pdf: 31, print: 23, content:
`@Mary Smith
（http://www.bizdocx.com/public-relations/invitations/declining-invitation-to-speak/）
##Words and Expressions
- 1. interactive session 互动环节
- 2. walk her down the aisle 结婚，走红毯
- 3. CitiCorp [sitikɔːp] n. 花旗银行，花旗公司
##Useful Sentence Patterns
- 1. As much as I enjoy teaching people how to use such programs, I am afraid I must decline. 我非常乐意指导学员使用这些程序，但我没法接受您的邀请。
- 2. Good luck with your conference! 衷心祝愿培训会取得圆满成功！
##References
- 1. http://www.samplelettersworld.com/sample-letters/rejection-letters/3169-decline-an-invitation-to-speak-or-perform-sample-letter-1
- 2. http://www.bizdocx.com/public-relations/invitations/declining-invitation-to-speak/
- 3. http://hi.baidu.com/%D0%A1%B5%B6%B0%CD%C5%AE/blog/item/46073a9876bb5b006e068c8c.html
- 4. http://hi.baidu.com/%D0%A1%B5%B6%B0%CD%C5%AE/blog/item/46073a9876bb5b006e068c8c.html
- 5. 有道词典　http://dict.youdao.com/
- 6. 百度词典　http://dict.baidu.com/` }
      ]
    },

    {
      id: "p1-u5",
      part: "Part I",
      unit: "Unit 5",
      title_en: "Call for Papers",
      title_cn: "征稿启事",
      print_start: 24,
      pages: [
        { pdf: 32, print: 24, content:
`#Unit 5　Call for Papers
##Sample Study
>Directions: Read the following samples and learn to write a call for papers submitted to a conference concerning your current research field.
##Sample 1
@LBM 2011—The Fourth International Symposium
@on Languages in Biology and Medicine（LBM 2011）
@Website www.wseas.org
@Category LBM 2011
@Deadline: September 03, 2011 | When: December 14, 2011 – December 15, 2011
@Where: Singapore / Singapore
@Updated: 22:54:11 Apr. 27, 2011 GMT+9
@Call For Papers—CFP
@The Fourth International Symposium on Languages in Biology and Medicine（LBM 2011）
@Nanyang Technological University, Singapore
@14th and 15th December, 2011
##CALL FOR PAPERS
The International Symposium on Languages in Biology and Medicine (LBM) is a biannual interdisciplinary forum that brings together researchers in biology, chemistry, medicine, public health and informa-` },

        { pdf: 33, print: 25, content:
`tics to discuss and exploit cutting edge language technologies.
Language, in its many forms, is the universal means to represent, convey, and question knowledge. Although knowledge is still widely communicated through natural languages, biology and medicine also use a number of other means of communication: sequences, ontologies, chemical and mathematical formulae, modelling languages, graphs, images, etc. Associated technologies such as text mining and information extraction, systems modelling, information visualization, semantic indexing, and semantic querying are key for advancing biomedical research and healthcare provision. The automation and integration of all these solutions will enhance our understanding and discovery of knowledge in biology and medicine. As all the individual technologies are constantly being challenged by user demands and complexities in an interdisciplinary research environment, the LBM symposium series aims to offer a forum for synergistic interactions between them.
The Fourth LBM symposium (LBM 2011) will be held at the Nanyang Technological University (NTU), Singapore as a pre-conference workshop of the 25th Pacific Asia Conference on Language, Information and Computation (PACLIC 25), on December 14th and 15th, 2011. We invite papers about any aspect of language use in biology, chemistry, medicine, public health, pharmacology and related areas. We welcome papers on natural language processing, ontology engineering and matching, bio-sequence analysis, systems modelling, database systems, logical inference, information visualization, and image retrieval. This year we particularly encourage submissions focusing on languages in health-care and chemistry to reflect recent research trends in translational medicine and clinical and chemical informatics. The topics include, but are not limited to:` },

        { pdf: 34, print: 26, content:
`- • Text mining, retrieval, and management
- • Semantic indexing and querying
- • Ontology construction, mapping, integration, and maintenance
- • Sequence analysis using language processing techniques
- • Data modelling and annotation languages
- • Information integration and visualization
- • Languages for health-care and chemistry
##Important Dates
Call for Papers: June 3, 2011
Paper Submission Deadline: September 3, 2011
Poster Paper Submission Deadline: September 16, 2011
Paper and Poster Acceptance Notification: September 30, 2011
Camera Ready Version Due: October 15, 2011
Symposium Dates: December 14–15, 2011
LBM 2011 will offer a diversity of high quality presentations: keynote and invited talks, research presentations (short and long papers) with two special highlight tracks on languages in health-care and chemistry, poster presentations and a panel discussion. Research presentations will be selected by peer review from the Programme Committee, and the accepted papers will be distributed to participants in a digital form during the Symposium, together with the accepted papers of the PACLIC 25. We will also have best paper awards.
We intend to publish the best submissions in special issues of peer reviewed journals. We have selected the Journal of Bioinformatics and Computational Biology (JBCB) for publications with a strong focus on biomedical informatics, the Journal of Biomedical Semantics (JBMS) for publications with a strong focus on semantic resources and their use` },

        { pdf: 35, print: 27, content:
`in applications, and the Journal of Computing Science and Engineering (JCSE) for publications with a strong focus on computational and engineering issues.
@General Chairs
@Jong C. Park and Limsoon Wong
@Program Chairs
@Goran Nenadic and Jung-jae Kim
（http://conference.researchbib.com/?eventid=11277）
##Words and Expressions
- 1. ontology [ɔn'tɔlədʒi] n. a branch of philosophy that deals with the nature of existence 本体论；存在论；实体论
- 2. biomedical [baiəu'medikəl] adj. relating to how biology affects medicine 生物医学的
- 3. synergistic [ˌsinə'dʒistik] adj. the extra energy, power, success, etc. that is achieved by two or more people or companies working together, instead of on their own 协同的；协作的，协同作用的
- 4. retrieval [ri'triːvəl] n. the process of getting back information that is stored on a computer 检索
- 5. with two special highlight tracks on... 特别突出……两方面的内容
- 6. with a strong focus on... 特别强调……
##Useful Sentence Patterns
- 1. a forum that brings together researchers in... to discuss and exploit... 论坛云集……领域的专家来探讨……
- 2. to enhance our understanding and discovery of knowledge in... 促进我们对……知识的进一步理解
- 3. to offer a forum for synergistic interactions between... 为……` },

        { pdf: 36, print: 28, content:
`和……的协作交流提供一个平台
- 4. We will also have best paper awards. 我们将评选出最佳论文。
- 5. The topics include, but are not limited to... 请按（但并非局限于）以下选题投稿。
##Sample 2
@ALTA 2011—9th Australasian Language Technology Workshop
@Category ALTA 2011
@Deadline: September 19, 2011
@When: December 01, 2011 – December 02, 2011
@Where: Canberra / Australia
@Updated: 13:51:50 Jul. 31, 2011 GMT+9
@Call For Papers—CFP
@9th Australasian Language Technology Workshop（ALTA 2011）
@1st and 2nd December 2011, Canberra, Australia
@http://alta.asn.au/events/alta2011
##OVERVIEW
This year, the Australasian Language Technology Workshop (ALTA) will be held at the Australian National University (ANU) in Canberra on Thursday 1st and Friday 2nd of December 2011. This event will be the ninth annual installment of the ALTA Workshop in its most-recent incarnation, and the continuation of an annual workshop series that has existed under various guises since the early 90s.
The goals of the ALTA workshop are:
- • to bring together the growing Language Technology (LT) com-` },

        { pdf: 37, print: 29, content:
`munity in Australia and New Zealand and encourage interactions;
- • to encourage interactions and collaboration within this community and with the wider international LT community;
- • to foster interaction between academic and industrial researchers, to encourage dissemination of research results;
- • to provide a forum for students and young researchers to present their research;
- • to facilitate the discussion of new and ongoing research and projects;
- • to provide an opportunity for the broader artificial intelligence community to become aware of local LT research; and, finally,
- • to increase visibility of LT research in Australia, New Zealand and overseas.
##TOPICS
We invite the submission of papers on original and unpublished research on all aspects of natural language processing, including, but not limited to:
- • phonology, morphology, syntax, semantics, pragmatics, and discourse;
- • speech understanding and generation;
- • interpreting spoken and written language;
- • natural language generation;
- • linguistic, mathematical, and psychological models of language;
- • nlp-based information extraction and retrieval;
- • corpus-based and statistical language modelling;
- • machine translation and translation aids;
- ……` },

        { pdf: 38, print: 30, content:
`We welcome submissions on any topic that is of interest to the LT community, and particularly encourage submissions that broaden the scope of our community through the consideration of practical LT applications and through multi-disciplinary research. We also specifically encourage submissions from industry.
##SUBMISSION FORMAT
All submissions should follow the ACL style guidelines and must be in PDF format.
Full paper submissions should follow the two-column format of ACL proceedings without exceeding eight (8) pages of content plus one extra page for references. Accepted full papers will be presented orally at the workshop.
Short paper submissions should also follow the two-column format of ACL proceedings without exceeding four (4) pages of content plus one extra page for references. Accepted short papers will be presented as posters at the workshop.
Note that full paper submissions can be accepted as short papers as determined by the program committee. Full papers will be distinguished from short papers in the proceedings.
Reviewing of papers will be double-blind. Therefore, the paper must not include the authors' names and affiliations. Furthermore, self-references that reveal the author's identity, e.g., “We previously showed (Smith, 1991)...” must be avoided. Instead, use citations such as “Smith (1991) previously showed...”
We strongly recommend the use of ACL LaTeX style files or Microsoft Word Style files tailored for this year's conference. The style files and example documents are available from the workshop website. We reserve the right to reject submissions that do not conform to these styles` },

        { pdf: 39, print: 31, content:
`including font and page size restrictions.
If we cannot print your PDF file by the submission date it will be rejected without being reviewed. Therefore you are encouraged to send an early version with the typographical complexity of your final intended version so that we can check it is printable. Detailed directions for submission will be made available at the workshop website. Contact the organisers for any questions regarding this process.
##PROCEEDINGS
The full proceedings volume will have an ISSN and will be published online on the ACL anthology website as well as the website of the Australasian Language Technology Association (ALTA).
##IMPORTANT DATES
- • Submissions deadline: Monday 19th September 2011
- • Accept/reject: Monday 10th October 2011
- • Final camera-ready copy: Monday 31st October 2011
- • ALTA Workshop: Thursday 1st and Friday 2nd December 2011
##WORKSHOP CO-CHAIRS
- • David Martinez (NICTA Victoria Research Lab and University of Melbourne)
- • Diego Molla (Macquarie University)
##PROGRAM COMMITTEE
- • Timothy Baldwin (University of Melbourne)
- • Steven Bird (University of Melbourne)
- ……
- • Simon Zwarts (Google, Sydney)
##WORKSHOP LOCAL ORGANISERS
- • Hanna Suominen (NICTA Canberra Research Lab and ANU)
- • Wray Buntine (NICTA Canberra Research Lab and ANU)
##ENQUIRIES` },

        { pdf: 40, print: 32, content:
`The Australasian Language Technology Workshop is being organised by ALTA, the Australasian Language Technology Association. For any comments or questions about the workshop please contact the workshop organisers (workshop@alta.asn.au).
（http://conference.researchbib.com/?eventid=13491）
##Words and Expressions
- 1. affiliation [əfili'eiʃən] n. 隶属关系；（文中指中国人常讲的）单位
- 2. anthology [æn'θɔlədʒi] n. a collection of poems, stories, etc. that have been written by different people and published together in a book （诗、文、曲、画等的）选集
- 3. with a strong focus on... 重点强调……
##Useful Sentence Patterns
- 1. We welcome submissions on any topic that is of interest to... 欢迎大家积极提交……感兴趣的论文。
- 2. Detailed directions for submission will be made available at the workshop website. 研讨会网站将刊登相关论文提交细则。
##Exercise
- 1. Directions: Fill in the blanks in English based on the information given in the brackets.
@SOCA 2011—2011 IEEE International Conference
@on Service-Oriented Computing and Applications（SOCA）
@Call for Papers—CFP
The IEEE International Conference on Service Oriented Computing & Applications（SOCA 2011）①__________（为……提供国际平` },

        { pdf: 41, print: 33, content:
`台）researchers from multiple disciplines to②__________（交流与分享）their experiences, ideas, and latest research results on all aspects of service-oriented computing. Papers from industry in services science are also welcome, as SOCA 2011 will have a dedicated industry track. The program of SOCA 2011 will③__________（包括）invited talks, technical paper presentations, tutorials, industry sessions, workshops, and panel discussions. SOCA is an④__________（年会）of the IEEE Technical Committee on Business Informatics and Systems（TCBIS）.
SOCA 2011 will take place December 12–14, 2011 at the Campus of University of California, Irvine. It will⑤__________（与……同时进行）the 2011 International Conference on Knowledge Science, Engineering and Management（KSEM）. Furthermore, two workshops will be part of this joint conference: the Fourth IEEE International Workshop on Real-Time Service-Oriented Architecture and Applications（RTSOAA 2011）and the International Workshop on Knowledge and Service Technology for Life, Environment, and Sustainability（KASTLES 2011）.
All accepted papers will appear in the Proceedings of SOCA 2011 and⑥__________（收入）in IEEE Xplore and indexed by EI. The best papers from the proceedings will be selected for publication in the Springer Journal on Service-Oriented Computing and Applications（SOCA）as well as special issues in international journals to be announced.
Authors interested in participating in SOCA 2011 are invited to⑦__________（提交带有原创性的论文）（limited to 8 IEEE style pages）until 4th September 2011. ⑧__________（其他细则）on the submission process are available in the sections on Paper Submission and Important Dates.
（http://conference.researchbib.com/?eventid=11981）` },

        { pdf: 42, print: 34, content:
`- 2. Directions: Translate the following into English.
企业和企业家研究年度峰会（ASBES），是一个传统的有关企业和企业家研究的会议，欢迎来自世界各地、具有广泛研究兴趣的人士参加。企业和企业家研究涉及众多领域，本次会议探讨的话题集中在社会责任感、职业伦理和管理三个方面。在近期发生的金融危机中，企业伦理、社会和环境的可持续性和组织的凝聚力、员工和管理人员的薪酬公平等问题变得较为突出。
本次会议旨在展示和探讨新的研究成果，尤其是在社会责任和企业伦理方面有助于共享新的理论、方法和经验方面的知识，有助于更好地了解企业和企业活动的新成果。探讨有关跨文化对话和多元文化社会中的企业等问题的论文则更受欢迎。
欢迎提交涉及企业和企业家精神各个领域的论文，同时也欢迎其他学科的学者参会，希望他们能够从不同的视角针对会议主题发表看法。本次会议将集中探讨以下话题：
- 1. 商法与伦理
- 2. 企业家精神
- 3. 企业调查方法和指导
- 4. 成长与革新
- 5. 审计和公司管理
- ……
以及任何其他与企业和企业家精神相关的研究话题，诸如从法律、金融、会计、人力资源、银行学、信息技术和宗教等视角展开的研究。
- 3. Writing
>Directions: Study the samples in this Unit or refer to a sample in the relevant website and write a call for papers for a conference in your academic field.` },

        { pdf: 43, print: 35, content:
`##Supplementary Reading
@CALL FOR PAPERS—LAW, SOCIOLOGY, POLITICAL SCIENCE, 2011—INDIAN JOURNAL OF HUMANITIES
@Website http://ijhumanities.blogspot.com
@Category CALL FOR PAPERS
@Deadline: October 09, 2011 | When: October 09, 2011 – October 09, 2011
@Where: Agartala / India
@Updated: 14:50:43 Jun. 17, 2011 GMT+9
@Call For Papers—CFP
##GUIDELINES FOR CONTRIBUTORS
- 1. The manuscript should be a length of less than 5000 words, neatly typed in single space, on A-4 size papers. It should be submitted in duplicate and the first page should carry only the title of the paper, author(s)' name(s), designations, official address, phone/fax numbers and e-mail addresses.
- 2. Abstract: Each manuscript should carry an abstract of about 150–200 words.
- 3. Key words: Maximum five–six keywords to be indicated.
- 4. Introduction: A short introduction of the research problem followed by a brief review of literature and objective of the research. Describe the materials used in the experiments, year of experimentation, site etc. Describe the methods employed for collection of data in short.
- 5. Results and Discussion: This segment should focus on the fulfillment of stated objectives as given in the introduction. It should contain` },

        { pdf: 44, print: 36, content:
`the findings presented in the form of tables, figures and photographs.
- 6. Concluding Observations: It deals with objectives of the paper.
- 7. Acknowledgments (where applicable).
- 8. End notes: All notes should be indicated by serial numbers in the text and detailed references should be given at the end of the paper.
- 9. The following style of reference may be strictly followed:
- （a）In case of journal: author's last name, initials, year of publication, name of the paper, name of the journal (italic), volume number, issue number and page number.
- （b）In case of a book: author's last name, initials, year of publication, title of the book (italic), name of publisher, place of publication and page numbers.
- （c）In case of an edited book: author's last name, initials, year of publication, name of the editor, title of the book (italic), name of publisher, place of publication and page numbers.
- （d）In case of institution/Govt. report: full name of the institution/ministry, year of publication, place of publication.
- （e）In case of online document: author's last name, initials, year of publications, title of the paper, website, and date of retrieve.
- 10. British English spelling is to be used through the manuscript.
- 11. English manuscripts must be in Times New Roman font size 11 and in single spacing.
- 12. The tables and figures in the text should be centralized.
- 13. The same data should not be presented in tables and figures both.
- 14. Every contribution should be accompanied by a declaration that the article is original and has not been published or submitted elsewhere for publication.
- 15. Every accepted article will be copy-edited. The editorial board` },

        { pdf: 45, print: 37, content:
`reserved the right to make necessary revisions to the text. Every author will receive one complimentary copy of the issue in which one's paper appears.
Review System: Every research paper will be reviewed by two members of peer review committee. The criteria used for acceptance of research papers are contemporary relevance, contribution to knowledge, clear and logical analysis, fairly good English and sound methodology of research papers. The Editor reserves the right to reject any manuscript as unsuitable in topic, style or form without requesting external review.
Copy Rights: Acceptance of a manuscript for publication in the Journal shall automatically mean transfer of copyright to the editor. The Editorial Board takes no responsibility for the fact or the opinion expressed in the article, it rests entirely with the author(s) thereof.
Printing Charge: As a result of highly printing charge every contributor will pay Rs. 500 as printing charge for each article.
@For Any Enquiry:
@Email: ijhindia11@gmail.com
@Mobile No: 09856321179
Common causes for the papers being rejected are:
- 1. that they report a single small or incomplete experiment that makes a minor or uncertain contribution to new knowledge or understanding;
- 2. that the data are statistically insignificant and/or do not support the claims being made;
- 3. they are written so poorly, without references to these and the more detailed instructions for authors, that they are incomprehensible.
>** Authors are requested to send their research articles strictly according to the format mentioned in the Guidelines to the Authors **
（http://conference.researchbib.com/?eventid=12232）` },

        { pdf: 46, print: 38, content:
`##Words and Expressions
- 1. duplicate ['djuːplikeit] to make an exact copy of something vt. 复制；使加倍 n. 副本；复制品 adj. 复制的；二重的
- 2. initial [i'niʃəl] adj. happening at the beginning; first n. 词首大写字母最初的；字首的
- 3. methodology [ˌmeθə'dɔlədʒi] n. a set of methods and principles used to perform a particular activity 方法学，方法论
- 4. in case of... 万一……；假设……
- 5. transfer of copyright to... 版权转让至……
- 6. according to... 根据……
##Useful Sentence Patterns
- 1. The manuscript should be a length of less than... words. 论文总长不超过……字。
- 2. Every research paper will be reviewed by two members of peer review committee. 每篇论文将由同行评审委员会的两名成员进行评审。
- 3. Common causes for the papers being rejected are... 退稿多为以下原因……
- 4. Authors are requested to send their research articles strictly according to the format mentioned in the Guidelines to the Authors. 每位作者需严格按照上述须知进行投稿。
##References
- 1. http://www.ourglocal.com/
- 2. http://conference.researchbib.com/?eventid=11277
- 3. http://conference.researchbib.com/?eventid=13491
- 4. http://conference.researchbib.com/?eventid=11981
- 5. http://conference.researchbib.com/?eventid=11406` },

        { pdf: 47, print: 39, content:
`- 6. http://conference.researchbib.com/?eventid=12232
- 7. 有道词典　http://dict.youdao.com/
- 8. Wehmeier, Sally. Oxford Advanced Learner's English-Chinese Dictionary (Sixth edition). Beijing: The Commercial Press, 2004.` }
      ]
    },

    {
      id: "p1-u6",
      part: "Part I",
      unit: "Unit 6",
      title_en: "Acceptance of a Paper or an Abstract",
      title_cn: "录用稿件",
      print_start: 40,
      pages: [
        { pdf: 48, print: 40, content:
`#Unit 6　Acceptance of a Paper or an Abstract
##Sample Study
>Directions: Read the following samples and learn the useful expressions.
##Sample 1
@The Society for Computer Simulation International
@2000 SYMPOSIUM ON PERFORMANCE EVALUATION OF
@COMPUTER & TELECOMMUNICATION SYSTEMS
@July 16–20, 2000
@Coast Plaza Hotel at Stanley Park
@Vancouver, British Columbia, Canada
##AUTHOR INSTRUCTIONS
PLEASE REVIEW THIS MATERIAL CAREFULLY—IT CONTAINS INFORMATION THAT HAS NOT PREVIOUSLY BEEN INCLUDED IN OTHER SCS AUTHOR KITS.
Please direct inquiries and correspondence regarding SPECTS 2000 Proceedings to the SCS office. For registration and conference information see the registration form in this kit or contact the SCS office at:
@The Society for Computer Simulation International
@4838 Ronson Court, Suite L, San Diego, CA 92111–1800
@Tel:（858）277–3888；FAX:（858）277–3930；E-mail: scs@scs.org` },

        { pdf: 49, print: 41, content:
`@DUE DATE: May 30, 2000
Dear Author:
I am pleased to inform you that your above-referenced paper has been accepted for presentation at this conference and for printing in the conference Proceedings.
ACCEPTANCE IS CONDITIONAL UPON OUR RECEIVING YOUR FINAL CAMERA-READY PAPER BY THE DATE ABOVE AND/OR A PAID AUTHOR REGISTRATION FOR AT LEAST ONE OF THE AUTHORS OF EACH PAPER, AND ON A FINAL REVIEW OF THE CAMERA-READY PAPER. If your work must be cleared or approved before publication by your institution, company, or governmental agency, please be sure that process will be completed by the due date above or we will not be able to include it in the conference Proceedings. If the paper is not approved by that date, you can discuss the possibility of presenting it as a late paper with your Conference Chairman. PLEASE NOTE: PAPERS CANNOT BE PUBLISHED IF PAYMENT (OR A PURCHASE ORDER) IS NOT RECEIVED BY THE CAMERA-READY DUE DATE.
The enclosed author kit is provided to aid you in preparing your paper for publication in the Proceedings which will be distributed at the conference. PLEASE FOLLOW THE INSTRUCTIONS CAREFULLY.
##PAGE LIMITS
Papers accepted as FULL PAPERS are allowed a maximum of eight printed pages (without additional charges). Papers accepted as SHORT PAPERS are allowed a maximum of five printed pages (without additional charges). Additional pages will be assessed at $40 per page. Please see the enclosed registration form for any further registration information.
##MULTIPLE PAPERS
If you are presenting multiple papers` },

        { pdf: 50, print: 42, content:
`please see enclosed author registration form for further information.
We have enclosed some guidelines you will find helpful as you prepare your oral presentation for the conference. Please note the list of audio-visual equipment which will be available for your use at the conference. If you require any other equipment, you must advise us well in advance and you are responsible for the cost. We will try to accommodate your needs without extra cost to you, but special orders may be charged directly to you.
##ITEMS WHICH MUST ACCOMPANY FINAL PAPER SUBMISSIONS
##MANUSCRIPT
Your manuscript in required format as assigned by conference chair, on high-quality bond paper. Manuscripts exceeding the allotted page limits (five pages for short papers, eight pages for long papers) will only be accepted with payment of the excess page charge of US $40 per page.
##PHOTOCOPIES
Four (4) photocopies must be included with the original manuscript. (There is a US $2 per page copying fee, if the copies are not sent with the manuscript. For example, if your manuscript is 6 pages, the copying fee for 4 copy sets would be $48).
##REGISTRATION FORM AND PAYMENT
Payment of the fees is a requirement of having your paper published in the proceedings. If your paper and your payment are being processed separately, please include a note with registration form indicating such. The advance registration fee is associated with publication of the paper and is NOT REFUNDABLE, but is transferable to the designee who will present your paper at the conference. Authors of published manuscripts must pay the full registration fee.` },

        { pdf: 51, print: 43, content:
`##POSTCARD
Please legibly print your address on the enclosed postcard. It will be returned to you to acknowledge receipt of your paper.
##TRANSFER OF COPYRIGHT FORM
We require as a condition for acceptance of papers that all authors execute the copyright transfer to Simulation Councils, Inc., the name under which The Society for Computer Simulation International is incorporated. Please note that by signing the form you are simply giving your permission to SCS to publish the paper. For this reason, there is no problem if the material is already in the public domain, such as work done with government support. The Society for Computer Simulation International controls the commercial use of material we publish, while you or your company retain the right to reuse the work, in whole or in part.
##SPECIAL A/V REQUESTS
Please take a moment to include this information with your paper. An overhead (one will be in every room) or a 35mm projector (please request) is available at no charge. All other special requests require payment up front for their rental fees. For those who prefer to use a laptop computer for their presentation, a SVGA projection system will be available for a rental fee of $100 per session. Availability is limited, and reservations are on a first come, first serve basis. We cannot guarantee that special A/V requests beyond the above listed will be available at the time of the conference without prior notification and payment. At the conference, you will be required to pay for any equipment at the Registration Desk at time of request.
##BIOGRAPHICAL NOTE
A brief note about you for use as introductory material by your session leader at the conference.` },

        { pdf: 52, print: 44, content:
`##INDIVIDUAL REPRINT ORDER FORM
Individual Reprint Order Form and prepayment, if desired. (optional)
All material should include the SCS Paper ID Code (e.g., 2600, 9820, etc.) SCS is not responsible for correspondence or forms submitted without this code. When writing this code on your actual manuscript, do so on the back of each page.
Thank you for your interest and cooperation. We hope that you will find participation in the conference professionally stimulating and rewarding. If you have any questions regarding the conference or your paper submittal, please call or write us.
（http://www.scs.org/confrnc/scsc/scsc00/spects/species2k_author_kit.html）
##Words and Expressions
- 1. proceedings [prə'siːdiŋz] n. the official written report of a meeting, etc. 会议记录；论文集
- 2. allotted [ə'lɔtid] adj. to be given time, money, tasks, etc. to somebody/something as a share of what is available 专款的；拨出的 v. 分配；指派；拨给（allot 的过去分词）
- 3. audio-visual equipment 视听设备
- 4. the acceptance of papers 论文录用
##Useful Sentence Patterns
- 1. I am pleased to inform you that your paper has been accepted. 很高兴通知您，本次大会已录用您提交的论文。
- 2. Acceptance is conditional on... 论文录用是以……为前提的。
- 3. ... will be available for your use at the conference……将在大会上使用。` },

        { pdf: 53, print: 45, content:
`- 4. Special orders may be charged directly to you. 特殊要求需自行承担费用。
- 5. If you have any questions regarding the conference or your paper submittal, please call or write us. 若对会议或论文提交仍有不清楚之处，请打电话或写信与我们联系。
##Sample 2
Dear Dr. Makki Akasha Babikier:
I am pleased to inform you that the following paper which you submitted to The 2011 International Conference on Bioinformatics and Computational Biology（BIOCOMP'11: July 18–21, 2011, USA）has been accepted as a Regular Research Paper (RRP)—ie, accepted for both, publication in the proceedings and oral formal presentation. Please see below for the categories of accepted papers.
@Paper ID #: BIC2612
@Title: Classification of Cardiac Arrhythmias Using Machine Learning Techniques Based on ECG Signal Matching
@Makki Akasha Babikier
@College of Computer Science and Information Technology,
@Sudan University of Science and Technology, Sudan
Note: The “paper ID #” shown above is composed of three letters (conference prefix) followed by four numeral/digits. You will need to have this “Paper ID #” at the time of registration and final paper submission (for publication).
（The evaluation of this paper is arranged by Track Chair # 873）
General comments to authors of accepted papers:
- 1. Each paper was peer-reviewed by two experts in the field for originality, significance, clarity, impact, and soundness. In cases of contradictory recommendations, a member of the conference program` },

        { pdf: 54, print: 46, content:
`committee was charged to make the final decision (accept/reject)—often, this involved seeking help from additional referees by using a double-blinded review process. In addition, all papers whose authors included a member of the conference program committee were evaluated using the double-blinded review process. Chairs of approved sessions were responsible in evaluating the papers that were submitted to them.
- 2. Authors of accepted papers are strongly encouraged to enhance the organization and the quality of the English writeup of their papers before uploading them to the publication web site for the preparation of the printed books/proceedings.
- 3. Compiled Referees Reports:
- Originality（1 Poor-10 Very Good）: 8
- Technical Quality（1 Poor-10 Very Good）: 7
- Significance of Contribution（1 Poor-10 Very Good）: 7
- Readability and Organization（1 Poor-10 Very Good）: 7
- Relevance to the topic of BIOCOMP（1 Not relevant-10 Very relevant）: 10
- Overall Recommendation（1 Reject-10 Strong Accept）: 8
- Degree of Expertise of Reviewer in the topic（1 Poor-10 Good）: 9
Specific Comment to the Authors:
The only suggestion we have for the authors is to update the reference list to also include citations to more recently published papers.
For information regarding author instructions including:
- • Presentation Formats / Accepted Paper Categories
- • Typing Instructions
- • Deadline（registration and camera-ready papers due: May 7, 2011）
We strongly encourage authors to register as soon as possible.` },

        { pdf: 55, print: 47, content:
`- • For Conference Registration, Hotel Reservation, Conference Program/Schedule, please visit:
http://www.worldacademyofscience.org/worldcomp11/ws/authors
For Submission of Final Camera-Ready Papers for Publication in the Conference Proceedings/book, please visit:
http://www.ucmss.com/cr/main/papersNew/worldcomp11_first.html
To Request Invitation Letters for US Visa Purposes, please visit:
http://www.ucmss.com/cr/main/invitations/worldcomp_index.html
General information can be found at:
http://www.world-academy-of-science.org/
Congratulations, and thank you for your contribution to the Conference. We look forward to seeing you at the conference in July.
@Kind regards,
@Hamid
（http://www.sustech.edu/files/workshop/20110410073637672.doc）
##Words and Expressions
- 1. soundness ['saundnis] n. something which is good and thorough 健康；稳固；完整；公正
- 2. double-blinded review 双盲评审
##Useful Sentence Patterns
- 1. the following paper which you submitted to... has been accepted. 您提交的论文已被录用。
- 2. Authors of accepted papers are strongly encouraged to enhance the organization and the quality of the English writeup of their papers. 论文一经录用，作者须对文章的组织结构、英语写作进行完善。
- 3. For information regarding author instructions including... 作者须知其他事宜……` },

        { pdf: 56, print: 48, content:
`- 4. Congratulations, and thank you for your contribution to the Conference. 祝贺您的论文被录用，并感谢您向本次大会投稿。
##Exercise
- 1. Directions: Fill in the blanks in English based on the information given in the brackets.
Dear Mr. Adeyeye:
__________（①谨代表）the Technical Program Committee, __________（②我们很高兴通知您）that your paper #1569296037 __________（③标题为）“Quality of Experience of the HTTP Session Mobility Service”__________（④已被采纳作为宣读论文）at IPTCOMM 2010 as an “Industry Talk”.
The TPC __________（⑤筛选了）24% papers from this year's submission as “Full papers” and recommended an additional 4 papers be selected as “Work in progress papers”. The TPC also __________（⑥提议）a group of 4 papers be presented as __________（⑦“行业报告”）since their content “highlights the innovation of the solutions presented, as well as the impact and benefits for the community”. The “Industry Talks” session is intended to foster feedback from design to research with __________（⑧高层次的探讨和思想交流）.
Your paper has been chosen as an “Industry Talk”. __________（⑨祝贺）on your achievement! Please plan a half hour presentation, __________（⑩留点时间进行提问和讨论）. For more information about Industry Talks, please __________（⑪请参阅）http://iptcomm.org/cftid/index.html.
At least one author of each accepted talk must __________（⑫注册报到）for the conference by June 27, 2010. We will have __________（⑬网上报名）page ready soon—please check the IPTComm website（http://iptcomm.org）for __________（⑭更新）on the` },

        { pdf: 57, print: 49, content:
`registration process.
@We look forward to welcoming you in Munich, Germany.
@Sincerely,
@Carol Davids and Saverio Niccolini
@IPTComm 2010 Industry Talks and Demos Co-chairs
@Vijay K. Gurbani and Gonzalo Camarillo
@IPTComm 2010 TPC Co-chairs
（http://www.ngportal.com/micadeyeye/index.php/category/conferences/）
- 2. Directions: Translate the following into English.
我谨代表组委会，感谢您提交的研究方案和题为“让所有的孩子在友好、有效的学习环境中接受教育”的论文。我很高兴地通知您，您的方案已被接受，我们邀请您到会宣读论文。
请注意，宣读论文的参会者需在 2012 年 3 月 31 日前登记参会并提交论文。否则，论文将不在此次会议上使用。
我收到论文后便电子邮件回复收讫，同时附上报名表、登记住宿须知以及大会论文集收录论文格式要求等。如果您 5 月底还没有收到来信，请与我联系。
今年 8 月在格拉斯哥见！
祝好！
- 3. Writing
>Directions: Study the samples in this Unit or refer to a sample in the relevant website and write a letter of acceptance of a paper submitted to a conference in your academic field.` },

        { pdf: 58, print: 50, content:
`##Supplementary Reading
@To: Ozer@sfsu.edu
@From: 8NCEE@mirasmart.com
@Subject: Abstract 354, Abstract, ST Building structures
@Date: 8/1/2005 3:59:47 PM
On behalf of the Program Committee, I am pleased to inform you that the abstract of your paper and presentation for the 8th US National Conference on Earthquake Engineering has been accepted. The Program Committee looks forward to your continued participation in the 2006 Earthquake Conference through submission of the formal written paper and its presentation during the conference.
As you may already know, the 8th USNCEE is being co-convened with the SSA and DRC conferences in 2006 (see http://www.1906eqconf.org/ for additional details). The Program Committee for the 8th USNCEE is working with related committees of the SSA and DRC conferences to define a coordinated program, and is not scheduled to finalize all the program details until January 2006. We are, however, planning several specially coordinated sessions.
If your paper abstract is deemed suitable for inclusion in one of these sessions, we anticipate being able to invite your participation no later than two to three weeks from now. Otherwise, your paper will be presented in a session (either oral or poster) organized according to your topic area. Final assignments will be made around 1 February 2006. In accordance with the published schedule for the conference, papers are to be submitted online no later than October 15, 2005 at http://submissions.miracd.com/8ncee. This site will be open for accepting papers on September 1. Specifications for paper length (10 pages), formatting details, a template with an example paper, and in-` },

        { pdf: 59, print: 51, content:
`structions can be downloaded from http://www.1906eqconf.org/.
Submitted papers will be reviewed on the basis of technical content and quality of presentation. The Program Committee reserves the right to reject papers that do not conform to adequate English usage or are specifically commercial or promotional in nature. Authors will be notified of paper acceptance (or tentative acceptance if revisions are required) on 15 December 2005, with final papers due on 16 January 2006. All accepted papers will be published in the conference proceedings, which also will include written submissions from the participants in the co-convened SSA and DRC conferences.
In view of the large number of abstracts submitted and in the interest of promoting a diverse group of presenters, the Program Committee has decided that no presenting author will be allowed to present more than two papers. Exceptions will be granted only in special cases. If you are a co-author of more than two papers, we encourage you to assign a co-author as the presenting author so your paper still can be presented. All presenting authors are required to register for the conference.
An author's fee of $240 per paper is due at the time of submission and may be paid via the secure web site with a Visa or MasterCard credit card. In exceptional cases, the fee may be mailed directly to EERI with a check drawn on a U.S. bank (payable to EERI). Submissions are not considered complete until the fee has been received. At the time of conference registration, the sum of one author's fee will be deducted from the full registration fee. If an author is paying for two or more papers, only one author's fee will be deducted from the registration fee. Authors do not qualify for one-day conference registration fees.
We appreciate your interest in the 8th USNCEE and look forward to your participation.
@Sincerely,` },

        { pdf: 60, print: 52, content:
`@Jack P. Moehle
@Chair, 8th USNCEE Program Committee
@file://C:\\Documents and Settings\\Ozer\\Desktop\\4 th paper.htm8/24/2005
（http://userwww.sfsu.edu/~ozer/4%20th%20paper.pdf）
##Words and Expressions
- 1. coordinate ['kəu'ɔːdineit] vt. to organize the different parts of an activity and the people involved in it so that it works well 调整；使调和；调节；整理 adj. 协调的
- 2. in accordance with... 与……一致
- 3. in view of... 鉴于……；从……来看
- 4. in exceptional cases 特殊情况下
- 5. a check drawn on a... bank 由……银行支付的支票
- 6. registration fee 注册费
- 7. be co-convened with... 与……共同承办
##Useful Sentence Patterns
- 1. I am pleased to inform you that the abstract of your paper and presentation for... has been accepted. 很高兴通知您，您提交的……论文摘要和学术报告已被录用。
- 2. ... reserves the right to reject papers……保留退稿权
- 3. All accepted papers will be published in the conference proceedings. 所有录用论文将在会议论文集上发表。
- 4. Exceptions will be granted only in special cases. 特殊情况作特殊处理。
- 5. We appreciate your interest in... and look forward to your participation. 感谢您对……的关注，我们期待着您的到来。` },

        { pdf: 61, print: 53, content:
`##References
- 1. http://www.scs.org/confrnc/scsc/scsc00/spects/species2k_author_kit.html
- 2. http://www.sustech.edu/files/workshop/20110410073637672.doc
- 3. http://www.ngportal.com/micadeyeye/index.php/category/conferences/
- 4. http://www.cehs.wright.edu/~cfinegan/Presentations/IntlPPT/accepted.doc
- 5. http://userwww.sfsu.edu/~ozer/4%20th%20paper.pdf
- 6. 有道词典　http://dict.youdao.com/
- 7. http://oald8.oxfordlearnersdictionaries.com/
- 8. Wehmeier, Sally. Oxford Advanced Learner's English-Chinese Dictionary (Sixth edition). Beijing: The Commercial Press, 2004.` }
      ]
    },

    {
      id: "p1-u7",
      part: "Part I",
      unit: "Unit 7",
      title_en: "Rejection of a Paper",
      title_cn: "拒稿",
      print_start: 54,
      pages: [
        { pdf: 62, print: 54, content:
`#Unit 7　Rejection of a Paper
##Sample Study
>Directions: Read the following samples and learn the useful expressions.
##Sample 1
Dear Tyler Close,
We are sorry to inform you that your submission was not selected for publication by the program committee for the 2009 IEEE Symposium on Security and Privacy. The selection process was highly competitive, with only 26 of 254 submissions selected.
Reviewers' comments are included below and are available at the reviewing website:
http://oakland09.cs.cornell.edu/oakland09/paper.php?p=31
We hope that these reviews will be useful to you.
Thank you for submitting to IEEE Security and Privacy, and we hope to see you at the conference in May!
@Best regards,
@Andrew Myers and Dave Evans,
@Co-Chairs, 2009 IEEE Symposium on Security and Privacy Program Committee
（http://waterken.sourceforge.net/aclsdont/oakland09-rejection.txt）
##Words and Expressions
- 1. submission [səb'miʃn] n. the act of giving a document, proposal to sb. in authority so that they can study or consider it 提交的文件、建议等，呈递` },

        { pdf: 63, print: 55, content:
`- 2. symposium [sim'pəuziəm] n. a meeting at which experts have discussions about a particular subject, a small conference 专题研讨会，小型讨论会
##Useful Sentence Patterns
- 1. We are sorry to inform you that your submission was not selected for publication. 我们非常抱歉地通知你，你的投稿没有被选中出版。
- 2. The selection process was highly competitive. 甄选过程十分激烈。
- 3. Thank you for submitting to... 非常感谢你向……投稿。
##Sample 2
I am sorry to inform you that your paper “Windows PowerShell: A New Approach to Automation” was not selected by the Refereed Paper Program Committee for the LISA2007 conference.
Please acknowledge receipt of this email to <lisa07chair@usenix.org>.
We had 55 submissions and were only able to accept 22. I am enclosing some comments on your submission by members of the programme committee—I hope that you will find these helpful, and that you will consider submitting to LISA again in the future. I hope that you will be able to attend the conference in Dallas and I look forward to meeting you there—you may also like to consider submitting a poster or a WIPS presentation:
http://www.usenix.org/events/lisa07/cfp/workshops.html.
Many thanks for your submission.
@Paul Anderson
（http://blog.ixpub.net/html/29/9781829-406760.html）` },

        { pdf: 64, print: 56, content:
`##Words and Expressions
- 1. enclose [in'kləuz] v. if you enclose something with a letter, you put it in the same envelope 随函附寄，封入
- 2. acknowledge receipt of 收到，认收
##Useful Sentence Patterns
- 1. I am sorry to inform you that your paper... was not selected by the committee for the conference. 我很遗憾地通知您，您的文稿……没有被评审委员会选中，所以不能到会宣读。
- 2. We had 55 submissions and were only able to accept 22. 我们收到 55 份申请，只能接受 22 份。
- 3. Many thanks for your submission. 十分感谢您的投稿。
##Exercise
- 1. Directions: Fill in the blanks in English based on the information given in the brackets.
The ACM SIGCOMM 2009 Conference（SIGCOMM 2009）program committee is __________（①很遗憾地通知您）that your paper #311 __________（②没有被选中）for publication, and will not appear in the conference.
In terms of the overall process, this year, Sigcomm received 270 submissions. __________（③评审过程）was organized in three rounds, all with double __________（④盲评）.
__________（⑤第一轮）, each paper was assigned to two reviewers. All __________（⑥评审意见）were read by the PC chairs and discussed with the reviewers in order to ensure that there was __________（⑦充分的理由）behind the reviewers' recommendation and that those assessments were by experts in the field (normally within the TPC, but in some cases from external reviewers). All papers` },

        { pdf: 65, print: 57, content:
`for which __________（⑧未能达成一致）on a reject decision __________（⑨分配给）one or more additional reviewers in the second round.
After the second round, __________（⑩网上评论）on papers was opened to all TPC members. Additional reviews (up to a total of 7 for some papers) were allocated to address open issues. The goal was to gain a good understanding of the __________（⑪优缺点）of the papers. At the end of the three phase process, 60 papers were __________（⑫认定）for discussion during the TPC meeting.
The TPC meeting took place in London on April 16th and 17th. After a day and a half of discussions, 27 papers were __________（⑬选作大会发言）at Sigcomm. Some of them have been conditionally accepted and assigned a shepherd.
We hope authors will appreciate the amount and quality of __________（⑭反馈意见）. This year, papers received 2 to 7 reviews each, several of them extremely detailed. For those papers discussed at the TPC meeting, we have further included __________（⑮讨论意见小结）in the comments field of the outcop paper management system. We are confident that all this information will be helpful to the authors in the preparation of their __________（⑯论文最终稿/版）or for future work.
Reviews and comments on your paper __________（⑰附在）this email. The submission's site also has the paper's reviews and comments, as well as more information about review scores. __________（⑱登录）, either click the link below or paste it into your web browser's location field.
http://sigcomm09.intel-research.net/?email=capveg%40cs.und.edu&password=whazhifuc
With that we would like to __________（⑲感谢您的投稿）` },

        { pdf: 66, print: 58, content:
`and we hope to see you in Barcelona.
@Dina Papagiannaki & Luigi Rizzo
@Sigcomm 2009 TPC chairs
（http://yuba.stanford.edu/group.wp/submission-feedback-for-flowvisor-sigcomm-2009-paper/）
- 2. Directions: Translate the following into English.
尊敬的福斯特博士：
感谢您给大会提交的论文。
我们很遗憾地通知您，您的论文没有被选中，因此不能到会做发言，也不能收录出版。所有提交的论文都经过项目委员会的评审。虽然我们收到很多有价值的论文，但只有 20% 质量高、影响大的文章会被选出到大会上宣读。未入选的基本原因还在于文章对技术细节的处理不够合理，且新颖度不够。此外，带有商业倾向的文章不予接受。
如果您对您提交的论文还有什么具体问题，请进入会议网页与玛丽·史密斯联系。她将很乐意将您的邮件转给负责评论和作答的那位负责人。
我们希望您能参加我们项目下一次主办的年度科技会议。到时请登录项目网页报名登记。
我们项目主办的 2012 年度科技会议将于 2012 年 11 月 4～7 日在加州旧金山举行。希望您能考虑参加并提交带有原创性的论文。
- 3. Writing
>Directions: Study the samples in this Unit or refer to a sample in the relevant website and write a letter to reject an abstract or a paper for a conference in your academic field.` },

        { pdf: 67, print: 59, content:
`##Supplementary Reading
Dear Haskell 09 author,
I regret to inform you that your paper was not selected by the program committee to appear in the Haskell 09 Symposium. This year we received 31 submissions, of them, 12 were accepted. Overall, the quality of submissions was extremely high. Many good papers could not be included. I do hope that you will be able to attend the Symposium.
I include below the reviewers' scores and comments. I hope they will offer you guidance in revising your paper. If you have any additional questions, please feel free to contact me.
Thank you for submitting to Haskell 2009.
@Stephanie Weirich
@Haskell 2009 Program Chair
（https://svn.science.uu.nl/repos/project.ruler.papers/hs2009-defer/referee-comments.txt）
##Words and Expressions
- 1. additional [ə'diʃənl] more than was first mentioned or is usual 附加的，额外的，外加的
- 2. Haskell 一种纯函数式编程语言
##Useful Sentence Patterns
- 1. I regret to inform you that your paper was not selected by the committee... 我很遗憾地通知您，您的论文没有被项目委员会选中。
- 2. If you have any additional questions, please feel free to contact me. 如果还有其他任何问题，请与我联系。` },

        { pdf: 68, print: 60, content:
`- 3. Thank you for submitting to Haskell 2009. 感谢您向哈斯卡尔 2009 研讨会投稿。
##References
- 1. http://waterken.sourceforge.net/aclsdont/oakland09-rejection.txt
- 2. http://blog.ixpub.net/html/29/9781829-406760.html
- 3. http://yuba.stanford.edu/group.wp/submission-feedback-for-flowvisor-sigcomm-2009-paper/
- 4. http://www.medicamail.com/download.php?file=file-291110183515-0.doc
- 5. https://svn.science.uu.nl/repos/project.ruler.papers/hs2009-defer/referee-comments.txt
- 6. Hornby, A. S. Oxford Advanced Learner's English-Chinese Dictionary. Oxford: Oxford University Press, 2009.
- 7. Sinclair, J. Collins Cobuild English-Chinese. Harper Collins Publishers, 2006.
- 8. 陆谷孙：《英汉大词典》，上海：上海译文出版社，2007。
- 9. 有道词典　http://dict.youdao.com/` }
      ]
    },

    /* ===== AUTO-STRUCTURED: Unit 8 → 后记 ===== */
    {
      id: "p1-u8",
      part: "Part I",
      unit: "Unit 8",
      title_en: "Introducing a Speaker",
      title_cn: "介绍演讲人",
      print_start: 61,
      pages: [
        { pdf: 69, print: 61, content:
`#Unit 8　Introducing a Speaker
##Sample Study
>Directions: Read the following samples and learn the useful expressions.
##Sample 1
Introduction of Keynote Speak
Dr. Rick Kittles
Co-Chair, Conference Scientific Program Committee
I am charged today with introducing Dr. Carpten, whom I have known since 1997 a good friend and colleague. Dr. Carpten attended
Lane College, receiving a degree in biology, then attended Ohio State
University and received a PhD in molecular biology in 1993, He was one of the first African-American males to achieve the PhD at Ohio State University. I spent some time at Ohio State University. I remember when going to work, passing by the department, some faculty would remind me; I would say yes, I know John. They would say yes, he was a great student. No, I know him; I know he is a great sc ientist.
I met John in 1997 when I had just finished my PhD. I was at
George Washington University. I was doing work at NIH and I saw an ad for a study coordinator for a study on African-American hereditary prostate cancer, and it was a national network. There are several individuals in this room who were p 田 1 that network, which was historic because it is unlikely that something like that will happen again where scientists, urologists, radiation oncologists, nurses, students of color were all involved from top to bottom in a study focused on the African-American problem of prostate cancer. I was blessed to a part of that. I` },

        { pdf: 70, print: 62, content:
`remember workmg Wlth John, who was a tireless researcher.
I really 1 艹 k forward to the long conversations that we have on the phone. Normally, they are late at night because I am on the other side of the country: he is 山 Arizona, and he would call in the evemng and it would be late where I am at, and we would talk about science, but then we would talk about other things; he would rejuvenate me and motivate me. This guy is spectacular. He stays on the cutting edge of genomics, cancer genomics m particular, and technology.
(http: //prostatenet. com/page/userfiles/pdf/1295408876 Keynote
Address. pdf)
##Useful Words and Expressions
- l. coordinator I koul 0: dineita n. person whO organizes the people taking part in the propct or activity and make sure that they work together properly 协调人,统筹者
- 2. hereditary Chi' reditori adj.(especially of illnesses) given №
a child by its parents before it is born 遗传性的
- 3. prostate 0 prosteit] n. a small organ m men, near the bladder, that produces a liquid in which sperm is carried 前列腺
4, urologist [juo' rolod3ist ] n. doctor who studies the urinary system 泌尿科医师,泌尿科专家
- 5. oncolopst [ 0 kolod3ist ] n. doctor who studies the tumors in
the body 肿瘤医生
6, rejuvenate [ n: voneit] 妩 to make sb. /sth. look or feel younger or more lively 使年轻，使更有活力
7, spectacular I spek' kj 引 0 ] adj. very impressive 壮观的,令
人惊叹的
& genomics: ' naumiks ] n. the branch of genetics that studies organism m terms of their genomes.基因纟且学` },

        { pdf: 71, print: 63, content:
`Part [ English for International Academic Conference 63
9 ． the cuttmg edge of 处于．．．．．．的尖端，前沿
UsefuI Sentence 尹 å "
- 1. I am charged today with introducing Dr. Carpten...今天,我
负责向大家介绍（约翰“）卡普敦博士。
- 2. He was one of the first African-American males to achie, the
PhD at Ohio State University. 他是在俄亥俄州立大学第一批获取博
士学位的非洲裔美国男性中的一员。
- 3. I met John in 1997 when I had just finished my PhD. 我于 1997
年认识了约翰，当时，我刚好 i 卖完博士。
##Sample 2
FIRST ANNUAL MEETING AND CONFERENCE OF
URHOBO HISTORICAL SOCIETY
Niagara Falls, Ontario, Canada
November 3 一 5, 2 仪) 0
WHAT A GOOD URHOBO MAN AND A GOOD
URHOBO LEADER
Introducing Senator David Dafinone
Peter Ekeh
Chair, Urhobo HistoricaI Society
Salutation: oho Waado; llorogun waa 南;丆幼"柄 ' 南,
E 脚 hey 脚 a "do; m 辰 waado; Pre"", d "0 waado. Mi yen•
I thank you all for commg to this handsome gathenng which begins the business of the First Annual Conference and Meeting of Urhobo Histoncal Society. I am pleased by the strong attendance. I am paflicularly` },

        { pdf: 72, print: 64, content:
`delighted to see so many young people m this gathering.
My responsibility this rnorning is to introduce the keynote speaker of this year's Conference. Please perrnit me to do more than cite the qualifications of our keynote speaker. 'lhere are many young people in this gathering who will benefit from an outline of what constitutes a good
Urhobo man and a good Urhobo leader. My introduction Senator Dafinone includes these definitions—hence its length We have invited him to be our keynote speaker because he shares abundantly in these virtues.
First, a good Urhobo man is one who has high regard for his family and children. Carmg for the welfare and future of the family and of ont 这 own children is a premium virtue of Urhobo men and women.
ln this first regard, our guest of honour qualifies eminently as a good Urhobo man. Recently, Urhobo HistoricaI Society distributed information about a rare honour bestowed on Senator Dafinone. ln bnngmg up his entire farmly to embrace the discipline 0 「 hard work and responsibility which this high-minded profession of accountancy calls for, David
Dafinone has demonstrated a quintessential aspect of Urhobo culture.
Senator Dafinone has done well in a second matter that Urhobos regard as important. He has parucipated in the leadership of the Urhobo people, both collectively with other Urhobo leaders as well as on hiS OWn.
Seen in such terms, one must conclude that Senator Davld Dafinone has been a good Urhobo leader, He has been persistent and consistent in Urhobo affairs for more than four decades, He has used his considerable wealth to advance Urhobo causes. Today, he has emerged as a wise elder statesman among the Urhobo.
There is a third reason why Urhobos will value Chief David Dafinone. A perennial problem of the Urhobos concerns the process of establishing a leadership that has an important and dominant voice in re-` },

        { pdf: 73, print: 65, content:
`gronal and national affmrs. By dint of hard work and a good amount 鬲 charisma, David Dafinone has attained a lofty place in the affairs of the
Niger Delta and in Nigerian national politics. He is the founding President of the U 0 "Niger 乃 e ／, a major geo-political organization fighting against abuses of the Niger Delta in Nigenan affairs. He is a leading voice in 丆方 e P, a national body engaged in canvassing for new and equitable constitutional arrangements in post-military Nigeria.
ln these positions he represents the interests of Urhobos and of Niger
Deltans quite effectively.
I am glad to present to you our Keynote Speaker. Chief Senator David Dafinone a good Urhobo man. And he is a good U rhobo leader.
(http: //www. waado. org/urhobo 一 kinsfolk/archive/conferences/first annual— conference/ConferenceMatteß/Introducing Keynott, Speaker. html)
Wo ' 小 and E re 肭
- l. cite I salt) to mention something as an example, especially
one that supports, proves "explains an idea 为支持,证明或解释
种观点或情况而引证
- 2. qualification I kwolifo' ke 刂 ] n. a skill, personal quality or
type of expenence that makes you suitable for a particular job or posiuon
技能条件，资历，资格
3, regard [ril ga: n. attention or consideration that is shown towards someone "something 关注,关"心
- 4. premium [ ' pri: miom adj. of high quality 高昂的,优质的
5, eminent @ eminont ] adv. an eminent quality 这 one that is very great in degree or is very noticeable 崇高的,显著的,突出的
6, distribute [di'stnbju:t) 妩 to spread something over a large area
散步，分布，撒，播
- 7. high-minded ['hai'maindidJ adj, having strong mo 司 principles 高` },

        { pdf: 74, print: 66, content:
`尚的，严格崇尚道德原则的
& quintessential I kwintoi sen 归 0 adj. representing the perfect example of a class or quality 精髓的
- 9. perennial I pa reniol ] adj, continuing for a very long ume, happening again and again 长久的,持续的,反复出现的
- 10. lofty [llofti] adj. lofty ideas, beliefs, attitudes are 鬲 an unusually high moral quality 思想,信仰,态度等高尚的,崇高的
in sth. 与某人分享某事，与某人有共同的看法、经
历、感受
12， in this regard 关于此事 [ 用于承上启下 ]
13， by dint of 凭借，由于
14， canvass for 游说，拉选票
##Useful Sentence Patterns
- 1. My responsibility this morning is to introduce the keynote speaker
of this year， s Conference. 我今早的主要任务是向大家介绍本年度大
会的主讲嘉宾。
2, Please permit me to dO more than cite the quahfications of our keynote speaker. 除了介绍主讲嘉宾的资历以外，请允许我做些必
要的补充
- 3. I am glad to present to you our Keynote Speaker. 我非常高兴向
大家介绍我们的主讲嘉宾。
##Exercises
- l. mrections: FiII in the blanks in English based on the information
gwen in the brackets.
Sample: Introducing a speak
2 佣 8 一 01 一 07 22: 29
（O 我很荣幸向大家介绍今天的演讲者），
Nan-` },

        { pdf: 75, print: 67, content:
`Part ] English for International Acadermc Conferenee 67 cy Hunter Denney—a dynanue, high-energy educator, author, and business woman
（2 热爱生活） and leadership
A former subscnber to everyone else, s definition of "having it all
Nancy Hunter Denney education in 1993 to
（辞去行政职务） in higher
（@开始自主创业）， raise her own child and live a life according to her own pnonties.
（0 她是．．“的作者）充 by 牖： 44 D俨/凵‰灬@，4”ro“0励小
油, ' Happies and (@担任) the editor and co-author of Let ""小方 Speak: How læad and & "司, recently released.
Today, s speaker has
（0 在一一上出现） ABC and
NBC morning shows in Clucago and on numerous radiO stations across the country promoting her inspirmg messages on life and leadship. She
（@频繁出场的主讲人） at national, regional and state conference in higher education and Other
（9 乍营
（@极受尊敬的） leadership
利性组织）， as well as， oD 有所作为）， consultant to organizations devoted to
（@在“．．．获得硕士学位） Bowling Green
Nancy
（的以优异的成绩毕业
State Uni, 'erslty in Ohio and
于) Oswego State University in New York.
之前) becoming a professional speaker, Nancy
在一一工作了十年) higher edueation student affairs admmistration.
（@曾给 100 多万人做过演讲），灬 speaker is known for her ability 怖
（@心系听众） by lea、 'ing them in the "interested students of life position,, Her passion is contag10us!
And, she claims to have many great passions life.
（@请大家和我一道欢迎）—from the coast of
Massachusetts—author, educator, business owner, Nancy Hunter Denney•` },

        { pdf: 76, print: 68, content:
`(http: //hi. baldu. com/psh 125/blog/item/oc 199b "3 bd97 e3926
9791 da. html)
- 2. Directions: Translate the followmg into English,
尊敬的约翰逊教授、主席先生、女士们、先生们：
请大家注意了！会议现在开始。
今天，我很荣幸地向大家介绍我们的主讲嘉宾。实际上，无需
介绍，大家都知道，我们的主讲嘉宾是我们领域的重要创新者之
一直以来，丽莎“哈特在信息管理领域被同行称作具有创新思
想的研究者，因为她长期坚持不懈地关注我们认为是非常重要的课
题并且成果颇丰。
丽莎 · 哈特教授有四个高级学位和霍华德大学的名誉博士学
位。今天，在我们期待已久的演讲中，她将针对信息管理的未来为
我们做重要的发言
言归正传，请和我一道欢迎丽莎 · 哈特教授
- 3. Writing
>Directions: Study the samples in this Unit or refer to a sample in
the relevant website and write a scri pt to introduce a speaker at an academic conference in your field.
##Supplementary Reading
[ rry ' Nielsen is Professor of NaturaI Resources at North Carolina
State University. ln May 2009 he stepped down as Provost and Executive Vice Chancellor, a position 辰 held since January 2 (刃 5. As Provost, he was responsible for all acadenuc matters at NC State, the largest university in North Carolina with nearly 33 students. Previously he was Dean the College of Natural Resources at NC State (2 開 1
2) 4), Director of the School Forest Resources at The Pennsylvania` },

        { pdf: 77, print: 69, content:
`Part [ English for International Academic Conference 69
State Uni, rersity (1994 一 2) 1) and a faculty member and later head of the l)epartment of Fisheries and Wildlife Sciences at Virginia Tech
（1977 一四 94）．
Larry was born in 1948 in Chicago. He holds degrees from the University of lllinois (B. &
1970), University Missoun (M. S.
1974), and Cornell University (Ph. D., 1978). He served the
U. S. Army (1970 一 1972) in Vietnam as a military policeman and laboratory technician.
His current scholarly interests are higher education administration and sustamable resource management. He was appointed to the Nauonal
Advisory Committee for FIPSE, U. S. Department of Education, in
2008. He served during 1998 一 1999 on the USDA Committee of Scientists, charged with recommending new approaches to land and resource management planning in the U. S. Forest Service. ln recognition of the world, s population passing six billion people m October 1999 he conceived and organized a month-long series of educauonal and cultural events for the Penn. State and central Pennsylvania communities. He serves on the Board of Directors 鬲 the National Council for Science and the Environment, and the World Forestry Center in Portland, Oregon.
As Provost, he held directorships in vanous educational groups in the
Research Triangle Park region.
is committed to natural resource education. He has taught 16 different COurseS in hiS career, continued to teach an honors Senunar on special topics while serving as Provost. Among more than 1 (publications, he has co-edited/authored three textbooks on fisheries management. He is co-author, with three Others, Of "Ecosystem Management", an innovative textbook published in 2) 2 by lsland Press. He received two Certificates of Teaching Excellence and The Diggs Teaching
Scholar Award from Virginia Tech. He teaches short courses annually` },

        { pdf: 78, print: 70, content:
`for the U. S. Forest Service on communication skills.
He was President the National Association of Umversity Fishenes and Wildlife Programs durmg 1993 一 1995 and President of the American
Fisheries Society dunng 1990 - 199L He co-chmred the First World
Fisheries Congress, May 1992, in Athens, Greece. He was a Kellogg
National Fellow (1981 一 1984). He is a Fellow of the American Institute of Fishenes Research Biologists, and Honorary Member of the American Fisheries Society. ln 1998, he received Penn State's College of
AgnculturaI Sciences Diversity Award (http: //www. aplu. org/page. aspx? pid = 2110)
Words and E 攴 r s "
- l. provost 0 provost ] n. a semor member of the staff who organize
the affmrs ofsome universities 学院院长,教务长
2 sustainable [sosteinobl) adj. involvmg the of products and energy in a way that does not hann the environment 对自然资源能源的
合理利用，不破坏生态平衡
- 3. conceive I kon <Si: V] V. if you conceive a plan or idea, you
think of it and work out how it can be done or put into practice 构想出
计划，想出主意
4, in recognition of 承认,肯定
- 5. hold directorship 担任董事职务
Useful Sentence""s
- 1. Larry Nielsen is Professor of NaturaI Resources at North Carolina
state University. 拉里 · 尼尔森是北卡罗来纳州立大学研究自然资
源的教授。
- 2. ln May 2009, he stepped down as Provost and Executive Vice
Chancellor, a position he held since January 2 (5,他从 2 侦巧年起一` },

        { pdf: 79, print: 71, content:
`Part I English for Intemational Academic Conference 71
直担任教务长和副校长。 2 開 9 年 5 月，他从这些职位上退了下来。
3， He holds degrees from.. ．他获一一（大学的）学位。
- 4. ' is committed to natural resource education. 拉里致力于自
然资源教育事业。
5, He has taught 16 different courses in his career, and continued to teach an honors semmar on special topics while serving as Provost. 着<
他的职业生涯中，他教授过 16 门课程。在任教务长的同时，他一
直主持一个荣誉研讨会，讨论一些专门话题
- 6. Among more than 1 (publications, he has co-edited/authored
three textbooks on fisheries management. 在 1 佣多种出版物中,他与
人合作编写了三本关于渔业管理的教材
##References
- 1. http: //prostatenet. com/page/userfiles/pdf/1295408876Keynote
Address. pdf
- 2. http: //www. waado. org/urhobo kinsfolk/archive/conferences/
first-annual conference/Conference Matters/Introducing Keynote Speaker. html
- 3. http: //hi. baidu. com/psh 125/blog/item/Oc 199bec3 bd97e3926
9791 da. html
- 4. http: //www. tingroom. com/lesson/ddmybk/122167. html
- 5. http: //www. aplu. org/page. aspx? pid = 2110
- 6. Hornby,
A. S. oxf.司 Adtunced rne 以 E "这 C "se 刀唇
"0. Oxford: Oxford University Press, 2 (用 9
- 7. Sinclmr
J. C.柘 ' 巧 Co 旃 i E "这榧 C 胛望, HamerColins Publishers, 2
& 陆谷孙：《英汉大词典》，上海：上海译文出版社， 2 開 7，` }
      ]
    },

    {
      id: "p1-u9",
      part: "Part I",
      unit: "Unit 9",
      title_en: "Welcome Speech",
      title_cn: "欢迎词",
      print_start: 72,
      pages: [
        { pdf: 80, print: 72, content:
`#Unit 9　Welcome Speech
##Sample Study
>Directions: Read the following samples and learn the useful expressions.
##Sample 1
Mrs. Shirin Mestan—Chairwoman of the State Agency for Child Protection
A, Welcome Speech to the Participants of the Conference
Dear Guests and Participants,
It is my pleasure to welcome you at the Second National Conference
"Child Rights in the Information Society". For a second time the State
Agency for Child Protection (SA(.P) organizes such a forum. A year and a half after the First National Conference "Child rights in the Information SOCiety ", we are gathering again to:
- 1. Outline the actual status of the problems relating to the rights of
children in the information society;
- 2. Share the information and expenence on the changes that have
occurred in this field within the past period;
- 3. Discuss the prospects for development of the state policy in the
context of the most recent international trends and initiatives for protection of the children in the information society.
We can say that at the end 2002 the state institutions and the civil society in Bulgaria already clearly understand and share the necessity for a specialized care for the children in the modern digital world, that they are ready and have the capacity to jointly implement a national poli-` },

        { pdf: 81, print: 73, content:
`Part English for International Academic Conference 73 cy compbant to the European trends in this field. The ground for such an ascertamment IS your presence here and the time in which this Conference is taking place. I have in mind the fact that among us are representatives of key state institutions from the executive and leglslative authonties, representati, Of prlvate companies and non.舁0, or— ganizations, of higher and secondary schools local administrations, of media etc. A further argument 这 the fact that yesterday—28 th November, in Luxemburg came to an end the first public heanng on the trends for development of the e-Safe program—the latest initiati ve of the European Umon which is directed to the establishment of safe Internet and which shall be implemented within the period 2 (用 3 一 2 開 5. ln the working materials that we have provided to you there is short information on the objectives and main acuvities of the e-Safe. ln as far as this program foresees panicipation also of the EU candidate countries; I believe that we all share the hope for Bulgaria to demonstrate soon its capacity as a useful and equal partner in the implementation e-Safe.
ln connection Wlth the timing of this Second Nauonal Conference
"Child Rights in the Information Soeiety, we can emphasize one more significant fact. The first heanng in the National Parliament of the bill for modification and arnendment of the Child Protection Law already passed. Currently, consultations and d iscussions on the Bill are underway,
Having among us Mrs. Kasabova—Vice Chair, voman of the National
Parliament, I avall myself of the opponunity to express our hO 严 for the
Bulganan Parliament to pass a law definitely creating better conditions for the elaboration of a more effective and modern poliey for protecuon the children in Bulgaria.
Ladies and Gentlemen, the protectmon of children in the information society a maJor pnonty within the actiuties of SACP. For this reason tOday, s event is very important to us. By this Conference we put the be-` },

        { pdf: 82, print: 74, content:
`gmning of our work on elaboration of a national program and an action plan for child protection in the information society. TO this aim in June the National Council for Child Protection took a decision to establish a team of experts. As all the experts from the vanous institutions which demonstrated Wlllingness to work in that team are present now, we can say that today's Conference is the first open sitting of the team. The pnority nature of the problems on child secunty in the information society is emphasized also in the agenda of the Conference which indicates the basic accents of the policy in this field and they are:
- 1. Ensurmg equal access and preparation of the children for a competent, safe and responsible behaviour in internet;
- 2. Protection of the children from cnme and abuse the net;
- 3. Raising the public awareness on the issues of child security in internet.
ln addition, I would like to mention something else. Today's Conference is the closing stage the project Internet and Child Rrights "
which SACP is implementing Wlth the support of the UN, s office in Bulgana. Shortly you will be briefed on the results of the project and I avail
Of the presence of Mrs. Minna Tirkko—Deputy Permanent Representative of the UN in Bulgana to express agam our gratitude for the valuable asslstance.
I would also like to thank especially the ICT Development Agency to the Ministry of Transport and Communications whO accepted the mvitation to becorne a co-sponsor of today's Conference.
We also owe special thanks to Mr. Sidenstricker—Director of the
Arnerlcan Culture Center whO appreciated the importance of this event and who kindly provided the hall of the Center for us to ho 旧 this Conference.
Ladies and gentlemen, finally allow me on behalf of the State A-` },

        { pdf: 83, print: 75, content:
`gency for Child Protection to wish you a fruitful and pleasant work.
(http: //cis-sacp. government. bg/sacp/CIS/contenCen/secondconference/shirinmestan. htm)
- 1. in the context of: the situation in which sth. happens and that
helps you to understand it 在"...背景下
2 ． e-safe 电子安全
3, in connection with: for reasons connected with sornebody or something 与．“．．．有关；关于．一“；有联系
- 4. avail oneself of: to make use of; take advantage of 利用
- 5. elaboration [ iIæbo' re 刂, on] n. the result of improving something; a discussion that provides additional information 精,心制作;详
细阐述；细节
- 6. on behalf of: as the representative of somebody or instead of
代表某人；为某人；以某人名义
UsefuI Sentence 尹"er
- 1. It is my pleasure to welcome you at the Second NauonaI Conference
“Child Rights in the Information Society”．我很荣幸在此欢迎诸位出席此
次名为“信息时代的儿童权利”的第二届全国大会。
2, ln addition, I would like to mention something else. 另外,我
还想提到一点。
- 3. We also owe special thanks to Mr. Sidenstricker. 我们还要特
别感谢 Sidenstricker 先生。
##Sample 2
Welcome Speech at the International Conference Inclusive
Business in Agrifood Markets: Evidence and Action` },

        { pdf: 84, print: 76, content:
`Chao, an Wei, Vice Mimster, Mmistry of Agriculture, P.R. China
March 5, 2) 8
The Honorable Mr. Ashrat Hayat, AdditionaI Secretary of Minister of Commerce of Pakistan; the honorable Mr. Vedat Mirmahmutogullan,
Undersecretary of Ministry of Agnculture and RuraI Affmrs of the Republic Turkey; the honorable Mr. Jiayang LI, Vice President of Chinese
Academy of Sciences; distinguished guests; ladies and gentlemen,
G00d morning!
Today, we hold the international conference on Inclusive Business in Agnfood Markets: Evidence and Action in Beijing. This is going to be great and significant event as the expenence will be shared and actions will be explored. Proposed by the International Institute for
Environment and Development and other international orgamzauons, this conference is hosted by Center for Chinese AgriculturaI Poliey of Chinese
Academy of Sciences, Regoverning Markets Consortrum, and Office of
AgriculturaI VerticaI Integration of Ministry of Agnculture of China.
More than 130 well-known experts, business and farmer leaders, and government officials from more than 20 countnes have been invited and attend this conference. Here, please allow me to express my sincere welcome on behalf of the Chinese Ministry of Agnculture to all the experts and friends that have participated in the conference!
ln the past more than half a century, as the deepemng of the mar ket-onented reform of the world econonues, trade liberalization and global econormc mtegrauon, agrifood markets and supply chain structures have been changing globally in unprecedented ways. It only took emergmg economies ten years to carry out agrifood rnarket restmctunng.
However, small-scale farms, which support the livelihood of the majonty of the poor in the world, are not well prepared for these changes.
While the rapid changes in agnfood market chains brmg great opportuni-` },

        { pdf: 85, print: 77, content:
`Part I English for International Acadernic Conference 77 ties for agricultural development, they also raise great challenges for thousands and thousands of small farmers. Without appropnate actions, it is likely that these small farms will be margmalized and excluded from the expansions of both domestic and international markets, which has attracted global attention.
China has more than 240 million farm households. The average arable land per household is less than 0. 5 hectare. The •production scale is very small. However, China, s agricultural economy has expenenced remarkable development in the past 30-year reforms. These include rapid growth of agncultural production, significant nsing of farmers, income, considerably improvement of rural enuronrnent, overall balance of agricultural supply and demand and a surplus in bumper years. Although the liberalization of domestic market and international trade have provided great opportunities for agncultural development, small-seale farmers are facing many difficulties in better response to the market changes and sharing the benefit from market expansion. There are several emergmg issues that call for solutions. These include how to enlarge the farrn scale and modernize agnculture under the current Household
Responsibility System? How to transmit the added value in supply chain and market expansion intO farm gate so that agncultural production effi-
Clency can be enhanced and farmers, Income can be increased? Last but not the least, how to integrate small-scale farmers into globalized dynanuc marketQ ln order to improve farrners, capabilities of adapting to and responding to market changes, the Chinese government has been devoted to facihtating small-scale farmers participatmg in dynamic markets through industrial organizauon and institutional Innovatlon, and promoting the vertical integration 鬲 agriculture. These efforts have effectively increased farmers, shanng their benefits from agrifood supply chain changes and market expansion. By the end of 2 (刃 6 the number` },

        { pdf: 86, print: 78, content:
`0 「 agricultural vertical integration operation organizations had reached
巧 0 thousand. There are more than 90 million small farm households that have participated in these organizations and the average annual household income increased by 1486 yuan. From 2000 to 2 (6 the number of agricultural vertical integrauon organizations, farrneß participating in the organizatlons, and annual income 0 「 farmers increased by 132 ％, 52. 7 ％ and 65. 1 ％, respectively.
This international conference provides a very good opportumty for all the participants to share expenences and cooperation, on the one hand, we are very willing to share China's expenence with international friends. On the other hand, we also hope to learn more from international expenence through extensive exchange, discussions and cooperation to improve our work. I hope that you all will discuss the issue deeply, freely and openly, and contnbute your wisdom to the inclusion of small-scale farmers in modern markets and enhance their ability to better share the benefits of modern market expansron I hope through our joint e 任 0 s, we will create a great future for the development of modern agnculture in the world.
Finally, I wish the conference a complete success, and wish all the panicipants, international friends a good time in Beijing!
Thank You!
(http://www regovemingmarkets. org/en/filemanager/active?fid = 919)
Words and ""5
- l. marginalize @ rna: d3inolmz ] vt. to relegate to a rnargmal position within a society or group 使局限于社会边缘;排斥;使脱离主流
- 2. exclude (from) I iks <klu: d ] vt. to prevent or restrict the entrance of; to bar from parUcipation, consideration, or inclusion 扌巴
排除在外；对一一不予考虑` },

        { pdf: 87, print: 79, content:
`Part I English for International Acadernic Conference 79
- 3. facilitate I fo <siliteit ] vt. to make easier; help bring about economic recovery 使容易;促进;帮助
- 4. vertical @ vo: tiköl ] adj. going strmght up or down from a level
surface or from top to bottom in a picture 垂直的;竖的;立式的
UsefuI Sentence Patterns
I. This is going to be a great and significant e,, ent as the expenence will be shared and actions will be explored. 此次会议意义重大,在这
里我们将共同分享经验，一起探索行动方案。
- 2. Here, please allow me to express my sincere welcome on behalf
of the Chinese Ministry Agriculture to all the experts and friends that have participated in the conference！在此，请允许我代表中国农业部
对参加此次大会的所有专家与朋友表达我们最诚挚的欢迎
- 3. It only took emergmg economies ten years to carry out agrifood
market restructuring. 新兴经济只用了十年时间，便完成了农贸市场
的重组。
生 There are several emergmg issues that call for solutions. 这里有
许多急需解决的问题。
5, This intemational conferem, e provides a very good opportunity for all the participants to share expenences and cooperauon 此次国阡会
议为所有与会者提供了一个分享经验、共同合作的好机会
##Exercises
- 1. Directions: Fill in the blanks in English based on the information
pven in the brackets,
Welcommg Speech by Conference Chair
Good Morning,
Distinguished Guests, Speakers, KSEA members, Friends, and` },

        { pdf: 88, print: 80, content:
`Families, AII Welcome to UKC 2 (用 6!
（0 非常高兴看到） so many colleagues， professors, friends and families from the US and Korea, all in one place! The US-Korea Conference
个极其难得的机会），
（为我们提供了一
To my knowledge, th1S is the 0 司 y Conference where you can meet "小 leagues frorn your 0 "1 specialty area, but you can also
（与
,,重逢) your college physics, chemistry or metallurgy professor. Not only that, you can meet your 01d high school fnends, who now aerospace engmeer, computer scientist, biochenust, chairman of a large corporatton or even a congressman!
The UKC 2
（@组委会全体工作人员） in the
US and Korea have worked extremely hard for the last year 沁 prepare an outstanding conference. We have attempted to rephcate the spirit the onginal "Symposium wntten by Plato, the great Greek philosopher.
As a result we have prepared many symposiums" & "forums to
（0 探讨科学的真理、科学之美）， technology and education, while celebratmg our global friendships.
（@您有力的支持和积极的参与） have rnade the UKC 2 佣 6 a (0 空前的盛会). We have exceeded the to number of papers ever presented and the total number of people ever reglstered.
An impressive roster of dlstinguished speakers from Korea and the
US has been assembled for this ry SeSSlOnS.
（O 开幕式） and plena-
For the first time th1S year, UKC is completely
在线进行). We have successfully managed the whole conference with a comprehensive on—line process fOr
（@摘要和论文提
<交), conference reglstration, hotel reservation, and other services.` },

        { pdf: 89, print: 81, content:
`Part 1 English for Internauonal Acadenuc Conference 81
Generous sponsorships from many industrial companies and research organizations from the US and Korea have recognized that the US-Korea
Conference IS an important venue to discuss scientific and technologwal
（@太平洋地区的科技合作）．
Our Local Arrangement Committee consisting 鬲 KSEA NY Metro and NJ Chapters, and KASBP members provide rnaximum hospitality.
（@致力于）
@3 请随时) ask quesuons to eommittee members. We are here to serve you
Enjoy your participation in the UKC 2 (用 6 and memorable time visiting the NY Metropolitan area. We hope you return next year with even more colleagues for UKC 2 (7,
Thank you. Have a wonderful day.
Sung-Kwon Kang, Ph. D.
UKC 2 Conference Co-Chair, KSEA 35 th President
IBM T. J. Watson Research Center, Yorktown Heights, NY, USA (http: //www. ksea. org/uploads/BB/20/Welcoming% 20Speech%
20by ％ 20Conf ％ 20Chair-8 ] 1 ％ 209 一 1 1 一 06 ％ 20by% 20Sung%
20Karw pdf)
- 2. Directions: Translate the followmg into English.
我代表美国旅游批发商协会（USTOA)，正式向在座的各位表
示欢迎，欢迎大家前来参加我们举办的第 24 届年会和市场论坛。
同时还要感谢大家的支持，尤其在当下这一时期，大家的支持就更
加重要了。
无可置疑，我们生活在一个充满挑战的时代。这对于旅游业和
美国旅游批发商协会来说，并非什么新鲜事。在过去的几年里，我
们成功地度过了危机。我们同时也经历了空前的繁荣，表现出无尽
的乐观主义精神
在我们迈向新的一年之际，我们同时也面临着最严峻的时刻。` },

        { pdf: 90, print: 82, content:
`我们面临着考验，但我们一定会经受住考验。我坚信，有了协会强
有力的领导和行业内的合作支持，我们不仅能够主动地面对各种问
题，而且还能向前发展。
美国旅游批发商协会始终强调合作关系。在今后的 3 天里，让
我们欢聚一堂，共同探讨如何向前发展，如何发挥合作的力量。
- 3. Writing
>Directions: Study the samples in this Unit or refer 蜘 a sample in
the relevant website and wnte a welcome speech for a conference in your academic field.
##Supplementary Reading
WELCOME ADDRESS BY THE MINISTER OF ARTS
AND CULTURE
Ms LULU XINGWANA MP
AT THE OPENING OF THE LIASA CONFERENCE AT
ST GEORGES HOTEL, PRETORIA
28 SEPTEMBER 2010
It me great pleasure to be with you today and to be part the official opening of the 12th LIASA National Conference with the theme
' Libraries driving access to knowledge"
I wish to congratulate the organizers for bringmg together such a large number of librarians and other information workers from all over the country to focus on this very relevant theme.
The annual LIASA Conference is an important event in the calendar of the library profession. It is durmg this time that you as library practitloners reflect on what you stand for and the challenges that remam to be overCome.` },

        { pdf: 91, print: 83, content:
`Part 1 English for International Acaderme Conference 83
I am proud to confirm that my Department is committed towards the growth and development the library sector. We believe that access № informaUon is a key element in the creation and building of an inclusive society.
A few weeks ago I launched the inaugural National Book Week at
Museum Afnca in Johannesburg. This initiative is aimed at promoting literature in indigenous languages as well as fostermg a culture of reading especially amongst our youth.
As part of our week long programme we donated books to under-resourced libraries and schools. I am most grateful to the Van Schaik Pubfor their generous contribution in this regard We hope to con50 帛 date these efforts in the future.
ln addition to the national library week, which is celebrated in
March, the national book week w ill seek to coordinate the efforts of all partners in the promotion and preservation of our documentary hentage.
I therefore call upon you as library practitioners to take ad, rantage of national book week and use it to create new audiences for our hbraries,
Your conference theme, ' Libraries Driving Access to Knowledge resonates well with the Department's strategy of rolhng out new library infrastructure to commumties. As the Department of Arts and Culture we recognize the significance of access to information and its impact on the soclo—economlc conditions of our pe,ople.
Policy and Legislative Review
As you are aware, the l)epzmment of Arts and Culture is responslble for the overall policy development for libraries. To this extent we constantly reuew and propose new amendments to the current cohort of leglslation that we administer to align them with new go, rernment prionues · Such a review has been completed in respect of the following Acts:` },

        { pdf: 92, print: 84, content:
`· The National Council for Library and Information Semces Act
2 開 1 (Act No. 6 of 2 (1)
· The National Library of South Africa Act, ] 998 (Act No. 92 of
1998)
· The South African Library for the Blind Act, 1998 (Act No. 91 of 1998)
. 'lhe LegaI Deposit Act, 1997 (Act No. 54 of 1997).
The draft CulturaI Laws Amendment Bill will be submitted to parliament after the final consultation process has been concluded.
The Library Transformation Charter
The Library Transformation Charter has been cornpleted and was recently presented to the po oho committee of arts and culture. The committee supported the Charter and congratulated the techmcal team under
Professor Nkondo for a job well done. We will soon subrmt the charter to the select committee for recreation and education for further consideration.
The Llbrary Transformation Charter will be a framework for the transformation of the library sector in the country. It will signify the commitment of stakeholders, including all spheres government, to the de, elopment of libraries in South Africa.
Once adopted by government the charter will raise the profile and status 0 「 the library profession. 1 耘 e overall objecuve is to ensure that the library profession becomes a strateglc and transfonning resource capable of improving the soc10-economic conditions of society.
The l)epaflrnent is currently discussing the draft South African Community Llbraries Bill, 2010. The purpose of the BiII is to set national norms and standards for the delivery of library and information services` },

        { pdf: 93, print: 85, content:
`Part I English for International Academic C <mference 85 in all provinces and to promote and develop commumty library and information services of a high standard.
Through this Bill we hope to address a range of challenges that still exist in the sector. Some of these challenges include capacity issues, lack of ICT equipment, lack of indigenous language materials, opening hours, infrastructure, and the dispanties in the remuneratlon of librarians. We need to ensure that we eliminate all the past injustices and inequities that were prevalent during the dark years of apartheid.
The Department conducted an extensive research on the traming of librarians and other related professions. The recommendations of this report are currently receiving attention and we will consult with the Depart ments of Higher Education and Training as well as Public Service and
Administration before implementing them.
Community Libraries ConditionaI Grants
The implementation of the community libraries grant continues apace. project to extend reading experience and deliver library mfrastructure and services to the previously disadvantaged commumues, particularly rural areas.
An amount of R512 million will be transferred to provmces in the curent financial year to support the appomtment of more staff in our community libraries.
ln addition, the funds will be used for providing relevant library resources that W111 promote the government, s social cohesion and empowerment agenda.
Since the inception of the programme three years ago over 6) professional and support staff has been appointed at commumty libraries across the country, ln an effort to bndge the digital divlde public internet access, facilities are a 卜 0 being established in all libraries. The pro-` },

        { pdf: 94, print: 86, content:
`vision of computer facilities for the public rn libranes, accompamed by trammg in their usage, provides quantltative evidence of skills development in libraries.
It is important that we highlight some of the infrastructure achievements the project has realized. New libraries were established in the fo lowing 14 areas.. ln addition II I have been upgraded and it is expected that 8 new libraries will be completed this year.
However, while the project may be delivenng new library facilities, we have mtnessed recently unfortunate incidents of several libraries being burnt down m vanous service delivery protests. 111e challenge that you face as a sector is to ensure that our C(, mmumties understand the value of these facilities.
Libraries form part of our de, telopment strategy in our pursuit of building a fair, cohesive and caring society; a society where individuals and communities are empowered to take part in the economy, in the decision-making processes, as well as to parucipate meaningfully in the public discourse.
September is our Heritage Month. This year's National Heritage
Day national celebration was held in Durban on the 24th September at the Moses Mabhida Stadium with the theme of "Celebrating 2010 FIFA
Soccer World Cup Successes: our Hentage ' and President Jacob Zuma addressed the nation and urged our people to become part of the building
Of a common heritage and common national identity.
On this occasion political leaders also presented their messages to the nation and our interfaith communitles to lead a thanksgiving prayer and service to glve thanks for a successful World Cup
President Zuma outlined the lessons learnt from the World Cup, the most important one being that "determination and unity of purpose are recipes and ingredients of success". He pointed out that:"We also` },

        { pdf: 95, print: 87, content:
`Part I English for International Acadernic Conference 87 learned that the umty and cohesion of our communities are sources of strength and inspiration that can lead to greater ach ievements. · We learned too, that it is possible to build a truly united and cohesive South
African nation, focused on the goal of building a prosperous South Afri-
The fact that so many white South Africans, young and 01d filled the stadiums to celebrate the soccer tournarnent, while black people flocked to the Orlando Stadium before the World Cup to celebrate rugby, shows that we have not begun to harness the potential for creatmg a common national identity. We have to take these lessons forward.
Our people taught us a lot, including that nobody must stereotype or pigeonhole South Afncans.
I would like to reiterate President Zuma, 5 words here today. It is our great patnotism that we need 蜘 take forward and our confidence ln themselves and a renewed consciousness of WhO We are aS a people what we can dO together.
I would like to request the umversity community to help us to take these lessons forward. The challenge moving forward is how to use this example 司, a people united in action as a living legacy to propel our people into the future—to be confident about our own abilities and to be proud of our history, to engage in a national dialogue, to build social cohesion and to honour our livmg human treasures.
On the 30 September, the l)epartment of Arts and Culture will also be hosting a public forum in Johannesburg where delegates will discuss and debate hOW we conceptualise national living human treasures and how we take this initiative forward
I invite acadermcs, intellectuals, heritage practihoners, artists and interested members of the public to be part of this important discussion about our hentage.
Gathered here, we should together with LIASA look at innovative` },

        { pdf: 96, print: 88, content:
`ways of advocating for libraries, strengthening and enhancing the sk ills of the current cadre of LIS workers and attracting more people to this extraordinary profession. We must aim to make th1S a profession of choice and not a last resort choice.
Let us commit ourselves to using libraries to unlock the rnmds of our nation; become repositories of our cultural hentage; show our literary talent; and become an active role player in bndging the digital divide.
Lastly, I wish to extend my congratulations to Ms Ellen Tise who is now the President of the International Federation of Library Associations and Institutions (IFLA). This 这 a great achievement for the library profession in South Africa. I am a 卜 0 informed that Mr John Tsebe will be the new Chair of the Conference of National Library Direct01S. Co 小 gratulations to you t00.
I wish everyone attending today a pleasant and enjoyable conference. Thank you.
(http: //www. liasa. org. za/node/4 巧)
##Useful Words and Expressions
- l. resonate I irezopeit V. to produce or exhibit resonance;
spond as if by resonance; to relate harmoniously (使)共鸣;
起回声；共振；共鸣
2, in respect of: about; relate to 关于 to re-
（使）
- 3. indigenous [in' did3inos ] adj. having onginated in and being
produced, growmg, livmg, or occumng naturally in a particular regron or environment 土产的；土著的；本地的
- 4. dispanty I dis' p 出亩 1 n. containing or made up fundamentally
different; markedly distinct in quality and character 不同;不等
- 5. remunerahon,mJt1: nO reifan n. S(, mething that remunerates 酬劳;赔偿` },

        { pdf: 97, print: 89, content:
`- 6. apartheid I pa: theit ] n. racial segregation; a policy of segregation and political and economic discrimination agamst non-European
in the Republic of south Africa （南非）种族隔离政策；隔离；分离
- 7. reiterate <itoreit] Vt. to state or dO over again or repeatedly
重做；重申
U $ Sentence 尹 ' rn
I. It gwes rne great pleasure to be with you today and to be part of
今天很高 the 0 伍 c 司 opemng of the... Conference with the theme.
兴能与诸位在此相聚，共同参与此次大会的开幕式。本次会议的主
题是．．．
2, The annual LIASA Conference is an important event in the calen-
每年一届的南非图书馆与信息协会会议 dar of the library profession.
是图书馆界日历上标明的重要事件。
- 3. This imUaUve is aimed at promoting literature ln indigenous languages as well as fostenng a culture of reading especially arnongst our
youth. 这一举措旨在促进土著语言文学发展，尤其在青少年中培
养形成一种阅读文化。
- 4. The overall objective is to ensure that..,总体目标即确保.
5， us commit ourselves to. 一让我们致力于．．
- 6. Lastly I wish to extend my congratulauons to Ms. Ellen.. 最后,
我要向埃伦女士表示祝贺。
##References
- 1. http: //cis-sacp. government. be/sacp/CIS/content en/secondconference/shinnmestan. htm
- 2. http: //www. regoverningmarkets. org/en/filemanager/active? fid
= 919
- 3. http: //www. ksea org/uploads/BB/20/Welcoming% 20Speech%` },

        { pdf: 98, print: 90, content:
`20by% 20Conf ％ 20Chair-811 ％％ 209 一 11 _ ％％ 205y ％ 20Sung%
20Kang. pdf
- 4. http:／,／,, w. ustoa. com/pressmorn/pressamhwe/jacksonspeech. htm
- 5. http: //www. liasa. org. za/node/4 巧
- 6. http: //dict. baidu. com/
7, Hornby, A, S. 0 b 司 Advanced Learner's E ' 标方一 C "se 刀 ttonary. Oxford: Oxford University Press, 2009
& Merriam-Webster's Co 禳 e 刀 ' Memam-Webster, 20o0 (CD-ROM)` }
      ]
    },

    {
      id: "p1-u10",
      part: "Part I",
      unit: "Unit 10",
      title_en: "Speech at the Opening Ceremony",
      title_cn: "开幕词",
      print_start: 91,
      pages: [
        { pdf: 99, print: 91, content:
`#Unit 10　Speech at the Opening Ceremony
##Sample Study
>Directions: Read the following samples and learn the useful expressions.
##Sample 1
Opening Speech by Franziska Böhme
Education is a social process. Education is growth. Education is, not a preparation for life; education is life itself.
These words by American educational reformer and philosopher John
Dewey capture the two-pronged idea of why we are all here today. on the one hand, it puts in a nutshell the entire concept behind what awmts us in the next 48 hours and what made you want to come here—education among fellOW students and a new envlronment ln another City, and even another country. On the other hand, Dewey's words refer to the educational value of the organizauon pmcess behind this conference.
It is great to see SO many enthusiastic graduate students from across
Europe here. Until tomorrow night, we will have the unique chance to listen to interestmg presentations, meet fellow students from all parts of
Europe, benefit from their feedback, and hopefully you will leave i zig Wlth a mind broadened by new insights, food for thought, and inspmng conversatlons—thereby putting mtO practice Dewey's words.
Meant as a cntical forum for MA-Ievel students, th1S conference gwes all
Of us the chance to not only present our research but also to develop new ideas and pose questions. This is what education is all about and it will` },

        { pdf: 100, print: 92, content:
`without doubt ennch our personal and acadermc lives. For many of us, this is the first academic conferenc€,, and for many, I also assume, it will not be the only/last on 巳 This is what makes this conferenee an experimental stage, a glimpse of what lies ahead of us.
Not only does the quote by John Dewey explam our wish to be part of this educational expenence, it also reveals what brought this conference intO existence in the first place. Based on the idea 0 「 hand-on learning, which Dewey famously advocated, Arnerican Studies Leipzig integrated a module into its MA program making it the task of its 2nd year MA cohott to organize a conference, the first of its kind for MA-level students. I feel thus very honored to stand before you tOday as one part of the six-strong organization committee. Together, we would like to welcome all of you to this first graduate conference hosted by Amerlcan Studies Leipzig. We hope you all had a good trip and some of you also a good first night here in Leipzig. We also welcome Sheila l.alwani and Consul for Public Affairs, James Seward, from the tJS Consulate
General here in Leipzig.
Our interest in the conference's topic was first sparked through one our modules entitled "Rethinking the Americas", and it forms part a broader acadermc trend in American Studies, dubbed the transnahonal turn, which has questioned many assumptions on which American Stu · dies had been resting throughout the twentieth century. Trying to get a fuller picture and gam a more complete understanding 帚 the United
States has meant to look beyond and across its national borders and see mutual interdependencies. The idea of placing America m a transnational world" allows us to unearth hidden connections between the US and other countnes and cultuæs and thus enables us to see that what we call globalization today has actually been part of the world, s hist09 ' for much longer. By investigating globalization and the social` },

        { pdf: 101, print: 93, content:
`processes it entails it becomes possible to deconstmct long-established ideas, such as spatial borders, territories, nations, and identity.
Many of the pres-entations which we will enjoy over the next days pick up this paradigm shift by looking at diasporas, rmgration flows, transnational movements and the representations thereof in literature and 61m.
The conference, s more specific sub-title seeks to embody a space of inquiry beyond a mere good or bad dichotomy of what globalization means and what effects it has.
As an interdisciplinary conference, we encouraged contnbutions exploring literary and cultural representations of the Americas as well as presentations interested in political, sociologlcal, and historlcal topics.
We received 28 applications from Europe and the US investigating notions of a transnational America from various fields of inqurry, of which seventeen presentaUons were selected and grouped intO six different sessions. After the keynote speech, we will start out the conference with the session Transnational Locations of Home, in which a transnational Arnerica will be approached through the concept of home and how this relates to identlty constructions m vanous transnational setti ngs.
Applying theones such as Horni Bhabha, s "third space " and Aleida
Assmann, s "Ennnerungsräume to ethnic and rmgrant literature as well aS a science fiction series, the presentations Will explore notlons of borderlands, belongmg, and cultural conflict.
The session "Conflicts in the Americas this afternoon includes three presentations that deal with controversial issues and Sources of conflict in the Americas. Even though the presentations are de, roted to very different places and spaces—California, the US-Mexico borderlands, and BraziI—they are nevertheless all concerned with the effects of global dynamics on these envvronments. We will hear about immigrants, antlcipation of and disillusionment with the American drearn, the new US` },

        { pdf: 102, print: 94, content:
`policy to tackle the drug war across the US-Mexico border, and the changmg face of a Brazilian social movement.
our third session later today, entitled "Transatlantic Perceptions &
Influences, will focus on different interactions across the Atlantic and will inquire about the influence these cultural interacUons exert on the perceptions on bOth ends. Our presentations will examine, for instanc€,, the perception of the European Union in the US, American political culture in a global context, and the perceptron of different American cultural agents in present-day Afghanistan.
Tomorrow morning, we will begin the day Wlth looking at possible victims of globalization. By analyzi ng possible negative implications of media, capitahsm, and cnme on globalization and vice versa and how these interdependencies are depicted in popular culture, the three presentations apply concepts such as global village, global dump, and gendered agency to popular culture; and a spoken word performance stnves
№ challenge established parameters of an academic address.
The session "ldentities and Globalization is interested in representations of identiUes. Through the lens of literature, the presentations assembled under this roof W111 approach the interplay of identity construction and aspects of globalization by examimng more closely the relationship between identity and the US as a superpower, gendered transnational and migrat01Y expenences, and the fragmentation identlty resulting from globalization.
our last session tomo 仃 ow afternoon, entitled "Globalizing Media
Culture, and ldentity" evolves around the media's lmpact on individual lives. The media, s globalization, as expressed in the Internet as well as the predominance of US-American popular culture formats across the world, has raised quesuons about its effects on the receiving end—individuals and societies Wlth different cultural backgrounds and codes.` },

        { pdf: 103, print: 95, content:
`Part I English for Intemational Academic Conference 95
Using the Internet and the emotional culture of US-American TV shows as a startmg point, the two presentauons will address their effects on SOcial interaction and the non-American spectator.
The topics of all these presentations mirror not only the fruitful broadness of the topic at hand but also the myriad disciplines and methodologies that inform Arner1(, an studies, rangmg from literature, economics, sociology, and cultural studies to politlcal science, histO-
, and film studies. That this exciting graduate student research from across Europe gathering here in Leipng for the next two days has been made possible through the generous support from our sponsors. A grant from the US Consulate GeneraI allowed us to award travel grants to most of our German presenters. Also, the umversity's Förderer and Freunde
Association supported us and ensured the international travel grants.
Moreover, we are grateful to the Hobbie-Mancke family, and the Fulbright Commission that enabled the keynote speech by Sheila [nlwani.
So, to all of you, thank you for coming, welcome to Leipzig, and enjoy the conference,
Thank you.
(http: //americanstudies. uni-leipng. de/systern/fil( s/Opemng%20
Speech% 20by% 20Franziska% 20B ％ C3 ％ B6hme. pdf)
Words and E 攴 s 豆 0
- 1. pronged I prorjd ] adj. to stab, pierce, or break up with a
pronged device 尖端分叉的
2, cohort @ kouho: t] n. one of 10 divisions of an ancient Roman lewon； a of warriors or soldiers 一队人；一群人；同伴；支持
者；共谋人；（罗马）步兵大队
- 3. consul 0 konsol) n. either of two annually elected chief magrstrates of the Roman republic; an of6 卣 al appointed by a government to` },

        { pdf: 104, print: 96, content:
`reside in a foreign country to represent the commercial interests of citizens of appointing country 领事;(古罗马的)执政官;公使
- 4. diaspora I dai> æspora n. the settling of scattered colomes 鬲
Jews outside Palestine after the Babylonian exile; the area outside
Palestine settled by Jews； people settled far frorn their ancestral homelands 海外的犹太人；海外犹太人聚居之所；（任何族群的）大移
居；离乡背井聚居的族群
- 5. dichotomy I dai ' kOtomi ] n. the division or the process of dividing intO tWO especially mutually exclusive or contradictory groups or entities 两分;分裂;二分法
- 6. myriad @ miriod) adj. ten thousand; a great number 无数的,
大量的；各种各样都有的
7, in a nutshell: in a very brief statement
& dubbed adj. 被称为“．一的
UsefuI Sentence Patterns
- l. It is great to see SO many enthusiasUc graduate students from
ac 灬 s Europe here. 很高兴看到这么多来自欧洲各地的热情洋溢的
研究生们
2, Until tomo 仃 ow night, we will have the umque chance to listen to interestmg presentations, meet fellow students from all parts of Europe, benefit from their feedback. 一大会将一直持续到明天晚上，这是一
个难得的机会，我们将听到有趣的演讲，见到来自欧洲各地的同
学，受益于他们的回应一
- 3. Not 佣 ly does the quote by John Dewey explain.
it reveals.
引用的约翰 · 杜威的那句话不仅说明了一一同时也解释了一
- 4. As an interdisciplinary conference, we encouraged contributions
exploring llterary and cultural representations the Americas as well as presentauons interested in political, sociological, and historical topics.` },

        { pdf: 105, print: 97, content:
`Part I English for International Academie Conference 97
作为一个跨学科大会，我们鼓励大家展现自己的研究成果，尤其是
关于文学文化中的美国以及探时政治、社会、历史的研究成果
- 5. The topics of all these presentations mirror not only the fruitful
broadness of the topic at hand but a 卜 0 the myriad disciplines and methodologies that inform American studies, rangmg 五 orn literature, econonucs, sociology, and cultural studies to political science, histo-
0， and film studies. 这些演讲题材丰富，很有价值，涉及了文学、
经济学、社会学、文化研究、政治学、历史、电影研究等诸多学科
领域和研究方法，极大地丰富了美国研究的内容。
##Sample 2
Opening Speech of Conference on the lmpact of Land Use and
Natural Resources in Rural Areas Held in Vientiane 07 / 04 / 2008
By Mr. Kham Ouan Boupha, Minister the Pnme M e 以
0 矛 ce, 7 / 醌 M 以
Respected guests, ladies and gentlemen:
on behalf of the National Land Management Authority, I would like to express my deep gratitude to all of you for spanng your valuable time to be presented at the conference of the impact on land use and natural resources in the rural areas of I 0 PDR today.
l)istinguished Guests,
It is characteristic for the geography of Laos that around 80 ％ of its total area is mountains, while just 20 ％ are lowland covered mainly by clear forest and bush land of lower quality oa Khok). About 90 ％ of the population is living in the country side.
Because of these geographic charactenstics, the policy of the I 0 government in land management and land use is to enhance the quality of land and increase the land value, while avoiding any, gative impacts` },

        { pdf: 106, print: 98, content:
`on the environment and on the entire society. At the same time, there have been measures set in place to maintain the water resources and land fertility and to prevent soil erosion. Besides this, the most important key element is the prevention of forest destruction in any case.
ln 2 )3, the government has impro, red the land law, in which it is emphasinng a person, s rights regarding property and utilization of land.
ln May 2) 7 the government has organized the conference on "Perspectives and Understanding of Land lssues
This conference has laid out a strategy and regulations for the implementation of land and natural resotn ℃ es management, protection, development and utilization.
Generally, land use in rural areas is one of the main pillars of the national economics development plan that focuses not only on fOOd production, but alSO on hydropower generation and eco-tourism.
At present, the go, rernment of the I 0 PDR airns to tackle poveny reduction by the year 2010 and to free the nation from the status of least de, eloping country by 2020.
l)istinguished Guests, Ladies and gentlemen, ln the past, the Non-governnu, nt Organizations from vanous countries have assisted the 1 0 PDR, working mamly in the rural areas.
This work has contributed to the improvement of the people, s livelihood and paid attention to enwronment protechon. It also contributed to the lmplementation of land and natural resources management, protection, development and land use in the Lao PDR
I hope that during this workshop on "lmplications of land and natural resources management in rural areas"
concerned experts will have an excellent opportunity for presenting their research on land exchanging lessons learned among each other for the benefit of effective policy making and strategy formulation of land and natural resources` },

        { pdf: 107, print: 99, content:
`Part I English for International Acadernrc Conference 99 management in the rural areas 帚 the 0 PDR.
Last, but not least, I would like to wish all participants and organizer of this workshop good health and a successful conference.
Herewith I officially open the conference.
Thank you for your attention.
(http: //www. laolandissues org/workshop/Opening% 20Speech. Eng
Words and Expresstons
- l. erosion i r01130n n. the acuon Or process of eroding; the
state of being eroded 侵蚀；腐蚀；冲蚀
- 2. hydro power ' haidrou tpauo ] n. Hydroelectric power 以水力
所发的电力；水力
U 和 / Sentence Patterns
- l. On behalf of.
I would like to express my deep gratitude to all
Of you for sparmg your valuable time to be presented at the confer-
我代表．“．对今天各位抽出宝贵的时间来参加此次大会表 ence.
示深深的感谢。
- 2. It is characteristic for the geography of Laos that around 80 ％ of
its total area is mountains, while just 20 ％ are lowland covered mainly by clear forest and bush land of 10w "quality oa Khok).老挝地理环
境独特，山区占其国土总面积的 80 ％，只有 20 ％的低地是被未开
垦的低质量的森林带所覆盖。
- 3. Last, but not least, I would like to wish all paflicipants and organizer of this workshop good health and a successful conference. 最后,
但并非不重要的是，我祝愿所有与会者和本次活动的组织者身体健
康，祝大会富有成效。
- 4. Herewith I officially open the conference. 现在,我宣布大会正` },

        { pdf: 108, print: 100, content:
`式开幕。
##Exercises
- l. Directions: Fill in the blanks in English based on the information
grven in the brackets.
hospital, I am greatly ( (谨代表) the cardiovascular department of our
（很荣幸地欢迎大家参加）
the Conference on Contrast Induced Nephropathy (CIN). As we know,
CIN is the third most cornmon cause of in-hospital acute renal fmlure and is associated wmth long-term mortality rates, major adverse cardiac events, and the risk of undergoing renal dialysis.
(随着.一",飞速发展) in the number of diagnostic imaging and interventional therapies, CIN has become a healthcare burden for governments and a challenge for interventionists. However, plenty of doctors practICing in intervention and imaging (4)
（没有意识到其
重要性) of CIN, and many issues concerning CIN still (
（还不清楚；有待于解决）， To raise awareness CIN， this conference 〔 6）
（给大家提供一个重要机会） to gather here to (交流经验,探时解决办法) for CIN, which definitely will result in the impro, red outcomes for our patients.
（我们很荣幸邀请到） Professor David Zhao from the United States and Professor Peter Gross from Germany to join us for this conference. Professor David Zhao is the director of the Cardiac
Cath Lab and interventional cardiology in Vanderbilt Heart Institute. He is one of the 0 } (开拓型的) cardiologists in the field of percutaneous circulatory devices. Today he will <@
一话题给我们做报告）
' State of Art Interventional Cardiology:
20 ] 0 and Beyond, · Professor Peter Gross is the chairman of nephrology section at the Universitätsklinikurn He has served in leadership roles in` },

        { pdf: 109, print: 101, content:
`Part I English for International Acadermc Conference 10 ] many professional socieues and scholarly journals. Today he will gve us a lecture on ' New Advances in CIN,, @
（毫无疑问）
that their lectures will bnng us latest progress both in interventional cardiology and CIN.
With a large number of participants, we are sure that this conference will be a memorable, highly educational, and "not-to-be-missed"
event. We hope that this conference will help you 龙 (更好地了解) the CIN and obtain the knowledge on the prevention and treatment of it. We truly,, alue your partwipation and support for this uon.
（感谢各位的光临） and for your atten- (http: //www. english-test. net/forum/ftopi 巧 23 1 & html)
- 2. Direcuons: Translate the following into English.
在柏林首届国际沙棘协会大会开幕式上的讲话
尊敬的主席、女士们、先生们：
首先，我代表国际沙棘协会，向到会的各位表示热烈的欢迎
其次，我向组织者，尤其是莫塞尔博士和组委会的全体成员表示真
诚的感谢，正是因为他们的努力，我们今天的会议才得以顺利
召开。
沙棘是一种具有环境、经济和社会效益的多用途的植物资源。
人们已经达成共识，沙棘具有巨大的经济价值。因此，中国政府成
立了专门的管理机构并筹集资金支持沙棘研究的发展。在中国，沙
棘资源每年以 10 万公顷的速度在增长，沙棘的种植和开发已经纳
人政府的议事日程。
长远来看，沙棘资源的研究与开发在全球环境的可持续发展和
扶贫方面将起着主导的作用。因此，我们既面临这空前的机会也面
临着巨大的挑战。借此机会，为了实现为全球造福的更高目标，我` },

        { pdf: 110, print: 102, content:
`建议就以下领域开展系统、科学的研究与国际合作。为了实现这些
目标，我衷心希望专家、研究者和企业家之间能够加强国际合作与
学术交流。
最后，请让我再次代表国际沙棘协会向我们的德国同仁表示感
谢，他们为大会的召开做了较为完善的准备工作，预祝大会获得圆
满成功。
谢谢大家！
3, Writing
>Directions: Study the samples in this Unit or refer to a sample in
the relevant website and write a speech at the opening ceremony of a conference in your acadenuc field.
##Supplementary Reading
Opening Speech at the JOint Conference on Climate Change &
Green Growth
Date of speech: 5 Oct 20H
Mr. Yoon Jong-Soo Vice-Minister of Environment
Ambassador Tomasz Kozlowski
President Matthias Kleiner,
Excellencies, Distinguished Partu•ipants,
Ladies and Gentlemen,
It is my pleasure to speak to you today on the occasion of this Joint
Conference on Climate Change and Green Growth. ] would like to extend my warmest welcome to all of the distinguished participants, especially those who have travelled long distances to be present here today. I would also like to thank the organizers for hosting this highly meaningful event here in Seoul.` },

        { pdf: 111, print: 103, content:
`I do not believe I would be speculating if I were to state that climate change and green growth are tWO topics to which most of us gathered here are no strangers to. ln fact, climate change and more recently, green growth, are two key global issues that have become firmly established in the international policymaking vernacular.
This is an unequivocal fact that I have observed in my prewous expenences in the field, including as the SpeciaI Envoy of the UN Secretary-General on Climate Change and as the Chainnan of the 2) 9 OECD
Ministerial Council Meeting durmg which I was able to garner the unammous support of the participati ng ministers to adopt the OECD
Declaration on Green Growth, and of course m my current positions that include the Chairman of the Global Green Growth Institute and the Member of the UN Secretary-General's High-LeveI Panel on GlobaI Sustainability. Yet I do believe that the theme this conference today—understandmg the threat, seizing the opportunities—poses important questlons for all of us to ponder.
Ladies and Gentlemen,
Whilst less promment today compared to the early days when climate change first emerged as an issue of global significance, there still exists a vociferous debate regarding the science and the numbers behind climate change. Without doubt, to truly understand the th reat posed by global climate change, and to enable policymakers to eraft efficient measures to counteract the resulting negative effects, exact measurements and calculations are lmportant. However, it is not necessary to delve deep into the finer details of climate change science to understand that the threat posed by climate change is one that is both urgent and grave. Even the most opUmistic of forecasts point towards disastrous consequences—econormc, envrronmental We were to proceed on the path travelled so far` },

        { pdf: 112, print: 104, content:
`The factor and labor-intensivc,, energy-extensive growth model that finds its ongms in the first industrial revolution has led the rnaJority of the world on an mcreasingly unsustainable development path that has pnontized economic expansion without taking due account of ecological consequences. AS a result, We Wltnessed a significant increase temperatures of the Earth, s land masses and water bodies that has altered regional and global climate cycles, raised sea levels, brought torrential ram and crippling droughts and other forms natural disaster to all corners of glObe, endangermg entire ecosystems, econormes and SOCle— ties. What is more, our thirst for unchecked econormc growth, coupled with the degradation of our ecosystem, has meant that the world, s pre-
CIOuS resources or glObal commons aS water are ln— creasingly in short supply•
Nowhere are these worrying trends more pronounced than in Asia.
As you may probably know, five of the world, s seven largest carbon emitters are from the Asia-Pacific reglon; they are China, Russia, India, Japan and Korea. Two others are the United States and Gennany.
As Koreans weathered one 鬲 the wettest summers on record the devastation wrought by climate change literally hit home as mudslides triggered by days of torrential rain brought tons of earth into third-floor living rooms of high-rise apartments in the most affluent suburbs in Seoul.
Ladies and Gentlemen,
As the example that I have JtISt mentioned serves to shOW Korea is one of the countries that is most vulnerable to the negative effects of climate change. However, since the mauguration of President Lee Myungbak in February 2 (8, the current regime has clearly understood the threat posed by climate change and has acted swiftly and 囝 ly 怖 counteract negative climate effects. Moreover, its ambitious schemes` },

        { pdf: 113, print: 105, content:
`Part English for International Academic Conference 105 have allowed Korea to turn the climate cnsis mtO an opportunity for renewed, quahty-onented growth that is encapsulated in the new paradigm green growth of growth, i. e.
Upon declaration of Low Carbon Green Growth" as the new national vision in 2) 8, the government has deused and implemented comprehensive policies such as the Green New l)eal that was instrumental in enabling Korea, s rapid recovery from the @(,bal financial crisis, while also embedding the mechanisms 蜘 promote green gmwth. Institutional and legal frameworks to coordinate and enforce green growth policies were established through the PresidentiaI Committee on Green
Growth and the Framework Act on Low Carbon Green Growth. We are now in the third year of the first Five-Year Green Growth Plan (2009 一
2013) in which 2 percent of total GDP is being invested towards green growth related R&D.
Without doubt, there still remam hurdles 怖, ercome in the road ahead. The successful operation of the emissions trading scheme once it is introduced in 2015 will require efficient institutions and monitormg mechanisms. Reaching the target 鬲 1 1 ％ of total pnmary energy generated by renewable sources by 2030 will depend on the continued development of related technolopes as well as the introduction of appropnate market incentlves to promote additional pnvate sector mvestment. Meanwhile, to accomplish our mid-terrn greenhouse gas reduction goal energy pnces and other pncing mechanisms will need to be further revised in order that ecological costs are truly reflected in the pnce of g 佣小 and sermces.
lmportantly, these experiences and knowledge gained in our domestic pursu it for green growth is being shared with the international community through numerous reglonal and global initiauves, chief among them being the Global Green Growth Institute that was established` },

        { pdf: 114, print: 106, content:
`in June 2010. GGGI, headquartered here in Seoul and with overseas offices in Copenhagen and Abu Dhabi, is a global "think and act tank"
that promotes and disseminates the green growth paradigm worldmde.
GGGI provides analytical support for green growth strategies and assists developing countries in creating the capacity—including the institutional, legal and regulatory mechanisms—to pursue green growth.
Since its establishment, GGGI has conducted three country programs in
Ethiopia, Indonesia and Brazil. This year, it has actively expanded its engagement to countnes including Cambodia, Kazakhstan and the
United Arab Emirates (UAE).
Our work has been joined by numerous donor countnes such as l)enmark, Japan, the UAE Gennany and Australia, as well as numerous international organizations including the OECD, UN FSCAP, World
Bank, ADB and EBRD. Ultimately, in asslsting the developing countries that are often most vulnerable to negative climate change effects and equipped Wlth the least capacity to tackle the resulting consequences, green growth will provide the tools that will allow these nations to better address climate change and devise their own measures for tuming cnses intO opportumues.
Ladies and Gentlemen,
It is my sincere hope that this Joint Conference on Climate Change and Green Growth will prove to be a most useful 0(℃ asion to better understand the threats and opportu mties posed by clirnate change, and identify and evaluate the tools and measures that can facilitate the paradigm shift towards green growth. ln closing, I would like to once agam extend my gratitude to all the participants and I look forward to a most successful and fruitful conference.
Thank you for your attention.
Author: Dr. Han Seung-soo` },

        { pdf: 115, print: 107, content:
`Part I English for International Aeademic Conference ] 07
Organizauon (s) involved: GlobaI Green Growth Institute
Tags: Han Seung-soo (http: //www. ggp• org/speech/2011/00/00/familyname/openingspeech-joint-conference-climate-change-green-growth)
##Useful Words and Expressions
- l. vernacular I va <nækjulo n. using a language 可 dialect native
to a reglon or country rather than a literary, cultured, or foreign language; being the normal spoken form of a language 本国语;本地话,
方言；行话
- 2. vociferous voul sifaros adJ. SO loud or insistent as to compel
attention; implies a vehement shouting or calling out 喊叫的.喧嚷的;
喧哗的，大叫大嚷的
- 3. wrought [ro: t ] adj. to fashion or create a useful or desired
product by expending labor 做成的；加工的；精细的
生 mudslide @madslaid ] n. a large amount of mud sliding down a mountain, often destroymg buildings and injurmg "killing people below
塌方；山崩；淤泥倾泻；泥塌
- 5. paradigm ['pærodaim n. a typical example or pattern of something 范例;模范
UsefuI Sentence 尹 å 吖"",
- 1. I would like to extend my warmest welcome to all of the distinguished parucipants, especially those who have travelled lor distances
to be today. 首先，让我们以最热烈的掌声欢迎在座各
位嘉宾的到来，尤其是不远万里来此参加会议的嘉宾们。
- 2. Nowhere are these worrying trends more pronounced than in Asia. 最令人担忧的是在亚洲
- 3. It is my sincere hope that this JOint Conference.
will prove to` },

        { pdf: 116, print: 108, content:
`be a most useful occasion to better understand.. 我真诚地希望这次
一会议将是一个最好的机会，让我们更好地了解，，
- 4. ln closing, I would like to once agam extend my gratitude to all
the paflicipants and 1 100k forward to a most successful and fnritful conference. 最后,我想再次向所有与会者致以谢意,祝大会圆满成
功、富有成效！
##References
- 1. http: //amencanstudies. uni-leipzig. de/systern/files/Opening%
20Speech% 20by% 20Franziska% 20B ％ C3 ％ B6hme. pdf
- 2. http: //www. laolandissues. org/workshop/opening％ 20Speech.
Eng. pdf
- 3. http: //www. english-test. net/forum/ftopic5231 & htrnl
4, http://isahome. net/rnain. php? optiomd =20&auto id = 1 川
5, http: //www. gggi. org/speech/2011/00/00/familyname/openmg-speech-joint-conference-climate-change-green-growth
- 6. http: //dict. baidu. com/
- 7. Hornby, A. & 0 无知 rd, 4 ""læarner's English-Chinese 刀 i
石"榄 0. Oxford: Oxford University Press, 2 (9
& Memam-Webster's Co 佐 ct "0 '. Memam-Webster,犭耵)
(CD-ROM)
- 9.有道词典 http: //dict. youdao. com/` }
      ]
    },

    {
      id: "p1-u11",
      part: "Part I",
      unit: "Unit 11",
      title_en: "Conference Presentation",
      title_cn: "会议发言",
      print_start: 109,
      pages: [
        { pdf: 117, print: 109, content:
`#Unit 11　Conference Presentation
##Sample Study
>Directions: Read the following sample and learn the useful expressions.
Presentation by Yuanzheng Wang of ICAO at the Worid Trade Organization, s Symposium on Tourism (Gene, 'a, 22 一 23 February 2 仪 )I)
AIRLINE PRODUCT DISTRIBUTION SYSTEMS
AND THE REGULATORY FRAMEWORK
Introduction
I would like to thank the WTO for inviting ICAO to participate in this Symposium to discuss many important issues relating to tourism which bears close relationship with air transport.
My presentation will cover three parts: 1) major developments in airline product distribution; 2) the current regulatory framework focusing on the global CRS code of conduct developed by ℃ AO; and 3)
SOme issues.
I would like to start off by showing you two charts which demonstrate the close relationship between tourism and aviation. The first one indicates the growth pattern for the 10-year penod from 1990 to 1999 in terms of international passengers carried and tounst amvals, and the second one, in terms of international tounst receipts and passenger revenues. As shown transport and tounsm are indeed closely related and largely interdependent; their development and future prospects` },

        { pdf: 118, print: 110, content:
`1 ] 0 国际学术会议英语与跨文化交流 are also connected.
Now let rne turn to the subjeet of amrline product distribution. The traditional way most air carners distribute/sell their products (air service) to their customers is typically through computer reservahon SYStems (CRSs) and travel agents. The advance of information technology has had a profound impact on the way the airlines conduct their business. CRSs have become the prmeipal airline distribution t001 and have developed to global systems covering all modes of travel and are expected
№ continue to expand in a11 region.
The term CRS, though often used interchangeably with the term global distrlbution systems (GDS), has a specific meaning in the aviation regulatory context. By definition, it refers to a computer system that pro, 'ides displays of schedules, space availability and tanffs of air carriers, and through which resen, atlons on air transport seruces can be made"
Major developments
Along with the trend of globalization, liberalization in the world economy and driven by technology advances and market forces, aviauon industry has undergone major transformation in the last decade, and so has arr carrier production distribution.
The first major change is the dirmnishing ownership and control by airlines of the systems. CRSs used to be owned and operated by airlines. But in the past few years, airlines affiliated with the systems have substantially divested their ownership interest. Three of the four existing global CRSs have now either had no airline ownership (g. Sabre,
IOO% owned by the public) or had its stake substantially reduced (e. g. the public now owns 73. 2 ％ of Galileo and 40 ％ 0 「 Amadeus).
Only Worldspan is still owned by airlines (Delta: 40 ％; Northwest,` },

        { pdf: 119, print: 111, content:
`Part I English for Internauonal Aeademic Conference 1 ll
34 ％； TWA： 26 ％）．
A second major change is the rapid growth in direct on-line sales via the Internet. The use of the Internet for product distribution gwes mrlines, like other travel and tourism suppliers, new ways to market and sell their services as well as opponunities to significantly cut distnbution costs. Similarly, it makes easier for travellers to obtam information and make bookings.
Another development is the concentration of CRS service providers.
There were more than a dozen major CRS venders in 1993, now there are only 4 mega-CRSs. At the same ttme we have also seen more players engaged in the business, partwularly in on-line direct sales to travellers. Not only the traditional air camers, the CRSs now do it, but also an mcreasing number of third party providers such as travel agents (traditional and new ones,巳 g. Travelocity/Preview), retail distributers (e. g. Walmart), software companies (e. g. Microsoft) and banks (e. g. Pnceline. com
These developments have presented oppoltunihes and challenges to the travel industry as well as new regulatory questions and issues, which
I will discuss a bit later.
Role of governments
Why regulate CRSs? As mentioned earlier, almost all CRSs were origmally owned and operated by airlines. As a powerful marketing t001, they also had the potential, under competltive pressure, to be used in abusive ways (such as bias display, discnrnlnation agamst competitors, etc.), Therefore, government regulations have been formulated to address the concerns on antl-competiti ve practices, and to ensure falr competiuon, equal accessibility and consumer protection. Regulations on
CRSs have been developed on national, reponal and global levels.` },

        { pdf: 120, print: 112, content:
`The role of ICAO in the field of economic regulation is to provide a global forum (with 186 member States) for developi ng policy and guidance on the regulation of international air transport. It also helps harmonisatmon of diverse regulatlons. For example, there are national
CRS regulations in the United States, Canada, Australia, and also regional rules or CRS codes adopted by the European Union, the European Civil Aviation Conference (ECAC) and the Arab CiviI Aviation
Commission (ACAC),
ICAO, s CRS Code of Conduct
ICAO recognizes that CRSs proude substantial benefits both to the alr transport industry and to air transport users. However, such systems can also be used in abusive ways. These systems tend to be beyond the control of one airline or even one State. The relatively few systems their extensive coverage, and their importance to effective use 鬲 market aCCeSS have made rules a necessity.
To promote desirable pracuces and avoid harmful ones, the
CounciI adopted its 石~ Code of Conduct on the Regulation and Operation of Computer Reservation Systems in 199L The global Code was developed based on transparency, ac ℃ essibility and non-discrimination to ensure that CRSs would operate in a fair manner, wtthout any bias related to the identity of the mrlines whose services appeared therein. A revised CRS Code was adopted in November 19 ％ after a thorough re-
VleW.
The current ICAO CRS Code provides guidance with world-wide applicability in the form general pnnciples concerning the operauon and regulation of computer reservation systems. It has been designed to apply to the distribution of international passenger seruce products through CRSs. Where States have so detemuned, it also applies to` },

        { pdf: 121, print: 113, content:
`Part I English for Internauonal Academic Conference ll 3 computer mformation systems (those which dO not have a reservations capability), The general principle underlying the scope of the Code 这 that CRSs which are used to dist'ibute air service products directly 可 indirectly to air transport users and through which reservations can be made on such services are subjeet to the same rules and obligations.
Key issues
More recent developments such as in on-line direct sales Vla individual airline reservation systems and Web sites (naturally favonng and selling their own product), jointly-operated airline portals, third-party
Web sites (including those run by traditional travel agents and those run by Others), as well aS in computer reservation systems themselves present new questrons and issues for regulators. ls regulation desirable or feasible for the new business practices? ls it still necessary to regulate
CRSs when they are no longer owned and operated by the atrlines? The issue of bias is again loommg large and amending CRS regulation is under study by some national and regr»nal bodies. At the same time, the fundamental issue of access to (and payment for) the relevant communications networks iS prominent amongst concerns of developing countnes. For example, the requirement for paymg transaction fees in hard currency can be an impediment to their panicipauon pven the 6.
nancial constramts faced by many developing countries. One possible solution to help alleviate such difficulty is for the CRS vender to change its pncing policy by makmg arrangements to allow payment, if not all at least partially, in local currency as has been done by some CRS vend-
ICAO, in the context of developing policy and guidance for further liberalization of international air transport, will also 100k at the above issues. ln fact, at this moment, the ICAO Council is considenng a pro-` },

        { pdf: 122, print: 114, content:
`posal to convene another worldwide air transport conference to address issues (including those relating to product distnbution) and policy 叩.
Uons to facilitate the liberalization process.
Another issue I would like to address in connection with the proposed Tourisrn Annex is the need to avoid regulatory overlap. I understand that the ICAO CRS Code is solely related to aviation while the proposed coverage in the draft Tourism Annex is broader. But we are concerned about the impact of the proposal on CRSs, and equally on other aspects of air transport (e. g. ancillary seruces, securlty), Because, rn contrast to tounsm, aviation is very specific, charactenstic and is already subject to a long established and comprehensive regulatory, composed of over 3 (× bilateral air seruce agreements and, increasingly, regional and sub-regional agreements. It is therefore important that air transport be dealt with separately, from the trade perspective, as a sector in its own nght.
We believe that the draft annex on tounsm, from th <, air transport point of view, could lead to problems of interpretation, be potentially complex in its implementation, and overlapping in its coverage, particularly as to those elements of transport that are within the responsibility of ICAO 可 are already dealt with by the GATS Annex on Air Transport Services. It was therefore mappropnate for the draft annex to be seeking to cover these matters. The liberalization process will not necessarily be enhanced by the imposition of additional layers. This was recogmzed by the 1994 World-wide Air Transport Conference which identified regulatory simplification as one of the objectives of future regulation in the air transport sector. (See the attached ICAO Comments on the
Draft Annex on Tourism)` },

        { pdf: 123, print: 115, content:
`Summary
To sum up, we are witnessing a rapidly changmg scene in travel distnbution, driven by technology advances and an increasingly competitive rnarketplace. Regulatory framework dealing with CRSs exists and is being updated at the global, regional and national levels. But we are facing new issues and challenges, particularly for developing countries, which need to be properly addressed through the involvement 鬲 all parties concerned. Careful consideration should be given 怖 1SSues and concerns raised by the proposed Tourism Annex. ICAO will contmue 怖"operate and work closely with the WTO in its work where transport is involved.
(www sikhcouncil. org. au/HardevSinghSherg111. do€)
Wo, and E 攴""10
ICAO = International CiviI Aviation organization 国际民用航空
组织
- 2. bear close relationship with 与一一有密切联系
3, CRS = Computer Reservation System 计算机预讠系统
- 4. code of conduct 行为准则
- 5. TWA = Trans World Airlines 环球航空公司
- 6. Travelocity 速旅公司
- 7、 Priceline 美国一家基于 C2 B 商业模式的旅游服务网站
& the European Ci,引 Aviation Conference (ECAC)欧洲民用航
空委员会
- 9. the Arab CiviI Aviation Comrmssion (ACAC) 阿拉伯民用航空
委员会
10， market access 市场准人，开放市场 be subject to 受支配，易受一一的影响
- 12. airline portal 航空门户` },

        { pdf: 124, print: 116, content:
`协定
13, gwen [ ' givon] prep. in consideration of 考虑到,关系到
- 14. c <mvene [kon' vi: n n. assemble, hold 召开,召集
- 15. ancillary [ n <silori ] adj, assistant 辅助的,附属的
I 6, regulatory regime 调节制度
17， in its right 凭借自己能力，有自己的能力
1 & GATS = General Agreement on Trade and Servwe 服务贸易总
- 19. to be properly addressed 恰当处理
UsefuI Sentence Patterns
- 1. I would like to thank the WTO for inviting ICAO to participate in
this Symposiurn to discuss many important lssues relatmg to tounsm which bears close relationship with air transport. 世贸组织邀请国际民
用航空组织参加本次研讨会，我对此表示感谢。此次会议将讨论有
关旅游的许多重要问题，而旅游与航空运输有着密切联系
- 2. My presentation will cover three parts.. 我的报告分为一个部
分一
- 3. I would like to start off by showing you two charts which demonstrate the close relationship between tounsm and aviation. 首.先,我想
向大家展示两张图表，显示旅游与航空的密切关系。
- 4. Now let me turn to the subjeet of arrline product distribution. 现
在，让我们回到航空产品分配这一主题。
- 5. And so has air carrier production distribution. 航空产品配送也
是如此
- 6. As a powerful marketing t 艹 1, they also had the potential, under
competitive pressure, to be used in abusive ways,作为.一个有力的营
销工具，在竞争压力下，计算机预订系统有可能被滥用
7, Regulations on CRSs have been developed on national, regional and global level. 计算机预订系统的调控已经在国家、区域以及全` },

        { pdf: 125, print: 117, content:
`Part [ English for International Academie Conference 1 ] 7
球范围得到发展。
& ICAO will contmue to cooperate and work closely with the WTO in its work where transport is involved. 在航空运输方面,国际民
用航空组织将继续与世界贸易组织进行密切合作。
- 9. To sum up, we are witnessing a rapidly changmg scene in travel
总之旅行业正在发生迅速的变化“ distribution.
##Exercises
- 1. Directions: FiII in the blanks in English based on the information
gwen in the brackets.
Parmatma Saran.
I just wanted to introduce myself. I am Parmatma Saran. am professor of sociology at Baruch College.
（(D 我是此次研
讨会的主席). Each presenter has about seven to eight minutes
（2 做陈述）．
（接下来是） a couple of minutes of discusslon, only a couple minutes of discussion. Then at the end, depending on how much ume we have, we will have for discus-
SIOn.
(@我将邀请) Mr. Krase from Brooklyn college. We'll start with him.
Jerome Krase
My name is Jerome Krase and I am Murray Koppelman and Emeritus Professor at Brooklyn College CUNY. Thank you for commg.
（0 让我非常简要地介绍一下） these images by reviewing the proposal and abstract I provided for this visual presentation.
lmagining Chinatown: A VisuaI Approach 怖 Ethnic Spectacles.
Ethmc stereotypes and their commercial exploitation hinder the socioeconomic advancement of immigrants and ethnics. Over the past three dec-` },

        { pdf: 126, print: 118, content:
`1 18 国际学术会议英语与跨文化交流 ades I have
（@调查、拍摄了各种各样、世界知名
的) ethnic neighborhoods where one fin 小 ethnic festivals and more mundane spectacles. "Chinatown one of many genres of comrnercial precincts or what I have called elsewhere "Ethmc Theme Parks"
My friend and colleague at the University of Amsterdam, John
Rath, notes that
（0 应采用创新的手法） to help 艹司 scientists, as well as practltioners,蜘 better understand the process by which "expressions of immigrant culture can be transformed intO vehicles for socio-economic development to the advantage of both imnugrants and the city at large'
(O 本文认为) Visual sociological methods and SpatiaI Semioties can be of considerable value
（@在这一点上），
（@本次发言主要针
对) two of the recognized potential problems " for The lmrnigrant
Tourist Industry: the reinforcement of stereotypes about the ' authentic, ethnic Other or the ' authentic, ethnic expenence, and the homogemzation and fossilization of urban landscapes.
(河理论和方法论方面的探讨) will be illustrated and supported by comparable photographs taken in cities where
Chinatown has tounstic currency, Mention of "Chinatown can be found in commercially produced tounst guides such as the Lonely Planet
Guide, FodOk, s, and/or Frommer, s for these citles: London, Boston
New York, Philadelphia, St. Louis, Los Angeles, and San Francis-
CO.
（就理论对比而言）， the emergent "China town in Rome, ltaly will also be visually and conceptually examined.
（@一个最为重要但同时常被人们忽略的方面）
the development of an ethmc tounst industry in cosmopolitan cities are the new uses of public space created by new residential groups. ln a globalized world immigrants are continuously changing many of our already complex urban landscapes.` },

        { pdf: 127, print: 119, content:
`（@文章将集中探讨） ethnic festwals and more mundane spectacles found in Chinatowns which are tWO genres of commercial precincts or what I have called elsewhere "Ethnic Theme
Parks". There are many methods studying the post-modern, post-industrial metropolitan urban scene.
（的这些内容最为核心
的部分是) spatial and sublinunally visual ideas. Explaining how urban spaces are used, contested, and transformed by different social groups
IS a crucial task (@特此建议) a visual approach to the study vernacular landscapes in ethnic neighborhoods could (@促进新老方法的结合来研究) to the pre- and 蜘 the postmodern urban scenes.
（它同时也为一一提供观察
的视角) how visible cultural resources are commodified.
（@一些人把一一看做是一．．．） ethnic enclaves natural" spatial form and function of the city as a biological analogy as did Parks and Burgess.
，，） them
（@另外一些人把一一描述成 commodities, reproductions of power, and circuits of capital a la Manuel Castells, David Harvey, and Henri Lefebvre, The visual Symbolic Capital (a la Pierre Bourdieu) of Chinese neighborhoods cum "Ethnic Theme Parks" has been chosen because they have already been (."".的中心) a broad spectrurn of historical and sociological descnption and analysis. They are 小 so places which ordinary people seem to feel that they "know, and places that easily attract visitors.
（此次的演讲同时
也试图探讨) two of the recognized 'potential problems " noted by
Rath for The lmmigrant Tourist Industry: the reinforcement of stereotypes about the ' authenuc, ethnic other or the ' authentic, ethmc expenence, and the homogenization and fossilization of urban landscapes. I believe that VisuaI S "i010 and Spatial Sermotics are important tools for
（咨探讨这些问题）．` },

        { pdf: 128, print: 120, content:
`(@我认为) Ethmc Theme Parks are actually used pnmarily to benefit people other than the people who live in those places.
l'm going to show you 80 slides very quickly and in seven minutes you are going to get a tour around the world. Some of what I speaking about is ln an article
（写我最近发表的）“Navigating
Ethnic Vernacular Landscapes Then and Now", JournaI of Architecture and Planning Research. 19: 4 (Winter) 2 開 2: 274 一 28L You, re going to see photographs of places called "Chinatown" frorn East to west beginning in Rome, bndon, Boston, Brooklyn, of course Manhattan
Philadelphia, Washington D. C., Houston, of all places, Los Angeles, and San Francisco. ·
Parmatma Saran ·
（我们有几分钟的时间对一一发表意见） the presentation by Dr Krase. Anybody have any observations at this time?
(http: //www. aaari. info/2003workshop4b. html)
- 2. Directions: Translate the following into English.
首先，我感谢主席先生邀请我参加这次论坛。感谢您给我这样
一个机会，让我能够与大家交流思想；更重要的是，通过参会，我
将受益匪浅。
我的发言题目是“' 双重意识，问题与美国黑人的身份建构 "
这一发言基于我对 20 世纪主要美国黑人小说的研究。研究发现，
美国黑人文学作品与他们的社会心理文化之间有着密切的联系。 20
世纪的美国黑人小说反映了美国黑人作家们的“双重意识 " 以及
他们对美国黑人文化身份的思考。他们对身份的探讨呈现出三种倾
向：一是“融人 " 思想，希望被白人主流社会接纳；二是强调其
“黑人性”，激发种族自豪感，增强种族凝聚力，与白人种族主义` },

        { pdf: 129, print: 121, content:
`Part ] English for International Academic Conference ] 21
分庭抗礼；三是建构其美国人的身份，同时强调其黑人性。这些倾
向也是广大美国黑人寻找文化身份时的心理写照。文化身份具有客
观、本质的特性的同时又具有主观、建构的特点。“双重意识”问
题形象生动地再现了美国黑人的文化心理。随着时间的推移、社会
的变迁以及个人经历的变化，美国黑人作家对文化身份的思考也会
随之出现差异或者由差异走向趋同。
- 3. Wnting
>Directions: Study the samples in this Unit or refer to a sample in
the relevant website and wnte a scnpt of presentation for an acadermc conference in your field.
##Supplementary Readings
A presentation script on How to Read English Articles EiTectively?"
How to Read English Articles Effectively?
LUO Hong
I would like to start by thanking Mr. Johnson, the Chair of the
Conference, for invltmg me to be part of this occasion. I thank you for gvmg me th1S opportumty to share Wlth you some of my thoughts on English Reading.
The topic I will discuss is "How to Read English Articles Effective-
As we know, there have been lots of books or articles about English
Reading. Researchers or English teachers have proposed a huge nurnber
Of valuable suggesuons or ideas on how to improve your reading competence in English. Quite many of these suggestions or ideas are of great instmctional and practical significance to English learners. However, it` },

        { pdf: 130, print: 122, content:
`seems that they are either t00 broad, including t00 many approaches, or too narrow, applicable to only some specific situation. Today, I will talk about my idea about English reading, or as I put it just now, how
№ do effective reading.
Generally, when we talk about reading, we have varrous approaches which are determined by the purpose reading. ln other words, I highlight the concept purpose-oriented reading. Different purpose determines different way of readi ng and as a result, the effect will differ from one another. We may read for the improvement of
English language or wnting capability, we may read for fun, for entertainment, we may read for information, or a general sketch of something, and we may read for an important academic research. Here, I will focus on one point, namely, reading for the impro, rement of English language "wn-ting capability.
SO, my presentation will chiefly cover two parts, reading at the level of language and reading at the level of discourse, By "the language level", I mean the understanding of the difficult language points, including the (new) words and expressions, or in Other words, the meamng of the word or expression in the pven context, the understanding of reference relationship, and the understanding of sentence structure. By "the discourse level, it is actually the content-based reading acUvity. When we read an article in this way, we pay special attenhon to the whole text, understanding the main idea the text, with considerations to the g 还 relationship between sentence and sentence, and between paragraph and paragraph. Quite often, for the sake of a better understandmg, figunng out the topic sentence of a paragraph is very important. Sometimes, if there is not an obvious topic sentenee, we have to sum up a statement to represent the topic sentence. once the idea of each paragraph is grasped, we need to understand the whole text in a` },

        { pdf: 131, print: 123, content:
`comprehensive way. ln Other words, to make sure we have understood the text, we need to wnte an outline or a summary, of the text. As is known, a summary or an outline means, first of all, to check how well we have understood the ongmal text.
ln this presentation, I am going to use the examples from my teaching scripts, and particularly from two articles,
"Ships in the
Desert" and "Britannia Rues the Waves", to illustrate my points of reading at both the language and discourse levels. Further, I will concentrate on outhmng when dealing with reading at the discourse level.
First let, s see Reading at the Language LeveI
Three points are highlighted in this secuon. 'lhe first is the understanding of word rneaning in the context. A word is only meamngful when it IS considered in a gven context. The meaning we know, qtnte often refers to the denotatwe meaning, or simply speaking, the meaning, the definition from the dictionary. LlteraI Interpretation of the words is a trap in readmg acuvities. When you come across a new word dO not take it for granted immediately in case it has a quite different meaning. You need to consider it in the pven context. Let's ] 00k at the following examples to see the different points.
1) Understanding of Word Meaning in the Context
, 4 called natural, m / 困 released.from land-
力仫, from coal mines and 刁"dd 讵 5,尹 om 柘 or 巧紀.
mites swarm ro 方 the freshly cut res 南, from '
b "' biomass and 尹 om a va 庇 0 硕 0 human "五"
("Ships in the Deselt")
ln this sentence, the word biomass" does not mean "the total mass of livmg matter in a pven unit area which is abstract and even il-` },

        { pdf: 132, print: 124, content:
`logical here. It actually means "plant materials and animal waste used as a source of fuel" ("'s /V 而 New Co/在@禳e 讫五 onary),
4fter "0 "钐, my co ' ' 屮 at 五 0 and 7 ／ ra "左泓 by snowmobiles a 丿, miles 知辰 r "邝方在疒 en "01 然 point where the 1m5 thinner—only three and "/ ia 彷 i 以一.
and a nuclear submarine hovered the 衩禳"／("Ships in the Desert")
Hover" has many meamngs. The most popular one is "hang in the air; fly or be suspended above"(<有道>). It also means move to and fro" and "wait ln this sentence, it means that the submarine walted there.
/ worried 在旆／@"om 丷标"0 9 until
榄 r 町, by 柘"my 脚"0 ' price oj,
。 m round 方““the “ofa 流（《大学英
语》精读一 6，修订本）
ln the sentence, [ 司坦 r Day" will immediately gwe us the impression the International IAbor Day of May I. However, in th1S context, it refers to "a day set aside for special recognition workmg 0 国 e: the 石吓 t Monday in Septernber observed/celebrated in the U. and Canada as a legal holiday" (彬标 's N New Collegiate l)tcttonary)
2) Understanding of Reference Relationship
The mention of reference immed iately calls on the idea of pronoun,
"a function word that is used in place of a noun or noun phrase" (<有
道>). Moreover, relative pronoun and relative adverb a 卜 0 fall into this category considermg reference relationship. Words such as it, this, that, which, where and the like" are always used as refernng expres-` },

        { pdf: 133, print: 125, content:
`Part I English for International Acadermc Conference 125 sions. ln reading activlty, it is necessary to figure out the exact meaning of these refemng expressions.
Now let, s ] 00k at the selection.
After "方"rty "钐 my companions and /
"e 翟 snowmobiles ""miles r "邝方忉"rendezvous i where the was 沅"r 一一 0 "l) ' three and "方 a et
彷一 ar "nuclear submarine hovered the water 柄脚
4 "crashed ro ' 五 the e, 0 0 ""' / 皿巧"Lg "5 and resubmerged / 从脚""who were / 蜘 measure more accurately the i "" the ／ c 叩,
"方五 many 腌 / 吧彷 im as result 矽 0 / warming. / had 丿 u 0 五 ate 泓 an agreement between tce 讵五丷 5 and the
在 S. Navy secure the release ／叩 5 "回 datafrom submarine sonar 忉"烁, could help them learn 1 涵 at
丞方叩"i / 忉 the "方 ‰ r cap.
But here., C02 / ".
els are ns 尹巧 t ra. 尹湿 6, and ultimately temperature "沼 nse with them—indeed,.旆／脚 m 这"0 尹五 mp ""然 much more rapidly 而 the polar regtons "沅 the rest the world. 小 ' ／"air warn 吓, the "will
沅; and since the / "0 屮 p such "crucial role '
"0 丛 e r 5 紀 m, the CO 碼四 ue ' 地然在方沅 cap could be d 伍丷 ro,
CO' 巧"心 such 丷 e m05 not a 伊"' 平"u 石"exerc 巳 5 months after / returned 尹 om the N Po / ', m sctentusts reported dramatic a' "the 伊 e "ice disb "the, 4rct, and. 5 "0 ' team reported "controversial claim ("方 i va 庇 0. data nou•' 5 型)
over ', the north polar cap 方 thinned by 2 percent 而丿对 the` },

        { pdf: 134, print: 126, content:
`last ca. Moreotær, i "在 b 五訪 ed 5 "" ",在 in many 岳 areas "司 ' of the A 记 Circle, the "
5no 脚 me 在 now comes "厂五""00,"r, and 庇法 tundra
柄 w the temperature 可, e "方"' 示 i.("Ships in the Desert")
ln this selection, words like it, where, who what, and which" are not difficult to understand so that they are not explained in detail here. However, they are underlined to call our attenuon, suggesting that we need always to make sure of the reference. Here, the point lies with the sentence "Considenng such scenanos 仆 not a purely speculative" · nOW introduce another concept of reference, the reference of noun, which means the replacement of one noun for the other. Quite Often, nouns in such a situauon are abstract, making it more difficult to discern the exact meamng. ln the above-mentioned sen-
,, VO seem to scenar10 "exerclse is hardly helpful to go 10 the dictionary immediately. However, by the context, we can find that "exercise" mean kind of activity, and with the copula we know that it refers to ' considering
Scenano", besides the popular sense of an outline or synopsis of a play (or, by extension, Of a literary work)" means a setting for a work of art or literature" or a postulated sequence possible events". If we put these factors together, we can figure out that the sentence means "TO talk about the postulated sequence of the possible events is not doing a guesswork., Specifically, scenarios allude to global warming and the disastrous consequences of a thinning cap' · What, s more, with the statements behind, we can infer that the author will say I have scientific evidence." This analysis indicates that, one single word someUmes may render difficult the whole passage.` },

        { pdf: 135, print: 127, content:
`Part [ English for International Acadermc Conference [ 27 ln English texts, there are often some nouns that seem to be abstract or vague in meaning at the first glance. At this time, it must be careful 10 put the nouns intO the context for the ac ℃ urate meaning. l-K)Ok at more examples, please.
/ agree some "咀 w 让五 my n 在 0 ' E "五 reader.
mer 右 r00 ' 方加疒困 ns are perhaps prone e 脚 their own a 石 0 ／ scene 0 narrowly, rmstaking prominence,和 r untqueness. 丆方 0 ' 南 er- / 防 ra, e e own literature, or cer-
6 ' runor "". And Americans i om aggresphrase literature an equally unfortunate
5 君 OVer— imitative 丆""巳召 t ‰ ", the E ' 五訪"巧 e / "5 are somewhat insular 而 r literary 叩 sals. Moreover,力 e / 小 where 0 ' are not pre-enunent—e., / 甩五 ' ' g and mu
- 0. 0 alternate "" as 叻"五"/> ro "and
copying 仍 e of the C."石". How nuzny English 四前沅
0 ' 砝 01 方 0 ' were 胛 P "示; how many 五 m 然 have read 沅"五 c 标 0 ' really represent an "标 h
而” @“矶 0998 年英语专业 8 级测试英译汉〕 ln the second and third sentences of this paragraph, the words national scene, and figures seem to be difficult for their meanings can not be discerned easily. Considering the context national scene alludes to "American literature, and "figures", to wnters,
Now, here, we may either say that these nouns have referred to somethmg or they mean different along with the variation of context.
3) Understanding of Sentence Structure
When a sentence is long or structurally complex, it is necessary to analyze the sentence structure, to make sure the subject, the predicate,` },

        { pdf: 136, print: 128, content:
`the object and the modifiers. Understanding of the relationship between each part of the sentence will help with a clear understanding of the total sentence. ThiS is a 卜 0 conducive to learning to write long or stmcturally complex sentence.
Again, let, s 1 佣 k at the above paragraph of TEMA-8.
To understand the paragraph, we need, first of all,蜘 see the structure of the sentences. ln the first sentence, we see that ' the Arnencan literary histonans are... prone to VleW.
mistaking prommence for uniqueness ", Structurally it is not complex, but it is important 蜘 know the function 0 「 the -ing phrase expressmg coneurrence and the collocation of mistaking.. for.
It is impoflant to see clearly the structure like "Americans do swing from.
to.
in the fourth sentence, and they tOO alternate between 一 and copyin the sixth sentence.
By the way, it IS necessary to mention "word meaning agam.
Here, if we could not make sure the exact meamngs of "alternate" and
' look" the whole sentence would be vague. Actually, alternate, here means go back and forth; swing back and forth between two states or conditions and "look" is a copula, meaning have a certam outward or facial expression
Now let, s see more examples about the sentence structure.
' 凹<毋讫讵 any 柄 '" listen ' end a wire the rustlings 可 a 无;視 e 01 方 even examine the great coil 刀 N 沅 / 庇方 coded the 淝 0 ' "h ／.
These ""0 ""紀握 d "叩, But beyond 五"' great
以""e 五 m e 刀 r "m", dreamed the 五 and the galaxies. Before "脚,""标地"e e 五,卜, im ' 俨
石 0 "grew 沅 the 南流 Man, ultimate wonder` },

        { pdf: 137, print: 129, content:
`a creatweness.
(http: //www. tumblr. com/tagged/brb-listeni ng-to-gala xies—rustle)
The sentence stmcture is generally seen as follows.
DNA in which.
to listen.
It is not.
№ examlne.
IS an inverted sentence, with the subject behind the
But beyond.
verb "lies", Further, the subject "Dreamer" has an attributive clause "who-
参考译文：再也不能满足于在金属线的一端倾听众星系的躁
动，甚至观察研究记有生命基因密码的重要的 DNA 螺旋体也不足
以那么让人欣慰。这一切都是我们感知的延伸。而在我们感知领域
之外，却是终极梦幻者梦幻所及的广袤的未知世界，那梦幻者曾经
幻想过我们现在的光、我们现在的众星系。在无知的一片黑暗中，
先有想象力的萌生，然后才会付诸行动或者创造物质。人也在参与
和分享这种终极想象和创造。
, 4 "er example:
7,辰<"方 a "made 加 explain 叩 phenom-
"在辱 m ' 在碼 the / 0 尹辰巛 medium 在些运 g the same
0 ca / character "an elastic "／湿方 /, the ' 沅 ·
,"ce, the ' zn 庇 ar ' "a concrete example "medium h 五 can 忉 nsm tra 丷 ℃ rse 而 bra 五 0 s, and a later stage the @疖亩e conclusion there "lummiferous medium 在些 g the physical ' ""r assumed the 尹辰 5 氐 (http: //www. oktranslation. com/Cms/Alticle. aspx? Articlel D = 21832)
This is actually a sentence, 1 佣 g and complex. The structure goes generally like "The efforts (that.
.) led to (the understanding of..,) and to (the definite conclusion that. 一)
Besides, We` },

        { pdf: 138, print: 130, content:
`to understand the collocations such as "by means of","the same · and "at a later stage". Moreover, we in the first instance must realize the function of the tWO -ing phrases ("having.
") as the attribute of both the first and the third "medium and see clearly the role of the which-clause as the attnbute of the second "medium". Finally, we need to know the that-clause as the attribute of the word conclusion, in which the past participle phrase ( functions as the attribute of the word "character,. once the sentence structure is grasped, the meaning can be figured out.
参考译文：为了解释光学现象，人们曾试图假定存在一种介
质，这种介质与弹性固体一样，具有相同的物理属性。结果，人们
先是了解到了一种能传输横向振动的介质的具体实例。而后来，人
们又得出这样一个明确的结论：并不存什么会发光而且又具有上述
假定所言的物理性质的介质。
Second, let, s come to reading at the level of discourse ln the pre, 'ious part of "reading at the level of language, we settle the problems of understanding the text sentence bY' sentence. That's far from enough. To see the whole forest rather than merely the leaves, we need to go deeper mto the text and understand it as a whole. The best way to check how well we have understood the whole text is 10 summarize the main idea or to outline the text. Quite Often, as I find, ou 卜 lining is more helpful and more effective. When organinng an outline, you have to wnte topic statement in your words and to reorganize the
Structure SO that the topic statements are always logwally connected.
Your outline is supposed to help you immediately understand clearly the main idea of the whole text. outlining is not just an exercise of writing practice. lt 这 of practical sigmficance consldenng your research work
The ability to write a good outline of any text in your literature review will pave a good way for your thesis writing and research work.` },

        { pdf: 139, print: 131, content:
`Part English for International Academic Conference 1 31 l'm going to gwe you two articles for outlining exercise. The texts are long and somewhat difficult. Read the texts carefully as you are suggested in this lecture and then wnte an outline for each. Once you finish your outline, you may refer to mine in the Appendix. Please find the texts as suggested below and study my verslons of outline after you have written yours.
Finally, let me sum up the mam ideas of my lecture. I advocate the idea of purpose-oriented reading. Here, suppose our purpose is to improve our English competence and performance, and then, reading effectively means you are sure to have understood the text at bOth the levels of language points and discourse. I hope you will be benefited from such pracuces. Thank you!
Appendix
Directions. Please go to the following sources to find the texts.
- 1. Gore， Albert. “Ships in the Desert， · Advanced 砀五訪． Revised Edition， Book 1，张汉熙主编，北京：外语教学与研究出版
社, ] 995
- 2. Neil, Andrew.
标方. Revised Edition,
究出版社， 1995。
Or：
Bntannia Rues the Waves",」 a' ", Eng-
Book 1，张汉熙主编，北京：外语教学与研
I. http: //www. yingyudaxue. com/books/advanced-english/course-
1/unit-3
- 2. http: //www. yingyudaxue. com/books/advanced-english/unit-13
Read the texts carefully and try to wnte an outline 「 br each. The sample outlines are prouded for your reference.` },

        { pdf: 140, print: 132, content:
`- 1. A Detailed Outline of "Ships in the Desert
Ships in the Desert
心 e Gore
Para. ]: Introduction
Description of the sight ("Ships in the desert) as an introduction
№ his research findings of the global enuronment cnsis.
(The Antarctic Continent
Para. 2: His research in the southernmost end
Ozone depletion (midnight sun ermssions causing world pollutIOn
Para. 3: Industrial Revolution, the cause of accelerated global po 仁 lution
Rising levels of CO from coal, and later oil burning, catching more heat in the atmosphere, glc> bal warming;
South Pole area showmg the increasing change of the global atmosphere
Para. 4:
al warming;
Para. 5:
thinned 2 ％ (The Arctic Ocean near the North Pole, the thinning ice cap because of globhere also rapid rising of C02 levels
Scientists proved his idea with evidence—noHh pole in Just the last decade; earlier sprmg snowmelt m many land area north the Arctic Circle and steadily nsing temperature deep in the tundra below (At the equator in Brazil
Para. 6: the burning of the Amazon ram forest;
ent species of bird extinction of differ-` },

        { pdf: 141, print: 133, content:
`(EnvironmentaI destruction that can seen almost anywhere
Para. 7: in high northern latitudes, noctilucent cloud because of a huge buildup of methane gas in the atmosphere
Para. 8: So far, the author has produced evidence or images of enuronmental destruction from his research tnps across the world. He then poses a question: the violent collision between human civllization and the earth?
Para. 9: More images of human destruction of their enuronment.
· the new frequency of days
· our skin burned more quickly by the sun
0 waste dumpmg
People, s indifference to the environmental destruction by themselves
Para. 10: (The author, s suggestion)
Better to reorganize our thoughts and feelings so as to respond properly.
- 14. Classification 0 「 the environmental conflicts intO
three kinds:
1) LocaI skirmishes—instances of water pollution, air pollution, and illegal waste dumping;
2) RegionaI battles—acid ram, the contamination of underground aquifers, and large oil spills;
3) Strategic conflicts (to be understood in a global context for the operation of global enuronment is affected and the survival of civilization, endangered)
0 the accelerated increase of chlorine in the atmosphere disrupting the earth, s ability to regulate the amount of ultraviolet radiation from the Sun` },

        { pdf: 142, print: 134, content:
`· GlobaI warming
Increased concentration of C02 and other heat-absorbing molecules disrupting the earth, s ability to regulate the amount of heat from the sun retained in the atmosphere.
This increased heat threatening the glob climate equilibnum and consequently the location and pattern of human soeieties.
The cause of the enuronmental problem
Para. 巧一 20: ln answering to the question posed in para. 8, the author affirms that the advancement of human civilization has caused the current envlronmental problem.
Para. 15 一 16: Human civilization rmpactmg on the environment;
cntlcizing people's casual attitude toward their actlvities;
Para. 17 一 20: Two key faetors having led to the environmental problem:
1) population explosion;
2) a sudden acce eration of the scientific and technological revoluuon.
The author, s suggestions
Para. 21 一 22:
To understand the challenge we now face—the new relationship between human civilization and the earth, s natural balance:
1) to realize that human power is able to harm and devastate the earth;
2) to realize our new role as a co-architect of nature, as part of the nature (i. e. the harmonious relationship between man and nature),
3) to carefully assess this relationship and also the international relationships` },

        { pdf: 143, print: 135, content:
`Part I English for Intemational Acadenuc Conference 135
Para. 23 一 25: nuclear weapon as a negative example showing the poor international relationships, implying its destructive power to the whole world
Para. 26: Despite the disagreement of vanous people on the solution, the only approach is to reconstruct favorably the relationship between civilization and earth
- 2. A Detailed Outline of "Britannia Rues the, Vaves"
Britannia Rues the Waves
The Current Situation
Bntain, s merchant navy, almost forgotten (important position)
Shipping, the essential lifeline of the country, success; foreign exchange earmng
Problems facing the British neet
Andrew Neil a significant Bntish
· Today, this vital Bntish industry is more in penl than before.
on almost all the rnaJor sea routes of the world, the British fleet risks being elbowed out by stiff foreign competition.
5 ment)
· Today, the Bntish fleet nq, longer dominates the high seas.
gam the title of the text)
· ln the 1970s,
OiI prices became quadrupled (due to the Arablsraeli War), and shipping industry had entered its long years of
Cr1SIS.
· Consequently, though the Bntish oil-tanker fleets were not seriously affected (not moth-ball, laid aside), its bulk-carrierfleet` },

        { pdf: 144, print: 136, content:
`(散货船)(carrying dry cargoes like sugar, coal and iron ores), together with its shipping industry, began to feel the pinch.
There is a limit to what any British government can dO on itS 0, Vn (Whom could we count on 「 br help?)
0 The EEC is so divided. (French-Russian ties, block)
0 Different mimstries of Britain may not agree with each other all the time.
Favorable conditions for / of the British neets
Shipper owners mvested big.
0 once benefitted from govemment grants and tax concessrons;
sophisticated ships; the up-market (e. g. P & 0; containers):
expensive; good domestic transportahon;
· the "Conference union, price fixing, a cartel; parcel servwes; flexible, roorn for alternauves: liner sh ips carrying all sorts of different cargoes)
advantage: easier to weather the bad times;
disadvantage: harder to make a big killing in good times
. 111e Bntish government attempts to force the EEC intO action
The Threats
I. from the Russians and the Eastern Bloc Countries carving their way into the international shipping trade by severely undercutting Western shipping companies;
· Russia has expanded its cargo-liner (定期货轮) fleet far faster than the growth in either its own trade or world trade would justify. It has the largest liner fleet (定期船队). lts pohcy of ex-` },

        { pdf: 145, print: 137, content:
`Part 1 English for International Acadermc Conference 137 cessively low freight rates,
· Russia now cames 95 pereent its seaborne trade with the EEC in its own ships. More irnportant, it is biting deeply into the major cross-trading (外国口岸间货运) routes 鬲 the world.
The name of the garne, for Russian ships, is hard currency.
(import)
(Strategically) The Soviet mercantile marme obviously acts as a support to the Soviet na,,> But the Soviet mercantile fleet has developed the kinds of ships which would certainly expand the
Soviet reach well beyond i 卜 penrneters.
a great advance the Soviet ability to project their power at some distance from their own frontiers. (a Sov iet hydrographic policy to map the oceans of the world)
Eastern bloc countnes—Russia, with Poland and East Gennany— have already captured 川％鬲 the cargo traffic on the busy sea-lanes of the North Atlantic..
.(the lron Curtam countnes), an even greater more orga— nized threat
- 2. from the merchant fleets 鬲 the developing countnes
· bent on taking over the lion, s share of the trade.
which Britain has a big stake
—routes in are out to carry a bigger share of their trade in their own ships regard a merchant navy as slh. of a status symbol (so that they have expanded it on a larger scale)
0 (beside commercial means) Political strategy: impose a set of rules which guarantee them a major sliee 司, the shipping trade, which has found 0 伍 c ial expression the UNCTAD. A possible severe blow to Bntain's liner trade,` },

        { pdf: 146, print: 138, content:
`Consequence ln the end, British companies could be driven out 0 「 shipping altogether.
##References
I. www. sikhcouncil. org. au/ HardevSinghShergiII. doc
- 2. http: //www. aaari. info/2003workshop4b. html
3 ． 0 8 年英语专业 8 级测试英译汉〗 http：
topic/show/380318. page
4, http: //www. turnblr. com/tagged/brb-listemng-to-galaxies-rustle
5, http://www. oktranslation. corn/Crns/Anicle aspx? ArticleID = 21832
- 6. Gore, Albelt "Ships in the Desert".Adtunced E 标五 Revised
Edltion， Book 1，张汉熙主编，北京：外语教学与研究出版社， 1 剪 5
- 7. Neil, Andrew. "Britannia Rues the Waves".Advanced.
五壶 Revised Edition， Book 1，张汉熙主编，北京：外语教学与研究
出版社， 1995。
& Mish, Frederic C. W e n New C. g "0, Mem am-Webster Inc., Publishers Springfield, Massachusetts, USA, 1983.
9 ．李荫华主编：《大学英语》精读还，修订本，上海：上海外
语教育出版社， 1999。
- 10.有道词典 http: //dict. youdao. com/` }
      ]
    },

    {
      id: "p1-u12",
      part: "Part I",
      unit: "Unit 12",
      title_en: "Question and Answer (Q&A) Session",
      title_cn: "问答环节",
      print_start: 139,
      pages: [
        { pdf: 147, print: 139, content:
`#Unit 12　Question and Answer (Q&A) Session
##Sample Study
>Directions: Read the following sample and learn the useful expressions.
Town Hall Meeting at the AHRQ 2007 AnnuaI Meeting
September 27, 2007
Carolyn Clancy: Well, thanks to a terrific panel, and now we, re going to move to the palt where you get to ask questions. ] should have told all of you, the panel knows this, that we, re actually taping these sessions for the people who wanted to register for this conference and we had to tell them,"Not this year, but stay tuned for our next AHRQ-apalooza., we have microphones throughout the room, and we will be asking you to identify yourselves. SO, any of the panelists are open to questions.
I see a couple of people standing up, l'm going to turn to the microphone here. If you could just identify yourself.
Barbara Fahmy: Hello, l'm Barbara Fahmy. l'm with the Division of Worker, s Compensation in Colorado. And, I have to tiptoe here a little bit. I have a suggestion for the speaker from the Marriott.
sorry I didn, t get your name. l'm sorry? [ Dr. Clancy: JilI Berger. 〕
My suggestion is that when you hire on new employees, try to think of each employee as a potential patient and at employee onentauons, when people are very enthusiastic about their jobs and very alert and everything like that, bring forth some simple preventive measures for their own care, SO they can take ownership intO their own care. For exam-` },

        { pdf: 148, print: 140, content:
`ple, things like the dangers of overdosing on over-the-counter medication. When you go to the doctor or nurse, it's Okay to have a list of quesuons and have those questions answered. Hands-on traming 訂 proper lifting and demonstrating the ability to lift properly. That, s probably big for those who work at hotels. And not just where to go if you get hurt on the job, but what should you do? What does an incident report
100k like? What kinds of things should I be reporting? What time did this inJury occur, etc.? So, it might be a good way to attack it at the begmning before it occurs. SO, that, s my suggestlon.
Jill Berger Great suggestion, thanks.
Carolyn Clancy: Here?
Perry Cohen• Thank you. My name is Perry Cohen and rm with the Parkinson Pipeline Project, which is a patient-advocacy organization, grassroots. I, m also a parueipant on the workmg group for evidence-based health care, which is a coalition of 45 patient organizations that are interested in getting involved Wlth health seruces research and some of the things you're talking about. I thank Carolyn for all her suppo for the patient perspective and, of course, patients are cJitical for de, reloping the clinical research as partlcipants in research. But we're more than rats, and so we want to be at the table when the policies and decisions are made also. My question has to do with the use of information technology for self-help and patient empowerment, and one of the speakers was from Medicaid, and he mentioned the challenging population. I want to ask him if he felt that this population would be ready or how he might like to address the issue of information technology support for this population considering they rmght not have computers or Internet access or some things that those of us who have become empowered through the Internet enjoy. Thank you.` },

        { pdf: 149, print: 141, content:
`Part I English for International.Acadermc Conference 141
Carolyn Clancy: Tom?
Tom Kline: Well, talking about information technology as it applies to rnernbers is certamly a difficult situation and challenging in the
Medicald population. When we first began our first disease management program, which was asthma, we identified approximately 2500 members, which we thought were our greatest risk, were having hospitalization or E. D. visits, and of that 25 (unfortunately, we were only able to reach about 3 佣 because availability of telephones for our POPUlation, not necessarily Internet. We tried wnting them and we wrote
10 (用 letters, and we got 18 responses, SO cornmumcat10n, s a very, very difficult, challengmg situation for us. The Intemet—we have developed at the Medicaid office, a Medicaid electromc record system where we've made information available to providers. Currently, it, s not available to members, but that would be one of the next steps that we, d like to pursue•
Did you actually menuon something about behavioral health issues?
Perry Cohen: Did I?
Tom Kline, Well, our behavioral health provider is a carve-out from the Medicald program, and we have access to encounter informauon, but not necessanly any kind of behavioral health utilization information. ln our particular population of membership, I don, t see informauon technology from the patient or member's perspective being an impottant issue at this tmme.
Perry Cohen: Okay—thanks.
Carolyn Clancy: Thank you. One more question?
Maureen Street• Hi. l'm Maureen Street, and I, m a medical director in Community Health Center in Michigan, and I have a question for Dr. Kline. Can you comment on the impact that the Medlcaid
HMOs, in particular the for-profit Medicaid HMOs, have on your abili-` },

        { pdf: 150, print: 142, content:
`ty to dO case management?
Tom Kline: Sure. HMOs in the State of lowa does not have a large presence. A few years ago, we had three managed care organizations that provided seruces to the Medicaid population, and it was a total of about maybe 巧o( 用 members. Currently, we have one with about
5000 members. Again, it, s a si tuation of collaboration. I know the medical director for the Medicald managed care very well, and when we've instituted our disease management program, we included many of the elements that they had in their disease management program, so it would not be different, and the Medicaid population would be getting consistent care. Unfortunately or fortunately, except for our pnmary care case management program, managed care doesn, t have a big issue in
Maureen Street: Thank you
Carolyn Clancy: Well, l'm sure that all of you share my sense of inspiration and hoping to nm and to catch up with some of the e 腩小 that we, ve heard here. So I hope you, ll join me in thanking the panel for a terrific conference.
(http: //www. ahrq. gov/news/trqa092707. htm)
Wo ' 小疰 n Expressions
- 1. AHRQ: Agency for Healthcare Research and Quality 卫生保健
研究和质量局
- 2. -a-palooza:(Suffix)
1) Forming the name of a promotional event such as a presentauon;
2) Emphasizing or exaggerating the element of a situation.
- 3. tiptoe 0 tiptau ] vi. the position of being balanced on the balls
of the feet and toes with the heels raised 踮起脚走;蹑手蹑脚地走` },

        { pdf: 151, print: 143, content:
`Part 1 English for Intemational Academic Conference 143
- 4. coalition 匕 kou 可 ] n. the act of coalescing; UNION; a
temporary alliance of distinct parties, persons, or states for joint acUon
结合，联合；联盟
- 5. HMO: Health Maintenance Organization 维护健康组织;保健
组织
6, lift n. the act of giving temporary assistance 帮助
UsefuI Sentence Pafferns
- 1. We, re going to move to the part where you get to ask questions.
现在轮到你们来提问了
- 2. Did you actually mention somethmg about behavioral health issues?你确实提到一些有关行为健康的问题吗?
3 ． Thank you. One more quesuon？谢谢还可以再问一个问题
- 4. I have a question for Dr. Kline.
pact that. 一 have on.
我想请 Dr. Kline 回答我的问题。
题。）您能谈谈．一．．对．一．．的影响吗？
##Exercises
Can you comment on the im-
（我想问 Dr. Kline 一个问
- 1. Directions: FiII in the blanks in English based on the information
gwen in the brackets.
WAREHOUSING
Question and Answer Session
MR. JENKINS: Thank you, Richard. Now
（0) 我想我们有几分钟时间给大家提问）．
来)? Okay, we have one.
（@谁先
Q：
(@我有一个问题) generally directed at the warehousing industry. As you people probably know, OSHA is cormng` },

        { pdf: 152, print: 144, content:
`up Wlth potential standards in ergonomcs. Prior to that in the past in some draft regulations has been the use of the NIOSH lifting equation as part of the OSHA standards.
（在我看来）， it has very bad affect on the warehousing industry "anybody that is stacking cases "palletizing or depalettizmg cases or bags or anything like this
（@你们怎么看待这一问题，你们跟我的看法相同吗）？
MR. MURPHY: Well,
（0 我先从一般意义上
来回答这个问题). First, we think a common sense praetical approach to all of these programs is what is appropnate, and, in fact, just before this session started I was having a conversatlon Wlth Dr. Waters from
NIOSH about our becoming involved in doing further examination of warehouse positions to take a rnore prachcal approach to measuring the risks. I expect that we will do that over the next several months.
Q：
（O 你对此有什么看法吗）？
(0 我想说) usually in our end of the business It is when the compliance offieer is as to what we get cited for.
He can see somebody buying one bag of goods at 80 pounds and say beautiful. He can see buying four pounds, but it would cause us some major problems, that particular thing, if it were definitely law enforced.
It would cause us some problems.
MR. MURPHY: That was one of the reasons why I showed that slide about the container.
（@我想，你问的有些问题
得从经济的角度来看) that we are all into here, and it is not necessarily just domestic but it is a world economy. What we dO here will have npple effects,
（@赞成或反对与否）， either way, and what will it dO to business in the intenm.
（首先，我不大明白
TO answer your questlons—
你的问题）．
（的你的问题是我们是否认为） some` },

        { pdf: 153, print: 145, content:
`Part English for International Acadenuc Conference 145 stnct interpretation of the current formulas and other guidelines would have an impact on the industry.
（@回答绝对是肯定
的). That is why we currently are so acti, rely involved in working with
OSHA and others in trying to develop practical hands on guidelines for the industry.
MR. JENKINS:
（的下一个问题）， (西我叫) Tom Doyle. I am an ergonomics consultant with the State of Ohio, and
（@我的专长之
一) is in occupauonal vibration and also dealing with whole body vibratlon. I have rneasured vibration ln a number of vehicles, including forklifts, and I was interested in Mr. Murphy, s cornments about some of the ergononuc seats. As I have recommended these ergonomtc seats for warehouses, which may be similar to yours, and this is the first time I have heard objections to these types of seats. I find it very interesting.
I would like to kind of pursue that a little further, and (@我也想问) Mr. Forte there from J, C. Penney
（@你们在．一．．方面是否已经积累了经验） changing out these seats on forklifts.
MR MURPHY: I made those comments on the old seats and I showed the picture on purpose 卜,(ause it is not that we haven t changed them, it is just that there are a few ople who prefer old seat style.
MR. JENKINS:
（@最后一个问题）．
Q: My name is Ed Frederiek. I am an industnal hygiemst with
Michigan OSHA, and I wanted 蜘
（如澄清一种误解）
that I may have had regarding something Chuck said. You increase the size of your isles SO that workers would move their feet and turn their whole body instead of twisting?
MR. SWANDERSKI: №, that was one of the options that we had.` },

        { pdf: 154, print: 146, content:
`From the design standpoint, that is the way it is. We did not do that.
MR. JENKINS: With that,
（我宣布我们的问
答到此结束，感谢一．．．） the speakers， Chuck Swanderski of Lowes
Company, Dave Forte of J. C. Penney, and Richard Murphy, Jr. of
Murphy Warehouse.
(http: //www. cdc. gov/mosh/topics/ergonomics/EWconf97/ec4 whsqa. html)
- 2. Directions: Translate the following mto English.
(D 我们现在开始问答。有问题的请举手。
2 我们的确有几个问题要问
囹第一个问题来自帕特里克 · 莱特。
@请继续提问。
0 还有问题吗？
@谢谢您提的问题。
0 一一一您是哪个单位的？
我在西弗吉尼亚约翰逊公司工作。
不过我想请问，有没有人曾经做过研究来说明．一“？
一一一谢谢。我想请史密斯博士来回答这个问题，如果他愿意
的话。
@我想向你推荐一些针对这一话题所做过的研究以及所出版的
成果。
@我们请哈利博士来回答这一问题。
@我从两个方面来回答你的问题。
@我十分赞赏第二位发言人就社会福利制度方面所作的评论
的我们今天的问答就到此结束。` },

        { pdf: 155, print: 147, content:
`Par1 1 English for International Academic Conference 147
- 3. Wnting
>Directions: Study the samples in this Unit or refer to a sample m
the relevant website and wnte a scnpt of question and answer session for an academic conference in your field,
##References
- 1. http: //www. ahrq gov/news/trqa092707. htm
- 2. http: //www. cdc. gov/niosh/topics/ergonomics/EWconf97/ec4
whsqa. html
- 3. http: //dict. baidu. com/
4, Hornby, A, & 0 无知泓 ba "e learner's E ' 标 C ""Dic-
五"",. Oxford: oxford Umversity Press, 2 (9
- 5. M, rri m.标 Collegiate Dtct 烈 ary. Merriam-Webster, 2 仪
(CD-ROM)
6, http: //en. wiktionary. org/mki/-a-palooza
7,有道词典 http: //dict. youdao. com/
& http: //www. hudong. com/wiki/lift? hf= youdaocitiao&pf daociuao` }
      ]
    },

    {
      id: "p1-u13",
      part: "Part I",
      unit: "Unit 13",
      title_en: "Closing Speech",
      title_cn: "闭幕词",
      print_start: 148,
      pages: [
        { pdf: 156, print: 148, content:
`#Unit 13　Closing Speech
##Sample Study
>Directions: Read the following samples and learn the useful expressions.
##Sample 1
Closing speech by the Chairperson of the, vor 尾 Conference of
Ministers Responsible for Youth
His Excellency the Deputy Minister to the Prime Minister
Jo Socrates
12 / 08 / 1998
Distinguished SpeciaI Representati, re of His Excelleney the Secretary-
General the United Nations
Distinguished Secretary-GeneraI of the Conference
Distinguished Ministers
Distinguished Ambassadors l)istinguished Delegates
Ladies and Gentlemen
Five days after the opening of this Conference, over which I had the honour and pleasure of presiding, we are about to close a meeti ng which I hope has fully lived up to the expectations of us all. We saw in this occasion an unparalleled opportunity 蜘 strengthen the ties between young people and between those who, in their countnes, have the power of decision over youth policies. We now have the feeling that our expectations were not ln vam.
We have had the opportunity to share expenences, to listen to com-` },

        { pdf: 157, print: 149, content:
`Part I Engl ish for International Academic Conference 149 mitted voices, to feel that the problems that concern us are basically the sarne, to be moved by dramatrc reports of countnes where young people's daily lives are plagued with uncertainty.
But, above all, we have had the opportumty to observe a clear political desire that the young people of the 21st centuty should, themselves, players in a process that concerns them deeply and able to promote and integrate their legitimate hopes and ideals in the fields we have talked of much here, like the envimnment, education, employment, health, the fight against substance abuse, human nghts, etc.
The Final Declaration we have just appro, red—I am pleased to say, by consensus—is a decisive step in the pursuance of the United Nations
World Programme of Action for Youth to the year 2 (0 and beyond
But we all know that th1S is not enough
As someone once said, if the words to save the world have all been said, the important thing now is to save it.
It is necessary for all of us—States, agencnes, youth orgamsations—to work together to put intO pracuce the wealth of commitments that we have just conceived.
This is when our work begins. If all the ideas have been set out, if our strategy has now been clanfied and appro, red, the important thing now is to implement it.
I would ask you, Mr Civi11, to convey to His Excellency the Secretary-General, and the whole United Nations system, our appreciation and heartfelt gratitude for the work done throughout th1S process. The
World Conference of Ministers Responsible for Youth was, indeed, the result of close cooperauon between PortugaI and the United Nations.
Finally, ] would like to thank you for your presence here in Lisbon, for your work, your pauence and your help, without which it would not have been possible for this Conference to be the success that` },

        { pdf: 158, print: 150, content:
`we all recogmse.
Thank you very much and goodbye.
(http: //www. un. org/events/youth98/speeches/closings. htm)
- l. preside [pn' zaid ] 妩 to lead or be in charge of a meeting 主持
- 2. unparalleled p r 引 el 的 adj. used to emphasize that something is bigger, better or worse than anything else like it 空前的
3, committed I ko <mitid ] adj, willing to work hard and give your time and energy: 承诺:的
4, integrate @ intigreit ] V. to combine tWO or more things SO that they work together 合并，成为一体
- 5. legitimate [li' d3itimot ] adj. for which there is a fair and acceptable reason 合情合理的
6, pursuance I po' sju: ans ] n. if you dO somethmg in pursuance of a panicular activity, you do it as part of carrying out that activity 遵
循，进行
7, conceive [kan' si: v v. you think of a plan or idea and work out how it can be done or put intO practice 想出主意 live up to the expressions•••••• 达到期望值
9 ．
过程中 are plagued with.
灬受到“．一困扰
， in pursuance，在从事（执行、进行）某项活动的
UsefuI Sentence Patterns
- l. Five days after the opening of this Conference, over which I had
the honour and pleasure of presiding, we are about to close a meeting which I hope has fully lived up to the expectations of us all. 大会开幕
这五天以来，我有幸主持了这场会议，在此闭幕之际，我希望大会` },

        { pdf: 159, print: 151, content:
`圆满成功，收到预期的成效
- 2. We have had the opporttlmty to share expenences, to listen to
committed voices,怖 feel that the problems that concern us are basically the same, to be moved by dramatic reports of eountnes where young people's daily lives are plagued with uncertainty. 会上,我们有机会分
享经验，彼此作出承诺；我们感到我们关心的事情基本是一样的；
从大会的发言中我们了解到，一些国家年轻人的生活受不确定因素
的干扰，为此，我们深有感触
- 3. Finally, I would like to thank you for your presence here. 最
后，感谢各位到这里来参加这次会议。
##Sample 2
Closing Speech at the Australia-China FTA
Conference—Future Directions
Speech by DFAT Secretary, Dr Ashton Calvelt AC
Sydney, August 2004
Introduction
Thank you, Alan.
Yesterday in my opemng remarks to the conference I said that I looked forward to our discussions providing funher insight into the range of issues covered in the FTA study.
From my perspective we have more than achieved this.
Each of the sessions has provided many important msights.
We have been able to gwe consideration to the broader economic and political significance of a possible VFA, as well as discuss in detail many of the specific opportunities and challenges a possible FTA would present for Australia and China.` },

        { pdf: 160, print: 152, content:
`I must say too that the high 1 "el of interest—over two hundred participants—has been very gratifying,
It is a clear indication that the FTA study—and the broader question of an FTA with China—is being gwen senous consideration by busineSS the wider community.
A number of participants have remarked that this conference has been very well timed.
The interest and focus we have brought to the subject shows clearly,
I think, how topical the question of a possible "A has become for Australia and China.
Rationale for a possible FTA
Perhaps the most rmportant message I have taken from the conference, s deliberations is that the rnam motivation for concludmg an
FTA between Australia and Chma has to rest on the judgment that such an agreement will bring clear-cut trade and economic benefits to both
Obviously there are other significant benefits that might derive from an 「 A, and I will touch on them in a moment.
But, first and foremost, the feasibility study has to establish a clear trade and economic rationale for an FTA.
That central judgment about the likely trade and economic benefits of an agreement should remarn the pnmary focus of the Australian government, s consultations with the pnvate sector.
The overall thrust of discusslon at the conference seems to indicate strong arguments in favour of an FTA and support from a number of key sectors, but also some significant reservauons and rnisgwings that we all have to take seriously. There is clearly more work to be done.
GOing on from the direct trade and economic benefits, some speakers at the conference have explained that an FTA would be an obvious` },

        { pdf: 161, print: 153, content:
`Part 1 English for International Academic Conference 巧 3 political sign of the strength of Australia and China, s relationship.
It would also serve to develop China and Australia, s shared interest in developing pan-reponal infrastructure, intra-regional trade and a prosperous, peaceful and stable Asia-Pacific region.
ln short, an FTA could become the means strategwally positioning our relationship for the long term, prowding a forrnal arrangement between our two governments which would foster the growth of a widerangmg and mature relationship for the future.
It would also add to Australia, s voice in China, s policy development, while preserving our competltive position as others strike their own FTAs with China.
Dynamism and Opportunity
Another strong theme emerging through our discussions was that
China has an increasingly lmportant position and role in global affairs, a diversity of commercial capacitles and interests, and seemingly unstoppable dynamism.
As we have heard from several speakers, China, s rapid economic and industrial expansion has also irreversibly altered international trade, mvestment and production patterns at the global and reponal level.
We have also had the oppoflunity to hear first-hand examples of how th1S growth has affected specific sectors and specific Australian compames.
It is clear that there is much strong opinion on the importance of these developments for Australia, s national interests.
Alongside its growing external influence, China, s changing economy has influenced lmportant aspects of comrnunity and society within
China.
Urbanisation is occumng at a rapid rate—we have heard that ten million Chinese people are rmgrating from rural to urban areas each year.` },

        { pdf: 162, print: 154, content:
`This is dri, 'ing a constmction and infrastructure boom, which is reliant on imports of materials and resources.
Increasing disposable mcomes are gwmg China, s population unprecedented aCCeSS to consumer gOOdS and professional servlces.
Several speakers have noted that Australia is well-placed to supply ETMs and servrces intO the rapidly growing consumer and business markets.
Prospects and Challenges
As l've already said, for both Australia and China, an would need to balance the wealth of opportunity across our specific economic, trade and investment interests with a realistlc approach to potential challenges.
Australia, s numng and energy sector already has substantial and rapidly expanding trade and investment interests with China.
Future prospects for trade in this sector are obviously very posiuve.
While minerals and energy companies do not face senous obstacles in the
Chinese market, they seem to support an 下「 A for more general reasons.
Speakers have also noted how an FTA could improve investment conditions and help facilitate further involvement of Australian business in the Chinese market.
While some Australian companies have been successful in expanding their operahons in the Chinese market, there remain a number of issues which restrict the capacity of foreign companies to operate freely.
These issues include standards, the legal and regu latory framework, foreign investment protocols and property rights.
our discussions here reinforced the importance of these lssues for
Australian industry, and have highlighted the need 10 factor them into our work ahead.
China, s economy and tradmg system have unique features that re-` },

        { pdf: 163, print: 155, content:
`Part I English for Internati <Academic Conference 巧 5 flect its past and its level of development.
These differences—real and important as they are—are lssues for the negotiations themselves, and not reasons for standing back from Chi-
Discussions have indicated that, as China becomes more mtegrated
Wlth the global economy, these issues will need 蜘 be addressed at van-
OtlS levels.
Agnculture is an importanl sector for bOth our countnes and one which we see as crucial to our l•4A agenda. With Australia, s comparative advantage in broadacre production, speakers have suggested that there is significant potential for Australian gram and wool producers to expand their exports.
As speakers have reflected an FTA would provide an appropnate means to address tanffs, quotas and other barriers.
There has been much discusslon on the need to reduce quotas SO that buyers and sellers can work together for the best outcornes.
We have also heard the wool industry s concerns about the dlfferential between raw wo 司 and processed wool tariffs and the impact these differential have in the very competitive fibres market.
Competiuon is particularly strong in the manufacturing sector, and for the foreseeable future, Australian manufacturers will continue to face strong competition from China and other related countnes.
Dunng the course of this conference, Australian manufacturers have stated their intention to cont inue to take measures to Increase their involvement in the lucratlve Chmese manufactunng sector.
As Heather Ridout has explained, the Australian manufacturmg industry is already highly integrated with China. My view is that we must not lOOk to increase protection of our industry, but instead find ways to increase further our levels of integration in the Chinese market.` },

        { pdf: 164, print: 156, content:
`The Chinese economy holds enorrnous prospect for Australian service providers in the fields of education, legal, insurance, banking, tounsm and telecommunications, eonstrucUon and logstics. With 10 per cent of the Chinese population now estimated to be entenng the middle class level, demand for professional servlces is expected to grow rapidly.
China is already our largest rnarket for education services—but the potentlal remams enormous aS the economy and incomes contlnue to grow,
I think the conference has al very helpfully considered the question of China, s Market Economy Status, in particular clanfying that by
Market Economy Status we dO not mean to claim that China is a market economy per Se.
Accordmg to China Market Economy Status would be for the precise purposes of anti-dumping only and would make Australia and China coequals in the event that we negotiate an FTA.
FundamentaI to any future decision on MES would be Australia, s nght to protect the legitimate interests of Australian industry.
ln conclusion
This conference has provided an excellent opportumty for the business commumty, government and other interested partles to hOld open and robust discussions on the full range of important issues currently bemg considered in the context of the FTA study.
The discussions have been mvaluable and W111 greatly assist us advance the study process.
We remam committed to strongly engage with business and all stakeholders, and 100k forward to continued close cooperation ahead of the study, s completion in the first half of next year.` },

        { pdf: 165, print: 157, content:
`Part English for International Academic Conference ] 57
I would like to thank those who have taken time to subnut detailed and thoughtful subrmssions.
I would also like to once again invite—indeed urge—others in the business community to make submlSS10ns.
ln conclusion, let me say we are gratified by the high-level of interest shown in the conference and the quality contnbuuons all parücipants have brought to the proceedmgs.
It is also through the genemsity of the business commumty that we have been able to hold this excellent conference.
Sincere thanks to all our sponsors for their generous contnbutions.
Thank you to our Chinese guests, including Mr. Lnng Yongtu, a long time friend of Australia, and Ambassador Fu Ying.
And finally, many thanks to Alan Oxley and his colleagues at the
APEC Studies Centre for their ongoing commitment to quality public debate on important foreign and trade policy issues such as this.
Thank you!
(http: //www. dfat. gov. aw/media/speeches/department/040818 一 aus china fta—calvert. html)
Words and E "ss 肭
- 1. rationale [ r 田 JO <na: 0 n. the pnnciples or reasons which explain a particular decision, course of action, belief 基本原理,根本原
因
- 2. deliberation dilibo' reiJn ] n. careful consideration or discussion of something 仔细考虑,商议
- 3. thrust comstj n. the mam point of an argument, a policy 要
点，要旨
- 4. nnsgwing I rms <] n. feelings of doubt or anxiety about
what might happen 疑虑,顾虑` },

        { pdf: 166, print: 158, content:
`- 5. irreversibly I in' va: sobl] adv. that cannot be changed back №
what it was before 无法挽回的，不能倒转的
- 6. dlsposable I di> spouzobl] adj. available for use 可动用的,可
自由支配的
- 7. unprecedented [An'presidentid] adj. that has never happened,
been done or been known before 前所未有的,空前的
& lucrative 0 lu: krativ adj. producing a large amount of money
获利多的，赚大钱的
9, provide insight into 更深人了解
10， in of 支持，赞成 ll. facilitate involvement 促进参与
12 ． be integrated Wlth 与“．．．．融为一体
- 13. reduce quota 降低配额
14， the context of 在一一情况下，在．，一背景下
提交
- 15. make submiSS10n
UsefuI Sentence P 吖"",
- l. Each of the sessions has provided many important insights. 每
次会议都有助于我们更深人地了解问题。
2, Perhaps the most unportant message I have taken from the conference， s deliberations is that.. 我从大会的讨论中得到的最重要
的信息也许就是一
- 3. As we have heard from several speakers. 一正如几位发舀人所
说一
4, Th1S conference has provided an excellent opportunity for.
本次大会为一一提供了一次较好 the full range of important issues.
的机会，（大家）对一一问题（展开讨论 )0
- 5. The discussions have been invaluable and will greatly assist us
advance the study process. 这次的讨论非常有意义，将进一步推进` },

        { pdf: 167, print: 159, content:
`Part I English for International Academic Conference 巧 9
我们的研究工作。
for their ongoing commit-
6, And finally, many thanks to.
…最后，还要感谢一一感谢他们在一一（方面）的持续
努力。
##Exercises
- 1. Directions: Fill in the blanks in English based on the infonnation
glven in the brackets.
Director, s Closing Speech
CULI, s 2006 International Conference
"Facing EFL Challenges
November 27 一 29, 2 (6
The Ambassador Hotel & Convention
Bangkok, Thailand
刀这五“u 这方 ed guests d "gentlemen
The International Conference on "Facing EFL Challenges
（(D 现在即将闭幕），
（让我借此机会） to (囹向..一.表示感谢) to all the speakers, participants, and especially the organizing Committee for your invaluable contributions ln
（@使得这次会议圆满成功）．
I hope the past three days have been
效) and that you will be able 怖
〈 0 富有成
（@受益匪浅） from the sesslons you attended. Through a wide range lectures, workshops, and discussions, we have been presented with new ways to deal with some of the challenges in our profession. I hope that you
（0 与一一分享了您的经历和专业知识） other participants` },

        { pdf: 168, print: 160, content:
`from near and far, and that a strong connection has now been established.
(@同样感谢) The Ambassador Hotel and Convention Center for the venue and excellent facilities.
A very special thank you also goes to CULI's very own staff for their hard work m making th1S event possible and such a success.
We at CULI our Post-RELC
（0 衷心希望能够再次见到您） at (@研讨会) in April 2m7 and National
Conference,"Diversity in the EFL Classroom" in November 2) 7
Thank you and
（@祝大家返程一路平安 ).
(http.//www. culi. chula. ac. th/dia/DIA-WEB/closing. pdf)
- 2. Directions: Translate the following into English,
由亚洲文化研究中心举办的第 5 届国际文化研究论坛已于
2011 年 4 月 5 一 7 日在昆明胜利召开。这是一次重要的盛会，它架
起了沟通的桥梁，让来自世界各地的专家学者们有机会进行交流
切磋。
我谨代表组委会，向所有参会者表示感谢，你们的支持和参与
才使得这次论坛圆满进行。这是一个富有成效的会议，我们衷心希
望您能有所收获。
希望大家昆明之行过得愉快。我们衷心希望在 2013 年 5 月曼
谷第 6 届国际文化研究论坛上能够与您相会。
- 3. Writing
>Directions: Study the samples in this Unit or refer to a sample in
the relevant website and wnte a bnef closing speech for a conference in your academic field.` },

        { pdf: 169, print: 161, content:
`Part English for International Academic Conference 161
##Supplementary Reading
Closing speech to the conference
' Can creativity be measured
Héléne C (Directorate-General for Education and Culture)
There is no doubt that the conference has proved the importance of creat1Vlty as an essential component of education and traimng, and the fact that we need to find ways 蜘 promote and enhance it at all levels of education. Creativity is a vital aspect of key competences and contnbutes to the personal and social well-being of individuals. It helps them to contribute to make Europe more innovaUve, and it helps everyone en-
JOY and appreciate the mosaic of cultures of Europe.
However, are our educaUonal systems promotmg creahvity? Often it is claimed that "education kills creativity'. Whilst creativity can certainly be killed by all so 小 of means, within education and outside it, we know that there are very many excellent schools and teachers who nurture talents of all kinds, whO create a learning enuronment that encourages cunosity, who respond to the individual ways children and young people learn and thus help them become truly motivated lifelong learners. Therefore, the policy challenge is to learn how this excellence was created, what kinds of teachers and school leaders rnade it happen, and how the overall education and traimng policies helped to develop such schools.
It is for this that we need to understand better how creativity can be measured. Making innovauve teaching and learning available for each student in every school calls for a good understanding of what creativity is about, and how we can say when we have succeeded in helping it flour-` },

        { pdf: 170, print: 162, content:
`ish. We are now taking only the "0 first steps in being able to assess creativity. However, during these two days of the confer€ nce you have brought up a number of issues to consider further, and ideas that will be useful for future work. Let me highlight afew of those that have a direct link to the ways we should support children, s and young people's learn-
We heard yesterday that creativity is best nurtured in an environment that respects diversity, and is based on tolerance. We a 卜 0 heard that catalysts for creativity include a certain level of 亓"m, trust and acceptance offailure. Indeed, this has direct implications for teaching and learmng: How can we encourage lmtiative and support ongmal ideas while helping young people to become tolerant and respect each other? How can we change the culture of assessment ln our schools № one that is more encouraging of rmstakes and risk?
The second important issue rmsed is that creativity can be used both for good and bad, This means that in education we need to combine the freedom for creativity and expression Wlth respect for commonly agreed values and ethical pnnctples. I think this is ever more true today, when young people in parucular use new interactive media for expressing their ideas and for creauve social networking.
Another interesting thought is that creativity is perhaps domainbased "task-based, rather than only a generic quality. For education this means 一一 for instance —that different subject-areas may need different kinds of support if they are to become more creative and contribute to innovauon. Moreover, this certainly has implications for how creat1Vity can be measured. Finally, the role of play cannot be underestimated, and the question for us working in education and traming is: are we be commg t <地 senous, t00 early?
It seems to me that the issue of creativity casts a very interestmg` },

        { pdf: 171, print: 163, content:
`Part ] English for Intemational Academic Conference 163 new light on several of the policy areas on which we have been working with Member States for a long time already: developing cumcula for key competences, teacher education, school development, and the prevention of school failure and dropout. This conference has shown how these areas are interlinked, and hOW creativity and innovation underpin the development of these three main policy challenges. Indeed, perhaps creaUvity and innovation should be amongst the quality crtteria for exarmning the structures of education and traming. But, as I said in the morning, mthout being able to assess progress, many essential dimen-
S10ns of human learning risk being left aside. Assessment is a crucial issue for all transversal key competences, as it is for creativity.
This conference is the first step towards that major goal. Whilst it seems that we need to accept the fact that measurmg creativlty is about measunng some aspects of it, the very rich presentations we have seen dunng these two days have provided an overview of the different methods that are available. They have given us an insight into possible ways of creating a comparative perspective on creativlty. 气, are far from the 行.
nal answer, but we have started the journey!
Answers Can only be achieved through contlnuous discussion among relevant stakeholders, researchers, practitioners, policymakers and learners themselves. The year of Creativity and Innovauon is a perfect urne to start th1S journey, and to launch dialogue Wlth all involved.
However, we cannot expect to get answers quickly, SO we need to create solid and sustamable structures for cooperation for the years to come.
Let me also remind you that the new strategic framework for cooperation in educauon and trammg IS prormsing in this regard. creativlty and innovauon is high in this new agenda. It will help us integrate creativity and innovation intO our JOint work with Member States for improvmg the lifelong learning of all Europeans.` },

        { pdf: 172, print: 164, content:
`I am convinced that the outcomes of this fascinating conference provide us Wlth a sound basis for gradually learning to measure creativity.
And I would like to msh you all the best with this work.
(http: //ec. europa. eu/education/lifelong-learning-policy/doc/cre ativity/report/speech. pdf)
Words and Ex, ""肭
- l. underpin [ Anda• pin v.
gument， a clmm 加强，巩固
2, cast a light on 阐明,使.
U 跹和 / Sentence Patterns to support or forrn the basis of an ar-
．．．明白
- l. There is no doubt that the conference has proved the importance
of. ．毫无疑问，大会说明了一一的重要性。
2 ． we heard yesterday that. 一昨天的发言中，有人提出．
- 3. The second important issue raised is that...所谈到的第二个
重要问题是．．．
4, Another interesting thought is that. 一有人谈到了一个有趣的
看法，．．
- 5. This conference is the 6 吓 t step towards that major goal 这次大
会是迈向主要目标的第一步。
- 6. I am convinced that the outcomes 0 「 this fascinating conference
provide us with a sound basis fo 匚一我深信，这次精彩大会的讨论结
果为一一打下了坚实基础。
##References
- 1. http: //www. un. org/events/youth98/speeches/closings. htm
- 2. http: //www. dfat. gov. au/rnedia/speeches/department/040818_ aus
china fta calvert. html` },

        { pdf: 173, print: 165, content:
`Part I Enghsh for Internauonal Acadenuc Conference 165
- 3. http: / / w. culi. chula ac. th/dia/DIA-WEB/closing If,
- 4. http: / / eumpa eu/education/lifelong-leaming-policy/doc/cmativi-
- 5. Hornby, A. S. Oxford Advanced ""0 标榧 Chi "se Dic-
五確 0 '. Oxford: Oxford University Press, 2 (9
- 6. Sinclair, J. Collins Cobuild 凸标 C 5 巳 HarperColins Publishers, 2) 6.
7，陆谷孙：《英汉大词典》，上海：上海译文出版社， 2 開 7
& 有道词典 http: //dict. youdao. com/` }
      ]
    },

    {
      id: "p2",
      part: "Part II",
      unit: "",
      title_en: "Intercultural Communication and International Academic Conference",
      title_cn: "跨文化交际与国际学术会议",
      print_start: 166,
      pages: [
        { pdf: 174, print: 166, content:
`#Intercultural Communication and International Academic Conference　跨文化交际与国际学术会议
##1. Culture and Intercultural Communication
##1.1 Overview
The world, in which mankind lives, tends to develop into a place where the fruit of human civilization could be shared by any people of different cultural backgrounds. The fulfillment of this 印 al calls for effective communication, cooperation and cultural exchange.
Generally, Intercultural communication refers to any communicative behavior between or among people, from different cultures People of different cultures come together to form certain relationships. This is, however, often not easy. Misunderstanding or conflicts are likely № happen.
The effectiveness of intercultural communication determines whether the human community will make peaceful and mutual progress. Failure
Of mutual communication is bound to occur in the normal relationships between or among peoples, let alone successful intercultural communication. When misunderstanding grows, conflict is the result.
ln this sense, the study and practice of intercultural communication become extremely important.
Intercultural Comrnunicauon is an interdisciplinary subject. Study of this dlscipline started in the U. S. in 1960s, As a branch of commum-` },

        { pdf: 175, print: 167, content:
`Part ll Intercultural Corrununicatton and Intemational Acaderrue Conference ] 67 cation, intercultural comrnunicatron takes advantage of the findings of communication, sociology, psychology, cultural anthropology, linguistics, literature, ethnology, philosophy, history, language teaching, and international relations. It also integrates the theories of these fields
> n to its study and practice. Researchers in mtercultural communication attach great importance to pracucal activities between or among people from different cultural backgrounds. The discipline studies the relationship between culture and communication, especially the influences of on comrnumcatlon.
Approaches to intercultural comrnunication may vary eonceming different academic subjects. l)ifferent scholars conduct their research differently,
##1.2 Culture
A few words are necessary before the comments on intercultural commumcation. Culture is a term that has been studied and discussed for a long time and definitions and explanations abound in terms of different scholars Quite often it is hard to gwe a definite and eternal definition of it or it may not be possible to do so because it is part human life and it permeates into everywhere of hurnan world. However, for the convemence of study, it is necessary and practicable to have a working definition of the concept.
Culture is the product of a certain environment. Accordmg to Singer, culture IS a / 甩 e learned, ro 寸 el rc 叩五巧.一 i "／ u verbal and nonverbal ""e, es, values, belief ·
紀 n 巧, disbelief ", and b 訪" io 吓一一这 accepted and expected an i 咀 0 ro 叩, Since 力 n, each 下"` },

        { pdf: 176, print: 168, content:
`0 ' group 方"0 脚"e 厂"rc 初 ns and behavioral ".
maLs and has 0 "language "(understood mo clearly members), each 伊 may be said 方 at ℃ own c 讪"巳(Singer 四 87, 6)
ln this definition, culture 这 taken as perceptions which highlights the observation, the awareness, and the cogmtion of people. lt puts a prermum on the physical sensation interpreted in the light of expenences. ln Other words, it is intertwined with human, s attitude and behavior. Moreover, different peoples have their own unique cultures which help to identify them from others. Actually, aecording to this definition, culture can be understood as a set of instltutions by which people perceive themselves, ] 00k at the world, and understand other people. Meanwhile, culture also means the sets of meanings, standards of beauty and guides for behaviors considering a glven cultural group.
To understand a part of any culture properly, it must be put within its context. It should not be judged by standards derived from another culture. otherwise, it will lead to the ethnocentnc tendency. Being ethnocentric, the in-group will overstate their cultural values while understate those of the outgroup(s). This will inevitably bring about miscommumcatlon conflicts.
##1.3 Intercultural Communication
When people meet, communication has begun. To understand intercultural communication reqtnres an understanding of commumcation first. There are lOts of explanations as to the concept of communication.
ln the ma "刀妇握", Contemporary E "标五, communication is defined as "the exchange of information, news, ideas or opimons:
Speech and writing are man, s most important methods of commumca-` },

        { pdf: 177, print: 169, content:
`tion
Part II Intercultural (%rrununicanon 訕 International Acadernjc Conference 169
Some scholars hold that
在 process 沅 which a message rod ", through
"r channel(s),"握小 the message the receiver so cause 厂 ea, or 在 roce,, / 0 寸 the exc 右吓孙 ℃ i / a 五 0
<圹 0 依, or more e00 碼 i 0 the u brm 五 0 握 shared by 伍@ or more 巧,(Guan Shijie 1995, 25)
Borden mamtams that the basic mo ／ human communicatton ro ""这在 linear one 而"‰ 五 the, commu 疒诅"巧 an ongomg process 这流 ca d ' inclusion "弄 e "左柄叩.
穆 a 豆 ca / 0, the process 这这: communicator sends a communique the communicatee "咦 0 re 平 0 小 returning com-
皿 ' communicator. The 五"model, 0 和酗 the commumcator and the communicatee are se ' 而 g and ""zn commuruques 山 a "01 巧(Borden 1991
He alSO emphasizes that communication is the sharing of information through meaningful symbols. ln intercultural communication, communication refers to the intercultural acuvities in which both the communicator and the commumcatee share the same commumque encoded and decoded.
Intercultural communication (also called cross-cultural commumcation or transcultural commumcauon IS any commumcative behavior between or among people from different cultures. ln other words, as long as people from different cultures have been encountering one another there has been intercultural communication.
OCCurS whenever a message sender iS a of one culture and message recelver iS of` },

        { pdf: 178, print: 170, content:
`another"(Porter & Samovar 1985,巧). Intercultural eommunication, in terms of cultural anthropology, manifests itself in the 帛 rn 仆 of interra-
Cial commumcation, interethmc communication and international com— rnunicaUon. ln Other words, it occurs between or among people of different races, ethnicities and nations.
- 1.3 · 1 The lmportance of Intercultural Communication
Intercultural communication is of utmost necessity and importance to human society.
First, the tendency of world de, reloprnent demands successful interctlltural commumcation.
Peace and development have been the tendency of the world. Human history has been developing through the alternauon of war and peace, Since the second half of the 20th century, the international situation has changed greatly. World economy has made rapid progress.
Business has become the main activity connecting people of different countrles. Nations are getting more and more interdependent. With the appearance of nuclear weapons, the means of war will not attain the goal
Of war as before, for the use of nuclear weapons would only mean one thing—the destruction of mankind. Thus, problems and cnses are tending to be dealt with through peaceful negotiation and cooperation.
SurvivaI and development are the basic goal of human being. As a result, mutual development becomes the theme of the world progress. To achieve peaceful cooperation, intercultural communication becomes itS prermse because only when people get to know and understand each other will they be able to cooperate well.
Second, effective intercultural commumcation promotes the efficiency of cultural exchange, the key to human progress.
Cultural exchange proves to be important to human society in that it rnamtains the continuity of the development culture, speeds up the` },

        { pdf: 179, print: 171, content:
`Part II Intereultural Conununicauon Intemational Academic Cnnference 口 ] development of culture, and adjusts different cultures to a balanced development (Yu Longyu 1989, 7 一 12), ln human history, the im, ention of a group was able 10 be spread and passed on only through communication and exchange. The development of cultural exchange is directly proportional to the range of cultural living in different geographical surcornmumcatmon. Different peoples roundings, have produced their own unique cultures concerning life style, characteristics, and the extent of development and the essence of culture. ln other words, human eulture has developed in an unbalanced way, fast or slow, underdeveloped or advanced. Such situations of unbalance are often improved via intercultural exchanges. Though intercultural comrnumcation is relatively a new term, such practice has begun accompanied by the activitles of cultural exchanges since ancient tirnes.
From then on, people have stayed in contact with each 0 山"in trade and other areas. Without intercultural communication, ctlltural exchange impossible. CulturaI exchange preceded by intercultural commumcatlon.
Third, the development of science and technology promotes the acuviues of intercultural communication, which in turn propels the development of science and technology.
The development of society has brought about the advance of science and technology, which has made possible more and more advanced means of communication and transportation. Modern electronic Commu— mcation has enabled people to contact one another easily. Advanced transponation has reduced the physical distance between peoples. People go from place to place more frequently. Contacts have largely been increased among cultures due to a widemng world marketplace. ln the meantlme, educaUonal exchange programs, technical assistance, tounsm and multinational conferences all make communication a dally` },

        { pdf: 180, print: 172, content:
`necessity. Marshall McLuhan proposed the notion 鬲"Global Village"
It is true that people, wadays have lived in such a Vlllage, within easy communicating distance, thanks to the matunty of transportation and commumcation technologles.
Enough evidence as this dnves home the impression that intercultural communication is getting more and more important. ln the meanume, great efforts are needed to develop effective intercultural communication for cultural variances make people appear strange to each other and there are some difficulties to achieve mutual understandmg. ln terms of intercultural commumcation, cultural vanances must be taken intO account.
- 1. 3 · 2 The Influences of Culture on Intercultural Communication
As mentioned prevlously, intercultural communication occurs whenever a message producer iS a member of one a message receiver is a member of another. ln this case, there appear problems inherent in a situation where a message expressed in one culture must be interpreted in another. ln other words, when people have to explain the message from other cultural group(s), they are apt to dO SO in terms of their own criteria. Thus, cultural variances shape the individual communicator. Due to cultural vanances, different people may not SO easily understand each other and msunderstanding is hereafter unavoidable.
The influence of culture on the individual and the problems of expressing and mterpretmg messages across cultures are illustrated as follows.
When a message of one culture reaches another, it undergoes some transformation. When this transformation is small there can be mutual understanding. But what if this transformation grows bigger? It is certain that when people of various cultural backgrounds come together to form a relationship concermng the fields of academy, commerce and po-` },

        { pdf: 181, print: 173, content:
`Part II Intercultuml Cnrnmunic41tion 田记恤 en 而司 Acadernic Conference 173 litics, such acUviUes cannot always be successful. There exl.st inevitably vanous problems, misunderstandings and even conflicts.
Take" smile" for example. Though all humans smile, different people from different cultural backgrounds may interpret it differently. The different interpretations are partially true to the first encounter.
However, effective or not, intercultural commumcation lies heavily with people's attitudes.
- 1. 3 · 3 The Domain of Intercultural Communication Studies
AS mentioned above, intercultural communication is an interdisciplinary subject which exploits and synthesizes the findings and theories of a wide range of disciplines. ln other words, the newly established discipline owes heavily to the studies and pracuces 鬲 other disciplines. It is not so much that researchers or scholars of intercultural commumcation attempt the studies in this field as that researchers or scholars from different acadermc or technical fields make investigations or conduct researches on mtercultural communication from their own perspechves.
Hence the diversified approaches and findings.
The situation of international conference, according to the pre, 'ious extrapolations, IS actually an occaslon of intercultural communication where scholars from different cultural backgrounds come together to communicate, to talk to exchanges ideas, and to share acadermc expenences with each other. These intercultural interactiviUes may mvolve all the spheres considenng intercultural commumcation. However, since this is mostly an occaslon of "speaking and talking attentlon here is going to be pald on verbal communication. ln Other words, people from different cultural backgrounds meet together to communicate in
English, a language not necessary universal but at least the one usually designated for such an occaslon. For many participants, English is not their nauve or second language. When they communicate in English` },

        { pdf: 182, print: 174, content:
`with other people, they are expected to be careful considering the effectiveness 0 「 commumcation, thiS regard verbal communication IS highlighted in this Part.
##2. Verbal Intercultural Communication in the Context of
International Academic Conference
When scholars take part in the international acadenuc conference, they are involved in the situanon of intercultural communication. Since they come to communicate and exchange ideas on grven academic subjects in om1 and written forms of language, their intera€ tiVlty is called verbal communication. Moreover, these scholars come from different cultural backgrounds so that their pattern of thoughts, ways of speech delivery, orgamzauon of papers, interpretauon of messages, and management of questlon & answer session may dlffer in one or another even though they all speak English. These differences may sornetime make a great difference. Anyway, such interactivity in the context mternational academic conference 这 thus called verbal intercultural commumcatlon.
TO improve the effectiveness of verbal intercultural comrnumcation, to make one well understood by scholars from different cultural backgrounds, and to reduce intercultural miscommumcation to the mimmum, suggestions are proposed here for the parucipants of international academic conference considering the followmg aspects.
##2.1 Preparatory Work
When you start to depart for a new place, say, in a new country, to parucipate in the international conference, it is advised that you have some knowledge of the customs, traditions, festivals, or religion of the host country. For example, if you go to the United States, it is better` },

        { pdf: 183, print: 175, content:
`Part II Intemultural Conununication Conference 175 for you to know somethmg about their traditions, customs and their ways of dealing with hurnan relations.
Here is an example of intercultural rmscornmunicaUon which implies that the perspective from only one side would incur distrust or even hostility.
Althen et al. (2 開 2) shows a case of a foreigner who experienced intercultural miscommunication with a local US family owing to cultural vanances considering family relations. Here is the brief account of the story based on the research of Althen.
Tamq Nassar came to the US to earn a master's degree in civil engmeering. ln his country Egypt, people shOW great respect to the sen-
10r cltizens. When he arrived at the University, Nassar had a host family, the Wilsons. Mr. Wilson was an engmeer. He and his wife and the two kids lived together. Mr Wilson, s mother did not live with the fanuly but in a nursing home. Mr. Wilson visited his mother there once a week if he was not out of the town. His wife went along sornetlmes on these visits since she was busy with both her work and the family affairs.
The children rarely went there smce they were busy with their studies.
Nassar was terrified at this situation. How could M 匚 Wilson a pleasant and generous gentleman have his mother livmg in a nursing home? Why didn, t his mother live with the family?
Nassar began to have a negative attitude toward Mr Wilson. He might think that Mr. Wilson was not a filial son but an irresponsible and selfish person. Or perhaps Mrs. Wilson was a poor woman who would not like her mother-in-law staymg with them. These mterpretauons by
Nassar might sound reasonable from his cultural perspecuve. However, there may be other equally reasonable explanations on what he had seen.
If Nassar could understand, as Althen et al. commented` },

        { pdf: 184, print: 176, content:
`the way tn 脚方方 Americans are trained 忉 behave inde-
尹 en, se 侨 re ／地 d 湎 ta, would more 五雇 ly ' 加 understand 脚 y Mr. "乁 mother 脚"而 the ""5 而 g m 巴
He would be more 五 l) ' realize the mother might actually <r be 沅 the m "而 home rather than "栀"burden,
方"5 ""九这知 m ' (Althen et al. 2 開 2, xx-xxii)
If Nassar judged the Wilson's from his own perspective, miscommunication would certamly occur. That would be detrimental to their further relationship
Perhaps, a proper way in the intercultural encounter is to develop a sense of empathy, to learn to think and look at things in the stand of the
0 山 e 仆. A 卜 0 there is a prmciple to follow,"When in Rome, do as the
Romans do", These attempts wtll help to promote the effectiveness of mtercultural commumcation,
2 · 2 Communication at the First Encounter
##2.2.1 Greetings
When people go to the venue of the conference, they go to the repstration counter and check in. Usually there IS a special corner at the lobby for receivmg conference participants. When parncipants meet they greet each other by saying "lli, Hello, How are you, or How are you doing!" After the greeting, they may mtroduce themselves to each other and start a small talk to show being polite. At the first encounter, they introduce themselves by saying like.
Hi, l'm John BeII and l'm from New York.
Hi, I, m Zhang Shan from Shanghai, China. I study Information
Engmeenng.
How are you doing! l'm Betty Harry from Califorma. l'm a` },

        { pdf: 185, print: 177, content:
`Part II Intercultural Cornrnuni€ation 出 Intemanonal Academic Cnnference 177 researcher of BiomedicaI Engmeermg.
Nice to see you!
Nice to meet you!
The pleasure is mine!
My pleasure!
Sometimes, they exchange name cards with each other along Wlth the greetings. Moreover, topics of such small talks usually involve weather, sports, or travel. They would say things like:
l-ovely weather. lsn, t it?
lt, s a good day.
lt's cold at this time each year in this city.
Did you enJOY your tnp?
Have you ever been hereQ lt, s a beautiful city.
Did you watch the football game last mght?
Finally, when they part, they would say things like:
Nice to have met you! Bye!
See you later'
Good Bye!
This happens in a very short period of time and it may be sometimes like going through the motions of doing 正 Anyhow, people Just dO it because it the customs. Since they W111 be there for days, they will surely meet again. Or they will meet most of the others on other occasions for the 6 仆 t time. When they do, they start the bnef greeting.
Here, one thing must be no 亩 ℃ d that most of the participants of the conference have never met or got acquainted. 'lhey are, in this sense, strangers to each other. CommunicaUon with strangers in this sense, if it is going smoothly, will pave the way for further relations concermng academic exchange and cooperation. On the contrary, if things do not go smoothly at the first encounter, miscommumcauon would occur and` },

        { pdf: 186, print: 178, content:
`people would be unhappy,恼 alone academic exchange and cooperauon.
Here are some suggestions for participants at the international academic conference when they meet their partners or colleagues from different cultural backgrounds for the first time on that occasion.
After the greetings, if they start a small talk, they had better not to touch the topics involving people's pnvacy, say, age, incorne, or mar-
Now China has been opemng up to the outside world for several decades and the Chinese people have got to known the western customs better than ever before. Even SO, it is better to mentlon a few words about the way to talk with western people.
Before suggestlons, an example iS glven of Case concerning intercultural encounter and commumcation in terms of the expenence of the first author of this book, a Chinese teacher of English.
I have been lectunng on "Intercultural Communication, m the University for several years. Once in my class, I showed a case to my students. I invited our Arnencan teacher and his wife to dinner and we had a good talk. l)uring our talks, I asked the man ' How old are you?," Then I stopped and rmsed a question,"How dO you respond to my inquiry? Many students kept silent. (Maybe the Chinese students usually kept silent during the lecture, maybe they did not know how to answer for this was a question by a teacher of English who might not have made a simple mistake, or maybe they did not care at all.) I gave the example to other students too when I touched on the topic of intercultural communication. Later, some student resounded by saying' Oh, you are so ru(le'` },

        { pdf: 187, print: 179, content:
`Part II Intercultural Cnmrnurucanon and Intemational A (m 证 (%nfeænce 179
Really? What, s the problem? Certainly, as mentioned before, it is better not to touch on the topic concerning the pnvacv of western people. Nowadays, this is also the case to Chinese people. We have learned this custom and usually dO 月 Ot ask people such questions. HOWever, a 卜 0 as mentioned before, for the FIRST ENCOUNTER, or to the
STRANGERS, better not to involve such questions. Considenng the case of my lecture on intercultural communication, I did not tell my students that I had been well acquamted with the American couple and we were friends. So, as friends, we may talk everything under the sun. Actually, the man not only told me his name but his wife, s. We happened to touch on that topic. The case also implies that things are not absolutely so rigid. It depends.
ln this sense, the point is highlighted agam that the safest way for the first encounter in the intercultural communication 这 to avoid the topics concermng people's age, wage and mamage.
2 · 2 · 2 Salutation
Customarily, people tend to be polite to each other. When participants meet and get to know each other, they address each other in some way. For many Americans, and also other English-speaking people, they may tell you their first name, to be less formal. You may just call them by the name they tell you. But quite often, we Chmese tend to be polite and would like to call them in a respected way. This is especially the case of young Chinese scholars in face of a senior professor or scholar. At this time, if you do want to shOW your respect and be polite, you may add the title like Professor, President, Dr. or simply Mr.
or Ms." For example, if a man is named Patnck Reed, you call him
Professor Reed, President Reed Mr. Reed "Dr. Reed ", or just call him Patrick as he may suggest so. If a woman is named Sally
Wright, you call her "Professor Wright, President Wnght, Dr.` },

        { pdf: 188, print: 180, content:
`Wright, or Ms. Wright" or just call her Wright as she may tmply so.
Do not confuse their first name with the titles by saying Professor Patrick or Dr. Sally", Moreover, for a man parucipant, you may simply address him "Mr. Reed ", and for a woman participant,"Ms.
Wnght". But remember that you should never call a woman Mrs.
simply because she may 1 艹 k semor, as you dO in the Chinese case of calling a lady. ren" to shOW your respect to the semor.
##2.2.3 The Most UsefuI Fnpressions
There are a huge number of useful expressions considermg intercultural communication. It is not easy to make a list here, nor is it worth effort. However, in intercultural commumcatlon, tWO expressions seem to be used most frequently. One is "Thank You 广 and the other is "Excuse me." Whether you really owe to the others or not, you thank people all the time. It is a way of being polite even though it may not mean anything practically significant. Moreover, when you want to call somebody's attention, when you want to interrupt a person, or when you intend to rmse a question, you say Excuse me" first. These are customanly the expressions of being polite. They are used frequently throughotlt the commumcatlve course.
##2.3 Communication at the Encounters Later on
When the Conference goes on as planned, the palücipants will meet agam, become more and more acquainted with each other, and some may become more associated with each other. Besides the panel sessions on which the parucipants exchange their ideas on the designated subjects, there are chances for the panicipants to have more conversations, say, during the break or at the dinner palty, or on a bus from or back to the hotel, perhaps about the acadermc topics or perhaps about other themes. Anyhow, as mentioned before, it depends, considenng` },

        { pdf: 189, print: 181, content:
`Part II Intercultural Cnrnmuruc ation urd Intemational Academic Conference 181 what kind of topics they should start. At this time, it is suggested that you'd better not to talk about people, s reli90us belief or political position unless that is the conference of religion studies or politics studies.
Topics of relipon and politics are usually controversial since people may hold different posiuons. ln the daily encounters or contacts on the occasions of international conference, the best approach is to work one, s way towards academic exchanges, or to promote friendship in favor of further academic cooperauon. If an argument or debate concerning religlous or political beliefs should occur, that would be an unhappy expenence to the participants. So, better not to touch on sueh topics.
2 · 4 Culturally Loaded, Vor 小 and Expressions ln the context of Chinese-English communication, it is expected to recognize that many terms or phrases are not equivalent.
We communicate We use WordS. iS quite natura.l consi— dermg human communication. HO,, many words and expressions are culturally loaded. They a strong sense of cultural connotations.
It is thus advised that we should be alert when we come across such terms or When We want to uSe Such terms to express ourselves ln cOn— text 0 I intercultural communication, like the scene of intemational academic conference. Some knowledge of such culturally loaded words and expressions will help us understand local people or make ourselves understood.
For example, if the conference is held in the United States and you go there in September. You will probably hear about the holiday of
"Labor Day ". ln China, we have "/ 冠 0 刀 0 Jie", so that "Labor
Day " will immechately gwe us the impression of the International Labor
Day of May 1. However, in North America, it refers to "a day set aside for special recognition of working people: the first Monday in September` },

        { pdf: 190, print: 182, content:
`observed/celebrated ln the U. S. and Canada as a legal holiday (Webster's Ninth New Collegiate 刀"") '). It is quite different from what we know and pracuce in our country. Or someUmes, you may hear people say that they are going to buy something to eat in the drugstore for breakfast. You may feel puzzled because drugstore is where you buy medicine rather than food. What happens! ln fact, the word drugstore in America certainly means a retall store where medicines and rmscellaneous articles are so 囝: PHARMACY"(Merriam-Webster Co 仁 leglate l)ictionary). It may sell cosmetics and magazines at the same time. But it also means a grocery store (Youdao on-line) where you can buy dough for breakfast.
Considering the international academic conference, you may surely hear the word "dear, frequently in the opening speech or you use it in email as part of the salutation, like "Dear Colleagues and Friends""
Dear Richardson,, We may take it for granted that this is an equivalent to the Chinese word qin". Actually th1S is not the case
Suppose your use Dear" to address a female colleague frequently and you take it in the Chinese sense of qin de" don, t you think it is somewhat rude? Actually, Dear, in this context means respected like what we say 丿" in Chinese. ln the conference, you use the word before a person to show your politeness and respect.
It has nothing to do with intimacy. ln the opemng speech, for example, the speaker usually starts by saying:
Honorable Mr. President
Honorable Professors,
Dear Colleagues and Friends,
Ladies and Gentlemen,` },

        { pdf: 191, print: 183, content:
`Part II Intercultural Conununi( anon and International Academic Conference 183
The meamng of "Dear" is evident, which means "Respected"
Moreover, in this salutational part, the expression "Ladies and Gentlemen is put at the very end. This is natural for it refers to anybody at present. ln other words, in the conference opemng speech, when you start with the salutation of guests, you start from the most important one, and then you go on Wlth the others in turn with reference to their posiuon or status. As the above example shows, the "President" comes first and the "Professors" comes second, followed by "Colleagues and
Fnends", Finally, we have "ladies and Gentlernen, simply because they are nobody. ln China, people love the phrase "皿 shi m ', ta
訪 e ' men so that they often highlight this sense by stating "Ladies and Gentlemen, first. "lhe two expressions may slightly differ on this occasion. expression of She connotes more of respect, and so does 5", Put together, they connote a higher sense of respect than their counterpart in English. That is why sometrmes Chmese speakers may begin with "" 5 m 四<, xian 5 方 men
Anyway, nowadays, in a formal speech like conference, it is suggested to start with the most important person and to end Wlth ' Ladies and or ' t, 5 方,攴 ia She m
Moreover, among the frequently used words, many may have different connotations SO that you have to decide on the exact sense accordmg to what you mean. For example,"east and "west are geographical terms and they are neutral in meaning 50 that they are used widely.
On the other hand,"onental " and "occidental" have a strong political and cultural sense. The word "oriental, suggests the "east" in the sense of western people while "oceidental' bnngs us the impression of western hegemony. Another palr of words which are someumes rmsused iS SeX and gender. on—line version of resume ln some Eng— lish-speaking countries, it is found that people put "male" or "fe-` },

        { pdf: 192, print: 184, content:
`male" under gender". Actually, gender" is a sociolopcal concept
Or "androg enic". On the which alludes to masculine other hand,"sex is a biological or physiological term which refers 蜘 either "male" or "female"(Wood & Reich; Ander-sen; ed. Samovar & Porter 2 (7 巧 2 一 153; 248 一 249). When we introduce ourselves, we certamly mean in the biologwal sense. ln social life, we can say a man is male but he has a strong tendency of femininity so that he is called a sissy. A glrl is female but she acts and behaves rnore like a boy. Hence her nickname a tomboy.
ln Chinese, there are many words and concepts which are culturally specific. The use of these expressions in English context will lead to confusion if they are not properly handled in translation.
For example, when we meet at the Conference, besides the greetings, we Chinese often like to ask about the participant's "dan
"", The Chinese question ""寻五"""记?" rnay be literal ly put intO English as "which unit are you frorn?" However,"dan
脚 is a Chinese-specific term and it is not equivalent to umt in
English. If you do want to express your idea in that sense, you may use the words like "affiliate" or "identify and their vanants considermg the context. If you write a title page for your paper to be submitted, you put down the title, your name, and address. Sometimes, if necessary, write the word "affiliation" before the name of your umversity or orgamzaUon, such aS.
Title:
An Interpretauon of Invisible Man frorn the Perspective of Cross-culturaI Comrnunication
Name: LUO Hong
Affiliation: School of Foreign Languages, Yunnan University
Address: 2 # North Culhu Rd., Kunrning, 65 刃 1, Yunnan, China` },

        { pdf: 193, print: 185, content:
`part II Intercultural C.onununication and International Acadernic Conference 185
Date: Dec. 12, 2011
If you ask somebody about therr ""wei, you can put it in a different way, such as 庵
—Would you please identify who you, re with?
—I, m with The Johnson Company in West Virgima.
When you gwe a brief introduction to the keynote speaker, you can say:
From 1993 to 2010, Mary Smith was affiliated with the Institute of
Information Engmeermg of Califorma.
He has been affiliated with Clemens College since the Spnng of2011.
When we a presentation about our acadermc research, we Chinese sometime may add words like "磊 @ "qtan 忉 in the title to mean being modest. Consequently, put literally in English, it becomes something like "My Humble Opinion on.
or "A Preliminary
DiscuSSIOn on.
ln English, this is not necessary either because it looks redundant or because it may imply your diffidence. You get to the point and just state it directly. Your presentatmon will show and venfy whether your paper is really "humble" or prelimmary ln Chinese, there are some terms that are difficult to be put into
English considenng the academic exchanges in conference. Some may undergo slight changes meaning if put into English. For example, min, in Chinese means both the nationality and ethnicity in English. It is awkward to say both the two terms all the time in the English context. Moreover, some Chinese scholars maintam that the "寻 I 0 5 方 u min "" Of China is not identical to "ethnic group in English. ln this regard Chinese scholars have coined the term nun "in accordance with the Chinese pinym to refer to the term in the Chinese context, This usage, though probably unpopular, has been put in use as in the name` },

        { pdf: 194, print: 186, content:
`of "Minzu Uni, rersity of China", This is also the case for the nomenclature of some Chinese umversities which have been into ' Renmin Univer-
"Shangha1 Jiaotong University, and "Huazhong Unisity of China, versity of Science and Technology
We introduce a speaker in the conference, or When We touch on our research work in our presentatlon, We may mentlon What We done and what have been published. Hence the Chinese concept of "
yan cheng LO"(literally denoting "scientific research achievements,).
achie, 'ernents, often connote a sense of great work. ln the
However, usual sense, what we refer to is actually research findings or publications 0 「 research findings. lfwe say that the student participant or a cub scholar produces his "scientific research achievements, to the conference, it may sound high-flown.
Also we need to know that "welcome" followed by the preposition to, means "方, ' like in the expressions "Welcome to Kunmmg or "Welcome to any questions after the presentation. If it is followed by the sign of infinitive "to", like in the statement that "You are welcome to ask any questlons after the presentation " the word connotes permission (Me "m · 标紀 ' CO ／在@住紀
五 0 "0) rather than "huan ymg in the Chinese sense. If you do want to use a verb to express "柘 ta ytng, you may have to change the word and make it into somethmg like "You are cordially invited to attend the conference.
##2.5 Paper Sessions, The Occasion of Paper Presentation
Presentation of papers or paper session occupies the rnost important part of the international academic conference. Sch01ars are required to present thelr research findings, often in the form of an acadermc paper, to the audience in the Conference. Submiss10n and review the paper` },

        { pdf: 195, print: 187, content:
`Part II Intemultural Cnrnrnur11( ation andlntemational Conference 187
可 paper abstract were completed before the conference so that the selected papers to be presented are usually high quality. Still, attention must be paid that oral presentation is quite different from the wntten version of the paper. Moreover, due to the differences in patterns of thought, which may have the cultural origin, organization the ideas may vary from paper to paper because of the differences in subjects or disciplines. Generally, of science and technology are more akin to the generally accepted nonn in the global context, while those of li -beral arts or social science may be culturally specific so as to carry a strong sense of the trace of traditional thinking. ln other words, some papers are organized in the pattern of thoughts of the ongmal culture.
Considering some of the English papers by Chinese scholars, this is an obvious tendency. It seems that such kind of papers start with more preliminary remarks or statements or the alleged background information, which often occupy a quite large space of the paper. The thesis statement is unclear or put forward quite late, and the major points seem to hide deep inside the paper. ln ral presentation, the speaker follows the example the wrrtten form 可 the usual way of speech, saying things unimportant all the time at the beginning. When they find time is being used up, they hasten to the major points and jump to the conclusion. This inevitably reduces the effectiveness of the presentation. of course, we may not make a Judgment on such speeches or papers in terms of "right" or wrong good " or "bad". But at least it is ineffective. ln order to rmprove the effectiveness of the presentation and to impress the audience, you have to readjust the pattern of thoughts to reorganize your ideas in the generally accepted way in English context.
Before suggesuons are made to the improvement of the effectiveness in oral presentation, let, s lOOk at a case of intercultural talk between a
Chinese and an American businessman and try to figure out what's wrong` },

        { pdf: 196, print: 188, content:
`with the verbal communication. Though it is in the situation of a business talk, the happening may be of significance to the Chinese scholars who are going to communicate Wlth people of other countnes in English.
case is given by Ron Scollon (2) 1):
Mr. 0 ""Mr 蕷小 on have "conversation.
Mr. 小"has "丿 oyed 小 conversation and when 彷 0 '
are ready 忉 part 辰 says Mr. that 0. really should together have lunch sometime. Mr. says he would ",. 4 a few weeks Mr. 彬. begms @司 that Mr. Richardson 方""rather 心""e because has
“0 和“，，沅五。握 h 平“重 c time and place (Scollon 2 1, 6).
What happened? It seems that Mr. Richardson did not keep his pronuse. This interpretaUon may be true, but another Interpretation is equally reasonable in terms of the cultural variances in discourse pattern between the Chinese and the American businessmen. As Scollon (2001) holds that,
The pattern d 这"而 important i ' untLI nearer the end the conversation "found East 」, discourse,
司庇五 has led Mr. 0 i 砝彷 mention 矽而方
辰 r sometime the end the CO 硯 ℃ 吓 a 五 0' <厶 some importance Mr. Richardson. 方 e "/>"Mr.
""辰 believes Mr. Richardson 这, e 五 0 狲 I) '
左而"沅沅五 0 握忉"朊 Mr. Richardson,."the other
,方 made 这 mentzon 方" g lunch e "sometime the end the com"5耐柄丑 because little major
,亟""巳 For him does not 5 ". any more than that e e his conversation 脚五 Mr. 彬 0 "这 not a 平"` },

        { pdf: 197, print: 189, content:
`Part II Intercultural Communieation International Academic ümference 189 fic 而沅五 0 ", but 丿 t co """五 on way Q /, p 五"脚让 h good el toward the other (Scollon 2 儲月, 6).
So the problem comes not from a person s personality but from the dlfference in discourse pattern which is culturally different. Suppose
Mr. Richardson meant seriously to invite Mr. Wong to lunch, he would then suggest a proper time, that day or tomorrow, since he gave the proposal. Then their conversation would go on with the settlement of an exact time. If not, that alleged suggesuon is nothing. Or in the American way, if Mr. Wong really enjoyed a lunch Wlth Mr. Richardson, he would ask for the exact time even Mr. Richardson did not mention it. ln that sense, their conversation would go on and the result would be different. However, each person, s pattern of thoughts has decided their way of speech and they could not have thought of the nunute difference in their language even if they both speak English.
Scollon (2m1) comments that, generally,
1 "5 speaker E 五访紀"小 expect "discourse, e.
訂砀 ' c 尚 5 "with £ 记 r i the 5 a main 前 so that other s. ' my react and 5."
5 辰 can 淝 / 叩 arguments, 0 · are ""小
X (comment, main i,""0 "suggested)
because of
Y @叩泌,旆 ro ' tnd,""ot 巧)(Scollon 2 (1 1 一 2)
ln Chinese way of thinking, this goes like "zhi 5 "尹.一 shL,
脚 ei", Western speakers of English tend to get to the point at the,, ery begmning and put the less important information behind. Accordingly, traditional Chinese way of discourse pattern often goes like "yin wei. ·
SIIO "have reasons, eXCtlSeS or Other less lmportant information` },

        { pdf: 198, print: 190, content:
`at the very beginning of the discourse, and then proceed on gradually until the discourse comes to the cli max, We postpone the maJor points
SO a.S not to appear obtrusive.
ln the intercultural context,订 we hope our idea to be well understOOd, it is advised to reorganize our discourse and highli ght the maJor points first. That, s why the audience will expect the thesis statement of the presentation as early as possible. Overall, it is recommended that we get to the maJor points first, State clearly our objective, approaches and the findings of the research, and draw a conclusion to show our stand "idea. That will help us to grasp the audience. lfthey are really interested in our presentation, they will come back to us later on to exchange ideas or to ask for the paper. Or they will pay special attention to the paper in the conference proceedings.
2 · 6 Question & Answer Session
Question & Answer Session comes immediately after the oral presentation. Suppose you are the presenter and you are asked some questions, listen carefully to get the question and give the answer clearly and concisely, and being polite is always important.
After the question is put forward, it is usually the good manner to say Thank you for your question ' before you make the reply. If the question is not clear or you dO not understand it, you say Excuse me,
I didn, t catch your question. Would you say it again? After you finish your answer, you may say "I hope I have answered your question.
' Did I answer your question? " or ' I hope I am making sense to you.
Or you may Just stop. Your pause and eye contact W111 show that you have finished the answer. If you cannot answer the question for whatever reasons, you may say directly that "l'm afraid I know little about the question you asked. Sorry.` },

        { pdf: 199, print: 191, content:
`Part II Intercultural Cornrnurucation Intemational Academic (茈"191
When you want to ask a question, pay attention to the way you put forward the question, and being polite is a 卜 0, ℃ 吖 important. Sometimes if there is a large audience and you want to catch the presenters attenUon, you rmse your hand and say "Excuse me · Can I have a quesuon? " You may also use such patterns as "I am wondenng if you could address whether.,
Or · or "Could you gwe us a little more insight into. ·,?" We have many examples of such kind in the Unit of Question & Answer Session" in this textbook.
Meanwhile, a warning has to be given here that you may make some comments on the presentation before you produce the question, but you should not "blame" the presenter for presenting you nothing substantial" (even though sometimes that is the case). Being friendly and polite comes first in the intercultural commumcation. You may share your ideas with the presenter or start further discussions later.
##2.7 Panel Session
The panel session is usually more informal and the atmosphere is intimate and friendly. People at this time may not 100k as senous as in the lecture theater. They take turn as both speaker and listener, introducing their papers and making comments on the presentations of others. They may agree or disagree Wlth each other. They may even argue. ln this situation, it is lmportant to dO well in topic management and turn-taking.
When we talk with each other, we need to "coordinate our turntaking which means "who speaks when and for how long.
and turns must be managed sequentially in conversations on a moment-bymoment basis"(Gudykunst 1997, 2 ％). ln such discussion and exchange of ideas, both the speaker and the listener are responsible for the management of the talks. Meanwhile, the ways that "we take turns and` },

        { pdf: 200, print: 192, content:
`manage topics in conversations differ across cultures"(Gudykunst 1997
207). Therefore, the panel session of the international conference is the conversations between or among people across cultures. ln this sense, management of topics and turn-taking is lmportant. lt 这 recommended that the ping pong style " of talk be applied in the situauon of discussion. ln other words, the speaker starts his topic concisely. 'lhen he stops and switches the floor to another person who either makes some comments or goes with his own talk. NO one IS expected to dominate the talk all the t ime. Proper turn-taking in the conversation will promote the relationship between or among the panicipants.
2 · 8 Compliments
Compliments are intended to promote interpersonal relations. Response to the compliments IS positlve, and then the entire effect is POSluve. Culture may influence the way people interpret and respond № compliments.
Sometimes it is hard to deal with compliments. If you refuse, that means you disagree with the person whO prmse you and you accept that you are not excellent. Meanwhile, the person whO makes compliments on you W111 feel awkward or lose faee. If you accept it, it seems that you are not modest. ln Bntain as, vell as in N01th America, people turn
№ accept compliments. While in China, traditionally we tend to deny such compliments to show that we modest and humble (despite the fact that many of the younger Chinese generation begin to accept compliments more than the elder generation (O),
Suppose you have Just gwen a presentation in the conference, which, you feel, went well. As you are leaving, one the participants comes over to you, saymg:` },

        { pdf: 201, print: 193, content:
`Part II Intercultural Cornmurucation Intemational Academic (%nference 193
That was great, Zhang. Your talk was really interesting.
Here are several answers. Which do you prefer?
、 4n 嶺“r 1：
er 2:
, 4nswer 3:
Answer 4:
, 4n "5:
Answer 1
丆方在“烁．“、 e a 五 on “' 司 / e 咀忉仇
/ ou 新 1 ""myself
No. are 尹 / "me•
No,"· 九 was no
肠 a"烁,(Speneer-Oatey 2 目 7)
suggests that you accept his compliments, you are confident with yourself, and meanwhile you never forget to make compliments to others ln return.
Answer 2 implies that you accept his compliments, you are confident with yourself and meanwhile you forget to make compliments to others in return. Moreover, you seem to be self-conceited.
Answer 3 indicates that you dO not accept his compliments, you are not confident with yourself, and meanwhile you seem to be overmodest.
Answer 4 Connotes a sense of self-denial. It seems that you are diffident. Howe, rer, in your culture, that may be aeceptable for it proves that you are 50 modest.
Answer 5 shows that you ac ℃ ept his compliments, you are confident with yourself but your manner seems to be casual and you forget you are in a dialogue which must be responded likewise.
With these interpretations, it is not difficult for you to make a choice. Actually, m the English -speaking context of international academic conference, Answer 1 app <, ars to be the best choice.
##2.9 Further Cooperation after the Conference
Here once again the topic discourse pattern and organization is brought up. When you have been with each for days, enJOYing the pre-` },

        { pdf: 202, print: 194, content:
`sentation, parücipatmg in the panel sesslon, exehanging ideas and having small talks at the dining table, you seem to become well "quainted with each other, or at least with some of the paflicipants. At this time, it is likely that a suggestion is made for further research cooperation. NO matter who puts forward the proposal, it is a good idea. To be polite, you may respond positively by saying ' That, s really a good idea. Let, s dO it, However, if you mean senously and dO want to Start a cooperauve research in the near ftlture, please dO not forget to make it specific and keep down the way mutual corresponderu, e or contact.
Both of you are expected to exchange ideas about the concrete plan for the cooperation in ume. If any sidf, of you keeps silent, the problematic case of Mr. Wong and Mr. mchardson will come out again. You or he will be blamed as being msincere ',"distrustful' and ' dishonest
Then we will have another case about cross-cultural discourse pattern!
##References
##1. Althen, Gary, Amanda & Doran, Susan J. Szmania.American
:」丿 Foreigners 沅 ' U,"Second 辰 tion. Intercultural Press 2
- 2. Borden, George A. C ' "詞 0 "五 0:山<, 4 ro "方 Unders ' Intercultural Communication. Prentice Hall, Englewood
Cliffs, New Jersey 07632, 199L
##3. Gudykunst, William B., Young Yun Klrn. Communicating uuth
& ra ' e:"Approach Intercultural Commumcation. lhird Edition. the
McGraw-HiII Compames, Inc., 1 7
4, Lusting, Myron W. & Koester, Jolene. / "c 动" Competence:
7 "50m 冠 C. m ""庇"across Cultures. 5th Edition. Shanghai Foreign
Language Education Press, Shangha1 以 7
##5. Me "m.标 Col 禳 e D ' 0., Me1Tiam-We, bster, 2o00` },

        { pdf: 203, print: 195, content:
`Put ll Intercultural Cornmunwati <訕扁 err 遢 t 而 Academic (ü»nference 195 (CD-ROM)
##6. Procter, PauI and Others. Longman 刀黿 ' zary Contemporary
E ' 标五, Longman Group Ltd., Harlow and London, 197 &
- 7. Porter, Richard E. & Samovar, Larry A., 4p 0 "而 g Intercultural Comm "记", Intercultural Communication: 」 Reader. 4 山 Edition. ed, by Richard E. Porter, Inrry A. Samovar, Wadsworth
Publishing Company, Belmont, Califorma, 1985.
& Singer, MarshalI R,而讪"a ／ Communication:, 4 Perceptual
, 4 / 屮 ro Prentice Hall Inc.
Englewood Cliffs, New Jersey
07632, 1987.
9, Scollon, Ron, Suzanne Wong Scollon. / 屉 e "湿 ra / Communica-
五0@, 4 刀这 co "", 4 ro "朊 Second Edition. BlackwelI Publishers Inc.
350 Main Street, Malden, Massachusetts 02148, USA, 2 (l.
##10. Spencer-Oatey, Helen (ed,), S ea C 司忉 ra / Continuum
International Publishing Group, 2 仪. Google Play, on-line version.
ll. Wood, Julia T., Reich, Nina M. Gendered Speech Communitles; Andersen, Peter A. ln Different Dimensions: Nonverbal Commumcation and Culture. Intercultural Commumcation:, 4 Reader. 10th Edition. ed. by larry A. Samovar & Richard E. Porter, Shanghai Foreign
Language Education Press, Shanghai, 2 開 7.
12 Mish, Fredelic C 标以 n Neu,佐 ' ncttonary. Memarn-
Webster Inc., Publishers Springfield, Massachusetts, USA, 1 3.
13 ．关世杰：《跨文化交流学一一提高涉外交流能力的学问》，
北京：北京大学出版社， 1995
14 ．郁龙余编：《中西文化异同论》，北京：生活 · 读书 · 新知
三联书店出版， 1989。
巧.有道词典 http: //dict. youdao. com/` }
      ]
    },

    {
      id: "p3-u2",
      part: "Part III",
      unit: "Unit 2",
      title_en: "Letter of Invitation",
      title_cn: "邀请函",
      print_start: 196,
      pages: [
        { pdf: 204, print: 196, content:
`#第三部分　范文中文译文与练习答案
#Unit 2 Letter of Invitation
##Sample 1 参考译文
中国优秀高中联盟国际教育论坛（2 8 年 · 北京）
邀请函
尊敬的阁下：
2 開 8 年中国优秀高中联盟国际教育论坛将于 12 月 14 日在北
京召开。借此机会，我们邀请阁下参会。
2008 年中国优秀高中联盟国际教育论坛为大家提供一个国际
交流平台，并得到了中国国家留学基金管理委员会留学预科学院和
国际教育基金会的大力支持。联盟面向中国所有的优秀高中，拥有
先进的国际教育资源，致力于中国的基础教育。迄今为止，联盟共
有 400 多所顶尖重点高中作为其会员，活跃在国际交流的舞台上。
这些学校一直在坚持不懈地努力着，不断推进中国优秀高中和世界
先进的教育资源之间的交流、协调与合作。
与此同时，联盟将提供一个交流平台，以便国际知名教育机构
能够更好地了解中国基础教育发展的水平、特点和现状，并根据实
* Unit 1 翻译略` },

        { pdf: 205, print: 197, content:
`Part III Chinese Translation 鬲 the Sample Texts and Key to Exercise 四 7
际情况选择合格的中国学生到海外学习深造。
这次会议的目的还在于，通过一系列的辩论和交流活动，向国
内介绍国际先进教育资源以及成熟的专门理论、方法和经验，促进
相关的研究和实践，进一步培养中国学生的责任感、创新能力、创
造力和参与国际交流的能力。
中国优秀高中联盟国际教育论坛针对学术活动，强调理论与实
践之间的整合，并致力于推动中国的高中和海外高等院校之间的交
流。我们计划每年组织一次年会，将年会论坛建成一个平台，促进
高中教师和教育研究者之间的互动与交流，丰富和发展教育国际化
的理论与实践。
2m8 年 10 月 12 日
中国优秀高中联盟国际教育论坛组委会
##Sample 2 参考译文
诚邀参加哈佛亚洲与国际关系学术年会
谨代表哈佛亚洲与国际关系协会，诚邀阁下及学生参加每年夏
季在亚洲举行的会议，让我们共同努力，进一步推进从全球性的角
度对业洲和国际关系的理解
哈佛亚洲与国际关系协会（简称 HPAIR) 是哈佛大学的学生
和教师共同创建的一个组织，提供持续的学术计划，搭建交流的平
，推进有关亚太地区最重要的经济、政治和社会问题的探讨。哈
佛亚洲与国际关系协会的国际会议已经成为每年哈佛大学在亚洲举
办的规模最大的活动，也是哈佛大学在亚太地区举办的规模最大的
学生年会，吸引了各界享有盛名的演讲嘉宾和未来的领导者，是哈
佛的学生了解亚洲的前哨。
本度年会由复旦大学共同主办，将于 2 佣 5 年 8 月 22 一 25 日在
日本东京举行，会议主题为：“未来亚洲：现存的挑战和涌现的现` },

        { pdf: 206, print: 198, content:
`实 "。我们的研讨会将集中探讨以下 6 个方面的问题：
一一利益、制度和社会认同：了解东亚的安全问题
一一一诚信：诚信在公民社会中的作用和亚洲的法治
一一高等教育和积极的公民身份：东亚大学的公共角色
一一一．全球卫生保健系统：努力实现更高的健康标准
一一重塑散居：通过人类的迁移探索全球化
一，一可视化亚洲：全球文化与当代“亚洲”艺术中的民族
叙事
本次哈佛亚洲与国际关系学术年会的邀请扩大至所有高校学
生，请大家通过以下网站提出参会申请： http： //www. hpair• org/o
我们期待着您的参与！
##Exercises
- l. Directions: Fill in the blanks in English based on the information
pven in the brackets.
(DWe cordlally invite you to attend
@The conference will organized by ($)financially supported by The National Science Foundation of Chi-
@The theme for this conference (boriginal high quality papers related to this theme (6)1he conference proceedings
ØLecture Notes Series
OAII submissions
@be thoroughly peer-reviewed by experts in the field osenously considered for publication
- 2. Directions: Translate the following into English.
Invitation to the Third International Interchsciplinary Conference on` },

        { pdf: 207, print: 199, content:
`Part III Chinese Translation the Sample Texts and Key to Exercise 四 9
China Studies:
Cross-CulturaI Exchanges between East and West
Dear colleagues,
'lhe l)epartment Chinese Literature and Culture and the l)epaflment of HIStory of the University of Jianghai will jointly organize the ' 伟 i 司 lnternational Interdisciplinary Conference on Cluna Studies: Cmss-CulturaI
Exchanges between East and West" at Haitian Ho 同 of Jiangha1 tJmversity, fmrn 2 t04 September,川 12, to mark the 30th anruvelsary of the establishment of the Chinese Association of Foreign Literature.
Eight experts and scholars of China studies from different parts of the world, such as USA, United Kingdom, France, Japan, and Russia, will meet to discuss the following topics: China 而 Foreign 石 r "
ture; Chinese People 而石 ra 忉 re and Film & Video; 丆 m & Video ' 卜
"and Translation. Aside from the keynote speeches, there will also be a session on "Amy Tan's 7, Joy "C /" organized by an international research panel.
The Conference IS a significant event and will discuss topics in numerous academic subjects, which reflects the diversity of the researches in relation 蜘 China studies, covermg, for example, the fields of literature, art, history, anthropology, film & video studies, sociology, poscience, linguistlcs, and communication studies.
You are cordially invited to attend the "Third International Interdisciplinary Conference on China Studies: Cross-CulturaI Exchanges between East and West". The conference will conducted mamly in Chinese, with some panels in English
For further information, please visit the website of Chinese Association of Foreign Llterature` },

        { pdf: 208, print: 200, content:
`orgamnng Committee
Third International Interdisciplinary Conference on China Studies:
Cross-CulturaI Exchanges between East and West
3, Writing (Omitted)
##Supplementary Reading
##参考译文
诚邀参加第三届国际鼠类生物学及治理大会
各位同仁：
自 1998 年 10 月第一届国际鼠类生物学及治理大会（简称
ICRBM）在北京成功召开以来，该会议已引起全球鼠类研究众多
领域内专家的广泛关注。 2m3 年 2 月，第二届国际鼠类生物学及
治理大会在堪培拉举办，这次大会得益于第一届大会的成功举办。
来自 35 个国家的 145 名代表出席了会议。国际鼠类生物学及治理
大会已经成为各国科学家进行学术交流与相互合作的重要平台。
就种群数量、种群密度、分布范围以及对人类的影响而言，鼠
类是最为典型的哺乳动物。进人新世纪，由于人类活动的频繁干预
以及气候的异常变化，人类正面临着更大的挑战。既要应对鼠类造
成的影响，又要对鼠类进行保护。鼠类主要生活在农用地、林地、
郊区、城区和自然景观地带，治理鼠类时，对鼠类的生态和行为进
行深人了解已显得尤为重要。自从第二届国际鼠类生物学及治理大
会召开以来，鼠类生物学及治理研究工作、对鼠类分类系统学的掌
握都取得了可喜的进展。尤其是对鼠类与疾病、鼠类与人共患病等
问题的研究越来越多。
特此告知各位同仁，第三届国际鼠类生物学及治理大会将于
2 開 6 年 8 月 28 日至 9 月 1 日在越南河内召开此次会议的一个重
要内容就是 8 名受邀专家在全体会议上作报告查尔斯 · 克莱布斯` },

        { pdf: 209, print: 201, content:
`Part III Chinese Translation 司. the Sample Texts and Key to Exercise 201
教授将对一周内所进行的论文交流做总结发言，然后大会宣告闭
幕。当然，本次大会还有令人振奋的座谈会、海报宣传，以及研讨
会。大会将为进一步促进鼠类生物学和鼠类治理的协同作用提供良
好的契机此外，可喜的是，本次大会将在风光旖旎的河内举办，
该城市具有悠久、丰富多彩的历史文化
谨代表组委会，诚邀全球广大科研工作者及同仁前来参加此次
盛会
真诚的祝愿
大会副主席：张知彬教授
大会副主席：阮文术教授
2 開 5 年 12 月
第三届国际鼠类生物学及治理大会组委会
荣誉主席：查尔斯 · 克莱布斯教授
澳大利亚联邦科工组织可持续生态系统
邮政编号： 284
堪培拉首都直辖区： 2601 号
澳大利亚
邮箱地址: charles. krebs@ csiro. au` }
      ]
    },

    {
      id: "p3-u3",
      part: "Part III",
      unit: "Unit 3",
      title_en: "Acceptance of an Invitation",
      title_cn: "接受邀请",
      print_start: 202,
      pages: [
        { pdf: 210, print: 202, content:
`#Unit 3　Acceptance of an Invitation
##Sample 1 参考译文
尊敬的（收件人）：
能被邀到今年的艾滋病会议上做发言，我感到非常高兴。根据
通知， 3 月 13 日星期六上午 9 巛我将准时出席在市政大厅举行
的会议
我一直在研究关于预防艾滋病的一些新问题，希望能借此机
会，让与会人员了解我的成果。我作报告时要播放幻灯片，请为我
准备好高肘投影仪、投影机和投影屏幕。
非常感谢您为我安排食宿和旅行等事宜，非常感谢您提供的
用開美金报酬
发件人：帕特里霞．怀特
##Sample 2 参考译文
尊敬的（收件人）：
能被邀请出席 6 月 19 日星期六上午 1 1 点举行的技术年会并发
，我感到非常荣幸。会议当天，我的发言主题是“网络电话
一一通信发展的新技术 "。我将按规定 30 分钟内完成发言。在作
报告时，我需要一台高射投影仪和投影屏幕。再次感谢您给我这次
机会。会议期间，我希望能碰到许多有见解的人士。
发件人：埃米丽，艾里森
##Exercises
- l. Directions:
Fill in the blanks in English based on the information` },

        { pdf: 211, print: 203, content:
`Part III Chinese Translation of the Sample Texts and Key to Exercise 203 gwen in the brackets.
oI am honored to receive your invitation
2to be a speaker (3)I am grateful to accept your mvitation (生> in different semlnars
6regarding the subject matter oconvey my expeflise
Øuse MS PowerPoint
耵 you could provide me with
@arrangmg hotel accommodations
- 2. Directions: Translate the following into English
l'm delighted to accept your invitation for a speaker at the conference on Fnday, May 1 1, 2012 at 11:(a. m. at the Kent Center on the mam campus of the University.
For what I will be presentmg, I require a multifunctional room with an overhead pr0Jector, a screen and a lapel microphone. Also it would be ideal if you can send information about the audience, s general average education background and expenence, as I will then be able to prepare the correct technical document.
l'm presently arrangmg my travel schedule and will enuul you my exact an-ival in the Umversity two days before the conference. You will receive my call next week confinning my itinerary and to arrange reimbursement l'm looking forward to the conference.
(http: //www samplelettersworld. com/sample-letters/acceptanceletters/ 1592-accept-an-invitation-to-speak-or-perform-sample-letter-2)` },

        { pdf: 212, print: 204, content:
`- 3. Writing (Omitted)
##Supplementary Reading
##参考译文
尊敬的（收件人）：
我非常荣幸地接受您的邀请，将出席您在查尔斯顿大学举行的
研讨会并作发言。能被邀请出席会议，我感到非常高兴。
按照您提供的主题，我选择就干细胞保护作发言。我最近做了
许多关于这方面的研究，我希望在研讨会上展示我的成果
我和我的助理将于 10 月 21 日到达。 10 月 22 日上午 9 点，我
们将准时出席在该大学举行的研讨会。我用电脑储存了一些数据，
所以我需要一些设备，来连接电脑和投影仪。我知道，观众将对此
主题很感兴趣，我也很希望与他们交流。在报告之后，您能安排一
个互动交流吗？
感谢您提前所做的必要安排。我已经收到机票以及有关宾馆顷
订的细节。借此机会再次向您表示感谢我非常期待出席研讨会并
作发言。
发件人：约翰 · 怀特` }
      ]
    },

    {
      id: "p3-u4",
      part: "Part III",
      unit: "Unit 4",
      title_en: "Declining an Invitation to Speak",
      title_cn: "谢绝邀请发言",
      print_start: 205,
      pages: [
        { pdf: 213, print: 205, content:
`#Unit 4　Declining an Invitation to Speak
##Sample 1 参考译文
尊敬的（收件人）：
感谢您邀请我在 10 月份召开的年会上发言。但非常抱歉，我
不能接受您的邀请，因为我那时将在国外。
在此，我希望您可以考虑珍妮．史密斯。她也是从事干细胞研
究的专家。她刚在法国完成一个研究项目，现已回国。我相信，她
丰富的经验和渊博的学识一定能吸引听众。我相信，您的会议一定
会取得圆满成功。非常感谢您的邀请。
发件人：阿尔伯特 · 史密斯
##Sample 2 参考译文
尊敬的休斯女士：
感谢您邀请我在 1 1 月 8 日即将举行的市政工程会议上发言
但是非常遗憾，我不能接受邀请，因为那天我要出席董事会会议。
这次董事会会议的议程很重要，我不便向董事会请假。
如果您没有其他合适的人选，我建议您联系伊丽莎白“福斯多
尔。她深谙市政工程法律。在许多场合，我公司聘请她做唯一的顾
问。从我的亲身经历来看，她的报告能启发思维，准确到位。她的
号码是 583 一 7952。
我衷心祝愿会议取得圆满成功，并为不能参加会议而表示遗憾
发件人：莉莉 · 昂` },

        { pdf: 214, print: 206, content:
`##Exercises
- l. l)irections: FiII in the blanks in English based on the information
glven in the brackets.
气) so pleased to be asked
@Unfortunately
ØI would be happy to speak another time
刂 wish you the best of luck with your conference
- 2. Directions: Translate the following mto English
A Letter of Declining the Invitation
Dear Professor Samson,
Many thanks for your letter of December 29, 2011, invitmg me to attend and chmr a session of the fotthcoming Seventh Intemational Conference on World Economy and the Sustainable Development to be held in Seattle, US, from March 24 to 25, 2012.
Much to my regret, I shall not be able to honour the invitation because I have been suffenng from ill health this summer. I am firmly advised that it would be unwise to undertake any distant travel in the near future.
I feel very sorry to rmss the opponumty of meeting you and many other colleagues in the field of the World Economy and the Sustainable
De, 'elopment.
I wish the conference a complete success.
Respectfully yours, (http: //hi. baidu. com/% DO% AI% B5% B6% BO% CD% C5%
AE/blog/item/46073 a9876b 巧 6e (8c8c. html)` },

        { pdf: 215, print: 207, content:
`Part III Chinese Translation of the Sarnple Texts and Key to Exercise 207
- 3. Writing (Omitted)
##Supplementary Reading
##参考译文
尊敬的莱特曼先生：
您邀请我出席 10 月 3 日的培训会，就桌面出版系统与学员作
三场互动交流，我表示感谢。我非常乐意指导学员使用这些程序，
但我没法接受您的邀请。我的女儿在那个周末举行婚礼，她希望我
能陪她走红毯！
布鲁斯 · 克尔是我的一名助理。他经常教授这样的课程。您可以
联系他。我没有他家里的电话号码，但我知道，他在花旗银行的运算
部门工作。他非常专业。毫无疑问，他的课能让您的学生受益匪浅
衷心祝愿培训会取得圆满成功！
发件人：玛丽 · 史密斯` }
      ]
    },

    {
      id: "p3-u5",
      part: "Part III",
      unit: "Unit 5",
      title_en: "Call for Papers",
      title_cn: "征稿启事",
      print_start: 208,
      pages: [
        { pdf: 216, print: 208, content:
`#Unit 5　Call for Papers
##Sample 1 参考译文
第四届生物学与医学用语国际研讨会
新加坡南洋理工大学
20H 年 12 月 14 一巧日
征稿
生物学与医学用语国际研讨会（简称 LBM) 是每两年举办一
次的跨学科论坛，云集了生物学、化学、医学、公共医疗、信息学
领域的众多研究者，以探讨前沿语言技术。
语言，其形式多种多样，已成为呈现、表达和探索知识而普遍
使用的工具。尽管知识通过自然语言得以广泛地传播，生物学和医
学还使用一些其他的表达方式，如序列、本体、化学和数学公式、
模型语言、图形、图像等。文本挖掘和信息提取、系统建模、信息
可视化、语义索引、语义查询等相关技术对于促进生物医学研究和
保健供给至关重要。这些技术的自动化、一体化将促进人们对生物
学和医学知识的理解和探索。而所涉各种技术一直以来都面临着用
户需求较高、跨学科研究环境复杂等问题的挑战该研讨会力求提
供一个技术协作与交流的平台。
2011 年第四届生物学与医学用语国际研讨会（简称 LBM
20H）将于 12 月 14 一巧日在新加坡南洋理工大学（简称 NTU)
举办。本次会议将作为第 25 届亚太地区语言、信息和计算会议
（简称 PACLIC 25）的会前研讨会。我们将征集生物学、化学、医
学、公共医疗、药物学以及相关学科用语的各类论文。欢迎提交有
关自然语言处理、本体论工程和匹配、生物序列分析、系统建模、` },

        { pdf: 217, print: 209, content:
`Part III Chinese Translation of the Sample Texts and Key to Exercise 209
数据库系统、逻辑推理、信息可视化和图像检索的论文。今年我们
将特别征集有关保健和化学用语的论文，来反映转化医学、临床和
化学信息学最新的研究趋向
请按（但并非局限于）以．下选题投稿：
一一文本挖掘，检索和管理
一一一语义索引和查询
一，一一本体构建、映射、集成和维护
运用语言处理技术进行序列分析
．一一一数据建模和注释语言
．一一一信息集成和可视化
．一一一保健和化学用语
重要日期：
征稿日期： 20H 年 6 月 3 日
论文提交截止日期： 2011 年 9 月 3 日
招贴论文提交截止日期： 2011 年 9 月 16 日
论文和招贴论文录用通知： 2011 年 9 月 30 日
论文最终稿提交日期： 201 ] 年 10 月巧日
研讨会日期： 2011 年 12 月 14 一巧日
2011 年生物学与医学用语国际研讨会将推出多样化、高水平
的会议报告，主题发言、特邀发言、（短篇和长篇的）论文宣读，
重点突出有关保健用语和化学用语的报告、海报展示和分组讨论。
到大会上进行宣读的论文将由项目委员会进行同行评审。选出的论
文将以电子版的形式分发到每位参会者手里。同时，亚太地区语
言、信息和计算会议所录用的论文也一并分发。我们设有最佳论
文奖。
我们将把最优秀的论文出版在同行评审期刊的特刊上。我们已
选择把论文出版在以下期刊上：生物信息学和计算生物学期刊
（简称 JBCB)，该期刊以生物医学信息学为突出重点；生物医学语
义期刊（简称 JBMS），该期刊以语义资源及其运用为突出重点；` },

        { pdf: 218, print: 210, content:
`2 ] 0 国际学术会议英语与跨文化交流
计算科学与工程学报（简称 JCSE)，该期刊以计算和工程问题为突
出重点。
大会主席
金 · 帕克和王林森
项目主席
戈兰 · 南迪克和金建中
##Sample 2 参考译文
2011 年第九届澳大利亚语言技术研讨会
2011 年 12 月 1 一 2 日，澳大利亚，堪培拉
网址: http: //alta. asn. au/events/alta201 ]
澳大利亚语言技术研讨会（简称 ALTA）将于 2011 年 12 月 [
日星期四和 12 月 2 日星期五在位于堪培拉的澳大利亚国让大学
（简称 ANU) 举办。此次盛会将成为澳大利亚语言技术研讨会近期
以来的第九届定期举行的年度盛会，也将成为 90 年代早期以来各
种年度研讨会的延续。
澳大利亚语言技术研讨会目标如下：
一一整合发展中的澳大利亚和新西兰的语言技术（简称 LT)
行业，促进二者间的相互合作；
一一促进该行业内部的协调与合作，鼓励与国际同行之间进行
广泛的合作；
一一一促进学界与业界的相互合作，鼓励发表研究成果；
一一一为学生和青年研究者提供一个展现研究成果的平台；
一一一鼓励对在研项目和新兴研究进行研讨；
一一为人工智能领域进一步了解当地语言技术研究提供平台；` },

        { pdf: 219, print: 211, content:
`Part III Chinese Translation of the Sample Texts and Key to Exercise 21 ]
最后，
一一一扩大语言技术研究在澳大利亚、新西兰和海外的知名度
我们征集研究自然语言处理各个方面的论文，论文要内容新
颖，且未经出版：，论文主题主要包括（但也不一定就局限在）以
下方面：
语音学、形态学、句法、语义学、语用学和语篇
一一．语言理解和生成
口语和书面语的解释
自然语言的生成
语言、语言的运算模式和心理模式
一一基于自然语言处理的信息提取和检索
基于语料的统计语言建模
一一机器翻译和翻译辅助
欢迎大家积极提交论文，内容与语言技术委员会规定的主题相
关即可。鼓励提交有关语言技术的实际应用和跨学科研究的论文，
以进一步扩大研究视阈。欢迎业界同仁提交论文。
论文格式
所有论文须遵循 ACL 的撰写格式，并使用 PDF 文档格式。
长篇论文请使用两栏的 ACL 文字排版方式，包括参考书目页
码在内，总页码不能超过八页。录用论文将在研讨会上进行宣读。
短篇论文请使用两栏的 ACL 文字排版方式，包括参考书目页
码在内，总页码不能超过四页。录用论文将会在研讨会上以招贴形
式展出。
请注意，长篇论文收作短篇论文时，须由项目委员会批准。在
论文集中，长篇论文将有别于短篇论文。
论文将采用双盲评审模式。因此，（送审）论文不能包含作者
的姓名以及工作单位。另外，应避免文中出现涉及身份，诸如` },

        { pdf: 220, print: 212, content:
`· ．（1991 年，史密斯）”此类的信息。但是可以
“之前我们提到，
引用“史密斯之前提到一 · 0991 年）”
强烈推荐使用 ACL 文档格式，或使用今年大会上专用的
Microsoft word 文档格式。研讨会网站刊有文档格式和论文样本。
对于未按上述要求提交的论文，包括字体和页面设置未按要求的，
我们保留退稿权
到论文提交截止日期时，如果您的 PDF 文档文件无法打印，
我们将不对论文进行评审，并退稿。因此，由于版面设置较为复
杂，请提前提交论文终稿，以便我们能够确认论文是否能够进行打
印。研讨会网站将刊登相关论文提交细则。若有疑问，请联系有关
负责人。
论文集
完整的论文集有国际标准刊号，将刊登在计算语言协会网站的
文集网站以及澳大利亚语言技术研讨会网站上。
重要日期：
论文提交截止日期： 2011 年 9 月 19 日星期一
论文录用或拒稿答复日期： 2011 年 10 月 10 日星期一
论文最终稿： 2011 年 10 月 31 日星期一
澳大利亚语言技术研讨会举办时间： 2011 年 12 月 1 日星期四
和 12 月 2 日星期五
研讨会主席
大卫 · 马丁内兹（澳大利亚国家信息通讯技术中心维多利亚
研究室与墨尔本大学）
迭戈 · 毛拉（麦考瑞大学）
项目委员会
提摩太 · 鲍德温（墨尔本大学）
史蒂文 · 博德（墨尔本大学）
西蒙．日沃茨（谷歌，悉尼）` },

        { pdf: 221, print: 213, content:
`Par1 III Chinese Translation the Sample Texts and Key to Exercise 213
当地研讨会组织者
汉娜 · 索妮门（澳大利业国家信息通讯技术中心堪培拉研究
室与澳大利亚国立大学）
班婷 · 瑞（澳大利亚国家信息通讯技术中心堪培拉研究室与
澳大利亚国立大学）
澳大利亚语言技术研讨会由澳大利亚语言技术协会组织召开。
若有建议或疑问，请联系研讨会组委，网址： workshop @ alta. au
##Exercises
- 1. Directions: Fill in the blanks in English based on the information
grven in the brackets.
(Dprovides an international forum for
@exchange and share oconsist of
@annual conference (5)be collocated with
6be included
Osubmit their original papers ($)FMher details
- 2. Directions: Translate the following into English.
AnnuaI Summit on Business and EntrepreneunaI Studies (ASBES)
a tradiuonal conference for scholars of business and entrepreneurial studies, welcoming participants from around the world, with broad and diverse research interests. Among the many topics related to business and entrepreneurship, the special focus of ASBES this year is on Social
Responsibility, ProfessionaI Ethics and Management. lssues of ethical` },

        { pdf: 222, print: 214, content:
`business, social and environrnental sustainability and cohesion of organizations, fair remuneration of workers and management have become promment during the recent financial crises.
The aim of the conference is 10 present and discuss research findings that contribute to the sharmg of new theoretical, methodologwal and empirical knowledge, and to better understanding 鬲 business and entrepreneurship practices, in particular in the field of social responsibility and ethics in business. Papers related to issues of intercultural dialogue and business m multicultural societies is thus especially welcome.
Contributions from vanous areas of business and entrepreneurship are welcome; also scholars in other disciplines offenng new pelspecuves on the conference theme are encouraged to parUcipate. The conference will focus on the followmg topics:
- l. Busmess law & Ethics
- 2. Entrepreneurship
- 3. Business research methods & Teachmg-related issues
- 4. Growth Innovation
- 5. Auditing and corporate governance
Any other related areas pertaining to any issue which is related to
Business and Entrepreneurship aspects such as legal, finance accounting, hurnan resource, banking, information technology and religious perspectmves.
http: //conference. researchbib. com/?eventid = 11406` },

        { pdf: 223, print: 215, content:
`Part III Chinese Translation 鬲 the Sample Texts and Key 怖 Exercise 2 巧
- 3. Writing (Omitted)
##Supplementary Reading
##参考译文
投稿人须知：
- 1. 论文总长不超过 5 字，请使用 A4 纸张打印，单倍行间
距。提交一式二份，首页信息仅包括论文标题，作者姓名、职务、
居住地址、电话号码或传真、电子邮件地址
2 ．摘要：每篇论文摘要字数为巧 0 一 2 開字
3 ．关键词：建议使用 5 一 6 个关键词
4 ．引言：在文献综述及研究目标后，需对研究问题进行简短
的介绍，对实验材料、年限、地点等信息进行描述，并简要描述数
据收集方法。
5 ．研究结果与讨论内容：此部分应集中在如何完成引言中所
述的目标上。以表格、数据、图片形式展示研究成果
6 ．结论性意见：实现论文写作目标。
7 ．致谢（如果需要）。
& 末尾注释：注释需用序号在文中标注出来，论文末尾需附
上详细的参考文献。
9，请严格遵从以下参考模式：
0）以期刊形式发表：包括作者姓氏、名字首字母，出版日
期，论文题目、期刊名（斜体）、刊号以及页码；
（2）以书籍形式发表：包括作者姓氏、名字首字母，出版日
期，书名（斜体）、出版人、出版地以及页码；
（3）以编著书籍形式发表：包括作者姓氏、名字首字母，出
版日期，编辑者姓名，书名（斜体），出版人、出版地以及页码；
（4）以机构或政府报道形式出版：请标明机构或政府部门名` },

        { pdf: 224, print: 216, content:
`2 ] 6 国际学术会议英语与跨文化交流
称，出版日期，出版地；
（5）以网络文章形式发表：包括作者姓氏、名字首字母，出
版日期，论文题目，网址以及检索日期。
10 ．全文请使用英式英语的拼写格式。
ll. 英文论文请使用 Times New Roman 字体， 1 1 号字，单倍行
间距。
12 ．表格和图表应居中。
13 ．请勿在表格和图表中使用同一数据。
14 ．每篇论文后须声明文章属作者原作，未公开发表过。
巧．每篇论文都将进行多次审稿。编辑社有权对文本进行必要
的修改，并向每位作者免费赠送刊登所写文章的期刊。
评审方法：每篇论文将由同行评审委员会的两名成员进行评
审。评审标准为与时代的相关性，对知识的贡献，条理清晰，逻辑
严密，较强的英文写作能力。对于主题不符合要求、格式未按要求
的论文，编辑有权退稿。
版权：所录用的论文版权将自动转让给编辑。编委会对文中内
容不负任何责任，将由作者自行承担。
论文刊印费用：由于刊印费用较高，每位作者将支付每篇论文
5 開卢比的刊印费用。
有疑问者请将信息发至邮箱： ijhindial 1@ gmail. com。
或拨打电话： 09856321179
退稿多为以下原因：
- 1. 论文内容不够充实，实验不完善，对新知识以及知识理解
帮助甚微；
2 ．数据统计存在缺陷或数据分析无法支撑所得论据；
3 ．撰写能力较差，未提供参考书目以及作者的详细信息，或
论文内容令人费解。
每位作者需严格按照上述须知进行投稿。` }
      ]
    },

    {
      id: "p3-u6",
      part: "Part III",
      unit: "Unit 6",
      title_en: "Acceptance of a Paper or an Abstract",
      title_cn: "录用稿件",
      print_start: 217,
      pages: [
        { pdf: 225, print: 217, content:
`#Unit 6　Acceptance of a Paper or an Abstract
#Unit 6 Acceptance of a Paper an Abstract
##Sample 1 参考译文
国际计算机模拟协会
2）年计算机性能评估与电信系统会议研讨会
2 年 7 月 16 一 20 日
斯坦利公园的海岸广场酒店
加拿大，大不列颠哥伦比业省，温哥华
作者须知
请仔细阅读以下材料，材料中包含未在其他国际汁算机模拟协
会作者须知里出现过的信息。
有关 2 （程序信息资源共建共享的咨询与回复，请直接反馈
至计算机模拟协会办公室。注册和会议信息请查看作者须知中的注
册表格，或也可联系计算机模拟协会办公室。
国际计算机模拟协会办公室地址：龙森法院 4838 号，大广场，
圣地亚哥，首都航空公司 92111 一 18
联系方式：（858） 277 一 3888；传真：（858） 277 一 3930；电
子邮箱地址: E-mail: scs@ scs. orgo
截止日期： 2 仪年 5 月 30 日
尊敬的作者：
很高兴通知您，您提交的论文已被接收作为会议宣读论文，而
且还将被收人大会论文集。
论文录用的前提条件是：须按照规定日期提交论文终稿，每篇
论文至少有一位作者付费登记，论文终稿通过最后的评审` },

        { pdf: 226, print: 218, content:
`论文出版前，若需所在单位、公司或政府机构的说明或批准，
请确保相关工作在规定日期内完成，否则我们无法将您的论文收人
大会论文集。如果论文未在规定期限内办完相关审批手续，您可以
和大会主席协商，看看能否将其作为延期论文提交。但须注意：如
果到了论文终稿截止日期，我们仍未收到录用费（或者支付订
单），论文就不能出版。
所附作者须知包含有关在会议论文集上发表文章的信息，将在
会场上发给大家。请按须知要求提交论文：
页码限制：录用的长篇论文页码最多为 8 页，不收取额外费
用。录用的短篇论文页码最多为 5 页，不收取额外费用。额外的页
码按每页 40 美元收费。请参照附件的注册文件了解相关详情。
多篇论文：如果到会宣读的论文不止一份，请参考附件内作者
登记表上的详细说明。附件中还有一些有关论文宣读的指南。请注
意大会上可使用的试听设备列表。如果你需使用其他设备，请提前
告知我们，并自行承担费用。我们将尽力满足您的需要，且不收取
额外费用。如有特殊要求，需自行承担费用。
提交终稿时需附上以下材料．
文稿
文稿须按照大会主席要求的格式打印在高级书写纸上。超过规
定页码（短篇论文 5 页，长篇论文 8 页）的文稿，多出的页码按
每页 40 美元收费。
复印件
原件之外还须提交 4 份复印件。若未带复印件，将收取每页 2
美元的复印费。例如，您的文稿为 6 页， 4 份复印件就是 48 美元
注册登记与付费
论文收人大会论文集出版需要交费。若论文和费用分别处理，
请在注册表格中备注此类信息。提前支付的注册费用与论文出版有
关，不退款，但可以转给指定为你到会宣读论文之人。论文一经收
录出版，作者需支付全额注册费` },

        { pdf: 227, print: 219, content:
`Part III Chinese Translation of the Sample Texts and Key to Exercise 219
明信片
请在所附明信片上注明您的通信地址论文收到后，明信片寄
还给你表示确认
版权转让形式
录用论文的前提条件是，每一位作者同意将版权转让到模拟委
员会，计算机模拟国际协会就隶属该委员会。请注意，您在表格上
签字后，代表您同意将论文转交给计算机模拟国际协会出版。鉴于
上述原因，如果你的材料已经在公共领域使用，例如涉及在政府支
持下所从事的工作，这也没关系。个人或所在单位可保留论文的部
分或全部重复使用权，但协会将严格控制对论文的商业性使用
所需特殊试听设备
请确保您的论文中包含相关信息。每间会议室都配有一个高射
投影仪或者一个 35 毫米的投影仪，后者的使用须提前申清，均可
免费使用。其他特殊设备要求需支付租用费需使用笔记本电脑作
报告的，超级视频图形阵列（SVGA）投影系统每次的租用费为
1 開美元。设备有限，“先到者优先”。大会期间，除以上设备外，
若未提前告知或支付相关费用，我们无法确保所需特殊设备都能得
到满足。会上使用任何设备均需到登记处交费。
作者简介
提交一份个人简介给你所在会场的负责人，便于向听众介绍你
的情况。
单独打印的订单
如果需要就单独打印订单（自愿）。
所有材料都需包含计算机模拟国际协会论文编号，如 26 開，
9820。对于未编号的论文，协会概不负责。为实际提交的文稿标注
编号时，请在每一页的背面上也写上编号。
感谢您的参与和配合，希望这次参会能让您在专业上有较大的
收获。若对会议或论文提交仍有不清楚之处，请打电话或写信与我
们联系。` },

        { pdf: 228, print: 220, content:
`##Sample 2 参考译文
尊敬的马基 · 阿卡沙 · 巴比克阁下：
2011 年生物信息学与计算生物学国际会议（简称 BIoCOMP）
将于 2011 年 7 月 18 一 21 日在美国举办。我很高兴地通知您，您向
大会提交的这篇论文已被录用为常规论文（简称 RRP），即收人论
文集出版并在大会上宣读的论文。请参看录用论文的分类情况：
论文编号： BIC2612
论文题目：基于心电信号匹配运用机器学习方法对心律失常的
分类
马基 · 阿卡沙 · 巴比克
苏丹科技大学计算机科学与信息技术学院
请注意：以上论文编号由三个字母组成，为会议代码，后边四
位是数字。如需出版论文，需要在注册和终稿提交时获得论文
编号。
（本篇论文由代码为 873 的议程主席安排评审
录用论文的作者须知：
- l. 每篇论文都经过两位同行专家进行评审，对论文的新颖性、
意义、清晰度、影响以及说服力进行评审。如有意见分歧，会议项
目委员会将派出一名成员做出最后录用或退稿的决定，这通常涉及
其请其他的评委进行双盲评审。此外，如果论文作者系项目委员会
成员，则采用双盲评审程序。不同会场的会议主席负责其会场的论
文评审。
2 ．为了方便书籍或会议论文集的出版，论文上传到出版网站
上之前，请作者对文章的组织结构、英语写作进行完善
3 ．评审结果一览：
新颖性：（最低分 1 分，最高分 10 分）： 8 分
技术含量：（最低分 1 分，最高分 10 分）： 7 分
意义和影响：（最低分 1 分，最高分 10 分）： 7 分
可读性和组织性：（最低分 1 分，最高分 10 分）： 7 分` },

        { pdf: 229, print: 221, content:
`Part III Chinese Translation the Sample Texts and Key 怖 Exercise 221
与生物信息学与计算生物学国际会议主题的相关性：
（不相关： 1 分，密切相关： 10 分）： 10 分
最终评审：（拒稿： 1 分，强烈推荐： ] 0 分）： 8 分
专家意见：（较差： ] 分，满意： 10 分）： 9 分
特别提醒：
我们唯一的建议是更新参考文献，包括引用部分以及最新出版
的文章。
作者须知其他事宜：
论文报告格式 / 录用论文的分类
一一一论文打印指南
截止日期（注册和最终稿提交截止日期）： 2011 年 5 月
请各位作者尽快注册。有关会议登记、酒店住宿、大会议程的
信息请浏览网页 http: /／, vww. worldacademyofscience. org/worldcompl l/ws/authors
需在会议论文集或书籍上出版的论文，需提交终稿，请浏览网
页 http: //www. ucmss. com/cr/main/papersNew/worldcompl 1 一 first html
需要邀请函以便办理美国签证，请浏览网页 http: / /
WWW. ucmss. com/cr/mam/invitations/worldcomp_ index html
般信息请浏览网页 http: //www. world-academy-of-science.
祝贺您的论文被录用，并感谢您向本次大会投稿。会议在 7 月
份召开，我们期待着您的到来
- l. Directions:
诚挚的敬意
哈米德
FiII in the blanks in English based on the information` },

        { pdf: 230, print: 222, content:
`pven in the brackets.
00n behalf of
@we are delighted to inform you
@entitled
@has been accepted for presentauon
6selected
6proposed
0 "Industry' Talks"
@a high level discussion and exchange 鬲 ideas
@Congratulations
Oleaving some time for questions and discusslon
@refer to
@register othe online repstranon oupdates
2, Directions: Translate the following into English.
On behalf of the organising Committee, I would like to thank you for your proposal for an individual paper entitled "Educating all children together in a welcoming and effective learning community · I arn pleased to inform you that your proposal has been accepted and we invite you to make a presentauon at the conference.
Please note that presenters are required to repster for the conference and send their full paper before 31 March, 2012,旺 you do not do this, your presentauon will not be included in the programme.
I W111 send you a letter by emall to confirm acceptance of your paper, together with a registration forrn, information about booking accommodation and guidance on formatting your paper for inclusion on the disk of conference proceedings. If you do not receive the letter by the` },

        { pdf: 231, print: 223, content:
`Part III Chinese Translation ofthe Sample Texts and Key to Exercise 223 end of May, please let me know.
We look forward to seeing you in Glasgow this August!
Best Wishes (http: //www. cehs. wright. 司 [, cfinegan/Presentations/IntlPpr,/accepted.)
3, Writing (Omitted)
##Supplementary Reading
##参考译文
收件人: Ozer@ sfsu. edu
寄件人: 8NCEE@ mirasmart. com
主题：摘要 354，摘要， ST 建筑结构
日期： 2 闐 5 年 1 月 8 日
2 開 6 年度第八届美国地震工程全国会议举行在即，谨代表程
序委员会，很高兴通知您，您提交的论文摘要和学术报告已被录
用。项目委员会期待着您前来参加此次会议并在会议上作学术报
告。请提交完整论文打印稿。
正如您所知，本届盛会与社会安全局会议、国家发展研究中心
会议同时召开，详情请登录网站 http： //www. 1906eqconf or 进行
查询。本届会议项目委员会与上述两项会议的委员会相互配合，正
在制订一个合作计划，到 2 6 年 1 月制定出最终细则。我们负责
几项需要特别协作的内容。
如果您的论文摘要经确定适合收录到其中一项会议日程，我们在
二至三周内能够向您发出邀请函。根据主题内容，您的论文或在会议
上进行宣读，或以招贴的形式进行展示。最终决定将于年 2 月 1
日公示。根据已公示的会议日程，所有论文需在巧年 10 月巧日以
前提交到网站上，网址是： http: //submissions. corn/8ncee. 该
网站将于 9 月 1 日接收论文。论文细则诸如页码、格式、样本模板、` },

        { pdf: 232, print: 224, content:
`相关提小均可浏览网页 http： //www. 1906eqconf. 0 ．
我们将对所提交论文的技术含量、文章表述进行评审。对于英
语写作表达能力较差，或用于商业宣传的论文，程序委员会保留退
稿权。作者将于 2 開 5 年 12 月巧日收到论文录用通知。如论文需
作修改，作者将收到临时的论文录用通知。终稿录用通知将于
2 開 6 年 1 月 16 日确定。所有录用论文将在会议论文集上发表，其
中包括来自社会安全局会议、国家发展研究中心会议与会者所提交
的论文。
鉴于所提交的论文摘要数量众多，为了促进会议报告内容的多
样性，项目委员会决定每位作者宣读的文章不能超过两篇。如有特
殊情况则另行处理。如果您参与了其他论文的撰写，请安排另一位
作者作大会发言，您仍然可以在会上宣读自己的论文。所有参会的
作者都需注册报名。
提交论文时作者需支付论文录用费，每篇 240 美元，可用维萨
信用卡或万事达信用卡通过安全网站进行支付。如有特殊情况，可
把美国银行付款的汇票直接邮寄至地震工程研究所。录用费到账，
论文的提交才算完整。到会报到时，作者论文的录用费将从注册报
名费中扣除。如果一位作者同时支付两篇以上论文的录用费，注册
报名费中只扣除一位作者的费用。作者无须支付为期一天的会议注
册费。
感谢您对第八届美国地震工程全国会议的关注，我们期待着您
的到来。
真诚的敬意
第八届美国地震工程全国会议主席杰克 · P. 莫尔赫
会议网址: file: //C: \\ ℃ un n 卜 and Settings \\ 0 ", r \\ 以, k to p \\4th 一
匚 htm 8 / 四 / 犭巧` }
      ]
    },

    {
      id: "p3-u7",
      part: "Part III",
      unit: "Unit 7",
      title_en: "Rejection of a Paper",
      title_cn: "拒稿",
      print_start: 225,
      pages: [
        { pdf: 233, print: 225, content:
`#Unit 7　Rejection of a Paper
##Sample 1 参考译文
尊敬的泰勒 · 克罗兹：
我们非常抱歉地通知您，您的投稿没有被项目委员会选中，不
能在 2m9 年主题为隐私和安全的电气与电子工程师协会 [ IEEE]
的研讨会上出版。甄选过程十分激烈， 254 份稿件中只有 26 份能
被选中
下面有评论者的点评，在 i 平论网站上也可以点击查看。
http: //oakland09 cs. corn <, II. edu/oakland09/paper. php? p = 31
我们希望这些点评将会对您有所帮助
非常感谢您向 IEEE 的安全和隐私部投稿，我们希望您能参加
5 月的大会。
诚挚的问候
2 佣 9 年隐私和安全 IEEE 研讨会项目组主席
安德鲁 · 迈尔斯和戴维 · 伊凡斯
##Sample 2 参考译文
我很遗憾地通知您，您的文稿“Windows PowerShell：自动化
操作的新方法”没有被 2 佣 7 届 LISA 大会的论文评审委员会选中，
所以不能到会宣读。
清确认收到这份来自 < lisa07chair@ usenix. org > 的邮件。
我们收到 55 份申请，只能接受 22 份。我随函附寄了项目委员
会成员对您的论文所作的评论意见，希望您能从中受益。将来，您
也可以考虑向 LISA 再次投稿。我希望您能参加达拉斯的会议，到` },

        { pdf: 234, print: 226, content:
`时再见。您也可以考虑下次提交招贴论文或针对无线人侵防御系统
准备一份大会发言稿。参见：
http: //www. usenix. org/events/Iisa07/cfp/workshops. html.
十分感谢您的投稿。
保罗．安德森
##Exercises
- 1. Directions: FiII in the blanks in English based on the information
in the brackets.
(Dsorry to inform you
@was not selected
0)眉 le reviewmg process
@blind reviews ($)ln the first round
6 reviews osufficient justification
WaS no consensus
@were assigned to othe online discussnon
@strengths and weaknesses
@identified oselected for presentation othe feedback returned
@$a summary of the discussion ready version fiare appended to
@$TO sign in othank you for your submission` },

        { pdf: 235, print: 227, content:
`Part III Chinese Translation the Sample Texts and Key № Exercise 227
- 2. Directions: Translate the following into English.
Dear Dr Foster,
Thank you for subnutting your article to the Conference.
We regret to inform you that your article was not selected for presentation or publication at the meetmg. All submisslons were reviewed by the Program Comrnittee, and while many worthy articles were received, only approximately 20 ％ of articles with the highest quality and impact have been chosen for presentatlon. Common reasons for non-selection include 伊 r technical details and insuffcient novelty. ln addition, articles showmg commercial bias were rejected.
If you have specific quesuons about the atticle you submitted, please contact Mary Smith at the 0> nference website. She will be happy to forward your email to one of the person responsible for comment and reply.
We encourage you to attend The Annual Scientific Meeting of our
Program next time. Please visit The Program's website to regrster for the
Meeting.
The 2012 AnnuaI Scientific Meeting of our Program will be held November 4 一 7, 20 ] 2 in San Francisco, California. We hope you will consider subnutting your origmal research for our next scientific gathenng.
Sincerely, (http://www. n "腌皿 l. corrv/download. php? 61e = file-N11101 5 巧
一 0 doc)
- 3. Writing (Ormtted)
##Supplementary Reading
##参考译文
尊敬的哈斯卡尔的号作者，` },

        { pdf: 236, print: 228, content:
`我很遗憾地通知您，您的论文没有被项目委员会选中，不能在
哈斯卡尔 09 号研讨会上使用。今年，我们收到 31 份投稿，只接受
了其中的 12 份。总体来说，所提交的这些论文质量都很高，很多
优秀的文章都没能人选。（不过）我真心希望您能来参加研讨会。
下面包括了评阅人给论文打的分数和评审意见，希望能有助于
您修改您的文章。如果还有任何其他问题，请与我联系
感谢您向哈斯卡尔 2 9 研讨会投稿。
哈斯卡尔 2m9 年项目主席斯蒂芬妮 · 威里琪` }
      ]
    },

    {
      id: "p3-u8",
      part: "Part III",
      unit: "Unit 8",
      title_en: "Introducing a Speaker",
      title_cn: "介绍演讲人",
      print_start: 229,
      pages: [
        { pdf: 237, print: 229, content:
`#Unit 8　Introducing a Speaker
##Sample 1 参考译文
科技项目委员会会议联席主席里克 · 基图博士介绍大会主讲嘉宾
今天，我负责向大家介绍（约翰 ·）卡普敦博土。自 1997 年
我认识他以来，他一直是我的好朋友和同事。卡普敦博士在赖恩学
院取得生物学学位，然后于 1993 年在俄亥俄州立大学取得分子生
物学博士学位。他是在俄亥俄州立大学第一批获取博士学位的非洲
裔美国男性中的一员。我在俄亥俄州立大学待过一段时间，我记得
当我去上班路过学院时，一些老师会提醒我。我说是的，我知道约
翰。他们说当然了，他是位好学生。不，我知道的，他是一位伟大
的科学家。
我于 1997 年认识了约翰，当时，我刚好在乔治，华盛顿大学
读完博士。我在国家卫生研究所工作，我看到了一条招聘研究助手
的广告，研究的是非洲裔美国人的遗传性前列腺癌。该研究已经形
成了一个全国性的网络。今天在座的也有一些人是这个网络的一分
子。这个网络具有历史意义，因为它聚集了科学家、泌尿科医生、
放射肿瘤学家、护士、不同种族的学生共同关注非洲裔美国人前列
腺癌的问题，像这样的活动规模是空前绝后的。我很荣幸成为其中
一员，我记得与约翰共同工作的经历，他是一位不知懈怠的研
究员。
我非常期待我和他在电话里的长谈。通常，我们在晚上打电
话，因为他在亚利桑那州，我居住在另一边，他晚上打电话过来的
时候，我这边已经很晚了，我们淡论科学，我们也会谈论其他事
情。他激励我，激发我去思考。他确实很了不起。他一直处于基因
组学，特别是癌症基因组学及其相关技术研究的前沿。` },

        { pdf: 238, print: 230, content:
`##Sample 2 参考译文
吾尔霍博历史协会首次年会
加拿大，安大略湖，尼亚加拉瀑布
2 開 0 年 11 月 3 一 5 日
优秀的吾尔霍博人和优秀的吾尔霍博领导是怎样的？
介绍参议员大卫 · 达费罗
皮特．艾克
吾尔霍博历史协会主席
谢谢各位出席本次意义深远的会议，它拉开了首届吾尔霍博历
史协会的序幕。我很高兴这么多人都出席本次会议，特别是还有那
么多年轻人。
我今早的主要任务是向大家介绍本年度大会的主讲嘉宾。除了
介绍主讲嘉宾的资历以外，请允许我做些必要的补充。什么是优秀
的吾尔霍博人和吾尔霍博领导？听完之后，在座的年轻人将会受益
匪浅。我对达费罗参议员的介绍包括了对这些问题的定义。我们邀
请他成为本次大会的主讲嘉宾，因为他身上具备了这些优秀的素质。
首先，一个优秀的吾尔霍博人特别关心他的家庭和孩子。为家
庭和自己孩子的福利和前途考虑是吾尔霍博男人和女人的优质
品质。
在这一点上，我们的嘉宾就是一位很突出的吾尔霍博人。最
近，吾尔霍博历史协会透露消息说，达费罗参议员获得了一个特殊
荣誉。他教育全家要严格遵守会计这一行业的职业道德，要努力工
作，高度负责。达费罗身上体现了吾尔霍博文化精髓的一面。
达费罗参议员还做好了第二件事，他和其他吾尔霍博领导共同
参与领导吾尔霍博民族，这对于吾尔霍博人很重要。
从这一点来看，人们断定达费罗参议员是一位优秀的吾尔霍博
领导。四十多年来，他投身于吾尔霍博的事务中，始终坚持不懈，` },

        { pdf: 239, print: 231, content:
`Part III Chinese Translation the Sample Texts and Key № Exercise 231
一如既往。他一直对吾尔霍博的事情保持始终如一的投人。为促进
吾尔霍博的发展，他投人了自己大笔的资金。今天，在吾尔霍博人
中，他是一位智慧的政界元老
吾尔霍博人敬重达费罗还有第三个原因。吾尔霍博人长期关注
一个问题，即建立一个领导层，这些领导在地方和国家事务上都有
重要发言权和决策权。凭借辛勤的工作和个人魅力，达费罗在尼日
尔三角洲和尼日利亚的政治事务方面有着重要的影响力。他是尼日
尔三角洲联盟的创始人，该联盟是抗击尼日尔三角洲处理尼日利亚
事务中出现的弊端的一个重要地缘政治组织。他在国家性机构
“爱国者 " 中具有重要发言权，该机构为后军事化的尼日利亚宪法
结构形式的公平性进行游说，争取新的宪法结构。处于这些位置，
他有效代表了吾尔霍博人和尼日尔人的利益
我非常高兴向大家介绍我们的主讲嘉宾一一参议员大卫．达费
罗酋长，他是一个优秀的吾尔霍博人，也是一个优秀的吾尔霍博领
导人。
##Exercises
- 1. Directions: FiII in the blanks in English based on the information
gven in the brackets.
(.)It is my pleasure to introduce today's speaker
@with a passion for life
@resigned from her adrmnistrative duties
@begm her own business (5)She is the author of (Oserved as t)appeared on ($)a frequent keynote speaker
@non-profit organizauons oa highly regarded` },

        { pdf: 240, print: 232, content:
`Omaking a difference
@earned her master's degree from ograduated Magna Cum Laude from
UPrior to
$served ten years in
ØHaving spoken to over a rnilhon people firelate to audience
<j$Please Join me in welcoming
- 2. l)irections: Translate the following into English.
Respectable Prof. Johnson, Mr. Chairman, Ladies and Gentlemen, may I have your attention, please? Let, S begin our sesslon.
lt 这 my great honor to introduce our guest speaker today. Our speaker is actually a person whO needs no introduction, smce she is well known in our field as one of its great mnovators. Lisa Hart has been called an innovative thinker by those in Inforrnatmon management. That, s because she has strived to bring attention to those issues that we believe are so important and she has produced lots of remarkable research findings.
Professor Hart holds four advanced degrees and has an honorary doctorate from Howard University. ln her much-anticipated speech today, she will address what she sees as the future of information management.
Without further ado, please jom me ln welcoming Professor Lisa
Hart.
(http: //www. tingroorn. com/lesson/ddmybk/122167, html)` },

        { pdf: 241, print: 233, content:
`Part III Chinese Translation of the Sample Texts and Key № Exercise 233
- 3. Wnting (Omitted)
##Supplementary Reading
##参考译文
拉里．尼尔森是北卡罗来纳州立大学研究自然资源的教授。他
从 2 開 5 年起一直担任该校的教务长和副校长。 2 開 9 年 5 月，他从
这些职位上退了下来。担任教务长的时候，他负责北卡州立大学的
所有教学事务，北卡州立大学是北卡罗来纳州最大的大学，有三万
三千多名学生就读。之前， 2001 年至 2m4 年期间，他在北卡州立
大学的自然资源学院担任院长；四 94 年至 2m1 年期间，他在宾夕
法尼亚州立大学的森林资源学院担任院长； 1977 年至 1994 年期
间，他在弗吉尼亚理工学院的渔业和野生动植物学院从事教学《匚
作，并在后期任该学院院长。
拉里于 1948 年出生在芝加哥， 1970 年在伊利诺斯大学取得学
士学位， 1974 年在密苏里大学取得硕士学位， ] 978 在康奈尔大
学取得博士学位。 1970 年至 1972 年期间，他服役于驻越美军部
队，担任宪兵和实验室技师
他目前的学术研究兴趣是高等教育管理和可持续资源管理
2 開 8 年，他被调去全国咨洵委员会为美国教育部高等教育改善基
金工作。 1998 年至 1999 年，他在美国农业部的科学家委员会任
职，负责向美国林业局推荐管理陆地的资源的新方法。 1999 年 10
月，世界人口已确定突破了亿，他提出了并在宾夕法尼亚州立
大学和宾夕法尼亚中心的一些社区组织了长达一个月的文化教育活
动。他是全国科学和环境委员会以及世界林业中心董事会的一员，
该中心位于俄勒冈州的波特兰。作为教务长，他在三角科学园的各
种教育集团中担任董事职务。
拉里致力于自然资源教育事业。在他的职业生涯中，他教授过
16 门课程。在任教务长的同时，他一直主持一个荣誉研讨会，讨
论一些专门话题。在 100 多种出版物中，他与人合作编写了 3 本关` },

        { pdf: 242, print: 234, content:
`于渔业管理的教材。他和另外三个人合著了《生态系统管理》
书，这本创新性的教材由岛屿出版社于 2m2 年出版。他两次荣获
卓越教学证书，弗吉尼亚理工学院还给他颁发了迪格斯教学奖。他
每年在美国林务局教授沟通技巧的短期课程。
1993 年至 1995 年，他担任美国渔业和野生植物协会会长；
1990 年至 1991 年，他担任美国渔业协会会长。他联合主持了 1992
年 5 月在希腊雅典举办的首届国际渔业大会。 198 ] 年至 1984 年，
他是凯洛格的成员。他是美国渔业研究生物学家研究所的成员，也
是美国渔业协会的荣誉会员。 1998 年，他获得宾夕法尼亚大学农
业科学学院的多样性奖。` }
      ]
    },

    {
      id: "p3-u9",
      part: "Part III",
      unit: "Unit 9",
      title_en: "Welcome Speech",
      title_cn: "欢迎词",
      print_start: 235,
      pages: [
        { pdf: 243, print: 235, content:
`#Unit 9　Welcome Speech
##Sample 1 参考译文
致与会者的欢迎辞
尊敬的各位嘉宾、与会者：
我很荣幸在此欢迎诸位出席此次名为“信息时代的儿童权利”
的第二届全国大会。在时隔首届全国大会一年半之后，儿童保护协
会再次举办了这样一个论坛。我们再次相聚于此，目的在于：
- 1. 勾勒出有关信息社会中的儿童权利问题的实际状况；
2 ．分享信息、交流经验，把握这一领域里所发生的变化；
3 ．讨论国家政策的发展前景，紧紧围绕最新国际趋势以及信
息社会积极保护儿童的举措。
到 2m2 年底，保加利亚的国立机构和民间团体都已清醒意识
到，在数字化世界中给予儿童特别关爱十分必要。他们己经准备
好，并且有能力共同执行国家政策，这符合欧洲在此领域的发展趋
势。诸位的到场以及此时会议的召开即是这一实践的保证。我知
道，在座的诸位有些是行政、立法机关等重要国家机构的代表，有
些是私企和非政府组织的代表，有些是地方中学的代表，有些则是
媒体代表。进一步来说，昨天，也就是 11 月 28 日，在卢森堡举行
了有关电子安全项目发展的首届听证会。电子安全项目是欧盟的最
新举措，旨在保障互联网安全，并将在 2 佣 3 到 2 佣 5 年间投人使
用。在我们提供给诸位的资料中，有一些关于电子安全的目标和主
要活动的简要介绍。此计划还有赖于欧盟候选成员国的参与。我相
信，我们有理由期待保加利亚会尽其所能地向我们证明，保加利亚
会成为电子安全项目中一个有用、平等的参与者
时值第二届全国大会召开之际，我们需要突出更有意义的一` },

        { pdf: 244, print: 236, content:
`点 0 国家议会第一次听证会通过了“儿童保护法”议案的更改与
修正。目前，有关这项议案的磋商与讨论正在进行。国民议会副委
员长、卡啥波娃夫人也参加了我们的会议。我在此利用这个机会，
表达我们对保加利亚议会的殷切期望，希望能够制定一套法律，以
便创造更好的条件，更有效实施对保加利亚儿童的保护。
女士们、先生们，在信息时代，保护儿童的安全是儿童保护协
会所有活动中的核心。因此，今天的会议对于我们来说尤为重要。
在这次大会上，我们把阐述国家项目放在首位，并在信息社会为保
护儿童做出切实计划。今年六月份，国家儿童保护委员会决定成立
一个专家组。因为所有来自不同工作岗位的专家均愿意加人这一队
伍，我们可以说，今天的会议是这一队伍的第一次公开会议。信息
时代保护儿童问题的优先性受到重视，并提到会议议程上来。此次
会议突出了该领域的一些基本政策：
- 1. 确保平等的登录路径，并保障儿童在网上的行为是安全、
负责的行为；
2 ．确保儿童在网络世界里远离犯罪与陋习；
3 ．提高公众意识，确保儿童的上网安全。
另外，我再补充一点。今天的会议还意味着“互联网与儿童
权利”这一项目进人收尾阶段。此项目是在联合国驻保加利亚办
事处的大力支持下，由儿童保护协会执行实施的。随后我们将简要
介绍这一项目的结果。今天，联合国驻保加利亚常任副代表明娜 ·
特克夫人也到场参加这次大会，让我再次表达我们的感激之情，感
谢联合国提供的宝贵援助
我还要特别感谢信息产业发展署和交通与通信部的大力支持，
他们应邀成为此次会议的赞助方
我们还要特别感谢美国文化中心主任西登斯特克先生，他高度
认可会议的重要性，并为我们提供中心大厅举办此次大会。
女士们、先生们，最后，请允许我代表国家儿童保护机构，祝
各位工作愉快、富有成效。` },

        { pdf: 245, print: 237, content:
`Part III Chinese Translation the Sample Texts and Key to Exercise 237
##Sample 2 参考译文
“农贸市场包容性业务：证据与行动”
国际会议欢迎辞
危朝安，中华人民共和国农业部副部长
2 8 年 3 月 5 日
尊敬的巴基斯坦商务部部长辅秘阿什拉特 · 哈业特先生，尊敬
的土耳其共和国农业和农村事务部副部长， vedat Mirmahmutogullan
先生，尊敬的中国科学院副院长李家洋院士，各位曹贵的来宾，女
士们、先生们，早上好！
今天，我们齐聚北京，共同参加此次题为“农村市场包容性
业务：证据与行动”的国际会议。此次会议意义重大，在这里我
们将共同分享经验，一起探索行动方案。经国际环境与发展研究所
以及其他国际组织提议，此次会议由中国科学院农业政策研究中
心、重构市场协会和中国农业部农业纵向一体化办公室主办，来自
20 多个国家的 130 多位知名专家、企业家、农民代表，以及政府
官员应邀出席此次大会。在此，请允许我代表中国农业部对参加此
次大会的所有专家和朋友表达我们最诚挚的欢迎
在过去半个多世纪里，随着世界经济市场体制改革的不断深
化，贸易自由化和全球经济一体化，以及农贸市场和供应链结构，
都在全球范围内发生着前所未有的改变。新兴经济只用了十年时
间，便完成了农贸市场的重组。然而，那些支撑世界上绝大多数贫
困人口维持生计的小规模农场，却显得对此变化力不从心。农贸市
场链的快速转变虽然为农业发展带来了众多机遇，但也给数以千计
的小农户带来了巨大挑战。将来，这些小型农场可能将被边缘化，
并且受到国内与国际市场扩张的排挤。这一点已经引起了全球的
关注。
在中国有多达两亿四千万农村家庭，平均每户家庭的可耕地面
积小于 0 巧公顷。生产规模非常小。然而，在过去 30 年的改革里，` },

        { pdf: 246, print: 238, content:
`中国的农业经济经历了突飞猛进的发展。这包括农业生产值的快速
增长，农民收人的显著提高，农村生活环境的明显改善，农业供求
关系总体保持平衡，以及在丰年里实现农产品大量盈余。虽然国内
市场与全球贸易的开放为农业发展提供了大量机遇，但小规模经营
的农民面临着诸多困难，难以更好地回应市场转变，很难分享到市
场扩大化带来的利益。这里有许多急需解决的问题。例如，在现行
的家庭责任制体系下，农户如何扩大农田规模，实现农业的现代
化？如何在供应环节和市场扩展方面将附加价值转人农户，以使农
业生产效率大幅提高、农民收人得到增长？最后但并非不重要的
是，如何使小规模农户融人全球化群体动态市场？为了提高农户们
适应和应对市场变化的能力，中国政府已致力于通过产业组织和机
制革新，使小规模的生产者融人到动态市场中来，并促进农业立体
式一体化规模这些努力已使农民有效地从农贸供应链的变化，以
及市场的扩大中获得了更多的利益。到 2 佣 6 年底，农业立体式一
体化运行组织数量已达到巧万，九千万农户已加人了组织，且平
均每年每户增加了 1486 元的收人。从 20m 年到 2 6 年，农业立
体式组织的数量、农户加人组织的数量，以及这些农民每年的收人
分别增加了 132 ％、 52 ． 7 ％和 65 ． 1 ％。
此次国际会议为所有与会者提供了一个分享经验、共同合作的
好机会。一方面，我们非常乐意与各位国际友人分享中国的经验；
另一方面，我们也希望在广泛的交流、讨论与合作中借鉴更多的国
际经验，从而改进我们的工作。我希望各位都能敞开心扉，各抒己
见，深人探讨这些问题；群策群力，共同致力于使小规模生产者融
人到现代市场中，并提升他们的能力，以便更好地分享现代市场扩
大化所带来的成果。我希望，通过我们的共同努力，我们能够为世
界现代农业的发展创造一个美好的未来。
最后，预祝大会取得圆满成功。祝愿各位与会者、国际友人在
北京舒心、快乐！
谢谢！` },

        { pdf: 247, print: 239, content:
`Part III Chinese Translation the Sample Texts and Key to Exercise 239
##Exercises
- l. Directions: Fill in the blanks in English based on the information
pven in the brackets.
(Dso pleased to see
@provides a very unique opponunity for all us oreumte with
@organizing Committee members
6discuss the truth and beauty of science (OYour strong support and active participation t)record-breaking event
Oopenmg ceremony
@on-line oabstract and paper submission
@collaboration across the Pacific gare committed to
ßPlease feel free 蜘
2, Directions: Translate the following into English.
On behalf of USTOA, I would like to officially welcome everyone to our 24th AnnuaI Conference and Marketplace. I a 卜 0 want to thank you for your support, and let you know hOW important it is to us, especially in these days.
NO one here can deny that we are living in challenging times. This is nothing new to the travel industry and to USTOA. Over the years we have weathered cnses. We have also enjoyed penods of unsurpassed prospenty and seemingly endless optimism.
As we go intO a new year, we are lOOking at one of the toughest situations many of us have seen. We are being put to the test, and we will pass the test. It is my firm belief that, through strong leadership` },

        { pdf: 248, print: 240, content:
`and partnerships with others in the industry, we will proacti, rely confront the issues facing us, and move forward
USTOA has always believed in partnerships. Over the next three days, let, s meet with one another and let, s discuss ideas for movmg forward, as we explore the power of partnerships.
(http: //www. ustoa com/pressmonvpressamhive/jacksonspeech. hun)
3, Writing (Omitted)
##Supplementary Reading
##参考译文
艺术与文化部部长卢卢 · 欣瓦娜女士致欢迎词
南非图书馆与信息协会会议在比勒陀利亚圣乔治酒店开幕
20 ] 0 年 9 月 28 日
今天很高兴能与诸位在此相聚，共同参与此次开幕式。本次第
十二届南非图书馆与信息协会国际会议的主题是“图书馆推动人
类获取知识”。我想首先对本次大会的组织人员表示祝贺，本次会
议汇集了如此众多的馆员和来自全国各地的信息工作者，共同关注
这一具有重大意义的主题，这与你们的努力是分不开的。
每年一届的南非图书馆与信息协会会议是图书馆界日历上标明
的重要事件。在此期间，作为一名图书馆工作人员，你可以提出自
己的想法，思考如何克服各种挑战。
我很自豪地宣称，我部一直致力于图书馆事业的成长与发展。
我们相信，有效地获取信息，对于创建一个兼容性社会至关重要
几周前，我在约翰内斯堡非洲博物馆举办首届国家图书周活
动。这一举措旨在促进土著语言文学发展，尤其在青少年中培养形
成一种阅读文化。` },

        { pdf: 249, print: 241, content:
`Part III Chinese Translation of the Sample Texts and Key № Exercise 241
作为为期一周的活动的一部分，我们对资源、财力不足的图书
馆、学校进行捐赠。我们由衷地感谢范斯奇克出版商在此次活动中
的慷慨捐赠。我们希望在未来能进一步巩固这些已取得的成效
国家图书周以及三月份举办的国家图书馆周旨在努力整合各方
力量，促进和保护我们的文献遗产。在此，我呼吁所有图书馆从业
人员，好好利用此次国家图书周的机会，为我们的图书馆吸引更多
新的读者。
本次会议的主题一一．“图书馆推动人类获取知识 "，与政府所
推行的社区图书馆公共基础建设的政策完全吻合。作为艺术与文化
部，我们认识到了获取知识的重要性，以及由此对我们人民的社会
经济条件所产生的影响。
政策和立法审查
如你所知，艺术和文化部负责图书馆所有相关政策的制定 c 因
此，我们对现行的法律不断审查，并提出新的修正案，以便与新的
政府优先事项保持一致。
关于以下法案的审查均已结束：
国家图书馆理事会和信息服务法， 2 開 1 （2m1 年第 6 号法令）
南非国家图书馆法，四 98 （1998 年第 92 号法令）
南非图书馆盲人法案， 1998 （1998 年第 91 号法令）
法定缴存法， 1997 （1997 年第 54 号法令）
文化法修正议案经过最终的商议后，将被提交到议会
图书馆转型宪章
图书馆转型宪章已完成，并将于近日交予艺术与文化委员会。
委员会支持此宪章，并对由那康多教授领导的技术组如此出色地完
成工作表示祝贺。我们将尽快向娱乐与教育特别委员会提交此宪
章，以便做进一步的审议。
图书馆转型宪章为本国图书馆事业的转型构建了框架，体现了
包括政府各部门在内的股东们对南非图书馆事业的发展所做的一切
努力。` },

        { pdf: 250, print: 242, content:
`一旦政府通过了这一宪章，图书馆行业的整体形象和地位将有
所提高。总体目标就是，确保图书馆业变成一个关键的、可转化的
资源，能够改进社会经济状况
该委员会目前正在讨论 2mo 年南非社区图书馆议案的草案。
此项议案的目的是在各省建立国家统一标准的图书馆和信息服务。
推动社区图书馆发展，并促进高标准信息服务的发展
我们希望通过此条例来解决此领域一直存在的一些难题，如容
量不足，信息通信技术设备的缺乏，土著语言材料的缺乏，开放时
间，基础设施以及工作人员薪酬差距。我们必须保证一点一一一一消除
那些在过去种族隔离的黑暗岁月里一直盛行的不公正和不平等
现象
委员会对图书馆员及其他相关专业人员的培训进行了广泛研
究 c 这份报告中的建议目前已受到重视。在开始实行这些建议之
前，我们将与高等教育培训部和公共服务管理部门进行磋商。
有条件地资助社区图书馆
社区图书馆建设资金的保证使图书馆事业继续迅速发展。该项
目旨在扩展阅读体验，并向弱势群体，尤其是农村地区，提供图书
馆的基础设施和服务。
总计 5 ． 12 亿兰特的预算将于本财政年度分配到各省，以便用
于支持更多的人员到我们社区图书馆工作。
除此之外，此项资金还将用于相关图书馆资源配置，这将促进
政府的社会凝聚力和推动赋权议程的进行。
自三年前此项目启动以来，已有六百多名专业人士和后勤人员
被任命到全国各地的社区图书馆工作。致力于弥合数字鸿沟的公共
互联网接人设备，也正逐步建立到各图书馆中。图书馆向公众开放
电脑设施，并同时对公众进行电脑使用培训，为图书馆技能的发展
提供了一定的证据。
这里，特别强调一下此次项目在基础设施建设上所取得的成
就。目前，已经在 14 个地区建成了新的图书馆一一 111 家图书馆` },

        { pdf: 251, print: 243, content:
`Part lll Chinese Translation of the Sample Texts and Key 怖 Exercise 243
的设施得以改善。此外，今年还将建成 8 所新的图书馆
然而，尽管该项目可能会提供新的图书馆设施供公众使用，但
我们也目睹了在服务交付抗议活动中最近发生的不幸事件，一些图
书馆被烧毁。作为一个部门，你所面临的挑战便是：确保我们的社
区认识到这些设备的价值
在我们追求建立一个公平、有凝聚力、充满关爱的社会的过程
中，图书馆建设已成为我们发展战略的一部分。我们追求建立一个
个人与社区都有权涉足经济问题，能够参与最终决策，公民能在公
众讨论中发挥重要作用的社会
九月是我们庆祝文化遗产日的月份。今年 9 月 24 日，在德班
的摩西 · 玛西达体育场举行了全国文化遗产日的国家庆典，主题为
“庆祝 2010 年国际足联足球世界杯的成功举办：我们的传统 "。总
统雅各布 · 祖玛发表全国讲话，并号召我们的人民建立起共同的传
统，实现共同的国家认同。
当时，政界领导们也对全国以及多信仰社区提出倡议，对世界
杯的成功举办表示感谢，倡议大家进行感恩节祈祷和服务。
总统祖玛先生概述了从世界杯得出的经验和教训，最重要的一
条便是“决心和团结一致是成功的秘诀与要素”。他指出：“我们
也认识到，我们各社区之间的团结与凝聚正是力量与灵感的源泉，
这将使我们取得更大的成就，我们也认识到以建立一个繁荣的南非
为目标，我们完全有可能建立一个真正团结、有凝聚力的南非。 "
“年轻和年长的南非白人挤满了体育馆来庆祝足球比赛，而黑人则
在世界杯前聚集在奥兰多体育馆庆祝橄榄球比赛。这些事实告诉我
们，我们还未开始利用存在的潜能去实现国家认同。 " “前车之鉴，
因此我们必须继续向前。我们的人民教会了我们很多，我们不能墨
守南非的成规，更不能使南非分裂。 "
今天，我想重申祖玛总统说过的话。我们需要发扬我们伟大的
爱国主义精神，增强我们的自信心，更新我们的民族意识，明白我
们共同的目的。` },

        { pdf: 252, print: 244, content:
`我希望大学能够宣传这些思想。前进的道路上面临的挑战是，
如何使一个民族在行动上团结一致这一事例成为活生生的典范，形
成我们的传统，以激励我们的人民在走向未来时，能对自身的能力
感到自信，对我们的历史感到骄傲，致力于全国对话，建立有凝聚
力的社会，并尊重我们现存的人类财富。
9 月 30 日，艺术与文化部将在约翰内斯堡举办一个公开论坛，
主题是“我们如何认识国家现存的人类财富，如何开展落实相应
计划 "
我邀请学者，知识分子，文物工作者，艺术家，以及感兴趣的
市民一起参加这一事关我们文化遗产的重要讨论会。
我们今天在此召开大会，我们应与南非图书馆与信息协会一
起，关注推进图书馆事业的新方式，加强和提高当前图书情报学骨
干工作者的技能，并吸引更多的人士去从事这个重要的事业，让他
们的选择成为一个对事业的选择，而不是一个迫不得已的选择。
让我们致力于图书馆事业的发展，用图书馆去开启我们国家的
智慧之门，使图书馆成为我们文化遗产的宝库；让图书馆展现我们
的文学才识，积极发挥作用，弥补数字鸿沟。
最后，我要向现任国际图书馆及馆员联合会会长埃伦 · 苔丝女
士表示祝贺，这对南非图书馆事业来说是个伟大的成就。同时，我
还获悉约翰 · 泰斯彼先生将担任新的国家图书馆馆长会议的主席，
在此也向您表示衷心祝贺。
祝愿今天参会的各位开心、愉快。谢谢！` }
      ]
    },

    {
      id: "p3-u10",
      part: "Part III",
      unit: "Unit 10",
      title_en: "Speech at the Opening Ceremony",
      title_cn: "开幕词",
      print_start: 245,
      pages: [
        { pdf: 253, print: 245, content:
`#Unit 10　Speech at the Opening Ceremony
##Sample 1 参考译文
开幕词
弗兰兹斯卡 · 鲍姆
“教育是一个社会过程。教育是成长。教育不是生活的准备，
教育本身就是生活。”
美国教育的改革者和哲学家杜威的这些话，从两方面解释了为
什么我们今天在这里。一方面，杜威的话简明扼要地表达了一个完
整的理念，说明了在接下来的两天里我们要探讨什么，是什么让大
家想要到这里来？和同学们一起接受教育，还是想在另一个城市，
甚至另一个国家体验一下新的环境？另一方面，杜威的这些话还涉
及组织召开此次大会的教育价值。
很高兴看到这么多来自欧洲各地的热情洋溢的研究生们。大会
将一直持续到明天晚上，这是一个难得的机会，我们将听到有趣的
演讲，见到来自欧洲各地的同学，受益于他们的回应；希望你们离
开莱比锡时，思维已被新的视角所拓展，获得了精神食粮，并且有
一段鼓舞人心的交流。因此，请实践杜威的话。这是一个针对硕士
研究生的重要论坛，让所有的参会者均有机会展示自己的研究成
果，能够启发新的思维，提出自己的看法。这就是教育。毫无疑
问，它将丰富我们的个人生活和学术生活。对我们中的许多人来
说，这是第一次学术会议，而对于另一些人来说，我想它不会是唯
一的一次，也绝非最后一次。因此，这个会议就成了人生的一个实
验阶段，让我们捕捉到未来的前景。
约翰 · 杜威的那句话不仅反映出我们参加这次教育体验的愿
望，同时也突出了这次会议得以召开的原因。依据杜威著名的` },

        { pdf: 254, print: 246, content:
`“动手做 " 学习理论，美国莱比锡研究中心将其模块引人研究生阶
段的学习，并让研二的同级学生组织一次会议，此次会议是第一次
面向研究生举办的。因此，今天站在你们面前、作为六强组织委员
会的一分子，我感到非常荣幸。总之，欢迎大家来参加这个由美国
莱比锡研究中心举办的第一届研究生会议。希望大家旅途愉快；你
们当中的一些人可能是第一次到莱比锡，希望你们第一个晚上都能
休息好。欢迎希拉 · 拉瓦尼女士，以及来自美国驻莱比锡总领事馆
的公共事务领事詹姆斯 · 西沃德先生。
我们会议的主题是受我们的一个模块的启发而提出的，名为
“反思美洲 "，是美国研究领域的拓展，被称为跨国转变，它对整
个 20 世纪美国研究领域的许多观点提出质疑。想对美国进行一个
更全面的了解，就意味着要打破国界线的限制，关注美国与其他国
家的相互依赖性。“将美国放置在跨国世界里”的想法，驱使着我
们进一步发掘美国与其他国家和文化之间隐含的联系。这也让我们
看到我们称之为全球化的今天，实际上是更长的世界历史的一部
分。通过研究全球化以及社会历程，我们便可能改变长期形成的观
点，如空间界限，地域，民族和身份。在接下来的几天，我们将听
到诸多描述，我们还可通过研究流散族群、迁移流动、跨国迁移以
及一些在文学作品和电影中的描述，学到思维转换。会议的子标题
更为具体，体现出探寻的范围远远超出了全球化意味着什么，会产
生什么影响之类的单纯的好坏二分法思维。
作为一个跨学科大会，我们鼓励大家展现自己的研究成果，尤
其是关于文学文化中的美国以及探讨政治、社会、历史的研究成
果。我们收到了来自欧洲和美国的 28 份投稿申请，他们从不同的
领域考证了“跨越国界的美国 " 这一概念。其中 17 篇论文人选，
将分别在 6 个不同的会场进行宣读。主题发言结束之后，会议进人
“跨越国界的家庭 " 的议程，以“家”这一概念以及“家 " 与不
同跨国环境中的身份建构为视角展开探讨。大会发言将运用霍米
巴巴的“第三空间 " 理论和阿莱达 · 阿斯曼的“记忆空间 " 理论，` },

        { pdf: 255, print: 247, content:
`Part III Chinese Translation of the Sample Texts and Key to Exercise 247
解读族群和移民文学以及科幻电视系列，探讨边疆、归属感和文化
冲突等问题。
今天下午，题为“美洲的冲突”的会议将包含三个演讲，主
要是关于一些有争议的议题，以及美洲冲突的根源。虽然这些演讲
研究的地方各不相同，如加利福尼亚州、美国和墨西哥的边境地
带、巴西等，但这些演讲都与全球性的互动对环境的影响有关。我
们还会听到更多的演讲，如移民的期待和美国梦的破灭，美国针对
美墨边境的毒品之战所采取的新政策，以及一次巴西社会运动中的
变脸等。
今天晚些时候的第三项议程为“跨大西洋的认知及影响”，重
点关注大西洋两岸不同文化的相互作用及其对双方在认知上的影
响。我们的演讲将对一些问题进行深人探讨，如，美国人心目中的
欧盟，全球大背景下的美国政治文化，在当今阿富汗的美国文化代
理人等。
明天早晨，我们的第一项议程是全球化可能的受害者。有三个
演讲，探讨媒体、资本主义以及犯罪对全球化可能带来的负面影
响，或者全球化对媒体、资本主义以及犯罪造成的负面影响，分析
二者之间相互依存的关系是如何展现在流行文化中的。这三个演讲
将运用地球村、全球倾销、性别机构等概念来审视流行文化；用普
通语言来挑战学术演讲的既定标准。
“身份与全球化 " 的议程主要探讨身份问题所作的演讲也是
文学研究，从文学的视角出发，探讨身份与作为一个超级大国的美
国之间的关系，跨国与迁徙中的性别经历，以及全球化带来的身份
分裂的问题，从而揭示身份建构与全球化诸方面的相互关系
明天下午，会议进人最后的议程，探讨的话题为“全球化的
媒体，文化与身份 "，围绕媒体对于个体生活的影响血展开。媒体
的全球化已经在互联网、美国大众文化模式在全球所处的优势中得
以体现。人们已经对媒体全球化提出了不同的看法，它对受众，即
来自不同文化背景和生活标准的个体与社会产生了影响。此议程中` },

        { pdf: 256, print: 248, content:
`的两个发言将以互联网以及美国情感文学类电视节目为基础，分析
二者对社会互动和非美籍观众产生的影响。
这些演讲题材丰富，很有价值，涉及了文学、经济学、社会
学、文化研究、政治学、历史、电影研究等诸多学科领域和研究方
法，极大地丰富了美国研究的内容。由于我们赞助商的慷慨资助，
来自全欧洲的研究生才有可能欢聚在莱比锡，参加这一为期两天、
令人振奋的研讨会。美国总领事馆给我们提供了一项资助，这样，
我们就可向大多数的德国的发言人颁发旅费补助。此外，来自该大
学的进步者之友协会给予了我们大力支持，提供国际旅行费用。此
外，我们还要感谢霍比 · 门可家族以及富布赖特委员会，有了他们
的帮助，我们才能聆听到希拉 · 拉瓦尼女士的主题演讲。
感谢各位的到来，欢迎来到莱比锡，祝大家会议期间开心、
愉快！
谢谢。
##Sample 2 参考译文
关于农村地区土地使用和自然资源影响大会的开幕词
地点：万象
时间： 2 8 年 4 月 7 日
总理办公室部长、国土管理局局长， Kham Ouan Boupha 先生
尊敬的嘉宾，女士们、先生们：
我代表国家土地管理局，对今天各位抽出宝贵的时间来参加此
次大会表示深深的感谢。此次会议主要关注目前老挝农村土地使用
对自然资源的影响。
各位嘉宾：
老挝地理环境独特，山区占其国土总面积的 80 ％，只有 20 ％
的低地是被未开垦的低质量的森林带所覆盖。大约 90 ％的人口居
住在农村地区。` },

        { pdf: 257, print: 249, content:
`Part III Chinese Translation the Sample Texts and Key to Exercise 249
由于存在这些独特的地理环境，老挝政府在土地管理与土地使
用上的政策便是：提高土地质量，增加土地价值，尽量避免给环境
和整个社会带来负面影响。同时还采取一系列措施，保护水资源与
土壤肥力，防止水土流失。除此之外，最重要的关键性举措是阻止
任何情况下的森林破坏。
2 佣 3 年，政府修改了土地法，重点强调了个人的地产所有权
和土地的使用权。 2m7 年 5 月，政府还举办了“土地问题的透视
与理解”大会。
此次大会列出了实施土地和自然资源管理、保护、发展和利用
的方法和规章条例。
总体来说，农村土地使用是国家经济发展计划中的主要重点，
不仅关乎粮食生产，而且与水力发电和生态旅游息息相关。
目前，老挝政府正致力于解决贫困问题，到 2010 年取得明显
成效，到 2020 年脱离最不发达国家行列。
尊敬的各位嘉宾，女士们、先生们：
过去，来自世界各国的非政府组织也曾积极帮助过老挝农村地
区的发展。这些帮助，对于改进人们的生活条件，以及保护环境具
有突出贡献。同时也有助于老挝实施土地和自然资源管理、保护、
发展以及土地的使用。
我希望，在“农村土地和自然资源管理的含义 " 的研讨会上，
相关专家能够利用这个极好的机会，展示土地研究方面的成果，相
互学习，交换经验教训，以便有助于老挝政府针对农村地区土地和
自然资源管理，制定出有效的政策和策略规划。
最后，我祝愿所有与会者和本次活动的组织者身体健康，祝大
会富有成效！
同时，我宣布大会正式开幕
谢谢大家！` },

        { pdf: 258, print: 250, content:
`##Exercises
- 1. Directions: Fill in the blanks in English based on the information
gwen in the brackets.
(On behalf of
@honored and pleased to weleome you all to
OWith rapid increases
@are not aware of the imponance
5 remam unclear and need to be solved (Ooffers you a unique opportunity t)share expenences and diseuss evolving strategies
山 is our great pleasure and pnvllege to have
@pioneermg ogive us a lecture on
OThere is no doubt
@better understand
OThank you so much for coming
- 2. l)irections: Translate the following into English.
Remarks at Opemng Ceremony of the First International
Seabuckthorn Association Conference in Berlin
Dear Chairman, ladies and gentlemen,
First of all, on behalf of the International Seabuckthorn Association, I extend my warm welcome to all of you to this conference. Secondly, I would also like to pay my sincere thanks to the orgamzers, especially to Dr. MoerseI and all members in the organizing group for their hard working which makes this conference happen here.
Seabuckthorn is a botanical resource with multi -functions of envlronmental economic and SOCial iS a common recogni— tion that seabuckthorn posses a great value of economic potenual, so` },

        { pdf: 259, print: 251, content:
`Part III Chinese Translation 鬲 the Sample Texts and y l•,xercise 251 that Chinese government set up professional institutions for the management and allocate fund annually for supportmg its development. Now, the seabuckthorn resource is incteasing by 100 thousand hectares every year in China, and its plantation and development has been put into the government agenda.
From a long sight, the researeh and development of seabuckthorn resources will play a leading role in sustainable environmental development and poverty relief globally. 'lherefore, we are facing unprecedented opportumties and also a great challenge. Under this circumstance, I suggest to conduct a systematic and scientific research and international cooperation ln followmg areas, in order to achieve a high level global benefits. For those pumose, international COOB, ration and academic exchanges among the expens, researchers and on seabuckthom should highly encouraged.
Finally, please allow me agam, on behalf of International Seabuckthom Association, to express my appreciation for the perfect orgamzation by our German colleagues and wish the conferenee a great success.
lhank you!
(http: //isahome. net/rnam. php? optionid = 20&auto id = 124)
- 3. Writing (Onutted)
supplementary Reading
##参考译文
关于气候变化与绿色增长的联席会议开幕词
11 年 10 月 5 日
环境部副部长尹钟洙先生，
托马斯 · 科兹洛夫斯基大使，` },

        { pdf: 260, print: 252, content:
`马蒂亚斯“克莱纳总统，
阁下，尊敬的各位嘉宾，
女士们、先生们，
今天，我很荣幸能和你们聚集在此次联席会议上，共商应对气
候变化和推动绿色增长的大计。首先，让我们以最热烈的掌声欢迎
在座各位嘉宾的到来，尤其是不远万里来此参加会议的嘉宾们。同
时，也要感谢主办方，为我们在汉城举办了这个非常有意义的活动。
我相信，我们聚集在这里的大多数人对气候变化和绿色增长两
个主题并不陌生。事实上，气候变化和近期的绿色增长这两个关键
的全球性问题，已成为国际决策的行话及其重要组成部分
气候变化和绿色增长已成为全球性问题，这是一个不争的事
实，在以前和现在工作的领域，我都注意到这一点。在作为 2m9
年经合组织部长级理事会会议主席以及联合国秘书长气候变化特使
期间，我积极争取，使与会部长们一致支持采纳经合组织绿色增长
宣言；现在作为全球绿色增长研究所的主席和联合国秘书长的全球
可持续发展高级小组的成员之一，也深有体会。我相信，今天会议
的主题“认清威胁，把握机遇 " 会对在座的每一位提出一些值得
思索的关键性问题。
女士们、先生们，
尽管气候变化问题泞次作为一个具有全球意义的问题出现时，
比现在更加有影响力，但是气候变化所能反映出的科学和数字问
题，仍然是一个值得探讨的问题。毫无疑问，要想真正地了解全球
气候变化所带来的威胁，并让决策者采取有效的措施来抑制由此产
生的负面影响，精确的测量和计算是非常重要的。然而，对气候变
化的科学细节进行深人的剖析，了解气候变化所带来威胁的严重
性，这一点是没必要的。即使我们坚持深人研究，最乐观的预测就
是气候变化会对经济、环境和人类带来灾难性的后果
第一次工业革命时期兴起的劳动密集型和能源的粗放型增长模
式，已经使世界上的大部分地区走上非持续性的发展道路，片面追` },

        { pdf: 261, print: 253, content:
`Part III Chinese Translation 訂 the Sample Texts and Key 怖 Exercise 253
求经济扩张，而忽视了生态问题会带来的后果。结果，我们看到的
就是地球上的水陆温度的不断上升，从而导致地球每个角落的区域
和全球气候周期的改变，海平面不断上升，水灾、旱灾以及其他自
然灾害频繁发生，整个生态系统、经济和社会领域遭到严重的破
坏。此外，我们对经济增长的渴求，以及生态系统的退化，已经导
致清新空气和水等世界宝贵资源越来越难以满足全球居民的需求
最令人担忧的是在亚洲。正如大家可能知道的，世界上七大碳
排放国中有五大国来自亚太地区，分别是中国、俄罗斯、印度、日
本和韩国，另外两个是美国和德国。
韩国人经历过历史上降雨量最多的一次夏季，连日暴雨引发的
泥石流将数吨泥土带进汉城最富裕的郊区的高层公寓的三楼客厅中，
实际上，气候变化所带来的破坏严重地侵扰了汉城居民的生活。
女士们、先生们，
正如我刚才提到的例子，韩国是最容易受到气候变化的负面影
响的国家之一。然而，李明博总统于 2m8 年 2 月就职以来，此届
政府已清楚地认识到气候变化所带来的威胁，并迅速、大胆地采取
行动，防止气候带来的不良影响。而且，正是山于其雄心勃勃的计
划，使韩国在新的经济增长模式下，将气候危机转化为一种全新
的、质量为本的增长方式，即“绿色增长 " 方式。
鉴于“低碳绿色增长”于 2 開 8 年已成为新的国家愿景，韩国
政府已制定并实施“绿色新政 ' 等一系列全面政策，使韩国从全
球金融危机中得以迅速恢复，同时也牢牢把握这种机制来促进绿色
增长。通过绿色增长总统委员会和“低碳绿色增长框架条例 "，建
立起了协调、促进绿色增长的机构和法律框架。我国现在正处于第
一个五年计划（20 的一 20 ] 3 年）的第三个年头，国内生产总值的
2 ％主要用于投资与绿色增长相关的研发工作
毫无疑问，在这条道路上前进，仍有许多障碍需要去克服。
旦 20 巧年推出的排放交易计划能够成功运作，则需要高效的机构
和监督机制。如何实现到 2030 年可再生能源占一次能源的 ] 1 ％的` },

        { pdf: 262, print: 254, content:
`目标，将取决于相关技术的不断发展，以及适当的市场激励机制的
引人，以促进更多的私人部门投资。同时，为了实现我们的中期温
室气体减排目标，能源价格和其他定价机制需要进一步修订，以便
使商品和服务价格真正地反映生态成本。
重要的是，我们国内在追求绿色增长时所取得的这些经验和知
识，通过许多区域性和全球性活动，尤其是全球绿色增长研究所开
展的活动，得以与国际社会共享。该研究所于 2010 年 6 月成立，
简称“GGGI”，总部设在汉城，海外办事处设在哥本哈根和阿布扎
比。 GGGI 是一个全球性的“思想和行动之库 "，致力于向全球推
广绿色的增长模式。
GGGI 为绿色增长战略提供分析性的支持，并协助发展中国家
开发从事绿色增长的潜能，包括改善体制、法律和监管机制等。自
成立以来， GGGI 已经在埃塞俄比亚、印度尼西亚和巴西三个国家
实施方案。今年以来，它一直积极地推进这项工作，并在柬埔寨、
哈萨克斯坦和阿拉伯联合酋长国（阿联酋）等国家实施方案。
我们得到很多国家和国际组织的捐赠，如丹麦、日本、阿联
酋、德国和澳大利亚以及经合组织、联合国亚太经济社会、世界银
行、亚洲开发银行和欧洲复兴开发银行等。总之，绿色增长将提供
有利条件，协助那些最容易受到气候变化负面影响而且又缺乏能力
去应对由此带来的后果的发展中国家，使这些国家更好地应对气候
变化，制定出相应的措施，将危机转化为机会。
女士们、先生们，
我真诚地希望这次关于气候变化和绿色增长的联席会议，将是
一个最好的机会，让我们更好地了解气候变化所带来的威胁和机
遇，并识别和评估促进绿色增长模式转变的手段和措施。最后，我
想再次向所有与会者致以谢意，祝大会圆满成功、富有成效！
谢谢大家！
作者：韩升洙博士` }
      ]
    },

    {
      id: "p3-u11",
      part: "Part III",
      unit: "Unit 11",
      title_en: "Conference Presentation",
      title_cn: "会议发言",
      print_start: 255,
      pages: [
        { pdf: 263, print: 255, content:
`#Unit 11　Conference Presentation
##Sample 参考译文
航空产品的分配系统及其调控框架
（在世界贸易组织旅游服务研讨会上的发言）
国际民用航空组织王元贞
2001 年 2 月 22 日至 23 日，日内瓦
世贸组织邀请国际民用航空组织参加本次研讨会，我对此表示
感谢。此次会议将讨论有关旅游的许多重要问题，而旅游与航空运
输有着密切联系。
我的报告分为三个部分：第一，航空产品配送的主要成就；第
，目前的调控框架，主要焦点是：国际民用航空组织制定的全球
计算机预订系统行为准则；第二，一些关键问题。
首先，我想向大家展示两张图表，显示旅游与航空的密切关
系。第一张图表明，从 1990 年至 1999 年十年间，国际乘客运量与
游客运量的增长模式。第二张图表明，十年间，国际游客接待量与
乘客收益的增长模式。如图所示，航空运输与旅游密切联系，相互
依靠；它们的发展与前景也彼此息息相关。
现在，让我们回到航空产品分配这一主题。通过计算机预订系
统和代理商，给顾客配送或出售它们的产品（即航空服务），是大
多数航空公司使用的传统方式。信息技术的改进对航空公司处理业
务的方式有着深远的影响。计算机预订系统已经成为主要的航空配
送工具，且已经发展成为覆盖所有旅行方式的全球性系统，并有望
继续向所有地区覆盖。` },

        { pdf: 264, print: 256, content:
`尽管计算机预订系统与全球配送系统经常互换使用，但在航空
调控系统中，计算机预订系统有着特定含义。从定义上看，它是一
个计算机系统，能够显示日程，显示空间可用性和航空关税。通过
该系统，顾客能够实现航空运输服务的预订。
主要发展
伴随着全球化与世界经济的开放，再加上技术进步与市场力量
的推动，航空企业在过去的年里经历了重要转变，航空产品配送
也是如此。
第一个主要变化是，缩小了航空公司对计算机预订系统的所有
权和控制权。过去，计算机预订系统是由航空公司拥有并操作的。
但在过去的几年里，拥有该系统的航空公司基本上放弃了该系统的
所有权。现有的全球四分之三的汁算机预订系统，要么其所有权不
属于航空公司（例如，公众拥有全部该系统在佩剑公司的所有
权），要么实质性地减少了其在航空公司的所有权（例如，公众拥
有该系统在伽利略公司 73 ． 2 ％的所有权，在阿玛迪斯公司则是
40 ％）。只有环通系统的所有权还属于航空公司（德美航空 40 ％；
西北航空 34 ％；环球航空公司 26 ％）。
第二个主要变化是，通过互联网直接销售产品的迅速增长。像
其他旅行或旅游供应商一样，航空公司使用互联网配送产品，是其
销售产品的新方法，同时也是大量减少配送成本的机会。同样，这
也让旅客更加容易地获得信息和实现预订。
另一个变化是，计算机预订系统服务供应商的合并。 1993 年，
有超过 ] 2 家主要的计算机预订系统供应商，现在只有 4 家合资的
供应商。同时，我们也看到，有更多的商家加人了此商业活动，尤
其是在网上直接销售产品给旅客。不仅传统航空公司和计算机预订
系统供应商在这样做，越来越多的第三方供应商也是如此，例如，
旅行代理商（传统的或新生的，速旅公司），零售商（沃尔玛），
软件公司（微软公司）和银行（Priceline. com)。
对于旅行业来说，这些发展既是机遇也是挑战，同时也带来了` },

        { pdf: 265, print: 257, content:
`Part III Chinese Translation of the Sample Texts and Key to Exercise 257
新的调控问题，我下面将会有所涉及。
政府角色
为什么要调控计算机预订系统？上面提到，几乎所有的计算机
预订系统最初都是由航空公司拥有并操作的。计算机预订系统作为
一个有力的营销工具，在竞争压力下有可能被滥用（例如，带有
偏见的展销，对竞争者的歧视）。因此，政府制定调控措施，来表
达对反竞争行为的顾虑，来确保公平竞争，确保可达性的平等以及
维护顾客权益。计算机预订系统的调控已经在国家、区域以及全球
范围得到发展
在经济调控方面，国际民用航空组织的作用是，举办由 186 个
会员国参加的全球性论坛，来制定有关国际航空运输的政策与指
南。这也能协调不同的调控制度。例如，美国、加拿大和澳大利亚
使用的是国家计算机预订系统 i 周控制度，而欧盟、欧洲民用航空委
员会和阿拉伯民用航空委员会采用的是区域制度或计算机预订系统
行为准则。
国际民用航空组织的计算机预订系统运行准则
国际民用航空组织认识到，计算机预订系统为航空运输业及其
使用者带来了巨大的益处。然而，这样的系统也会被滥用。这些系
统希望摆脱航空公司甚至是国家的控制。目前这样的系统相对较
少，但其覆盖范围较广，对市场准人有效实施异常重要。因而，
个世界性的准则显得十分必要
为趋利避害，在 1991 年，国际民用航空组织委员会采纳了
《计算机预订系统调控及运行的行为准则》，这是该组织制定的第
一部准则。全球性准则建立在透明性、可达性以及无歧视的基础
上，以确保计算机预订系统公平运作，对提供服务的航空公司不作
区别对待。四％年月，经过彻底的复核审议，修订了的计算机
预订系统运行准则得以采纳
国际民用航空组织现行的计算机预订系统运行准则，以该系统
运作及调控的一般原则为基础，为全球提供了可行性指南。该准则` },

        { pdf: 266, print: 258, content:
`应用于通过计算机预订系统配送国际旅客航空服务产品。美国已决
定采用，同时，该准则也适用于不具预订功能的计算机信息系统。
构成该准则基础的一般原则是，计算机预订系统用于直接或间接向
旅客配送航空服务产品，通过该系统，服务预订能够实现，该系统
就应遵守相同的规则，承担相应的义务。
关键问题
目前，网上直接销售取得了较大的进展，主要通过个人航空预
订系统和愿意销售自己产品的网站、联合运作的航空门户，包括传
统旅行社和其他代理商运营的第三方网站，以及计算机预订系统本
身得以实现。然而，最近的这些发展也给调控者带来了新的问题。
对于新的商业活动，调控会受欢迎或可行吗？如果计算机预订系统
不再由航空公司拥有和运营，那么，还有必要调控该系统吗？偏见
问题再次涌现。一些国家和地区正在研究计算机预订系统调控制度
的修订。同时，使用并支付费用给相关通信网站这一基本问题，在
发展中国家十分突出。例如，考虑到发展中国家面临的财政限制，
使用强势货币支付交易费用的要求会成为其参与交易的障碍。有可
能缓和此矛盾的办法是，计算机顷订系统销售商调整其价格政策，
允许，至少部分地允许对方使用本国货币支付费用，而有的销售商
已开始这样做了。
为了制定推动国际航空运输进一步开放的政策和导向，国际民
用航空组织也在关注以上问题。事实上，国际民用航空组织委员会
正在考虑，提议举办另一次全球航空运输会议，讨论包括有关产品
配送在内的问题，探讨促进开放过程的相关政策
我想讨论的，与所提议的《旅游附件》相关的另一个问题是，
避免调控重复。我认为，国际民用航空组织的计算机预订系统运行
准则只与航空相关，而《旅游附件》草案中提及的范围更广。我
们关心的是该提议对计算机预订系统以及对航空运输其他方面的影
响，如辅助服务，安全。与旅游业相比，航空业较为细致、独特，` },

        { pdf: 267, print: 259, content:
`Part III Chinese Translation 司 ' the Sample Texts and Key 怖 Exercise 259
易受长期建立起来的综合性调控制度的影响。该制度山 3 開 0 多个
双边航空服务协议以及区域和次区域协议组成。因此，从贸易角度
看，航空运输应该区别对待，独立运行。
我们认为，从航空运输角度看，《旅游附件》草案会导致理解
上的问题，它的实施会很复杂，覆盖范围会有重复。涉及国际民航
组织的责任、航空运输服务贸易总协议附件的规定时，重复率会更
高。因此，让草案力图涉及这些问题是不合适的。没必要利用其他
条款来促进开放进程。这一点已在 1994 年的世界航空运输会议上
得到认可，并且将简化调控作为航空运输业未来调控的目标之一
（如果要了解详细情况，请参阅国际民航组织对《旅游附件》草案
的意见。）
总结
总之，随着技术的进步和日益激烈的市场竞争，旅行业正在发
生迅速的变化。处理计算机预订系统的调控系统，有望在全球、区
域以及国家三个层面得到发展与更新。然而，我们正面临着新问题
与新挑战，尤其对于发展中国家而言，需要有关各方面的参与，让
这些问题与挑战得到恰当处理。对《旅游附件》草案涉及的问题
与顾虑，应给予仔细考虑。在航空运输方面，国际民用航空组织将
继续与世界贸易组织进行密切合作。
##Exercises
I. Directions: FiII in the blanks in English based on the information pven in the brackets.
oI am chair of this panel
@for their presentation
OThat will be followed by
@4 am going to invite ($)Let me just very briefly introduce
Ostudied, and photographed a wide range of internationally recog-` },

        { pdf: 268, print: 260, content:
`nized (j)inno, rauve approaches are needed ($)It is argued in this paper that
@in this regard
OThe presentation will address
@TheoreticaI and methodological discussions
@For theoretical contrast
ßone of the most impmtant, but often neglected aspects of
UThis paper will focus on
05CentraI to all 鬲 thern are
ßIt is suggested here that fiencourage a synthesis of old and new approaches
亻思 It could also provide insight as to
OSome see (ethnic encla, '吓) as
JOthers describe (them) as
@the focus of
2The presentation will also attempt to address these problems
1 argue that published recently
<>了 e a couple 0 I minutes for some response on
- 2. Direetions: l'ranslate the following into English.
I would like to start by thanking the Chair, for inviting me to part of this Forum I thank you for giving me th1S opportumty to share with you some 0 「 my thoughts and princ, ipally 蜘 leam quite a 10t by being here.
The topic I will discuss IS "Double Conscnousness in tlle Construction of African American ldentity ‰ 'lhis presentation is based on my recent study of the rnaJor novels by Afncan American wnters in the` },

        { pdf: 269, print: 261, content:
`Part III Chinese Translation 訂 the Sample Texts and Key to nxercise 261
20th century. The examination 0 I these novels indieates that there was a high correlation between Afncan Amerrcan literary wnti ngs and African
Arnencan social and psychologwal culture. African American novels in the 20th century reveal a sense of "Double Conscnousness" of the writers and imply their explorations for the cultural identity of the Arnerican black. During this course, three inclinations are evident, the orientation to white predominant society, the assertion 司. the Black identity, highlighting the African Americanness to improve racial pride and № strengthen racial unity against the whlte racism and ethnocentrism, and the claim of being both American and Afncan American. These onentatlons are also the case on the part of the ordinary African A mericans.
Cultural identity is obJective and natural and meanwhile subjective and constructional. "Double Consciousness" sheds light on the psychology of the African Americans. ldeas of cultural identity by African American wrlters may vary or converge alon Wlth the changes in time, society and personal expenences.
- 3. Writing (Omitted)` }
      ]
    },

    {
      id: "p3-u12",
      part: "Part III",
      unit: "Unit 12",
      title_en: "Question and Answer (Q&A) Session",
      title_cn: "问答环节",
      print_start: 262,
      pages: [
        { pdf: 270, print: 262, content:
`#Unit 12　Question and Answer (Q&A) Session
##Sample 参考译文
卫生保健和质量局 2m7 年年会市政厅会议
2 開 7 年 9 月 27 日
卡罗琳，克兰西：好的，先向这出色的座谈小组表示谢意，现
在轮到你们来提问了。我应该告诉过你们，座谈小组也知道，我们
要为此次会议录音，以便方便想要了解此次会议的人们登录进行收
听。但我得告诉他们，“今年恐怕不行了，下一次的卫生保健研究和
质量局会议再登录收听吧 "。我们现在整个会议厅里都装了麦克风，
我们会邀请各位来介绍自己。座淡小组将回答大家提出的问题。
我看到有两位站起来了，我把话筒转过去。请问二位是？
芭芭拉 · 法赫敏：大家好，我是芭芭拉．法赫敏。我在科罗拉
多州一个员工补偿部门工作。我想我得留心一点。我想对来自万豪
的那位演说者提一些建议，很抱歉我忘记你的姓名了。 [ 主持人克
西博士回答说：吉尔 · 伯杰 ]。是哪位？ [ 吉尔 · 伯杰我的建
议是，当您雇佣新的员工时，试着把每个雇员作为潜在的病人和雇
员来定位，当人们对自己的工作充满热情又作常警惕的时候，先为
他们的健康做些简单的预防措施，以便他们能够从自身出发关注自
身保健。例如，关注非处方用药过量服用的危险。当你去看医生或
护士的时候，提些问题便能得到相应回复。提供临时性服务的操作
培训，并更好地展示这种能力，这或许对于从事酒店汇作的人来说
比较重要假如你在工作中受了伤，不仅要考虑要去哪儿，还要考
虑你应该做些什么，事故报告该如何写，我应该上报何类事故，意` },

        { pdf: 271, print: 263, content:
`Part III Chinese Translation the Sample Texts and Key № Exercise 263
外伤害发生的时间，等等。因此，从一开始在事故发生前就着手处
理这些情况，或许会是个好办法。以上是我的建议。
吉尔．伯杰：好建议，谢谢！
卡罗琳 · 克兰西：这位？
佩里庵科恩：谢谢。我叫佩里 · 科恩，我从事帕金森管道工程
项目。这是一个由病人倡导的组织，一个基层组织。我还参加了一
个工作组，为询证健康保健单位工作。这是一个由 45 个病人组织
形成的联盟，他们都热衷于对健康服务的研究，并乐于参与类似于
我们所进行的这种讨论。我感谢卡罗琳从病人角度所提供的所有支
持。当然，病人作为研究的参与者，是临床研究发展的关键。然
而，我们不像那些做实验的老鼠，我们希望能够参与政策制定。我
的问题与自救和病人授权的信息技术的使用有关。刚才有位参与医
疗辅助计划的发言者，他提到了带有挑战性人群。我想要问一下，
是否他认为这些人已经做好了准备，或者说，考虑到这些人不像我
们一样有条件享受互联网的便利，他们或许没有电脑，或者无法使
用网络，或者其他一些诸如此类的问题。那么，他将如何想办法提
供帮助，让这部分人所面临的信息技术问题得以解决， ' 谢谢。
卡罗琳 · 克兰西：汤姆？
汤姆 · 克莱恩：那么，谈到将信息技术运用于医疗辅助计划人
群，这肯定比较艰难而且带有挑战性。我们第一次从事疾病管理项
目时遇到的疾病是哮喘，我们发现了约 25 名患者正在住院治疗
或者急诊就医，我们认为这对我们来说难度最大。很遗憾，我们只
能联系到 3 名患者，因为他们使用电话不方便，更不用说互联网
了。我们也尝试着给他们写信，我们寄出了大约 1）封信件，只
得到了 18 封回信。因此，对我们来说，通信是一个非常非常麻烦
的事情。说到互联网，在医疗补助计划办公室，我们已经研究制作
出医疗电子记录系统，信息提供者也能进人这一系统。当然，这还
不能适用于所有人，但这正是我们下一步所要追求的目标` },

        { pdf: 272, print: 264, content:
`你确实提到一些有关行为健康的问题吗？
佩里 · 科恩：我吗？
汤姆 · 克莱恩：我们提供的行为健康服务是事医疗辅助计划的
一项内容，我们已经接收到一些信息，但不一定都是关手行为健康
需要使用的信息。在我们的内部成员中，从患者或者成员的角度来
看，我认为信息技术在此刻并不是一个重要问题。
佩里 · 科恩：好的，谢谢
卡罗琳 · 克兰西：谢谢你，还可以再问一个问题。
莫林 · 斯特里特：大家好，我是莫林 · 斯特里特。我是密歇根
州一个社区卫生服务中心的医疗总监，我想向克莱恩博士提个问
题。您能对医疗辅助保健组织对于您在个案管理上产生的影响做个
评价吗？特别是那些营利性质的医疗辅助保健组织。
汤姆 · 克莱恩：当然可以。保健组织在爱荷华州所占比例并不
大。几年前，我们有三个管理式医疗保健组织为享受医疗补助计划
的人提供服务。总人数在巧 00o 人左右。目前，我们有一个 5 （)( 用
人左右的组织。这也是共同合作的结果。我很了解医疗总监在医疗
管理方面所做的工作。我们着手疾病管理项目时，涉及的许多内容
也是他们在疾病管理项目中所涉及的，所以说并没有什么不同。而
且，享受医疗补助计划的人群将得到持续的照料。不幸或者幸运的
是，除了我们初级保健个案管理项目外，管理式医疗保健在爱荷华
州没什么大问题。
莫林．斯特里特：谢谢您
卡罗琳 · 克兰西：很好，我敢肯定你们和我都有着共同的感
触，并借着在此所听到的建议，希望马上能付诸行动。让我们一同
感谢座谈小组为我们带来的这次绝佳的会议。
##Exercises
- l. l)irections: FilI in the blanks in English based on the information
gwen in the brackets.` },

        { pdf: 273, print: 265, content:
`Part III Chinese Translation.「 the Sample Texts and Kev to Exercise 265 ol think we have Just a few mmutes for any questions that an,, one might have (2)W ho would like to lead 0 仃
Go ahead
4 I have a question
04n rny opinion
@Have you people addressed this and do you feel the sarne way
I do
Ølet me try to answer that from a general perspective
@Do any you want to comment on that
〔 94 was going to say
00I think some of the questions that you raise have to be taken in light of the economy or COn
0 ] didn, t understand your question initially
UYou were asking if we beli, ved that
OThe answer is absolutely yes
$Next question (jOMy narne is
@one 鬲 my specialties
@$I also wanted to ask
@if you have ever had any expenence in
, One last question
@clear up a rmsunderstanding would like to close the session by thanking
- 2. Directions: Translate the following into English
(DWe will now begin the question and answer sesslon.
like to ask a question, please raise your hand.
任 you would` },

        { pdf: 274, print: 266, content:
`@We dO have a couple of questions coming up.
(9First question comes from Patrick Wnght.
0) Go ahead with your question please.
6)Have We got another question?
(6)Thank you for the question.
t)—would you please identify who you're with?
—I, m with The Johnson Cornpany in West Virgima.
@—l'm wondermg however anybody, s ever done any research to actually show. 一?
—Thank you very much. l'm going to ask Dr. Smith to answer that if he can.
,月 would refer you to a number of studies that have been conducted and published concermng the topic.
OI'm going to ask Dr. Harry to respond to that.
OLet me answer you in tWO ways.
appreciate the second speaker, s comments about social welfare instltutions
OThis concludes today, s question & answer sesslon.
- 3. Writing (Ormtted)` }
      ]
    },

    {
      id: "p3-u13",
      part: "Part III",
      unit: "Unit 13",
      title_en: "Closing Speech",
      title_cn: "闭幕词",
      print_start: 267,
      pages: [
        { pdf: 275, print: 267, content:
`#Unit 13　Closing Speech
##Sample 1 参考译文
世界青年事务部长会议主席的闭幕词
总理阁下的副部长乔斯．苏格拉底
尊敬的联合国秘书长特别代表
尊敬的大会秘书长
尊敬的部长们
尊敬的各国大使们
尊敬的各国代表们
女士们、先生们
大会开幕这五天以来，我有幸主持了这场会议，在此闭幕之
际，我希望大会圆满成功，收到预期的成效。这次大会提供了绝好
的机会，加强了年轻人与各国青年政策决策者之间的联系。我们认
为这次大会不会让我们的愿望落空。
会上，我们有机会分享经验，彼此作出承诺；我们感到我们关
心的事情基本是一样的；从大会的发言中我们了解到，一些国家年
轻人的生活受不确定因素的干扰，对此，我们深有感触。
但是，总而言之，我们有机会了解到各国共有的政治愿望，即
21 世纪的年轻人应该自己主宰自己的命运，能够促进和实现他们
切实的愿望和理想，这些愿望我们已在会上谈及很多，如处理好环
境保护、教育、就业和医疗保障、药物滥用、人权等问题。
我非常高兴地宣布，我们刚通过的《最后宣言》为 2 年以
及未来联合国青年行动纲领的执行迈出了决定性的一步。
但是我们都知道这远远不够` },

        { pdf: 276, print: 268, content:
`正如某人曾经说的：“如果所有拯救世纪的话都说了，现在最
重要的事情就是拯救它。
国家、机构、青年组织有必要一起努力行动起来，履行我们的
承诺
这正是我们需要开始做的。如果我们已明确所有的想法，认可
所有的策略，现在最重要的事情就是去实践它
我想请斯维里先生向秘书长阁下以及联合国转达我们对他们工
作的敬佩和由衷的感谢。（此外，）世界青年事务部长会议得以召
开，完全是葡萄牙与联合国共同努力、密切合作的结果。
最后，感谢各位到里斯本参加这次会议，感谢你们的努力、耐
心和帮助，否则的话，本届会议不会取得成功。
非常感谢，再见。
##Sample 2 参考译文
澳中自由贸易协定会议闭幕词
一一未来的发展方向
外交贸易部部长阿什顿 · 卡尔弗特先生
悉尼， 2 年 8 月
谢谢阿兰
昨天我在大会开幕致词中说道，我期望我们的谈话能够有助于
更加深人地了解自由贸易协定研究中涉及的一系列问题。
从我的角度来看，我们不仅仅只达成了这一个目标
每一次会议都有助于我们更深人地了解问题。
我们已经考虑到自由贸易协定将带来的更广泛的经济政治效应，
我们也认真讨论了自由贸易协定给中澳双方带来的特殊机遇和挑战。
大家对会议表现出极大的热情，参会者达两百人之多，这是一` },

        { pdf: 277, print: 269, content:
`Part III Chinese Translation the Sample Texts and Key to Exercise 269
件非常令人欣慰的事。
很明显，商界和其他更广的群体高度重视自由贸易协定研究以
及自由贸易协定与中国的探讨。
很多参会者一致认为，本次会议的举办正合时候。
我们关注的话题以及我们的兴趣所在表明一个事实：自由贸易
协定已成为澳大利亚和中国关注的热点问题。
自由贸易协定成立的理由依据
我从大会的讨论中得到的最重要的信息也许是，中澳双方自由
贸易协定能否达成，最主要的动力取决于这样的协定是否能为双方
带来明显的经济贸易利益。
很明显，自由贸易协定也能带来其他的利益，这一点我将在后
面做阐述。
但是，最重要的一点是，可行性研究需要为自由贸易协定建立
起清晰的、有关经济贸易活动的理论依据。
澳大利亚政府和私营部门磋商时，应该首先考虑协议是否能为
双方带来经济贸易利益。
大会讨论主要列举出了支持自由贸易协定的有力观点，也指出
了有哪些支持它的关键领域，但也提出了一些疑义和担忧。很明
显，我们还有很多工作要做。
大会上一些发言人认为，自由贸易协定除了经济贸易的直接利
益之外，将成为中澳双方政治关系坚实牢靠的明显标志。
它也有助于中澳双方在泛区域基础建设以及区域内贸易中共享
利益，有助于构建一个繁荣、和平、稳定的亚太地区。
总而言之，自由贸易协定可从战略上定位双方的长期关系，中
澳政府所达成的正式约定将有助于今后双方建立全面成熟的关系。
在中国的政策制定方面，澳大利亚也会产生影响。当其他国家
与中国建立自由贸易协定时，澳大利亚仍能保持竞争优势
活力与机遇
大会讨论的另一重要主题是，中国在国际事务中扮演越来越重要` },

        { pdf: 278, print: 270, content:
`的角色，它的商业能力强，能带来利益，是一股不可阻挡的经济活力。
正如几位发言人所说，中国的经济和产业发展迅猛，彻底改变
了全球和区域性的贸易、投资和生产模式。
我们还有幸能直接了解到这一发展是怎样影响到一些特殊的部
门以及澳大利亚的公司。
很明显，还有人强调，这些发展对澳大利亚的国家利益非常
重要。
中国的对外影响力与日俱增。同时，中国正在转变发展中的经
济也对国内社会和社区的很多方面产生了影响。
城市化进程很快。有的发言人指出，在中国，每年有一千万农
村人口迁移到城市，加快了基础设施的建设步伐，而工程的开展则
需要从国外进口材料和资源。
可支配收人的提高使中国人能购买更多消费品，享受专业服
务，这是前所未有的。有的发言人还指出，澳大利亚在电子化区域
管理和服务方面具有优势，可以投人到快速增长的消费者市场和产
业市场。
前景和挑战
正如我所说，自由贸易协定应该平衡中澳双方在经济、贸易和
投资利益方面的机会，以实际的方法去面对潜在的挑战。
澳大利亚的矿业和能源部门已和中方建立了贸易和投资关系，
合作力度还在不断加强。
很明显，在这一领域的贸易合作前景相当乐观。虽然矿产企业
和能源公司不面对中国市场内存在的一些严峻问题，出于整体考
虑，它们支持自由贸易协定。
大会发言者们也指出自由贸易协定可以改善投资环境，推动澳
大利亚在中国市场的商业活动。
虽然一些澳大利亚公司在拓展中国市场方面很成功，但是仍存
在一些问题会限制外国公司的自由运转
这些问题包括标准、法律体制、规章制度、外商投资协议和财` },

        { pdf: 279, print: 271, content:
`Part III Chinese Translation of the Sample Texts and Key to Exercise 271
产权。
我们的讨论凸显了澳大利亚产业所面临的问题的重要性，必须
在工作之前先把这些问题考虑进去。
中国的经济和贸易制度有其自身特点，它能反映过去和现在的
发展水平。
这些现实和重要的差异都是需要进行协商的议题，不能因此而
退缩，回避与中国的贸易往来
讨论指出，中国与全球经济正融为一体，所以这些问题需从不
同的层面进行探讨、解决。
农业对于两国都是很重要的，在自由贸易协定议程上也起关键
作用。由于澳大利亚在万亩种植方面的相对优势，有的发言人指
出，澳大利亚在谷物和羊毛生产方面还有很大潜力，可以扩大出
口量。
正如有的发言人所说，自由贸易协定会提出一个合适的方法来
探讨关税、限额和其他的一些障碍问题。
很多讨论结果认为，有必要降低配额，这样买方和卖方才能共
同努力，实现最佳效果。
从大会发言中，我们也了解到羊毛工业遇到的困扰，例如原毛
和经加工过的羊毛间关税的差别，以及这些差别对竞争激烈的纤维
市场的影响。
制造业部门的竞争特别激烈。从长远来看，澳大利亚制造商仍
将面临来自中国和其他国家的激烈竞争。
大会上，澳方的制造商表示他们愿意尽可能地投人利益可观的
中国制造业。
正如希瑟 · 里杜特所说的那样，澳大利亚的制造业与中国已经
紧密地联系在一起。我认为我们要做的不是保护我们本民族工业，
而是应该加强与中国市场的融合
中国的经济为澳大利亚服务供应商们提供了广阔的前景，尤其
在教育、法律、保险、银行、旅游、通信、建设和后勤等领域。据` },

        { pdf: 280, print: 272, content:
`估计，中国 10 ％的人正步人中等收人阶层，对专业服务的需求将
迅猛增长。
中国已成为我们教育服务的最大市场。随着经济的发展和收人
的增长，其潜力势不可挡。
我认为，大会探讨了中国市场经济的地位，这是非常有用的，
特别是大会指明了虽然中国是市场经济的地位，但并不表明它自身
是市场经济体制。
谈及中国的市场经济状况，我们主要针对反倾销，同时，让中
澳双方以平等的方式探索自由贸易协定。
将来制定任何互能支援政策时，最基本的前提是澳大利亚有权
保护其产业的合法权益。
本次大会为商业团体、政府和其他利益相关的团体提供了一次
较好的机会，大家对有关自由贸易协定研究的重要问题展开了一次
开放式的、积极的讨论。
这次的讨论非常有意义，将进一步推进我们的研究工作。
我们将一如既往地保持与商界和所有利益相关者的密切联系与
合作，直到上半年研究探讨结束为止。
感谢大家提交了详细、有深度的发言稿，里面倾注了大家的
心血。
我希望并敦促商界的其他人士也能提交类似的文稿。
会议结束之际，我想说，大家参会的热情很高，并为大会作出
了较大的贡献，我在此表示感谢
因为商界慷慨协助，我们才得以举办这次会议。
诚挚感谢所有赞助者慷慨赞助。
感谢我们的中国客人，还有龙永图，澳大利亚的老朋友，以及
傅颖大使。
最后，还要感谢艾伦 · 奥克斯里及其亚太经贸合作组织研究中心` },

        { pdf: 281, print: 273, content:
`Part III Chinese Translation the Sample Texts and Key to Exercise 273
的同事，感谢他们对外交和贸易政策的重要问题所做的发言和探讨。
谢谢！
##Exercises
- l. Directions: Fill in the blanks in English based on the information
gwen in the brackets.
(Dis now drawmg to a close
@I would like to take th1S opportunity oextend my sincere gratitude and appreciatlon
@making this event a great success
$)fruitful
6)make the most
Oshared your expenences and expertlse with
OWe are also very grateful to
@look forward to seeing you all again
OSeminar
@>have a safe Journey home
- 2. Directions: Translate the followmg into English
The 5 th Forum of International Cultural Studies was held in Kunming and hosted by Institute of Asian Cultures on April 5 一 7, 2011. lt is an important event, providing a very unique opportumty for the scholars and expens from all over the world to communicate and collaborate.
On behalf of the Organizing Committee, I would like to gwe our thanks to all involved for your support and parhcipation in making the
Forum a great success. This was a fruitful Forum for all attendees. We smcerely hope you all enjoyed the event.
We hope that you enjoyed your visit to Kunming. We look forward to meeting you at the 6th Forum of International CulturaI Studies in` },

        { pdf: 282, print: 274, content:
`Bangkok in May, 2013,
- 3. Writing (Omitted)
##Supplementary Reading
##参考译文
大会闭幕词
“创造性可以被衡量吗？”
教育和文化总署
海伦理 · 克拉克
毫无疑问，大会说明了创造性作为教育和培训的主要成分的重
要性，而且，我们需要全方位的努力以促进和提高教育水平。创造
力是关键能力的一个重要表现，对个体的身心健康和社会的发展都
大有益处。创造力能使欧洲更具创新力，让每个人都能领略欧洲文
化的丰富多彩。
然而，我们现有的教育体制能提升创造力吗？通常，人们认为
教育扼杀创造性。诚然，教育体制内外的很多做法可能会扼杀创造
力，但还应看到的是，很多优秀的学校和教师培养了各种人才，他
们创造了一个鼓励求知的学习环境，帮助儿童和青年学习知识，使
之成为真正的终生学习者。因此，制定政策所面临的挑战就是，明
确这种经历是如何创造的，是亻 1 么样的老师和学校领导使之成为可
能，总体的教育和培训政策怎样让这样的学校得以发展。
正因如此，我们需要更好地了解如何衡量创造性。要让每所学
校的每个学生都能接受创新教育，我们就必须明白到底什么是创造
性；如果我们成功地培养了创造性，我们应说些什么。关于创造性
的探时我们才刚刚起步。在为期两天的会议中，你们提出了一系列
需进一步考虑的问题，以及对未来工作有用的建议。我将强调其中
的几个问题，它们直接关系到我们如何支持儿童和青年的学习。` },

        { pdf: 283, print: 275, content:
`Part III Chinese Translation the Sample Texts and Key to Exercise 275
昨天，有的发言提到，在一个宽容、尊重多样性的环境中，最
易培养创造性。还有人认为，一定程度的自由、信任、接受失败是
创造性的催化剂。的确，这对教学有直接的启发意义：我们在帮助
年轻人变得包容、尊重对方的同时，怎样激发创造性，鼓励创新思
维？我们怎样改变学校里的评估文化，建立一个更能允出错、敢
于冒险的制度？
第二个重要问题是，创造性的利用有积极的一面，也有消极的
一面。这意味着，在教育中，我们既要鼓励创造和言论自由，又必
须遵守社会认可的价值观和道德准则。现在的年轻人常常通过互动
媒体来传达他们的想法，活跃社交网站，所以我认为，自由创造的
同时必须遵守社会规范，这一点很重要。
另一种有趣的看法是，创造性不具有大众性的特质，它也许仅
在一些特定领域或针对一些任务存在。这就是说，例如教育，如果
不同的学科想要变得更有创新性并能对创新作出贡献，就须给这些
学科提供不同的支持。而且，这种看法实际上暗示了一个问题一一一．
如何衡量创造力？最后，不能低估各自所起的作用。我们这些教育和
培训机构的人士需要思考的是：我们是否看问题过于认真、下结论
过早了？
在我看来，创造性的问题使我们对政策方面的一些问题有了新
的认识，这非常有趣。长期以来，我们和成员国都在一直探讨这些
政策：为培养关键能力开设课程，师资教育，发展学校，防止教学
失败及辍学。这次大会指出了这些问题是如何紧密相连，以及创新
和革新力是如何巩固这三大政策的发展的。的确，也许创新和革新
力应成为检验教学质量的标准。但是，正如我今早所说，因为无法
评估进展，很多关于人类学习的基本方面都被忽视了评估对于创
造性以及横向的关键能力都至关重要。
这次大会是迈向主要目标的第一步。虽然我们需要接受一个事
实，即衡量创造性就是衡量它的一些方面。这两天我们听到的各种
演讲内涵丰富，对各种可行的方法做了一个概览，让我们进一步学` },

        { pdf: 284, print: 276, content:
`会各种可能的方法，用比较的眼光去审视创造性。我们离最终的答
案还很远，但我们已跨出第一步
只有通过相关利益者、研究人员、实践人员、政策制定者和学
习者自身不停的探讨，才可得出答案。每年的创新与革新大会就是
开始这一行程、和所有人对话的最佳时机。然而，我们不能指望立
刻得到答案，我们要为来年的合作打下坚实的基础，使之持续发展。
我想提醒你们一点，从此意义上来说，教育与培训合作的新战
略计划有着较好的前景：创造力与革新已经提到新的日程。新的战
略计划有助于我们将创新力融人到与成员国的合作中，为所有欧洲
人能够终身受教育而努力。
我深信，这次精彩大会的讨论结果为我们逐渐了解衡量创造性
的方法打下了坚实基础．．．．“祝大家工作愉快` }
      ]
    },

    {
      id: "p3-post",
      part: "Part III",
      unit: "后记",
      title_en: "Postscript",
      title_cn: "后记",
      print_start: 277,
      pages: [
        { pdf: 285, print: 277, content:
`#后记
《国际学术会议英语与跨文化交流》一书是 2010 年度云南大
学研究生精品课程建设项目“国际会议英语”的一个重要组成部
分。为进一步增强研究生公共英语课教学的针对性和实效性，切实
提高研究生运用英语进行专业学习、科学研究和国际交流的能力，
该项目重点放在“会议文献阅读、相关议题的写作练习和口头表
达 " 上面，为参加以英语作为汇作语言的国际学术会议做好热身
训练。
本教材以真实的会议文献材料为学习范文，并在参考各种会议
内容的基础上编写了课后练习！所附范文译文有利于学习者更好地
理解原文；汉译英和写作练习能够帮助学习者更好地表达思想，适
应不同场景的需要。为了突出“真实性 "，有利于更好地了解不同
场景下会议所涉的内容，所选用的材料尽量保持原文的完整性，篇
幅稍长的范文也尽量少作删减。同时，阅读范文本身也是英语学习
的一个重要内容，学习者可以按照“模拟大会发言稿 " 中所建议
的方法去阅读原文，提高用英语归纳总结、撰写提纲的能力。第二
部分以国际学术会议场景为出发点，介绍有关跨文化交流的一些常
识，对参会者有着较好的参考价，既涉及英语学习，又有文化理
解方面的内容，将语言与文化学习融为一体
为了表示对文献提供者的感谢，同时方便感兴趣的读者查询，
所选范文以及练习编写过程中参考过的资料均在相应的地方注明出
处。同时，词汇及表达的编写以及翻译过程中所用的（纸质、在
线或光盘版）词典均在参考文献中列出，一来表示对原作者的感
谢，二来也说明编写的依据。还需补充的是，所选文献均出自各种` },

        { pdf: 286, print: 278, content:
`会议网站，当时进人网页查询、下载后，已经社明」鬥址住旧不
的编写过程中，需要时也能够点击再次进人，网址没问题，但不能
保证今后永远都能打开进人。
在搜集原始资料的过程中也碰到不少困难，难以找到最新但又
适合人选的材料；音频、视频文件极少，能够下载的更是微乎其
微，仅有某一场景的资料是不够的，所以没能选用。查询“纯粹”
国际学术会议不同场景的材料也很困难。教材使用的文献中，有些
显得“旧了点 "，难以突出所谓的“现实性”。有的不一定是严格
意义上的“学术 " 会议。但是，作为学习、训练使用，这些文献
有较好的参考价值和实际意义。同时，既然这些会议有学者、研究
人员参加，是在“研究”、探讨问题，就权当“学术会议”材
料了。
感谢云南大学研究生院的支持，感谢云南大学外国语学院的关
心，感谢云南大学出版社张丽华（小）的帮助
2012 一 4 一 24` }
      ]
    }
  ]
};
