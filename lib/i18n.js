export default function i18n(locale, data) {
    const translation =
    locale === 'lu' ? data.lu : 
    locale === 'de' ? data.de : 
    locale === 'fr' ? data.fr : 
    data.en;

    return translation;
}
