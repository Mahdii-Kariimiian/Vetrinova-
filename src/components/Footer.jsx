import { Link } from "react-router-dom";
import { FaShopify } from "react-icons/fa";
import { useLanguage } from "../i18n/LanguageContext";

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="w-full text-white py-10 md:px-10 px-4 mt-12 bg-darkGreen">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo & About */}
                <div>
                    <div className="flex items-center space-x-3">
                        <FaShopify className="text-4xl text-white" />
                        <div className="text-md font-bold space-y-1 text-white">
                            <h2>{t("footer.aboutTitle")}</h2>
                            <h3>{t("footer.aboutSubtitle")}</h3>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-200">
                        {t("footer.aboutDesc")}
                    </p>

                    <Link
                        to="/order"
                        className="mt-6 inline-block bg-white text-black py-2 px-6 rounded-lg hover:bg-lightGreen transition"
                    >
                        {t("footer.cta")}
                    </Link>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold mb-4">
                        {t("footer.linksTitle")}
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/about" className="hover:text-lightGreen">
                                {t("nav.about")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/projects"
                                className="hover:text-lightGreen"
                            >
                                {t("nav.projects")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="hover:text-lightGreen"
                            >
                                {t("nav.contact")}
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Plans */}
                <div>
                    <h3 className="font-semibold mb-4">
                        {t("footer.plansTitle")}
                    </h3>
                    <ul className="flex flex-col space-y-2">
                        <li>
                            <Link
                                to="/order/basic"
                                className="hover:text-lightGreen"
                            >
                                Basic
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/order/intermediate"
                                className="hover:text-lightGreen"
                            >
                                Intermediate
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/order/advanced"
                                className="hover:text-lightGreen"
                            >
                                Advanced
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="font-semibold mb-4">
                        {t("footer.servicesTitle")}
                    </h3>
                    <ul className="flex flex-col space-y-2">
                        <li>{t("footer.services.s1")}</li>
                        <li>{t("footer.services.s2")}</li>
                        <li>{t("footer.services.s3")}</li>
                        <li>{t("footer.services.s4")}</li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t mt-6 pt-4 text-center text-gray-200">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} {t("footer.copyright")}
                </p>
                <p className="text-xs mt-2">{t("footer.credit")}</p>
            </div>
        </footer>
    );
};

export default Footer;
