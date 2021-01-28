// Array containing details of recent 3 events


const dat = [
    {
    id: 0,
    pic: "images/Copy of DSC-Website-EventThumbnail.png",
    time: "Thursday, 28 January 6:30 pm",
    title: "DSC Solution Challenge 2021 Kickstart",

    link:
      "https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-solution-challenge-2021-kickstart-your-journey/#/",
  },
  {
    id:0,
    pic: "images/upcoming1.png",
    time:"Tuesday, 26 January 3:00 pm",
    title:"DSC DRUM ROLLS - Orientation Session",
    
    link:"https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-dsc-drum-rolls-orientation-session/#/"

},
  {
        id:0,
        pic: "images/upcoming.jpg",
        title:"Let's App It",
        venue:"Youtube",
        link:"https://dsc.community.dev/events/details/developer-student-clubs-banasthali-university-presents-lets-app-it/"
    
    }
    
];


const buildCard = event => {
    // Create elements needed to build a card
const div = document.createElement('div');
const h3 = document.createElement('h3');
const a = document.createElement('a');
const img = document.createElement('img');
const p = document.createElement('p');
const h4 = document.createElement('h4');



// Append newly created elements into the DOM
const body = document.querySelector('.past-div');
body.append(div);

div.append(img)
div.append(h4)
div.append(h3)
div.append(p)
div.append(a)



  // Set content and attributes
div.setAttribute('class', 'card')

img.setAttribute('src', event.pic)

img.setAttribute('class', 'card-img-top')

h3.setAttribute('class','card-title');
h3.innerHTML=event.title;

p.setAttribute('class','card-text');
p.innerHTML='<i class="fab fa-youtube"></i>';

a.setAttribute('class','event-link');
a.innerHTML= "Read More";
a.setAttribute('href',event.link);

h4.innerHTML= "Completed";
h4.setAttribute('class','badge')
};

  dat.forEach(event => buildCard(event));
  


