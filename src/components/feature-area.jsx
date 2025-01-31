import React from 'react';
import Delivery from "./assets/icons/delivery";
import Refund from "./assets/icons/refund";
import Discount from "./assets/icons/discount";
import Support from "./assets/icons/support";

const feature_data = [
    {
        icon: <Delivery />,
        title: 'Free Delivery',
        subtitle: 'Orders from all item'
    },
    {
        icon: <Refund />,
        title: 'Return & Refund',
        subtitle: 'Money back guarantee'
    },
    {
        icon: <Discount />,
        title: 'Member Discount',
        subtitle: 'Onevery order over $140.00'
    },
    {
        icon: <Support />,
        title: 'Support 24/7',
        subtitle: 'Contact us 24 hours a day'
    },
]

const FeatureArea = () => {
    return (
        <section className="tp-feature-area tp-feature-border-radius pb-14">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {feature_data.map((item, i) => (
                        <div key={i} className="flex items-start bg-[#f6f7f9] p-6">
                            <div className="tp-feature-icon mr-3">
                  <span>
                      {item.icon}
                  </span>
                            </div>
                            <div className="tp-feature-content">
                                <h3 className="tp-feature-title text-lg font-semibold">{item.title}</h3>
                                <p className="text-sm">{item.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureArea;
