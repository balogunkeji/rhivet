import { Layout } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import { HeaderWrapper, MobileDrawer } from './style';
import  FooterLogo  from '../../../../public/image/Dark.svg';
import { BiMenuAltRight, BiLogOutCircle as LogOut } from "react-icons/bi";
import { useRouter } from 'next/router';




function HeaderComponent({
  showMobileSider,
  setShowMobileSider,
 
}: {
  showMobileSider: boolean;
  setShowMobileSider: any;
  
}) {
  const { Header } = Layout;
  const location = useRouter();
  const activePath = location.pathname

  const handleLinkClick = () => {
    setShowMobileSider(false);
  };
  return (
    
      <HeaderWrapper>
        <Header className={'header activ'}>
          <nav>
          <Link href={'/'} className={activePath === '/' ? ' active' : ''}>
                <Image src={FooterLogo} alt='logo' />
              </Link>            
              <div className='links'>
              <Link href='/about-us' className={activePath === '/about-us' ? ' active' : ''}>About</Link>
              <Link href='/services' className={activePath === '/services' ? ' active' : ''}>Services</Link>
              <Link href='/contact-us' className={activePath === '/contact-us' ? ' active' : ''}>Contact us</Link>
            </div>
            <div className="menuIcon">
              <BiMenuAltRight className='menuIcon'
                onClick={() => setShowMobileSider(!showMobileSider)} />
            </div>
          </nav>
        </Header>

        {/* mobile */}

        <MobileDrawer
          showMobileSider={showMobileSider}
          setShowMobileSider={setShowMobileSider}
          placement={'right'}
          closable={true}
          onClose={() => {
            setShowMobileSider(!showMobileSider);
          }}
          closeIcon={<LogOut style={{ fontSize: '36px', color: '#fff' }} />}
          open={showMobileSider}
          title={''}
        >
         <div className='logo' onClick={handleLinkClick}>
              <Link href={'/'} onClick={handleLinkClick}>
                <Image src={FooterLogo} alt='logo' />
              </Link>
            </div>

            <div className='menu'>
            <Link href={'/about-us'} className={activePath === '/about-us' ? ' active' : ''} onClick={handleLinkClick}>About</Link>
              <Link href={'/services'} onClick={handleLinkClick} className={activePath === '/services' ? ' active' : ''}>Services</Link>
              <Link href={'/contact-us'} onClick={handleLinkClick} className={activePath === '/contact-us' ? ' active' : ''}>Contact Us</Link>
            </div>
        </MobileDrawer>
      </HeaderWrapper>
   
  );
}

export default HeaderComponent;
