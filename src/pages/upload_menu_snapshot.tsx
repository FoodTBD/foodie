import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Popup from 'reactjs-popup';
import FoodItemView from '../app/components/food_item_view';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'reactjs-popup/dist/index.css';



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
          <Link href="/">Home</Link>
          <h1>Search db using a menu snapshot</h1>
          <div className='results'>
            {matches.map((item, index) => (
              <li ><Popup trigger={<button>{item.name_native} [{item.name_en}]</button>} modal nested>
                <div ><FoodItemView food_item={item}></FoodItemView> </div>
              </Popup></li>
            ))}
            <br></br>
          </div>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <label htmlFor="image"><b>Step 1: &nbsp;</b></label>Choose image file
            <input type="file" id="image" name="file"
              accept="image/*" className="file-custom" />
            <br></br>
            <br></br>
            <label htmlFor="lang_list"><b>Step 2: &nbsp;</b></label>
            Enter Language Codes (use comma-separated for multiple languages e.g. en,th for English and Thai,
            please see language codes below)
            <br></br>
            <input type="text" name="lang_list" />
            <br></br>
            <button type="submit" className="btn btn-md btn-primary">Upload</button>
          </form>
          <br></br>

          <h3>Note:</h3>
          <p>File extension support: png, jpg, tiff. <br></br>
            File size limit: 2 Mb <br></br>
            Image dimension limit: 1500 pixel <br></br>
            Possible Language Code Combination: Languages sharing the same written script (e.g. latin)
            can be used together. English can be used with any language.</p>
          <br></br>

          <div>
            <h3>Supported Languages</h3>
            <Table striped bordered hover size="sm">
              <thead><tr><th>Language</th><th>Code Name</th></tr>
              </thead>
              <tbody>
                <tr><td>Abaza</td><td>abq</td></tr>

                <tr><td>Adyghe</td><td>ady</td></tr>

                <tr><td>Afrikaans</td><td>af</td></tr>

                <tr><td>Angika</td><td>ang</td></tr>

                <tr><td>Arabic</td><td>ar</td></tr>

                <tr><td>Assamese</td><td>as</td></tr>

                <tr><td>Avar</td><td>ava</td></tr>

                <tr><td>Azerbaijani</td><td>az</td></tr>

                <tr><td>Belarusian</td><td>be</td></tr>

                <tr><td>Bulgarian</td><td>bg</td></tr>

                <tr><td>Bihari</td><td>bh</td></tr>

                <tr><td>Bhojpuri</td><td>bho</td></tr>

                <tr><td>Bengali</td><td>bn</td></tr>

                <tr><td>Bosnian</td><td>bs</td></tr>

                <tr><td>Simplified Chinese</td><td>ch_sim</td></tr>

                <tr><td>Traditional Chinese</td><td>ch_tra</td></tr>

                <tr><td>Chechen</td><td>che</td></tr>

                <tr><td>Czech</td><td>cs</td></tr>

                <tr><td>Welsh</td><td>cy</td></tr>

                <tr><td>Danish</td><td>da</td></tr>

                <tr><td>Dargwa</td><td>dar</td></tr>

                <tr><td>German</td><td>de</td></tr>

                <tr><td>English</td><td>en</td></tr>

                <tr><td>Spanish</td><td>es</td></tr>

                <tr><td>Estonian</td><td>et</td></tr>

                <tr><td>Persian (Farsi)</td><td>fa</td></tr>

                <tr><td>French</td><td>fr</td></tr>

                <tr><td>Irish</td><td>ga</td></tr>

                <tr><td>Goan Konkani</td><td>gom</td></tr>

                <tr><td>Hindi</td><td>hi</td></tr>

                <tr><td>Croatian</td><td>hr</td></tr>

                <tr><td>Hungarian</td><td>hu</td></tr>

                <tr><td>Indonesian</td><td>id</td></tr>

                <tr><td>Ingush</td><td>inh</td></tr>

                <tr><td>Icelandic</td><td>is</td></tr>

                <tr><td>Italian</td><td>it</td></tr>

                <tr><td>Japanese</td><td>ja</td></tr>

                <tr><td>Kabardian</td><td>kbd</td></tr>

                <tr><td>Kannada</td><td>kn</td></tr>

                <tr><td>Korean</td><td>ko</td></tr>

                <tr><td>Kurdish</td><td>ku</td></tr>

                <tr><td>Latin</td><td>la</td></tr>

                <tr><td>Lak</td><td>lbe</td></tr>

                <tr><td>Lezghian</td><td>lez</td></tr>

                <tr><td>Lithuanian</td><td>lt</td></tr>

                <tr><td>Latvian</td><td>lv</td></tr>

                <tr><td>Magahi</td><td>mah</td></tr>

                <tr><td>Maithili</td><td>mai</td></tr>

                <tr><td>Maori</td><td>mi</td></tr>

                <tr><td>Mongolian</td><td>mn</td></tr>

                <tr><td>Marathi</td><td>mr</td></tr>

                <tr><td>Malay</td><td>ms</td></tr>

                <tr><td>Maltese</td><td>mt</td></tr>

                <tr><td>Nepali</td><td>ne</td></tr>

                <tr><td>Newari</td><td>new</td></tr>

                <tr><td>Dutch</td><td>nl</td></tr>

                <tr><td>Norwegian</td><td>no</td></tr>

                <tr><td>Occitan</td><td>oc</td></tr>

                <tr><td>Pali</td><td>pi</td></tr>

                <tr><td>Polish</td><td>pl</td></tr>

                <tr><td>Portuguese</td><td>pt</td></tr>

                <tr><td>Romanian</td><td>ro</td></tr>

                <tr><td>Russian</td><td>ru</td></tr>

                <tr><td>Serbian (cyrillic)</td><td>rs_cyrillic</td></tr>

                <tr><td>Serbian (latin)</td><td>rs_latin</td></tr>

                <tr><td>Nagpuri</td><td>sck</td></tr>

                <tr><td>Slovak</td><td>sk</td></tr>

                <tr><td>Slovenian</td><td>sl</td></tr>

                <tr><td>Albanian</td><td>sq</td></tr>

                <tr><td>Swedish</td><td>sv</td></tr>

                <tr><td>Swahili</td><td>sw</td></tr>

                <tr><td>Tamil</td><td>ta</td></tr>

                <tr><td>Tabassaran</td><td>tab</td></tr>

                <tr><td>Telugu</td><td>te</td></tr>

                <tr><td>Thai</td><td>th</td></tr>

                <tr><td>Tajik</td><td>tjk</td></tr>

                <tr><td>Tagalog</td><td>tl</td></tr>

                <tr><td>Turkish</td><td>tr</td></tr>

                <tr><td>Uyghur</td><td>ug</td></tr>

                <tr><td>Ukranian</td><td>uk</td></tr>

                <tr><td>Urdu</td><td>ur</td></tr>

                <tr><td>Uzbek</td><td>uz</td></tr>

                <tr><td>Vietnamese</td><td>vi</td></tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </Container>
  );
}
