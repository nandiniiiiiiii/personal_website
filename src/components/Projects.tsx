"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
    return (
        <div className="flex flex-col overflow-hidden" >
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    );
}

const testimonials = [
    {
        title: "Ecommerce",
        about: "MERN stack ecommerce website, with admin section, payment gateway, google sign-in, and am planning to add docker, kubernetes and hosting as well. ",
        link: "https://github.com/nandiniiiiiiii/E-commerce",
    },
    {
        title: "Textify(chrome extension)",
        about: "Chrome Extension that can save the selected text with the URL if web site that it is on. Technologies used JS, CSS and HTML for the interface ",
        link: "https://github.com/nandiniiiiiiii/Chrome-Extension-Textify",
    },
    {
        title: "Text Summarizer ",
        about: "An ML model that can summarize the input text, Used Huggin Face Api for the test model and Flask for the backend and HTML,CSS and JS for the frontend, dockerized and hosted. ",
        link: "https://github.com/nandiniiiiiiii/Text-summarizer",
    },
    {
        title: "RapidRecap",
        about: "Automated Text Summarization, Q/A generation, Notes Generation from PowerPoint presentations, PDFs, Word documents, and images via LMM | dockerized and hosting | also visualization of excel data.",
        link: "https://github.com/nandiniiiiiiii/RapidRecap-major",
    },
    // {
    //     quote:
    //         "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    //     name: "Herman Melville",
    //     title: "Moby-Dick",
    // },
];
