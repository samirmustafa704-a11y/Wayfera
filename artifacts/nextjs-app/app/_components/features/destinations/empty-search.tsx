"use client";

import { Search } from 'lucide-react';
import { EmptyState } from '@/app/_components/shared';
import { EmptySearchProps } from '@/app/_types';

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

