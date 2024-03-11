export function Register() {
    return (
    <div className="flex justify-center items-center">
        <div className="bg-white p-8 rounded shadow-md w-80">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input type="text" id="name" name="name" placeholder="Type your name" className="w-full border rounded-md py-2 px-3 text-gray-700"/>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input type="email" id="email" name="email" placeholder="Type your email" className="w-full border rounded-md py-2 px-3 text-gray-700"/>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
              <input type="password" id="password" name="password" placeholder="Type your password" className="w-full border rounded-md py-2 px-3 text-gray-700"/>
            </div>
            <button type="submit" className="w-full bg-gray-200 text-zinc-900 font-semibold py-2 px-4 rounded-md hover:bg-gray-300">Register</button>
          </form>
        </div>
    </div>
    );
}