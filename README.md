## Dealflow Dashboard

This repository contains the source code for the Dealflow dashboard, a React-Next.js project with Tailwind CSS. The dashboard is designed to provide users with various functionalities across four main sections: Profile Page, Design Studio, Withdrawal, and Notification.

### Installation

To run this project locally, follow these steps:

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.

### Sections

#### 1. Profile Page

The Profile Page features a circular progress bar on the left, with a Call-To-Action (CTA) section that expands the profile score part and hides the right section. The right side consists of input fields for user data, which will be utilized in later sections. Local state management is employed to handle the UI interactions.

#### 2. Design Studio

The Design Studio allows users to customize their invoices. It comprises two sections:

- **Left Section**: Users can upload up to 5 avatars, adjust the color scheme using a bar, toggle the display of company and personal names, and navigate through different form templates via a carousel.
- **Right Section**: Displays the template invoice, with the theme determined by the bar on the left. The invoice also features an avatar selected from the uploaded avatars. Global state management, utilizing Recoil, is utilized to maintain data consistency between this page and the Profile Page, including uploaded images.

#### 3. Withdrawal

The Withdrawal section enables users to withdraw cash through a multi-step process. State management, using a single integer state, simplifies the process and facilitates the progress bar's functionality. Custom modal components, implemented with two different states, enhance user experience without relying on external packages.

#### 4. Notification

The Notification section is designed to display toast or snackbar messages, providing users with relevant notifications based on their interactions within the dashboard.

### Credits

This project was completed as part of an assignment for Dealflow.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to reach out if you have any questions or need further assistance!
