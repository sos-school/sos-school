export default async function addAbout() {
    var AboutSection = document.getElementById("about");

    // fetch data
    let response = await fetch(`https://raw.githubusercontent.com/sos-school/website/master/en/README.md`);
    let about = await response.body;
    console.log(response)
    console.log(response.type)

    // inject data into about section
    document.getElementById('about').innerHTML = marked(about)
}