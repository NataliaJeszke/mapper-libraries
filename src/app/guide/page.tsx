import Link from "next/link";

export default function Guide() {
  return (
    <div className="flex min-h-screen flex-row">
      <section className="flex flex-col gap-4 p-5 bg-white flex-wrap shadow-lg align-center items-center text-justify">
        <article className="flex flex-col gap-4 w-6/12">
          <h4 className="text-center m-2 font-bold">
            User Manual for "Library Schema Mapping System"
          </h4>
          <h4 className="text-center m-2">
            Accepted files: XML, XSD, XLSX (Excel)
            <Link href="https://docs.google.com/spreadsheets/d/1avIUiTm456Hd96mj4nLbJouQ4r1yeSwdqc6QrCXSsl8/edit?usp=sharing">
              <p className="font-bold">Example for Excel files</p>
            </Link>
          </h4>
          <h4 className="text-center m-2 font-bold">
            Step 1: Upload your file with a custom metadata tag schema
          </h4>
          <p>
            On the main screen of the application, you will find three windows:
            the left window, the right window and the center window (mapper
            window). In the left window, click the "Upload file" button and
            choose the appropriate file containing your custom metadata tag
            schema. Wait for the file to be loaded and displayed in the left
            window.
          </p>
          <h4 className="text-center m-2 font-bold">
            Step 2: Select the schema for mapping
          </h4>
          <p>
            In the right window, you will find a list of available schemas for
            mapping. Choose the schema that you want to map your own metadata
            tag schema to.
          </p>
          <h4 className="text-center m-2 font-bold">Step 3: Tag Mapping</h4>
          <p>
            The left window displays a list of tags from the schema you
            uploaded. Drag and drop a tag from the left window to the middle
            window (mapper window). Next, drag and drop the corresponding tag
            from the right window to the middle window. The mapped tags will be
            arranged one below the other in the middle window, reflecting the
            mapping order. Tags can be used multiple times in the mapping, so
            you can drag the same tag multiple times.
          </p>
          <h4 className="text-center m-2 font-bold">
            Step 4: Removing tags from mapping
          </h4>
          <p>
            To remove a tag from the mapping, simply click on it in the middle
            window. Clicking on a tag will remove it from the mapping until you
            drag it again from the left and right windows to the middle window.
          </p>
          <h4 className="text-center m-2 font-bold">Step 5: Save mapping as JSON</h4>
          <p>
            Once the user finishes dragging the tags into the middle window,
            click the "Create JSON" button. The application will generate a JSON
            file containing the performed mapping and download it to the user's
            local disk.
          </p>
        </article>
      </section>
    </div>
  );
}
