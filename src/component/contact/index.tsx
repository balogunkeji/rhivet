import React from 'react'
import { ContactStyle } from './style';
import Image from 'next/image'
import { Frame } from '../../../public/image';
import { useForm, SubmitHandler } from "react-hook-form";
import RhButton from '@/component/button'

type Inputs = {
  name: string,
  email: string,
  phoneNumber: string,
  message: string,
};
 const Contact = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <ContactStyle>
      <section>
        <div className='img'>
          <Image src={Frame} alt='img'/>
        </div>
        <div className="form">
          <h4>Protect Your Data Today: <br/>Request a Free Consultation</h4>
          <form  onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name", { required: true })} placeholder='Your Name *'/>
          {errors.name && <span>This field is required</span>}
          <input {...register("email", { required: true })} type='email' placeholder='Your email *'/>
          {errors.email && <span>This field is required</span>}
          <input {...register("phoneNumber", { required: true })} type='tel'  placeholder='Phone Number *'/>
          {errors.phoneNumber && <span>This field is required</span>}
          <textarea {...register("message", { required: true })} />
          {errors.message && <span>This field is required</span>}
          <RhButton text='Request Free Consultation' height='45px' width='250px'/>
          </form>
        </div>
      </section>
    </ContactStyle>
  )
}

export default Contact;