/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array

 “Never put off till tomorrow what may be done day after tomorrow just as well.”
― Mark Twain

“I am not young enough to know everything.”
― Oscar Wilde

“Poets have been mysteriously silent on the subject of cheese.”
― G.K. Chesterton, Alarms and Discursions

“Judge a man by his questions rather than by his answers.”
― Voltaire

"I want to play the guitar very badly, and I do play the guitar very badly."
- Bono

“If you try and take a cat apart to see how it works, the first thing you have on your hands is a non-working cat.”
― Douglas Adams

***/

var quotes = [];

quotes.push({}, {}, {}, {}, {});

quotes[0].quote = "Never put off till tomorrow what may be done day after tomorrow just as well.";

quotes[0].source = "Mark Twain";


quotes[1].quote = "Poets have been mysteriously silent on the subject of cheese.";

quotes[1].source = "G. K. Chesterton";



quotes[2].quote = "Judge a man by his questions rather than by his answers.";

quotes[2].source = "Voltaire";

quotes[3].quote = "I want to play the guitar very badly, and I do play the guitar very badly.";

quotes[3].source = "Bono";

quotes[4].quote = "If you try and take a cat apart to see how it works, the first thing you have on your hands is a non-working cat.";

quotes[4].source = "Douglas Adams";

quotes[4].citation = "The Hitchhiker's Guide to the Galaxy";

quotes[4].year = 1979;


console.log(quotes);




/***
 * `getRandomQuote` function
***/
function getRandomQuote()
{
  var quoteIndex = Math.floor(Math.random()*(quotes.length));

  return quotes[quoteIndex];
}


/***
 * `printQuote` function
***/
function printQuote()
{
  var selectedQuote = getRandomQuote();

  var quoteHTMLstring = "";

  quoteHTMLstring += '<p class="quote">' + selectedQuote.quote  + '</p>';

  quoteHTMLstring += '<p class="source">' +  selectedQuote.source;

  if (selectedQuote.citation)
  {
    quoteHTMLstring += '<span class="citation">' + selectedQuote.citation + '</span>';
  }

  if (selectedQuote.year)
  {
    quoteHTMLstring += '<span class="year">' + selectedQuote.year + '</span>';

  }

  quoteHTMLstring += '</p>';

  document.getElementById("quote-box").innerHTML = quoteHTMLstring;

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
