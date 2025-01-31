import React, { useContext, useState } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Hero from '../components/Hero';
import FeatureArea from '../components/feature-area';

const Home = () => {
    const { products, categories } = useContext(ProductContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortOption, setSortOption] = useState('');

    const filteredProducts = products
        .filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedCategory ? product.category === selectedCategory : true)
        )
        .sort((a, b) => {
            if (sortOption === 'price-asc') return a.price - b.price;
            if (sortOption === 'price-desc') return b.price - a.price;
            if (sortOption === 'rating') return b.rating.rate - a.rating.rate;
            return 0;
        });

    return (
        <div>
            <Hero />
            <section className='py-16'>
                <FeatureArea />
                <div className='container mx-auto'>
                    <div className='flex justify-between mb-4'>
                        <input
                            type='text'
                            placeholder='Search products...'
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className='p-2 border rounded w-1/3'
                        />
                        <select
                            value={selectedCategory}
                            onChange={e => setSelectedCategory(e.target.value)}
                            className='p-2 border rounded w-1/4'
                        >
                            <option value=''>All Categories</option>
                            {categories.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                        <select
                            value={sortOption}
                            onChange={e => setSortOption(e.target.value)}
                            className='p-2 border rounded w-1/4'
                        >
                            <option value=''>Sort By</option>
                            <option value='price-asc'>Price: Low to High</option>
                            <option value='price-desc'>Price: High to Low</option>
                            <option value='rating'>Rating</option>
                        </select>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
                        {filteredProducts.map(product => (
                            <Product product={product} key={product.id} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
