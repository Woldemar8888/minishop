let cart = {}

$('document').ready(function(){
    loadGoods();
    checkCart();
    showMyCart();
});

function loadGoods(){
    //download goods on page
    $.getJSON('sources/goods.json', function(data){
        let out = '';
        for (let key in data){
            out+='<div class="good-item">'
            out+= '<h3>' + data[key]['name'] + '</h3>'
            out+= '<p>Цена:<b> ' + data[key]['cost'] + '</b></p>'
            out+= '<p>' + data[key]['description'] + '</p>'
            out+= '<p><img src=sources/' + data[key]['image'] + '></p>'
            out+='<button class="add" data-art="' + key + '">Купить</button>'
            out+='</div>'
        }
        $('#goods').html(out);
        
        $('button.add').on('click', addToCart );
    })  
}

function addToCart(){
    //add good to the cart
    
    let articul = $(this).attr('data-art');
    if(cart[articul] != undefined){
        cart[articul]++;
    }else{
        cart[articul] = 1;
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    showMyCart();
}

function checkCart(){
    if(localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

function showMyCart(){
    let out='';
    for(let item in cart){
        out+= item + '---' + cart[item] +'<br>';
    }
    if(Object.keys(cart).length !=0){
        out+='<button id="clear-cart">Oчистить корзину</button>';
    }
    
    $('#cart').html(out);
    
    $('#clear-cart').on('click', clearMyCart );
}

function clearMyCart(){
    localStorage.removeItem('cart');
    cart = {};
    showMyCart();
}