let items = [];

function moveToItemPage(index) {
    localStorage.setItem('item', JSON.stringify(items[index]))
    window.location.href = "item.html";
}$(document).ready(function () {

    let item = JSON.parse(localStorage.getItem('item'));
    $('#pictures').attr("src", item.image);
    $('#name').append(item.name);
    $('#price').append('<strong>Precio:</strong> $'+item.price);

    function getSugeridos() {
        $.ajax({
            type: "Get",
            url: "http://localhost:3000/api/v1/sugeridos",
            dataType: "json",
            success: function (sugeridos) {
                items = sugeridos;
                let html = '';
 
                sugeridos.forEach((product, index) => {
                    html += '<div class="col mb-4">';
                    html += '<div class="card">';
                    html += '<img src="' + product.image + '" class="card-img-top" alt="..." />';
                    html += '<div class="card-body">';
                    html += '<h5 class="card-title">' + product.name + '</h5>';
                    html += '<p class="card-text">$' + product.price + '</p>';
                    html += '<a href="#"><button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" onclick="moveToItemPage(' + index + ')">Comprar</button></a>';
                    html += ' </div></div> </div>';
                })
                $('#sugerido').append(html);
            },
            error: function (error) {
                alert(error);
            }
        });
    }

    getSugeridos();

}
)