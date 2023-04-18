function myfun(){
let a=document.getElementById("passwords").value;
let b=document.getElementById("passwordss").value;
if(a=="")
{
    document.getElementById("messages").innerHTML="**Enter Password**";
    return false;
}
if(a.length < 5)
 {  
    document.getElementById("messages").innerHTML="**Password Must Be Greater than 5 Characters**";
   return false;
 }
if(a.length > 25)
{
    document.getElementById("messages").innerHTML="**Password Must Not Be Exceed More than 25 Characters**";
    return false;
 }
if(a!=b)
 {
  document.getElementById("messages").innerHTML="**Password Are Not Same**";
  return false;

 }

}


