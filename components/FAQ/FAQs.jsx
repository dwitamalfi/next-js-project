"use client"
import React from 'react'
import { useState } from 'react';

import { Disclosure } from "@headlessui/react";

export default function FAQs() {
    return (
        <section className="px-5 py-4 mt-20" id="faq">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="font-blueberry text-5xl max-xs:text-2xl font-bold mb-20 text-center">
                Masih penasaran?
                </h2>
                <Disclosure>
                {({ open }) => (
                    <>
                    <div className="border rounded-lg font-blueberryreg px-4 py-4">
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left  rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span className='font-blueberryreg text-xl'>Apa itu Dimulai?</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}  stroke="currentColor"
                                    className={`${
                                    open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-black`}  >
                                    <path strokeLinecap="round"  strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel className="font-blueberryreg text-xl px-4 mt-5 pt-0 dark:text-gray-900">
                            Dimulai adalah media pembelajaran khusus untukmu yang ingin menambah wawasan dengan menyajikan berbagai konten menarik, yang membuat belajar menjadi terasa menyenangkan.
                        </Disclosure.Panel>
                    </div>
                    </>
                )}
                </Disclosure>
                
                <Disclosure as="div" className="mt-4">
                {({ open }) => (
                    <>
                    <div className="border rounded-lg font-blueberryreg px-4 py-4">
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left  rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span className='font-blueberryreg text-xl '>Dimana saya bisa mendapatkan akses ke aplikasi Dimulai?</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}  stroke="currentColor"
                                    className={`${
                                    open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-black`}  >
                                    <path strokeLinecap="round"  strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel className="font-blueberryreg font-thin text-xl px-4 mt-5 pt-0 dark:text-gray-900">
                            Kamu bisa menikmati konten Dimulai.id secara gratis dari platform Youtube dan berbagai fitur keren lainnya di Mobile Apps Dimulai.id
                        </Disclosure.Panel>
                    </div>
                    </>
                )}
                </Disclosure>

                <Disclosure as="div" className="mt-4">
                {({ open }) => (
                    <>
                    <div className="border rounded-lg font-blueberryreg px-4 py-4">
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left  rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span className='font-blueberryreg text-xl '>Apakah semua konten Dimulai gratis?</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}  stroke="currentColor"
                                    className={`${
                                    open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-black`}  >
                                    <path strokeLinecap="round"  strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel className="font-blueberryreg text-xl px-4 mt-5 pt-0 dark:text-gray-900">
                            Kamu bisa menikmati konten Dimulai.id secara gratis dari platform Youtube dan berbagai fitur keren lainnya di Mobile Apps Dimulai.id
                        </Disclosure.Panel>
                    </div>
                    </>
                )}
                </Disclosure>

                <Disclosure as="div" className="mt-4">
                {({ open }) => (
                    <>
                    <div className="border rounded-lg font-blueberryreg px-4 py-4">
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left  rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span className='font-blueberryreg text-xl '>Apa saja yang akan saya dapatkan saat berlangganan?</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}  stroke="currentColor"
                                    className={`${
                                    open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-black`}  >
                                    <path strokeLinecap="round"  strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel className="font-blueberryreg text-xl px-4 mt-5 pt-0 dark:text-gray-900">
                            Terdapat lebih banyak metode pembelajaran yang disajikan dalam bentuk media audio, video, dan textbook.
                        </Disclosure.Panel>
                    </div>
                    </>
                )}
                </Disclosure>
                
                
            </div>
        </section>
    );
}