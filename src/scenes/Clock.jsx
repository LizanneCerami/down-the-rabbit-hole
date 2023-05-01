
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';



export default function Clock() {

  const [ time, setTime ] = useState(new Date());
  const updateTime = () => {
    setTime(new Date())
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime();
    }, 1000);
  });

  const navigate = useNavigate()

  const formatTime = (t) => {
    return t.split(/[\s,:]/)
  }
  return(
  <>
    
    <button onClick={() => navigate('/')}>
      <Container className="clock-container"> 
      
        <ClockFace>
          <HoursMinutes>
            <Time>
              {formatTime(time.toLocaleTimeString())[0]}
            </Time>

            <Time>
              {formatTime(time.toLocaleTimeString())[1]}
            </Time>
          </HoursMinutes>

        <Seconds>
            <div>
              {formatTime(time.toLocaleTimeString())[2]}
            </div>
        </Seconds>
    {/* 
            <Session>
              {formatTime(time.toLocaleTimeString())[3]}
            </Session> */}

        </ClockFace>
      </Container>
    </button>
</> 
  )
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: ;
  align-items: center;
  color: #ddd;
`;

const ClockFace = styled.div `
  display: flex;
  padding: 2.5rem;
  background: rgba(0,0,0,0.1);
  /* border-top: 1px solid #333; */
  // border-left: 1px solid #333;
  text-align: right;
  box-shadow: 20px 20px 50px rgba(0,0,0,0.3);
  // border-radius: 10px;
  min-width: 100px;
  border: 2px solid red;
`;

const HoursMinutes = styled.div`
  align-self: center;
  padding: 1rem;
`;

const Time = styled.div`
  font-size: 4rem;
  font-family: 'Dancing Script';
  color: rgba(91, 231, 169, 0.2);
`;

const Seconds = styled.div`
  font-size: 10rem;
  font-family: 'Dancing Script';
  color: rgba(91, 231, 169, 0.2);
`;

// const Session = styled.div`
//   font-size: 1.5rem;
//   align-self: center;
//   justify-content: center;
// `;