function addnewwefield() {
    const newnode = document.createElement("textarea");
    newnode.classList.add("form-control", "wefield", "mt-2");
    newnode.setAttribute("rows", "3");
    newnode.setAttribute("placeholder", "Enter here");
    document.getElementById("we").insertBefore(newnode, document.getElementById("weaddbutton"));
}

function addnewaqfield() {
    const newnode = document.createElement("textarea");
    newnode.classList.add("form-control", "aqfield", "mt-2");
    newnode.setAttribute("rows", "3");
    newnode.setAttribute("placeholder", "Enter here");
    document.getElementById("aq").insertBefore(newnode, document.getElementById("aqaddbutton"));
}

function setText(id, value) {
    document.getElementById(id).textContent = value.trim();
}

function setLink(id, value) {
    const link = document.getElementById(id);
    const text = value.trim();
    link.textContent = text;
    link.href = text || "#";
    link.style.display = text ? "inline" : "none";
}

function buildList(targetId, fieldClass) {
    const target = document.getElementById(targetId);
    target.replaceChildren();
    for (const field of document.getElementsByClassName(fieldClass)) {
        const value = field.value.trim();
        if (value) {
            const item = document.createElement("li");
            item.textContent = value;
            target.appendChild(item);
        }
    }
}

function generatecv() {
    const name = document.getElementById("namefield").value;
    setText("nameT1", name);
    setText("nameT2", name);
    setText("contactT", document.getElementById("contactfield").value);
    setText("emailT", document.getElementById("emailfield").value);
    setText("addressT", document.getElementById("addressfield").value);
    setText("objectiveT", document.getElementById("objectivefield").value);
    setText("projectT", document.getElementById("projectfield").value);
    setLink("fbT", document.getElementById("fbfield").value);
    setLink("instaT", document.getElementById("instafield").value);
    buildList("weT", "wefield");
    buildList("aqT", "aqfield");

    const file = document.getElementById("imgfield").files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            document.getElementById("imgtemplate").src = reader.result;
        };
        reader.readAsDataURL(file);
    }

    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}

function printcv() {
    window.print();
}
