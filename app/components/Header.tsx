// Link Tag
import Link from "next/link";
// stylesheet
import '../globals.css'

export default function Header() {
  return (
    <div className="header">

          <div className="logo">
            <h1>Hasnain <span> Portfolio</span></h1>
          </div>

          <div className="navlinks">
          <Link href={'./'} className="links">Home</Link>
          <Link href={'About_page'} className="links">About</Link>
          <Link href={'Skills_page'} className="links">Skills</Link>
          <Link href={'Contact_page'} className="links">Contact</Link>
          </div>
        </div>
  )
}
