import replaceEngWords from './replaceEngWords';
import { replaceObject } from './replaceObject';

export function parseHTML(htmlText) {
  const html = htmlText;
  const startIndex = html.indexOf('id="Russian">Russian</h2>');
  const rusSection = html.slice(startIndex);
  let declIndex;
  if (rusSection.indexOf('id="Declension') !== -1) {
    declIndex = rusSection.indexOf('id="Declension');
  } else if (rusSection.indexOf('id="Conjugation') !== -1) {
    declIndex = rusSection.indexOf('id="Conjugation"');
  } else {
    return 'Hopsz, ehhez a szóhoz nem tartozik táblázat az angol nyelvű Wikiszótáron.';
  }
  const declension = rusSection.slice(declIndex);
  const tableIndex = declension.indexOf('<table');
  const startTable = declension.slice(tableIndex);
  const fullTable = startTable.slice(0, startTable.indexOf('</table>') + 8);
  const withOutStyle = fullTable.replaceAll(/(<[^>]+) style=".*?"/gi, '$1');
  const withOutLatin = withOutStyle.replaceAll(/<span lang="ru-Latn".*?<\/span>/g, '');
  const withOutLinks = withOutLatin.replaceAll(/<a.*?>/g, '');
  const withOutEndLinks = withOutLinks.replaceAll('</a>', '');
  const withOutBreaks = withOutEndLinks.replaceAll('<br/>', '');
  const withOutClasses = withOutBreaks.replaceAll(/(<[^>]+) class=".*?[^>]*/gi, '$1');
  const withOutCaption = withOutClasses.replaceAll(/<caption.*?<\/caption>/g, '');
  const withOutTriangle = withOutCaption.replaceAll('△', '');
  const withOutIndex = withOutTriangle.replaceAll(/<sup>.*?<\/sup>/g, '');
  const withOutParens = withOutIndex.replaceAll(/\(.*?\)/g, '');
  const withOutEnd = withOutParens.replaceAll(/<li>.*?<\/li>/g, '');
  const withOutStrong = withOutEnd.replaceAll('<strong>', '');
  const withOutStrongEnd = withOutStrong.replaceAll('</strong>', '');
  const withOutWhiteSpace = withOutStrongEnd.replaceAll(/\r?\n|\r/g, '');
  const hunVers = replaceEngWords(withOutWhiteSpace, replaceObject);
  return hunVers;
}
