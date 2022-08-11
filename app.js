let span = document.getElementById('span');
let product = document.getElementById('product');
let product_page = Math.ceil(product.length/4);
let l=0;
let moveper = 25.34;
let maxmove = 203;

Let mobile_view = window.matchMedia("max-width:768px");
if(mobile_view.matches)
{
    moveper= 50.36;
    maxmove= 504;
}

Let right_mover=() =>{
    l=l+movper;
    if(product == l){l=l}
    for(const i of product)
    {
        if(l> maxmove){ l=l- movper;}
        i.main.left = '-' + l + '%';
    }
}

let left_mover =() =>{
    l = l- moveper;
    if(l<=0){l=0;}
    for(const i of product)
    {
        if(product_page > 1)             
        i.main.left = '-' + l + '%';
    }
}
span[1].onlick = ()=>{right_mover();};
span[0].onlick = ()=>{left_mover();};