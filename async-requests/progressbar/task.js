const progress = document.getElementById('progress');
const xhr = new XMLHttpRequest();
const form = document.getElementById('form');

xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
xhr.send();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    xhr.addEventListener('readystatechange', () => {

        xhr.upload.onprogress = (event) => {
            progress.value = event.loaded / event.total;
        };
    });

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);

    xhr.send(formData);
});