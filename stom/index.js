window.onscroll = function() { myFunction() };

var header = document.getElementById("dws-menu");

var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


////////////////////////////////////////////////
var array = new Array();
var speed = 10;
var timer = 10;

function initMap() {
    var uluru = {
        lat: 42.8546236,
        lng: 74.6025801
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

////////////////////////////////////////////////




const q = 'tooth'
const apikey = 'QChgvIBlPEB0b544HC0fFQeommBFTFPC'
const path = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}`


fetch(path)
    .then(data => data.json())
    .then(res => {
        console.log(res)
        var arrayOfGifs = res.data
        var rand = Math.floor(Math.random() * arrayOfGifs.length)
        var firstItem = arrayOfGifs[rand]
        var giphyLink = firstItem.images.fixed_width.url

        document.querySelector('#gif').setAttribute('src', giphyLink)

    })
    ////////////////////////////

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

/////////////////////
function myFunctionn() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}