import Link from 'next/link'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import '../../app/css/globals.css';


export default function TaggedPhotoView(props: { food_item: any; }) {
    const foodItem = props.food_item;
    let photo_url_1 = "https://www.mexicoinmykitchen.com/wp-content/uploads/2009/02/Mole-Poblano-recipe-2-360x361.jpg";
    return (
        <Container>
            <div className='taggedPhotoView'>
                <h1>Mole Poblano</h1>
                SFFoodiePerson <br></br>
                101 Likes<br></br>
                <Link href="/">Save To List</Link>
                <br></br><br></br>
                <div className="row">
                    <div className="col col-md-4">
                        {foodItem.image_url ? <div><img src={photo_url_1} style={{ width: 300 }}></img><br></br><br></br></div> : ''}
                    </div>
                    <div className="col-sm-3">
                        <b>Location</b><br></br>
                        Some Restaurant, San Francisco, CA<br></br>
                        <b>Description</b><br></br>
                        Mole Chicken. Restaurant House special.<br></br>
                        <b>Date Added</b><br></br>
                        November 3, 2023<br></br>
                        <b>How To Eat</b><br></br>
                        Eat with your hands using the house made tortillas<br></br>
                        <b>Notes</b><br></br>
                        Not Vegan<br></br>
                        <b>Flavor</b><br></br>
                        Savory, Chocolate<br></br>
                        <b>Texture</b><br></br>
                        Gritty <br></br>
                        <b>Tags</b><br></br>
                        #mole, #molepoblano, #mexican, #chicken
                    </div>
                </div>
            </div>
        </Container>
    )
}
