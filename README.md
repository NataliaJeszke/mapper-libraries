# Mapping System for Libraries Schemas


## Description

Mapping System for Libraries Schemas is an application built on Next.js 13, utilizing the React DnD library and Tailwind CSS for styling. The primary purpose of this application is to facilitate the mapping of digital library schemas. It consists of three main windows: a left-side window for users to upload digital library schema files, a right-side window with a selection of default schemas to be mapped, and a middle window for dragging and associating tags from the left and right windows for mapping. After the tags are dragged into the mapping area, the resulting schema can be saved as a JSON file and downloaded to the user's local disk.

The JSON file format is widely used for client-server communication due to its versatility, making it suitable for integration with backend systems of digitized cultural and scientific object search engines or sharing with other digital libraries.

The application currently accepts two types of files: XML and XLSX (Excel files). XML files are a common format for digital library schemas and must include an attribute "ref" associated with the tag name, e.g., ref="Title". The application also reads nested "ref" attributes. Excel files should contain tags only in column A, listed one below the other, for example:
```
1:A Title
2:A Author
...
```

The application is designed to be easily extendable, with plans to support mapping of more file types (e.g., text, CSV) and additional default data schemas (e.g., MARC21).

### For better performance use above ≥576px viewport.

## Features

- Drag and Drop functionality for easy tag mapping.
- Support for XML and XLSX file formats.
- Save mapped schemas as JSON files.
- Intuitive user interface with three main windows for smooth interaction.
- Integration of default data schemas for quick mapping.
- Future plans to expand support for various client file types and default data schemas.

## Usage

1. Clone the repository and navigate to the project folder.
2. Install dependencies using npm:
   ```
   npm install
   ```
3. Run the application locally:
   ```
   npm run dev
   ```
4. Access the application through your web browser at `http://localhost:3000`.

## Future Enhancements

- Support for additional client file types (e.g., text, CSV).
- Integration of more default data schemas (e.g., MARC21).
- Improved user interface and accessibility features.
- Performance optimizations for handling larger files.

## Contributing

Contributions to the Mapping System for Libraries Schemas application are welcome! If you find any issues or have ideas for improvements, please submit them as GitHub issues or create pull requests.

## License

[MIT License](LICENSE) (Replace 'LICENSE' with the actual link to your license file)

## Contact

For any inquiries or feedback, please contact us at contact@example.com. (Replace 'contact@example.com' with your actual contact email)

---

Please note that the content above is a template, and you should customize it according to your specific project details and preferences. Also, make sure to include the appropriate license file in your project folder and update the license link accordingly in the README.
