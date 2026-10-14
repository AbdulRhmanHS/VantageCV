# VantageCV

> **[🚀 Access the Hosted Website Here](https://your-deployment-url.com)**

VantageCV is a modern, feature-rich, and ATS-friendly resume builder web application built with React and Tailwind CSS. It allows users to effortlessly create, customize, manage, and export professional resumes tailored to their career needs.

---

## 🌟 Key Features

- **ATS-Friendly Layouts:** Designed to pass Applicant Tracking Systems with clean structuring.
- **Multiple Resumes Management:** Create, edit, rename, delete, import, and export multiple resumes.
- **Dynamic Customization:**
  - **Layouts:** Switch between single-column and multi-column designs.
  - **Typography:** Choose from a variety of fonts optimized for both English and Arabic.
  - **Spacing:** Adjust spacing settings (compact vs. spacious).
  - **Bilingual Support:** Full support for English and Arabic (including RTL direction).
- **Real-Time PDF Preview:** Instantly see your changes reflected in a live document-sized preview and export your resume directly as a PDF.
- **Data Portability:** Export and import your resume data using JSON files.

---

## 📄 CV Sections Available

1. **General Information:** Name, job title, email, phone number, and address.
2. **Educational Experience:** School/College name, title of study, and dates.
3. **Practical Experience:** Company name, position title, main responsibilities, and work duration.
4. **Skills:** Highlight your core competencies.

_(Note: All sections are completely modular; you can add, reorder, or leave any section empty as needed.)_

---

## 🚀 How to Use

### 1. Home Page

- Explore the services offered, view features, and navigate directly to your dashboard or resume builder.

### 2. Managing Your Resumes (`/my-resumes`)

- **Create:** Click the **"Create New"** button to start a fresh resume or **"Import"** to upload an existing JSON resume file.
- **Actions:** Use the card menu on any resume to rename it, duplicate it, delete it, export it as a JSON file, or download it as a PDF.
- **Edit:** Click on a resume card to open it in the builder.

### 3. Building Your Resume (`/builder`)

- **Fill in Details:** Add your personal info, work experience, education, and skills. Use the drag handles to reorder sections.
- **Customize Settings:** Use the header settings to change the layout columns, typography, spacing, and language (English/Arabic).
- **Export:** Click the **Download** button in the top right to generate and save your final PDF resume.

---

## 🛠️ Local Development

If you want to run the project locally:

1. Clone the repository:
   ```bash
   git clone git@github.com:AbdulRhmanHS/VantageCV.git
   cd VantageCV
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```
