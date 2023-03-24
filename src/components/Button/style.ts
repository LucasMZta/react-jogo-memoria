import styled from "styled-components";


export const Container = styled.div`
    width: 200px;
    height: 50px;
    display: flex;
    background-color: #1550FF;
    border-radius: 10px;
    cursor: pointer;
    opacity: 1;
    transition: all .3s ease;
    margin: 10px 0;

    &:hover {
        opacity: .8;
    }
`;
export const IconHover = styled.span`
    position: absolute;
    display: none;
    width: 120px;
    margin-top: 100px;
    background-color: rgba(0, 0, 0, .5);
    color: #FFF;
    padding: 5px;
    border-radius: 5px;
    transition: all .3s ease;
    opacity: 0;
`;
export const IconArea = styled.div`
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(255,255,255,.2);
    padding: 0 15px;
    position: relative;

    &:hover ${IconHover} {
        display: block;
        opacity: 1;
    }
`;
export const Icon = styled.img`
    height: 20px;
`;
export const Label = styled.div`
    height: inherit;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 0 20px;
`;