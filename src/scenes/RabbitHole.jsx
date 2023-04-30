import { useNavigate } from "react-router-dom"

export default function RabbitHole() {

  const navigate = useNavigate();

  return(

  <>

    <button onClick={() => navigate('/Clock')} className="main"> 
    
    we are all mad here

    </button>

  </>
  )
}