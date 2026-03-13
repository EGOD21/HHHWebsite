import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { revalidatePath } from 'next/cache';
import { Job } from '@/config/jobs';

const DATA_FILE = path.join(process.cwd(), 'src/data/projects.json');

// GET - Fetch all projects
export async function GET() {
  try {
    const fileContent = await fs.readFile(DATA_FILE, 'utf-8');
    const projects: Job[] = JSON.parse(fileContent);
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error reading projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

// POST - Create a new project
export async function POST(request: NextRequest) {
  try {
    const newProject: Job = await request.json();

    // Read existing projects
    const fileContent = await fs.readFile(DATA_FILE, 'utf-8');
    const projects: Job[] = JSON.parse(fileContent);

    // Add new project
    projects.push(newProject);

    // Write back to file
    await fs.writeFile(DATA_FILE, JSON.stringify(projects, null, 2));

    // Revalidate the gallery page to show new data
    revalidatePath('/gallery');

    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}

// DELETE - Remove a project
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const projectId = searchParams.get('id');

    if (!projectId) {
      return NextResponse.json({ error: 'Project ID required' }, { status: 400 });
    }

    // Read existing projects
    const fileContent = await fs.readFile(DATA_FILE, 'utf-8');
    const projects: Job[] = JSON.parse(fileContent);

    // Filter out the project to delete
    const updatedProjects = projects.filter(p => p.id !== projectId);

    if (updatedProjects.length === projects.length) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    // Write back to file
    await fs.writeFile(DATA_FILE, JSON.stringify(updatedProjects, null, 2));

    // Revalidate the gallery page
    revalidatePath('/gallery');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting project:', error);
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}
