// Configuration - automatically detects the correct API URL
const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'http://localhost:3000'
  : window.location.hostname.includes('admin')
    ? 'https://www.repair-construction.com' // Your main site domain
    : window.location.origin; // If admin panel is hosted on main domain

const status = document.getElementById('status');
const submitBtn = document.getElementById('submitBtn');
const imageInput = document.getElementById('images');
const imagePreview = document.getElementById('imagePreview');

// Preview selected images
imageInput.addEventListener('change', function(e) {
  imagePreview.innerHTML = '';
  const files = Array.from(e.target.files);

  files.forEach(file => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        imagePreview.appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  });
});

// Show status message
function showStatus(message, type) {
  status.textContent = message;
  status.className = `status ${type}`;

  if (type !== 'loading') {
    setTimeout(() => {
      status.style.display = 'none';
    }, 5000);
  }
}

// Upload a single image
async function uploadImage(file) {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${API_BASE_URL}/api/upload`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to upload image');
  }

  const data = await response.json();
  return data.url;
}

// Create a new project
async function createProject(projectData) {
  const response = await fetch(`${API_BASE_URL}/api/projects`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(projectData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to create project');
  }

  return await response.json();
}

// Handle form submission
document.getElementById('projectForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  submitBtn.disabled = true;
  showStatus('Uploading images...', 'loading');

  try {
    // Get form values
    const title = document.getElementById('title').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    const completedDate = document.getElementById('completedDate').value;
    const tagsText = document.getElementById('tags').value;
    const featured = document.getElementById('featured').checked;
    const files = Array.from(imageInput.files);

    if (files.length === 0) {
      throw new Error('Please select at least one image');
    }

    // Upload all images
    showStatus(`Uploading ${files.length} image(s)...`, 'loading');
    const imageUrls = await Promise.all(files.map(uploadImage));

    // Process tags
    const tags = tagsText
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    // Generate ID from title
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

    // Create project data
    const projectData = {
      id,
      title,
      category,
      description,
      images: imageUrls,
      completedDate,
      featured,
      tags,
    };

    // Create the project
    showStatus('Creating project...', 'loading');
    await createProject(projectData);

    showStatus('Project created successfully!', 'success');

    // Reset form
    document.getElementById('projectForm').reset();
    imagePreview.innerHTML = '';

    // Reload projects list
    loadProjects();

  } catch (error) {
    console.error('Error:', error);
    showStatus(error.message || 'Failed to create project', 'error');
  } finally {
    submitBtn.disabled = false;
  }
});

// Load and display existing projects
async function loadProjects() {
  const container = document.getElementById('projectsContainer');

  try {
    const response = await fetch(`${API_BASE_URL}/api/projects`);
    if (!response.ok) throw new Error('Failed to fetch projects');

    const projects = await response.json();

    if (projects.length === 0) {
      container.innerHTML = '<p style="color: rgba(255,255,255,0.5);">No projects yet.</p>';
      return;
    }

    container.innerHTML = projects.map(project => `
      <div class="project-item">
        <div class="project-header">
          <div>
            <div class="project-title">${project.title}</div>
            <div class="project-category">${project.category}</div>
          </div>
          <button class="delete-btn" onclick="deleteProject('${project.id}')">Delete</button>
        </div>
        <div class="project-description">${project.description}</div>
        <div class="project-meta">
          <span>📅 ${new Date(project.completedDate).toLocaleDateString()}</span>
          ${project.featured ? '<span>⭐ Featured</span>' : ''}
          <span>🖼️ ${project.images.length} image(s)</span>
        </div>
        <div class="project-images">
          ${project.images.map(img => `<img src="${API_BASE_URL}${img}" alt="${project.title}">`).join('')}
        </div>
        ${project.tags && project.tags.length > 0 ? `
          <div style="margin-top: 0.5rem; font-size: 0.75rem; color: rgba(255,255,255,0.5);">
            Tags: ${project.tags.join(', ')}
          </div>
        ` : ''}
      </div>
    `).join('');
  } catch (error) {
    console.error('Error loading projects:', error);
    container.innerHTML = '<p style="color: #ef4444;">Failed to load projects.</p>';
  }
}

// Delete a project
async function deleteProject(projectId) {
  if (!confirm('Are you sure you want to delete this project?')) {
    return;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/projects?id=${projectId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete project');
    }

    showStatus('Project deleted successfully', 'success');
    loadProjects();
  } catch (error) {
    console.error('Error deleting project:', error);
    showStatus('Failed to delete project', 'error');
  }
}

// Load projects on page load
loadProjects();
