import officeM from './assets/office.png'
import shopM from './assets/shop.png'
import cbm from './assets/cbnlogo.png'
import ndi from './assets/ndicLogo_dark.png'
import healthM from './assets/health.jpg'

function Loans() {
    return (<>

    <br/>
    <br/>

        <div className='bento-grid'>

            <div className='loans-title-card'>
                <span className='little-title'>LOANS & SME FINANCE</span>
                <h2 className='big-title'>Working capital, <span className='invertbigtitle'> when it counts.</span></h2>
            </div>

            <div className='Salary-loan-card'>
                <h2 className='card-title'>Salary Loans</h2>
                <span>Quick financing for working professionals. Cover personal needs, emergencies or opportunities without the wait</span>
                <div className='card-img-wrap'><img src={officeM} /></div>
            </div>

            <div className='SME-loan-card'>
                <h2 className='card-title'>SME Loans</h2>
                <span>Business growth support for small and medium enterprises. Get the capital you need to expand and scale.</span>
                <div className='card-img-wrap'><img src={shopM} /></div>
            </div>

            <div className='NDIC-card'>
                <div className='licensed-loan'>
                    <span>Licensed & Protected</span>
                    <img className="cbnLogo" src={cbm} />
                    <img className="ndicLogo" src={ndi} />
                </div>
            </div>

            <div className='SME-card'>
                <h2 className='card-title'>HealthCare Loans</h2>
                <span>Financing for clinics, pharmacies, and healthcare providers. Equip your facility, expand services, or manage cash flow.</span>
                <div className='card-img-wrap'><img src={healthM} /></div>
            </div>

        </div>
    </>)
}
export default Loans