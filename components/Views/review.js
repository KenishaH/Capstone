import html from "html-literal";

export default state => html`
  <h1>Confirmation Information</h1>
  ${state.owner.map(field => {
    return html`
      <p>${field.firstName}</p>
      <hr />
      <p>${field.lastName}</p>
      <hr />
      <p>${field.phoneNumber}</p>
      <hr />
      <p>${field.email}</p>
      <hr />
      <p>${field.dogName}</p>
      <hr />
      <p>${field.dogBreed}</p>
      <hr />
    `;
  })}
`;
