"use client";

import Image from 'next/image';
import ContactForm from "@/components/contactform";
import React, { useState } from 'react';

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  function handleShowForm() {
    setShowForm(!showForm);

  };

  return (
    <div className='min-h-screen flex flex-col'>
      {/* Hero Section */}
      <section id="home" className='relative h-screen flex justify-center items-center' style={{ backgroundImage:"url('images/background-image.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' , backgroundRepeat:'no-repeat'}}>
        <div className='absolute inset-0 bg-black opacity-60'></div>
        <div className='text-center z-10 text-white'>
          <h1 className='text-6xl italic font-serif'>The Flavor Atelier</h1>
          <p className='text-xl mt-4'>A culinary journey like no other</p>
          <button  className='mt-6 px-8 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 hover:scale-105 transition-transform'>
            Explore Menu
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className='py-16 bg-gray-500 text-center'>
        <h2 className='text-4xl font-bold italic font-serif mb-4'>About Us</h2>
        <p className='max-w-2xl mx-auto text-black'>Welcome to The Flavor Atelier, where passion meets flavor. Our chefs create mouth-watering dishes using the finest ingredients to bring you a memorable dining experience.</p>
      </section>

      {/* Menu Section with Images */}
    
      <section id="menu" className="py-16 bg-gray-300 text-center">
        <h2 className="text-4xl font-bold italic font-serif mb-8">Our Signature Dishes</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-yellow-50 shadow-lg rounded-lg p-4">
            <Image src="/images/grilled-salmon-3.jpg" alt="grilled-salmon" width={250} height={250} className="rounded-lg transform transition duration-500 hover:scale-110 hover:rotate-3" />
            <h3 className="text-2xl font-semibold mt-4">Grilled Salmon</h3>
            <p className="text-gray-500">Freshly grilled salmon served with a side of vegetables.</p>
            <p className="text-lg font-bold">$18.99</p>
          </div>
          <div className="bg-yellow-50 shadow-lg rounded-lg p-4">
            <Image src="/images/R.jfif" alt="beef-wellington" width={250} height={250} className="rounded-lg transform transition duration-500 hover:scale-110 hover:rotate-3" />
            <h3 className="text-2xl font-semibold mt-4">Beef Wellington</h3>
            <p className="text-gray-500">Perfectly cooked beef wrapped in puff pastry.</p>
            <p className="text-lg font-bold">$24.99</p>
          </div>
          <div className="bg-yellow-50 shadow-lg rounded-lg p-6">
            <Image src="/images/OIP.jfif" alt="vegetarian-pasta" width={250} height={250} className="rounded-lg transform transition duration-500 hover:scale-110 hover:rotate-3" />
            <h3 className="text-2xl font-semibold mt-4">Vegetarian Pasta</h3>
            <p className="text-gray-500">Delicious pasta tossed with fresh vegetables and herbs.</p>
            <p className="text-lg font-bold">$14.99</p>
          </div>
          <div className="bg-yellow-50 shadow-lg rounded-lg p-6">
            <Image src="/images/cake.jfif" alt="chocolate cake" width={250} height={250} className="rounded-lg transform transition duration-500 hover:scale-110 hover:rotate-3" />
            <h3 className="text-2xl font-semibold mt-4">Chocolate Cake</h3>
            <p className="text-gray-500">Rich and moist chocolate cake topped with fresh cream.</p>
            <p className="text-lg font-bold">$9.99</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-slate-400 text-center">
        <h2 className="text-4xl font-bold italic font-serif mb-4">Contact Us</h2>
        <p className="text-gray-600">123  Flavor Atelier Lane, Food City</p>
        <p className="text-gray-600">Phone: (123) 456-7890</p>
        <button className="mt-6 px-8 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
        onClick={handleShowForm}>
        {showForm ? 'Hide Form': 'Contact'}
          
        </button>
        
        {/* Conditionally render the contact form */}
        {showForm && (
          <div className='mt-8 max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg'>
            <ContactForm />
          </div>
        )}

      </section>
    </div>
  );
}