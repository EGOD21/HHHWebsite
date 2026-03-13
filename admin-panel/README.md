# Gallery Admin Panel

This admin panel allows you to upload images and create new gallery projects without editing code.

## Features

- 📤 Upload multiple images at once
- ✏️ Create new gallery projects with details
- 🗑️ Delete existing projects
- 👁️ Preview images before uploading
- 📋 View all existing projects

## Setup

### Local Development

1. Open `admin-panel/index.html` directly in your browser
2. Or use a local server:
   ```bash
   cd admin-panel
   python3 -m http.server 8080
   ```
3. Visit `http://localhost:8080`

### Deployment Options

#### Option 1: Deploy as Separate Vercel Project (Recommended)

1. In Vercel dashboard, create a **New Project**
2. Connect to the same GitHub repository
3. In project settings:
   - Set **Root Directory** to: `admin-panel`
   - Set **Build Command** to: (leave empty)
   - Set **Output Directory** to: `./`
4. Deploy!
5. Your admin panel will be at: `https://admin-[your-project].vercel.app`

#### Option 2: Deploy with Main Site

The admin panel can also be accessed at: `https://your-domain.com/admin-panel/`

### Security

**Important:** The admin panel has no authentication by default. Protect it using one of these methods:

1. **Vercel Password Protection** (Recommended):
   - In Vercel project settings → Deployment Protection
   - Enable "Password Protection"
   - Share the password only with authorized users

2. **Keep URL Private**:
   - Don't link to the admin panel from your public site
   - Only share the URL with authorized users

3. **Add Custom Authentication**:
   - Implement login system in `app.js`
   - Store credentials securely

## Usage

### Creating a New Project

1. Fill out the form:
   - **Project Title**: Name of the project (e.g., "Kitchen Remodel")
   - **Category**: Select from General Repairs, Remodelling, or Upscale Projects
   - **Description**: Brief description of the work done
   - **Completion Date**: When the project was completed
   - **Images**: Select one or more images to upload
   - **Tags**: Optional comma-separated tags
   - **Featured**: Check to feature this project prominently

2. Click "Create Project"

3. Wait for upload to complete

4. Your gallery page will automatically update!

### Deleting a Project

1. Scroll to the "Existing Projects" section
2. Find the project you want to remove
3. Click the "Delete" button
4. Confirm the deletion

**Note:** Deleting a project removes it from the gallery, but uploaded images remain in `/public/gallery/`

## API Endpoints

The admin panel communicates with these API endpoints:

- `POST /api/upload` - Upload images
- `GET /api/projects` - Fetch all projects
- `POST /api/projects` - Create new project
- `DELETE /api/projects?id={id}` - Delete project

## Configuration

To change the API URL, edit `app.js`:

```javascript
const API_BASE_URL = 'https://your-domain.com';
```

## Troubleshooting

### Images not uploading
- Check file size (keep under 5MB for best performance)
- Ensure file types are: JPG, JPEG, PNG, or WebP
- Check browser console for error messages

### Projects not appearing on gallery
- Wait 30 seconds and refresh the gallery page
- Check that the project was created successfully
- Verify the API endpoints are accessible

### Can't delete projects
- Ensure you have permission to modify the data file
- Check browser console for errors
- Try refreshing the admin panel

## File Storage

- **Images**: Stored in `/public/gallery/` directory
- **Project Data**: Stored in `/src/data/projects.json`

Both are committed to your Git repository and deployed with your site.
