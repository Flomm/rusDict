export default function replaceEngWords(str, replaceObject) {
  const reg = new RegExp(Object.keys(replaceObject).join('|'), 'gi');
  return str.replace(reg, (matched) => {
    return replaceObject[matched.toLowerCase()];
  });
}
