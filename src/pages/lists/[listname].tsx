import React, { useState, ChangeEvent, FormEvent, useEffect, SetStateAction } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Popup from 'reactjs-popup';
import TaggedPhotoView from '@/app/components/tagged_photo_view';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/pagestyle.css';



export default function listView() {
    const [searchString, setSearchString] = useState<string | string[] | undefined>('');
    const [matches, setMatches] = useState([]);
    const [displayError, setDisplayError] = useState('');

    // For Mockup
    let dish = {
        "name_native": "mole poblano",
        "name_en": "",
        'Geo Region': "Mexico",
        "summary_en": "a traditional mexican sauce typically made from chocolate and chili peppers such as ancho, \
                                        pasilla, mulato and chipotle, and seasoned with ingredients such as black pepper, achiote, huaje, \
                                        cumin, clove, anise, tomato, tomatillo, garlic, sesame seed, dried fruit, herbs like hoja santa",
        "wikipedia_url_en": "https://en.wikipedia.org/wiki/Mole_(sauce)",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/3/30/ChickRedMole.JPG",
        "alt_names": "",
        "how_to_eat_en": "",
        "tags": "mexican, puebla",
        "Season": "",
        "Notes": "",
        "Often Contains": "",
        "Meal": "Condiment"
    }

    let photo_url_1 = "https://www.thefoodinmybeard.com/wp-content/uploads/2019/01/ramendumphero.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1";
    let photo_url_2 = "https://thewoksoflife.com/wp-content/uploads/2014/09/shanghai-soup-dumpling-12-e1569441411964.jpg";
    let photo_url_3 = "https://www.recipetineats.com/wp-content/uploads/2022/09/Vegetable-Dumplings-1-on-plate.jpg?w=500&h=500&crop=1";
    let dish_name = "mole poblano"
    //

    const router = useRouter();

    // useEffect(() => {
    //     let promise = new Promise(function (resolve, reject) {
    //         let search_string = router.query.searchString
    //         setSearchString(search_string);
    //         // let url: string = "https://food-tbd-waiter.eba-5ynepjcj.us-east-1.elasticbeanstalk.com/";
    //         let url: string = 'http://127.0.0.1:5000/';
    //         fetch(url + 'search_db/' + search_string)
    //             .then(response => response.json())
    //             .then(data => setMatches(data['matches']))
    //             .catch(error => {
    //                 let errorStr: string = 'There was a problem with the Fetch operation: ' + error;
    //                 setDisplayError(errorStr);
    //                 console.error(errorStr);
    //             });

    //         console.log('Submitted text:', search_string);
    //     })
    //         .catch(error => {
    //             let errorStr: string = 'ERROR: ' + error;
    //             setDisplayError(errorStr);
    //             console.error(errorStr);
    //         });

    // }, [router.query]);

    return (
        <Container className="p-3">
            <div className="col-xs-12 col-sm-6 col-md-8">
            <Link href="/">Home</Link>
                <div className="photo_list_view">
                    <h2>Chinese Dumplings</h2>
                    <Link href="/upload_new_photo">Add Photo</Link>
                    <div className='taggedDishCard'>
                        <div className="row">
                            <div className="col col-md-4">

                                <Card style={{ width: '200px', margin: '25px', padding: '25px' }}>
                                    <Card.Img variant="top" src={photo_url_1} style={{ width: 180, height: 100 }} />
                                    <Card.Body>
                                        <Card.Title><Popup trigger={<button>mole poblano</button>} modal nested>
                                            <div ><TaggedPhotoView key={dish} food_item={dish}></TaggedPhotoView> </div>
                                        </Popup></Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col col-md-4">
                                <Card style={{ width: '200px', margin: '25px', padding: '25px' }}>
                                    <Card.Img variant="top" src={photo_url_2} style={{ width: 180, height: 100 }} />
                                    <Card.Body>
                                        <Card.Title>Shanghai Soup Dumpling</Card.Title>
                                    </Card.Body>
                                </Card></div>å
                            <div className="col col-md-4">
                                <Card style={{ width: '200px', margin: '25px', padding: '25px' }}>
                                    <Card.Img variant="top" src={photo_url_3} style={{ width: 180, height: 100 }} />
                                    <Card.Body>
                                        <Card.Title>Pot Stickers</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-md-4">

                                <Card style={{ width: '200px', margin: '25px', padding: '25px' }}>
                                    <Card.Img variant="top" src={photo_url_1} style={{ width: 180, height: 100 }} />
                                    <Card.Body>
                                        <Card.Title><Popup trigger={<button>mole poblano</button>} modal nested>
                                            <div ><TaggedPhotoView key={dish} food_item={dish}></TaggedPhotoView> </div>
                                        </Popup></Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col col-md-4">
                                <Card style={{ width: '200px', margin: '25px', padding: '25px' }}>
                                    <Card.Img variant="top" src={photo_url_2} style={{ width: 180, height: 100 }} />
                                    <Card.Body>
                                        <Card.Title>Shanghai Soup Dumpling</Card.Title>
                                    </Card.Body>
                                </Card></div>å
                            <div className="col col-md-4">
                                <Card style={{ width: '200px', margin: '25px', padding: '25px' }}>
                                    <Card.Img variant="top" src={photo_url_3} style={{ width: 180, height: 100 }} />
                                    <Card.Body>
                                        <Card.Title>Pot Stickers</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div> 
                        <div className="row">
                            <div className="col col-md-4">

                                <Card style={{ width: '200px', margin: '25px', padding: '25px' }}>
                                    <Card.Img variant="top" src={photo_url_1} style={{ width: 180, height: 100 }} />
                                    <Card.Body>
                                        <Card.Title><Popup trigger={<button>mole poblano</button>} modal nested>
                                            <div ><TaggedPhotoView key={dish} food_item={dish}></TaggedPhotoView> </div>
                                        </Popup></Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col col-md-4">
                                <Card style={{ width: '200px', margin: '25px', padding: '25px' }}>
                                    <Card.Img variant="top" src={photo_url_2} style={{ width: 180, height: 100 }} />
                                    <Card.Body>
                                        <Card.Title>Shanghai Soup Dumpling</Card.Title>
                                    </Card.Body>
                                </Card></div>å
                            <div className="col col-md-4">
                                <Card style={{ width: '200px', margin: '25px', padding: '25px' }}>
                                    <Card.Img variant="top" src={photo_url_3} style={{ width: 180, height: 100 }} />
                                    <Card.Body>
                                        <Card.Title>Pot Stickers</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};
