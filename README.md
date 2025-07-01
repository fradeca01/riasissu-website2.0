# Getting Started

### Commands

Basic command:

| Command           | Action                                                                                                   |
| :---------------- | :------------------------------------------------------------------------------------------------------- |
| `nvm use ...`     | [Install node js](https://nodejs.org/en/download/) You will need to use Node.js version 20.3.0 or later. |
| `npm install`     | Installs dependencies                                                                                    |
| `npm run dev`     | Starts local dev server at `localhost:4321`                                                              |
| `npm run build`   | Build your production site to `./dist/`                                                                  |
| `npm run preview` | Preview your build locally, before deploying                                                             |

### Folder structure

Inside the project folder, you'll see the following folders and files:

```plaintext
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── blocks/
│   │   │   └── ...
│   │   └── ui/
│   │       └── ...
│   ├── config/
│   │   └── ...
│   ├── content/
│   │   └── blog/
│   │       └── ...
│   ├── data/
│   │   └── ...
│   ├── icons/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   ├── page-sections/
│   │   └── home/
│   │       └── ...
│   └── pages/
│       └── ...
└── package.json
```

| Directory/File           | Description                                                                                                                        |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `public/`                | Contains static assets like images and the favicon. These files are served directly at the root URL.                               |
| `src/assets/`            | Contains all images and assets used in the project.                                                                                |
| `src/components/`        | Contains reusable components for your site. This directory is divided into `ui` for UI components and `blocks` for section blocks. |
| `src/components/blocks/` | Contains Section blocks used throughout the site.                                                                                  |
| `src/components/ui/`     | Contains individual UI components.                                                                                                 |
| `src/config/`            | Contains configuration files for the project in typescript format.                                                                 |
| `src/content/`           | Holds collection data, such as blog posts.                                                                                         |
| `src/content/blog/`      | Contains individual blog posts in markdown.                                                                                        |
| `src/data/`              | Contains JSON and md files with content data (like features, testimonials etc).                                                    |
| `src/icons/`             | Contains all icons used in the project, sourced from [Heroicons](https://heroicons.com/).                                          |
| `src/layouts/`           | Contains layout components that define the overall structure of your pages.                                                        |
| `src/pages/`             | Contains `.astro` files for each page. Each file here is exposed as a route based on its file name.                                |
| `package.json`           | Lists dependencies and scripts for your project, including metadata and various package requirements.                              |

## Theme Configuration

You can find the configuration files in the `src/config` directory. The configuration files are written in TypeScript and contain various settings for the theme, such as basic information, navigation bar, footer navigation, analytics, and social links. You can customize these settings to fit your specific needs.

| Configuration File               | Description                                                                                     |
| -------------------------------- | ----------------------------------------------------------------------------------------------- |
| `src/config/config.ts`           | Includes the basic configuration settings including SEO, mode, and scroll animations.           |
| `src/config/navigationBar.ts`    | Includes menu options for the navigation bar.                                                   |
| `src/config/footerNavigation.ts` | Includes menu options for the footer navigation.                                                |
| `src/config/socialLinks.ts`      | Contains the social link data for the website.                                                  |


## License

Copyright © 2024 - Designed & Developed by [Oxygenna](http://www.oxygenna.com/)

Released under the MIT license.

