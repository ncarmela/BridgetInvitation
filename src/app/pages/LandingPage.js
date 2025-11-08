"use client";

import { useState } from "react";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import DressCode from "../components/DressCode";
import Rsvp from "../components/Rsvp";
import Location from "../components/Location";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState("18 Roses");

  const sections = [
    {
      title: "18 Roses",
      names: [
        [
          "Lino Mariano", "Menard Nambio", "John Philip Nambio", "Rhoneil Nambio",
          "Marvic Lorenz Reyes", "John Emmanuel Gonzales", "Renz Rafael Castillo",
          "Renz Gabriel Castillo", "Dave Lemuel Tanco"],
        [
          "Carl Matthew Nambio", "Kryst Caleb Sayson", "Yohan Iñigo Gabriel",
          "Dzel Angeles", "Marc Josh San Diego", "Thirdy Reguyal",
          "Azriel Ansley Alcaraz", "Khalil Santiago", "Samuel Aaron Aquino"
        ]
      ]
    },
    {
      title: "18 Letters",
      names: [
        [
          "Angeli Carmel Nambio", "Angela Therese Nambio", "Jade Nicole Gonzales",
          "Joan Beatriz Gonzales", "Ayessha Dayne Nagaño", "Cassandra Dizon",
          "Jen Adiova", "Mikaela Germino", "Princess Mikee Cruz"],
        [
          "Lindsay Manabat", "Aubrey Zipporah Germino", "Ma. Thearis Alcantara",
          "Christina Gem Siwa", "Melvy Anne Bautista", "Alexandra Nicole Sayson",
          "Nina Carmela Nambio", "Myca Ysabelle Nambio", "Maria Carmela Alvarez"
        ]
      ]
    },
    {
      title: "18 Treasures",
      names: [
        [
          "Lance Santiago", "Maria Paz Reyes", "Gem Gonzales",
          "June Tanco", "Lorelei Castillo", "Joyce Ann Nambio",
          "Rosielyn Sayson", "Rolly Alvarez", "Cardy Amor Nambio"],
        [
          "Helen Valcos", "Hilda Uy", "Hannah Palisoc", "Hasmine Soriano",
          "Cita Shih", "Nicanora Bautista", "Renita Sawit",
          "Herminia Sardual", "Lorna Punzal"
        ]
      ]
    },
    {
      title: "18 Shots",
      names: [
        [
          "Kaila Cabran", "Kimberly Urian", "Erica Palisoc", "Gilbert Palisoc",
          "Helvert Moraleda", "Emerson Sayson", "Beatrice Sayson",
          "Clouie Ico", "Krycelle Agapito"],
        [
          "Kristien Florendo", "Nicamae Diamat", "Joshua Dave Sebastian",
          "Felicia Angeles", "Chloe Alvarez", "Myca Nambio",
          "Nina Nambio", "Divinia Tobias", "Daniel Tobias"
        ]
      ]
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <header className="w-full relative overflow-hidden">
        <img
          src="/pictures/Header.png"
          alt="Header"
          className="w-full h-auto object-cover"
        />
        <motion.img
      src="/pictures/Banner.png"
      alt="Banner"
      className="w-full mt-4 h-auto object-cover rounded-xl"
      initial={{ opacity: 0, y: 50 }} // start hidden and lower
      whileInView={{ opacity: 1, y: 0 }} // animate when scrolled into view
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // trigger once, when 20% visible
    />
      </header>
<main className="min-h-screen bg-gradient-to-b from-[#f7f4ef] to-[#f7f4ef] text-gray-800 text-center font-[serif] overflow-visible">
      
      <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-4"
    >
      {/* Carousel Section */}
      <Carousel activeSection={activeSection} setActiveSection={setActiveSection} />

      

      {/* Active Section Cards */}
      {sections
        .filter((group) => group.title === activeSection)
        .map((group) => (
          <Card key={group.title} section={group} />
        ))}
    </motion.section>
    
      {/* Photo Strip */}
      <motion.img
        src="/pictures/PhotoStrip.png"
        alt="PhotoStrip"
        className="w-full h-auto object-cover mt-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      />

      {/* Dress Code */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <DressCode />
      </motion.div>

      {/* Location */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Location />
      </motion.div>

      {/* RSVP */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Rsvp />
      </motion.div>
    </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
