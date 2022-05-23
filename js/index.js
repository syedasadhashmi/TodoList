
function addToList(){
    let searchBtn = document.getElementById("search-bar");
    let paraList = document.getElementById("p-1");
    console.log(searchBtn.value);
    paraList.innerHTML = searchBtn.value;
    searchBtn.value = "";
}
function editBtn(){
    console.log("Edit btn pressed");
}
function deleteBtn(){
    console.log("delete btn pressed");
}