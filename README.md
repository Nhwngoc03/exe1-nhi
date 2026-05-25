<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/d1a0453d-7078-4815-84d0-853bb6467f4f

## Run Locally

**Prerequisites:**  
- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Setup Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   - Create or update [.env.local](.env.local) file
   - Set the `GEMINI_API_KEY` to your Gemini API key
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (or the next available port)

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run linting (if configured)

## Project Structure

```
src/
├── components/       # React components
├── App.tsx          # Main App component
├── main.tsx         # Entry point
├── index.css        # Global styles
├── data.ts          # Data definitions
├── types.ts         # TypeScript type definitions
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Your Google Gemini API key | Yes |

## Tech Stack

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Google Gemini API** - AI backend

## Deployment

This project is configured for deployment on **Vercel**. 

To deploy:
1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Vercel will automatically build and deploy on push

See [vercel.json](vercel.json) for deployment configuration.

## Troubleshooting

**Port already in use:**
```bash
npm run dev -- --port 3000
```

**API key issues:**
- Verify your `GEMINI_API_KEY` is correctly set in `.env.local`
- Ensure the key has proper permissions in Google Cloud Console

## Support

For issues or questions, refer to the AI Studio documentation or check the app in AI Studio dashboard.
