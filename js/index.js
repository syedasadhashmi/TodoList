let searchBar = document.getElementById('search-bar');
let mainListContainer = document.getElementById('main-list-container');
let addBtn = document.getElementById('addBtn');
// var dID= 1;
let arrToDo = [];
function addToDo() {
    if (searchBar.value == "") {
        return;
    }
    arrToDo.push(searchBar.value);
    printList(arrToDo);
    
}
function printList(arrToDo) {
    arrToDo.forEach((element,i) => {
        let div = document.createElement('div');
        div.classList.add('added-Lists', 'flex-container');
        div.setAttribute('id', `div${i}`);

        let button1 = document.createElement('button');
        button1.classList.add('trash-icon');
        button1.setAttribute('id', `btn1${i}`);
        button1.setAttribute('onclick', `del(${i},arrToDo)`);

        let i1 = document.createElement('i');
        i1.classList.add('fa-solid', 'fa-trash-can');

        let p = document.createElement('p');
        p.classList.add('list-p');
        p.textContent = element;

        let button2 = document.createElement('button');
        button2.classList.add('edit-icon');
        button2.setAttribute('onclick', `edit(${i},arrToDo)`);

        let i2 = document.createElement('i');
        i2.classList.add('fa-solid', 'fa-pen-to-square');

        button1.appendChild(i1);
        button2.appendChild(i2);
        div.appendChild(button1);
        div.appendChild(p);
        div.appendChild(button2);
        mainListContainer.appendChild(div);
        searchBar.value = '';
        console.log(arrToDo.lenght);
    });
    // for (let i = 0; i <= arrToDo.length - 1; i++) {
    //     console.log(arrToDo.value);
        
    // }
}
// function addToList() {
//   let text = searchBar.value;
//   if (text === '') {
//     return;
//   }
//   let div = document.createElement('div');
//   div.classList.add('added-Lists','flex-container');
//   div.setAttribute('id',`${dID}`);

//   let button1 = document.createElement('button');
//   button1.classList.add('trash-icon');
//   button1.setAttribute('id',`btn1${dID}`);
//   button1.setAttribute('onclick', `del(${dID})`);

//   let i1 = document.createElement('i');
//   i1.classList.add('fa-solid','fa-trash-can');

//   let p = document.createElement('p');
//   p.classList.add('list-p');
//   p.textContent = text;

//   let button2 = document.createElement('button');
//   button2.classList.add('edit-icon');

//   let i2 = document.createElement('i');
//   i2.classList.add('fa-solid','fa-pen-to-square');

//   button1.appendChild(i1);
//   button2.appendChild(i2);
//   div.appendChild(button1);
//   div.appendChild(p);
//   div.appendChild(button2);
//   arr.push(mainListContainer.appendChild(div));
//   searchBar.value = '';
// //   console.log(arr);
//   dID++;
// //   console.log(dID);
// }
// addBtn.addEventListener('click', addToList);
// searchBar.addEventListener('keypress', function (e) {
//   if (e.key === 'Enter') {
//     addToList();
//   }
// });
// mainListContainer.addEventListener('click', function (e){
//     dID--;
//     console.log(dID);
//     child = mainListContainer.children;
//     console.log(child[0].id);

//     var btn1ID = document.getElementById(`btn1${dID}`)
//     var divId = document.getElementById(`div${dID}`);
//      console.log(divId);
//      console.log(btn1ID.id);

//     // console.log(e.target.classList);
//     // console.log(e.children[0].id);
//     if(e.target.classList[1] == "fa-trash-can"){
//         // let firstChild = mainListContainer.childNodes;
//         // console.log(firstChild);
//           divId.remove();
//          dID--;

//     }else{
//         console.log('false');
//     }
//     searchBar.value = "";


// });

// console.log(btn1dID);
function edit(e,arrToDo) {
    console.log(e,arrToDo);
    prompt("Edit this ToDo",arrToDo);
}

function del(e,arrToDo) {
    console.log(e,arrToDo);
    let newArr = arrToDo.splice(e,1);
    // arrToDo.pop(newArr);
    console.log(arrToDo.splice(e,1));
}
function deleteBtn(e,arrToDo) {
    console.log('delete btn pressed');
}
