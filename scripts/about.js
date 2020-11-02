export default async function addAbout(lang) {
    // import Marked
    markedImport = document.createElement('script');
    markedImport.src ='https://cdn.jsdelivr.net/npm/marked/marked.min.js';

    document.getElementsByTagName('head')[0].appendChild(markedImport);

    // fetch data
    let response = await fetch(`../${lang}/README.md`);
    let about = await response.text;
    console.log(response);

    // inject data into about section
    document.getElementById(id).innerHTML = marked(about);
}