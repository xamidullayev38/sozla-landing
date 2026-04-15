import { RouterProvider } from "./router/RouterProvider";

export function Providers({ children }) {
  return (
    <RouterProvider>
      {children}
    </RouterProvider>
  );
}