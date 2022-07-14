import headerImageKim from '../Images/headerImageKim.jpg'
import HeaderText from './HeaderText';
import NavigationBar from './navigationBar';

const HeaderImage = () => {
    return (
        <div className='photo-header mb-5' style={{ backgroundImage: `url(${headerImageKim})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        opacity: 0.5,
        backgroundSize: 'cover'}}>
      <NavigationBar />
      <HeaderText/>
        <div className="container" style={{minHeight: '592px'}}>
            <div className="text-center justify-content-center align-self-center">
                
            </div>
        </div>
    </div>
    );
  }
  
  export default HeaderImage;