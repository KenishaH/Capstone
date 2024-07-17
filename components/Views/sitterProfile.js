import html from "html-literal";

export default () => html`
  <section id="Sitter Form">
    <h2 id="Sitter Information">Sitter Information</h2>
    <form>
      <label for="sitterName"> First name</label>
      <input type="text" name=" firstname" id="name" required />
      <label for="lastName">Last name</label>
      <input type="text" lastName=" lastname" required />

      <label for="number">Phone Number</label>
      <input type="text" id="number" name="number" required />

      <label for="email">Email</label>
      <input type="example123@email.com" id="email" name="email" required />

      <input type="submit" name="submit" value="SUBMIT" />
    </form>
  </section>
`;
