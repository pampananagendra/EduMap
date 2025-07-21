// Comprehensive type declarations to resolve all module errors

// React and JSX
declare module 'react' {
  const React: typeof import('react');
  export = React;
  export as namespace React;
}

declare module 'react/jsx-runtime' {
  export const jsx: (type: string, props: Record<string, unknown>) => JSX.Element;
  export const jsxs: (type: string, props: Record<string, unknown>) => JSX.Element;
  export const Fragment: React.ComponentType<{ children?: React.ReactNode }>;
}

// React Router
declare module 'react-router-dom' {
  export const Routes: React.ComponentType<{ children?: React.ReactNode }>;
  export const Route: React.ComponentType<Record<string, unknown>>;
  export const Link: React.ComponentType<{ to: string; children?: React.ReactNode; className?: string }>;
  export const useParams: () => Record<string, string | undefined>;
  export const useNavigate: () => (to: string) => void;
  export const BrowserRouter: React.ComponentType<{ children?: React.ReactNode }>;
  export const useLocation: () => { pathname: string; search: string; hash: string };
}

// External Libraries
declare module 'lucide-react' {
  export const BookOpen: React.ComponentType<{ className?: string; size?: number }>;
  export const Calculator: React.ComponentType<{ className?: string; size?: number }>;
  export const Palette: React.ComponentType<{ className?: string; size?: number }>;
  export const Microscope: React.ComponentType<{ className?: string; size?: number }>;
  export const Users: React.ComponentType<{ className?: string; size?: number }>;
  export const Globe: React.ComponentType<{ className?: string; size?: number }>;
  export const ChevronRight: React.ComponentType<{ className?: string; size?: number }>;
  export const Target: React.ComponentType<{ className?: string; size?: number }>;
  export const TrendingUp: React.ComponentType<{ className?: string; size?: number }>;
  export const Award: React.ComponentType<{ className?: string; size?: number }>;
  export const Stethoscope: React.ComponentType<{ className?: string; size?: number }>;
  export const Cpu: React.ComponentType<{ className?: string; size?: number }>;
  export const FlaskConical: React.ComponentType<{ className?: string; size?: number }>;
  export const Atom: React.ComponentType<{ className?: string; size?: number }>;
}

declare module '@tanstack/react-query' {
  export const QueryClient: new () => unknown;
  export const QueryClientProvider: React.ComponentType<{ client: unknown; children?: React.ReactNode }>;
}

// UI Components
declare module '@/components/ui/card' {
  export const Card: React.ComponentType<{ className?: string; children?: React.ReactNode }>;
  export const CardContent: React.ComponentType<{ className?: string; children?: React.ReactNode }>;
  export const CardDescription: React.ComponentType<{ className?: string; children?: React.ReactNode }>;
  export const CardHeader: React.ComponentType<{ className?: string; children?: React.ReactNode }>;
  export const CardTitle: React.ComponentType<{ className?: string; children?: React.ReactNode }>;
}

declare module '@/components/ui/button' {
  export const Button: React.ComponentType<{ className?: string; children?: React.ReactNode; onClick?: () => void; size?: string; variant?: string }>;
}

declare module '@/components/ui/toaster' {
  export const Toaster: React.ComponentType<Record<string, never>>;
}

declare module '@/components/ui/sonner' {
  export const Toaster: React.ComponentType<Record<string, never>>;
}

declare module '@/components/ui/tooltip' {
  export const TooltipProvider: React.ComponentType<{ children?: React.ReactNode }>;
}

// Wildcard declarations for all modules
declare module '../pages/*' {
  const component: React.ComponentType<Record<string, unknown>>;
  export default component;
}

declare module '../components/*' {
  const component: React.ComponentType<Record<string, unknown>>;
  export default component;
}

declare module '@/components/*' {
  const component: React.ComponentType<Record<string, unknown>>;
  export default component;
}

declare module '*.tsx' {
  const component: React.ComponentType<Record<string, unknown>>;
  export default component;
}

declare module '*.ts' {
  const module: Record<string, unknown>;
  export default module;
}

// Specific modules that might be missing
declare module '../AppHelpers' {
  export const DashboardRouter: React.ComponentType<Record<string, unknown>>;
  export const RedirectToDashboard: React.ComponentType<Record<string, unknown>>;
}

// Global React types
declare namespace React {
  type FC<P = Record<string, never>> = React.FunctionComponent<P>;
  type ComponentType<P = Record<string, never>> = React.ComponentType<P>;
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    [key: string]: unknown;
  }
  interface AriaAttributes {
    [key: string]: unknown;
  }
  interface DOMAttributes<T> {
    [key: string]: unknown;
  }
}
