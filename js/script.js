	var titulo = document.getElementById("title");
	var contenido = document.getElementById("content");
	var images = document.getElementById("images");	
	var link = document.getElementById("link");
	var mainContainer = document.getElementById("container")


	function writeFromInput()
	{

		if (titulo.value.trim() == "" || contenido.value.trim() == ""  || images.value.trim() == "" || link.value.trim() == "" ) 
		{
			alert("INGRESAR CONTENIDO");
			return;
		}

		var newContainer = mainContainer.querySelector("[div-container][edit]");

		if (newContainer) {
			cardEdit(newContainer,titulo.value,contenido.value,images.value,link.value);
		}
		else {
			writeNew(titulo.value,contenido.value,images.value,link.value);
		}

		clearForm();
	}

function clearForm()
{
	titulo.value = "";
	contenido.value = "";
	images.value = "";
	link.value = "";
}

function writeNew(title, content, images, link)
{
	var div = document.createElement("div");
	div.classList.add("col-lg-4", "col-sm-6" ,"card", "border-dark");
	div.setAttribute("div-container", true);
	var articulo = document.createElement("card");

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

	var btnEliminar = document.createElement("button");
	btnEliminar.textContent = "Borrar";
	btnEliminar.classList.add("btn", "btn-danger", "fw-bold");
	btnEliminar.setAttribute("onclick", "remove(this)");


	var btnEditar = document.createElement("button");
	btnEditar.textContent = "Editar";
	btnEditar.classList.add("btn", "btn-secondary", "fw-bold");
	btnEditar.setAttribute("onclick", "edit(this)");




divCard.append(images);
divCard.append(h);
divCard.append(p);
divCard.append(comprar);
div.append(divCard);
div.prepend(btnEliminar);
div.prepend(btnEditar);

document.getElementById("container").append(div);
}


function cardEdit(container, title, content, images, link)
{
	container.querySelector("h3").textContent = title;
	container.querySelector("p").textContent = content;
	container.querySelector("img").setAttribute("src", images.value);
	container.querySelector("a").setAttribute("href", link.value);

	var buttons = container.querySelectorAll("button");

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].removeAttribute("disabled");
	}

	container.removeAttribute("edit");
}

function remove(button)
{
	if (confirm("Desea borrar?")) {
	button.closest("div").remove();
	}
}


function edit(boton)
{
	var container = boton.closest("[div-container]");
	var allButtons = boton.closest("#container").querySelectorAll("button");

	for (var i = 0; i < allButtons.length; i++)  {
		allButtons[i].removeAttribute("disabled");

		break;
	}

	container.setAttribute("edit", true);

	titulo.value = container.querySelector("h3").textContent;
	contenido.value = container.querySelector("p").textContent;
	images.value = container.querySelector("img").getAttribute("src");
	link.value = container.querySelector("a").getAttribute("href");


	var buttons = container.querySelectorAll("button");

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].setAttribute("disabled", true);
	}
}