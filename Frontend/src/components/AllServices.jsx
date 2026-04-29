import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Dm_services from '../assets/DM_services.jpg'
import WebDev_services from '../assets/WebDev_services.jpg'
import lamp from '../assets/lamp.JPG'
import productionHouse from '../assets/Production_house.JPG'


export default function TabbedServices() {
  const [activeTab, setActiveTab] = useState('dm');

  const tabs = [
    { id: 'dm', label: 'Digital Marketing' },
    { id: 'webdev', label: 'Web Development' },
    { id: 'production', label: 'Production House' },
    { id: 'podcast', label: 'Podcast Studio Rentals' },
    
  ];

  const tabContent = {
    'dm': {
      mainTitle: 'Digital Marketing Services',
      mainDescription: 'We craft digital marketing strategies in Vizag that are data-driven, targeted, and designed for growth. From brand strategy to content, SEO, social media, and paid campaigns, we build powerful digital experiences that elevate your brand, attract the right audience, and turn prospects into loyal customers.',
      mainImage: Dm_services,
      services: [
        {
          title: 'Personal Branding',
          description: 'Build a strong personal brand that reflects your unique strengths and values. We help you craft an authentic online presence across platforms to enhance credibility and influence.'
        },
        {
          title: 'Creative Campaign Development',
          description: 'Transform ideas into impactful marketing campaigns. Our team develops innovative, visually appealing, and result-driven campaigns to captivate your target audience.'
        },
        {
          title: 'Content Strategy & Blogs/Articles',
          description: 'Drive engagement with a trusted content marketing agency, using well-researched strategies that include blogs, articles, and content calendars that resonate with your audience and strengthen your digital presence.'
        },
        {
          title: 'Social Media Marketing',
          description: 'Boost your brand visibility and engagement on social platforms. We craft tailored social media strategies, design attractive posts, and manage campaigns for maximum reach.'
        },
        
        {
          title: 'Google and Facebook Ads',
          description: 'Maximize ROI with targeted paid advertising campaigns. Our experts optimize Google and Facebook Ads to reach your ideal audience and generate measurable results.'
        },
        {
          title: 'SEO (Search Engine Optimization)',
          description: 'Improve your website’s visibility on search engines with our SEO services in Visakhapatnam, using comprehensive strategies that cover on-page optimization to link building. We help you rank higher organically and attract the right audience.'
        }
      ]
    },
    'webdev': {
      mainTitle: 'Web Design & Development',
      mainDescription: 'Transforming Ideas into Powerful Web Experiences. We build user-friendly and interactive websites using WordPress, Coding, and Shopify that match your brand’s style and goals.',
      mainImage: WebDev_services,
      services : [
               {
                 title: 'Website Design & Development',
                 description: 'Create visually appealing, user-friendly websites tailored to your brand. Our developers and designers work together to deliver responsive, high-performing websites that engage visitors.'
               },
               {
                 title: 'E-commerce Development',
                 description: 'Launch scalable and secure online stores with seamless shopping experiences. We specialize in platforms like Shopify, WooCommerce, and custom solutions to boost your online sales.'
               },
               {
                 title: 'Web Application Development',
                 description: 'Build robust, feature-rich web applications that streamline your business processes. From frontend to backend, we develop custom solutions to meet your unique requirements.'
               },
               {
                 title: 'Mobile-Responsive Websites',
                 description: 'Ensure your website looks perfect on all devices. Our team optimizes websites for mobile, tablet, and desktop, delivering fast, responsive experiences to increase user engagement.'
               },
               {
                 title: 'Website Maintenance & Support',
                 description: 'Keep your website secure, updated, and running smoothly. We offer ongoing maintenance, performance monitoring, bug fixes, and support to ensure uninterrupted functionality.'
               },
               {
                 title: 'SEO-Friendly Web Development',
                 description: 'Get websites built with SEO best practices in mind. From clean code to fast load speeds, we help your site rank higher in search results and attract organic traffic.'
               }
            ]

    },
    'production': {
      mainTitle: 'Production House',
      mainDescription: 'Transforming Concepts into Captivating Productions. We handle all kinds of shoots, events, corporate videos, model shoots, & product photography & make sure every moment is captured neatly & on time.',
      mainImage: lamp,
      
         services : [
                  {
                    title: 'Video Production',
                    description: 'Bring your ideas to life with high-quality video content. From concept to final edit, we create engaging videos for commercials, corporate use, social media, and more.'
                  },
                  {
                    title: 'Wedding & Events',
                    description: 'Capture life’s most special moments with professional wedding and event coverage. From candid emotions to grand celebrations, we ensure every detail is beautifully documented.'
                  },
                  {
                    title: 'Scriptwriting & Storyboarding',
                    description: 'Develop compelling narratives with professional scriptwriting and storyboarding. We help shape your ideas into stories that resonate and leave a lasting impact.'
                  },
                  {
                    title: 'Photography & Visual Content',
                    description: 'Capture striking visuals for marketing, events, and branding. Our photographers create high-quality images that communicate your brand’s essence effectively.'
                  },
                  {
                    title: 'Post-Production & Editing',
                    description: 'Polish your content with expert post-production services, including video editing, color grading, sound design, and visual effects for a professional finish.'
                  },
                  {
                    title: 'Live Streaming & Event Coverage',
                    description: 'Broadcast your events or shows seamlessly with live streaming solutions. We manage everything from setup to execution to ensure flawless coverage and audience engagement.'
                  }
                ]

    },
    'podcast': {
      mainTitle: 'Podcast Studio Rentals',
      mainDescription: 'Where Great Conversations Come to Life Record your podcast in our studio, which is ready for use. Everything you need is already set up, so you can walk in & start recording right away.',
      mainImage: productionHouse,
     services : [
                  {
                    title: 'High-Quality Cameras',
                    description: 'Record your podcast in stunning HD with our two professional-grade cameras, ensuring every frame looks crisp and visually engaging.'
                  },
                  {
                    title: 'Clear & Professional Microphones',
                    description: 'Capture crystal-clear audio with our two high-quality microphones, delivering studio-grade sound for your podcast recordings.'
                  },
                  {
                    title: 'Complete Podcast Setup',
                    description: 'Get everything you need for a seamless recording experience. Our fully equipped studio is ready for solo, duo, or group podcast sessions.'
                  },
                  {
                    title: 'Professional Production Team',
                    description: 'Work alongside our experienced production team to ensure your podcast runs smoothly, from setup to recording, providing guidance and technical support.'
                  },
                  {
                    title: 'Video & Photo Editing (Optional)',
                    description: 'Enhance your podcast with professional video and photo editing services available at an additional charge, perfect for marketing or social media content.'
                  }
                ]
    },
    'digital': {
      mainTitle: 'Digital Marketing & Transformation',
      mainDescription: 'Drive digital growth with comprehensive marketing strategies, analytics, and transformation services that connect you with your audience.',
      mainImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=700&fit=crop',
      services: [
        {
          title: 'SEO & SEM',
          description: 'Increase your online visibility with search engine optimization and marketing strategies that drive organic and paid traffic.'
        },
        {
          title: 'Social Media Marketing',
          description: 'Build and engage your audience across social platforms with strategic content and targeted advertising campaigns.'
        },
        {
          title: 'Content Marketing',
          description: 'Create compelling content that tells your brand story and converts visitors into loyal customers.'
        },
        {
          title: 'Analytics & Insights',
          description: 'Measure and optimize your digital performance with advanced analytics and data-driven insights.'
        }
      ]
    }
  };

  const currentContent = tabContent[activeTab];

  return (
    <div className="bg-gray-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 mt-14">
      <h1 className='text-4xl sm:text-6xl text-center text-orange-600 mb-10 font-bold' > Services We Offer</h1>
      <div className="max-w-7xl mx-auto">
        
        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-semibold text-xs border-[1px] border-gray-800 sm:text-base transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-orange-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="space-y-12">
          
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 flex items-center justify-center gap-3">
              {currentContent.mainTitle}
              <ArrowUpRight className="w-8 h-8 text-pink-600" />
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              {currentContent.mainDescription}
            </p>
          </div>

          {/* Services Grid with Center Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column - First 2 Services */}
            <div className="lg:col-span-4 space-y-10 ">
              {currentContent.services.slice(0, 3).map((service, index) => (
                <div key={index} className="space-y-3 group cursor-pointer ">
                  <h3 className="text-xl sm:text-3xl font-bold text-gray-900 flex items-start gap-2">
                    {service.title}
                    <ArrowUpRight className="w-5 h-5 text-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-1" />
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Center Column - Image */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 flex justify-center">
              <div className="w-full max-w-sm">
                <div className="lg:sticky lg:top-24 relative">
                  
                  
                  {/* Main Image Container */}
                  <div className="relative bg-orange-500 rounded-3xl p-6 shadow-2xl overflow-hidden">
                    <img 
                      src={currentContent.mainImage}
                      alt={currentContent.mainTitle}
                      className="w-full h-auto rounded-2xl object-cover"
                    />
                    
                 
                    <div className="absolute inset-0 pointer-events-none">
                     
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Last 2 Services */}
            <div className="lg:col-span-4 space-y-10">
              {currentContent.services.slice(3, 6).map((service, index) => (
                <div key={index} className="space-y-3 group cursor-pointer">
                  <h3 className="text-xl sm:text-3xl font-bold text-gray-900 flex items-start gap-2">
                    {service.title}
                    <ArrowUpRight className="w-5 h-5 text-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-1" />
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}