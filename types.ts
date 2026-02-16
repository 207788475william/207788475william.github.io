import React from 'react';

export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
}

export interface MetricCardProps {
  title: string;
  value: string;
  subValue?: string;
  trend?: string;
  trendDirection?: 'up' | 'down';
  type: 'ring' | 'card';
  ringPercentage?: number;
  targetText?: string;
}

export interface NewsItem {
  id: number;
  category?: string;
  tag?: string;
  title: string;
  excerpt?: string;
  time?: string;
  author?: string;
  imageUrl?: string; // Standardized to imageUrl
  img?: string;      // Keeping for backward compatibility if needed, or mapping it
  layout?: 'large' | 'small';
  content?: string[]; // Array of paragraphs for the detail view
}