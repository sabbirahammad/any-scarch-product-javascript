
var scarchbox=document.getElementById("scarchid");
scarchbox.onkeyup=()=>{
    var scarchbox=document.getElementById("scarchid").value.toUpperCase();
    const product=document.querySelectorAll(".products");
    const tagname=document.getElementsByTagName("h2");
    const productlist=document.querySelector(".product-list");

    for(let i=0;i<tagname.length;i++){
        var name=product[i].getElementsByTagName("h2")[0];
        if(name){
            var textvalue=name.textContent||name.innerHTML;
            if(textvalue.toUpperCase().indexOf(scarchbox) >1){
                product[i].style.display="";
            }          
            else{
                product[i].style.display="none";
            }
        }
    }
}