import { useForm } from 'react-hook-form'

export const ContactForm = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        console.log('Form Data:', data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mx-auto bg-Color-White p-8 rounded-md gap-4'>
            <h1 className='text-2xl font-semibold'>Contact Us</h1>
            <div className='flex flex-col gap-6'>

                <div className='flex gap-3'>
                    {/* First Name */}
                    <div className='flex flex-col gap-2'>
                        <label
                            htmlFor="firstName"
                            className='inline-flex gap-2 text-xs font-medium text-Color-Grey-Dark'>
                            First Name
                            <span className='text-Color-Green-Medium'>*</span>
                        </label>
                        <input type="text"
                            id="firstName"
                            {...register('firstName', { required: 'This field is required' })}
                            className={`border-2 rounded-md py-2 px-4 ${errors.firstName ? 'border-red-600' : ''}`}
                        />
                        {errors.firstName && (
                            <p className='text-xs text-Color-Red'>{errors.firstName.message}</p>
                        )}
                    </div>

                    {/* Last Name */}
                    <div className='flex flex-col gap-2'>
                        <label
                            htmlFor="lastName"
                            className='inline-flex gap-2 text-xs font-medium text-Color-Grey-Dark'>
                            Last Name
                            <span className='text-Color-Green-Medium'>*</span>
                        </label>
                        <input type="text" id="lastName"
                            {...register('lastName', { required: 'This field is required' })}
                            className={`border-2 rounded-md py-2 px-4 ${errors.lastName ? 'border-red-600' : ''}`}
                        />
                        {errors.lastName && (
                            <p className='text-xs text-Color-Red'>{errors.lastName.message}</p>
                        )}
                    </div>
                </div>

                {/* Email */}
                <div className='flex flex-col gap-2'>
                    <label
                        htmlFor="lastName"
                        className='inline-flex gap-2 text-xs font-medium text-Color-Grey-Dark'>
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
                        className={`border-2 rounded-md py-2 px-4 ${errors.lastName ? 'border-Color-Red' : ''}`}
                    />
                    {errors.email && (
                        <p className='text-xs text-Color-Red'>{errors.email.message}</p>
                    )}
                </div>

                {/* Query Type */}
                <div className='flex flex-col gap-3'>
                    <label className='inline-flex gap-2 text-xs font-medium text-Color-Grey-Dark'>Query Type<span className='text-Color-Green-Medium'>*</span></label>
                    <div className='flex gap-3'>
                        <div className='flex gap-2 border-2 rounded-md py-2 pl-8 pr-20'>
                            <input
                                type="radio"
                                id='general-enquiry'
                                {...register('queryType', { required: 'Please select a query type' })}
                                value="General Enquiry"
                            />
                            <label htmlFor="general-enquiry" className='text-Color-Grey-Dark text-sm'>
                                General Enquiry
                            </label>
                        </div>
                        <div className='flex gap-2 border-2 rounded-md py-2 pl-8 pr-20'>
                            <input
                                type="radio"
                                id='support-request'
                                {...register('queryType', { required: 'Please select a query type' })}
                                value="support-request"
                            />
                            <label htmlFor="support-request" className='text-Color-Grey-Dark text-sm'>
                                Support Request
                            </label>
                        </div>
                    </div>
                        {errors.queryType && <p className='text-xs text-Color-Red'>{errors.queryType.message}</p>}
                </div>
            </div>

            {/* Nessage */}
            <div className='flex flex-col gap-2'>
                <label
                    htmlFor="message"
                    className='inline-flex gap-2 text-xs font-medium text-Color-Grey-Dark'>
                    Message
                    <span className='text-Color-Green-Medium'>*</span>
                </label>
                <textarea
                    id="message"
                    rows="3"
                    {...register('message', { required: 'This field is required' })}
                    className={`border-2 rounded-md py-2 px-4 ${errors.message ? 'border-red-600' : ''}`}
                ></textarea>
                {errors.message && <p className='text-xs text-Color-Red'>{errors.message.message}</p>}
            </div>

            {/* Consent */}
            <div className='flex flex-col gap-4 pt-2 pb-4'>
                <div className='flex gap-2'>
                    <input
                        type="checkbox"
                        {...register('consent', { required: 'To submit this form, please consent to being contacted' })}
                        className=""
                    />
                    <label
                        className='inline-flex gap-2 text-xs font-medium text-Color-Grey-Dark'>
                        I consent to being contacted by the team
                        <span className='text-Color-Green-Medium'>*</span>
                    </label>
                </div>
                {errors.message && <p className='text-xs text-Color-Red'>{errors.consent.message}</p>}
            </div>

            <button
                type="submit"
                className='bg-Color-Green-Medium text-Color-White text-sm font-bold py-3 rounded-md'>
                Submit
            </button>
        </form >
    )
}
