import html from "html-literal";
import * as views from "./Views";

export default state => html`
  ${views[state.view](state)}
`;
