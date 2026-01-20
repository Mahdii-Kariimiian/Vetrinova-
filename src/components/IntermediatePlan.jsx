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
                    {/* Services */}
                    <section className="mb-12">
                        <p className="mb-6 text-3xl">
                            {t("intermediatePlan.price")}{" "}
                            <strong>€899</strong>
                        </p>

                        <h2 className="text-2xl font-semibold">
                            {t("intermediatePlan.servicesTitle")}
                        </h2>

                        <ul className="list-disc pl-6 mt-4 space-y-3">
                            <li>{t("intermediatePlan.services.s1")}</li>
                            <li>{t("intermediatePlan.services.s2")}</li>
                            <li>{t("intermediatePlan.services.s3")}</li>
                            <li>{t("intermediatePlan.services.s4")}</li>
                            <li>{t("intermediatePlan.services.s5")}</li>
                        </ul>
                    </section>

                    {/* Why */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold">
                            {t("intermediatePlan.whyTitle")}
                        </h2>

                        <ul className="list-disc pl-6 mt-4 space-y-3">
                            <li>{t("intermediatePlan.why.w1")}</li>
                            <li>{t("intermediatePlan.why.w2")}</li>
                            <li>{t("intermediatePlan.why.w3")}</li>
                        </ul>
                    </section>

                    {/* Notes */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold">
                            {t("intermediatePlan.notesTitle")}
                        </h2>

                        <ul className="list-disc pl-6 mt-4 space-y-3">
                            <li>{t("intermediatePlan.notes.n1")}</li>
                            <li>{t("intermediatePlan.notes.n2")}</li>
                            <li>{t("intermediatePlan.notes.n3")}</li>
                        </ul>
                    </section>
                </div>

                <img
                    src={intermediateImage}
                    alt="Intermediate Plan"
                    className="max-w-[500px] w-full"
                />
            </div>

            <Link to="/order" className="flex items-center text-darkGreen">
                <FaArrowLeft className="mr-2" />
                {t("common.back")}
            </Link>
        </div>
    );
};

export default IntermediatePlan;
