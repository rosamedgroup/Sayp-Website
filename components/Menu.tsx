import React, { useState } from 'react';
import AnimatedItem from './AnimatedItem';

interface MenuItemProps {
  name: string;
  price: string;
}

// Simplified MenuItem for a cleaner look within the tabbed interface.
const MenuItem: React.FC<MenuItemProps> = ({ name, price }) => (
  <div className="py-4 px-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-[#6B5050]/10 hover:shadow-sm hover:-translate-y-px">
    <div className="flex justify-between items-baseline gap-4">
      <h4 className="text-base sm:text-lg font-semibold text-[#6B5050] text-right">{name}</h4>
      <p className="text-base sm:text-lg font-medium text-[#6B5050] font-english whitespace-nowrap">{price} RS</p>
    </div>
  </div>
);

// Consolidated menu data for easier state management with tabs.
const menuData = {
  hot: {
    title: 'مشروبات ساخنة',
    items: [
      { name: 'قهوة اليوم', price: '8' },
      { name: 'قهوة تركي', price: '10' },
      { name: 'اسبريسو اثيوبي', price: '10' },
      { name: 'اسبريسو يمني', price: '12' },
      { name: 'اسبريسو سعودي', price: '14' },
      { name: 'كيمكس', price: '11' },
      { name: 'امريكانو', price: '12' },
      { name: 'كورتادو', price: '12' },
      { name: 'فلات وايت', price: '13' },
      { name: 'لاتيه', price: '13' },
      { name: 'كابتشينو', price: '13' },
      { name: 'سبانش', price: '16' },
      { name: 'V60 اثيوبي', price: '14' },
      { name: 'V60 كولومبي', price: '14' },
      { name: 'V60 يمني', price: '16' },
      { name: 'V60 سعودي', price: '18' },
      { name: 'دلة قهوة سعودية', price: '25' },
      { name: 'كوب قهوة سعودية', price: '6' },
    ],
  },
  iced: {
    title: 'مشروبات باردة',
    items: [
      { name: 'قهوة اليوم', price: '8' },
      { name: 'امريكانو', price: '12' },
      { name: 'V60 اثيوبي', price: '14' },
      { name: 'V60 كولومبي', price: '14' },
      { name: 'V60 يمني', price: '16' },
      { name: 'V60 سعودي', price: '18' },
      { name: 'اسبريسو افريقيدو', price: '13' },
      { name: 'لاتيه', price: '13' },
      { name: 'لاتيه حالو بقر', price: '15' },
      { name: 'سبانش', price: '15' },
    ],
  },
  soda: {
    title: 'مشروبات غازية',
    items: [
      { name: 'ماجيك', price: '18' },
      { name: 'مانجا فراولة', price: '20' },
      { name: 'ايس تي كركديه', price: '12' },
      { name: 'موهيتو توت ازرق', price: '15' },
      { name: 'موهيتو فراولة', price: '15' },
    ],
  },
  sweets: {
    title: 'حلويات',
    items: [
      { name: 'ليري كيك', price: '19' },
      { name: 'شوكو سويت', price: '21' },
      { name: 'كيكة سنب', price: '22' },
      { name: 'كرانشي سويت', price: '24' },
      { name: 'تيراميسو سنب', price: '24' },
      { name: 'تيراميسو كيك', price: '21' },
      { name: 'حلا الاوريو', price: '19' },
      { name: 'روكي رود', price: '6' },
      { name: 'ترفل فستق', price: '6' },
      { name: 'كوكيز بايتس', price: '6' },
      { name: 'كوكيز كلاسيك', price: '9' },
      { name: 'كوكيز رهيلة', price: '10' },
    ],
  },
};

type MenuCategory = keyof typeof menuData;

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MenuCategory>('hot');

  const tabs: { id: MenuCategory; label: string }[] = [
    { id: 'hot', label: 'مشروبات ساخنة' },
    { id: 'iced', label: 'مشروبات باردة' },
    { id: 'soda', label: 'مشروبات غازية' },
    { id: 'sweets', label: 'حلويات' },
  ];

  const activeMenu = menuData[activeTab];

  return (
    <section id="menu" className="py-16 md:py-24 bg-[#CAD4D3]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-wider text-center mb-4">قائمتنا</h2>
        <p className="text-center text-[#6B5050]/80 mb-12 md:mb-16 max-w-2xl mx-auto">
          مختارات منسقة للذوق الرفيع، من مشروبات الصباح إلى إطلالات المساء.
        </p>

        {/* Tab Buttons */}
        <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-8" role="tablist" aria-label="Menu categories">
          {tabs.map(tab => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-6 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#CAD4D3] focus:ring-[#6B5050]/50 ${
                activeTab === tab.id
                  ? 'bg-[#6B5050] text-white shadow-lg'
                  : 'bg-[#F1ECE6]/50 text-[#6B5050] hover:bg-[#6B5050]/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div
            key={activeTab}
            className="max-w-3xl mx-auto bg-[#F1ECE6]/50 rounded-lg p-6 sm:p-8 menu-panel-enter"
            id={`panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
        >
          <h3 className="text-2xl font-semibold mb-6 border-b-2 border-[#6B5050]/20 pb-4 text-right">
            {activeMenu.title}
          </h3>
          <div className="divide-y divide-[#6B5050]/10">
            {activeMenu.items.map((item, index) => (
              <AnimatedItem key={item.name} delay={index * 50}>
                <MenuItem {...item} />
              </AnimatedItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;