// JavaScript Document
/*Hide and show product*/
function shopping_commend_show(){
	var imgId=document.getElementById("shopping_commend_arrow");   
	var sortId=document.getElementById("shopping_commend_sort");   
	
	if(sortId.style.display=="none"){
		 sortId.style.display="block";
		 imgId.src="images/shopping_arrow_up.gif";
		}
	else{
		sortId.style.display="none";
		imgId.src="images/shopping_arrow_down.gif";
		}
	
	}
	
	
/*Mouse on product*/	
function productOver(elementId){
	var Element=document.getElementById(elementId);
	Element.style.backgroundColor="#ffffff";
	}

/*Mouse left product*/	
function productOut(elementId){
	var Element=document.getElementById(elementId);
	Element.style.backgroundColor="#fefbf2";
	}

/*Delete product*/
function deleteProduct(elementId){
	var delElement=document.getElementById(elementId);  //delete id
	var flag=confirm("Are you sure to delete it?");
	if(flag==true){
		delElement.parentNode.removeChild(delElement);
		productCount();
		}
	}
	
/*Calculate Subtotal*/
function productCount(){
	var total=0;      
	var save=0;       
	var integral=0;   
	
	var point;      
	var price;     
	var ddPrice;   
	var number;    

     
	var myTableTr=document.getElementById("myTableProduct").getElementsByTagName("tr"); 
	for(var i=0;i<myTableTr.length;i++){
		point=myTableTr[i].getElementsByTagName("td")[1].getElementsByTagName("label")[0].innerHTML; 
		price=myTableTr[i].getElementsByTagName("td")[2].getElementsByTagName("label")[0].innerHTML;
		ddPrice=myTableTr[i].getElementsByTagName("td")[3].getElementsByTagName("label")[0].innerHTML;
		number=myTableTr[i].getElementsByTagName("td")[4].getElementsByTagName("input")[0].value;
		integral+=point*number;
		total+=ddPrice*number;
		save+=(price-ddPrice)*number;
		}
	document.getElementById("product_total").innerHTML=total;
	document.getElementById("product_save").innerHTML=save;
	document.getElementById("product_integral").innerHTML=integral;
	
	}
window.onload=productCount;