import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import advanced from "../assets/advanced.jpeg";
import { useLanguage } from "../i18n/LanguageContext";

const AdvancedPlan = ({ isDarkMode }) => {
    const { t } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div
            className={`container mx-auto p-6 ${
                isDarkMode
                    ? "bg-darkerGreen text-white"
                    : "bg-white text-gray-800"
            }`}
        >
            {/* Header */}
            <header className="text-center my-12">
                <h1 className="text-4xl font-bold">
                    {t("advancedPlan.title")}
                </h1>
                <p
                    className={`text-lg mt-2 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                    {t("advancedPlan.subtitle")}
                </p>
            </header>

            <div className="flex flex-col-reverse md:flex-row gap-10 items-start">
                <div>
                  

                    {/* Services */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold">
                            {t("advancedPlan.servicesTitle")}
                        </h2>

                        <ul className="list-disc pl-6 mt-4 space-y-3">
                            {Object.values(
                                t("advancedPlan.services", {
                                    returnObjects: true,
                                }),
                            ).map((service, index) => (
                                <li key={index}>{service}</li>
                            ))}
                        </ul>
                    </section>

                    {/* Excluded Costs */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold">
                            {t("advancedPlan.excludedCostsTitle")}
                        </h2>

                        <ul className="list-disc pl-6 mt-4 space-y-3">
                            {Object.values(
                                t("advancedPlan.excludedCosts", {
                                    returnObjects: true,
                                }),
                            ).map((cost, index) => (
                                <li key={index}>{cost}</li>
                            ))}
                        </ul>
                    </section>

                    {/* Why */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold">
                            {t("advancedPlan.whyTitle")}
                        </h2>

                        <ul className="list-disc pl-6 mt-4 space-y-3">
                            {Object.values(
                                t("advancedPlan.why", {
                                    returnObjects: true,
                                }),
                            ).map((reason, index) => (
                                <li key={index}>{reason}</li>
                            ))}
                        </ul>
                    </section>

                    {/* Notes */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold">
                            {t("advancedPlan.notesTitle")}
                        </h2>

                        <ul className="list-disc pl-6 mt-4 space-y-3">
                            {Object.values(
                                t("advancedPlan.notes", {
                                    returnObjects: true,
                                }),
                            ).map((note, index) => (
                                <li key={index}>{note}</li>
                            ))}
                        </ul>
                    </section>
                      {/* Price */}
                    <p className="mb-6 text-3xl font-semibold">
                        {t("advancedPlan.price")} {t("advancedPlan.priceValue")}
                    </p>
                </div>

                <img
                    src={advanced}
                    alt="Advanced Plan"
                    className="max-w-[500px] w-full"
                />
            </div>

            <Link
                to="/order"
                className={`flex items-center mt-8 ${
                    isDarkMode ? "text-lightGreen" : "text-darkGreen"
                }`}
            >
                <FaArrowLeft className="mr-2" />
                {t("common.back")}
            </Link>
        </div>
    );
};

export default AdvancedPlan;
