import Link from 'next/link';
import { useRouter } from 'next/router'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    const router = useRouter();

    // route user to search page
    const handleSearchSubmit = (event: { preventDefault: () => void; target: any; }) => {
        event.preventDefault();
        const form = event.target;
        router.push({
            pathname: '/search',
            query: { searchString: form[0].value }}, '/search');
    };

    return (
        <Container className="p-3">
            <div className="col-xs-12 col-sm-6 col-md-8">
                <h1> Welcome to FoodTBD</h1>
                <Form onSubmit={handleSearchSubmit}>
                    <Form.Group className="mb-3" controlId="formSearch">
                        <Form.Label><h2>Search the db for dishes</h2></Form.Label>
                        <Form.Control type="search" placeholder="Search" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <br></br>
                <br></br>
                <h3>Would you like to add a new dish to the database?</h3>
                Email us at: <a href = "mailto: foodtbd@gmail.com">FoodTBD@gmail.com</a>
                <br></br>
                Please include the following information:
                <ul>
                    <li>Dish Name</li>
                    <li>Location/Region of the dish</li>
                    <li>A short description</li>
                    <li><b>(Optional)</b> A picture of the dish</li>
                    <li><b>(Optional)</b> Any additional fun facts or information on how to properly eat the dish</li>
                </ul>
            </div>
        </Container>
    )
}
