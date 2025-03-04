import Nav from '../components/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Layout = () => {
    return (
      <div>
         <div className='h-16'>
            <Nav></Nav>
         </div>
         <div className='min-h-[calc(100vh-117px)]'>
         <Outlet></Outlet>
         </div>
        <Footer></Footer>
      </div>
    );
};

export default Layout;