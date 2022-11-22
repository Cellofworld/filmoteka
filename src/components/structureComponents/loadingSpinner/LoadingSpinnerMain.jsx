import { SpinnerCircular } from 'spinners-react';
import "./spinner.css"

function LoadingSpinnerMain() {
    return (
        <div className='main-spinner'>
            <SpinnerCircular 
            size={300} 
            thickness={137} 
            speed={100} 
            color="#21242e" />
        </div>
    )
}

export default LoadingSpinnerMain