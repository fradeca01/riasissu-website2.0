export {};

declare global {
  interface Window {
    /** Flowbite’s initializer (added by the Flowbite script) */
    Flowbite?: any;
    initFlowbite?: () => void;
  }
}