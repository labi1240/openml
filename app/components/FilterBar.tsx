import React from 'react';

interface FilterBarProps {
    onFilterChange: (filters: any) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
    const [country, setCountry] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [tags, setTags] = React.useState<string[]>([]);

    // Function to handle filter changes and notify parent component
    const handleFilters = () => {
        onFilterChange({ country, category, tags });
    };

    return (
        <div className="flex space-x-4 mb-4">
            {/* Country Filter */}
            <select className="p-2 border rounded" value={country} onChange={(e) => setCountry(e.target.value)}>
                <option value="">Select Country</option>
                {/* Populate with country options */}
            </select>

            {/* Category Filter */}
            <select className="p-2 border rounded" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                {/* Populate with category options */}
            </select>

            {/* Tags Filter */}
            {/* Implementation for tags filter (multi-select, checkboxes, etc.) */}

            <button className="p-2 bg-blue-500 text-white rounded" onClick={handleFilters}>Apply Filters</button>
        </div>
    );
};

export default FilterBar;
