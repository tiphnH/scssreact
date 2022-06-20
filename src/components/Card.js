import React from 'react'
import '../components/Card.scss';

function Card({title, imageUrl, secondaryText, body, subtitle,action1}) {
  return (
    <div className='card-container'>
        <div className='image-container'>
            <img src={imageUrl} alt='chat'/>
        </div>
        <div className='card-content'>
            <div className='card-title'>
                <h2>{title}</h2>      
            </div>
              <div className='card-body'>
                <h3>{secondaryText}</h3>
                <p>{body}</p>
            </div>      
          </div> 
        <div className='subtitle'>
              <h3>{subtitle}</h3>
        </div>
        <div className='btn'>
            <button>
                <a>
                    item 1
                </a>
              </button>    
            <button>
                <a>
                    item 2
                </a>
              </button>      
            <button>
                <a>
                    item 3
                </a>
              </button>      
            <button>
                <a>
                    item 4
                </a>
            </button>        
        </div>   
        <div className='action1'>
          <h4>{action1}</h4>
        </div> 
    </div>
  )
}

export default Card;