import { useState } from "react";
import CountryCode from "../../helpers/countryCode/CountryCode";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { Input } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
const Login = () => {
    const { t } = useTranslation();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isPhoneType, setIsPhoneType] = useState(true);

    return (
        <div className="max-w-dw mx-auto h-screen flex items-center ">
            <div className="w-[568px] shadow-md border border-black/10 m-auto rounded-lg p-5">
                <div className="pb-6 text-center">
                    <span className="text-g_text_color font-semibold text-xl">
                        {t("Login.title")}
                    </span>
                </div>
                <span className="text-g_text_color font-normal text-[20px] tracking-[0.44px] leading-[118.182%]">{t("Login.paragraph")}
                </span>
                <div className="space-y-6 mt-2 w-full">
                    <form className="w-full">
                        <div className="py-4 w-full">
                            {/*Phone number */}
                            {
                                isPhoneType ?
                                    <div>
                                        <CountryCode label={t("Login.select_label")} onChange={(code) => setPhoneNumber(code)} />
                                        <input
                                            defaultValue={phoneNumber}
                                            type="text"
                                            placeholder={t("Login.input_placeholder")}
                                            className="w-full text-sm p-3 py-4 border outline-none rounded-b-lg border-t-0"
                                        />
                                        <p className="p-1 text-[#717171] w-full font-Abhaya text-xs leading-4 tracking-[0.144px]">{t("Login.input_bottom_text")} <u className="text-g_text_color font-bold">Privacy Policy</u></p>
                                    </div>
                                    :
                                    // Email 
                                    <div className="w-fully space-y-[14px]">
                                        <Input
                                            type="text"
                                            label={t("Login.email_placeholder")}
                                            variant="flat"
                                            classNames={{ base: "bg-white text-base", inputWrapper: " border bg-white !rounded-lg  hover:!bg-white focus:!bg-white focus-within:!bg-white", input: "!text-base !text-g_text_color" }}
                                        />
                                        <Input
                                            type="text"
                                            label={t("Login.password_placeholder")}
                                            variant="flat"
                                            endContent={
                                                <u className="text-xs mb-2 cursor-pointer font-medium">Show</u>
                                            }
                                            classNames={{ base: "bg-white text-base ", inputWrapper: " border bg-white !rounded-lg  hover:!bg-white focus:!bg-white focus-within:!bg-white", input: "!text-base !text-g_text_color" }}
                                        />
                                    </div>
                            }
                        </div>
                        <button className="sign_button text-white w-full">{t("Login.Continue")}</button>
                    </form>
                    <div className='flex items-center w-full justify-between px-1'>
                        <hr className='w-[43%] bg-[#DBDBDB]' />
                        <span className='font-normal text-xs leading-4 tracking-[0.48px] text-[#737373]'>{t("Login.or")}</span>
                        <hr className='w-[43%] bg-[#DBDBDB]' />
                    </div>
                    <div className="space-y-6">
                        <button className="py-[14px] flex items-center  px-6 text-g_text_color w-full border border-g_text_color rounded-lg">
                            <FcGoogle className="text-xl" />
                            <span
                                className="w-full text-center mr-2">
                                {t("Login.google_text")}
                            </span>
                        </button>
                        {isPhoneType && <button onClick={() => setIsPhoneType(!isPhoneType)} className="py-[14px] flex items-center px-6 text-g_text_color w-full border border-g_text_color rounded-lg">
                            <HiOutlineMail className="text-xl text-g_text_color" />
                            <span className="w-full text-center mr-2">                                {t("Login.email_text")}
                            </span>
                        </button>}
                        {!isPhoneType && <button onClick={() => setIsPhoneType(!isPhoneType)} className="py-[14px] flex items-center px-6 text-g_text_color w-full border border-g_text_color rounded-lg">
                            <IoCallOutline className="text-xl text-g_text_color" />
                            <span className="w-full text-center mr-2">
                                {t("Login.phone_text")}
                            </span>
                        </button>}
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Login;
