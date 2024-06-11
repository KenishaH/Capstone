import html from "html-literal";

export default () => html`
  <section id="Sitter Form">
    <h2 id="Sitter Information">Sitter Information</h2>
    <form>
      <label for="providerName"> First name</label>
      <input type="text" name=" first name" id="name" required />
      <label for="lastName">Last name</label>
      <input type="text" lastName=" lastname" required />

      <label for="Number">Phone Number</label>
      <input type="text" number=" 773-312-8000" required />

      <label for="email">Email</label>
      <input type="example123@email.com" id="email" name="Email" required />
    </form>
  </section>
`;
