const titles={overview:'今日经营总览',accounts:'账号与申诉',ads:'Amazon广告', 'walmart-ads':'Walmart广告',inventory:'FBA库存',cost:'成本补录',team:'AI团队汇报',approvals:'待我审批'};
function showView(id){document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id===id));document.querySelectorAll('.nav-item').forEach(n=>n.classList.toggle('active',n.dataset.view===id));document.querySelector('#page-title').textContent=titles[id]||'经营巡检台';window.scrollTo({top:0,behavior:'smooth'});}
document.querySelectorAll('.nav-item').forEach(btn=>btn.addEventListener('click',()=>showView(btn.dataset.view)));
document.querySelectorAll('[data-jump]').forEach(btn=>btn.addEventListener('click',()=>showView(btn.dataset.jump)));
document.querySelector('#theme-toggle').addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.setItem('inspection-theme',document.body.classList.contains('dark')?'dark':'light')});
if(localStorage.getItem('inspection-theme')==='dark')document.body.classList.add('dark');
