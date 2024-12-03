import React from 'react';
import { Link } from 'react-router-dom';

function AboutCardItem(props) {
  const isCertifications = props.isCertifications || false; // Default to false for non-certification cards

  return (
    <li className={`cards_item ${props.customClass || ''}`}>
      {isCertifications ? (
        // Certification cards are clickable
        props.pdfLink ? (
          <a
            href={props.pdfLink}
            target="_blank" // Opens the PDF in a new tab
            rel="noopener noreferrer" // Improves security for external links
            className="cards_item_link"
          >
            <figure
              className={`cards_item_pic_wrap ${props.customClass || ''}`}
              data-category={props.label}
            >
              <img
                src={props.src}
                alt="Card Item"
                className="abt_cards_item_img"
              />
            </figure>
            {props.text && (
              <div className="cards_item_info">
                <h5 className="cards_item_text">{props.text}</h5>
              </div>
            )}
          </a>
        ) : (
          <Link className="cards_item_link" to={props.path}>
            <figure
              className={`cards_item_pic_wrap ${props.customClass || ''}`}
              data-category={props.label}
            >
              <img
                src={props.src}
                alt="Card Item"
                className="abt_cards_item_img"
              />
            </figure>
            {props.text && (
              <div className="cards_item_info">
                <h5 className="cards_item_text">{props.text}</h5>
              </div>
            )}
          </Link>
        )
      ) : (
        // Non-certification cards are non-clickable
        <div className="cards_item_link non-clickable">
          <figure
            className={`cards_item_pic_wrap ${props.customClass || ''}`}
            data-category={props.label}
          >
            <img
              src={props.src}
              alt="Card Item"
              className="abt_cards_item_img"
            />
          </figure>
          {props.text && (
            <div className="cards_item_info">
              <h5 className="cards_item_text">{props.text}</h5>
            </div>
          )}
        </div>
      )}
    </li>
  );
}

export default AboutCardItem;
