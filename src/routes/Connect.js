import React from 'react'
import email from "../assest/email.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Connect.css"


const Connect = () => {
  const handleclick=(e)=>{
    e.preventDefault();
    console.log("form submitted")
  }
  return (
    <>
      <section id='connect'>
        <div className='container connect-bg my-1'>
          <div className='row'>
            <div className='col-md-5 connect-icon-div'>

              <h1>Reach me out</h1>
              <div className='arr-div3'></div>

              <img id="email-icon" src={email} alt="" />

            </div>
            <div className='col-md-7 py-4 '>

              <Form className='form-tag' onSubmit={handleclick}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label className="input-label">Name</Form.Label>
                  <Form.Control type="text" className='input-tag' placeholder="Enter name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="input-label">Email address</Form.Label>
                  <Form.Control type="email" className='input-tag' placeholder="Enter email" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCity">
                  <Form.Label className="input-label">City</Form.Label>
                  <Form.Control type="text" className='input-tag' placeholder="Enter city" />

                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" className='text-secondary' label="Check me out" />
                </Form.Group>
                <Button className='submit-btn' type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Connect