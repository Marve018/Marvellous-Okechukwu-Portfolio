/* eslint-disable no-unused-vars */
// This file contains data used for the portfolio section of the website
import simple_shell from "../../assets/simple_shell.svg";
import monty from "../../assets/monty.svg";
import api from '../../assets/api.png'



const data = [
    {
        name: "Shelter",
        description:
            "Shelter is a comprehensive web application designed to streamline the process of property management and bookings for both property owners and renters.",
        tags: [
            {
                name: "Express & NodeJs",
                color: "blue",
            },
            {
                name: "ReactJs",
                color: "purple",
            },
            {
                name: "MongoDB",
                color: "green",
            },
        ],
        image: shelter,
        source_code_link: "https://github.com/Marve018/shelter",
        live_link: ""
    },
    {
        name: "NutriPlan",
        description:
            "Nutriplan is a web application designed to streamline and organize an individuals various meal plans seamlessly.",
        tags: [
            {
                name: "Python",
                color: "blue",
            },
            {
                name: "Flask",
                color: "purple",
            },
            {
                name: "Javascript",
                color: "Brown",
            },
        ],
        image: nutriplan,
        source_code_link: "https://github.com/Marve018/NutriPlan",
        live_link: "https://nutriplan-nfgz.onrender.com"
    },
    {
        name: "Simple Shell",
        description:
            "Using concepts like linked lists, bit manipulation, file I/O, and data structures, developed a shell interface, mirroring the functionalities of established shells such as bash or sh.",
        tags: [
            {
                name: "C",
                color: "blue",
            },
            {
                name: "DSA",
                color: "purple",
            },
            {
                name: "Linux",
                color: "Brown",
            },
        ],
        image: simple_shell,
        source_code_link: "https://github.com/Marve018/simple_shell",
        live_link: "https://github.com/Marve018/simple_shell/blob/main/README.md"
    },
    {
        name: "Monty Bytecode Interpreter",
        description:
            "Utilized the concept of stacks (LIFO) and queues (FIFO) in C programming language, built a Monty interpreter that reads and executes Monty bytecode files.",
        tags: [
            {
                name: "C",
                color: "blue",
            },
            {
                name: "DSA",
                color: "red",
            },
            {
                name: "Bytecode",
                color: "pink",
            },
        ],
        image: monty,
        source_code_link: "https://github.com/Marve018/monty",
        live_link: "https://github.com/Marve018/monty"
    },
]

export default data
