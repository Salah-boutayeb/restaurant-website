const select = (s)=>document.querySelector(s);
select('.open').addEventListener('click',()=>{
    select('.nav-list').classList.add('active');
});
select('.close').addEventListener('click',()=>{
    select('.nav-list').classList.remove('active');
});