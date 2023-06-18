import Link from 'next/link'
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import '../app/globals.css';


export default function FoodItemView(props) {
    const foodItem = props.food_item;
    return(
        <div className='foodItemView'>
        <b>Native Name:</b> {foodItem.name_native} 
        <br></br><br></br>
        {foodItem.name_en ? <div><b>Name (English):</b> {foodItem.name_en}<br></br><br></br></div> : ''}
        {foodItem.alt_names ? <div><b>Alt Names:</b> {foodItem.alt_names}<br></br><br></br></div> : ''}
        <b>Geo Region:</b> {foodItem['Geo Region']}
        <br></br><br></br>
        <b>Summary:</b> {foodItem.summary_en}
        <br></br><br></br>
        {foodItem.wikipedia_url_en ? <div><a href={foodItem.wikipedia_url_en}>{foodItem.wikipedia_url_en}</a><br></br><br></br></div> : ''}
        {foodItem.image_url ? <div><img src={foodItem.image_url} style={{ width: 200}}></img><br></br><br></br></div> : ''}
        {foodItem.how_to_eat_en ? <div><b>How To Eat:</b> {foodItem.how_to_eat_en}<br></br><br></br></div> : ''}
        {foodItem.season ? <div><b>Season:</b> {foodItem.season}<br></br><br></br></div> : ''}
        {foodItem.Notes ? <div><b>Notes:</b> {foodItem.Notes}<br></br><br></br></div> : ''}
      </div>
    )
}
