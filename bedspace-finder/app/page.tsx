'use client';

import { useState, useEffect } from 'react';

interface BedSpace {
  id: number;
  title: string;
  price: number;
  location: string;
  description: string;
  amenities: string[];
  contact: string;
  availability: string;
}

export default function Home() {
  const [listings, setListings] = useState<BedSpace[]>([]);
  const [filteredListings, setFilteredListings] = useState<BedSpace[]>([]);
  const [maxPrice, setMaxPrice] = useState(600);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('price-asc');

  useEffect(() => {
    // Simulated bed space listings in Al Nahda, Sharjah
    const bedSpaces: BedSpace[] = [
      {
        id: 1,
        title: 'Shared Bed Space - Al Nahda 1',
        price: 400,
        location: 'Al Nahda 1, Sharjah',
        description: 'Clean and spacious bed space in a shared room. Close to Sahara Centre.',
        amenities: ['WiFi', 'AC', 'Kitchen', 'Laundry'],
        contact: '+971-XX-XXX-XXXX',
        availability: 'Available Now'
      },
      {
        id: 2,
        title: 'Budget Bed Space - Near Metro',
        price: 350,
        location: 'Al Nahda 2, Sharjah',
        description: 'Affordable bed space near Al Nahda Metro Station. Walking distance to supermarket.',
        amenities: ['WiFi', 'AC', 'Shared Kitchen'],
        contact: '+971-XX-XXX-XXXX',
        availability: 'Available from 1st'
      },
      {
        id: 3,
        title: 'Executive Bed Space - Al Nahda',
        price: 550,
        location: 'Al Nahda 1, Sharjah',
        description: 'Premium bed space with attached bathroom. Fully furnished with modern amenities.',
        amenities: ['WiFi', 'AC', 'Attached Bathroom', 'Kitchen', 'Parking'],
        contact: '+971-XX-XXX-XXXX',
        availability: 'Available Now'
      },
      {
        id: 4,
        title: 'Sharing Bed - Al Nahda Area',
        price: 450,
        location: 'Al Nahda 2, Sharjah',
        description: 'Well-maintained bed space in Al Nahda. Near schools and shopping centers.',
        amenities: ['WiFi', 'AC', 'Kitchen', 'Laundry', 'Cleaning Service'],
        contact: '+971-XX-XXX-XXXX',
        availability: 'Available Now'
      },
      {
        id: 5,
        title: 'Economic Bed Space - Sharjah',
        price: 380,
        location: 'Al Nahda 1, Sharjah',
        description: 'Basic bed space for bachelors. Very affordable with all basic facilities.',
        amenities: ['WiFi', 'AC', 'Shared Kitchen'],
        contact: '+971-XX-XXX-XXXX',
        availability: 'Available Now'
      },
      {
        id: 6,
        title: 'Deluxe Bed Space - Al Nahda',
        price: 600,
        location: 'Al Nahda 1, Sharjah',
        description: 'Spacious bed space with premium facilities. Close to Dubai border.',
        amenities: ['WiFi', 'AC', 'Kitchen', 'Gym Access', 'Parking', 'Laundry'],
        contact: '+971-XX-XXX-XXXX',
        availability: 'Available Now'
      },
      {
        id: 7,
        title: 'Budget Sharing - Near Sahara',
        price: 420,
        location: 'Al Nahda 2, Sharjah',
        description: 'Affordable bed space near Sahara Centre. Easy access to public transport.',
        amenities: ['WiFi', 'AC', 'Kitchen', 'Laundry'],
        contact: '+971-XX-XXX-XXXX',
        availability: 'Available from 15th'
      },
      {
        id: 8,
        title: 'Clean Bed Space - Al Nahda',
        price: 500,
        location: 'Al Nahda 1, Sharjah',
        description: 'Very clean and hygienic bed space. Regular maintenance and cleaning.',
        amenities: ['WiFi', 'AC', 'Kitchen', 'Daily Cleaning', 'Laundry'],
        contact: '+971-XX-XXX-XXXX',
        availability: 'Available Now'
      },
      {
        id: 9,
        title: 'Affordable Bed - Metro Area',
        price: 370,
        location: 'Al Nahda 2, Sharjah',
        description: 'Very affordable bed space. Perfect for budget-conscious individuals.',
        amenities: ['WiFi', 'AC', 'Shared Kitchen'],
        contact: '+971-XX-XXX-XXXX',
        availability: 'Available Now'
      },
      {
        id: 10,
        title: 'Premium Bed Space - Al Nahda',
        price: 580,
        location: 'Al Nahda 1, Sharjah',
        description: 'High-quality bed space with excellent facilities. Professional environment.',
        amenities: ['WiFi', 'AC', 'Kitchen', 'Gym', 'Parking', 'Security'],
        contact: '+971-XX-XXX-XXXX',
        availability: 'Available from 5th'
      }
    ];

    setListings(bedSpaces);
    filterAndSort(bedSpaces, maxPrice, searchTerm, sortBy);
  }, []);

  const filterAndSort = (list: BedSpace[], price: number, search: string, sort: string) => {
    let filtered = list.filter(item =>
      item.price <= price &&
      (search === '' ||
       item.title.toLowerCase().includes(search.toLowerCase()) ||
       item.location.toLowerCase().includes(search.toLowerCase()) ||
       item.description.toLowerCase().includes(search.toLowerCase()))
    );

    // Sort
    if (sort === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredListings(filtered);
  };

  const handlePriceChange = (value: number) => {
    setMaxPrice(value);
    filterAndSort(listings, value, searchTerm, sortBy);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    filterAndSort(listings, maxPrice, value, sortBy);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    filterAndSort(listings, maxPrice, searchTerm, value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-indigo-900">🏠 Al Nahda Bed Space Finder</h1>
          <p className="text-gray-600 mt-2">Find affordable bed spaces in Al Nahda, Sharjah, UAE</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Search & Filter</h2>

          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <input
                type="text"
                placeholder="Search by title, location..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Price: {maxPrice} AED/month
              </label>
              <input
                type="range"
                min="300"
                max="600"
                step="50"
                value={maxPrice}
                onChange={(e) => handlePriceChange(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-sm">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-indigo-600">{filteredListings.length}</span> of {listings.length} listings
            </p>
            <button
              onClick={() => {
                setMaxPrice(600);
                setSearchTerm('');
                setSortBy('price-asc');
                filterAndSort(listings, 600, '', 'price-asc');
              }}
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4">
                <h3 className="text-white font-bold text-lg">{listing.title}</h3>
                <p className="text-indigo-100 text-sm mt-1">📍 {listing.location}</p>
              </div>

              <div className="p-5">
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-indigo-900">{listing.price}</span>
                    <span className="text-gray-600 ml-2">AED/month</span>
                  </div>
                  <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${
                    listing.availability === 'Available Now'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {listing.availability}
                  </span>
                </div>

                <p className="text-gray-700 text-sm mb-4">{listing.description}</p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Amenities:</p>
                  <div className="flex flex-wrap gap-2">
                    {listing.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Contact:</span> {listing.contact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredListings.length === 0 && (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <p className="text-gray-600 text-lg">No listings found matching your criteria.</p>
            <p className="text-gray-500 mt-2">Try adjusting your filters.</p>
          </div>
        )}

        {/* Info Box */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">💡 Tips for Finding Bed Spaces</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">•</span>
              <span>Al Nahda is a popular area with good connectivity to Dubai and Sharjah</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">•</span>
              <span>Always visit the property before making payment</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">•</span>
              <span>Verify amenities and check the contract terms carefully</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">•</span>
              <span>Most bed spaces include utilities (electricity, water, WiFi)</span>
            </li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12 border-t border-gray-200">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          <p>Al Nahda Bed Space Finder - Find Your Perfect Affordable Accommodation</p>
        </div>
      </footer>
    </div>
  );
}
