import html from "html-literal";

export default () => html`
<section id = "Create Profile">
        <h2> Create A Profile</h2>
        <div>
            <label for =" First Name "> First Name </label>
            <input 
            type = "text"
            name = "First name"
            id = "First name"
            required
            />
        </div>
<div>
    <label for = "Last Name "> Last Name</label>
    <input 
    type = "text"
name = "Last name "
id ="Last name"
required
/>
</div>
<div>
    <label for="Phone Number">Phone number:</label>
        <input
          type="Text"
          Number ="773-312-8000"
          required
    
          
        />
</div>
<div>
<label for="email">Email:</label>
        <input
          type="example123@email.com"
          id="email"
          name="Email" 
          required 
          
        />
</div>
<div>
    <label for="Dog Name">Dog Name:</label>
            <input
              type="text"
              id="Name"
              name="Name" 
              required 
              
            />
    </div>
    <div>
        <label for="Dog Breed">Dog Breed:</label>
                <input
                  type="text"
                  id="Name"
                  name=" Dog Name" 
                  required 
                  
                />
        </div>
    <div>
            <label for="Dog Color">Dog Color :</label>
                    <input
                      type="text"
                      id="color" 
                      color ="text "
                      required 
                      
                    />
            </div>
            <div>
                <label for="Emergency Cintact">Emergency Contact :</label>
                        <input
                          type="text"
                          id="name"
                          name="name" 
                        Number = " 773-312-8000"
                          required 
                          
                        />
                </div>
    </section>` ;