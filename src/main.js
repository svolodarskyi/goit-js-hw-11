import { generateMarkup, renderImagesingallery } from "./js/render-functions";
import fetchData from "./js/pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector(".search-field");
const button = document.querySelector("button");
const galleryContainer = document.querySelector('.gallery');
const loaderIconContainer = document.querySelector('.loader-icon-container')

button.addEventListener("click", handleClick);


function handleClick(event) {
    event.preventDefault();
    //reset gallery
    galleryContainer.innerHTML = '';
    loaderIconContainer.classList.toggle('loader');
    const search_word = input.value.trim();

    fetchData(search_word)
        .then((data) => {
            const images_arr = data.hits;
            if (images_arr === 0) {
                iziToast.error({
                message: `"Sorry, there are no images matching your search query. Please try again!"`,
            position: "topRight"
                })
            } else {
                const gallery_markup = generateMarkup(data.hits);
                renderImagesingallery(gallery_markup, galleryContainer);
            }
        })
        .catch(error => {
            iziToast.error({
                message: error.message,
                position: "topRight"
            });
        })
        .finally(() => { 
            loaderIconContainer.classList.toggle('loader');
            input.value = '';
        })
}














