export default async function addAbout(lang) {
    // fetch data
    let response = await fetch(`../${lang}/README.md`);
    let about = await response.text;
    console.log(about);

    // inject data into about section
    document.getElementById("about").innerHTML = marked(about);
}