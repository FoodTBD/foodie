import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../app/css/globals.css';
import '../app/css/uploads.css';
import FoodItemView from '../app/components/food_item_view';


export default function UploadMenuSnapshot() {
  // const [images, setImages] = useState([]);
  const [matches, setMatches] = useState([]);
  const maxNumber = 1;
  const [displayedFoodItem, setDisplayedFoodItem] = useState({});
  const [displayError, setDisplayError] = useState('');

  const handleFoodItemOnClick = (foodItem: any) => () => {
    setDisplayedFoodItem(foodItem);
  }

  const handleSubmit = (event: { preventDefault: () => void; target: any; }) => {
    event.preventDefault();
    const data = new FormData(event.target);
    let promise = new Promise(function (resolve, reject) {
      const requestOptions = {
        method: 'POST',
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        //   'Accept': 'multipart/form-data'
        // },
        body: data
      };
      fetch('http://127.0.0.1:5000/get_food_matches_from_image', requestOptions)
        .then(response => response.json())
        .then(data => setMatches(data['matches']))
        .catch(error => {
          let errorStr: string = 'There was a problem with the Fetch operation: ' + error;
          setDisplayError(errorStr);
          console.error(errorStr);
        });

      console.log(matches);
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
        <div className="upload_menu_snapshot">
          <div className='error'>
            {displayError}
          </div>
          <h1>Search db using a menu snapshot</h1>
          <div className='results'>
            {matches.map((item, index) => (
              <li ><Popup trigger={<button>{item.name_native} [{item.name_en}]</button>} modal nested>
                <div ><FoodItemView food_item={item}></FoodItemView> </div>
              </Popup></li>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <label htmlFor="image">Image:  </label>
            <input type="file" id="image" name="file"
              accept="image/*" className="file-custom" />
            <br></br>
            <br></br>
            <label htmlFor="lang_list">Enter list of languages:  </label>
            <br></br>
            <input type="text" name="lang_list" />
            <br></br>
            <button type="submit" className="btn btn-md btn-primary">Upload</button>
          </form>
          <br></br>
          <br></br>
          <Link href="/">Home</Link>
        </div>
      </div>
    </Container>
  );
}
