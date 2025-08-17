"use client";

import { useState } from "react";
import { motion } from "framer-motion";
// import { button } from "./components/ui/button";
const exampleImage = "/images/kucing.jpg";

export default function App() {
  const [currentPage, setCurrentPage] = useState("landing");

  const renderLandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="mb-8">
          <div className="relative">
            <div className="rounded-full overflow-hidden w-64 h-64 mx-auto border-4 border-white shadow-lg bg-white">
              <img
                src={exampleImage}
                alt="Mascot Perusahaan"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Static floating elements - no animation */}
            <div className="absolute -top-4 -right-4 text-4xl opacity-70">
              💕
            </div>
            <div className="absolute -top-2 -left-6 text-3xl opacity-80">
              💖
            </div>
            <div className="absolute top-8 -right-8 text-2xl opacity-60">
              ✨
            </div>
          </div>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="space-y-6"
        >
          <motion.h1
            animate={{
              scale: [1, 1.05, 1],
              color: ["#ec4899", "#f97316", "#ec4899"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-6xl font-bold text-pink-600 drop-shadow-lg"
          >
            🌸 Halaman Pink 🌸
          </motion.h1>

          <motion.p
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-2xl text-pink-700 font-medium drop-shadow-md"
          >
            Hello! 🎀
          </motion.p>

          <button
            onClick={() => setCurrentPage("company")}
            className="mt-8 bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Click Me 🚀
          </button>
        </motion.div>

        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-8 text-4xl"
        >
          🐾 🌺 🐾
        </motion.div>
      </div>

      {/* Background floating elements */}
      <motion.div
        animate={{
          y: [-100, 100, -100],
          x: [-50, 50, -50],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="fixed top-1/4 left-1/4 text-6xl opacity-20 pointer-events-none"
      >
        🌸
      </motion.div>

      <motion.div
        animate={{
          y: [100, -100, 100],
          x: [50, -50, 50],
          rotate: [360, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="fixed bottom-1/4 right-1/4 text-8xl opacity-15 pointer-events-none"
      >
        💕
      </motion.div>

      <motion.div
        animate={{
          y: [-80, 80, -80],
          x: [30, -30, 30],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed top-1/2 right-1/6 text-5xl opacity-25 pointer-events-none"
      >
        🎀
      </motion.div>
    </div>
  );

  const renderCompanyPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
      {/* Navigation Header */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img
                src={exampleImage}
                alt="Logo"
                className="h-10 w-10 rounded-full mr-3"
              />
              <span className="text-2xl font-bold text-pink-600">
                Mia Miu Creative Studio 🌸
              </span>
            </div>
            <div className="flex items-center space-x-8">
              <button
                onClick={() => setCurrentPage("landing")}
                className="text-pink-600 hover:text-pink-800 font-medium transition-colors"
              >
                🏠 Home
              </button>
              <a
                href="#about"
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
              >
                📋 Tentang Kami
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
              >
                ⚡ Layanan
              </a>
              <a
                href="#products"
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
              >
                🎁 Produk
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
              >
                📞 Kontak
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img
              src={exampleImage}
              alt="Company Mascot"
              className="w-32 h-32 mx-auto rounded-full shadow-lg"
            />
          </motion.div>
          <h1 className="text-5xl font-bold text-pink-700 mb-6">
            Selamat Datang di Creative Studio! 🌟
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Perusahaan teknologi terdepan dengan sentuhan warna pink yang
            menggemaskan
          </p>
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3">
            Mulai Sekarang ✨
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-pink-700 mb-4">
              📋 Tentang Kami
            </h2>
            <p className="text-xl text-gray-600">
              Mengenal lebih dekat Creative Studio dan visi misi kami
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Visi Kami 🎯
              </h3>
              <p className="text-gray-600 mb-6">
                Menjadi perusahaan teknologi terdepan yang menghadirkan solusi
                inovatif dengan pendekatan yang ramah, kreatif, dan penuh warna.
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Misi Kami 🚀
              </h3>
              <p className="text-gray-600">
                Mengembangkan jasa dan layanan berkualitas tinggi yang membantu
                klien mencapai tujuan mereka dengan cara yang menyenangkan dan
                efektif.
              </p>
            </div>
            <div className="bg-pink-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-pink-700 mb-4">
                Mengapa Mia Miu Creative Studio? 💡
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-pink-600 mr-2">✅</span> Tim profesional
                  berpengalaman
                </li>
                <li className="flex items-center">
                  <span className="text-pink-600 mr-2">✅</span> Teknologi
                  terdepan
                </li>
                <li className="flex items-center">
                  <span className="text-pink-600 mr-2">✅</span> Pendekatan
                  kreatif dan inovatif
                </li>
                <li className="flex items-center">
                  <span className="text-pink-600 mr-2">✅</span> Layanan
                  pelanggan 25/7
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-pink-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-pink-700 mb-4">
              ⚡ Layanan Kami
            </h2>
            <p className="text-xl text-gray-600">
              Solusi lengkap untuk kebutuhan digital Anda
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Web Development
              </h3>
              <p className="text-gray-600">
                Pembuatan website modern, responsif, dan user-friendly dengan
                teknologi terbaru.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Mobile Apps
              </h3>
              <p className="text-gray-600">
                Aplikasi mobile iOS dan Android yang intuitif dan performa
                tinggi.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                UI/UX Design
              </h3>
              <p className="text-gray-600">
                Desain antarmuka yang menarik dan pengalaman pengguna yang
                optimal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-pink-700 mb-4">
              🎁 Produk Kami
            </h2>
            <p className="text-xl text-gray-600">
              Inovasi terbaru dari Mia Miu Creative Studio
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-pink-800 mb-4">
                🌟 Pink Suite
              </h3>
              <p className="text-gray-700 mb-6">
                Paket lengkap aplikasi produktivitas dengan interface yang
                cantik dan fitur-fitur canggih.
              </p>
              <button className="bg-pink-600 hover:bg-pink-700 text-white">
                Pelajari Lebih Lanjut
              </button>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-purple-800 mb-4">
                💎 Pink Cloud
              </h3>
              <p className="text-gray-700 mb-6">
                Solusi cloud computing yang aman, cepat, dan mudah digunakan
                untuk bisnis modern.
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white">
                Coba Gratis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-pink-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-pink-700 mb-4">
            📞 Hubungi Kami
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Siap membantu mewujudkan ide digital Anda
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <a
                href="mailto:hello@creativestudio.com"
                className="text-pink-600 hover:text-pink-800 transition-colors"
              >
                miamiu.creative@gmail.com
              </a>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-semibold text-gray-800 mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/qr/DYXL4Q7CDDVSE1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800 transition-colors font-medium"
              >
                Chat WhatsApp 💬
              </a>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-semibold text-gray-800 mb-2">Alamat</h3>
              <p className="text-gray-600">Jakarta, Indonesia</p>
            </div>
          </div>

          <button
            onClick={() => setCurrentPage("landing")}
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3"
          >
            🏠 Kembali ke Halaman Utama
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <img
              src={exampleImage}
              alt="Logo"
              className="h-8 w-8 rounded-full mr-2"
            />
            <span className="text-xl font-bold">Mia MiuCreative Studio 🌸</span>
          </div>
          <p className="text-gray-400">
            © 2025 Mia Miu Creative Studio. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );

  return currentPage === "landing" ? renderLandingPage() : renderCompanyPage();
}
