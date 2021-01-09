let cart = {};

$.getJSON('sources/goods.json', function(data){
    let goods = data;
    checkCart();
    showCart();
    
    function showCart(){
        let out = '';
        if(Object.keys(cart).length != 0){
            out += '<table><tr>';
            out += '<th>Товар</th>';
            out += '<th>Цена</th>';
            out += '<th>Количество</th>';
            out += '<th>Стоимость</th>';
            out += '<th></th>';
            out += '</tr>';
            for(let key in cart){
                out += '<tr>';
                out += '<td>'+ goods[key].name +'</td>';
                out += '<td>'+ goods[key].cost +'</td>';
                out += '<td class="count"> '+ cart[key] +'<button data-art="'+key+'" class="plus-button"><b>+</b></button> <button  data-art="'+key+'" class="minus-button"><b>-</b></button></td>';
                out += '<td>'+ goods[key].cost * cart[key]  +'</td>';
                out += '<td><button data-art="'+key +'" class="delete-button">Удалить</button</td>';
                out += '</tr>';
            }
            out += '</table>';
        }else{
            out+='<p>Корзина пуста</p>';
        }
        
        
        $('#cart').html(out);
        $('button.plus-button').on('click', addGoodCount);
        $('button.minus-button').on('click', substuctGoodCount);
        $('button.delete-button').on('click', deleteGoods);
    }
    
    function addGoodCount(){
        let articul = $(this).attr('data-art');
        if(cart[articul] != undefined){
            cart[articul]++;
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        showCart();
    }

    function substuctGoodCount(){
        let articul = $(this).attr('data-art');
        if(cart[articul] != undefined && cart[articul]!=0){
            cart[articul]--;
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        showCart();
    }
    
    function deleteGoods(){
        
        let articul = $(this).attr('data-art');
        if(cart[articul] != undefined){
            delete cart[articul];
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        showCart();
    }
    
})

function checkCart(){
    if(localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}



