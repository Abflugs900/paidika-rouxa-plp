'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FiltersSidebar } from '@/components/FiltersSidebar';
import { ProductGrid } from '@/components/ProductGrid';
import { Pagination } from '@/components/Pagination';
import { products } from '@/data/products';
import { Filter, X } from 'lucide-react';
import { Button } from '@/components/Button';

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const productsPerPage = 12;
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Calculate products for current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const breadcrumbItems = [
    { label: 'Αρχική', href: '/' },
    { label: 'Κορίτσια', href: '/koritsia' },
    { label: 'Παιδικά Μπουφάν-Πανωφόρια για Κορίτσια' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* Page Title */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Παιδικά Μπουφάν-Πανωφόρια για Κορίτσια
          </h1>
          
          {/* Mobile filter toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center space-x-2"
          >
            <Filter className="h-4 w-4" />
            <span>Φίλτρα</span>
          </Button>
        </div>

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <div className={`${
            showFilters ? 'block' : 'hidden'
          } lg:block fixed lg:relative inset-0 lg:inset-auto z-50 lg:z-auto`}>
            {/* Mobile overlay */}
            <div 
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50"
              onClick={() => setShowFilters(false)}
            />
            
            {/* Sidebar content */}
            <div className="lg:relative absolute right-0 lg:right-auto top-0 h-full lg:h-auto w-80 lg:w-64 bg-white lg:bg-transparent shadow-xl lg:shadow-none">
              {/* Mobile close button */}
              <div className="lg:hidden flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-semibold">Φίλτρα</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFilters(false)}
                  className="p-2"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="lg:p-0 p-4 lg:pt-0 pt-0">
                <FiltersSidebar />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <ProductGrid 
              products={currentProducts}
              totalProducts={products.length}
            />
            
            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

