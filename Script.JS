/*document.body.style.background = "cyan";*/  //keiciam background spalva

/*galleryImages.forEach(function(image) {    
      image.onclick = function() {
        alert("Tikrinam ar veikia");          // kazkodel vel neveikia
      }
    });*/

var arr = [];
arr[0] = "https://images.unsplash.com/photo-1462331940025-496dfbfc7564";
arr[1] = "https://images.unsplash.com/photo-1570032257806-7272438f38da";
arr[2] = "https://images.unsplash.com/photo-1525054098605-8e762c017741";
arr[3] = "https://images.unsplash.com/photo-1562207520-19c0ebd8264f";
arr[4] = "https://images.unsplash.com/photo-1617191519105-d07b98b10de6";
arr[5] = "https://images.unsplash.com/photo-1441829266145-6d4bfbd38eb4";
arr[6] = "https://images.unsplash.com/photo-1615114814213-a245ffc79e9a";
arr[7] = "https://images.unsplash.com/photo-1552604660-a8c4dde15b2e";
arr[8] = "https://images.unsplash.com/photo-1564295644023-16f14ac50b93";

// Išdidinimo lango selectorius
var modal = document.getElementById("myModal");

//Paveikslėlio boksas išdidinimui
var modalImg = document.getElementById("img01");

// Lango išjungimo elementas
var span = document.getElementsByClassName("close")[0];

// Išjungti langą su x
span.onclick = function () {
    modal.style.display = "none";
}

var gallery = document.getElementById("index-gallery");

arr.forEach(item => {
    var img = document.createElement("img");
    img.className = "resize";
    img.src = item;
    gallery.appendChild(img);
    img.addEventListener("click", event => {
        modal.style.display = "block";
        modalImg.src = img.src;                             //istatau esamo paveiksl4lio src
    });
});

//MYGTUKAI

var ul = document.createElement("ul")
var list = document.createElement("li");
var prev = document.createElement("span");
prev.className = "arrow arrow-left";
list.appendChild(prev);


var list1 = document.createElement("li");
var nxt = document.createElement("span");
nxt.className = "arrow arrow-right";
list1.appendChild(nxt);
ul.append(list, list1);

modal.appendChild(ul);

nxt.addEventListener("click", nextImage);
prev.addEventListener("click", previousImage);

var index = 0;

function nextImage() {
    if (index < arr.length - 1) {
        index++;
        modalImg.src = arr[index];
    }
}

function previousImage() {
    if (index > 0) {
        index--;
        modalImg.src = arr[index];
    }
}
/*var prev = document.createElement("input");
prev.type = "submit";
prev.value = "atgal";
modal.appendChild(prev);

var nxt = document.createElement("input");
nxt.type = "submit";
nxt.value = "kitas";
modal.appendChild(nxt);

nxt.addEventListener("click", nextImage)
prev.addEventListener("click", previousImage)

var gallery = document.getElementById("index-gallery");
arr.forEach(item => {
    var img = document.createElement("img");
    img.className = "resize";
    img.src = item;
    gallery.appendChild(img);
    img.addEventListener('click', event => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
})

/*nxt.addEventListener("click", function () { 
    modalImg.src = arr[index]; index = (index === arr.length - 1) ? 0 : index + 1; })*/


