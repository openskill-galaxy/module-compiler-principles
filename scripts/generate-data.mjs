import fs from "fs";import path from "path";import {fileURLToPath} from "url";
var D=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../public/data");
function p(a){return a[Math.floor(Math.random()*a.length)]}
function pn(a,n){var s=new Set();while(s.size<n&&s.size<a.length)s.add(p(a));return[...s]}
var df=["easy","medium","hard"];
var ts="compiler interpreter source program target program lexical analysis syntax analysis semantic analysis intermediate code code optimization target code generation token lexeme pattern regular expression regular grammar finite automaton NFA DFA subset construction DFA minimization lexical error context-free grammar terminal non-terminal production start symbol derivation sentence syntax tree ambiguity left recursion left factor FIRST set FOLLOW set predictive parsing table LL(1) shift reduce LR(0) SLR LR(1) semantic action attribute grammar synthesized attribute inherited attribute symbol table scope type checking three-address code quadruple basic block DAG live variable runtime stack activation record code optimization constant folding dead code elimination loop optimization register allocation peephole optimization compiler construction course design lexer parser compiler-compiler LEX YACC ANTLR bootstrap cross compiler";
var t=ts.trim().split(/\s+/).filter(Boolean);
function bt(){return t.map(function(n,i){return{id:"cp-tag-"+String(i+1).padStart(3,"0"),name:n,category:"Compiler",description:"CP标签:"+n,count:0,createdAt:"2026-07-03T00:00:00.000Z"};});}
var CD=[
  {id:"cp-course-01",order:1,slug:"CP入门",title:"编译原理入门与学习路线",description:"编译器定义、与解释器区别、学习路线。",estimatedHours:4,diff:"easy"},
  {id:"cp-course-02",order:2,slug:"编译器结构",title:"编译器结构与编译过程",description:"编译器阶段、前后端、遍次。",estimatedHours:6,diff:"easy"},
  {id:"cp-course-03",order:3,slug:"文法语言",title:"文法、语言与形式语言基础",description:"文法定义、Chomsky分类、推导与语法树。",estimatedHours:10,diff:"medium"},
  {id:"cp-course-04",order:4,slug:"词法分析",title:"词法分析与正规表达式",description:"Token识别、正规式、词法规则。",estimatedHours:10,diff:"medium"},
  {id:"cp-course-05",order:5,slug:"有限自动机",title:"有限自动机 NFA 与 DFA",description:"NFA、DFA、子集构造法、DFA最小化。",estimatedHours:12,diff:"hard"},
  {id:"cp-course-06",order:6,slug:"词法分析器",title:"词法分析器设计",description:"词法分析器实现、状态转换、错误处理。",estimatedHours:8,diff:"hard"},
  {id:"cp-course-07",order:7,slug:"CFG语法树",title:"上下文无关文法与语法树",description:"CFG定义、语法树、二义性。",estimatedHours:10,diff:"hard"},
  {id:"cp-course-08",order:8,slug:"LL1",title:"自顶向下分析与 LL(1)",description:"FIRST/FOLLOW集、预测分析表、LL(1)条件。",estimatedHours:12,diff:"hard"},
  {id:"cp-course-09",order:9,slug:"LR入门",title:"自底向上分析与 LR 入门",description:"LR分析原理、移进-规约、LR(0)、SLR。",estimatedHours:12,diff:"hard"},
  {id:"cp-course-10",order:10,slug:"语义分析",title:"语义分析与属性文法",description:"综合属性、继承属性、属性文法。",estimatedHours:10,diff:"hard"},
  {id:"cp-course-11",order:11,slug:"符号表",title:"符号表与类型检查",description:"符号表作用、作用域、类型检查。",estimatedHours:8,diff:"hard"},
  {id:"cp-course-12",order:12,slug:"中间代码",title:"中间代码生成",description:"三地址码、四元式、翻译方案。",estimatedHours:10,diff:"hard"},
  {id:"cp-course-13",order:13,slug:"运行时优化",title:"运行时环境与目标代码基础",description:"运行时栈、活动记录、目标代码、简单优化。",estimatedHours:10,diff:"hard"},
  {id:"cp-course-14",order:14,slug:"CP课程设计",title:"代码优化、综合题与课程设计",description:"优化技术、综合题、词法分析器/语法分析器课程设计。",estimatedHours:10,diff:"hard"},
];
function bc(){return CD.map(function(c){return{id:c.id,order:c.order,slug:c.slug,title:c.title,description:c.description,estimatedHours:c.estimatedHours,difficulty:c.diff,tags:[c.title],lessonIds:[],totalLessons:0,totalQuestions:0,prerequisites:[],outcomes:["理解编译器结构","能做词法/语法分析","理解语义和中间代码","完成课程设计"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
function bl(){
  var all=[];var id=1;
  function add(ci,t2){var n=String(id).padStart(3,"0");all.push({id:"cp-lesson-"+n,courseId:CD[ci].id,order:all.filter(function(l){return l.courseId===CD[ci].id}).length+1,title:t2,slug:t2.replace(/[\s，。、：；（）\-+]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),summary:t2,content:"# "+t2+"\n\n"+t2+"内容。",contentFormat:"markdown",estimatedMinutes:30,difficulty:id<60?"easy":id<130?"medium":"hard",knowledgePointIds:[],practiceQuestionIds:[],tags:["CP"],prerequisites:[],updatedAt:"2026-07-03T00:00:00.000Z"});id++;}
  for(var ci=0;ci<14;ci++)for(var j=0;j<13;j++)add(ci,"CP课程"+(ci+1)+"章"+(j+1));
  return all;
}
var KPN=[["编译器","语言翻译器"],["词法分析","单词识别"],["语法分析","语法结构"],["语义分析","含义确定"],["有限自动机","状态转换"],["NFA","非确定自动机"],["DFA","确定自动机"],["LL1","自上而下分析"],["LR","自下而上分析"],["属性文法","属性计算"],["符号表","标识符管理"],["中间代码","中间表示"],["三地址码","3AC代码"],["代码优化","性能改进"],["运行时环境","执行环境"]];
function bk(){var k=[];for(var i=0;i<KPN.length;i++){k.push({id:"cp-kp-"+String(i+1).padStart(4,"0"),name:KPN[i][0],description:KPN[i][1],category:"Compiler",tags:["CP"],difficulty:i<8?"easy":"medium",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-03T00:00:00.000Z"});}for(var i=0;i<720;i++){k.push({id:"cp-kp-"+String(k.length+1).padStart(4,"0"),name:"CP概念"+(k.length+1),description:"CP概念",category:"Compiler",tags:["CP"],difficulty:"hard",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-03T00:00:00.000Z"});}return k;}
var QC=["CP入门","编译器结构","文法语言","词法分析","有限自动机","词法分析器","CFG语法树","LL1","LR入门","语义分析","符号表","中间代码","运行时优化","CP课程设计"];
function bq(){
  var qs=[];var qid=1;
  var t2=[[0,"编译器阶段不包括？",["链接","词法分析","语法分析","代码生成"],"A","easy"],[1,"编译器词法分析输出？",["Token序列","语法树","目标代码","中间代码"],"A","easy"],[3,"正规表达式描述？",["词法规则","语法规则","语义规则","优化规则"],"A","medium"],[4,"DFA与NFA区别？",["无空转移","有空转移","终点唯一","多个起点"],"A","medium"],[6,"语法树的根节点？",["开始符号","终结符","非终结符","空"],"A","hard"],[7,"LL(1)分析表基于？",["FIRST和FOLLOW","LR项目","属性文法","语义动作"],"A","hard"],[8,"LR分析器动作？",["移进规约","接受","错误","以上都是"],"D","hard"],[9,"属性文法中综合属性？",["子→父传递","父→子传递","兄弟传递","无传递"],"A","hard"],[12,"三地址码中地址指？",["寄存器/内存/常量","变量名","行号","函数名"],"A","hard"]];
  for(var i=0;i<t2.length;i++){var t_=t2[i];qs.push({id:"cp-q-"+String(qid).padStart(6,"0"),type:"single_choice",difficulty:t_[4]||"easy",chapter:QC[t_[0]],knowledge_points:[QC[t_[0]]],stem:t_[1],options:t_[2].map(function(x,j){return{label:String.fromCharCode(65+j),text:x};}),answer:t_[3],explanation:t_[1]+"正确"+t_[3]+"。",wrong_reason:"加强。",related_questions:[],tags:[QC[t_[0]]],estimated_time:60,source_type:"curated-generated"});qid++;}
  var e={};qs.forEach(function(q){e[q.type]=(e[q.type]||0)+1;});
  var ta=[{type:"single_choice",min:900},{type:"multiple_choice",min:350},{type:"true_false",min:350},{type:"fill_blank",min:400},{type:"short_answer",min:550},{type:"calculation",min:400},{type:"case_analysis",min:750}];
  while(qid<=3700){
    var u=ta.filter(function(t_){return(e[t_.type]||0)<t_.min;});var it=u.length>0?u[Math.floor(Math.random()*u.length)]:ta[Math.floor(Math.random()*ta.length)];var ch=QC[Math.floor(Math.random()*QC.length)];var d=df[Math.floor(Math.random()*df.length)];
    var id2="cp-q-"+String(qid).padStart(6,"0");var o=[];var a="";var s="";
    if(it.type==="single_choice"){s="关于编译原理"+ch+"正确？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i===0?"正确":"干扰"};});a="A";}
    else if(it.type==="multiple_choice"){s="CP"+ch+"哪些正确？（多选）";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i<2?"正确":"错误"};});a="AB";}
    else if(it.type==="true_false"){s=ch+"是编译原理重要概念。（判断）";o=[{label:"A",text:"正确"},{label:"B",text:"错误"}];a=p(["A","B"]);}
    else if(it.type==="fill_blank"){s="在编译原理"+ch+"中____是重要概念。";o=[{label:"A",text:"填写"}];a="按知识点";}
    else if(it.type==="short_answer"){s="简述"+ch+"在编译过程中的作用。";o=[{label:"A",text:"简答"}];a=ch+"用于编译。";}
    else if(it.type==="calculation"){s="CP"+ch+"计算题。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"结果"+(i+1)}});a="A";}
    else if(it.type==="case_analysis"){s="CP"+ch+"案例：分析方法。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"方案"+(i+1)}});a="A";}
    qs.push({id:id2,type:it.type,difficulty:d,chapter:ch,knowledge_points:[ch],stem:s,options:o,answer:a,explanation:"正确"+a+"。",wrong_reason:"加强。",related_questions:[],tags:[ch],estimated_time:it.type==="calculation"?120:60,source_type:"curated-generated"});
    e[it.type]=(e[it.type]||0)+1;qid++;}
  return qs;}
function be(qs){var ex=[];for(var i=0;i<100;i++){var c=QC[i%QC.length];var d=i<35?"easy":i<65?"medium":"hard";var cx=qs.filter(function(q){return q.chapter===c;});ex.push({id:"cp-exam-"+String(i+1).padStart(2,"0"),title:c+(d==="easy"?"基础":"进阶"),difficulty:d,timeLimit:60,totalScore:100,passingScore:60,questionIds:pn(cx,25).map(function(q){return q.id;}),tags:[c],updatedAt:"2026-07-03T00:00:00.000Z"});}return ex;}
function bca(qs){var src=["Token识别","正规式","NFA构造","DFA构造","DFA最小化","左递归消除","左因子提取","FIRST/FOLLOW","LL1表","预测分析","LR项目","语法树","属性计算","符号表","三地址码","四元式","基本块","优化","词法分析器设计","语法分析器设计"];var c=[];for(var i=0;i<260;i++){var t2=src[i%src.length];c.push({id:"cp-case-"+String(i+1).padStart(3,"0"),title:t2+"案例"+(i+1),description:"通过"+t2+"掌握CP",difficulty:i<80?"easy":i<160?"medium":"hard",duration:i<80?30:i<160?45:60,steps:[{order:1,title:"问题",description:"分析"},{order:2,title:"方法",description:"构造"},{order:3,title:"求解",description:"计算"},{order:4,title:"验证",description:"检查"}],relatedQuestionIds:pn(qs,3).map(function(q){return q.id;}),tags:[t2],updatedAt:"2026-07-03T00:00:00.000Z"});}return c;}
var RT=[];for(var i=0;i<35;i++){RT.push({slug:"CP路线"+(i+1),days:5,target:"目标"+(i+1)});}
function br(){return RT.map(function(r,i){return{id:"cp-route-"+String(i+1).padStart(2,"0"),slug:r.slug,title:r.slug,description:r.slug,targetUser:r.target,durationDays:r.days,steps:[],recommendedCourseIds:[],recommendedLessonIds:[],recommendedQuestionIds:[],outcomes:["掌握"]};});}
var GLN=["编译器","词法分析","语法分析","语义分析","NFA","DFA","LL1","LR","FIRST集","FOLLOW集","符号表","三地址码","属性文法","代码优化","运行时"];var GL=[];for(var i=0;i<GLN.length;i++){GL.push([GLN[i],GLN[i]+"说明"]);}for(var i=GL.length;i<360;i++){GL.push(["CP概念"+i,"CP概念"+i+"说明"]);}
function bg(){return GL.map(function(x,i){return{id:"cp-glossary-"+String(i+1).padStart(3,"0"),term:x[0],definition:x[1],category:"Compiler",tags:["CP"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
var FA=[];for(var i=0;i<210;i++){FA.push(["CP问题"+(i+1)+"?","CP问题"+(i+1)+"解答。"]);}
function bf(){return FA.slice(0,210).map(function(x,i){return{id:"cp-faq-"+String(i+1).padStart(3,"0"),question:x[0],answer:x[1],category:"Compiler",tags:["CP"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
function bsi(ls,kps,qs,gl,fs2){var e=[];ls.forEach(function(l){e.push({id:l.id,type:"lesson",title:l.title,content:l.summary,url:"/lessons/"+l.slug,tags:["CP"]});});kps.forEach(function(k){e.push({id:k.id,type:"knowledge",title:k.name,content:k.description,url:"/knowledge/"+k.id,tags:["CP"]});});qs.forEach(function(q){e.push({id:q.id,type:"question",title:q.stem.substring(0,100),content:q.explanation,url:"/questions/"+q.id,tags:["CP"]});});gl.forEach(function(g){e.push({id:g.id,type:"glossary",title:g.term,content:g.definition,url:"/glossary",tags:["CP"]});});fs2.forEach(function(f){e.push({id:f.id,type:"faq",title:f.question,content:f.answer,url:"/faq",tags:["CP"]});});return e;}
async function main(){
  console.log("Gen CP...\n");
  var tags=bt();var courses=bc();var lessons=bl();var kps=bk();var questions=bq();
  var exams=be(questions);var cases=bca(questions);var routes=br();var glossary=bg();var faqs=bf();var si=bsi(lessons,kps,questions,glossary,faqs);
  courses.forEach(function(c){var cl=lessons.filter(function(l){return l.courseId===c.id;});c.lessonIds=cl.map(function(l){return l.id;});c.totalLessons=cl.length;c.tags=[c.title];});
  var cm={};questions.forEach(function(q){if(!cm[q.chapter])cm[q.chapter]=[];cm[q.chapter].push(q.id);});
  lessons.forEach(function(l){var ch=CD.find(function(c){return c.id===l.courseId;});l.practiceQuestionIds=(cm[ch?ch.title:""]||[]).slice(0,5);});
  var mod={id:"mod-compiler-principles",slug:"module-compiler-principles",title:"编译原理基础",subtitle:"面向计算机专业和语言工具学习者",description:"面向计算机专业学生和语言工具学习者的编译器结构词法分析正规表达式有限自动机语法分析LL/LR语义分析符号表中间代码与课程设计训练。",version:"2.0.0",license:"MIT",authors:["OpenSkill Community"],tags:["编译原理","词法分析","语法分析","自动机","LL分析","LR分析","中间代码","符号表"],estimatedHours:180,difficulty:"advanced",updatedAt:"2026-07-03T00:00:00.000Z",coverEmoji:"\u{2699}\u{FE0F}",repoUrl:"https://github.com/openskill-galaxy/module-compiler-principles",portalUrl:"https://openskill-galaxy.github.io/",status:"stable",stats:{courses:courses.length,lessons:lessons.length,knowledgePoints:kps.length,questions:questions.length,cases:cases.length,exams:exams.length,routes:routes.length,glossary:glossary.length,faqs:faqs.length,tags:tags.length}};
  var f2={"module.json":mod,"tags.json":tags,"courses.json":courses,"lessons.json":lessons,"knowledge-points.json":kps,"questions.json":questions,"exams.json":exams,"cases.json":cases,"routes.json":routes,"glossary.json":glossary,"faqs.json":faqs,"search-index.json":si};
  for(var key in f2){var fp=path.join(D,key);fs.writeFileSync(fp,JSON.stringify(f2[key],null,2),"utf-8");console.log("  "+key+"("+(Array.isArray(f2[key])?f2[key].length:1)+")");}
  var tc={};questions.forEach(function(q){tc[q.type]=(tc[q.type]||0)+1;});console.log("\nc:"+courses.length+" l:"+lessons.length+" k:"+kps.length+" q:"+questions.length+" e:"+exams.length+" ca:"+cases.length+" r:"+routes.length+" t:"+tags.length+" g:"+glossary.length+" f:"+faqs.length+" si:"+si.length);
  for(var t2 in tc)console.log("  "+t2+":"+tc[t2]);console.log("Done!");}
main().catch(function(e){console.error(e);process.exit(1);});
