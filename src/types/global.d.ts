// Global type declarations to resolve all module errors
declare module '*.tsx' {
  const component: React.ComponentType<Record<string, unknown>>;
  export default component;
}

declare module '*.ts' {
  const module: Record<string, unknown>;
  export default module;
}

// Resolve all page imports
declare module '../pages/*' {
  const component: React.ComponentType<Record<string, unknown>>;
  export default component;
}

// Resolve all component imports
declare module '../components/*' {
  const component: React.ComponentType<Record<string, unknown>>;
  export default component;
}

declare module '@/components/*' {
  const component: React.ComponentType<Record<string, unknown>>;
  export default component;
}

// Global React types
declare namespace React {
  type FC<P = Record<string, never>> = React.FunctionComponent<P>;
  type ComponentType<P = Record<string, never>> = React.ComponentType<P>;
}
