let theme = localStorage.getItem('theme');

let buttonExpand = document.querySelector('#expandButton');

if(theme == 'dark') {
    document.querySelector('#light-button > i').innerText = 'brightness_2'
    buttonExpand.style.color = 'white';
    document.body.classList.add('dark')
}

document.querySelector('#light-button')
.addEventListener('click', event => {
    if(localStorage.theme == 'dark') {
        document.body.classList.remove('dark')
        document.querySelector('#light-button > i').innerText = 'wb_sunny'
        localStorage.theme = ''
        buttonExpand.style.color = '';
        return;
    }

    document.body.classList.add('dark');
    document.querySelector('#light-button > i').innerText = 'brightness_2';
    localStorage.theme = 'dark';
    buttonExpand.style.color = 'white';
});

// fetch('https://api.github.com/users/Fernando-Linhares/repos')
// .then(res => res.json())
// .then(res => {
//         res.forEach(item => {
//             let div = document.createElement('div');

//             div.innerHTML = `<div class="card m-3">
//                 <div class="card-header d-flex justify-content-center"><span class="">${item.name}</span> <i class="material-icons ">folder_open</i></div>
//                 <div class="card-footer">
//                 ${item.language}
//                 </div>
//             </div>`;

//             document.querySelector('#container').appendChild(div);
//         });
// });


let flag = true;

buttonExpand.onclick = event => {
    if(flag) {
        document.querySelector('#expandButton > i.material-icons').innerText = 'keyboard_arrow_up'
        document.querySelector('#container').style.height = '1000px';
        return flag = !flag;
    }

    document.querySelector('#expandButton > i.material-icons').innerText = 'keyboard_arrow_down'
    document.querySelector('#container').style.height = '200px';
    return flag = !flag;

}