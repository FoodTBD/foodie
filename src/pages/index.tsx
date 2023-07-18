import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

export default function mainPage() {
    return (
        <Container className="p-3">
            <div className="col-xs-12 col-sm-6 col-md-8">
                <h1> Welcome to FoodTBD</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formSearch">
                        <Form.Label><h2>Search the db for dishes</h2></Form.Label>
                        <Form.Control type="search" placeholder="Search" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <h2>Other Links:</h2>
                <ul>
                    <li><Link href="/upload_ocr_text">Input the EasyOCR results array</Link></li>
                    <li><Link href="/upload_menu_snapshot">Upload a menu snapshot to search</Link></li>
                    <li><a href="https://docs.google.com/spreadsheets/d/18rHSAq_OmQDYqke-SvkN08AFkBvKTgJRKpnP7u09raE/edit#gid=1831747662" target="_blank">Go To Eats Google Sheet</a></li>
                </ul>
            </div>
        </Container>
    )
}
