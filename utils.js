$("ul").on("click",".remove-item",remove_item_f);
var total1=0;
var valAnt=0;
var correcto =true;

function get_element_li (name, price) {

	return `<li class="added-item">name: ${name} price: <div class="precioC"> ${price} </div>
	<button class="remove-item" >remove</button></li>`

}

let add_B = document.getElementById("add-item");
let list_item = document.getElementById("table");
let error_color = document.getElementById("container");

let counterart =0;

add_B.addEventListener("click",add_item_to_list);

function add_item_to_list(e){
	//e.preventDefault();
	counterart++;
	let name = document.getElementById("item-name").value;
	let price = document.getElementById("item-value").value;
	let acumulado = list_item.innerHTML;
	if((name !="" && price !="")&& price >0){
		list_item.innerHTML = acumulado + get_element_li(name,price);
		sum();
		if(!correcto){
			error_color.style.borderStyle = "none";
			correcto = true;
		}
	}else{
		error_color.style.borderStyle = "solid";
		error_color.style.borderColor = "red";
		alert("You need to add a name and a price also the value of the price need to be positive ");
		correcto = false;
	}
}

function remove_item_f(e){
	//e.preventDefault();

	$(this).parent().remove();
	sum();
}

function sum(){
		total1 = total1 - valAnt;
	$(".precioC").each(function(){
		total1 += parseFloat($(this).text());

	})
	$("#total").replaceWith('<div id="total" >Total: '+total1+'</div>');
	valAnt = total1;
}


