var quotesList=[
    {
        quote:"“Be yourself, everyone else is already taken”",
        author:"― Oscar Wilde"
    },
    {
        quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        author:"― Dr. Seuss"
    },
    {
        quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author:"― Albert Einstein"
    },
    {
        quote:"“Be the change that you wish to see in the world.”",
        author:"― Mahatma Gandhi"
    },
    {
        quote:"“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
        author:"― Maya Angelou"
    },
    {
        quote:"“A friend is someone who knows all about you and still loves you.”",
        author:"― Elbert Hubbard"
    },
    {
        quote:"“To live is the rarest thing in the world. Most people exist, that is all.”",
        author:"― Oscar Wilde"
    },
    {
        quote:"“It is better to be hated for what you are than to be loved for what you are not.”",
        author:"― Andre Gide, Autumn Leaves"
    },
    {
        quote:"“Good friends, good books, and a sleepy conscience: this is the ideal life.”",
        author:"― Mark Twain"
    },
    {
        quote:"“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”",
        author:"― Neil Gaiman, Coraline"
    },



];



function generateQuote()
{
    var index=Math.floor(Math.random()*quotesList.length)

    for(var i=1;i<=index;i++)
    {
        var randomQuote=quotesList[i]
        document.getElementById("quote").innerHTML=quotesList[i].quote
        document.getElementById("author").innerHTML=quotesList[i].author


    }
   
 

}