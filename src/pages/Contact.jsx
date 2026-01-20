import { useEffect } from "react";
import { FaEnvelope, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { useLanguage } from "../i18n/LanguageContext";


const Contact = ({ isDarkMode }) => {
    const { t } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section
            className={`w-full max-w-4xl mx-auto text-center p-8 ${
                isDarkMode
                    ? "bg-darkerGreen text-white"
                    : "bg-white text-gray-900"
            }`}
        >
            {/* Header */}
            <h1
                className={`text-4xl font-bold mb-6 ${
                    isDarkMode ? "text-gray-200" : "text-gray-900"
                }`}
            >
                {t("contact.title")}
            </h1>

            <p
                className={`text-lg leading-relaxed mb-8 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
            >
               {t("contact.subtitle")}
            </p>

            {/* Direct Contact Info */}
            <div
                className={`mb-12 flex justify-center gap-10 text-3xl ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
            >
                {/* Email */}
                <a
                    href="mailto:vetrinova.contact@gmail.com"
                    className="flex items-center justify-center w-14 h-14 rounded-full border border-darkGreen text-darkGreen hover:bg-darkGreen hover:text-white transition"
                    aria-label="Email Vetrinova"
                >
                    <FaEnvelope />
                </a>

                {/* WhatsApp */}
                <a
                    href="https://wa.me/393516501015"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 rounded-full border border-darkGreen text-darkGreen hover:bg-darkGreen hover:text-white transition"
                    aria-label="WhatsApp Vetrinova"
                >
                    <FaWhatsapp />
                </a>

                {/* Phone */}
                <a
                    href="tel:+393516501015"
                    className="flex items-center justify-center w-14 h-14 rounded-full border border-darkGreen text-darkGreen hover:bg-darkGreen hover:text-white transition"
                    aria-label="Call Vetrinova"
                >
                    <FaPhoneAlt />
                </a>
            </div>

            {/* Google Form Embed */}
            <div className="mx-auto max-w-4xl">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSd0hJR2Z680msaW9N2Ux96mX7SBCc0u3te-U5aAUUi46cqE4Q/viewform?embedded=true"
                    width="100%"
                    height="1000px"
                    title="Contact Vetrinova"
                >
                    Loading…
                </iframe>
            </div>
        </section>
    );
};

export default Contact;
