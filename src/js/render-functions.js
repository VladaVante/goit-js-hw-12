export const markupCardGallery = array => 
        array.map(
    ({
            webformatURL,
            largeImageURL,
            tags,
            likes,
            views,
            comments,
            downloads,
        }) => `
        <li class="card">
            
            <a href="${largeImageURL}">
            <img src="${webformatURL}" class="image" height="152px" width="360px" alt="${tags}" />
            </a>
        
            <div class="card-description-wrapper">
            <div class="card-description-item"> 
                    <p class="card-description-title">Likes </p>
                    <p class="card-description-title-value">${likes} </p>
            </div>
            <div class="card-description-item"> 
                    <p class="card-description-title">Views </p>
                    <p class="card-description-title-value">${views} </p>
            </div>
            <div class="card-description-item"> 
                    <p class="card-description-title">Comments </p>
                    <p class="card-description-title-value">${comments} </p>
            </div>
            <div class="card-description-item"> 
                    <p class="card-description-title">Downloads</p>
                    <p class="card-description-title-value">${downloads} </p>
            </div>
            </div>
            </li>
        `
    )