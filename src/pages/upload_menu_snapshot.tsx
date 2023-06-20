import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Link from 'next/link';
import '../app/globals.css';
import '../app/uploads.css';
import FoodItemView from './food_item_view';

export default function UploadMenuSnapshot() {
  // const [images, setImages] = useState([]);
  const [matches, setMatches] = useState([]);
  const maxNumber = 1;
  const [displayedFoodItem, setDisplayedFoodItem] = useState({});
  const [displayError, setDisplayError] = useState('');

  const handleFoodItemOnClick = (foodItem: any) => () =>{
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
    <div className="upload_menu_snapshot">
      <div className='error'>
        {displayError}
      </div>
      <div className='results'>
        {matches.map((item, index) => (
          <li ><button onClick={handleFoodItemOnClick(item)}>{item.name_native} [{item.name_en}]</button></li>
        ))}
      </div>
      <div className='resultsView'>
        <FoodItemView food_item={displayedFoodItem}></FoodItemView>
      </div>
      <form onSubmit={handleSubmit} className="container mt-5 pt-5 pb-5" encType="multipart/form-data">
        <div className="form-inline justify-content-center mt-5">
          <label htmlFor="image" className="ml-sm-4 font-weight-bold mr-md-4">Image :  </label>
          <div className="input-group">
            <input type="file" id="image" name="file"
              accept="image/*" className="file-custom" />
            <br></br>
            <br></br>
            <label htmlFor="lang_list" className="ml-sm-4 font-weight-bold mr-md-4">Enter list of languages :  </label>
            <input type="text" name="lang_list" />
          </div>
        </div>

        <div className="input-group justify-content-center mt-4">
          <button type="submit" className="btn btn-md btn-primary">Upload,,,</button>
        </div>
      </form>
      <br></br>
      <br></br>
      <Link href="/">Home</Link>
    </div>
  );
}
