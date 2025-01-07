import { getBlogMetadata } from "@/lib/getBlogSlugs";
import { getBlogContent } from "@/lib/getBlogContent";
import MDXContent from "@/components/mdx-content";
import { serialize } from "next-mdx-remote/serialize";

type Params = Promise<{ slug: string }>;
type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateStaticParams() {
  const posts = await getBlogMetadata("blogs");
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const { data } = await getBlogContent(slug);
  return {
    title: data.title,
  };
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const BlogPage = async (props: { params: Params }) => {
  const params = await props.params;
  const slug = params.slug;
  const { data, content } = await getBlogContent(slug);
  const mdxSource = await serialize(content);

  return (
    <div className="flex flex-col gap-4">
      <a className="text-label-small text-tertiary">{formatDate(data.date)}</a>
      <MDXContent source={mdxSource} />
    </div>
  );
};

export default BlogPage;
