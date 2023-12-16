// app/components/ModelGrid.tsx
import React from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_MODELS_QUERY } from '../../lib/graphql/queries';

interface Model {
    // Your model properties
}

interface ModelGridProps {
    filters: {
        country: string;
        category: string;
        tags: string[];
    };
}

const ModelGrid: React.FC<ModelGridProps> = ({ filters }) => {
    const { loading, error, data } = useQuery(FETCH_MODELS_QUERY, {
        variables: filters,
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div className="grid grid-cols-3 gap-4">
            {data?.models.map((model: Model) => (
                <div key={model.id} className="p-4 border rounded">
                    <h2 className="text-xl">{model.name}</h2>
                    {/* Display other model details */}
                </div>
            ))}
        </div>
    );
};

export default function ModelGrid() {
    // component logic here
}
