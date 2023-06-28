import { Layout } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HeaderWrapper, MobileDrawer } from './style';




function HeaderComponent({
  showMobileSider,
  setShowMobileSider,
}: {
  showMobileSider: boolean;
  setShowMobileSider: any;
}) {
  const location = useRouter();
  const activePath = location.pathname
  const { Header } = Layout;

  const handleLinkClick = () => {
    setShowMobileSider(false);
  };
  return (
    
      <HeaderWrapper>
        <Header className={'header activ'}>
          
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
          // closeIcon={}
          open={showMobileSider}
          title={''}
        >
         
        </MobileDrawer>
      </HeaderWrapper>
   
  );
}

export default HeaderComponent;
