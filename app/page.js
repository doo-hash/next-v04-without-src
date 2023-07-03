export default function Login() {
  return (
    <main>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <div className="text-center">
          <img
            className="rounded mx-auto d-block w-25"
            src="/novoprosologo-short.png"
            alt="Your Company"
          />
          <h4 className="mt-10 mb-5 text-center">
            Sign in to your account
          </h4>
        </div>

        <div className="mx-auto w-50">
          <form>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control" id="email" name="email" required autoComplete="true" />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" name="password" required />
            </div>
            <button type="submit" class="btn btn-primary">Sign in</button>
          </form>
        </div>
      </div>
    </main>
  )
}
