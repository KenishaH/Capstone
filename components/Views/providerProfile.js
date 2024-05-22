import html from "html-literal";

export default () => html`
<section id ="Provider Profile">
<h2> Provider Information</h2>
<div> 
    <input
    type="text"
    name =" first name"
    required
</div>
<div> 
    <input
    type="text"
    lastName =" last name"
    required
</div>
<div> 
    <input
    type= "text"
    number =" 773-312-8000"
    required
</div>
<div> 
    <input
    type="example123@email.com"
    id="email"
    name="Email" 
    required   
</div>`;