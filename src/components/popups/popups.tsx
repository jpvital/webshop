import styled from 'styled-components';
export const PopupBackground = styled.div`
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    heigth: 100%;
    overflow: auto;
    padding-top: 2rem;
    background-color: rbg(0,0,0);
    background-color: rgba(0,0,0,0.4);
`;

export const PopupContent = styled.div`
    background-color: #fefefe;
    margin: auto;
    border: 1px solid #888;
    border-radius: 0.5rem;
    width: 40rem;
`;

export const PopupSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
`;

export const PopupHeader = styled.div`
    align-items: center;
    border-bottom-width: 1px;
    display: flex;
    flex-direction: row;
    padding: 2rem;
`;