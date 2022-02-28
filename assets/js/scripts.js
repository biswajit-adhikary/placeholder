const loadImages = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayImages(data));
}
loadImages();
const displayImages = (images) => {
    const imageDiv = document.getElementById('image-div');
    images.forEach(image => {
        const newCol = document.createElement('div');
        newCol.classList.add('col-md-3');
        newCol.innerHTML = `
            <img onclick="getDetails(${image.id})" class="w-100 mb-4" src="${image.url}" alt="" data-bs-toggle="modal" data-bs-target="#details">
        `;
        imageDiv.appendChild(newCol);
    });
    displaySpinner('none');
}

const getDetails = (id) => {
    const detailsDiv = document.getElementById('details-div');
    detailsDiv.innerHTML = '';
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data));
}

const displayDetails = (details) => {
    const detailsDiv = document.getElementById('details-div');
    detailsDiv.innerHTML = `
        <img class="w-100 mb-4" src="${details.url}" alt="">
        <h4 class="text-center">${details.title}</h4>
    `;
}

const displaySpinner = style => {
    const spinDiv = document.getElementById('spinner');
    spinDiv.style.display = style;
}