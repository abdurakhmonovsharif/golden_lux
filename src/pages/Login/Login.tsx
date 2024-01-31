// <icons
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
// icons>
import { FormEvent, useState } from "react";
import { Input } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import CountryCode from "../../helpers/countryCode/CountryCode";
import Loading from "../../helpers/Loading/Loading";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin, } from "@react-oauth/google";
const Login = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const { handleSubmit, register, setValue, formState: { errors }, } = useForm()
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isPassword, setIsPassword] = useState(false);
    const [isPhoneType, setIsPhoneType] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const handleOnSubmit = (data: any) => {
        console.log(data);
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            navigate("/sign-up")
        }, 2000)
    }
    const handleCountryCodeChange = (code: string) => {
        setPhoneNumber("");
        setValue("phone_number", "");
        setPhoneNumber(code);
    };

    const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.value;
        const cleanedValue = inputValue.replace(/\D/g, '');
        const formattedPhoneNumber = cleanedValue.length > 0 ? `+${cleanedValue}` : '';
        setPhoneNumber(formattedPhoneNumber);
    };
    const handleLoginWithGoogle = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });

    return (
        <div className="max-w-dw mx-auto h-screen flex items-center p-5">
            <div className="w-[568px] max-h-[579px] shadow-md border border-black/10 m-auto rounded-lg p-5">
                <div className="pb-6 text-center">
                    <span className="text-g_text_color font-semibold text-xl">
                        {t("Login.title")}
                    </span>
                </div>
                <span className="text-g_text_color font-medium text-[20px] tracking-[0.44px] leading-[118.182%]">{t("Login.paragraph")}
                </span>
                <div className="space-y-6 mt-2 w-full ">
                    <form className="w-full" onSubmit={handleSubmit(handleOnSubmit)}>
                        <div className="py-4 w-full ">
                            {/*Phone number */}
                            {
                                isPhoneType ?
                                    <div>
                                        <CountryCode label={t("Login.select_label")} onChange={handleCountryCodeChange} />
                                        <input
                                            value={phoneNumber}
                                            onInput={handleInputChange}
                                            type="text"
                                            maxLength={15}
                                            {...register('phone_number', {
                                                required: t("Login.form_validation.phone_number_required"),
                                                pattern: {
                                                    value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                                                    message: t("Login.form_validation.phone_number_message"),
                                                },
                                            })}
                                            placeholder={t("Login.input_placeholder")}
                                            className={` ${errors.phone_number && "border border-[#F31260] placeholder:text-[#F31260]"} w-full text-sm p-3 py-4 border outline-none rounded-b-lg border-t-0`}
                                        />
                                        <p className="text-tiny text-danger p-1">{errors.phone_number && errors.phone_number.message as string}</p>
                                        <p className="p-1 text-[#717171] w-full font-Abhaya text-xs leading-4 tracking-[0.144px]">{t("Login.input_bottom_text")} <u className="text-g_text_color font-bold">Privacy Policy</u></p>
                                    </div>
                                    :
                                    // Email 
                                    <div className="w-full space-y-3">
                                        <Input
                                            type="email"
                                            {...register('email', {
                                                required: t("Login.form_validation.email_required"),
                                                pattern: {
                                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                    message: t("Login.form_validation.email_message"),
                                                },
                                            })}
                                            isInvalid={!!errors.email}
                                            label={t("Login.email_placeholder")}
                                            errorMessage={errors.email && errors.email.message as string}
                                            variant="flat"
                                            classNames={{ base: "bg-white text-base", inputWrapper: ` border ${errors.email && "border-[#F31260]"} bg-white !rounded-lg  hover:!bg-white focus:!bg-white focus-within:!bg-white`, input: "!text-base !text-g_text_color" }}
                                        />
                                        <Input
                                            type={isPassword ? "text" : "password"}
                                            label={t("Login.password_placeholder")}
                                            variant="flat"
                                            isInvalid={!!errors.password}
                                            {...register("password", {
                                                required: t("Login.form_validation.password_required"),
                                                minLength: {
                                                    value: 8,
                                                    message: t("Login.form_validation.password_message"),
                                                },
                                            })}
                                            endContent={
                                                <button type="button" className="mb-2" onClick={() => setIsPassword(!isPassword)}>
                                                    {isPassword ?
                                                        <FiEyeOff className="text-lg text-g_text_color" />
                                                        :
                                                        <FiEye className="text-lg text-g_text_color" />}
                                                </button>
                                            }
                                            errorMessage={errors.password && errors.password.message as string}
                                            classNames={{ base: "bg-white text-base ", inputWrapper: `${errors.email && "border-[#F31260]"} border bg-white !rounded-lg  hover:!bg-white focus:!bg-white focus-within:!bg-white`, input: "!text-base !text-g_text_color" }}
                                        />
                                    </div>
                            }
                        </div>
                        <button className="sign_button text-white w-full h-[52px] capitalize">
                            {
                                isLoading ?
                                    <Loading /> :
                                    t("Login.Continue")
                            }
                        </button>
                    </form>
                    <div className='flex items-center w-full justify-between px-1'>
                        <hr className='w-[43%] bg-[#DBDBDB]' />
                        <span className='font-normal text-xs leading-4 tracking-[0.48px] text-[#737373]'>{t("Login.or")}</span>
                        <hr className='w-[43%] bg-[#DBDBDB]' />
                    </div>
                    <div className="space-y-6">
                        <button onClick={() => handleLoginWithGoogle()} className="py-[14px] flex items-center  px-6 text-g_text_color w-full border border-g_text_color rounded-lg">
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
