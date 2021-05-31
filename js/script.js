function writeFromInput()
{
	var titulo = document.getElementById("title");
	var contenido = document.getElementById("content");
	var images = document.getElementById("images");

	if (titulo.value.trim() == "" || contenido.value.trim() == ""  || images.value.trim() == "") 
	{
		alert("INGRESAR CONTENIDO");
		return;
	}

	writeNew(
		titulo.value,
		contenido.value,
		images.value,
		);

	titulo.value = "";
	contenido.value = "";
	images.value = "";
}

function writeNew(title, content)
{
	var div = document.createElement("div");
	div.classList.add("col-4","card");

	var divCard = document.createElement("div");
	divCard.classList.add("card-body", "border-primary");

	var images = document.createElement("img");
	images.classList.add("card-img-top");
	images.setAttribute("src", document.getElementById("images").value);

	var h = document.createElement("h1");
	h.classList.add("card-title")
	h.textContent = title;
	
	var p = document.createElement("p");
	p.classList.add("card-text");
	p.textContent = content;

divCard.append(images)
divCard.append(h);
divCard.append(p);
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