export default function DataUpload() {
  return (
    <main>
      <div className="d-flex flex-column justify-content-center mx-auto mt-5 py-lg-2">
          <h4 className="mt-5 text-center">
            File Uploads
          </h4>

        <div className="mt-5 mx-auto">
          <form className="p-6" action="#" method="POST">
            <div>
              <label for="datasource" className="form-label">Choose the files to upload</label>
              <input className="form-control form-control-md" id="datasource" name="datasource" type="file" multiple required />
            </div>
            <div className="text-center">
              <button type="submit" className="px-1 mt-3 btn btn-sm btn-outline-primary w-50">Upload</button>
            </div>
          </form>

        </div>
      </div>
    </main>
  )
}
