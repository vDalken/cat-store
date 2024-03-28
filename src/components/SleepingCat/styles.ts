import styled, {keyframes} from 'styled-components'

export const Container = styled.div`
  height: 200px;
  width: 350px;
  position: relative;
  transform: scale(1.2);
`

export const Cat = styled.div`
  background-color: var(--cats-color);
  height: 65px;
  width: 80px;
  border-radius: 0 80px 80px 0;
  position: absolute;
  bottom: 60px;
  right: 50px;
`

export const Ear = styled.div`
  height: 15px;
  width: 15px;
  background-color: var(--cats-color);
  position: absolute;
  bottom: 64px;
  left: 8px;
  border-radius: 20px 0 0 0;
  box-shadow: 25px 0 var(--cats-color);
`;

export const Eye = styled.div`
  height: 7px;
  width: 10px;
  border: 2px solid #2c2c2c;
  position: absolute;
  top: 18px;
  left: 15px;
  box-sizing: content-box; 
  border-radius: 0 0 15px 15px;
  border-top: none;

  &:before {
    height: 7px;
    width: 10px;
    border: 2px solid #2c2c2c;
    position: absolute;
    content: "";
    left: 30px;
    border-radius: 0 0 15px 15px;
    border-top: none;
  }
`;

const mouthMoveAnimation = keyframes`
    50%{
        transform: scaleY(0.7);
    }
`;

export const Mouth = styled.div`
    background-color: #2c2c2c;
    height: 15px;
    width: 17px;
    position: absolute;
    border-radius: 0 0 5px 5px;
    top: 38px;
    left: 27px;
    animation: ${mouthMoveAnimation} 2s infinite;
    transform-origin: top;
`;

export const Nose = styled.div`
    background-color: #fff;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    position: absolute;
    top: 32px;
    left: 25px;
    box-shadow: 12px 0 #fff;

    &:before{
        content: "";
        width: 12px;
        height: 8px;
        position: absolute;
        background-color: #fff;
        left: 6px;
    }

    &:after{
        content: "";
        position: absolute;
        height: 0;
        width: 0;
        border-top: 8px solid #ef926b;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        bottom: 7px;
        left: 6px;
    }
`;

const SleepAnimation = keyframes`
    50%{
        transform: scale(0.9, 1.05);
    }
`;

export const Body = styled.div`
    background-color: var(--cats-color);
    height: 90px;
    width: 140px;
    position: absolute;
    right: 65px;
    bottom: 0;
    border-radius: 60px 60px 0 0;
    animation: ${SleepAnimation} 2s infinite;
    transform-origin: bottom right;

    &:before{
        content: "";
        position: absolute;
        background-color: #fff;
        height: 12px;
        width: 30px;
        border-radius: 6px;
        bottom: 0;
        left: 22px;
        box-shadow: 45px 0 #fff;
    }
`;

export const Tail = styled.div`
    background-color: var(--cats-color);
    height: 20px;
    width: 100px;
    position: absolute;
    right: 150px;
    bottom: 0;
    border-radius: 20px 0 0 20px;
`;

export const BubbleScaleAnimation = keyframes`
    50%{
        transform: scale(1.6);
    }

`;

export const Bubble = styled.div`
    height: 20px;
    width: 20px;
    background-color: rgba(255,255,255,0.4);
    position: absolute;
    left: 65px;
    top: 20px;
    border-radius: 50px 50px 50px 5px;
    animation: ${BubbleScaleAnimation} 2s infinite;
`;

export const ShadowAnimation = keyframes`
    50%{
        transform: scaleX(0.7);
    }
`;

export const Shadow = styled.div`
    height: 10px;
    width: 240px;
    background-color: rgba(0,0,0,0.2);
    border-radius: 10px;
    position: absolute;
    bottom: 52px;
    left: 70px;
    animation: ${ShadowAnimation} 2s infinite ;
`;

