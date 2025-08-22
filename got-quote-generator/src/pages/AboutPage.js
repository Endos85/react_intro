// pages/AboutPage.js
import React from "react";

const AboutPage = () => {
  return (
    <div className="about-page-content" style={{ padding: "20px" , textAlign: "center" , color: "#eee" }}>
      <h1 style={{color: '#DAA520'}}>About Game of Thrones Quotes</h1>
      <h2>
        This application provides random quotes from the Game of Thrones series.
      </h2>
      <p>Diese kleine Anwendung wurde als Teil eines React-Lernkurses erstellt, um die Grundlagen von
         React-Komponenten, Zustand, Effekten und Routing zu demonstrieren.</p>
      <p>Zitate stammen aus der beliebten HBO-Serie "Game of Thrones".</p>
    </div>
  );
};

export default AboutPage;
