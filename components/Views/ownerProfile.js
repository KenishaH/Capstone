import html from "html-literal";

export default () => html`
  <section id="Create Profile">
    <h2 id="Create Profile">Create A Profile</h2>
    <form id="Create OwnerProfile">
      <label for="firstName"> First Name: </label>
      <input type="text" name="firstName" id="firstName" required />

      <label for="lastName "> Last Name:</label>
      <input type="text" name="lastName" id="lastName" required />

      <label for="phoneNumber">Phone Number:</label>
      <input
        type="Text"
        name="phoneNumber"
        id="phoneNumber"
        placeholder="773-312-8000"
        required
      />

      <label for="email">Email:</label>
      <input type="example123@email.com" id="email" name="email" required />

      <label for="dogName">Dog Name:</label>
      <input type="text" id="dogName" name="dogName" required />

      <label for="dogBreed">Dog Breed:</label>
      <input type="text" id="dogBreed" name="dogBreed" required />

      <label for="dogColor">Dog Color:</label>
      <input type="text" id="dogColor" name="dogColor" color="text " required />

      <h3 id="EmergencyContact">Emergency Contact</h3>

      <label for="contactName">Name:</label>
      <input type="text" id="contactName" name="contactName" required />
      <label for="contactNumber">Number:</label>
      <input
        type="text"
        id="contactNumber"
        name="contactNumber"
        placeholder="773-312-8000"
        required
      />
      <section id="ServicesOffered">
        <label>
          <input
            type="checkbox"
            name="service"
            id="dog_sitting"
            value="dog_sitting"
          />
          Dog Sitting
        </label>
        <label>
          <input
            type="checkbox"
            name="service"
            id="dog_wash"
            value="dog_wash"
          />
          Dog Wash
        </label>
        <label>
          <input
            type="checkbox"
            name="service"
            id="nail_trim"
            value="nail_trim"
          />
          Nail Trim
        </label>
        <label>
          <input type="checkbox" name="service" id="pick_up" value="pick_up" />
          Pick Up
        </label>
        <label>
          <input
            type="checkbox"
            name="service"
            id="drop_off"
            value="drop_off"
          />
          Drop Off
        </label>
      </section>
      <input type="submit" name="submit" value="SUBMIT" />
    </form>
  </section>
`;
