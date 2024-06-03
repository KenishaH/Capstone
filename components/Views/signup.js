import html from "html-literal";

export default () => html`
  <section id=" Sign Up!">
  <div class="container">
        <h1>Create Profile</h1>
        <div class = "select ">
          <button id= "profile"> Dog Owner Profile</button>
          <button id ="Dog Sitter"> Dog Sitter <?button>
</div>
const profileOwnerForm = `
    <form id="ownerForm " method="post" action="">
      <h2>Owner Form</h2>
      <>
      <label for=" First Name "> First Name </label>
      <input type="text" name="First name" id="First name" required />

      <label for="Last Name "> Last Name</label>
      <input type="text" name="Last name " id="Last name" required />

      <label for="PhoneNumber">Phone number:</label>
      <input type="tel" name="PhoneNumber" id = "phone" placeholder="773-312-8000" required />

      <label for="email">Email:</label>
      <input type="email" id="email" name="Email"  placeholder ="youremail@email.com" required />

      <label for="Dog Name">Dog Name:</label>
      <input type="text" id="DogName" name="DogName" required />

      <label for="Dog Breed">Dog Breed:</label>
      <input type="text" id="Name" name=" Dog Name" required />

      <label for="Dog Color">Dog Color :</label>
      <input type="text" id="color" color="text " required />

      <h3 id=" Emergency Contact">Emergency Contact</h3>
      <label for="Emergency Cintact">Emergency Contact :</label>
      <input type="text" id="name" name="name"
      <input type for = "Number"  name = "cell" id = "cell " placeholder = "773-312-8000" required
`
    </form>
  </section>
`;
