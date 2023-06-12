import Link from 'next/link'

export default function mainPage() {
    return(
        <div>
            <h1> Wellcome to FoodTBD</h1>
            <h2>Search the db:</h2>
            <ul>
                <li><Link href="/upload_ocr_text">Input the EasyOCR results array</Link></li>
                <li><Link href="/upload_menu_snapshot">Upload a menu snapshot to search</Link></li>
            </ul>
        </div>
    )
}
