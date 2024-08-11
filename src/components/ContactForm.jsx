import { useForm } from 'react-hook-form'
import { useState } from 'react';

export const ContactForm = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit = data => {
        console.log('Form Data:', data);
        setIsSubmitted(true);
        reset();
    }

    return (
        <div className='relative flex justify-center items-center bg-Color-Green-Light p-6 md:p-20 md:min-h-screen '>
            {isSubmitted && (
                <div className="absolute top-4 flex flex-col gap-2 bg-Color-Grey-Dark text-white text-sm p-4 rounded-md shadow-lg z-10">
                    <div className='flex gap-2 items-center'>
                        <img src='/icon-checkbox-check.svg' className='w-4 h-4 bg-Color-White border-Color-White border-2 rounded-full' alt="icon-check" />
                        <p className="font-kightbold">Message Sent!</p>
                    </div>
                    <p className='text-xs'>Thanks for completing the form. We'll be in touch soon!</p>
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className='relative flex flex-col bg-Color-White p-6 md:p-8 rounded-md gap-4'>
                <h1 className='text-2xl font-semibold'>Contact Us</h1>
                <div className='flex flex-col gap-6'>

                    <div className='flex flex-col gap-3 md:flex-row'>
                        {/* First Name */}
                        <div className='flex flex-col w-full gap-2'>
                            <label
                                htmlFor="firstName"
                                className='inline-flex gap-2 text-sm font-medium text-Color-Grey-Dark'>
                                First Name
                                <span className='text-Color-Green-Medium'>*</span>
                            </label>
                            <input type="text"
                                id="firstName"
                                {...register('firstName', { required: 'This field is required' })}
                                className={`focus:outline-none ring-1 ring-Color-Grey-Medium rounded-md py-2 px-6 focus:ring-Color-Green-Medium ${errors.firstName ? 'border-Color-Red' : ''}`}
                                aria-invalid={errors.firstName ? "true" : "false"}
                            />
                            {errors.firstName && (
                                <p className='text-xs text-Color-Red'>{errors.firstName.message}</p>
                            )}
                        </div>

                        {/* Last Name */}
                        <div className='flex flex-col w-full gap-2'>
                            <label
                                htmlFor="lastName"
                                className='inline-flex gap-2 text-sm font-medium text-Color-Grey-Dark'>
                                Last Name
                                <span className='text-Color-Green-Medium'>*</span>
                            </label>
                            <input type="text" id="lastName"
                                {...register('lastName', { required: 'This field is required' })}
                                className={`focus:outline-none ring-1 ring-Color-Grey-Medium rounded-md py-2 px-6 focus:ring-Color-Green-Medium ${errors.lastName ? 'border-Color-Red' : ''}`}
                                aria-invalid={errors.firstName ? "true" : "false"}
                            />
                            {errors.lastName && (
                                <p className='text-xs text-Color-Red'>{errors.lastName.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Email */}
                    <div className='flex flex-col gap-2'>
                        <label
                            htmlFor="email"
                            className='inline-flex gap-2 text-sm font-medium text-Color-Grey-Dark'>
                            Email Address
                            <span className='text-Color-Green-Medium'>*</span>
                        </label>
                        <input type="email" id="email"
                            {...register('email', {
                                required: 'This field is required',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Please enter a valid email address'
                                },
                            })}
                            className={`focus:outline-none ring-1 ring-Color-Grey-Medium rounded-md py-2 px-6 focus:ring-Color-Green-Medium ${errors.email ? 'border-Color-Red' : ''}`}
                            aria-invalid={errors.lastName ? "true" : "false"}
                        />
                        {errors.email && (
                            <p className='text-xs text-Color-Red'>{errors.email.message}</p>
                        )}
                    </div>

                    {/* Query Type */}
                    <div className='flex flex-col gap-3 pb-2 md:pb-0'>
                        <label className='inline-flex gap-2 text-sm font-medium text-Color-Grey-Dark'>Query Type<span className='text-Color-Green-Medium'>*</span></label>
                        <div className='flex flex-col gap-3 md:flex-row'>
                            <label className='flex items-center gap-2 ring-1 ring-Color-Grey-Medium rounded-md py-2 pl-6 pr-24 cursor-pointer text-Color-Grey-Dark has-[:checked]:bg-Color-Green-Light has-[checked]:ring-Color-Green-Medium' htmlFor="general-enquiry">
                                <input
                                    type="radio"
                                    id='general-enquiry'
                                    className='cursor-pointer accent-Color-Green-Medium'
                                    {...register('queryType', { required: 'Please select a query type' })}
                                    value="General Enquiry"
                                />
                                General Enquiry
                            </label>
                            <label className='flex items-center gap-2 ring-1 ring-Color-Grey-Medium rounded-md py-2 pl-6 pr-24 cursor-pointer text-Color-Grey-Dark has-[:checked]:bg-Color-Green-Light has-[checked]:ring-Color-Green-Medium' htmlFor="support-request">
                                <input
                                    type="radio"
                                    id='support-request'
                                    className='cursor-pointer accent-Color-Green-Medium'
                                    {...register('queryType', { required: 'Please select a query type' })}
                                    value="support-request"
                                />
                                Support Request
                            </label>
                        </div>
                        {errors.queryType && <p className='text-xs text-Color-Red'>{errors.queryType.message}</p>}
                    </div>
                </div>

                {/* Message */}
                <div className='flex flex-col gap-2'>
                    <label
                        htmlFor="message"
                        className='inline-flex gap-2 text-sm font-medium text-Color-Grey-Dark'>
                        Message
                        <span className='text-Color-Green-Medium'>*</span>
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        {...register('userMessage', { required: 'This field is required' })}
                        className={`focus:outline-none ring-1 ring-Color-Grey-Medium rounded-md py-4 px-6 focus:ring-Color-Green-Medium ${errors.userMessage ? 'border-Color-Red' : ''}`}
                        aria-invalid={errors.userMessage ? "true" : "false"}
                    ></textarea>
                    {errors.userMessage && <p className='text-xs text-Color-Red'>{errors.userMessage.message}</p>}
                </div>

                {/* Consent */}
                <div className='flex flex-col gap-4 pt-2 pb-4'>
                    <div className='flex gap-2'>
                        <input
                            type="checkbox"
                            className='accent-Color-Green-Medium'
                            {...register('consent', { required: 'To submit this form, please consent to being contacted' })}
                            aria-invalid={errors.consent ? "true" : "false"}
                        />
                        <label
                            className='inline-flex gap-2 text-sm font-medium text-Color-Grey-Dark'>
                            I consent to being contacted by the team
                            <span className='text-Color-Green-Medium'>*</span>
                        </label>
                    </div>
                    {errors.consent && <p className='text-xs text-Color-Red'>{errors.consent.message}</p>}
                </div>

                <button
                    type="submit"
                    className='bg-Color-Green-Medium text-Color-White text-sm font-bold py-3 rounded-md hover:bg-Color-Grey-Dark'>
                    Submit
                </button>
            </form >
        </div>

    )
}
