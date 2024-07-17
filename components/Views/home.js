import html from "html-literal";

export default state => html`
  <section id="jumbotron"></section>
  <form id="zip" method="GET">
    <label for="zipcode">Enter zipcode:</label>
    <input type="text" name="zipcode" required />
    <input type="submit" value="Submit" />
  </form>
  <h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </h3>
`;
