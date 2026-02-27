"use client";

import { Search } from 'lucide-react';
import { EmptyState } from '@/components/shared';

interface EmptySearchProps {
  searchQuery: string;
  onClear: () => void;
}

export function EmptySearch({ searchQuery, onClear }: EmptySearchProps) {
  return (
    <EmptyState
      icon={Search}
      title="No Results Found"
      description={`We couldn't find any results for "${searchQuery}". Try different keywords or browse our popular destinations.`}
      action={{
        label: "Clear Search",
        onClick: onClear
      }}
    />
  );
}

