

let eklenecekyer = document.getElementById("liste");


function ekle() {
    let inputtodo = document.getElementById("todo").value;

    if (inputtodo.trim() == "") {
        alert("Lütfen bir todo girin");
    }
    else {
        var yenimetin = document.createElement("li");
        yenimetin.textContent = inputtodo;
        eklenecekyer.appendChild(yenimetin);
        document.getElementById("todo").value = "";
    }

}



function temizle() {
    let temizyer = "";
    eklenecekyer.textContent = temizyer;
    document.getElementById("filter").value="";
}


function filtrele() {
    const listItemTextContent = Array.from(document.querySelectorAll("li")).map(itemText => itemText.firstChild.data);

    const inputtakigiris = document.getElementById("filter").value.toLowerCase();

    for (let i = 0; i < listItemTextContent.length; i++) {
        const liText = listItemTextContent[i].toLowerCase(); // Her liste öğesini küçük harfle
        const liElement = document.querySelectorAll("li")[i]; // İlgili li öğesini al
        

        if (liText.includes(inputtakigiris)) 
        {
            liElement.style.display = "block";
        }

        else 
        {
            liElement.style.display = "none";
        }
    }
}




