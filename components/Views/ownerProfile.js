import html from "html-literal";

export default () => html`
  <section id="Create Profile">
    <h2 id="Create Profile">Create A Profile</h2>
    <form>
      <label for=" First Name "> First Name </label>
      <input type="text" name="First name" id="First name" required />

      <label for="Last Name "> Last Name</label>
      <input type="text" name="Last name " id="Last name" required />

      <label for="Phone Number">Phone number:</label>
      <input type="Text" Number="773-312-8000" required />

      <label for="email">Email:</label>
      <input type="example123@email.com" id="email" name="Email" required />

      <label for="Dog Name">Dog Name:</label>
      <input type="text" id="DogName" name="DogName" required />

      <label for="Dog Breed">Dog Breed:</label>
      <input type="text" id="Name" name=" Dog Name" required />

      <label for="Dog Color">Dog Color :</label>
      <input type="text" id="color" color="text " required />

      <h3 id=" Emergency Contact">Emergency Contact</h3>
      <label for=" Contact Name">Name :</label>
      <input
        type="text"
        id="name"
        name="name"
        Number=" 773-312-8000"
        required
      />
      <label for=" Contact Number">Number :</label>
      <input
        type="text"
        id="name"
        name="name"
        Number=" 773-312-8000"
        required
      />
    </form>
  </section>
`;
