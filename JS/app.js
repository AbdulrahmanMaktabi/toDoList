let list = document.querySelector(".list");
let deleteBtn = document.querySelectorAll(".deleteBtn");

// Delete
list.addEventListener("click" , function(e){
    if(e.target.className.includes(' deleteBtn')){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

// Add 
let addBtn = document.querySelector(".addBtn");
let addForm = document.forms[1];

addForm.addEventListener("submit" , function(e){
    e.preventDefault();
    let text = addForm.querySelector("input[type='text']").value;
    if (text != ""){
        let li = document.createElement("li");
        let span = document.createElement("span");
        let i = document.createElement("i");

        span.textContent = text;
        
        i.classList.add("text");
        i.classList.add("fas");
        i.classList.add("fa-trash-alt");
        i.classList.add("deleteBtn");

        li.appendChild(span);
        li.appendChild(i);
        list.appendChild(li);
    }
});

addBtn.addEventListener("click" , function(e){
    let text = addForm.querySelector("input[type='text']").value;
    if (text != ""){
        let li = document.createElement("li");
        let span = document.createElement("span");
        let i = document.createElement("i");

        span.textContent = text;
        
        i.classList.add("text");
        i.classList.add("fas");
        i.classList.add("fa-trash-alt");
        i.classList.add("deleteBtn");

        li.appendChild(span);
        li.appendChild(i);
        list.appendChild(li);
    }
});

// Make Done
let li = list.getElementsByTagName("li");
Array.from(li).forEach(function(md){
    md.addEventListener("click" , function(e){
        md.classList.toggle("done");
    })
})

// Hide All
let hideBtn = document.querySelector("#hideBtn");
hideBtn.addEventListener("change" , function(e){
    if (hideBtn.checked){
        list.style.display = "none";
    }else {
        list.style.display = "block";
    }
});

// Search
let searchForm = document.forms[0];
let searchInput = searchForm.getElementsByTagName("input")[0];
searchForm.addEventListener("keyup",function(e){
    const text = searchInput.value.toLocaleLowerCase();
    const tasks = list.getElementsByTagName("span");
    Array.from(tasks).forEach(function(task){
        const li = task.parentElement;
        if (task.textContent.toLocaleLowerCase().indexOf(text) != -1){
            li.style.display = "flex";
        }
        else {
            li.style.display = "none";
        }
    });
    console.log(tasks);
    e.preventDefault();
})