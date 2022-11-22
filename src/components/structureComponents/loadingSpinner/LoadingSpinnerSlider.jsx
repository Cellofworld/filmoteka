import { SpinnerDotted } from 'spinners-react';

function LoadingSpinnerSlider() {
    return (
        <div className='spinner-slider'>
            <SpinnerDotted 
            size={90} 
            thickness={137} 
            speed={100} 
            color="#21242e" />
        </div>
    )
}

export default LoadingSpinnerSlider