import addAbout from './about.js';
import addLanguages from './languages.js';
import addMembers from './members.js';

function addContent(lang) {
    addAbout(lang);
    addLanguages(lang);
    addMembers();
}