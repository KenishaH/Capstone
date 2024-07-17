import html from "html-literal";

export default () => html`
  <header>
    <i>
      <h2>Dog sitting Services Offers</h2>
    </i>
  </header>
  <section id="ServicesOffered">
    <form id="Schedule a Service">
      <label>
        <input type="checkbox" name="service" id="dog_sitting" />
        Dog Sitting
      </label>
      <label>
        <input type="checkbox" name="service" id="dog_wash" />
        Dog Wash
      </label>
      <label>
        <input type="checkbox" name="service" id="nail_trim" />
        Nail Trim
      </label>
      <label>
        <input type="checkbox" name="service" id="pick_up" />
        Pick Up
      </label>
      <label>
        <input type="checkbox" name="service" id="drop_off" />
        Drop Off
      </label>
      <button type="submit">Submit</button>
    </form>
  </section>
`;
