$(document).ready(function () {
    let item = JSON.parse(localStorage.getItem('item'));
    $('#pictures').append(item.image);
    $('#name').append(item.name);
    
}
)