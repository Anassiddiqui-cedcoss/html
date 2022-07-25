var incomplete=[];
var complete=[];
var items=document.getElementById("new-task");
function populate(){
   text=""
   for(i=0; i<incomplete.length;i++)
   {
     text+="<li><input type='checkbox' onclick='addtocompletetask(this)'><label>"+incomplete[i]+"</label><button class='edit' onclick='editincomplete(this)'>Edit</button><button class='delete' onclick='deleteincomplete(this)'>Delete</button></li>";
     
     
    }
    document.getElementById('incomplete-task').innerHTML=text;
    
  }
  
  function movetocompletetask(){
    text=""
    for(i=0; i<complete.length;i++)
    {
      text+="<li><input type='checkbox'  checked onclick='movebacktoincompletetask(this)'><label>"+complete[i]+"</label><button class='edit' onclick='editcomplete(this)'>Edit</button><button class='delete' onclick='deletecomplete(this)'>Delete</button></li>";
      
      
    }  
    document.getElementById('complete-task').innerHTML=text;
    
    
  }      
  
  function add(){
    var items=document.getElementById("new-task").value;
    if (items=="")  
    {
      document.getElementById("new-task").innerHTML="please add task";
    }  
    else{
      var value=document.getElementById("new-task").value;
      incomplete.push(value);
      populate(incomplete);
    }  
    document.getElementById("new-task").value="";
  }    
  
  function editincomplete(args){
    let li=args.closest('li');
    let nodes=Array.from(li.closest('ul').children);
    let index=nodes.indexOf(li);
    items.value=incomplete[index];
    document.getElementById("btn").innerHTML="update";
    document.getElementById("btn").setAttribute('onclick','update('+index+')');
    
    
    
    
  }
  function deleteincomplete(args){
    let li=args.closest('li');
    let nodes=Array.from(li.closest('ul').children);
    let index=nodes.indexOf(li);
    incomplete.splice(index,1);
    populate();
  }
  
  function addtocompletetask(args){
    let li=args.closest('li');
   
    let nodes=Array.from(li.closest('ul').children);
    let index=nodes.indexOf(li);
    complete.push(incomplete[index]);
    incomplete.splice(index,1);
    movetocompletetask();
    populate(complete);
    
    
  }  
  
  function movebacktoincompletetask(args){
    let li=args.closest('li');
    let nodes=Array.from(li.closest('ul').children);
    let index=nodes.indexOf(li);
    incomplete.push(complete[index]);
    complete.splice(index,1);
    movetocompletetask();
    populate(incomplete);
    }  
  
  
  function deletecomplete(args)
  {
    let li=args.closest('li');
    let nodes=Array.from(li.closest('ul').children);
    let index=nodes.indexOf(li);
    complete.splice(index,1);
    movetocompletetask();
  }  
  
  function editcomplete(args){
    let li=args.closest('li');
    let nodes=Array.from(li.closest('ul').children);
    let index=nodes.indexOf(li);
    items.value=complete[index];
    document.getElementById("btn").innerHTML="update";
    document.getElementById("btn").setAttribute('onclick','update1('+index+')');
    
    
  }
    function update(args){

      incomplete[args]=items.value;
      console.log(incomplete);
      populate();
      document.getElementById("btn").innerHTML="Add";
      document.getElementById("btn").setAttribute('onclick','add()');
    
    
    
     }
     function update1(args){

      complete[args]=items.value;
      console.log(complete);
      movetocompletetask();
      document.getElementById("btn").innerHTML="Add";
      document.getElementById("btn").setAttribute('onclick','add()');
    }
  
  