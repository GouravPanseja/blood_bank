import React from 'react';
import ReadContainer from "./ReadContainer";
import "../styles/news.css"

function VitalReads() {
  return (
    <section className="vital-reads">
      <h1>Vital reads</h1>
      <p>Giving life is vital... and so are these top reads and fun facts from behind the scenes, to keep front of mind.</p>
      <ReadContainer />
    </section>
  );
}

export default VitalReads;