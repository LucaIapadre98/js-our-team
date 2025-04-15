const containerTeam = document.querySelector(".container-card");


const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

let cardHTML = ``;
for(const member of teamMembers){
  cardHTML +=`
      <div class="team-card">
            <div class="image-card">
                <img src="./${member.img}" alt="${member.email}">
            </div>
            <div class="text-card">
                <h3>Marco</h3>
                <h5>Designer</h5>
            </div>
      </div> 
  `
}

// containerTeam.innerHTML= cardHTML;