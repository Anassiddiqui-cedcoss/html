document.getElementById("invoice1").style.visibility = "hidden";
function myorder(){
    var name=document.getElementById('nameid').value;
    var mail=document.getElementById('mailid').value;
    var phone=document.getElementById('phoneid').value;
    var address=document.getElementById('addressid').value;
    var city=document.getElementById('cityid').value;
    var postcode=document.getElementById('pcodeid').value;
    var province=document.getElementById('select').value;
    var product01=document.getElementById('p1id').value; 
    var price1=product01*10;
    var product02=document.getElementById('p2id').value;
    var price2=product02*20;
    var product03=document.getElementById('p3id').value;
    var price3=product03*30;
    var delivery=document.getElementById('deliveryid').value;
    var stotal=price1+price2+price3+20;
    var tax=(stotal*13)/100;
    var total=stotal+tax;
//     document.getElementById("invoicename").innerHTML=arr01[0].name;
//     document.getElementById("invoicemail").innerHTML=arr01[0].mail;
//     document.getElementById("invoicephone").innerHTML=arr01[0].phone;
//     document.getElementById("invoiceaddress").innerHTML=arr01[0].address;
//     document.getElementById("quantity1").innerHTML=arr01[0].product01;
//     document.getElementById("invoicep1").innerHTML=arr01[0].product01*10;
//     document.getElementById("quantity2").innerHTML=arr01[0].product02;
//     document.getElementById("invoicep2").innerHTML=arr01[0].product02*20;
// document.getElementById("quantity3").innerHTML=arr01[0].product03;
// document.getElementById("invoicep3").innerHTML=arr01[0].product03*30;
// document.getElementById("invoicecharge").innerHTML=20;
// document.getElementById("invoicesubtotal").innerHTML=arr01[0].subtotal;
// document.getElementById("invoicetax").innerHTML=arr01[0].taxprice;
// document.getElementById("invoicetotal").innerHTML=arr01[0].total;

flag=0;
var reg=/[A-Z][^\s]*/;
if (!name.match(reg)|| name.length > 25) {
    // alert("");
    document.getElementById('username').innerHTML="**Name should be In proper Case";
    flag=1;
}
else{
    document.getElementById('username').innerHTML="";
}

    
// if (name==""){
    //     document.getElementById("username").innerHTML="** please fill the name**";
    //     // return false;
    // }
    
     if (mail==""){
        document.getElementById("spanmail").innerHTML="** please enter mail**";
        flag=1;
        // return false;
    }
    else{
        document.getElementById('spanmail').innerHTML="";
    }
    
 if (phone==""){
        document.getElementById("spanphone").innerHTML="** please enter Mobile No**";
        flag=1;
    // return false;
}
else{
    document.getElementById('spanphone').innerHTML="";
}
 if (phone.length !=10){
    document.getElementById("spanphone").innerHTML="* must be 10 digits";
    flag=1;
    // return false;
}
else{
    document.getElementById('spanphone').innerHTML="";
}

 if (address==""){
        document.getElementById("spanaddress").innerHTML="** please enter your Address**";
        flag=1;
        // return false;
    }
    else{
        document.getElementById('spanaddress').innerHTML="";
    }
     if (city==""){
        document.getElementById("spancity").innerHTML="** please enter your city**";
        flag=1;
        // return false;
    }
    else{
        document.getElementById('spancity').innerHTML="";
    }
     if (postcode==""){
        document.getElementById("spanpostcode").innerHTML="** please enter post code**";
        flag=1;
        // return false;
    
    }
    else{
        document.getElementById('spanpostcode').innerHTML="";
    }
    
     if (province==""){
        document.getElementById("spanprovince").innerHTML="** please select**";
        flag=1;
        // return false;
    }
    else{
        document.getElementById('spanprovince').innerHTML="";
    }
     if (product01==""){
        document.getElementById("spanproduct01").innerHTML="** please enter product number**";
        flag=1;
        // return false;
    }
    else{
        document.getElementById('spanproduct01').innerHTML="";
    }
     if (product02==""){
        document.getElementById("spanproduct02").innerHTML="** please enter product Number**";
        flag=1;
        // return false;
    }
    else{
        document.getElementById('spanproduct02').innerHTML="";
    }
     if (product03==""){
        document.getElementById("spanproduct03").innerHTML="** please enter Product Number**";
        flag=1;
        // return false;
    }
    else{
        document.getElementById('spanproduct03').innerHTML="";
    }
     if (delivery==""){
        document.getElementById("spandelivery").innerHTML="** please enter delivery Time**";
        flag=1;
        // return false;
        // return false;
    }
    else{
        document.getElementById('spandelivery').innerHTML="";
    }
    
    if(flag==0){
        var arr01={name:name, mail:mail,phone:phone, address:address,city:city, postcode:postcode, province:province, product01:product01, product02:product02, product03:product03, delivery:delivery, total:total, taxprice:tax, subtotal:stotal } ;
        
document.getElementById("invoicename").innerHTML=arr01.name;
document.getElementById("invoicemail").innerHTML=arr01.mail;
document.getElementById("invoicephone").innerHTML=arr01.phone;
document.getElementById("invoiceaddress").innerHTML=arr01.address;
document.getElementById("quantity1").innerHTML=arr01.product01;
document.getElementById("invoicep1").innerHTML=arr01.product01*10;
document.getElementById("quantity2").innerHTML=arr01.product02;
document.getElementById("invoicep2").innerHTML=arr01.product02*20;
document.getElementById("quantity3").innerHTML=arr01.product03;
document.getElementById("invoicep3").innerHTML=arr01.product03*30;
document.getElementById("invoicecharge").innerHTML=20;
document.getElementById("invoicesubtotal").innerHTML=arr01.subtotal;
document.getElementById("invoicetax").innerHTML=arr01.taxprice;
document.getElementById("invoicetotal").innerHTML=arr01.total;


document.getElementById("myForm").reset();
// document.getElementById("btn").reset();
//  document.getElementById("invoice").style.display = 'show';
document.getElementById("invoice1").style.visibility = "visible";
}
}
