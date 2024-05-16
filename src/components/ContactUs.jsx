import AOS from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
export const ContactUs = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
        });
    }, []);
    return (
        <div className="h-lvh">
            <div data-aos="fade-right" className="bg-banner bg-cover bg-center mt-24 py-16">
                <h1 style={{ textShadow: '2px 2px 3px rgba(0, 0, 0, 0.8)' }} className="text-center text-5xl text-white font-extrabold ">Quiero Vender</h1>
            </div>
            <section data-aos="fade-up">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="lg:col-span-2 lg:py-12">
                            <h1 className="text-3xl font-extrabold mb-2 text-yellow-500">Aumentá tus ingresos</h1>
                            <p className="max-w-xl text-lg text-white">
                                Vos también podés ser promotor de ventas de La Gran Promoción.

                                Completa el formulario que figura a continuación y envíalo. Te llegará un mail confirmando su recepción e información adicional para evacuar tus dudas.

                                Sumate a nuestro equipo de promotores. Emprendé tu propio negocio!
                            </p>

                            <div className="mt-8">
                                <a href="#" className="text-2xl font-bold text-yellow-500">3564 603610</a>

                                <address className="mt-2 not-italic text-white">Bv. San Martin 231° - Devoto - Córdoba - Argentina</address>
                            </div>
                        </div>

                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form action="#" className="space-y-4 bg-white">
                                <div>
                                    <label className="sr-only" for="name">Nombre y apellido</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                        placeholder="Nombre y Apellido"
                                        type="text"
                                        id="name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" for="email">Email</label>
                                        <input
                                            className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                            placeholder="Email"
                                            type="email"
                                            id="email"
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" for="phone">Telefono</label>
                                        <input
                                            className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                            placeholder="Telefono"
                                            type="tel"
                                            id="phone"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
                                    <div>
                                        <label
                                            for="Option1"
                                            className="block w-full cursor-pointer rounded-lg border border-gray-300 p-3 text-gray-600 hover:border-blue-950 has-[:checked]:border-blue-950 has-[:checked]:bg-blue-950 has-[:checked]:text-gray-100"
                                            tabindex="0"
                                        >
                                            <input className="sr-only" id="Option1" type="radio" tabindex="-1" name="option" />

                                            <span className="text-sm text-gray-400"> Contactanos </span>
                                        </label>
                                    </div>

                                    <div>
                                        <label
                                            for="Option2"
                                            className="block w-full cursor-pointer rounded-lg border border-gray-300 p-3 text-gray-600 hover:border-blue-950 has-[:checked]:border-blue-950 has-[:checked]:bg-blue-950 has-[:checked]:text-gray-100"
                                            tabindex="0"
                                        >
                                            <input className="sr-only" id="Option2" type="radio" tabindex="-1" name="option" />

                                            <span className="text-sm text-gray-400"> Quiero vender </span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="sr-only" for="message">Escribe tu consulta...</label>

                                    <textarea
                                        className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                        placeholder="Tu mensaje"
                                        rows="8"
                                        id="message"
                                    ></textarea>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-blue-950 px-5 py-3 font-bold text-white sm:w-auto"
                                    >
                                        Enviar Mensaje
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
