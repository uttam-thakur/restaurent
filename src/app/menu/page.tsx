import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu - Rolanda Restaurant',
  description: 'Explore our delicious menu featuring appetizers, main courses, and desserts crafted with the finest ingredients.',
};

export default function MenuPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <div className="relative h-[40vh]">
        <Image
          src="/images/menu-item1.jpg"
          alt="Menu"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="elegant-heading text-white text-5xl">Appetizers</h1>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="bg-black text-white py-6">
        <div className="container overflow-x-auto">
          <div className="flex space-x-8 min-w-max px-4">
            <a href="#appetizers" className="text-sm uppercase tracking-wider hover:text-amber-500 transition whitespace-nowrap">Appetizers</a>
            <a href="#main-courses" className="text-sm uppercase tracking-wider hover:text-amber-500 transition whitespace-nowrap">Main Courses</a>
            <a href="#sushi-rolls" className="text-sm uppercase tracking-wider hover:text-amber-500 transition whitespace-nowrap">Sushi Rolls</a>
            <a href="#soups" className="text-sm uppercase tracking-wider hover:text-amber-500 transition whitespace-nowrap">Soups</a>
            <a href="#fresh-ingredients" className="text-sm uppercase tracking-wider hover:text-amber-500 transition whitespace-nowrap">Fresh Ingredients</a>
            <a href="#pasta-food" className="text-sm uppercase tracking-wider hover:text-amber-500 transition whitespace-nowrap">Pasta Food</a>
            <a href="#desserts" className="text-sm uppercase tracking-wider hover:text-amber-500 transition whitespace-nowrap">Desserts</a>
            <a href="#more" className="text-sm uppercase tracking-wider hover:text-amber-500 transition whitespace-nowrap">More</a>
          </div>
        </div>
      </div>

      {/* Appetizers Section */}
      <section id="appetizers" className="py-20 bg-black text-white">
        <div className="container">
          <h2 className="elegant-heading text-4xl mb-16 text-center text-white">Appetizers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl mb-2 uppercase">Bruschetta Trio</h3>
                <p className="text-gray-400">Toasted Baguette Slices Topped With A Mix Of Tomato Basil.</p>
              </div>
              <div className="text-xl ml-6 text-right">$22</div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl mb-2 uppercase">Homemade Pelmeni</h3>
                <p className="text-gray-400">Pelmeni, Ground Beef With Melted Butter Or Smetana.</p>
              </div>
              <div className="text-xl ml-6 text-right">$34</div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl mb-2 uppercase">Spicy Tuna Tartare</h3>
                <p className="text-gray-400">Fresh Tuna, Avocado, And Mango With A Touch Of Sesame.</p>
              </div>
              <div className="text-xl ml-6 text-right">$27</div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl mb-2 uppercase">Acai Bowl</h3>
                <p className="text-gray-400">Pure Unsweetened Acai Puree, Toppings, Yogurt.</p>
              </div>
              <div className="text-xl ml-6 text-right">$22</div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl mb-2 uppercase">Caesar Salad</h3>
                <p className="text-gray-400">Crisp Romaine Lettuce, Parmesan Cheese, Croutons, Dressing.</p>
              </div>
              <div className="text-xl ml-6 text-right">$34</div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl mb-2 uppercase">Sweet Heat Salad</h3>
                <p className="text-gray-400">Crisp, Parmesan, Alba Truffle, Mixed Greens.</p>
              </div>
              <div className="text-xl ml-6 text-right">$27</div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Image Section */}
      <div className="relative h-[60vh]">
        <Image
          src="/images/food2.jpg"
          alt="Food"
          fill
          className="object-cover"
        />
      </div>

      {/* Main Courses Section */}
      <section id="main-courses" className="py-20 bg-black text-white">
        <div className="container">
          <h2 className="elegant-heading text-4xl mb-16 text-center text-white">Main Courses</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl mb-2 uppercase">Gourmet Cheeseburger</h3>
                <p className="text-gray-400">Beef Patty, Cheddar Cheese, Lettuce, Pickles, Burger Sauce.</p>
              </div>
              <div className="text-xl ml-6 text-right">$52</div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl mb-2 uppercase">Seared Salmon</h3>
                <p className="text-gray-400">Wild-caught Salmon Fillet With A Honey Soy Glaze, Jasmine Rice.</p>
              </div>
              <div className="text-xl ml-6 text-right">$64</div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl mb-2 uppercase">Lemon Herb Chicken</h3>
                <p className="text-gray-400">Chicken Marinated In Lemon And Herbs, Mashed Potatoes.</p>
              </div>
              <div className="text-xl ml-6 text-right">$47</div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl mb-2 uppercase">Teriyaki Burger</h3>
                <p className="text-gray-400">Angus beef patty, Cheddar cheese, Lettuce, Tomato.</p>
              </div>
              <div className="text-xl ml-6 text-right">$50</div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl mb-2 uppercase">Vegetarian Lasagna</h3>
                <p className="text-gray-400">Fresh Pasta With Ricotta, Spinach, Marinara Sauce, Mozzarella.</p>
              </div>
              <div className="text-xl ml-6 text-right">$43</div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl mb-2 uppercase">Black Squid Ink Risotto</h3>
                <p className="text-gray-400">Bountiful Squid, Press Of Fish Stock, Heated Fine Sea Salt.</p>
              </div>
              <div className="text-xl ml-6 text-right">$75</div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Image Section */}
      <div className="relative h-[60vh]">
        <Image
          src="/images/food3.jpg"
          alt="Food"
          fill
          className="object-cover"
        />
      </div>

      {/* Gallery */}
      <section className="bg-black grid grid-cols-2 md:grid-cols-5">
        <Image src="/images/gallery1.jpg" alt="Gallery" width={300} height={300} className="w-full h-60 object-cover" />
        <Image src="/images/gallery2.jpg" alt="Gallery" width={300} height={300} className="w-full h-60 object-cover" />
        <Image src="/images/gallery3.jpg" alt="Gallery" width={300} height={300} className="w-full h-60 object-cover" />
        <Image src="/images/gallery4.jpg" alt="Gallery" width={300} height={300} className="w-full h-60 object-cover" />
        <Image src="/images/gallery5.jpg" alt="Gallery" width={300} height={300} className="w-full h-60 object-cover" />
      </section>
    </div>
  );
}
