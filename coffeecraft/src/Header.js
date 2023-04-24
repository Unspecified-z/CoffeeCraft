import { useState, useEffect } from "react";
import classNames from 'classnames';
import CoffeeCraft from './assets/images/MuficCoffee.png'; 

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.pageYOffset;
          setIsScrolled(scrollTop > lastScrollTop);
          setLastScrollTop(scrollTop);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, [lastScrollTop]);
  
    const headerClasses = classNames(
        "fixed",
        "top-0",
        "w-full",
        "z-50",
        "pt-0",
        {
          "translate-y-0 opacity-100": !isScrolled,
          "-translate-y-full opacity-0": isScrolled,
          "transition-all duration-800 ease-in-out": true,
        }
      );
  
  return (
    <div class="fixed top-0 w-full z-50 pt-0">
        <header className={headerClasses}>
             <header class="w-full text-cyan-300 bg-transparent border-transparent shadow-2xl body-font">
            <div class="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
    
                <nav class="flex flex-wrap items-center text-base lg:w-2/5 md:ml-auto">
                    <a href="#_" class="mr-5 font-medium hover:text-gray-900">Home</a>
                    <a href="#_" class="mr-5 font-medium hover:text-gray-900">Install</a>
                    <a href="#_" class="mr-5 font-medium hover:text-gray-900">Mods</a>
                    <a href="#_" class="mr-5 font-medium hover:text-gray-900">About</a>
                    <a href="https://discord.gg/hDrbKxBEHS" class="font-medium hover:text-gray-900">Discord</a>
                    
                </nav>
                <a className="flex items-center order-first mb-4 lg:order-none lg:w-1/5 title-font lg:items-center lg:justify-center md:mb-0">
      <img className="w-auto h-16 text-gray-900" src={CoffeeCraft} />
    </a>
                <div class="inline-flex items-center h-full ml-5 lg:w-2/5 lg:justify-end lg:ml-0">
                    <a href="#_" class="mr-5 font-medium hover:text-gray-900">Login</a>
                    <a href="#_"
                        class="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease">
                        Sign Up
                    </a>
                </div>
            </div>
        </header>
        </header>
        </div>
  );
}

export default Header;
