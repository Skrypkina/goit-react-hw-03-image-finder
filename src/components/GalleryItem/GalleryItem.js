import React from 'react';
import PropTypes from 'prop-types';
import css from './GalleryItem.module.css';

const GalleryItem = ({
  webformatURL = '',
  likes = 0,
  views = 0,
  comments = 0,
  downloads = 0,
  tags = '',
  onOpen,
}) => (
  <div className={css.galleryItem}>
    <img src={webformatURL} alt={tags} className={css.galleryItemImg} />

    <div className={css.stats}>
      <p className={css.statsItem}>
        <i className="material-icons">thumb_up</i>
        {likes}
      </p>
      <p className={css.statsItem}>
        <i className="material-icons">visibility</i>
        {views}
      </p>
      <p className={css.statsItem}>
        <i className="material-icons">comment</i>
        {comments}
      </p>
      <p className={css.statsItem}>
        <i className="material-icons">cloud_download</i>
        {downloads}
      </p>
      <button type="button" className={css.fullscreenButton} onClick={onOpen}>
        <i className="material-icons">zoom_out_map</i>
      </button>
    </div>
  </div>
);

GalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  likes: PropTypes.number,
  views: PropTypes.number,
  comments: PropTypes.number,
  downloads: PropTypes.number,
  tags: PropTypes.string,
  onOpen: PropTypes.func,
  largeImageURL: PropTypes.string,
};
export default GalleryItem;
