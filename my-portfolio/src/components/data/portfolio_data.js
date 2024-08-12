/* eslint-disable no-unused-vars */
// This file contains data used for the portfolio section of the website
import simple_shell from "../../assets/simple_shell.svg";
import monty from "../../assets/monty.svg";
import api from '../../assets/api.png'



const data = [
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
        source_code_link: "https://github.com/khairatAA/simple_shell",
        live_link: "https://github.com/khairatAA/simple_shell/blob/main/README.md"
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
        source_code_link: "https://github.com/khairatAA/monty",
        live_link: "https://github.com/khairatAA/monty"
    },
]

export default data
