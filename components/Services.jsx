import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, Zap, CheckCircle } from 'lucide-react';

// ===========================================
// 1. EMBEDDED UTILITIES AND COMPONENTS
//    (Required for single-file operation)
// ===========================================

// Utility to combine class names (simplified for this environment)
const cn = (...classes) => classes.filter(Boolean).join(' ');

// FADE IN ANIMATION (Embedded from '@/public/assets/variants')
const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
            opacity: 0,
            x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};

// PRETITLE COMPONENT (Embedded from './Pretitle')
const Pretitle = ({ text, center }) => {
    return (
        <div className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : "justify-start"}`}>
            <div className='w-2 h-2 bg-secondary rounded-full'></div>
            <p className='font-primary text-primary tracking-[3.2px] uppercase text-sm font-semibold'>{text}</p>
            <div className='w-2 h-2 bg-secondary rounded-full'></div>
        </div>
    );
};

// SHADCN TABS PRIMITIVES (Simplified for single-file use)
const Tabs = ({ defaultValue, children, ...props }) => {
    const [activeTab, setActiveTab] = useState(defaultValue);
    
    const childrenWithProps = React.Children.map(children, child => {
        if (child && child.type && child.type.displayName === "TabsList") {
            return React.cloneElement(child, { activeTab, setActiveTab });
        }
        if (child && child.type && child.type.displayName === "TabsContent") {
            return React.cloneElement(child, { activeTab });
        }
        return child;
    });

    return <div {...props}>{childrenWithProps}</div>;
};

const TabsList = ({ activeTab, setActiveTab, className, children, ...props }) => (
    <div
        className={cn(
            "flex flex-col lg:flex-row w-full lg:w-fit mx-auto overflow-x-auto justify-start lg:justify-center p-1 bg-gray-100 rounded-xl shadow-inner scrollbar-hide",
            className
        )}
        {...props}
    >
        {React.Children.map(children, child => 
            React.cloneElement(child, { 
                activeTab, 
                setActiveTab,
                value: child.props.value 
            })
        )}
    </div>
);
TabsList.displayName = "TabsList";

const TabsTrigger = ({ activeTab, setActiveTab, value, className, children, ...props }) => {
    const isActive = activeTab === value;
    return (
        <button
            onClick={() => setActiveTab(value)}
            className={cn(
                "inline-flex flex-shrink-0 items-center justify-center whitespace-nowrap rounded-lg px-3 py-2 text-sm lg:text-base font-medium transition-all duration-300",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
                isActive 
                    ? "bg-white text-secondary shadow-md" 
                    : "text-primary/70 data-[state=inactive]:hover:text-secondary", 
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = ({ activeTab, value, className, children, ...props }) => {
    const isActive = activeTab === value;
    if (!isActive) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
                "mt-8 p-6 lg:p-10 bg-white rounded-xl shadow-xl border-t-4 border-secondary",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
};
TabsContent.displayName = "TabsContent";


// ===========================================
// 2. SERVICE DATA (With Image URLs)
// ===========================================

const SERVICES_DATA = [
    {
        value: "residential",
        label: "Residential Cleaning",
        icon: Home,
        image_url: "./assets/img/services/house.jpg", // Placeholder URL
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
        image_url: "./assets/img/services/office.jpg", // Placeholder URL
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
        image_url: "./assets/img/services/dish.jpg", // Placeholder URL
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
// 3. MAIN SERVICES COMPONENT
// ===========================================

const Services = () => {
    return (
        <div id='services' className='py-16 xl:py-24 bg-white text-primary '>
            <div className='container mx-auto px-4'>
                
                {/* Section Header */}
                <motion.div 
                    variants={fadeIn("up", 0.1)} 
                    initial="hidden" 
                    whileInView="show" 
                    viewport={{ once: false, amount: 0.2 }} 
                    className='text-center mt-10 mb-12 xl:mb-16 max-w-3xl mx-auto'>
                    
                    <div className='flex justify-center'>
                        <Pretitle text="Our Services" center /> 
                    </div>
                    
                    {/* Shortened Title */}
                    <h2 className='h2 mb-4 font-bold'> 
                        Our Professional Cleaning Solutions
                    </h2>
                    
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
                        
                        {/* Tabs List / Triggers */}
                        <TabsList className="mb-8 lg:mb-12 flex w-full overflow-x-auto justify-start lg:justify-center p-1 bg-gray-100 rounded-xl shadow-inner scrollbar-hide">
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
                            <TabsContent key={service.value} value={service.value}>
                                <div className='grid lg:grid-cols-2 gap-8'>
                                    
                                    {/* Right Column: Image (Order changed for alignment) */}
                                    <div className='order-first'> 
                                        <img 
                                            src={service.image_url} 
                                            alt={service.label + " image"}
                                            className='w-full h-full object-cover rounded-lg shadow-lg'
                                            // Fallback for image loading error
                                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x600/cccccc/000000?text=Image+Not+Found"; }}
                                        />
                                    </div>

                                    {/* Left Column: Text Content (self-start for vertical alignment) */}
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
