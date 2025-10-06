import React from 'react';
import Pretitle from './Pretitle'; // Local component import restored
import { motion } from 'framer-motion';
import { fadeIn } from '@/public/assets/variants'; // Utility import restored
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'; // Shadcn components restored
import { Home, Briefcase, Zap, CheckCircle } from 'lucide-react';

// ===========================================
// 1. SERVICE DATA (With Image URLs)
// ===========================================

const SERVICES_DATA = [
    {
        value: "residential",
        label: "Residential Cleaning",
        icon: Home,
        image_url: "https://placehold.co/800x600/60A5FA/FFFFFF?text=Residential+Cleaning", // Placeholder URL
        title: "Comprehensive House & End of Lease Cleaning",
        description: (
            <>
                We provide meticulous house cleaning and specialized <span className="font-bold">End of Lease Cleaning</span> services to ensure your home is spotless and comfortable. Our deep-cleaning options cover all living areas, bathrooms, and kitchens, leaving every corner sparkling.
            </>
        ),
        details: [
            "Full dusting, vacuuming, and mopping of all living areas.",
            "Detailed sanitization of bathrooms (sinks, toilets, showers, countertops).",
            "Thorough cleaning of kitchens, including appliances and surfaces.",
            "Customizable deep cleaning for hard-to-reach and often overlooked areas."
        ],
    },
    {
        value: "commercial",
        label: "Commercial & Office Cleaning",
        icon: Briefcase,
        image_url: "https://placehold.co/800x600/34D399/FFFFFF?text=Commercial+Office+Cleaning", // Placeholder URL
        title: "Pristine Office, Shop, and Warehouse Environments",
        description: (
            <>
                Maintain a professional and hygienic workspace with our commercial cleaning solutions. We cater to offices, retail shops, and large-scale industrial spaces like <span className="font-bold">warehouses</span>, ensuring a clean environment for employees and clients.
            </>
        ),
        details: [
            "Dusting and wiping down all office and retail surfaces.",
            "Vacuuming carpets, mopping floors, and sanitizing restrooms.",
            "Disinfecting high-touch areas for superior hygiene.",
            (
                <>
                    Specialized <span className="font-bold">warehouse cleaning and cobweb removal</span> services.
                </>
            ),
        ],
    },
    {
        value: "specialty",
        label: "Specialty Services",
        icon: Zap,
        image_url: "https://placehold.co/800x600/FBBF24/FFFFFF?text=Specialty+Services", // Placeholder URL
        title: "Advanced Cleaning for Specific Needs",
        description: "Our specialty services employ advanced techniques for targeted results, promoting a healthier environment and simplified maintenance.",
        details: [
            (
                <>
                    <span className="font-bold">Steam Cleaning</span> for bacteria removal without harsh chemicals.
                </>
            ),
            (
                <>
                    Expert, streak-free <span className="font-bold">Glass Cleaning</span> for windows, mirrors, and glass partitions.
                </>
            ),
            (
                <>
                    Efficient <span className="font-bold">Dishwashing</span> and kitchenware sanitization for busy settings.
                </>
            ),
            "Property Management and Caretaker services for apartment buildings (Australia)."
        ],
    },
];

// ===========================================
// 2. MAIN SERVICES COMPONENT
// ===========================================

const Services = () => {
    return (
        <div id='services' className='py-16 xl:py-24 bg-white text-primary'>
            <div className='container mx-auto px-4'>
                
                {/* Section Header */}
                <motion.div 
                    variants={fadeIn("up", 0.1)} 
                    initial="hidden" 
                    whileInView="show" 
                    viewport={{ once: false, amount: 0.2 }} 
                    className='text-center mb-12 xl:mb-16 max-w-3xl mx-auto'>
                    
                    <div className='flex justify-center'>
                        <Pretitle text="Our Services" center /> 
                    </div>
                    
                    {/* Shortened Title */}
                    <h2 className='h2 mb-4 font-bold'> 
                        Our Professional Cleaning Solutions
                    </h2>
                    
                    <p className='text-primary/70 font-secondary text-base md:text-lg'> 
                        From residential deep cleans to specialized commercial contracts, Dazzle Cleaning delivers excellence and peace of mind.
                    </p>
                </motion.div>

                {/* Services Tabs Area */}
                <motion.div
                    variants={fadeIn("up", 0.3)} 
                    initial="hidden" 
                    whileInView="show" 
                    viewport={{ once: false, amount: 0.2 }}
                    className='max-w-7xl mx-auto'
                >
                    <Tabs defaultValue="residential">
                        
                        {/* Tabs List / Triggers (w-fit logic applied here) */}
                        <TabsList className="flex flex-col lg:flex-row w-full lg:w-fit mx-auto overflow-x-auto justify-start lg:justify-center p-1 bg-gray-100 rounded-xl shadow-inner scrollbar-hide">
                            {SERVICES_DATA.map(service => (
                                <TabsTrigger 
                                    key={service.value} 
                                    value={service.value} 
                                    className="flex items-center space-x-2 flex-shrink-0" 
                                >
                                    <service.icon className="w-5 h-5 hidden sm:inline-block" />
                                    <span>{service.label}</span>
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {/* Tabs Content */}
                        {SERVICES_DATA.map(service => (
                            <TabsContent 
                                key={service.value} 
                                value={service.value}
                                // Card styling with border-t-4 border-secondary
                                className='p-6 lg:p-10 bg-white rounded-xl shadow-xl border-t-4 border-secondary' 
                            >
                                <div className='grid lg:grid-cols-2 gap-8'>
                                    
                                    {/* Right Column: Image (order-first displays it above text on mobile, left on desktop) */}
                                    <div className='order-first'> 
                                        {/* NOTE: If you are using Next.js <Image> component, replace this standard <img> tag */}
                                        <img 
                                            src={service.image_url} 
                                            alt={service.label + " image"}
                                            className='w-full md:w-auto h-auto md:h-full object-cover rounded-lg shadow-lg'
                                            // Fallback for image loading error
                                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x600/cccccc/000000?text=Image+Not+Found"; }}
                                        />
                                    </div>

                                    {/* Left Column: Text Content (self-start ensures top alignment in the grid) */}
                                    <div className='self-start'>
                                        <h3 className='text-3xl font-extrabold text-primary mb-4'>
                                            {service.title}
                                        </h3>
                                        <p className='text-primary/80 mb-6 leading-relaxed'>
                                            {service.description}
                                        </p>

                                        {/* List of Details */}
                                        <ul className='space-y-3'>
                                            {service.details.map((detail, index) => (
                                                <li key={index} className='flex items-start space-x-3'>
                                                    <CheckCircle className='w-5 h-5 text-secondary flex-shrink-0 mt-1' />
                                                    <span className='text-primary/90 text-lg'>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </TabsContent>
                        ))}

                    </Tabs>
                </motion.div>
            </div>
        </div>
    );
};

export default Services;

// The change was applied inside the TabsTrigger component:
/*
// Original active state: "bg-white text-secondary shadow-md"
// New active state: "bg-secondary text-white shadow-md"
*/