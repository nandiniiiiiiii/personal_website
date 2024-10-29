'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { ShootingStars } from './ui/shooting-stars';
import { StarsBackground } from './ui/stars-background';
import { SignupFormDemo } from './FormComponents';
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Highlight } from "./ui/hero-highlight";


interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const [submitting, setSubmitting] = useState<boolean>(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch('/api/contact-us', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                alert('Your inquiry has been submitted!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: ''
                });
            } else {
                console.error(data.error);
                alert('Error while submitting your inquiry: ' + data.error);
            }
        } catch (err) {
            console.error('Error submitting the form', err);
            alert('An unexpected error occurred. Please try again later.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="relative flex justify-center items-center min-h-screen bg-black overflow-hidden text-white pt-20 pb-40">
            {/* Background effects */}
            <StarsBackground />
            <ShootingStars />

            {/* Main Content */}
            <div className='flex flex-col'>
                <h1 className="text-5xl w-full font-bold text-center text-neutral-800 dark:text-neutral-200 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text shadow-lg hover:scale-105 transition-transform duration-300 pb-40 pt-40">
                    <Highlight className="text-5xl">
                        404 Not Found…
                    </Highlight>
                    <br />
                    <span className="text-8xl mt-4">
                        Unless you reach out! <span className="block w-full h-1 bg-gradient-to-br from-pink-500 to-indigo-500"></span>
                    </span>
                    <span className='text-8xl'>
                        Let’s fix that!
                    </span>
                    
                </h1>
                <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input z-10 flex flex-col items-center justify-center w-full max-w-lg p-6 bg-white rounded-lg shadow-lg mx-4 text-black space-y-6 bg-white dark:bg-black">
                    <h1 className="text-4xl font-bold text-center mb-6 font-bold text-4xl text-neutral-800 dark:text-neutral-200">Contact Me</h1>
                    <form onSubmit={handleSubmit} className="w-full space-y-4">
                        <div className="form-control">
                            <Label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-2">First name: </Label>
                            {/* <Input id="firstname" placeholder="Tyler" type="text" /> */}
                            {/* <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                            First Name:
                        </label> */}
                            <Input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="Enter first name..."
                                onChange={handleInputChange}
                                value={formData.firstName}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="form-control">
                            <Label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                Last Name:
                            </Label>
                            <Input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Enter last name..."
                                onChange={handleInputChange}
                                value={formData.lastName}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="form-control">
                            <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email:
                            </Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter email..."
                                onChange={handleInputChange}
                                value={formData.email}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="form-control">
                            <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                Message:
                            </Label>
                            <Input
                                type="text"
                                id="message"
                                name="message"
                                placeholder="Enter message..."
                                onChange={handleInputChange}
                                value={formData.message}
                                required
                                className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                style={{ height: '100px' }}
                            />
                        </div>
                        <button
                            className={`bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]`}
                            type="submit"
                            disabled={submitting}
                        >
                            {submitting ? 'Sending...' : 'Send Message'}
                            <BottomGradient />
                        </button>
                    </form>
                </div>
                {/* <SignupFormDemo/> */}
            </div>
        </div>
    )
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

export default ContactForm