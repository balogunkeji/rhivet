import { Layout } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import { HeaderWrapper, MobileDrawer } from './style';
import  FooterLogo  from '../../../../public/image/Dark.svg';
import { BiMenuAltRight, BiLogOutCircle as LogOut } from "react-icons/bi";




function HeaderComponent({
  showMobileSider,
  setShowMobileSider,
  className,
}: {
  showMobileSider: boolean;
  setShowMobileSider: any;
  className?: string
}) {
  const { Header } = Layout;

  const handleLinkClick = () => {
    setShowMobileSider(false);
  };
  return (
    
      <HeaderWrapper>
        <Header className={'header activ'}>
          <nav>
          <Link href={'/'}>
                <Image src={FooterLogo} alt='logo' />
              </Link>            
              <div className='links'>
              <Link href='/about-us' className={className}>About</Link>
              <Link href='/services' className={className}>Services</Link>
              <Link href='/contact-us' className={className}>Contact us</Link>
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
            <Link href={'/about-us'} onClick={handleLinkClick}>About</Link>
              <Link href={'/services'} onClick={handleLinkClick}>Services</Link>
              <Link href={'/contact-us'} onClick={handleLinkClick}>Contact Us</Link>
            </div>
        </MobileDrawer>
      </HeaderWrapper>
   
  );
}

export default HeaderComponent;
