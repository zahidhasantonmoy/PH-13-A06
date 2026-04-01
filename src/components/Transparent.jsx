import React from 'react';
const Transparent = () => {
  return (
    <div className="bg-white py-20 px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2">Simple, Transparent Pricing</h2>
        <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        
        <div className="border rounded-3xl p-8">
          <h3 className="text-2xl font-bold">Starter</h3>
          <p className="text-gray-500 my-2">Perfect for getting started</p>
          <h2 className="text-5xl font-bold my-4">$0<span className="text-lg text-gray-500 font-normal">/Month</span></h2>
          <ul className="space-y-3 mb-8 text-gray-600">
            <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Access to 10 free tools</li>
            <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Basic templates</li>
            <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Community support</li>
            <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>1 project per month</li>
          </ul>
          <button className="btn bg-[#8b2cff] hover:bg-[#7215e3] text-white w-full rounded-full border-none">Get Started Free</button>
        </div>

        <div className="bg-[#8b2cff] text-white rounded-3xl p-8 relative md:scale-105 shadow-xl">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#fff4cc] text-[#b38a00] px-3 py-1 rounded-full text-xs font-bold">Most Popular</div>
          <h3 className="text-2xl font-bold">Pro</h3>
          <p className="my-2">Best for professionals</p>
          <h2 className="text-5xl font-bold my-4">$29<span className="text-lg font-normal">/Month</span></h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Access to all premium tools</li>
            <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Unlimited templates</li>
            <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Priority support</li>
            <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Unlimited projects</li>
            <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Cloud sync</li>
            <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Advanced analytics</li>
          </ul>
          <button className="btn bg-white text-[#8b2cff] hover:bg-gray-100 w-full rounded-full border-none">Start Pro Trial</button>
        </div>

        <div className="border rounded-3xl p-8">
          <h3 className="text-2xl font-bold">Enterprise</h3>
          <p className="text-gray-500 my-2">For teams and businesses</p>
          <h2 className="text-5xl font-bold my-4">$99<span className="text-lg text-gray-500 font-normal">/Month</span></h2>
          <ul className="space-y-3 mb-8 text-gray-600">
            <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Everything in Pro</li>
            <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Team collaboration</li>
            <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Custom integrations</li>
            <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Dedicated support</li>
            <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>SLA guarantee</li>
            <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Custom branding</li>
          </ul>
          <button className="btn bg-[#8b2cff] hover:bg-[#7215e3] text-white w-full rounded-full border-none">Contact Sales</button>
        </div>

      </div>
    </div>
  )
}

export default Transparent