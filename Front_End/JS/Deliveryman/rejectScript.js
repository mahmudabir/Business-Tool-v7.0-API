$(document).ready(function(){
	
	var orderIdToGetOrderCart;
	
	var totalOrderedByAcustomer=0;

	if (localStorage.authUser == null) {

        window.location.href = "../Login/Index.html";
    }

    else if(localStorage.userRole  == 1){
    	window.location.href = "../Admin/";
    }

    else if(localStorage.userRole  == 2){
    	window.location.href = "../Manager/";
    }
    else if(localStorage.userRole  == 3){
    	window.location.href = "../Salesman/";
    }
    else if(localStorage.userRole  == 5){
    	window.location.href = "../Customer/";
    }
    else if(localStorage.userRole  == 6){
    	window.location.href = "../Vendor/";
    }







// var listOrderCart=function(){
// 	console.log(orderIdToGetOrderCart);

// 	$.ajax({
// 		url:"https://localhost:44308/api/deliveryorders/"+orderIdToGetOrderCart+"/ordercart",
// 		method:"GET",
// 		headers:{
// 				//Authorization:"Basic "+ btoa("4:4444")
// 				'Authorization': 'Basic ' + localStorage.authUser
// 		},
// 		complete:function(xmlhttp,status){

// 			if(xmlhttp.status==200){
// 				var orderCartData=xmlhttp.responseJSON;
				
// 				totalOrderedByAcustomer=orderCartData.length;
// 					console.log(totalOrderedByAcustomer);
// 					//console.log(orderCartData);
// 				}
// 				else
// 				{	
// 					console.log("not ok")
// 				}

// 			}
// 	});
// }

//==============================REJECTED===========================================================
console.log("ok");
var listOrder=function(){
	

	$.ajax({
		url:"https://localhost:44308/api/deliveryorders/"+localStorage.username+"/rejected",
		method:"GET",
		headers:{
				//Authorization:"Basic "+ btoa("4:4444")
				'Authorization': 'Basic ' + localStorage.authUser
		},
		complete:function(xmlhttp,status){

			if(xmlhttp.status==200){
				var dataOrder=xmlhttp.responseJSON;
				var str;
				var count=0;
				
				for (var i = 0; i < dataOrder.length; i++) {
					orderIdToGetOrderCart=dataOrder[i].id;
					
					
					str+="<tr id='cell' btn-i-val="+i+" btn-id-orderId="+dataOrder[i].id+"><td><b>"+dataOrder[i].id+"<b></td><td style='font-style:italic;'>"+dataOrder[i].date+"</td><td>"+dataOrder[i].totalAmount+"</td><td><span style='color:red; font-style:italic;'><b>REJECTED</b></td></tr><tr class='hiddenTr' id='orderDetails"+[i]+"'>"+
					"<td style='text-align:left;color:white;' colspan='4'><h2 style='text-align:center;'>Customer Details</h3><br><b>ID: </b>"+dataOrder[i].customerID+"<br><b>Name: </b>"+dataOrder[i].customerName+"<br><b>Address: </b>"+dataOrder[i].address+"</td></tr>"
					}

					$("#rejectedList tbody").html(str);
					for (var i = 0; i < dataOrder.length; i++) {
						$("#orderDetails"+[i]).hide();
					}
					
				}
				else
				{	
					$("#rejectedList tbody").html("");
				}

			}
	});
}
listOrder();









$("#rejectedList").on("click","#cell",function(){
	var button=$(this);
	var clickedRow=button.attr("btn-id-orderId");
	var valueOfI=button.attr("btn-i-val");
	//console.log(clickedRow);
   	$("#orderDetails"+[valueOfI]).fadeToggle(1000);
   
});




// var listPending=function(){
	
// 				$.ajax({
// 				url:"https://localhost:44308/api/deliveryorders/"+localStorage.username+"/"+orderID,
// 				method:"GET",
// 				headers:{
// 						//Authorization:"Basic "+ btoa("4:4444")
// 					'Authorization': 'Basic ' + localStorage.authUser
// 				},
// 				complete:function(xmlhttp,status){

// 				if(xmlhttp.status==200){
					

// 					var data=xmlhttp.responseJSON;
							
// 					for (var j=0; j<data.length; j++)
// 					{
						

// 						for (var k=0; k<data.length; k++)
// 						{
// 							if(data.length==1 || data.length-1==k){
// 								sepration="";
// 							}
// 							else{
// 								sepration="<br>"
// 							}
// 							orderAmount+=data[k].cartAmount;
// 							productNames+="<b>"+data[k].product.name+"</b>= "+data[k].cartAmount+" TK "+sepration;
// 						}
// 						str+="<tr><td><b>"+data[j].order.id+"</b></td><td>"+data.length+" Products</td><td>"+productNames+"</td><td>"+orderAmount+" TK</td><td><button id='Accepted' btn-id-accept="+data[j].order.id+" class='btn btn-success btn-sm'>Accepted</button></td><td><button id='Rejected' btn-id-reject="+data[j].order.id+" class='btn btn-danger btn-sm'>Rejected</button></td></tr>"	
// 						productNames="";
// 						orderAmount=0;
// 						break;
// 					}
// 						$("#pendingList tbody").html(str);
							
// 					}
// 				else
// 				{
// 					console.log("Error from 200 else"+orderID);
// 				}

// 			}
// 	});

// }

// $("#search").keyup(function(){
// 	var dataOrder;
// 			if($("#search").val() != ""){
// 			$.ajax({
// 			url:"https://localhost:44308/api/deliveryorders/"+ localStorage.username +"/acceptedorder/"+ $("#search").val(),
// 			method:"Get",
// 			headers:{
// 				'Authorization': 'Basic ' + localStorage.authUser
// 			},
// 			complete:function(xmlhttp,status){
				
// 				str="";
// 				console.log($("#search").val());
// 				if(xmlhttp.status==200){
// 					dataOrder=xmlhttp.responseJSON;
// 					str="<tr id='cell' btn-i-val="+0+" btn-id-orderId="+dataOrder.id+"><td><b>"+dataOrder.id+"<b></td><td style='font-style:italic;'>"+dataOrder.date+"</td><td>"+dataOrder.totalAmount+"</td><td><span style='color:green; font-style:italic;'><b>ACCEPTED</b></></td></tr><tr class='hiddenTr' id='orderDetails"+0+"'>"+
// 					"<td style='text-align:left;color:white;' colspan='4'><h2 style='text-align:center;'>Customer Details</h3><br><b>ID: </b>"+dataOrder.customerID+"<br><b>Name: </b>"+dataOrder.customerName+"<br><b>Address: </b>"+dataOrder.address+"<br><b>Total Order Completed: </b>"+totalOrderedByAcustomer+"</td></tr>"

// 					$("#acceptedList tbody").html(str);
// 					for (var i = 0; i < dataOrder.length; i++) {
// 						$("#orderDetails"+[i]).hide();
// 					}
				
// 				}
// 				else
// 				{
// 					console.log(dataOrder);
// 				}
				
// 			}
					
// 		});
// 		}
// 		else{
				
// 			}
// 	});

function savePDF()
    {
        var sTable = document.getElementById('rejectedTable').innerHTML;

        var style = "<style>";
        style = style + "table{width: 100%;font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;border-collapse: collapse;font-style: bold;}";
        style = style + "table th {border: 2px solid #000000;}";
        style = style + "table td{border: 2px solid #000000;padding: 8px;}";
        //style = style + "table tr:nth-child(even) {background-color: #f2f2f2;}";
        //style = style + "table tr:nth-child(odd) {background-color: #E6E6FA;}";
        style = style + "table th {padding-top: 8px;padding-bottom: 8px;text-align: center;background-color: #000000;color: white;}";
        style = style + "</style>";


        // CREATE A WINDOW OBJECT.
        var win = window.open('', '', 'height=700,width=700');

        win.document.write('<html><head>');
        win.document.write('<title>PDF</title>');   // <title> FOR PDF HEADER.
        win.document.write(style);          // ADD STYLE INSIDE THE HEAD TAG.
        win.document.write('</head>');
        win.document.write('<body>');
        win.document.write(sTable);         // THE TABLE CONTENTS INSIDE THE BODY TAG.
        win.document.write('</body></html>');

        win.document.close(); 	// CLOSE THE CURRENT WINDOW.

        win.print();    // PRINT THE CONTENTS.

        //$("#hide").attr("hidden", "hidden"); 
    }
    $("#btnprint").on("click",function(){
        //$("#hide").removeAttr("hidden", "hidden");
      	
       $("#btnprint").hide();
        savePDF();
        //$("#hide").attr("hidden", "hidden"); 
        
    });



















});