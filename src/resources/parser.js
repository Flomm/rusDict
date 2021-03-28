export function parseHTML(htmlText) {
  const html = htmlText;
  const startIndex = html.indexOf('id="Russian">Russian</h2>');
  const rusSection = html.slice(startIndex);
  let declIndex;
  if (rusSection.indexOf('id="Declension') !== -1) {
    declIndex = rusSection.indexOf('id="Declension');
  } else {
    declIndex = rusSection.indexOf('id="Conjugation"');
  }
  const declension = rusSection.slice(declIndex);
  const tableIndex = declension.indexOf('<table');
  const startTable = declension.slice(tableIndex);
  const fullTable = startTable.slice(0, startTable.indexOf('</table>') + 8);
  const withOutStyle = fullTable.replace(/(<[^>]+) style=".*?"/gi, '$1');
  const withOutLatin = withOutStyle.replace(/<span lang="ru-Latn".*?<\/span>/g, '');
  const withOutLinks = withOutLatin.replace(/<a.*?>/g, '');
  const withOutEndLinks = withOutLinks.replaceAll('</a>', '');
  const withOutBreaks = withOutEndLinks.replaceAll('<br/>', '');
  const withOutClasses = withOutBreaks.replace(/(<[^>]+) class=".*?[^>]*/gi, '$1');
  const withOutCaption = withOutClasses.replace(/<caption.*?<\/caption>/g, '');
  const withOutTriangle = withOutCaption.replaceAll('△', '');
  return withOutTriangle;
}
