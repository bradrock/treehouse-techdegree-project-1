/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//categories: famous authors, musicians, athletes

//set up the quotes array

var quotes = [];

quotes.push({}, {}, {}, {}, {}, {}, {}, {}, {});

quotes[0].quote = "Never put off till tomorrow what may be done day after tomorrow just as well.";
quotes[0].source = "Mark Twain";
quotes[0].category = "famous authors"


quotes[1].quote = "Poets have been mysteriously silent on the subject of cheese.";
quotes[1].source = "G. K. Chesterton";
quotes[1].citation = "Alarms and Discursions"
quotes[1].category = "famous authors"


quotes[2].quote = "When you come to a fork in the road, take it.";
quotes[2].source = "Yogi Berra";
quotes[2].category = "athletes";


quotes[3].quote = "I want to play the guitar very badly, and I do play the guitar very badly.";
quotes[3].source = "Bono";
quotes[3].category = "musicians";


quotes[4].quote = "We are not an endangered species ourselves yet, but this is not for lack of trying.";
quotes[4].source = "Douglas Adams";
quotes[4].citation = "Last Chance To See";
quotes[4].year = 1992;
quotes[4].category = "famous authors";


quotes[5].quote = "All music is folk music. I ain’t never heard a horse sing a song.";
quotes[5].source = "Louis Armstrong";
quotes[5].category = "musicians";


quotes[6].quote = "I don’t know anything about music. In my line you don’t have to.";
quotes[6].source = "Elvis Presley";
quotes[6].category = "musicians";


quotes[7].quote = "My career was sputtering until I did a 360 and got headed in the right direction.";
quotes[7].source = "Tracy McGrady";
quotes[7].category = "athletes";


quotes[8].quote = "I've never lost a game. I just ran out of time.";
quotes[8].source = "Michael Jordan";
quotes[8].category = "athletes";



//getRandomQuote function: returns a random quote object from the quotes array
function getRandomQuote()
{
  var quoteIndex = Math.floor(Math.random()*(quotes.length));

  return quotes[quoteIndex];
}


/***
*printQuote function: takes a quote object generated by calling the getRandomQuote function and
  generates an HTML string out of it, and assigns the HTML string to be the inner HTML of the HTML
  element with ID "quote-box"
***/
function printQuote()
{
  var selectedQuote = getRandomQuote();

  var quoteHTMLstring = "";

  quoteHTMLstring += '<p class="quote">' + selectedQuote.quote  + '</p>';

  quoteHTMLstring += '<p class="source">' +  selectedQuote.source;

  //if the selected quote object has a citation property, add citation info to the HTML string
  if (selectedQuote.citation)
  {
    quoteHTMLstring += '<span class="citation">' + selectedQuote.citation + '</span>';
  }

  //if the selected quote object has a year property, add year info to the HTML string
  if (selectedQuote.year)
  {
    quoteHTMLstring += '<span class="year">' + selectedQuote.year + '</span>';

  }

  quoteHTMLstring += '<span class = "category">' + selectedQuote.category + '</p>';

  document.getElementById("quote-box").innerHTML = quoteHTMLstring;

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
