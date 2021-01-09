let cart = {}

$('document').ready(function(){
    loadGoods();
    checkCart();
    feelHeader();
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
            out+= '<p>'+
                '<img src=sources/' + data[key]['image'] + 
                ' alt="'+data[key]['name']+'"' +
                '></p>'
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
    feelHeader();
}

function checkCart(){
    if(localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

function countGoodsTotal(){
    let count = 0;
    for(let good in cart){
        count += cart[good];
    }
    return count;
}

function feelHeader(){
    let header = '<div id="cart">'+
            '<a href="cart"><img id="basket" alt="Корзина" title="В корзину"  src="sources/images/basket.jpg"></a>' + 
            '<div id="counter">'+ countGoodsTotal() +'</div>'
            '</div>';
        $('#header').html(header);
}
