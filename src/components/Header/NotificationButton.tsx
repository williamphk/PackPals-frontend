// import React, { useState, useRef, useEffect } from "react";

// // import MenuModal from "../common/MenuModal";

// const NotificationButton: React.FC = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   // Reference the profile menu DOM element.
//   const menuRef = useRef(null);

//   const handleClickOutside = (event) => {
//     // If the menu is mounted in the DOM and the clicked element is not one of the menu items
//     if (menuRef.current && !menuRef.current.contains(event.target)) {
//       setMenuOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("click", handleClickOutside);
//     return () => {
//       // When the Navbar component is unmounted, the event listener is removed
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   const toggleProfileMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   const menuItems = [];

//   return (
//     <div className="relative flex justify-end self-center">
//       <button onClick={toggleProfileMenu} ref={menuRef}>
//         Notification
//       </button>

//       {isMenuOpen && <MenuModal menuItems={menuItems} />}
//     </div>
//   );
// };

// export default NotificationButton;
