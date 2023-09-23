let countEl=document.getElementById("count-El")
let save1El=document.getElementById("save-El")
let count=0;
function add()
{
    count+=1;
    countEl.innerText=count;
    console.log(count)
}
function save1()
{
   let countStr =count+"-"
  console.log(countStr)
  save1El.textContent+=countStr
  count=-1;
add()
}