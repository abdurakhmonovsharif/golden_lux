import { FormEvent, useState } from "react";
import { Input } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import CountryCode from "../../helpers/countryCode/CountryCode";
import Loading from "../../helpers/Loading/Loading";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// icons
import { FcGoogle } from "react-icons/fc";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
const SignUp = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const { handleSubmit, register, setValue, getValues, formState: { errors }, } = useForm()
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isPassword, setIsPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false)
    const handleOnSubmit = (data: any) => {
        console.log(data);
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            navigate("/login")
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
    return (
        <div className="max-w-dw mx-auto h-screen flex items-center lg:p-5 p-2">
            <div className="lg:w-[568px]  shadow-md border border-black/10 m-auto rounded-lg p-5">
                <div className="pb-6 text-center">
                    <span className="text-g_text_color font-semibold text-xl">
                        {t("Register.title")}
                    </span>
                </div>
                <span className="text-g_text_color font-medium text-[20px] tracking-[0.44px] leading-[118.182%]">{t("Login.paragraph")}
                </span>
                <div className="space-y-4 mt-2 w-full ">
                    <form className="w-full" onSubmit={handleSubmit(handleOnSubmit)}>
                        <div className="py-4 w-full ">
                            {/*Phone number */}
                            <div className="w-full space-y-2">
                                <div>
                                    <Input
                                        type="fullname"
                                        {...register('fullname', {
                                            required: t("Register.form_validation.fullname_required"),
                                        })}
                                        label={t("Register.fullname_input_placeholder")}
                                        errorMessage={errors.fullname && errors.fullname.message as string}
                                        variant="flat"
                                        classNames={{ base: "bg-white text-base", inputWrapper: " border bg-white !rounded-lg  hover:!bg-white focus:!bg-white focus-within:!bg-white", input: "!text-base !text-g_text_color" }}
                                    />
                                    <p className="p-1 text-[#717171] w-full font-Abhaya text-xs leading-4 tracking-[0.144px]">{t("Register.fullname_input_bottom_text")}</p>
                                </div>
                                <div>
                                    <Input
                                        type="email"
                                        {...register('email', {
                                            required: t("Login.form_validation.email_required"),
                                            pattern: {
                                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                message: t("Login.form_validation.email_message"),
                                            },
                                        })}
                                        label={t("Login.email_placeholder")}
                                        errorMessage={errors.email && errors.email.message as string}
                                        variant="flat"
                                        classNames={{ base: "bg-white text-base", inputWrapper: " border bg-white !rounded-lg  hover:!bg-white focus:!bg-white focus-within:!bg-white", input: "!text-base !text-g_text_color" }}
                                    />
                                    <p className="p-1 text-[#717171] w-full font-Abhaya text-xs leading-4 tracking-[0.144px]">{t("Register.email_input_bottom_text")}</p>
                                </div>
                                <div>
                                    <CountryCode label={t("Login.select_label")} onChange={handleCountryCodeChange} />
                                    <input
                                        value={phoneNumber}
                                        maxLength={15}
                                        onInput={handleInputChange}
                                        type="text"
                                        {...register('phone_number', {
                                            required: t("Login.form_validation.phone_number_required"),
                                            pattern: {
                                                value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                                                message: t("Login.form_validation.phone_number_message"),
                                            },
                                        })}
                                        placeholder={t("Login.input_placeholder")}
                                        className="w-full text-sm p-3 py-4 border outline-none rounded-b-lg border-t-0"
                                    />
                                    <p className="text-tiny text-danger p-1">{errors.phone_number && errors.phone_number.message as string}</p>
                                    <p className="p-1 text-[#717171] w-full font-Abhaya text-xs leading-4 tracking-[0.144px]">{t("Login.input_bottom_text")} <u className="text-g_text_color font-bold">Privacy Policy</u></p>
                                </div>
                                <Input
                                    type={isPassword ? "text" : "password"}
                                    label={t("Login.password_placeholder")}
                                    variant="flat"
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
                                    classNames={{ base: "bg-white text-base ", inputWrapper: " border bg-white !rounded-lg  hover:!bg-white focus:!bg-white focus-within:!bg-white", input: "!text-base !text-g_text_color" }}
                                />
                                <Input
                                    type={isPassword ? "text" : "password"}
                                    label={t("Register.password_confirm_placeholder")}
                                    variant="flat"
                                    isInvalid={confirmPassword}
                                    onInput={({ currentTarget }) => {
                                        console.log(currentTarget.value === getValues("password"));
                                        setConfirmPassword(currentTarget.value !== getValues("password"))
                                    }}
                                    {...register("confirm_password", {
                                        required: t("Register.form_validation.password_confirm_message"),
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
                                    errorMessage={errors.confirm_password && errors.confirm_password.message as string}
                                    classNames={{ base: "bg-white text-base focus-within:!outline-red-500", inputWrapper: `border  ${confirmPassword ? "border-[#F31260]" : ""} bg-white !rounded-lg  hover:!bg-white focus-within:!bg-white `, input: "!text-base !text-g_text_color" }}
                                />
                            </div>
                        </div>
                        <button className="sign_button text-white w-full h-[52px]">
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
                    <button className="py-[14px] flex items-center  px-6 text-g_text_color w-full border border-g_text_color rounded-lg">
                        <FcGoogle className="text-xl" />
                        <span
                            className="w-full text-center mr-2">
                            {t("Login.google_text")}
                        </span>
                    </button>
                </div>
            </div >
        </div >
    );
};

export default SignUp;
