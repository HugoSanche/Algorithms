
//Found the first and the last tweet according using big notation O(n)
const tweets=[{
  tweet:"Hi",
  date:2005
},
{
  tweet:"Karina",
  date:"2007"
},
{
  tweet:"Lopez",
  date:2010
},
{
  tweet:"como",
  date:2000
},
{
  tweet:"estas?",
  date:2018
}
]
//console.log(tweets[0]);
firstAndLastDateTweet(tweets);
function firstAndLastDateTweet(tweets)
{
  let firts=tweets[0];
  let last=tweets[0];
  for (let i=1;i< tweets.length; i++)
  {
    let tweet=tweets[i];
    if (tweet.date<firts.date)
      {
        firts=tweet;
        continue;
      }
      if (tweet.date>last.date)
        {
          last=tweet;
          console.log("last tweet "+last.date);
          continue;
        }
  }
console.log("First tweet "+firts.tweet+" "+ firts.date);
console.log("Last tweet "+last.tweet+" "+last.date);
}
