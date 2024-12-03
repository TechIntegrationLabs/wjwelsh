import { Project } from '../types';

const SHEETS_API = 'https://api.sheetbest.com/sheets/50316738-0d33-4a36-8776-a48e8bb6fd93';

// Transform raw sheet data to match our Project interface
function transformSheetData(data: any[]): Project[] {
  return data.map((item, index) => ({
    id: String(index + 1),
    title: item.Title,
    description: item.Description,
    image: item['Image URL'],
    tags: item.Tags ? item.Tags.split(',').map((tag: string) => tag.trim()) : [],
    category: item.Category?.toLowerCase() || 'other',
    links: {
      demo: item.Link || undefined,
      github: item['Github Link'] || undefined
    }
  }));
}

export async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await fetch(SHEETS_API);
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    const data = await response.json();
    return transformSheetData(data);
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
}