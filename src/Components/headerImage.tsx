import headerImageKim from '../Images/headerImageKim.jpg'
import NavigationBar from './navigationBar';

const HeaderImage = () => {
    return (
        <div style={{ backgroundImage: `url(${headerImageKim})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        opacity: 0.5,
        backgroundSize: 'cover'}}>
      <NavigationBar />
        <div className="container" style={{minHeight: '592px'}}>
            <div className="text-center justify-content-center align-self-center">
                
            </div>
        </div>
    </div>
    );
  }
  
  export default HeaderImage;