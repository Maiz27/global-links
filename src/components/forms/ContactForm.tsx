'use client';
import { useState } from 'react';
import CTA from '@/components/CTA/CTA';
import { contactFormFields } from '@/lib/constants';

const ContactForm = () => {
  const initialState = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };
  const [formData, setFormData] = useState<Record<string, string>>({
    ...initialState,
  });
  const [result, setResult] = useState<string | null>(null);
  // const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // const validEmailRegex =
  //   '[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+';

  const sendEmail = async (e: { preventDefault: () => void }) => {
    // e.preventDefault();
    // setResult(null);
    // const { name, email, message } = formData;
    // if (!name || !email || !message) {
    //   setResult('Please fill out all form inputs');
    //   return;
    // }
    // if (!email.match(validEmailRegex)) {
    //   setResult('Invalid Email!');
    //   return;
    // }
    // try {
    //   setIsLoading(true);
    //   const response = await fetch('/api/send', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   console.log('response', response);
    //   if (response.status === 200) {
    //     setFormData({ ...initialState });
    //     setResult('Message Sent Successfully!');
    //   } else {
    //     setResult('An Error Occurred, try again later!');
    //   }
    // } catch (error) {
    //   setResult('An Error Occurred, try again later!');
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <form
      onSubmit={sendEmail}
      className='w-4/5 lg:w-2/5 flex flex-col items-center'
    >
      {contactFormFields.map(
        ({ name, icon, label, placeholder, required, type }, idx) => {
          const Icon = icon;
          return (
            <div
              // delay={idx * 0.2}
              key={name}
              className='form-control w-full max-w-sm focus-within:text-accent transition-colors mt-2'
            >
              <label className='label justify-start gap-2'>
                <Icon />
                <span className='label-text text-inherit'>{label}</span>
              </label>
              {type === 'textarea' ? (
                <textarea
                  placeholder={placeholder}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required={required}
                  className='input input-bordered focus-visible:outline-accent transition-colors w-full max-w-sm h-40'
                />
              ) : (
                <input
                  type={type}
                  placeholder={placeholder}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required={required}
                  className='input input-bordered focus-visible:outline-accent transition-colors w-full max-w-sm'
                />
              )}
            </div>
          );
        }
      )}

      {result && <p className='p-4'>{result}</p>}

      <div className='mt-4'>
        <CTA
          text='Send Message'
          isBtn={true}
          btnType='submit'
          bg='accent'
          textColor='base-100'
          // loading={isLoading}
        />
      </div>
    </form>
  );
};

export default ContactForm;
