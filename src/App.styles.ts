import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    padding: 50px 0;
    @media (max-width: 800px) {
        margin: 0 20px;
    }
    @media (max-width: 769px) {
        flex-direction: column;
        margin: 0;
    }
`;
export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;

    @media (max-width: 769px) {
        margin-bottom: 50px;
        align-items: center;
    }    
`;
export const LogoLink = styled.a`
    display: block;
`;
export const InfoArea = styled.div`
    width: 100%;
    margin: 10px 0;

    @media (max-width: 769px) {
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
`;
export const GridArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 769px) {
        justify-content: center;
        margin: 0 20px;
    }
`;
export const Grid = styled.div`
    width: 430px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    perspective: 1000px;
    @media(max-width: 470px) {
        grid-template-columns: repeat(3, 1fr); 
    }
`;