import {markupCardGallery} from "./js/render-functions";
import { backendData } from "./js/pixabay-api";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const gallery = document.querySelector("ul.gallery");
const loader = () => document.querySelector("span").classList.toggle("loader");
let searchText = "";
const showMore = document.querySelector('.show-more');
const perPage = 15;
let pageCount;
let imagesShown;
let currentItemCounter;

const lightbox = new SimpleLightbox('.gallery a', {
    caption: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});

const iziWarning = () => iziToast.show({
    message: "Input is empty!",
    position: "topRight",
    icon: 'ico-warning',
    backgroundColor: "lavender",
    messageSize: "16",
    messageColor: "grey",
    theme: "dark",
    maxWidth: "432px",
});
const iziError = () => iziToast.show({
    message: "Sorry, there are no images matching your search query. Please try again!",
    position: "topRight",
    backgroundColor: "#EF4040",
    messageSize: "16",
    messageColor: "#fff",
    theme: "dark",
    maxWidth: "350px",
    icon: "ico-error",
});

const iziInfo = () => iziToast.info({
    message: "We're sorry, but you've reached the end of search results.",
    position: "topRight",
    messageSize: "16",
    messageColor: "grey",
    theme: "dark",
    maxWidth: "350px",
    backgroundColor: "lavender",

});

const handleForm = async (event) => {
event.preventDefault();
pageCount = 1;
imagesShown = perPage;
showMore.classList.add("hidden");
    searchText = form.elements.searchText.value.trim();
if (!searchText) return iziWarning(); 
    gallery.innerHTML = "";
    loader();

try {
    const data = await backendData(searchText, perPage, pageCount);
    if (!data.hits.length) return iziError();

    
    gallery.insertAdjacentHTML("beforeend", markupCardGallery(data.hits).join(""));
    lightbox.refresh();  
    if (data.totalHits >= imagesShown) showMore.classList.remove("hidden");
}   catch(error) {
    console.error('Error handling form submission:', error);
    iziToastError("An error occurred while fetching data. Please try again later.");
}
    finally {
        loader();
        form.reset();
    }
}

const showMoreImages = async() => {
    currentItemCounter = gallery.childElementCount;
    pageCount++;
    imagesShown = perPage * pageCount;
    loader();
    showMore.classList.add("hidden");
    try {
        const updateData = await backendData(searchText, perPage, pageCount);
        gallery.insertAdjacentHTML("beforeend", markupCardGallery(updateData.hits).join(""));
        lightbox.refresh();
        scrollToNewImages();
        if (updateData.totalHits > imagesShown) showMore.classList.remove("hidden");
    else iziInfo();
    }
    catch (e) {
        console.log(e);
        iziToastError("An error occurred while loading more images. Please try again later.");
    }
    finally { loader(); }
};

const scrollToNewImages = () => {
    const firstNewItem = gallery.children[currentItemCounter];
    firstNewItem.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

document.addEventListener("DOMContentLoaded", () => {
    showMore.classList.add("hidden");
});

form.addEventListener('submit', handleForm);
showMore.addEventListener('click', showMoreImages);