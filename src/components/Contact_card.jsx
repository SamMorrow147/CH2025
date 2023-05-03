import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import '../form.css';
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import React, { lazy } from 'react';



const SERVICE_ID = "service_2yj20kv";
const TEMPLATE_ID = 'template_qrup6gm';
const USER_ID = "ZRU2U_UuG_DkM0FLP"


const Contact_card = () => {
    const handleOnSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully'
          })
        }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong',
            text: error.text,
          })
        });
      e.target.reset()
    };


    return (    
   

      

            <div className="contact_card">
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='user_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='user_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message…'
          required
        />
        <Button type='submit' color='green'>Submit</Button>
        <div className="social-icons">
          <a  target="_blank" href="https://www.facebook.com/ClubHaus-Agency-101800182526646"><img src="./images/icons/facebook.png"/></a>
          <a target="_blank" href="https://www.linkedin.com/company/clubhaus-agency/"><img src="./images/icons/linkdin.png"/></a>
        </div>
      </Form>
    </div>


     
        )
    }

    export default Contact_card;