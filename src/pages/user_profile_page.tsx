import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Popup from 'reactjs-popup';
import TaggedPhotoView from '@/app/components/tagged_photo_view';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'reactjs-popup/dist/index.css';



export default function UserProfilePage() {
  // const [images, setImages] = useState([]);
  const [matches, setMatches] = useState([]);
  const maxNumber = 1;
  const [displayedFoodItem, setDisplayedFoodItem] = useState({});
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

  let photo_url_1 = "https://www.mexicoinmykitchen.com/wp-content/uploads/2009/02/Mole-Poblano-recipe-2-360x361.jpg";
  let photo_url_2 = "http://sffood.net/wp-content/uploads/2011/03/shanghai-dumpling-king-7.jpg";
  let photo_url_3 = "https://s.hdnux.com/photos/01/33/31/55/23960406/5/960x0.webp";
  let dish_name = "mole poblano"

  // const handleFoodItemOnClick = (foodItem: any) => () => {
  //   setDisplayedFoodItem(foodItem);
  // }

  const handleSubmit = (event: { preventDefault: () => void; target: any; }) => {
    event.preventDefault();
    // const data = new FormData(event.target);
    // let promise = new Promise(function (resolve, reject) {
    //   const requestOptions = {
    //     method: 'POST',
    //     // headers: {
    //     //   'Content-Type': 'multipart/form-data',
    //     //   'Accept': 'multipart/form-data'
    //     // },
    //     body: data
    //   };
    //   fetch('http://127.0.0.1:5000/get_food_matches_from_image', requestOptions)
    //     .then(response => response.json())
    //     .then(data => setMatches(data['matches']))
    //     .catch(error => {
    //       let errorStr: string = 'There was a problem with the Fetch operation: ' + error;
    //       setDisplayError(errorStr);
    //       console.error(errorStr);
    //     });

    //   console.log(matches);
    // })
    //   .catch(error => {
    //     let errorStr: string = 'ERROR: ' + error;
    //     setDisplayError(errorStr);
    //     console.error(errorStr);
    //   });
  };

  return (
    <Container className="p-3">
      <div className="col-xs-12 col-sm-6 col-md-8">
        <div className="upload_new_photo">
          <div className='error'>
            {displayError}
          </div>
          <Link href="/">Home</Link>
          <h1>SFFoodiePerson</h1>
          <Link href="/">Edit Profile</Link>
          <h3>San Francisco, CA</h3>
          <h3>Photos</h3>
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
                    <Card.Title>Cube Croissant</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <h3>My Lists</h3>
          <ul>
            <li><Link href={`/lists/${encodeURIComponent("chinese dumplings")}`}>Chinese Dumplings</Link></li>
            <li><Link href="/">Ethiopian</Link></li>
            <li><Link href="/">To Try</Link></li>
          </ul>
          <Link href="/create_new_list">Create New List</Link>
          <br></br>
        </div>
      </div>
    </Container>
  );
}

