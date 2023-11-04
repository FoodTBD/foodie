import React, { useState, ChangeEvent, FormEvent, useEffect, SetStateAction } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Popup from 'reactjs-popup';
import FoodItemView from '@/app/components/food_item_view';
import TaggedPhotoView from '@/app/components/tagged_photo_view';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/pagestyle.css';



export default function dishView() {
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

    let photo_url_1 = "https://www.mexicoinmykitchen.com/wp-content/uploads/2009/02/Mole-Poblano-recipe-2-360x361.jpg";
    let photo_url_2 = "https://laroussecocina.mx/wp-content/uploads/2017/12/mole-poblano-001-larousse-cocina_0-e1671586546996.jpg";
    let photo_url_3 = "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/gshxiyzc/56a34532-cb85-4340-a4b0-aa337b4f257b";
    let dish_name = "mole poblano"
    //

    const [searchString, setSearchString] = useState<string | string[] | undefined>('');
    const [matches, setMatches] = useState([]);
    const [displayError, setDisplayError] = useState('');

    const router = useRouter();

    // useEffect(() => {
    //     let promise = new Promise(function (resolve, reject) {
    //         let search_string = router.query.dishname;
    //         setSearchString(search_string);
    //         // let url: string = "https://food-tbd-waiter.eba-5ynepjcj.us-east-1.elasticbeanstalk.com/";
    //         let url: string = 'http://127.0.0.1:5000/';
    //         fetch(url + 'search_db/' + search_string)
    //             .then(response => response.json())
    //             .then(data => { setMatches(data['matches']); console.log(matches);})
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
                <div className="main_dish_view">
                    <div className='error'>
                        {displayError}
                    </div>
                    <div className="foodItemView"><FoodItemView key={dish} food_item={dish}></FoodItemView> </div>
                    <br></br>
                </div>
                <div>
                    <h3>Photos Tagged with 'Mole Poblano'</h3>
                    <Link href="/upload_new_photo">Add Photo</Link>
                    <div className='taggedDishCard'>
                        <div className="row">
                            <div className="col col-md-3">

                                <Card style={{ width: '180px', margin: '25px' }}>
                                    <Card.Img variant="top" src={photo_url_1} style={{ width: 180, height: 100 }} />
                                    <Card.Body>
                                        <Card.Title><Popup trigger={<button>mole poblano</button>} modal nested>
                                            <div ><TaggedPhotoView key={dish} food_item={dish}></TaggedPhotoView> </div>
                                        </Popup></Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col col-md-3">
                                <Card style={{ width: '180px', margin: '25px' }}>
                                    <Card.Img variant="top" src={photo_url_2} style={{ width: 180, height: 100 }} />
                                    <Card.Body>
                                        <Card.Title>mole poblano</Card.Title>
                                    </Card.Body>
                                </Card></div>
                            <div className="col col-md-3">
                                <Card style={{ width: '180px', margin: '25px' }}>
                                    <Card.Img variant="top" src={photo_url_3} style={{ width: 180, height: 100 }} />
                                    <Card.Body>
                                        <Card.Title>Pechuga De Pollo En Mole Poblano</Card.Title>
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
