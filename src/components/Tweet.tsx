import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import './Tweet.css'

interface TweetProps{
  content: string
}

export function Tweet(props: TweetProps)  {
  

  return (
    <div className="tweet">
    <a href="#" className='tweet'>
      <img src="https://github.com/caruso013.png" alt="Pedro Domingos" />

      <div className='tweet-content'>
        <div className="tweet-content-header">
          <strong>Caruso</strong>
          <span>@caruso013</span>
        </div>
        <p> {props.content} </p>
        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>
          <button type="button">
            <ArrowsClockwise  />
            20
          </button>
          <button type="button">
            <Heart  />
            20
          </button>
        </div>

      </div>
    </a>
    </div>
  )
}