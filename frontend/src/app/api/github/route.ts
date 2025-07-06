import { NextRequest, NextResponse } from 'next/server';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');

  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 });
  }

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `{
          user(login: "${username}") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    date
                    contributionCount
                  }
                }
              }
            }
          }
        }`
      })
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.errors) {
      throw new Error(`GraphQL error: ${data.errors[0].message}`);
    }

    return NextResponse.json(data.data.user.contributionsCollection);
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contributions' }, 
      { status: 500 }
    );
  }
} 