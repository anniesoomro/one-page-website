function Header ()  {
    return (
      <header className='bg-gray-900 text-white py-4'>
        <div className='max-w-7xl mx-auto flex justify-between items-center px-4'>
          <h1 className='text-2xl font-bold'>The Flavor Ateliar</h1>
          <nav>
            <ul className='flex space-x-4'>
              <li><a href="#home" className='hover:text-yellow-500'>Home</a></li>
              <li><a href="#about" className='hover:text-yellow-500'>About</a></li>
              <li><a href="#menu" className='hover:text-yellow-500'>Menu</a></li>
              <li><a href="#contact" className='hover:text-yellow-500'>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;