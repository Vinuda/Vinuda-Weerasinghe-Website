import React, { useState } from 'react';

const FormInput: React.FC<{ id: string; type: string; placeholder: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; }> = 
({ id, type, placeholder, value, onChange }) => (
    <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="w-full bg-transparent border border-brand-border px-4 py-3 text-brand-light placeholder-brand-gray focus:outline-none focus:ring-1 focus:ring-brand-light font-serif"
    />
);

const FormTextarea: React.FC<{ id: string; placeholder: string; value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; }> = 
({ id, placeholder, value, onChange }) => (
    <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        rows={6}
        className="w-full bg-transparent border border-brand-border px-4 py-3 text-brand-light placeholder-brand-gray focus:outline-none focus:ring-1 focus:ring-brand-light resize-none font-serif"
    />
);

const ContactPage: React.FC = () => {
    // To make this form work, create a free account on https://formspree.io/,
    // create a new form that forwards to vinudaweerasinghe@gmail.com,
    // and replace 'YOUR_FORM_ID' with your actual form ID.
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        
        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setFormData({ name: '', email: '', subject: '', message: '' });
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('error');
        }
    };
    
    if (status === 'success') {
        return (
            <div className="text-center font-serif text-2xl text-brand-light">
                Thank you for your message!
            </div>
        );
    }

    return (
        <div className="w-full max-w-2xl">
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
                <p className="font-serif text-2xl text-brand-light pb-2">Let's get in touch</p>
                <FormInput id="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} />
                <FormInput id="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <FormInput id="subject" type="text" placeholder="Subject" value={formData.subject} onChange={handleChange} />
                <FormTextarea id="message" placeholder="Message..." value={formData.message} onChange={handleChange} />
                
                <div className="flex justify-between items-center">
                    <div className="flex-grow">
                         {status === 'error' && (
                            <p className="text-red-500 text-sm font-sans text-left">
                                Oops! Something went wrong. Please try again.
                            </p>
                        )}
                        {FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID') && status !== 'error' && (
                            <p className="text-amber-400/80 text-sm font-sans text-left">
                                <b>Note:</b> Contact form not yet connected.
                            </p>
                        )}
                   </div>
                   <button
                       type="submit"
                       disabled={status === 'submitting'}
                       className="font-serif text-lg text-brand-light border border-brand-border rounded-full px-8 py-2 hover:bg-brand-light hover:text-brand-dark transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-light disabled:opacity-50 disabled:cursor-not-allowed"
                   >
                       {status === 'submitting' ? 'Sending...' : 'Send'}
                   </button>
                </div>
            </form>
        </div>
    );
};

export default ContactPage;