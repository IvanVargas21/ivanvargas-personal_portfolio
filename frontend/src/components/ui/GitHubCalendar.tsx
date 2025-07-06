'use client'

import React, { useState, useEffect } from 'react';

interface ContributionDay {
  date: string;
  contributionCount: number;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface GitHubData {
  contributionCalendar: {
    totalContributions: number;
    weeks: ContributionWeek[];
  };
}

interface GitHubCalendarProps {
  username: string;
}

const GitHubCalendar: React.FC<GitHubCalendarProps> = ({ username }) => {
  const [contributions, setContributions] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/github?username=${username}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch contributions');
        }
        
        const data = await response.json();
        setContributions(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [username]);

  const getContributionColor = (count: number): string => {
    if (count === 0) return 'bg-gray-800';
    if (count <= 3) return 'bg-green-600';
    if (count <= 6) return 'bg-green-500';
    if (count <= 9) return 'bg-green-400';
    return 'bg-green-300';
  };

  const getContributionText = (count: number): string => {
    if (count === 0) return 'No contributions';
    if (count === 1) return '1 contribution';
    return `${count} contributions`;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-rose-400"></div>
        <span className="ml-3 text-gray-400">Loading contributions...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="text-rose-400 mb-2">⚠️</div>
        <p className="text-gray-400">Unable to load GitHub contributions</p>
        <p className="text-sm text-gray-500 mt-1">{error}</p>
      </div>
    );
  }

  if (!contributions) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">No contribution data available</p>
      </div>
    );
  }

  // Get the last 52 weeks (1 year) of data
  const recentWeeks = contributions.contributionCalendar.weeks.slice(-52);

  return (
    <div className="w-full">
      {/* Calendar Grid - Mobile Responsive with Horizontal Scroll */}
      <div className="flex justify-center mb-4">
        <div className="overflow-x-auto w-full">
          <div className="flex gap-1 min-w-max px-4 sm:px-0">
            {recentWeeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.contributionDays.map((day, dayIndex) => (
                  <div
                    key={dayIndex}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-sm ${getContributionColor(day.contributionCount)} 
                      hover:scale-125 transition-transform duration-200 cursor-pointer
                      border border-gray-700`}
                    title={`${new Date(day.date).toLocaleDateString()}: ${getContributionText(day.contributionCount)}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend - Mobile Responsive */}
      <div className="flex justify-center items-center gap-2 text-xs text-gray-400 mb-4 px-4">
        <span className="hidden sm:inline">Less</span>
        <div className="flex gap-1">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-800 rounded-sm border border-gray-700"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-600 rounded-sm border border-gray-700"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-sm border border-gray-700"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-sm border border-gray-700"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-300 rounded-sm border border-gray-700"></div>
        </div>
        <span className="hidden sm:inline">More</span>
      </div>

      {/* Total Contributions */}
      <div className="text-center px-4">
        <p className="text-gray-400 text-sm">
          <span className="text-rose-400 font-semibold">
            {contributions.contributionCalendar.totalContributions}
          </span> contributions in the last year
        </p>
      </div>
    </div>
  );
};

export default GitHubCalendar; 