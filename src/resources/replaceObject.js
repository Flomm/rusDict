export const replaceObject = {
  nominative: 'alanyeset',
  genitive: 'birtokos eset',
  dative: 'részeshat. eset',
  accusative: 'tárgyeset',
  instrumental: 'eszközhat. eset',
  prepositional: 'elöljárós eset',
  vocative: 'megszólító eset',
  '1st singular': 'E/1',
  '2nd singular': 'E/2',
  '3rd singular': 'E/3',
  '1st plural': 'T/1',
  '2nd plural': 'T/2',
  '3rd plural': 'T/3',
  singular: 'egyes szám',
  plural: 'többes szám',
  masculine: 'hímnem',
  neuter: 'semleges nem',
  feminine: 'nőnem',
  animate: 'élő',
  inanimate: 'élettelen',
  'short form': 'rövid alak',
  'imperfective aspect': 'folyamatos',
  'perfective aspect': 'befejezett',
  infinitive: 'infinitív',
  participles: 'igenevek',
  active: 'cselekvő',
  passive: 'szenvedő',
  adverbial: 'gerundium',
  'present tense': 'jelen idő',
  'past tense': 'múlt idő',
  'future tense': 'jövő idő',
  imperative: 'felszólító mód',
  reflexive: 'visszaható',
  '1st person': 'első személy',
  '2nd person': 'második személy',
  '3rd person': 'harmadik személy',
  '<span>m</abbr>': '<span>h</abbr>',
  '<span>n</abbr>': '<span>s</abbr>',
  '<span>f</abbr>': '<span>n</abbr>',
};

export function replaceEngWords(str, replaceObject) {
  var reg = new RegExp(Object.keys(replaceObject).join('|'), 'gi');

  return str.replace(reg, (matched) => {
    return replaceObject[matched.toLowerCase()];
  });
}
