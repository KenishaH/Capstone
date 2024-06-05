import html from "html-literal";

export default () => html`
<section id = "Contact";
<h2 id = "Get In contact "> Get in touch</h2>
<P><span class = "highlight"> Email : 24pawsph@gmail.com</span></P>
<form>
<label for="comment">Comment or Question</label>
            <textarea id="comment" name="comment" rows="5" required></textarea>
  <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
</form>

</section>
`;
