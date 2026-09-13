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
    transcribed_pages: 47
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
    }
  ]
};
