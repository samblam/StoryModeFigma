import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen w-full bg-white flex items-center justify-center p-4">
      <div className="bg-[#ff5500] w-full max-w-xl p-6 md:p-8">
        <h2 className="text-white text-4xl font-bold mb-4">Contact</h2>
        
        <div className="border-2 border-white h-64 mb-4 p-2">
            <textarea 
                className="w-full h-full bg-transparent text-white text-xl placeholder-white focus:outline-none resize-none"
                placeholder="Start typing..."
            />
        </div>

        <div className="border-2 border-white p-2">
             <input 
                type="email"
                className="w-full bg-transparent text-white text-xl placeholder-white focus:outline-none"
                placeholder="email"
             />
        </div>
      </div>
    </section>
  );
};

export default Contact;