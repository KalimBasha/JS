let AllBtn=document.getElementById('all');
let MaleBtn=document.getElementById('male');
let FemaleBtn=document.getElementById('female');
let TableDis=document.getElementById('table-body');
let SearchBtn=document.getElementById('search');

emp1={id:101,ename:'kalim',gender:'male',age:21,company:'microsoft',sal:[80000,2000]}
emp2={id:102,ename:'Susmii',gender:'female',age:25,company:'google',sal:[800000,20000]}
emp3={id:103,ename:'Reshma',gender:'female',age:18,company:'amazon',sal:[200000,5000]}
emp4={id:104,ename:'Arun',gender:'male',age:28,company:'microsoft',sal:[85000,1000]}

EmpsArr=[emp1,emp2,emp3,emp4]



function display(EmpsArr){
    let dis='';
    for(let emp of EmpsArr){
        dis+=`
                <tr>
                    <td>${emp.id}</td>
                    <td>${emp.ename}</td>
                    <td>${emp.gender}</td>
                    <td>${emp.age}</td>
                    <td>${emp.company}</td>
                    <td>${emp.sal[0]}</td>
                </tr>`
    }
    TableDis.innerHTML=dis;
}
//display()

//allBtn display
AllBtn.addEventListener('click',function(){
    display(EmpsArr);
});

//maleBtn display
MaleBtn.addEventListener('click',function(){
   let Male = EmpsArr.filter((emp)=>{
        if(emp.gender=='male'){
            return emp;
        }
    })
    display(Male);
});

//femaleBtn display
FemaleBtn.addEventListener('click',function(){
    let Female = EmpsArr.filter((emp)=>{
         if(emp.gender=='female'){
             return emp;
         }
     })
     display(Female);
 });


 SearchBtn.addEventListener('keyup',function(){
    SearchValue=SearchBtn.value.toLowerCase().trim();

    let searchArr=[];
    for(let emp of EmpsArr){
        if(emp.ename.toLowerCase().includes(SearchValue) && SearchValue != ''){   //used includes method to filter the data that they're searching
           searchArr.push(emp)
        }
        else {
            TableDis.innerHTML='No Data Found!!!'
        }
    }
    display(searchArr);
 });

