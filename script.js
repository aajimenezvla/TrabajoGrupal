let items = [];

function moveToItemPage(index) {
    localStorage.setItem('item', JSON.stringify(items[index]))
    window.location.href = "item.html";
}

$(document).ready(function () {


    function getAllProducts() {
        $.ajax({
            type: "Get",
            url: "http://localhost:3000/api/v1/items",
            dataType: "json",
            success: function (data) {
                items = data;
                let html = '';
                /**
                    npm install
                    npm run development

                 */
                data.forEach((product, index) => {
                    html += '<div class="col mb-4">';
                    html += '<div class="card">';
                    html += '<img src="' + product.image + '" class="card-img-top" alt="..." />';
                    html += '<div class="card-body">';
                    html += '<h5 class="card-title">' + product.name + '</h5>';
                    html += '<p class="card-text">$' + product.price + '</p>';
                    html += '<a href="#"><button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" onclick="moveToItemPage(' + index + ')">Comprar</button></a>';
                    html += ' </div> </div>';
                })
                $('#products').append(html);
            },
            error: function (error) {
                alert(error);
            }
        });
    }

    getAllProducts();
})