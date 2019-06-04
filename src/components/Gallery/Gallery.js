import React from 'react';
import PropTypes from 'prop-types';
import GalleryItem from '../GalleryItem/GalleryItem';
import css from './Gallery.module.css';

const Gallery = ({ items, onOpenModal }) => (
  <ul className={css.gallery}>
    {items.map(item => (
      <li key={item.id} className={css.galleryItem}>
        <GalleryItem {...item} onOpen={() => onOpenModal(item.id)} />
      </li>
    ))}
  </ul>
);

Gallery.propTypes = {
  items: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func,
};

export default Gallery;
