import { useForm } from 'react-hook-form'

export const ContactForm = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        console.log('Form Data:', data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex'>
                {/* First Name */}
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName"
                        {...register('firstName', { required: 'This field is required' })}
                        className={`border-2 ${errors.firstName ? 'border-red-600' : ''}`}
                    />
                    {errors.firstName && (
                        <p>{errors.firstName.message}</p>
                    )}
                </div>

                {/* Last Name */}
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName"
                        {...register('lastName', { required: 'This field is required' })}
                        className={`border-2 ${errors.lastName ? 'border-red-600' : ''}`}
                    />
                    {errors.lastName && (
                        <p>{errors.lastName.message}</p>
                    )}
                </div>
            </div>

            <button type="submit">Submit</button>
        </form >
    )
}
