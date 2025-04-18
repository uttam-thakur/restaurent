import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rolanda Restaurant - Fine Dining Experience',
  description: 'Welcome to Rolanda Restaurant, where culinary excellence meets elegant ambiance. Experience the finest cuisine in New York.',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-[#1c1812]/80 flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpeg"
            alt="Rolanda Restaurant"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="container relative z-10 text-white text-center">
          <h1 className="elegant-heading text-4xl md:text-6xl mb-6 tracking-wider">Culinary Excellence</h1>
          <p className="max-w-xl mx-auto mb-8 text-lg">Experience the finest cuisine in New York crafted with passion and precision</p>
          <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white">
            <Link href="/menu">View Our Menu</Link>
          </Button>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-[#fbf5f5]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="elegant-heading text-3xl mb-8">Our Story</h2>
            <p className="text-gray-700 mb-8">
              Rolanda offers a unique experience. Voluptate qui vero enim consequat ucimus veritatis ema.
              Wunt et ten etur nihil sint sunt et in pariatur. Sed quibusdam minus eumsciunt debitis.
            </p>
            <div className="flex justify-center">
              <Image
                src="/images/chef.png"
                alt="Chef Signature"
                width={200}
                height={80}
                className="h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white border-t border-gray-200">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex items-start space-x-4">
              <Image
                src="/images/testimonial1.png"
                alt="Testimonial"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <p className="text-gray-700 mb-2">
                  Commodo duis dolor proin luctus elit vehicula. Posuere leo venenatis mollis hac platea porta dis consequat ullamcorper.
                </p>
                <p className="text-amber-800 font-medium">— John Smith</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Image
                src="/images/testimonial1.png"
                alt="Testimonial"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <p className="text-gray-700 mb-2">
                  Quia aute perferendis in ipsa voluptatibus ea, nemo vetat culpa labore ex ipsam fugiat illo doloremque.
                </p>
                <p className="text-amber-800 font-medium">— Emily Johnson</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Image
                src="/images/testimonial1.png"
                alt="Testimonial"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <p className="text-gray-700 mb-2">
                  Pharetra dolor nullam maximus pretium faucibus integer vitae integer nostra magna faucet.
                </p>
                <p className="text-amber-800 font-medium">— Michael Clarke</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Now Section */}
      <section className="section-padding bg-[#fbf5f5]">
        <div className="container">
          <h2 className="elegant-heading text-3xl text-center mb-10">Order Now</h2>
          <p className="text-center text-gray-600 mb-10">Discover our specials served with fine recommendations</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
            <div className="relative overflow-hidden group">
              <Image
                src="/images/food1.jpg"
                alt="Food"
                width={300}
                height={300}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
                <h3 className="font-medium">BLACK OLIVE PIZZA</h3>
                <p className="text-amber-400">$27</p>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <Image
                src="/images/food2.jpg"
                alt="Food"
                width={300}
                height={300}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
                <h3 className="font-medium">CUCUMBER TOAST</h3>
                <p className="text-amber-400">$19</p>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <Image
                src="/images/food3.jpg"
                alt="Food"
                width={300}
                height={300}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
                <h3 className="font-medium">BERRY COCKTAIL</h3>
                <p className="text-amber-400">$15</p>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <Image
                src="/images/food1.jpg"
                alt="Food"
                width={300}
                height={300}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
                <h3 className="font-medium">MARGHERITA PIZZA</h3>
                <p className="text-amber-400">$24</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interior Section */}
      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Image
            src="/images/interior.jpg"
            alt="Restaurant Interior"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
          <div className="flex items-center p-12 md:p-20">
            <div>
              <h2 className="elegant-heading text-3xl mb-6">Warm Interior</h2>
              <p className="text-gray-700 mb-8">
                Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras vel volutpat ipsum.
                Suspendisse pulvinar sem accumsan dignissim rhoncus. Praesent sed posuere magna.
                Duis volutpat arcu ut ex sem dignissim luctus.
              </p>
              <Button variant="outline" className="border-black hover:bg-black hover:text-white transition-all uppercase">
                <Link href="/reservations">Book a Table</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-black grid grid-cols-2 md:grid-cols-5">
        <Image src="/images/gallery1.jpg" alt="Gallery" width={300} height={300} className="w-full h-60 object-cover" />
        <Image src="/images/gallery2.jpg" alt="Gallery" width={300} height={300} className="w-full h-60 object-cover" />
        <Image src="/images/gallery3.jpg" alt="Gallery" width={300} height={300} className="w-full h-60 object-cover" />
        <Image src="/images/gallery4.jpg" alt="Gallery" width={300} height={300} className="w-full h-60 object-cover" />
        <Image src="/images/gallery5.jpg" alt="Gallery" width={300} height={300} className="w-full h-60 object-cover" />
      </section>

      {/* Visit Us Section */}
      <section className="section-padding bg-[#fbf5f5] text-center">
        <div className="container">
          <h2 className="elegant-heading text-3xl mb-6">Visit Us Now</h2>
          <p className="mb-2">Pasta Drive Righcita, 12</p>
          <p className="mb-8">T7G14 – Torchef, Italy</p>
          <div className="flex justify-center">
            <Image
              src="/images/chef.png"
              alt="Chef Signature"
              width={150}
              height={60}
              className="h-auto opacity-80"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
