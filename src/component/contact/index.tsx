import React from 'react'
import { ContactStyle } from './style';
import Image from 'next/image'
import { Frame } from '../../../public/image';
import { useForm, SubmitHandler } from "react-hook-form";


 const Contact = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

  return (
    <ContactStyle>
      <section>
        <div>
          <Image src={Frame} alt='img'/>
        </div>
        <div className="form">
          <h4>Protect Your Data Today: <br/>Request a Free Consultation</h4>
          <form>

          </form>
        </div>
      </section>
    </ContactStyle>
  )
}

export default Contact;
