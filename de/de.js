import addLanguages from '../scripts/languages.js';
import addMembers from '../scripts/members.js';

window.onload = function addContent() {
    addLanguages("en");
    addMembers();
}