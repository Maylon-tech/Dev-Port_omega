"use client";

import Link from "next/link"
import { useState } from "react"
import toast from "react-hot-toast"
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa"
import { LuSend } from "react-icons/lu"

const contactInfo = [
    {
        icon: <FaEnvelope className="w-6 h-6" />,
        title: "Email",
        value: "contact@john.dev",
        link: "mailto: contactJohn@john.dev",
    },
    {
        icon: <FaPhone className="w-6 h-6" />,
        title: "Phone",
        value: "+1 (123) 456-871",
        link: "tel: +1234439087",
    },
    {
        icon: <FaMapMarkerAlt className="w-6 h-6" />,
        title: "Location",
        value: "Remote * Global",
        link: "#",
    },
]

const ContactSection = () => {
    const [loading, setLoading] = useState(false)

    const InputStyles = "px-4 py-3.5 my-4 bg-slate-900 outline-none rounded-md w-full text-gray-200 placeholder-gray-400 resize-none"

    const onSubmit = async (e: React.FormEvent) => {
        setLoading(true)
        e.preventDefault()
        
        const formData = new FormData(e.target as HTMLFormElement);
        formData.append("access_key", "e5a7a29f-c9a7-4061-992c-eff644d79096");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();
        if (data.success) {
            (e.target as HTMLFormElement).reset()
            toast("Form Submitted Successfully", {
                style: {
                    background: "#4f39f6",
                    color: "white"
                }
            })
        } else {
            toast("Error Submitting Form", {
                style: {
                    background: "#4f39f6",
                    color: "white"
                }
            })
        }
        setLoading(false)
    }

  return (
    <section id="contact" className="py-16 lg:py-30">
        <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            {/* Info and Contents */}
            <div data-aos="fade-right">
                <h2 className="py-3 text-3xl md:text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-gray-300">Ready To Collaborate?</h2>
                <p className="text-gray-400 mb-10 text-base lg:text-lg leading-relaxed">
                    I&apos;m currently available for freelance work and full-time opportunities. Weather you have a project in mind or just want to connect, fell free to reach out.
                </p>
                
                <div className="space-y-5 mb-12">
                    {
                        contactInfo.map((item, index) => {
                            return (
                                <Link
                                    href={item.link} 
                                    key={index}
                                    className="group flex items-center gap-4 px-2 py-3 transition-colors hover:bg-white/5 rounded-lg"
                                >
                                    <div className="h-15 w-15 rounded-full bg-white/5 text-white transition-transform group-hover:scale-105 grid place-items-center">
                                        {item.icon}
                                    </div>
                                    <div className="">
                                        <h4 className="text-md font-medium text-white">{item.title}</h4>
                                        <p className="text-md text-gray-400">{item.value}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            
            {/* Forms */}
            <div data-aos="zoom-in">
                <form onSubmit={onSubmit} className="rounded-lg bg-slate-800 px-4 py-8">
                    <input 
                        type="text" 
                        placeholder="Your Name"
                        className={InputStyles}
                        required
                        name="name"
                    />
                    <input 
                        type="text" 
                        placeholder="Your Email"
                        className={InputStyles}
                        required
                        name="email"
                    />
                    <input 
                        type="text" 
                        placeholder="Subject of Message"
                        className={InputStyles}
                        required
                        name="subject"
                    />
                    <textarea 
                        placeholder="Message" 
                        required
                        className={InputStyles}
                        rows={5}
                        name="message"
                    />
                    
                      <button
                          className="w-full bg-linear-to-r from-blue-900 to-purple-800 hover:from-blue-800 hover:to-purple-700 text-white font-semibold py-4
                          rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
                      >
                          {
                            loading ? (
                                <>
                                    <span className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></span>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <LuSend size={20} />
                                    Send Message
                                </>
                            )
                        }
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default ContactSection
