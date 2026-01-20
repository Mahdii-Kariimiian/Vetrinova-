import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import PricingCard from "../components/PricingCard";
import { pricingData } from "../db/db";
import { useLanguage } from "../i18n/LanguageContext";

const Order = ({ isDarkMode }) => {
    const { t } = useLanguage();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        productsCount: "under10",
        businessType: "",
        isPhysical: "yes",
        needCustomDesign: "no",
        message: "",
        dropshipping: "no",
        multilingual: "no",
        orderManagement: "no",
        projectTime: "no-rush",
    });

    const [submitted, setSubmitted] = useState(false);
    const form = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_xm5pbcm",
                "template_bqcniev",
                form.current,
                "mV9rGASfViXLoUkhx"
            )
            .then(() => setSubmitted(true))
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {/* Pricing Cards */}
            <section className="grid max-md:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-3 items-stretch gap-5 py-10 md:px-10 px-4 justify-center">
                {pricingData.map((card) => (
                    <Link
                        className="max-md:m-auto"
                        to={card.url}
                        key={card.titleKey}
                    >
                        <PricingCard
                            isDarkMode={isDarkMode}
                            titleKey={card.titleKey}
                            price={card.price}
                            descriptionKeys={card.descriptionKeys}
                        />
                    </Link>
                ))}
            </section>

            {/* Order Form */}
            <section
                className={`w-full max-w-2xl mx-auto text-center p-8 mt-10 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                }`}
            >
                {!submitted ? (
                    <div>
                        <h1 className="text-3xl font-bold mb-16">
                            {t("orderPage.title")}
                        </h1>

                        <form
                            ref={form}
                            onSubmit={handleSubmit}
                            className="flex flex-col space-y-4"
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder={t("orderPage.name")}
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="p-3 border border-gray-300 rounded-md"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder={t("orderPage.email")}
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="p-3 border border-gray-300 rounded-md"
                            />

                            <select
                                name="productsCount"
                                value={formData.productsCount}
                                onChange={handleChange}
                                className="p-3 border border-gray-300 rounded-md"
                            >
                                <option value="under10">
                                    {t("orderPage.products.under10")}
                                </option>
                                <option value="10to20">
                                    {t("orderPage.products.10to20")}
                                </option>
                                <option value="20to40">
                                    {t("orderPage.products.20to40")}
                                </option>
                                <option value="above40">
                                    {t("orderPage.products.above40")}
                                </option>
                            </select>

                            <input
                                type="text"
                                name="businessType"
                                placeholder={t("orderPage.business")}
                                value={formData.businessType}
                                onChange={handleChange}
                                className="p-3 border border-gray-300 rounded-md"
                            />

                            <select
                                name="projectTime"
                                value={formData.projectTime}
                                onChange={handleChange}
                                className="p-3 border border-gray-300 rounded-md"
                            >
                                <option value="under-2-weeks">
                                    {t("orderPage.time.fast")}
                                </option>
                                <option value="2-weeks-to-1-month">
                                    {t("orderPage.time.medium")}
                                </option>
                                <option value="no-rush">
                                    {t("orderPage.time.norush")}
                                </option>
                            </select>

                            <textarea
                                name="message"
                                placeholder={t("orderPage.message")}
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="p-3 border border-gray-300 rounded-md"
                            />

                            <button
                                type="submit"
                                className="px-6 py-3 bg-darkGreen hover:bg-lightGreen text-white rounded-md transition"
                            >
                                {t("orderPage.submit")}
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="space-y-8 mt-10">
                        <h2 className="text-3xl font-bold">
                            {t("orderPage.thanks")}
                        </h2>
                        <p>{t("orderPage.confirmation")}</p>
                        <Link
                            to="/"
                            className="text-darkGreen hover:text-lightGreen transition"
                        >
                            {t("navigation.backHome")}
                        </Link>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Order;
