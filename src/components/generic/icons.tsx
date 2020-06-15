import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faYoutubeSquare, faTwitterSquare,
    faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faTrashAlt, faPlus, faMinus, faShoppingCart, faWindowClose, faUser } from '@fortawesome/free-solid-svg-icons';

export const socialMediaIcons = {
    facebook: () => <FontAwesomeIcon icon={faFacebookSquare} />,
    youtube: () => <FontAwesomeIcon icon={faYoutubeSquare} />,
    twitter: () => <FontAwesomeIcon icon={faTwitterSquare} />,
    instagram: () => <FontAwesomeIcon icon={faInstagramSquare} />,
}

export const trashIcon = () => (
    <FontAwesomeIcon icon={faTrashAlt} />
);

export const cartIcon = () => (
    <FontAwesomeIcon icon={faShoppingCart} />
);

export const userIcon = () => (
    <FontAwesomeIcon icon={faUser} />
);

export const closeIcon = () => (
    <FontAwesomeIcon icon={faWindowClose} />
)

export const quantityIcons = {
    add: () => <FontAwesomeIcon icon={faPlus} />,
    subtract: () => <FontAwesomeIcon icon={faMinus} />,
};