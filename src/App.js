import React from "react";
import "./styles.css";
const quotes = [
  ["Be yourself; everyone else is already taken", "Oscar Wilde"],
  [
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
    "Albert Einstein"
  ],
  [
    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
    "Marilyn Monroe"
  ],
  [
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
    "Bernard Baruch"
  ],
  [
    "A room without books is like a body without a soul",
    "Marcus Tullius Cicero"
  ],
  [
    "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth",
    "William W. Purkey"
  ],
  [
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams",
    "Dr. Seuss"
  ],
  ["You only live once, but if you do it right, once is enough", "Mae West"],
  ["Be the change that you wish to see in the world", "Mahatma Gandhi"],
  [
    "In three words I can sum up everything I've learned about life: it goes on",
    "Robert Frost"
  ],
  [
    "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals",
    "J.K. Rowling"
  ],
  [
    "No one can make you feel inferior without your consent",
    "Eleanor Roosevelt"
  ],
  [
    "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel",
    "Maya Angelou"
  ],
  ["Always forgive your enemies; nothing annoys them so much", "Oscar Wilde"],
  [
    "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that",
    "Martin Luther King, Jr."
  ],
  ["Without music, life would be a mistake", "Friedrich Nietzsche"],
  [
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment",
    "Ralph Waldo Emerson"
  ],
  [
    "Insanity is doing the same thing, over and over again, but expecting different results",
    "Narcotics Anonymous"
  ],
  [
    "It is better to be hated for what you are than to be loved for what you are not",
    "Andre Gide"
  ],
  [
    "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid",
    "Jane Austen"
  ],
  [
    "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle",
    "Albert Einstein"
  ],
  [
    "Good friends, good books, and a sleepy conscience: this is the ideal life",
    "Mark Twain"
  ],
  [
    "The fool doth think he is wise, but the wise man knows himself to be a fool",
    "William Shakespeare"
  ],
  [
    "Life is what happens to us while we are making other plans",
    "Allen Saunders"
  ],
  [
    "I have not failed. I've just found 10,000 ways that won't work",
    "Thomas Edison"
  ],
  [
    "If you don't stand for something you will fall for anything",
    "Gordon Eadie"
  ],
  [
    "I may not have gone where I intended to go, but I think I have ended up where I needed to be",
    "Douglas Adams"
  ],
  [
    "Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read",
    "Groucho Marx"
  ],
  [
    "Just when you think it can't get any worse, it can. And just when you think it can't get any better, it can",
    "Nicholas Sparks"
  ],
  [
    "Tis better to have loved and lost Than never to have loved at all",
    "Alfred Lord Tennyson"
  ],
  [
    "The greatest glory in living lies not in never falling, but in rising every time we fall",
    "Nelson Mandela"
  ],
  ["The way to get started is to quit talking and begin doing", "Walt Disney"],
  [
    "If life were predictable it would cease to be life, and be without flavor",
    "Eleanor Roosevelt"
  ],
  [
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
    "Oprah Winfrey"
  ],
  [
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking",
    "Steve Jobs"
  ],
  [
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
    "James Cameron"
  ],
  [
    "When you reach the end of your rope, tie a knot in it and hang on",
    "Franklin Delano Roosevelt"
  ],
  [
    "Don't judge each day by the harvest you reap but by the seeds that you plant",
    "Robert Louis Stevenson"
  ],
  [
    "Tell me and I forget. Teach me and I remember. Involve me and I learn",
    "Benjamin Franklin"
  ],
  [
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart",
    "Helen Keller"
  ],
  [
    "It is during our darkest moments that we must focus to see the light",
    "Aristotle"
  ],
  [
    "Spread love everywhere you go. Let no one ever come to you without leaving happier",
    "Mother Teresa"
  ],
  ["Whoever is happy will make others happy too", "Anne Frank"],
  [
    "In the end, it's not the years in your life that count. It's the life in your years",
    "Abraham Lincoln"
  ],
  [
    "Never let the fear of striking out keep you from playing the game",
    "Babe Ruth"
  ],
  [
    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose",
    "Dr. Seuss"
  ],
  ["The purpose of our lives is to be happy", "Dalai Lama"],
  [
    "Go confidently in the direction of your dreams! Live the life you've imagined",
    "Henry David Thoreau"
  ],
  [
    "Life is really simple, but we insist on making it complicated",
    "Confucius"
  ],
  ["Life is a long lesson in humility", "James Barrie"],
  [
    "I find that the harder I work, the more luck I seem to have",
    "Thomas Jefferson"
  ],
  [
    "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere",
    "Barack Obama"
  ],
  [
    "The secret of success is to do the common thing uncommonly well",
    "John D. Rockefeller, Jr."
  ],
  [
    "Success is not final; failure is not fatal: It is the courage to continue that counts",
    "Winston Churchill"
  ],
  ["I never dreamed about success, I worked for it", "Estee Lauder"],
  [
    "There are no secrets to success. It is the result of preparation, hard work, and learning from failure",
    "Colin Powell"
  ],
  [
    "It is better to fail in originality than to succeed in imitation",
    "Herman Melville"
  ],
  ["I failed my way to success", "Thomas Edison"],
  [
    "If you really look closely, most overnight successes took a long time",
    "Steve Jobs"
  ],
  [
    "Don't be afraid to give up the good to go for the great",
    "John D. Rockefeller"
  ],
  [
    "If you genuinely want something, don't wait for it -- teach yourself to be impatient",
    "Gurbaksh Chahal"
  ],
  [
    "Before anything else, preparation is the key to success",
    "Alexander Graham Bell"
  ]
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { randomNum: Math.floor(Math.random() * quotes.length) };
    this.handleNewQuote = this.handleNewQuote.bind(this);
  }
  handleNewQuote() {
    this.setState({
      randomNum: Math.floor(Math.random() * quotes.length)
    });
  }

  render() {
    var quote = quotes[this.state.randomNum][0];
    var author = quotes[this.state.randomNum][1];
    return (
      <div
        width="100px"
        height="100px"
        style={{ backgroundColor: "#222", fontFamily: "Rubik" }}
      >
        <div>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
            integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossOrigin="anonymous"
          ></link>
        </div>
        <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
        <center>
          .
          <div
            id="quote-box"
            style={{ backgroundColor: "#222", color: "lightgrey" }}
          >
            <h1 className="text-primary">
              <b>Quote Generator</b>
            </h1>
            <hr /> <br />
            <div id="text" style={{ fontSize: "25px" }}>
              <i>
                <i className="fas fa-quote-left"></i> {quote}{" "}
                <i className="fas fa-quote-right"></i>
              </i>
            </div>
            <br />
            <div id="author" style={{ fontSize: "20px" }}>
              -{author}
            </div>
            <br />
            <div id="buttons">
              <a
                href="http://twitter.com/intent/tweet"
                id="tweet-quote"
                className="btn btn-primary"
                style={{ float: "left", margin: ".25em" }}
                target="_blank"
              >
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </a>
              <a
                href="http://facebook.com"
                id="fb-quote"
                className="btn btn-primary"
                style={{ float: "left", margin: ".25em" }}
                target="_blank"
              >
                <i className="fab fa-facebook" aria-hidden="true"></i>
              </a>
              <a
                href="http://instagram.com/"
                id="ig-quote"
                className="btn btn-primary"
                style={{ float: "left", margin: ".25em" }}
                target="_blank"
              >
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
              <a
                href="http://tumblr.com/"
                id="tumblr-quote"
                className="btn btn-primary"
                style={{ float: "left", margin: ".25em" }}
                target="_blank"
              >
                <i className="fab fa-tumblr" aria-hidden="true"></i>
              </a>
              <a
                href="http://pinterest.com/"
                id="pint-quote"
                className="btn btn-primary"
                style={{ float: "left", margin: ".25em" }}
                target="_blank"
              >
                <i className="fab fa-pinterest" aria-hidden="true"></i>
              </a>
              <button
                className="btn btn-primary"
                style={{ float: "right", margin: ".25em" }}
                id="new-quote"
                onClick={this.handleNewQuote}
              >
                Generate New Quote <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>{" "}
        </center>
        ..
        <div>.</div>
      </div>
    );
  }
}
