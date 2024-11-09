
import {markupCardGallery} from "./js/render-functions";
import { backendData } from "./js/pixabay-api";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const gallery = document.querySelector("ul.gallery");

const loader = () => document.querySelector("span").classList.toggle("loader");


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
    backgroundColor: "purple",
    messageSize: "16",
    messageColor: "#fff",
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

const handleForm = (event) => {
  event.preventDefault();
  const searchImages = event.currentTarget.elements.imageText.value.toLowerCase().trim();
  if (!searchImages) return iziWarning();
  gallery.innerHTML = "";
  loader();
  backendData(searchImages)
    .then(json => {
        if(!json.hits.length) return iziError();
        gallery.insertAdjacentHTML("beforeend", markupCardGallery
            
            (json.hits)
        .join(""));
        lightbox.refresh();
    })
    .catch(e => console.log(e))
    .finally(() => loader());
    form.reset();
}

form.addEventListener('submit', handleForm);