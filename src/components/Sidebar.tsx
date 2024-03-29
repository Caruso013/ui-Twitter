import twiiterLogo from '../assets/logo-twitter.svg'
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from 'phosphor-react'

import './Sidebar.css'

export function Sidebar(){
  return(
    <aside className="sidebar">
<img className='logo' src={twiiterLogo} alt="Logo" />

  <nav className='main-navigantion'>
    <a className='active' href="">
      <House weight='fill' />
      Home
      </a>
    <a href="">
      <Hash/>
      Explore
      </a>
    <a href="">
      <Bell/>
      Notifications
      </a>
    <a href="">
      <Envelope/>
      Messages
      </a>
    <a href="">
      <BookmarkSimple/>
      Bookmarks
      </a>
    <a href="">
      <FileText/>
      Lists
      </a>
    <a href="">
      <User/>
      Profile
      </a>
    <a href="">
      <DotsThreeCircle/>
      More
      </a>
  </nav>

<button className='new-tweet' type='button'>
  Tweet
  </button>
</aside>
  )
}
