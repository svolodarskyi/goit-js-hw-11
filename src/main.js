import { generateMarkup, renderImagesingallery } from "./js/render-functions";
import fetchData from "./js/pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".searching-form");
const button = document.querySelector("button");
const galleryContainer = document.querySelector('.gallery');
const loaderIconContainer = document.querySelector('.loader-icon-container')

form.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
    event.preventDefault();
    //reset gallery
    galleryContainer.innerHTML = '';
    
    const search_word = event.target.elements.search.value.trim();
    if (!search_word) {
        iziToast.error({
            message: "Please enter a keyword into the search field",
            position: "topRight",
            timeout: 1500
        });
        return;
    }

    loaderIconContainer.classList.toggle('loader');

    fetchData(search_word)
        .then((data) => {
            console.log('asda')
            const images_arr = data.hits;
            if (images_arr.length === 0) {
                iziToast.error({
                message: `"Sorry, there are no images matching your search query. Please try again!"`,
                    position: "topRight",
                    timeout: 1500
                })
            } else {
                const gallery_markup = generateMarkup(data.hits);
                renderImagesingallery(gallery_markup, galleryContainer);
            }
        })
        .catch(error => {
            iziToast.error({
                message: error.message,
                position: "topRight",
                timeout: 5000
            });
        })
        .finally(() => { 
            
            loaderIconContainer.classList.toggle('loader');
            event.target.elements.search.value = '';
        })
}
