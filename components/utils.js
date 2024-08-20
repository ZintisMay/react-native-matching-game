export function shuffle(array) {
  let result = cloneDeepSimple(array);
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [result[currentIndex], result[randomIndex]] = [
      result[randomIndex],
      result[currentIndex],
    ];
  }
  console.log("shuffle", result);
  return result;
}

export function cloneDeepSimple(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// export function determineDimensions(size) {
//   let root = Math.sqrt(size);
//   let down = Math.ceil(root),
//     across = Math.floor(root);

//   let percentageWidth = 100 / across,
//     percentageHeight = 100 / down;

//   return [percentageWidth, percentageHeight];
// }
