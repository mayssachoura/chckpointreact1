
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import  {FormGroup}  from 'react-bootstrap';
import  {Container}  from 'react-bootstrap';
import  {Row}  from 'react-bootstrap';
import  {Col}  from 'react-bootstrap';
import  {Label}  from 'react-bootstrap';




import './App.css';

function App() {
  return (

<div className="d-flex justify-content-center flex-column align-items-center" >



<Form> 
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>username</Form.Label>
    <Form.Control type="name" placeholder="Enter your name" />
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />

    <Form.Text className="text-muted">
      We'll never share your hehehehehhe email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>

</Form>







</div>


   
  );
}


export default App;
