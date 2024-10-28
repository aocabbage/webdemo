export function FilledButton({ children }) {
    return (
      <DefaultButton style="bg-primary-50 border-secondary-700 text-secondary-700 md:hover:bg-secondary-900 md:hover:border-secondary-900 md:hover:text-primary-50">
        {children}
      </DefaultButton>
    );
  }
  
  export function OutlinedButton({ children }) {
    return (
      <DefaultButton style="border-primary-200 text-primary-200 md:hover:border-primary-400 md:hover:text-primary-400">
        {children}
      </DefaultButton>
    );
  }
  
  function DefaultButton({ children, style }) {
    return (
      <button
        className={`bg-primary-50 border rounded-full md:px-4 px-3.5 md:py-2 py-1.5 transition-colors ${style}`}
      >
        {children}
      </button>
    );
  }