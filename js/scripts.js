var language = 'Java';

var langImage = 'images/java.jpg';
var whyPopular = 'Java is widely used thanks to its platform independence. Programs can run on many different kinds of computers including PCs, Macs, and mobile phones.';
        
        
var howUsed = ['Cloud based applications', 'Space exploration at NASA',
               'Internet of Things', 'Self-driving cars', 'Big Data analysis',
               'Games'];
var popularApps = ['Eclipse', 'Netbeans IDE', 'Minecraft', 'RuneScape'];

var review = [
    {
        name: 'Andrew Bromage',
        text: 'If you’re asking about Java as a programming language, there’s very little to recommend it. It’s a procedural language with the usual horribly-broken Simula-style object system, much like 90% of languages designed after 1990 and inheriting all of the theoretical and practical problems therein. It’s unnecessarily verbose, doing anything nontrivial carries a high boilerplate burden, and I could go on, but I think I’ve made my point.'
    },
    {
        name: 'Andrey Kozhanov',
        text: 'Java is my favorite language. It was not a love from the first sight and the main reason I decided to switch to it was an ability to run the same program on any platform with Java Virtual Machine on it.'
    },
    {
        name: 'Thomas Knowles',
        text: 'Honestly, I’ve found it to be a lovely language, all things considered. Static typing, proper interfaces, vast, vast libraries and a huge developer community. Sadly, I don’t get to use it much these days, since my field of expertise has drifted somewhat since learning it, but it was and would be my go-to language if I needed to develop an application of any significant size. Well, honestly I’d probably use Scala instead these days, if possible, but still, it’d be my second choice!'
    }
];


var langEl = document.getElementById('language');
langEl.textContent = language;

//var imageEl = document.getElementById('lang-image');
//imageEl.src = langImage;

var whyPopularEl = document.getElementById('why-popular');
whyPopularEl.textContent = whyPopular;

appendList('how-used', howUsed);
appendList('popular-apps', popularApps);

appendReview(review);

function appendList(listId, arr) {
    var el = document.getElementById(listId);
    var listItem;
    var text;

    for (var i = 0; i < arr.length; i++) {
        text = document.createTextNode(arr[i]);
        listItem = document.createElement('li');
        listItem.appendChild(text);
        el.appendChild(listItem);
    }
}

function appendReview(review) {
    var reviewEl = document.getElementById('reviews');
    var name;
    var text;
    var heading;
    var para;

    for (var i = 0; i < review.length; i++) {
        name = document.createTextNode(review[i].name);
        text = document.createTextNode(review[i].text);
        heading = document.createElement('h3');
        para = document.createElement('p');
        heading.appendChild(name);
        para.appendChild(text);
        reviewEl.appendChild(heading);
        reviewEl.appendChild(para);
    }
}


