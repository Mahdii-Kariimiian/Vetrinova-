import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
    FaArrowLeft,
    FaCheckCircle,
    FaTimesCircle,
    FaStar,
} from "react-icons/fa";
import advanced from "../assets/advanced.jpeg";
import { useLanguage } from "../i18n/LanguageContext";

const Section = ({ title, items, icon, isDarkMode }) => (
    <section className="mb-10">
        <div
            className={`p-6 rounded-2xl ${
                isDarkMode ? "bg-darkGreen/40" : "bg-lightGreen/20 border"
            }`}
        >
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-lightGreen">{icon}</span>
                {title}
            </h2>

            <ul className="space-y-3">
                {items.map((item, index) => (
                    <li key={index} className="flex gap-3">
                        <span className="text-lightGreen mt-1">•</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

const AdvancedPlan = ({ isDarkMode }) => {
    const { t } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div
            className={`container mx-auto px-6 py-16 ${
                isDarkMode
                    ? "bg-darkerGreen text-white"
                    : "bg-white text-gray-800"
            }`}
        >
            <header className="text-center max-w-3xl mx-auto mb-20">
                <h1 className="text-4xl font-bold mb-4">
                    {t("advancedPlan.title")}
                </h1>
                <p
                    className={`text-lg ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                    {t("advancedPlan.subtitle")}
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_480px] gap-16 items-start">
                {/* LEFT */}
                <div>
                    <Section
                        title={t("advancedPlan.servicesTitle")}
                        items={Object.values(
                            t("advancedPlan.services", {
                                returnObjects: true,
                            }),
                        )}
                        icon={<FaCheckCircle />}
                        isDarkMode={isDarkMode}
                    />

                    <Section
                        title={t("advancedPlan.excludedCostsTitle")}
                        items={Object.values(
                            t("advancedPlan.excludedCosts", {
                                returnObjects: true,
                            }),
                        )}
                        icon={<FaTimesCircle />}
                        isDarkMode={isDarkMode}
                    />

                    <Section
                        title={t("advancedPlan.whyTitle")}
                        items={Object.values(
                            t("advancedPlan.why", {
                                returnObjects: true,
                            }),
                        )}
                        icon={<FaStar />}
                        isDarkMode={isDarkMode}
                    />

                    <Section
                        title={t("advancedPlan.notesTitle")}
                        items={Object.values(
                            t("advancedPlan.notes", {
                                returnObjects: true,
                            }),
                        )}
                        icon={<FaCheckCircle />}
                        isDarkMode={isDarkMode}
                    />

                    {/* PRICE */}
                    <section className="mb-12">
                        <div
                            className={`p-8 rounded-2xl text-center ${
                                isDarkMode
                                    ? "bg-darkGreen/60"
                                    : "bg-lightGreen/30 border"
                            }`}
                        >
                            <p className="text-sm uppercase tracking-wide mb-2">
                                {t("advancedPlan.price")}
                            </p>
                            <p className="text-4xl font-bold ">
                                {t("advancedPlan.priceValue")}
                            </p>
                        </div>
                    </section>

                    {/* CTA + Back */}
                    <div className="flex flex-wrap items-center gap-6">
                        <Link
                            to="/order"
                            className="px-8 py-4 rounded-xl bg-darkGreen text-white font-semibold hover:bg-lightGreen transition"
                        >
                            Request a Quote
                        </Link>

                        <Link
                            to="/plans"
                            className="flex items-center text-darkGreen font-medium hover:underline"
                        >
                            <FaArrowLeft className="mr-2" />
                            {t("common.back")}
                        </Link>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="hidden md:block">
                    <img
                        src={advanced}
                        alt="Advanced Plan"
                        className="rounded-3xl shadow-xl w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default AdvancedPlan;
