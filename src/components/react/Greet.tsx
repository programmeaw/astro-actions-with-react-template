export default function Greet() {
  return (
    <div className="bg-background flex w-full max-w-md flex-col gap-2 rounded-lg p-6 shadow-md">
      <h2 className="text-foreground mb-4 text-2xl font-bold">Welcome</h2>
      <p className="text-foreground-muted mb-4">
        Please enter your name below to get started.
      </p>

      <form className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="text-foreground mb-2 block">
            Your Name
          </label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            className="border-foreground-muted bg-background text-foreground focus:ring-accent-500 w-full rounded-md border px-4 py-2 transition-colors focus:ring-2 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="bg-accent-500/50 hover:bg-accent-900 cursor-pointer rounded-md px-6 py-2 font-medium text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50"
        >
          Submit
        </button>
      </form>

      <button
        type="submit"
        className="bg-accent-500/50 hover:bg-accent-900 cursor-pointer rounded-md px-6 py-2 font-medium text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50"
      >
        Get Suggestion
      </button>
    </div>
  );
}
