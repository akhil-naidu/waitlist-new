{
  /*
Note: This code includes an example of how to fetch data from an external JSON file that is hosted at https://raw.githubusercontent.com/cruip/cruip-dummy/main/waitlist-posts.json. To facilitate this, we've included a lib directory in the root which contains a function that can fetch the JSON content. Additionally, we've defined the Post types in the types.d.ts file located in the root.
*/
}

import getAllPosts from "@/lib/getAllPosts";

export const metadata = {
  title: "Updates - NextGen Forex",
  description: "Latest updates and announcements about our forex trading platform launch.",
};

import PageHeader from "@/components/page-header";
import Cta from "@/components/cta";
import Posts from "@/app/(default)/updates/posts";

export default async function Updates() {
  const postsData: Promise<Post[]> = getAllPosts();
  const posts = await postsData;

  return (
    <>
      <section>
        <div className="pt-32 pb-12 md:pt-44 md:pb-20">
          <div className="px-4 sm:px-6">
            <PageHeader
              title="Platform Updates"
              description="Stay informed about our latest developments, features, and launch progress. Get exclusive insights into what's coming next."
            >
              Latest News
            </PageHeader>
          </div>
        </div>
      </section>

      <Posts posts={posts} />
      <Cta />
    </>
  );
}