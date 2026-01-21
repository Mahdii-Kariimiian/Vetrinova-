import { useEffect } from "react";
import intermediateImage from "../assets/intermediate.jpeg";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useLanguage } from "../i18n/LanguageContext";

const IntermediatePlan = ({ isDarkMode }) => {
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
                    {t("intermediatePlan.title")}
                </h1>
                <p
                    className={`text-lg mt-2 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                    {t("intermediatePlan.subtitle")}
                </p>
            </header>

            <div className="flex flex-col-reverse md:flex-row gap-10 items-start">
                <div>
                    {/* Price */}
                    <p className="mb-6 text-3xl font-semibold">
                        {t("intermediatePlan.price")}
                    </p>

                    {/* Services */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold">
                            {t("intermediatePlan.servicesTitle")}
                        </h2>

                        <ul className="list-disc pl-6 mt-4 space-y-3">
                            {Object.values(
                                t("intermediatePlan.services", {
                                    returnObjects: true,
                                })
                            ).map((service, index) => (
                                <li key={index}>{service}</li>
                            ))}
                        </ul>
                    </section>

                    {/* Excluded Costs */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold">
                            {t("intermediatePlan.excludedCostsTitle")}
                        </h2>

                        <ul className="list-disc pl-6 mt-4 space-y-3">
                            {Object.values(
                                t("intermediatePlan.excludedCosts", {
                                    returnObjects: true,
                                })
                            ).map((cost, index) => (
                                <li key={index}>{cost}</li>
                            ))}
                        </ul>
                    </section>

                    {/* Why */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold">
                            {t("intermediatePlan.whyTitle")}
                        </h2>

                        <ul className="list-disc pl-6 mt-4 space-y-3">
                            {Object.values(
                                t("intermediatePlan.why", {
                                    returnObjects: true,
                                })
                            ).map((reason, index) => (
                                <li key={index}>{reason}</li>
                            ))}
                        </ul>
                    </section>

                    {/* Notes */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold">
                            {t("intermediatePlan.notesTitle")}
                        </h2>

                        <ul className="list-disc pl-6 mt-4 space-y-3">
                            {Object.values(
                                t("intermediatePlan.notes", {
                                    returnObjects: true,
                                })
                            ).map((note, index) => (
                                <li key={index}>{note}</li>
                            ))}
                        </ul>
                    </section>
                </div>

                <img
                    src={intermediateImage}
                    alt="Intermediate Plan"
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

export default IntermediatePlan;
