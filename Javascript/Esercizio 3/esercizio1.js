const isSunnyDay = true;
const isAutumn = false;
const itIsRaining = false;
const isSummer = true;




console.log(isSunnyDay && isSummer);
console.log(isSunnyDay && !isAutumn);
console.log(isAutumn || !itIsRaining);
console.log(isAutumn && itIsRaining);
console.log(isSunnyDay && !isSummer);
console.log(!isSummer || isAutumn);