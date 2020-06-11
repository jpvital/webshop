import styled from 'styled-components';

export const CartPopupArea = styled.div`
    z-index: 50;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    align-items: center;
`;

export const CartPopupRow = styled.div`
    width: 40rem;
    position: relative;
    max-width: 48rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
`;

export const CartPopup = styled.div`
    width: 100%;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    position: relative;
    outline: 0;
    flex-direction: column;
    display: flex;
    border-width: 0;
    border-radius: 0.5rem;
    --bg-opacity: 1;
    background-color: rgba(255, 255, 255, var(--bg-opacity));
`;

export const CartHeader = styled.div`
    padding: 1.25rem;
    justify-content: space-between;
    align-items: flex-start;
    display: flex;
    border-bottom-width: 1px;
    border-style: solid;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    --border-opacity: 1;
    border-color: #e2e8f0;
    border-color: rgba(226, 232, 240, var(--border-opacity));
`;

export const CartBody = styled.div`
    --text-opacity: 1;
    color: rgba(113, 128, 150, var(--text-opacity));
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    line-height: 1.625;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
`;

export const CartItemImage = styled.div`
    display: flex;
    padding-right: 2rem;
`;

export const CartItem = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 1.2rem;
`;

export const CartItemDescription = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

export const CartItemQuantityCounter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const CartItemPrice = styled.div`
    font-weight: 500;
    display: flex;
    width: 1rem;
    flex-direction: column;
    align-items: flex-end;
`;

export const CartTotal = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const CartFooter = styled.div`
    padding: 1.5rem;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    border-top-width: 1px;
    border-style: solid;
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    --border-opacity: 1;
    border-color: rgba(226, 232, 240, var(--border-opacity));
`