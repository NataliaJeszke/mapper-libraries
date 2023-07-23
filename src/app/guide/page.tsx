import Link from "next/link";

export default function Guide() {
  return (
    <div className="flex min-h-screen flex-row">
      <section className="flex flex-col gap-4 p-5 bg-white flex-wrap shadow-lg align-center items-center text-justify">
        <article className="flex flex-col gap-4 w-6/12 justify-items-center">
          <h3 className="text-center m-2">
            System Mapowania dla Schematów Bibliotecznych
          </h3>
          <p>
            System Mapowania dla Schematów Bibliotecznych to aplikacja oparta na
            Next.js 13, wykorzystująca bibliotekę React DnD oraz Tailwind CSS do
            stylizacji. Głównym celem tej aplikacji jest ułatwienie mapowania
            schematów cyfrowych bibliotek. Składa się ona z trzech głównych
            okien: lewe okno, w którym użytkownicy mogą przesyłać pliki
            schematów cyfrowych bibliotek, prawe okno z wyborem domyślnych
            schematów do zmapowania, oraz środkowe okno, w którym można
            przeciągać i łączyć tagi z okien lewego i prawego do mapowania. Po
            przeciągnięciu tagów na obszar mapowania, wynikowy schemat można
            zapisać jako plik JSON i pobrać na dysk lokalny użytkownika. Format
            pliku JSON jest powszechnie stosowany do komunikacji klient-serwer z
            uwagi na swoją wszechstronność, co czyni go odpowiednim do
            integracji z systemami backendowymi wyszukiwarek obiektów
            kulturalnych i naukowych w formie zdigitalizowanej, a także do
            udostępniania innym bibliotekom cyfrowym. Obecnie aplikacja
            akceptuje dwa rodzaje plików: XML i XLSX (pliki Excel). Pliki XML są
            powszechnym formatem dla schematów cyfrowych bibliotek i muszą
            zawierać atrybut "ref" związany z nazwą tagu, np. ref="Title".
            Aplikacja czyta również zagnieżdżone atrybuty "ref". Pliki Excel
            powinny zawierać tagi tylko w kolumnie A, wymienione jeden pod
            drugim.
            <p>Przykład: 1:A Tytuł 2:A Autor ...</p>
            <Link href="https://docs.google.com/spreadsheets/d/1avIUiTm456Hd96mj4nLbJouQ4r1yeSwdqc6QrCXSsl8/edit?usp=sharing">
              <p className="font-bold">Przykład dla plików Excel</p>
            </Link>
          </p>
        </article>
        <article className="flex flex-col gap-4 w-6/12">
          <h3 className="text-center m-2">
            The Mapping System for Libraries Schemas
          </h3>
          <p>
            The Mapping System for Libraries Schemas is an application built on
            Next.js 13, utilizing the React DnD library and Tailwind CSS for
            styling. The primary purpose of this application is to facilitate
            the mapping of digital library schemas. It consists of three main
            windows: a left-side window for users to upload digital library
            schema files, a right-side window with a selection of default
            schemas to be mapped, and a middle window for dragging and
            associating tags from the left and right windows for mapping. After
            the tags are dragged into the mapping area, the resulting schema can
            be saved as a JSON file and downloaded to the user's local disk. The
            JSON file format is widely used for client-server communication due
            to its versatility, making it suitable for integration with backend
            systems of digitized cultural and scientific object search engines
            or sharing with other digital libraries. The application currently
            accepts two types of files: XML and XLSX (Excel files). XML files
            are a common format for digital library schemas and must include an
            attribute "ref" associated with the tag name, e.g., ref="Title". The
            application also reads nested "ref" attributes. Excel files should
            contain tags only in column A, listed one below the other.
            <p>Example: 1:A Title 2:A Author ...</p>
            <Link href="https://docs.google.com/spreadsheets/d/1avIUiTm456Hd96mj4nLbJouQ4r1yeSwdqc6QrCXSsl8/edit?usp=sharing">
              <p className="font-bold">Example for Excel files</p>
            </Link>
          </p>
        </article>
      </section>
    </div>
  );
}
