import html from "html-literal";
import navItem from "./navItems";

export default navItems => {
  return html`
    <nav>
      <i class="nav-bars"></i>
      <ul class="">
        ${navItems.map(item => navItem(item)).join("")}
      </ul>
    </nav>
  `;
};
