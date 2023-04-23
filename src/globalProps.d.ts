declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      settings: Record<string, unknown>;
      
    }
  }
  
  export {}