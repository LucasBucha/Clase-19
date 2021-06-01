function writeFromInput()
{
	var titulo = document.getElementById("title");
	var contenido = document.getElementById("content");
	var images = document.getElementById("images");	
	var link = document.getElementById('link');

	if (titulo.value.trim() == "" || contenido.value.trim() == ""  || images.value.trim() == "" || link.value.trim() == "" ) 
	{
		alert("INGRESAR CONTENIDO");
		return;
	}

	writeNew(
		titulo.value,
		contenido.value,
		images.value,
		link.value,
		);

	titulo.value = "";
	contenido.value = "";
	images.value = "";
	link.value = "";
}

function writeNew(title, content)
{
	var div = document.createElement("div");
	div.classList.add("col-lg-4", "col-sm-6" ,"card", "border-dark");

	var divCard = document.createElement("div");
	divCard.classList.add("card-body");

	var images = document.createElement("img");
	images.classList.add("card-img-top", "rounded");
	images.setAttribute("src", document.getElementById("images").value);

	var h = document.createElement("h3");
	h.classList.add("card-title")
	h.textContent = title;
	
	var p = document.createElement("p");
	p.classList.add("card-text");
	p.textContent = content;

	var comprar = document.createElement("a");
	comprar.classList.add("btn", "btn-primary");
	comprar.textContent = "Comprar";
	comprar.setAttribute("href", link.value);



divCard.append(images);
divCard.append(h);
divCard.append(p);
divCard.append(comprar);
div.append(divCard);


var button = document.createElement("button");
button.textContent = "X";
button.classList.add("btn", "btn-primary");
button.setAttribute("onclick", "remove(this)");


div.append(button);

document.getElementById("container").append(div);
}


function remove(button)
{
	if (confirm("Desea borrar?")) {
	button.closest("div").remove();
	}
}