import type { MDXComponents } from "mdx/types";
import type { ComponentType } from "react";
import { VerticalBarIcon } from "./components/icons";

type CustomMdxComponents = {
  h1: ComponentType;
  h2: ComponentType;
  h3: ComponentType;
  p: ComponentType;
  a: ComponentType;
  ul: ComponentType;
  ol: ComponentType;
  pre: ComponentType;
  blockquote: ComponentType;
};

export const customMdxComponents: CustomMdxComponents = {
  h1: (props) => <h1 className="text-display-large text-primary" {...props} />,
  h2: (props) => (
    <h2 className="text-display-medium font-bold underline " {...props} />
  ),
  h3: (props) => <h3 className="text-display-small" {...props} />,
  p: (props) => <p className="text-body-large" {...props} />,
  a: (props) => (
    <a className="text-primary underline text-body-large" {...props} />
  ),
  ul: (props) => (
    <ul className="list-disc list-inside text-body-large px-8" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal list-inside text-body-large py-8" {...props} />
  ),
  pre: (props) => (
    <pre
      className="text-body-large text-on-surface-variant bg-surface-container p-4 rounded-lg"
      {...props}
    />
  ),
  blockquote: (props) => (
    <div className="flex items-center gap-2 bg-surface-variant p-4 rounded-lg">
      {/* <VerticalBarIcon className="text-secondary inline-block" /> */}
      <blockquote className="text-body-large" {...props} />
    </div>
  ),
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...customMdxComponents,
  };
}
