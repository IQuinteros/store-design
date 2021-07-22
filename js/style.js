HTMLCollection.prototype.forEach = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i]);
    }
};

let productArticles = document.getElementsByClassName("product-item");
let coverItems = document.getElementsByClassName("cover-item");

productArticles.forEach(article => {
    let prodId = article.getAttribute("data-prod-id");

    article.addEventListener("click", function(){
        window.open(`article.html?id=${prodId}`, "_self");
    });
});