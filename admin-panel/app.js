document.getElementById('projectForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form values
  const title = document.getElementById('title').value;
  const category = document.getElementById('category').value;
  const description = document.getElementById('description').value;
  const completedDate = document.getElementById('completedDate').value;
  const imagesText = document.getElementById('images').value;
  const tagsText = document.getElementById('tags').value;
  const featured = document.getElementById('featured').checked;

  // Process images (split by newlines, trim whitespace)
  const images = imagesText
    .split('\n')
    .map(img => img.trim())
    .filter(img => img.length > 0);

  // Process tags (split by comma, trim whitespace)
  const tags = tagsText
    .split(',')
    .map(tag => tag.trim())
    .filter(tag => tag.length > 0);

  // Generate ID from title (lowercase, replace spaces with hyphens)
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  // Build the job object as TypeScript code
  let code = `{
  id: '${id}',
  title: '${title}',
  category: '${category}',
  description: '${description}',
  images: [${images.map(img => `'${img}'`).join(', ')}],
  completedDate: '${completedDate}',`;

  if (featured) {
    code += `\n  featured: true,`;
  }

  if (tags.length > 0) {
    code += `\n  tags: [${tags.map(tag => `'${tag}'`).join(', ')}],`;
  }

  code += `\n},`;

  // Display the generated code
  document.getElementById('generatedCode').textContent = code;
  document.getElementById('output').classList.remove('hidden');

  // Scroll to output
  document.getElementById('output').scrollIntoView({ behavior: 'smooth' });
});

// Copy to clipboard functionality
document.getElementById('copyBtn').addEventListener('click', function() {
  const code = document.getElementById('generatedCode').textContent;
  navigator.clipboard.writeText(code).then(function() {
    const btn = document.getElementById('copyBtn');
    const originalText = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(() => {
      btn.textContent = originalText;
    }, 2000);
  });
});
