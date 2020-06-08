import React from 'react';
import { PageContainer } from '../../components/generic/generic';

const iframe = '<iframe src="https://open.spotify.com/embed/playlist/0CGHQNSpq449yNbzkTnfyw" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
const getIframeMarkup = () => {
    return {__html: iframe}
}

export const Music = () => {
    return <PageContainer><div dangerouslySetInnerHTML={getIframeMarkup()} /></PageContainer>;
}