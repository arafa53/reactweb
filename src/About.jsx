import React from 'react'
import Common from './Common'


const Contact =() =>{
    return ( 
    <>
    <div className=" my-5 ">
    <h1 className="textme">Contact us</h1>

    </div>
    <div className="container">
    <div className="row">
    <div className="col-md-6 col-10 mx-auto">
   
    <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Email "/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Full name</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Full name "/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Mobile no</label>
    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Mobile no "/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="submit" class="btn my-2 ">Submit form</button>
</form>

    </div>

    </div>

    </div>
    

    </>
    );
};


export default Contact;










