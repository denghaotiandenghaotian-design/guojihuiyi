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
    transcribed_pages: 20
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
    }
  ]
};
