// constructor of card listings
const cardList = [
  {
    name: "Paolo Maldini",
    jobTitle: "Front End Developer",
    company: "Web Weavers",
    experience: "3 years",
    school: "University of Washington",
    major: "Marketing",
    email: "paolo@example.com",
    linkedInUrl: "paolo.linkedinprofile.com",
    codeLanguages: ["HTML", "CSS", "JavaScript", "Node", "Express"],
  },
  {
    name: "Barbara Bonansea",
    jobTitle: "Software Engineer",
    company: "Excellence in the Cloud",
    experience: "12 years",
    school: "University of Southern California",
    major: "Computer Science",
    email: "barbara@example.com",
    linkedInUrl: "barbara.linkedinprofile.com",
    codeLanguages: ["HTML", "JavaScript", "C", "Go"],
  },
  {
    name: "Javier Hernandez",
    jobTitle: "User Experience Engineer",
    company: "Web Sites and More",
    experience: "5 years",
    school: "Seattle University",
    major: "Performing Arts",
    email: "javier@example.com",
    linkedInUrl: "javier.linkedinprofile.com",
    codeLanguages: ["HTML", "CSS"],
  },
  {
    name: "Maribel Dominguez",
    jobTitle: "Front End Engineer",
    company: "Bits and Bytes",
    experience: "6 years",
    school: "University of Washington",
    major: "Mechanical Engineering",
    email: "maribel@example.com",
    linkedInUrl: "maribel.linkedinprofile.com",
    codeLanguages: ["HTML", "CSS", "JavaScript", "React", "Vue", "Redux"],
  },
];
// Container constructor
const container = document.querySelector("#container-list");

// Template for cardList
cardList.forEach(function (cardData) {
  
  const card = document.createElement("div"); // imperative DIV ELEMENT Object
  
  card.setAttribute("class", "card-who"); // impative step add attriubt

  card.innerHTML = `
    <div class="card-who">
      <img class="pup" src="img/headshot.jpg" alt="picture of dog">
      <h3>${cardData.name}</h3>
      <p>${cardData.jobTitle}</p>
    </div>
    <div class="info">
      <ul>
        <li><span>Company: </span>${cardData.company}</li>
        <li><span>Experience: </span>${cardData.experience}</li>
        <li><span>School: </span>${cardData.school}</li>
        <li><span>Major: </span>${cardData.major}</li>
        <li><span>Email: </span>${cardData.email}</li>
        <li><span>Code Languages: </span>${cardData.codeLanguages}</li>
      </ul>
    </div>
    <div class="linked">
      <img class="icon" src="img/linkedin.svg" alt="icon for LinkedIn">
      <a href="paolo.linkedinprofile.com">${cardData.linkedInUrl}</a>
    </div>
    `;

    container.appendChild(card)

});


