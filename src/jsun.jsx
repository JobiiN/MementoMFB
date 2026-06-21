import { Player } from '@lottiefiles/react-lottie-player'
import animationData from './assets/animation.json'


function jsun() {
    return (
        < section className="jsun-section">


            <div className="jsun-animation-wrap">
                <div className="jsun-title-overlay">
                    <h2 className='jsun-big-title'>Banking for, <span className='jsun-invertbigtitle'>Bigger Dreams.</span></h2>
                </div>

                <Player
                    autoplay
                    loop
                    src={animationData}
                    style={{
                        width: '100%',
                        height: 'auto',
                        aspectRatio: '2092 / 1230',
                        display: 'block'
                    }}
                />
            </div>
        </section>
    )
}

export default jsun
