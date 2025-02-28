import React from "react";
import {
    AiFillGithub,
    AiFillInstagram,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineWhatsApp } from "react-icons/ai";

function SocialMedia() {
    return (
        <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                    href="https://github.com/SameerMMM"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                    <AiFillGithub className="social-icon" />
                </a>
            </li>
            <li className="social-icons">
                <a
                    href="https://www.linkedin.com/in/mohamed-sameer-39515b276"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                    <FaLinkedinIn className="social-icon" />
                </a>
            </li>
            <li className="social-icons">
                <a
                    href="https://wa.me/+94767449331"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                >
                    <AiOutlineWhatsApp className="social-icon" />
                </a>
            </li>
            <li className="social-icons">
                <a
                    href="mailto:sameer20011028@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                >
                    <MdEmail className="social-icon" />
                </a>
            </li>
        </ul>
    );
}
export default SocialMedia;
