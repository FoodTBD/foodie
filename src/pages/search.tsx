import React, { useState, ChangeEvent, FormEvent, useEffect, SetStateAction } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Popup from 'reactjs-popup';
import FoodItemView from '../app/components/food_item_view';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function DisplaySearchResults() {
    const [searchString, setSearchString] = useState<string| string[]| undefined>('');
    const [matches, setMatches] = useState([]);
    const [displayError, setDisplayError] = useState('');

    const router = useRouter();

    useEffect(() => {
        let promise = new Promise(function (resolve, reject) {
            let search_string = router.query.searchString
            setSearchString(search_string);
            let url: string = "http://food-tbd-waiter.eba-5ynepjcj.us-east-1.elasticbeanstalk.com/";
            // let url: string = 'http://127.0.0.1:5000/';
            fetch(url + 'search_db/' + search_string)
                .then(response => response.json())
                .then(data => setMatches(data['matches']))
                .catch(error => {
                    let errorStr: string = 'There was a problem with the Fetch operation: ' + error;
                    setDisplayError(errorStr);
                    console.error(errorStr);
                });

            console.log('Submitted text:', search_string);
        })
            .catch(error => {
                let errorStr: string = 'ERROR: ' + error;
                setDisplayError(errorStr);
                console.error(errorStr);
            });

    }, [router.query]);

    const handleSubmit = (event: { preventDefault: () => void; target: any; }) => {
        event.preventDefault();
        // Perform any action with the entered text
        const form = event.target;
        let promise = new Promise(function (resolve, reject) {
            setSearchString(form[0].value);
            resolve(form[0].value);
        });
        promise.then((search_string) => {
            // let url: string = "http://ec2-107-20-28-252.compute-1.amazonaws.com:5000";
            let url: string = 'http://food-tbd-waiter.eba-5ynepjcj.us-east-1.elasticbeanstalk.com/';
            fetch(url + 'search_db/' + search_string)
                .then(response => response.json())
                .then(data => setMatches(data['matches']))
                .catch(error => {
                    let errorStr: string = 'There was a problem with the Fetch operation: ' + error;
                    setDisplayError(errorStr);
                    console.error(errorStr);
                });

            console.log('Submitted text:', searchString);
        })
            .catch(error => {
                let errorStr: string = 'ERROR: ' + error;
                setDisplayError(errorStr);
                console.error(errorStr);
            });
    };

    return (
        <Container className="p-3">
            <div className="col-xs-12 col-sm-6 col-md-8">
                <div className="upload_ocr_text">
                    <div className='error'>
                        {displayError}
                    </div>
                    <div className='results'>
                        <h1>Search results for: {searchString}</h1>
                        <ul>
                            {matches.map((item, index) => (
                                <li key={item}><Popup trigger={<button>{item['name_native']} [{item['name_en']}]</button>} modal nested>
                                    <div ><FoodItemView key={item} food_item={item}></FoodItemView> </div>
                                </Popup></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formSearch">
                                <Form.Label><h2>Search the db for dishes</h2></Form.Label>
                                <Form.Control type="search" placeholder="Search" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                    <br></br>
                    <Link href="/">Home</Link>
                </div>
            </div>
        </Container>
    );
};
