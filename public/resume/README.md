# Resume Storage Folder (Dynamic Hot-Swap Enabled)

This folder stores your resume / CV PDF file. 

## 🚀 Dynamic Hot-Swapping:
You can drop **ANY** `.pdf` file into this folder at any time:
- The system automatically detects and serves the PDF in this folder.
- If you have multiple `.pdf` files, it automatically selects and serves the most recently modified one.
- You **do NOT need to rename your file** or edit any code when updating your CV.

## Examples of filenames you can drop in:
- `AshishGaurav_CV.pdf`
- `Ashish_Gaurav_Resume_2026.pdf`
- `Resume.pdf`
- `CV_Final.pdf`

## Endpoints:
- **Download**: `/api/resume?download=1` (Triggers immediate download with original filename)
- **Preview / Stream**: `/api/resume` (Streams PDF inline)
- **Dedicated Page**: `/resume` (Interactive preview + download buttons)
