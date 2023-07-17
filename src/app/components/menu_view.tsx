import Link from 'next/link'
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import '../app/globals.css';


export default function MenuView(props) {
    const menu = props.menu;
    return(
        <div className='MenuView'>
        <b>{menu.name} </b> 
        <br></br><br></br>
        {menu.street_address ? <div> {menu.street_address}<br></br><br></br></div> : ''}
        {menu.city ? <div> {menu.city}<br></br><br></br></div> : ''}
        {menu.phone_number ? <div><b>Phone Number:</b> {menu.phone_number}<br></br><br></br></div> : ''}
        <b>Geo Region:</b> {foodItem['Geo Region']}
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
