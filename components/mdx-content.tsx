"use client"; // Make this a client-side component

import { FC } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXProvider } from "@mdx-js/react";
import { customMdxComponents } from "@/mdx-components";

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

const MDXContent: FC<MDXContentProps> = ({ source }) => {
  return (
    <MDXProvider components={customMdxComponents}>
      <MDXRemote {...source} />
    </MDXProvider>
  );
};

export default MDXContent;
