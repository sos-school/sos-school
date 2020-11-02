import addAbout from './about.js';
import addLanguages from './languages.js';
import addMembers from './members.js';

window.onload = function addContent() {
    addAbout("en");
    addLanguages("en");
    addMembers();
}