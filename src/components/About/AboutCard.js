import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yasuhiro Yamada&nbsp;</span>
            from&nbsp;<span className="purple">Osaka, Japan.</span>
            <br /> I am a freelancer who have an Integrated MSc (IMSc)
            in Computer Science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Enjoy Socializing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Success is on my hands!"{" "}
          </p>
          <footer className="blockquote-footer">From Y.Y</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
