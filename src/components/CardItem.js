import React from 'react';

function CardItem(props) {
  const isExternalLink = props.path.endsWith('.pdf') || props.path.startsWith('http');

  return (
    <li className='cards_item'>
      {isExternalLink ? (
        <a 
          className='cards_item_link' 
          href={props.path} 
          target='_blank' 
          rel='noopener noreferrer'
        >
          <figure className='cards_item_pic_wrap' data-category={props.label}>
            <img src={props.src} alt='Card Image' className='cards_item_img' />
          </figure>
          <div className='cards_item_info'>
            <h5 className='cards_item_text'>{props.text}</h5>
          </div>
        </a>
      ) : (
        <a className='cards_item_link' href={props.path}>
          <figure className='cards_item_pic_wrap' data-category={props.label}>
            <img src={props.src} alt='Card Image' className='cards_item_img' />
          </figure>
          <div className='cards_item_info'>
            <h5 className='cards_item_text'>{props.text}</h5>
          </div>
        </a>
      )}
    </li>
  );
}

export default CardItem;
