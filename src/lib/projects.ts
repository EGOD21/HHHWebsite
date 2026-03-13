import { promises as fs } from 'fs';
import path from 'path';
import { Job } from '@/config/jobs';

const DATA_FILE = path.join(process.cwd(), 'src/data/projects.json');

/**
 * Get all projects from the data file
 * This function runs on the server side
 */
export async function getProjects(): Promise<Job[]> {
  try {
    const fileContent = await fs.readFile(DATA_FILE, 'utf-8');
    const projects: Job[] = JSON.parse(fileContent);
    return projects;
  } catch (error) {
    console.error('Error reading projects:', error);
    return [];
  }
}

/**
 * Get a single project by ID
 */
export async function getProjectById(id: string): Promise<Job | null> {
  const projects = await getProjects();
  return projects.find(p => p.id === id) || null;
}
