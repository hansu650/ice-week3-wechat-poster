import fs from 'node:fs/promises';
import {createHash} from 'node:crypto';

// Dependency-free reproduction of published aggregate numbers and derived arithmetic.
// This is not a re-estimation of the studies' participant-level statistical models.
const input=new URL('../data/wechat_evidence.json',import.meta.url);
const out=new URL('./',import.meta.url);
const raw=await fs.readFile(input,'utf8'),d=JSON.parse(raw);
const round=(v,n=2)=>Number(v.toFixed(n));
const checks=[];
function check(name,condition){checks.push({name,passed:Boolean(condition)});if(!condition)throw Error(name);}
const annual=d.tencent.annual;
check('Annual observations are consecutive year-end years',annual.slice(1).every((p,i)=>p.year===annual[i].year+1));
check('All annual account totals are finite and positive',annual.every(p=>Number.isFinite(p.value)&&p.value>0));
const growth=annual.slice(1).map((p,i)=>({year:p.year,netAdditionMillion:round(p.value-annual[i].value,1),yearOnYearPercent:round((p.value/annual[i].value-1)*100,2)}));
const totalAddition=round(annual.at(-1).value-annual[0].value,1);
check('Annual differences sum to total change',round(growth.reduce((s,p)=>s+p.netAdditionMillion,0),1)===totalAddition);
check('Commerce coefficients use correlation bounds',d.commerce.table4Correlations.every(p=>Number.isFinite(p.value)&&Math.abs(p.value)<=1));
check('All eight social-capital paths are present',d.connection.paths.length===4&&d.connection.paths.every(p=>['bonding','bridging'].every(k=>Number.isFinite(p[k]))));
check('All four reported nonsignificant paths retained',d.connection.paths.flatMap(p=>[p.bondingSignificant,p.bridgingSignificant]).filter(x=>x===false).length===4);
check('Two-wave retention matches reported rounding',round(d.connection.nT2/d.connection.nT1*100,2)===d.connection.retentionPercent);
check('Daily-time counts total the survey sample',d.fatigue.hours.reduce((s,p)=>s+p.count,0)===d.fatigue.n);
check('Daily-time shares match reported one-decimal rounding',d.fatigue.hours.every(p=>round(p.count/d.fatigue.n*100,1)===p.percent));
check('Daily-time shares total 100 percent',round(d.fatigue.hours.reduce((s,p)=>s+p.percent,0),1)===100);
const summary={
 evidenceType:'Published aggregate data with secondary descriptive arithmetic; no new survey or participant-level re-estimation.',
 inputSha256:createHash('sha256').update(raw).digest('hex'),
 annual:annual.map((p,i)=>({...p,...(i?growth[i-1]:{})})),
 totalChange:{startYear:annual[0].year,endYear:annual.at(-1).year,millionAccounts:totalAddition,percent:round((annual.at(-1).value/annual[0].value-1)*100,2)},
 separateInterimSnapshot:d.tencent.latest,
 commerce:{n:d.commerce.n,correlations:d.commerce.table4Correlations,standardizedModelPaths:d.commerce.figure2Paths},
 socialConnections:{nT1:d.connection.nT1,nT2:d.connection.nT2,retentionPercent:d.connection.retentionPercent,paths:d.connection.paths,nonsignificantPaths:4},
 overload:{n:d.fatigue.n,stressorPaths:d.fatigue.stressorPaths,lurkingPaths:d.fatigue.lurkingPaths,dailyTime:d.fatigue.hours},
 validation:checks,
 limitations:['Accounts are not unique people.','The interim observation is separate from year-end comparisons.','Correlation r and standardized beta are different statistics.','Coefficient ranks do not test differences between coefficients.','Reported significance is transcribed, not recomputed.','Study samples and metrics are not pooled.','Intention is not observed sales.','Observational studies do not establish causation.','Survey time categories do not establish a safe-use threshold.']
};
const rows=[];
function row(series,label,outcome,value,unit,n,reportedP,significant,source){rows.push({series,label,outcome,value,unit,sample_n:n,reported_p:reportedP,reported_significance:significant,source});}
for(const p of annual)row('annual_accounts',String(p.year),'Combined Weixin and WeChat monthly active accounts',p.value,'million accounts','','','',p.source);
row('interim_snapshot',d.tencent.latest.date,'Combined monthly active accounts',d.tencent.latest.value,'million accounts','','','',d.tencent.latest.source);
for(const g of growth){row('annual_additions',String(g.year),'Net year-end change',g.netAdditionMillion,'million accounts','','','','Derived from annual_accounts');row('annual_growth_percent',String(g.year),'Year-on-year account growth',g.yearOnYearPercent,'percent','','','','Derived from annual_accounts');}
for(const p of d.commerce.table4Correlations)row('commerce_correlations',p.label,d.commerce.outcome,p.value,'correlation r',d.commerce.n,'Not represented in poster','','GuoLi2022 Table 4');
for(const p of d.commerce.figure2Paths)row('value_model_paths',p.label,d.commerce.outcome,p.value,'standardized beta',d.commerce.n,'< .001',true,'GuoLi2022 Figure 2');
for(const p of d.connection.paths)for(const k of ['bonding','bridging'])row('social_capital_paths',p.label,k,p[k],'standardized beta',d.connection.nT2,p[k+'P'],p[k+'Significant'],'ZhangJung2023 Structural model');
for(const p of d.fatigue.stressorPaths)for(const k of ['fatigue','anxiety'])row('overload_paths',p.label,k,p[k],'standardized beta',d.fatigue.n,'< .01',true,'LiuEtAl2024 Section 5.3 / Figure 2');
for(const p of d.fatigue.lurkingPaths)row('lurking_paths',p.label,'Lurking',p.value,'standardized beta',d.fatigue.n,'< .01',true,'LiuEtAl2024 Section 5.3 / Figure 2');
for(const p of d.fatigue.hours){row('sample_daily_time_count',p.label,'Respondents',p.count,'count',d.fatigue.n,'','','LiuEtAl2024 Table 1');row('sample_daily_time_percent',p.label,'Respondents',p.percent,'sample percent',d.fatigue.n,'','','LiuEtAl2024 Table 1');}
const columns=Object.keys(rows[0]),csvCell=s=>'"'+String(s).replaceAll('"','""')+'"';
const csv=[columns.join(','),...rows.map(r=>columns.map(k=>csvCell(r[k])).join(','))].join('\n')+'\n';
const table=(heads,rs)=>'| '+heads.join(' | ')+' |\n| '+heads.map(()=>'---').join(' | ')+' |\n'+rs.map(r=>'| '+r.join(' | ')+' |').join('\n');
const source=id=>d.sources.find(s=>s.id===id);
const sourceLink=id=>'['+source(id).title+']('+source(id).url+')';
let report='# WeChat: reproducible data analysis and paper comparison\n\n';
report+='**Team Leader: Tian Qin.** Prepared with AI assistance for the W3 poster. Repository uploads are coordinated centrally by Tian Qin. No unverified member contribution is claimed.\n\n';
report+='## Scope and reproduction\n\nThe input contains published aggregate figures, not raw survey responses collected by this team. The script reproduces descriptive calculations and exports the reported coefficients; it does not refit the original models or calculate new p-values.\n\nRun with an existing Node.js installation, with no third-party packages:\n\n    node w3/analysis/analyze_wechat.mjs\n\nOutputs: `summary.json`, `metrics.csv`, `report.md`, `validation.json`.\n\n';
report+='## 1. Platform scale: level and growth answer different questions\n\n'+table(['Year-end','Combined active accounts (million)','Net addition (million)','Annual growth (%)'],annual.map((p,i)=>[p.year,p.value.toFixed(1),i?growth[i-1].netAdditionMillion.toFixed(1):'—',i?growth[i-1].yearOnYearPercent.toFixed(2):'—']))+'\n\n';
report+='The reported annual series rises by **'+totalAddition.toFixed(1)+' million accounts ('+summary.totalChange.percent.toFixed(2)+'%)** from '+annual[0].year+' to '+annual.at(-1).year+'. Annual additions fluctuate; growth is positive in each interval but is not steadily accelerating. These calculations inherit the rounding of the published totals.\n\n';
report+='The separate **'+d.tencent.latest.date+'** observation is **'+d.tencent.latest.value.toLocaleString('en-US')+' million**. It is not added as another year-end point. Accounts are not unique people or a China-only population count. These totals describe platform activity, not satisfaction or causal business effects.\n\n';
report+='Sources: '+['Tencent2022','Tencent2025','TencentHKEX2026','TencentInterim2026'].map(sourceLink).join('; ')+'.\n\n';
report+='## 2. Commerce: intention and perceived value\n\n'+table(['Predictor','Correlation with repurchase intention (r)'],d.commerce.table4Correlations.map(p=>[p.label,p.value.toFixed(3)]))+'\n\n';
report+='Guo and Li analyse **'+d.commerce.n+' valid WeChat-shopper questionnaires**. Utilitarian and hedonic value have numerically larger correlations than the three platform features shown. Their standardized paths in the structural model are '+d.commerce.figure2Paths.map(p=>p.label+' **'+p.value.toFixed(3)+'**').join(' and ')+', both reported p < .001. Those model paths must remain separate from the correlations above.\n\n';
report+='**Critical reading:** this is a selected, self-report shopper sample and a cross-sectional model. It concerns intention, not verified purchases. The ordering of coefficients is descriptive; it is not a test that two coefficients differ significantly.\n\n**Our interpretation:** useful product information and enjoyable interaction are reasonable design questions to investigate. The study does not establish that introducing either will increase actual sales.\n\nSource: '+sourceLink('GuoLi2022')+' (Table 4, Figure 2 and sample description).\n\n';
report+='## 3. Social connections: retain significant and nonsignificant results\n\n'+table(['Earlier interaction','Bonding beta (reported p)','Bridging beta (reported p)'],d.connection.paths.map(p=>[p.label,p.bonding.toFixed(2)+' (p '+p.bondingP.trim()+')'+(p.bondingSignificant?'':' NS'),p.bridging.toFixed(2)+' (p '+p.bridgingP.trim()+')'+(p.bridgingSignificant?'':' NS')]))+'\n\n';
report+='The two-wave panel retained **'+d.connection.nT2+' of '+d.connection.nT1+' respondents ('+d.connection.retentionPercent.toFixed(2)+'%)**. All eight focal paths, including four nonsignificant paths, are preserved. Bonding concerns support and trust within close ties; bridging concerns resources across wider connections. Neither is a count of contacts.\n\n';
report+='**Critical reading:** the temporal design relates earlier use to later social capital while accounting for earlier outcome levels and selected covariates, but remains observational. Attrition and other unmeasured differences can affect interpretation. NS does not mean proof of no relationship.\n\n**Our interpretation:** a group can choose communication routines according to its purpose, while treating the reported associations as evidence to discuss rather than guaranteed intervention effects.\n\nSource: '+sourceLink('ZhangJung2023')+' (Structural model, Figure 2, sample and data collection).\n\n';
report+='## 4. Overload: compare outcomes without inventing a causal threshold\n\n'+table(['Pressure','Fatigue beta','Anxiety beta'],d.fatigue.stressorPaths.map(p=>[p.label,p.fatigue.toFixed(3),p.anxiety.toFixed(3)]))+'\n\n';
report+='All ten paths are reported p < .01. Social overload has the numerically largest fatigue coefficient in this model; information overload has the largest anxiety coefficient. This ordering does not establish significant differences between coefficients. Paths from fatigue and anxiety to lurking are '+d.fatigue.lurkingPaths.map(p=>'**'+p.value.toFixed(3)+'**').join(' and ')+', respectively (both reported p < .01). Lurking means observing content without active participation.\n\n';
report+=table(['Reported daily WeChat time','Respondents','Share of study sample'],d.fatigue.hours.map(p=>[p.label,p.count,p.percent.toFixed(1)+'%']))+'\n\n';
report+='**Critical reading:** these **'+d.fatigue.n+' respondents**, surveyed in January–February 2024, are not a national user census. The time bins are copied from the paper; the largest category does not define a healthy or safe time limit. The cross-sectional self-report design cannot establish whether overload caused fatigue, anxiety or lurking.\n\n**Our interpretation:** clearer response expectations and fewer duplicate messages are possible practices to trial. Their effects were not tested in this research.\n\nSource: '+sourceLink('LiuEtAl2024')+' (Table 1, Section 5.3 and Figure 2).\n\n';
report+='## 5. What combining these sources does and does not support\n\n'+table(['Evidence','Unit / population','Question answered','Key limit'],[
 ['Tencent reports','Combined active accounts','How large is measured activity?','Accounts are not people or welfare'],
 ['Guo & Li (2022)','514 WeChat shoppers; r and beta','How do perceived values relate to intention?','No observed repeat-sales outcome'],
 ['Zhang & Jung (2023)','740 retained panel respondents; beta','How do interaction types relate to later social capital?','Observational with participant loss'],
 ['Liu et al. (2024)','836 survey respondents; beta and sample shares','How do pressures relate to fatigue/anxiety?','Cross-sectional; no safe-time threshold']
 ])+'\n\nThe poster gives a balanced account of opportunities and demands. It does not pool sample sizes, average incompatible coefficients, estimate a single overall effect of WeChat, or claim the group conducted the source surveys.\n\n';
report+='## Validation\n\n'+checks.map(c=>'- PASS: '+c.name).join('\n')+'\n\nInput SHA-256: `'+summary.inputSha256+'`. Source-to-paper verification is recorded separately in the poster preparation files; these automated checks test structure and arithmetic, not the truth of every source transcription.\n';
await fs.writeFile(new URL('summary.json',out),JSON.stringify(summary,null,2)+'\n');
await fs.writeFile(new URL('metrics.csv',out),csv);
await fs.writeFile(new URL('report.md',out),report);
await fs.writeFile(new URL('validation.json',out),JSON.stringify({passed:checks.every(c=>c.passed),checks,rows:rows.length,inputSha256:summary.inputSha256},null,2)+'\n');
console.log(JSON.stringify({passed:true,checks:checks.length,metricRows:rows.length,totalAdditionMillion:totalAddition,totalGrowthPercent:summary.totalChange.percent,outputs:['summary.json','metrics.csv','report.md','validation.json']}));
