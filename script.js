var arr=[
    {img:'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',name:'tarun'},
    {img:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',name:'yash'},
    {img:'https://images.unsplash.com/photo-1514626585111-9aa86183ac98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',name:'manish'},
    {img:'https://images.unsplash.com/photo-1514626585111-9aa86183ac98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',name:'pratibha'},
    {img:'https://images.unsplash.com/photo-1650859480375-10ab1b7d5048?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',name:'royal'},
];
function show(){
    var clutter="";
    arr.forEach(function(elem,index){
        clutter+=`<div class="status-card">
        <div  class="profile-pic"><img id="${index}" src="${elem.img}" alt=""></div>
       <p class="usernames">${elem.name}</p>
      </div>`
    });
    document.querySelector(".status-wrapper").innerHTML=clutter;
}
show();
var progressPercentage=0;
document.querySelector(".status-wrapper").addEventListener("click",function(dets){
    document.querySelector(".story").style.display="block";
    document.querySelector("#story-photo img").setAttribute("src",arr[dets.target.id].img);
    // document.querySelector("#story-photo name").setAttribute("p",arr[dets.target.id].name);
    document.querySelector(".story img").setAttribute("src",arr[dets.target.id].img);
    
    document.querySelector(".story").style.backgroundSize = "cover";
    document.querySelector("#main").style.opacity=".3";
    
    var grow=setInterval(function(){
        if(progressPercentage<100){
            progressPercentage=progressPercentage+1;
        document.querySelector("#progress-bar-wrap").style.width=progressPercentage+"%";
        }else{
            progressPercentage=0;
            // var i=1;
            clearInterval(grow);
            // i++;
            // document.querySelector("#story-photo img").setAttribute("src",arr[i].img);
            // document.querySelector(".story img").setAttribute("src",arr[i].img);
            // document.querySelector("#progress-bar-wrap").style.width=progressPercentage+"%";
        }    
        
    },35)
    var growth=setTimeout(function(){
        document.querySelector(".story").style.display="none";
        document.querySelector("#main").style.opacity="1";
        // clearInterval(growth);
        
    },3500)

})

