import Link from 'next/link'

export default function mainPage() {
    return(
        <div>
            <h1> Welcome to FoodTBD</h1>
            <h2>Search the db:</h2>
            <ul>
                <li><Link href="/upload_ocr_text">Input the EasyOCR results array</Link></li>
                <li><Link href="/upload_menu_snapshot">Upload a menu snapshot to search</Link></li>
                <li><a href="https://docs.google.com/spreadsheets/d/18rHSAq_OmQDYqke-SvkN08AFkBvKTgJRKpnP7u09raE/edit#gid=1831747662" target="_blank">Go To Eats Google Sheet</a></li>
            </ul>
        </div>
    )
}
