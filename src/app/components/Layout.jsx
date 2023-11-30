// components/Layout.jsx
import NavigationMenuBar from "./NavigationMenuBar";
// tailwind.config.js



const Layout = ({ children }) => {
  return (
    <div className='lg:flex lg:justify-between lg:items-center p-4'>
      <NavigationMenuBar />
      <main className='mt-8 lg:mt-0'>{children}</main>
    </div>
  );
};

export default Layout;
