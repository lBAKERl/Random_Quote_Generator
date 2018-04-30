// global variables
// quotes is array containing quote objects: .quote .source .citation .year
var quotes = [
  {quote: 'To argue with a person who has renounced the use of reason is like administering medicine to the dead',
  source: 'Thomas Paine', citation: 'The Crisis', year: '1776'},
  {quote: 'Histories of Lives are seldom entertaining, unless they contain something either admirable or exemplar',
  source: 'Benjamin Franklin', citation: 'Silence Dogood', year: '1722'},
  {quote: 'It takes time to persuade men to do even what is for their own good',
  source: 'Thomas Jefferson', year: '1790'},
  {quote: 'A diffusion of knowledge is the only guardian of true liberty',
  source: 'James Madison', year: '1825'},
  {quote: 'I want to stand as close to the edge as I can without going over. Out on the edge you see all the kinds of things you can\'t see from the center.',
  source: 'Kurt Vonnegut'},
  {quote: 'Here we are, trapped in the amber of the moment. There is no why',
  source: 'Kurt Vonnegut'},
  {quote: 'The question isn\'t who is going to let me; it\'s who is going to stop me',
  source: 'Ayn Rand'},
  {quote: 'Hingdsight must surely be the most useless function of the human brain, torturing yourself over the unalterable past.',
  source: 'Peter F. Hamilton', citation: 'Mindstar Rising'},
  {quote: 'Throughout the centuries there were men who took first steps, down new roads, armed with nothing but their own vision.',
  source: 'Ayn Rand'},
  {quote: 'Those who believe in telekinetics, raise my hand.',
  source: 'Kurt Vonnegut'},
  {quote: 'And I asked myself about the present: how wide it was, how deep it was, how much was mine to keep.',
  source: 'Kurt Vonnegut'},
  {quote: 'In matters of style, swim with the current; in matters of principle, stand like a rock.',
  source: 'Thomas Jefferson'}
];

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// returns random quote object from the quotes array
function getRandomQuote(){
  var i = Math.floor(Math.random() * quotes.length);
  return quotes[i];
}

// calls getRandomQuote() and uses the returned quote object to create a
// string to display on the webpage in the quote-box div
// also calls randomBgColor() to change the background color to a random value
function printQuote(){
  var quoteString = '';
  var quote = getRandomQuote();

  quoteString += '<p class="quote"> ' + quote.quote + '</p>';
  quoteString += '<p class="source"> ' + quote.source;

  if(quote.citation){
    quoteString += '<span class="citation"> ' + quote.citation + ' </span>';
  }
  if(quote.year){
    quoteString += '<span class="year"> ' + quote.year + ' </span>';
  }
  quoteString += '</p>';

  document.getElementById('quote-box').innerHTML = quoteString;
  randomBgColor();
}

// creates a random background color by using an inner function random
// number generator to generate rgb values
// also changes button color to match **LOSES HOVER CSS ATRIBUTE**
// comment out line 71 to restore
function randomBgColor(){
  var rVal = randomVal();
  var gVal = randomVal();
  var bVal = randomVal();
  var rgbString = 'rgb(' + rVal + ', ' + gVal + ', ' + bVal + ')';
  document.body.style.backgroundColor = rgbString;
  document.getElementById('loadQuote').style.backgroundColor = rgbString;
  function randomVal() {
    return Math.floor(Math.random() * 256);
  }
}
