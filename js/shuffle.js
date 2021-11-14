/*
shuffle.js
by Logan Davis

Description:
    Handles shuffling of given text 
    in an HTML page.

4/29/17 | MIT License 
*/

function isBlank(item){
    /* Checks to see if an item isn't a blank string,
     * if not, returns True.
     */
    return item != "" ;
}

function shuffleWordsFromText(text){
    /* returns a string of a section of text with the 
     * shuffleWord function mapped to each word.
     */
    return text.split(" ").filter(isBlank).map(shuffleWord).join(" ");
}

function shuffleWord(word){
    /* Has a 2% chance of shuffling a 
     * word unless it is <br>|<p>|</p>
     * 
     * If the shuffling happens, the new word
     * is returned, otherwise, the old one
     * is returned.
     * 
     */
    // adapted from http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript

    if((Math.random() > 0.98) && (word.match("<br>|<p>|</p>") == null)){
        var j, x, i;
        var a = word.split("");
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
        return a.join("")
    } else {
        return word
    }
}

//Sets a special interval for the title
setInterval(function(){
    document
    .getElementById("title")
    .innerHTML = shuffleWordsFromText(document.getElementById("title").innerHTML)
},100)
