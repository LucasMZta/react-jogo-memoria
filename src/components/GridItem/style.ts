import styled from "styled-components";

type ContainerProps = {
    showBg: boolean;
}
type IconProps = {
    opacity?: number;
}

export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.showBg === true ? '#1550FF' : '#E2E3E3'};
    height: 100px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transform: ${props => props.showBg === true ? 'rotateY(180deg)' : 'rotateY(00deg)'};
    transform-style: preserve-3d;
    transition: all .8s ease;
`;
export const Icon = styled.img<IconProps>`
    width: 40px;
    height: 40px;
    opacity: ${ props => props.opacity ? props.opacity : 1 };
`;