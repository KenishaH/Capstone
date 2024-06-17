import html from "html-literal";

export default () => html`
  <section id=" Sign Up!">
    <div class="container">
      <h1>Create Profile</h1>
      <div class="select ">
        <a id="owner" href="/ownerProfile" data-navigo>Dog Owner Profile</a>
        <a id="dogSitter" href="/sitterProfile" data-navigo>Dog Sitter</a>
      </div>
    </div>
  </section>
`;
