import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import BlogLinks from "@/components/blog-links";
import { getBlogMetadata } from "@/lib/getBlogSlugs";

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const blogs = await getBlogMetadata("blogs");
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <div className="mt-4 py-8 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col text-left">
                <p className="text-md">Blogs</p>
                <p className="text-small text-default-500">All Blogs</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                <BlogLinks blogs={blogs} />
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>{children}</CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
