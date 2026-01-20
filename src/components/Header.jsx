import { FaSun, FaMoon } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import logo from "../assets/vetrinova_typologo.png";

const Header = ({ isDarkMode, setIsDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, changeLanguage, t } = useLanguage();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <header
            className={`w-full pt-6 md:px-6 px-4 flex gap-10 justify-between items-center relative ${
                isDarkMode
                    ? "bg-darkerGreen text-white"
                    : "bg-transparent text-black"
            }`}
        >
            {/* Logo */}
            <Link to="/">
                <img
                    className="w-40 max-md:w-28"
                    src={logo}
                    alt="Vetrinova logo"
                />
            </Link>

            {/* Mobile Menu */}
            <div className="md:hidden flex w-52 justify-end items-center z-20">
                <button
                    onClick={toggleMenu}
                    className="text-3xl focus:outline-none"
                >
                    <span>&#9776;</span>
                </button>

                <div
                    className={`fixed top-0 right-0 w-64 h-full pt-8 ${
                        isDarkMode
                            ? "bg-darkerGreen text-white"
                            : "bg-white text-black"
                    } shadow-lg p-4 space-y-4 transform ${
                        isMenuOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out`}
                >
                    <div className="flex items-center space-x-4">
                        {/* Dark Mode */}
                        <button
                            onClick={toggleDarkMode}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-lightGreen transition duration-200"
                        >
                            {!isDarkMode ? (
                                <FaMoon className="text-gray-800 text-xl" />
                            ) : (
                                <FaSun className="text-gray-800 text-xl" />
                            )}
                        </button>

                        {/* Language */}
                        <button
                            onClick={() =>
                                changeLanguage(language === "en" ? "it" : "en")
                            }
                            className={`w-10 h-10 flex items-center justify-center rounded-full transition duration-200 font-semibold text-sm ${
                                isDarkMode
                                    ? "bg-gray-200 text-gray-800 hover:bg-lightGreen"
                                    : "bg-gray-200 text-gray-800 hover:bg-lightGreen"
                            }`}
                        >
                            {language === "en" ? "IT" : "EN"}
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col justify-center items-center space-y-6 py-10">
                        <Link
                            to="/about"
                            className="hover:text-lightGreen transition duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t("nav.about")}
                        </Link>
                        <Link
                            to="/projects"
                            className="hover:text-lightGreen transition duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t("nav.projects")}
                        </Link>
                        <Link
                            to="/contact"
                            className="hover:text-lightGreen transition duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t("nav.contact")}
                        </Link>
                    </div>

                    {/* CTA Mobile */}
                    <Link
                        to="/order"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex mx-auto items-center space-x-2 px-10 pb-2 pt-1 bg-darkGreen hover:bg-lightGreen text-white rounded-full justify-center transition duration-200"
                    >
                        <span className="whitespace-nowrap">
                            {t("nav.order")}
                        </span>
                        <HiArrowNarrowRight />
                    </Link>
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 w-full justify-between">
                {/* Navigation */}
                <div className="flex gap-8">
                    <Link
                        to="/about"
                        className="hover:text-lightGreen transition duration-200"
                    >
                        {t("nav.about")}
                    </Link>
                    <Link
                        to="/projects"
                        className="hover:text-lightGreen transition duration-200"
                    >
                        {t("nav.projects")}
                    </Link>
                    <Link
                        to="/contact"
                        className="hover:text-lightGreen transition duration-200"
                    >
                        {t("nav.contact")}
                    </Link>
                </div>

                {/* Actions */}
                <div className="flex gap-5 items-center">
                    {/* Dark Mode */}
                    <button
                        onClick={toggleDarkMode}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-lightGreen transition duration-200"
                    >
                        {!isDarkMode ? (
                            <FaMoon className="text-gray-800" />
                        ) : (
                            <FaSun className="text-gray-800" />
                        )}
                    </button>

                    {/* Language */}
                    <button
                        onClick={() =>
                            changeLanguage(language === "en" ? "it" : "en")
                        }
                        className={`w-10 h-10 flex items-center justify-center rounded-full transition duration-200 font-semibold text-sm ${
                            isDarkMode
                                ? "bg-gray-200 text-gray-800 hover:bg-lightGreen"
                                : "bg-gray-200 text-gray-800 hover:bg-lightGreen"
                        }`}
                    >
                        {language === "en" ? "IT" : "EN"}
                    </button>

                    {/* CTA */}
                    <Link
                        to="/order"
                        className="flex items-center space-x-2 px-8 py-2 bg-darkGreen hover:bg-lightGreen text-white rounded-full justify-center transition duration-200"
                    >
                        <span>{t("nav.order")}</span>
                        <HiArrowNarrowRight />
                    </Link>
                </div>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 md:hidden z-10"
                    onClick={toggleMenu}
                />
            )}
        </header>
    );
};

export default Header;
