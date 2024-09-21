import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="h-20 w-full bg-customBlue flex items-center justify-between"> {/* Flex container with justify-between */}
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full px-4"> {/* Ensure space on both sides with px-4 */}
        {/* Logo */}
        <div>
          <h1 className="font-bold text-white" style={{ fontSize: '2rem' }}>SageNest</h1>
        </div>
  
        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row">
          <Link to="/Page3" className="mx-4 text-lg text-white font-medium">For Expert</Link>
          <Link to="/Page4" className="mx-4 text-lg text-white font-medium">For Learner</Link>
          <Link to="/" className="mx-4 text-lg text-white font-medium">Home</Link>
          <Link className="mx-4 text-lg text-white font-medium">Sign In</Link>
         <button className="px-4 bg-blue-500 hover:bg-blue-700 rounded-lg text-white">Signup</button>
        </div>
      </div>
    </div>
  );
  
  
};

export default Header;
// import { Disclosure } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import { Link } from 'react-router-dom';

// const navigation = [
//   { name: 'Home', href: '/' },
//   { name: 'About', href: '/about' },
//   { name: 'Services', href: '/services' },
//   { name: 'Contact', href: '/contact' },
// ];

// export default function Navbar() {
//   return (
//     <Disclosure as="nav" className="h-20 w-full py-6 bg-white shadow-md">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//             <div className="relative flex h-16 items-center justify-between">
              
//               {/* Links (on larger screens) */}
//               <div className="hidden sm:flex space-x-6">
//                 {navigation.map((item) => (
//                   <Link key={item.name} href={item.href}>
//                     <span className="text-gray-800 hover:text-gray-600 cursor-pointer">
//                       {item.name}
//                     </span>
//                   </Link>
//                 ))}
//               </div>

//               {/* Company Name */}
//               <div className="flex-shrink-0">
//                 <Link href="/">
//                   <span className="text-2xl font-bold text-gray-800">
//                     CompanyName
//                   </span>
//                 </Link>
//               </div>

//               {/* Mobile Menu Button */}
//               <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
//                 <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-600 focus:outline-none">
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//             </div>
//           </div>

//           {/* Mobile Menu Panel */}
//           <Disclosure.Panel className="sm:hidden">
//             <div className="space-y-1 px-2 pb-3 pt-2">
//               {navigation.map((item) => (
//                 <Disclosure.Button
//                   key={item.name}
//                   as="a"
//                   href={item.href}
//                   className="block rounded-md px-3 py-2 text-gray-800 hover:bg-gray-600 hover:text-white"
//                 >
//                   {item.name}
//                 </Disclosure.Button>
//               ))}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }
