import React from 'react';
import ModelGrid from '../components/ModelGrid';
import FilterBar from '../components/FilterBar';

const HomePage: React.FC = () => {
  // State to hold filter criteria
  const [filters, setFilters] = React.useState({ country: '', category: '', tags: [] });

  // Function to update filters based on user input
  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  return (
      <div className="container mx-auto p-4">
        <FilterBar onFilterChange={handleFilterChange} />
        <ModelGrid filters={filters} />
      </div>
  );
};

export default HomePage;
