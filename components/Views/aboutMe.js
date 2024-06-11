import html from "html-literal";
import aboutMe from "../../images/aboutMe.jpg";

export default () => html`
  <section id="aboutMe">
    <h2 id="aboutMe"></h2>
    <img src="${aboutMe}" alt="me" />

    <p>
      Welcome to 24hrs paws Playhosue . As founder of this webiste my name is
      Ke'Nisha Hope. I have my B.A in Inofrmation systems and Computer sciences
      from Harris-Stowe Stae University.I am chicago born and rasied. Recently I
      have relocated to St.Louis to further my education.
    </p>
    <p>
      I have adopted a dog named Max, which has brought significant changes and
      responsibilities into my life. As a passionate dog owner and avid
      traveler, I care deeply about the safety and well-being of dogs. One
      common challenge I face when traveling is finding a reliable dog sitter
      for extended periods. This inspired me to create a network that helps
      fellow dog owners find efficient sitters, whether for a single day or
      longer durations.
    </p>
  </section>
`;
