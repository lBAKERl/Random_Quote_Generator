// GLOBAL VARIABLES
var quoteFontSize = 3.98;
// quoteTimerId holds the setInterval function used in newQuoteTimer() to
// enable the manipulation of the timer
var quoteTimerId;

// quotes is array containing quote objects: .quote .source .citation .year .title
var quotes = [
  {quote: 'To argue with a person who has renounced the use of reason is like administering medicine to the dead',
  source: 'Thomas Paine', citation: 'The Crisis', year: '1776', title: 'Founding Father'},
  {quote: 'Histories of Lives are seldom entertaining, unless they contain something either admirable or exemplar',
  source: 'Benjamin Franklin', citation: 'Silence Dogood', year: '1722', title: 'Founding Father'},
  {quote: 'It takes time to persuade men to do even what is for their own good',
  source: 'Thomas Jefferson', year: '1790', title: 'Founding Father'},
  {quote: 'A diffusion of knowledge is the only guardian of true liberty',
  source: 'James Madison', year: '1825', title: 'Founding Father'},
  {quote: 'I want to stand as close to the edge as I can without going over. Out on the edge you see all the kinds of things you can\'t see from the center.',
  source: 'Kurt Vonnegut', title: 'Author'},
  {quote: 'Here we are, trapped in the amber of the moment. There is no why',
  source: 'Kurt Vonnegut', title: 'Author'},
  {quote: 'The question isn\'t who is going to let me; it\'s who is going to stop me',
  source: 'Ayn Rand', title: 'Philosopher'},
  {quote: 'Hindsight must surely be the most useless function of the human brain, torturing yourself over the unalterable past.',
  source: 'Peter F. Hamilton', citation: 'Mindstar Rising', title: 'Author'},
  {quote: 'Throughout the centuries there were men who took first steps, down new roads, armed with nothing but their own vision.',
  source: 'Ayn Rand', title: 'Philosopher'},
  {quote: 'Those who believe in telekinetics, raise my hand.',
  source: 'Kurt Vonnegut', title: 'Author'},
  {quote: 'And I asked myself about the present: how wide it was, how deep it was, how much was mine to keep.',
  source: 'Kurt Vonnegut', title: 'Author'},
  {quote: 'In matters of style, swim with the current; in matters of principle, stand like a rock.',
  source: 'Thomas Jefferson', title: 'Founding Father'}
];

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// load first quote when page is loaded
printQuote();

// returns random quote object from the quotes array
function getRandomQuote(){
  var i = Math.floor(Math.random() * quotes.length);
  return quotes[i];
}

// CALLS: getRandomQuote() and uses the returned quote object to create a
// string to display on the webpage in the quote-box div
// CALLS: randomBgColor() to change the background color to a random value
// CALLS: newQuoteTimer() to refresh quote after innactivity; printQuote clears
// the timer each iteration clearInterval(quoteTimerId)
function printQuote(){
  var quoteString = '';
  var quote = getRandomQuote();

  // Decorates quote by splitting into array, randomly assigning <strong> or
  // toUpperCase and rejoining the string
  var quoteText = quote.quote.split(' ');
  for(let i = 0; i < quoteText.length; i++){
    if(Math.floor(Math.random() * 10) > 5){
      quoteText[i] = quoteText[i].toUpperCase();
    } else if(Math.floor(Math.random() * 10) > 7){
      quoteText[i] = `<strong>${quoteText[i]}</strong>`;
    }
  }
  quoteText = quoteText.join(' ');

  clearInterval(quoteTimerId);

  quoteString += '<p id="quote-text" class="quote"> ' + quoteText + '</p>';
  quoteString += '<p class="source"> ' + quote.source;

  if(quote.citation){
    quoteString += '<span class="citation"> ' + quote.citation + ' </span>';
  }
  if(quote.year){
    quoteString += '<span class="year"> ' + quote.year + ' </span>';
  }
  if(quote.title){
    quoteString += '<span class="citation title"> ' + quote.title + ' </span>';
  }
  quoteString += '</p>';

  document.getElementById('quote-box').innerHTML = quoteString;
  randomBgColor();

  newQuoteTimer();
}

// initializes timer to quoteTimerId that calls printQuote() automatically
// after 30 seconds of user innactivity
function newQuoteTimer(){
  quoteTimerId = setInterval(printQuote, 30000);
}


// creates a random background color by using an inner function random
// number generator to generate rgb values
// also changes button color to match **LOSES HOVER CSS ATRIBUTE**
// comment out line 108 to restore
function randomBgColor(){
  var rVal = randomVal();
  var gVal = randomVal();
  var bVal = randomVal();
  var rgbString = 'rgb(' + rVal + ', ' + gVal + ', ' + bVal + ')';
  document.body.style.backgroundColor = rgbString;
  document.getElementById('loadQuote').style.backgroundColor = rgbString;
  function randomVal() {
    return Math.floor(Math.random() * 200);
  }
}
