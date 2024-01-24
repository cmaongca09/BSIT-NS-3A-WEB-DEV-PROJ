import React from "react";
import "../Component/AboutUs.css";

export const AboutUs = () => {
  const teamMembers = [
    {
      name: "Clarence Dave Maongca",
      role: "Team Leader",
      image: "TMMAONGCA.jpg",
      socials: {
        Facebook:
          "https://twitter.com/janesmithhttps://www.facebook.com/clarencedave.maongca.9",
        linkedin:
          "https://www.linkedin.com/in/clarence-dave-maongca-6a118a2a3//",
        github: "https://github.com/cmaongca09",
      },
    },

    {
      name: "Archie Agulay",
      role: "Team Member",
      image: "TMAGULAY.jpg",
      socials: {
        Facebook: "https://www.facebook.com/archhh.agl",
        linkedin: "https://www.linkedin.com/in/archie-agulay-1833082a3/",
        github: "https://github.com/archieagulay",
      },
    },
    {
      name: "Lancelot Aldaba",
      role: "Team Member",
      image: "TMALDABA.jpg",
      socials: {
        Facebook: "https://www.facebook.com/adegamiisou",
        linkedin: "",
        github: "https://github.com/lancealdaba",
      },
    },
    {
      name: "Jonathan Alegre",
      role: "Team Member",
      image: "TMALEGRE.jpg",
      socials: {
        Facebook: "https://www.facebook.com/jonathan.alegre.7165",
        linkedin: "https://www.linkedin.com/in/jonathan-alegre-29b3682a4/",
        github: "https://github.com/Alegre-Jonathan",
      },
    },
  ];

  return (
    <div className="about-us-container">
      <h1>About the page </h1>
      <h2>
        Hi welcome to our page. Our group dedicated this website for IT students
        who needs to buy their needs in their activities in just few seconds!!
        No need to buy from outside or wait your parcel in days when you can buy
        your IT needs here.
      </h2>
      ;<h1>Meet the Team</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img
              src={member.image}
              alt={member.name}
              className="team-member-image"
            />
            <h2>{member.name}</h2>
            <p>{member.role}</p>
            <div className="social-links">
              <a
                href={member.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={member.socials.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {/* Add more social links as needed */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
