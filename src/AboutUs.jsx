import Core1 from './assets/integrity.png'
import Core2 from './assets/reliability.png'
import Core3 from './assets/growth.png'
import Core4 from './assets/customerF.png'
import Core5 from './assets/innovation.png'


function AboutUss() {

    return (
        <>
            <div id='AboutUs' />
            <div className='AboutSection'>
                <div className="WWa" data-aos="fade-up">
                    <span className="little-title">ABOUT US</span>
                    <h2 className="big-title">We help customers <span style={{color: '#F26A1F', fontStyle:'italic'}}>grow.</span></h2>
                    <p>At Memento Microfinance Bank, we combine technology, financial expertise and customer-focused service to provide accessible banking solutions for Nigerians.</p>
                    <br />
                    <p>Our goal is to support bigger dreams through secure, innovative and reliable financial services.</p>

                    <p>We are committed to promoting FINANCIAL INCLUSION & EMPOWERING communities through accessible & responsible banking.</p>
                </div>

            </div>

            <div className='WWa' data-aos="fade-up">
                <h2 className="big-title">A fintech-driven bank, built on trust.</h2>
                <p>Memento Microfinance Bank is a fintech-driven microfinance institution committed to delivering accessible and innovative banking services to individuals and businesses across Nigeria.</p>
                <p>We help our customers build finance stability & CREATE OPPORTUNITIES for growth.</p>
            </div>

            <div className="coreV" data-aos="fade-up">
                <div className="integrity" data-aos="fade-up" data-aos-delay="100">
                    <img src={Core1} />
                    <p>Integrity</p>
                </div>

                <div className="reliability" data-aos="fade-up" data-aos-delay="200">
                    <img src={Core2} />
                    <p>Reliability</p>
                </div>

                <div className="growth" data-aos="fade-up" data-aos-delay="300">
                    <img src={Core3} />
                    <p>Growth</p>
                </div>

                <div className="customerF" data-aos="fade-up" data-aos-delay="400">
                    <img src={Core4} />
                    <p>Customer Focus</p>
                </div>

                <div className="innovation" data-aos="fade-up" data-aos-delay="500">
                    <img src={Core5} />
                    <p>Innovation</p>
                </div>





            </div>



        </>
    );

}
export default AboutUss