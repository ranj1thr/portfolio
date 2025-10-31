// src/pages/BlogList.tsx
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { useState, useMemo } from 'react';

// Blog posts data
const allPosts = [
  {
    id: 1,
    title: "The Story Behind STORKSTONE — Minimal Luxury in 92.5 Silver",
    description: "The origin story of STORKSTONE: crafting minimal, meaningful luxury with 92.5 sterling silver jewelry and premium scented candles.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN3yWckrkJlkqKfq0YnSW3uwPRpQucssYGaIjFECi89ydgq3_zeXfLJkXl4nlZcnYapAlG4tkrsKvVov8PlLf9C1I5PII-k8mKDZ_m4KrKL1ks_Q-yFZNKWUfw8XedUSCu8wogDEGQfBdqqZ563UqxDuTzpG94WAe3cp1kYavgO_gHt172aorczVviDOf5nI6-FgNrHbaYMOghxCAmwB0XnFNyh2_qWu4jC0vepOwogA2oFcb-WVovK4Ccqve-DQXT8WXCOil9jv4",
    author: "Ranjith R",
    date: "Oct 26, 2024",
    readTime: "8 min read",
    slug: "the-story-behind-storkstone",
    category: "Behind the Scenes",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Finding Your Signature Scent",
    description: "A guide to our premium candle collection and how to choose the perfect aroma for your space.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLx3SgGPzm_GIq4KZxrbCIcgwG-uJ77pWqcczaaAoVjrFl2epZyPoSXfwu6m9VOzDGAopwgY1uvVsHI6tpuD1nqWPEbEXN_GVBlh4h_X1GXu41Ve5JzyTaPXAh5leGDhr_2p0ln1s_PsxkaFdvCQrTdvRUJZHcOqXafYumQ0IHLqLANn3jorBVHPiGNveuuHtCtVfXzBM04vZ2tYn3eX_Xf1cWnvIrB187IzAanvigVRiKVnFzpSIzmkbQhfCerIy97AUCDxbpUr_m",
    author: "STORKSTONE",
    date: "Oct 15, 2023",
    readTime: "4 min read",
    slug: "finding-your-signature-scent",
    category: "Candle Scents",
  },
  {
    id: 3,
    title: "Keep Your Shine: 92.5 Silver Care",
    description: "Simple steps to ensure your favorite STORKSTONE pieces last a lifetime.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUEYB_vf-g5lgkYDn3e--PYFe3JmNjdEG8b1R4QMbqMzq9OxcPpgCzrWYv1kUizZKO-JDFhfSqay9hurSzGrW1RJSVCaqRhS4b-d8uN6JBobdRKaYPYCtQACPpG4LTeLYKPGswbBlnN6jUrAYgRaFxU5kAkMyBhtBjDsGuWxLtuTa8ncM6OV4FQucRbGKsQ4T_QLfNBpGkk2ulqPWl8vgOrjgRrmgYq70vg_ZoVai5oLjjDyklHqudN3mjXe4f3Yd1ewgn4Tuy9zv8",
    author: "STORKSTONE",
    date: "Sep 30, 2023",
    readTime: "3 min read",
    slug: "keep-your-shine-silver-care",
    category: "Jewelry Care",
  },
  {
    id: 4,
    title: "Our Commitment to Craftsmanship",
    description: "Go behind the scenes and explore the passion and precision that goes into every piece.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKYRodzgEivJSpceGOUuG_-37iS9roFu-_DzWfKOVcsSEAZRGNTGqHPzvhOT1vxw7fpJqW-zm8MGPosofPMWeWZ9DM_jCJgE9YPqpudPUFkDaLvfR0nWfuaF0ST2bChFccUdzE8kRNZgp_3TFAzrLenzcjQAbxmXVxikf6p_muYAdp3Uy7ZlEbPazfEND-K1qlQwifgT_Qt_pA6udPvaHLwufzDQpYrW_hxtidKac-ILFW57v2KsDuc7AUWAXEVs7OD8AGdq6wth70",
    author: "STORKSTONE",
    date: "Sep 18, 2023",
    readTime: "6 min read",
    slug: "commitment-to-craftsmanship",
    category: "Behind the Scenes",
  },
];

const categories = ["All", "Jewelry Care", "Styling Tips", "Candle Scents", "Behind the Scenes"];

export function BlogList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter posts based on search query and category
  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesSearch = 
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredPost = filteredPosts.find(post => post.isFeatured) || filteredPosts[0];
  const regularPosts = filteredPosts.filter(post => !post.isFeatured);

  return (
    <div className="bg-background-light dark:bg-bg-dark font-body text-text-light dark:text-text-dark min-h-screen flex flex-col">
      <Helmet>
        <title>The STORKSTONE Journal</title>
        <meta
          name="description"
          content="Explore articles about jewelry care, styling tips, candle scents, and behind-the-scenes stories from STORKSTONE."
        />
        <link rel="canonical" href="https://www.ranjithr.dev/blog" />
      </Helmet>

      {/* Main Navigation */}
      <Navigation />

      {/* Blog Header */}
      <div className="bg-background-light dark:bg-bg-dark pt-24 md:pt-28 pb-8 lg:pb-12 text-center">
        <h1 className="text-text-light dark:text-text-dark text-3xl lg:text-5xl font-display font-bold leading-tight tracking-tight">
          The STORKSTONE Journal
        </h1>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl w-full mx-auto px-4 lg:px-8">
        {/* Search Bar */}
        <div className="py-3 lg:py-6">
          <label className="flex flex-col min-w-40 h-12 lg:h-14 w-full max-w-2xl mx-auto">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full shadow-sm">
              <div className="text-text-muted-light dark:text-gray-400 flex border-none bg-white dark:bg-gray-800 items-center justify-center pl-4 lg:pl-6 rounded-l-lg border-r-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-blue-600 focus:border-transparent border border-slate-300 dark:border-gray-700 bg-white dark:bg-gray-800 h-full placeholder:text-text-muted-light dark:placeholder:text-gray-400 px-4 lg:px-6 rounded-l-none border-l-0 pl-2 text-base lg:text-lg font-normal leading-normal transition-all"
                placeholder="Search articles"
              />
            </div>
          </label>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-3 pt-1 pb-4 lg:pb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex h-8 lg:h-10 items-center justify-center gap-x-2 rounded-lg px-4 lg:px-6 transition-colors ${
                selectedCategory === category
                  ? 'bg-primary hover:bg-primary/90 text-white'
                  : 'bg-accent dark:bg-gray-800 hover:bg-accent/70 dark:hover:bg-gray-700 text-text-light dark:text-text-dark'
              }`}
            >
              <span className="text-sm lg:text-base font-medium leading-normal whitespace-nowrap">{category}</span>
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-8 lg:mb-12">
            <h2 className="text-text-light dark:text-text-dark text-lg lg:text-2xl font-display font-bold leading-tight tracking-tight pb-3 lg:pb-4">
              Featured Post
            </h2>
            <Link 
              to={`/blog/${featuredPost.slug}`}
              className="flex flex-col items-stretch justify-start rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow"
            >
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                style={{
                  backgroundImage: `url("${featuredPost.image}")`
                }}
                role="img"
                aria-label={featuredPost.title}
              />
              <div className="flex w-full grow flex-col items-stretch justify-center gap-2 p-4 lg:p-6">
                <h3 className="text-text-light dark:text-text-dark text-xl lg:text-3xl font-display font-bold leading-tight tracking-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-text-muted-light dark:text-gray-400 text-sm lg:text-base font-normal leading-relaxed">
                  {featuredPost.description}
                </p>
                <p className="text-text-muted-light dark:text-gray-400 text-xs lg:text-sm font-normal leading-normal pt-1">
                  By {featuredPost.author} • {featuredPost.date} • {featuredPost.readTime}
                </p>
              </div>
            </Link>
          </section>
        )}

        {/* All Posts */}
        <section className="mb-8 lg:mb-12">
          <h2 className="text-text-light dark:text-text-dark text-lg lg:text-2xl font-display font-bold leading-tight tracking-tight pb-3 lg:pb-4">
            All Posts {regularPosts.length > 0 && `(${regularPosts.length})`}
          </h2>
          
          {regularPosts.length === 0 ? (
            <p className="text-text-muted-light dark:text-gray-400 text-center py-12">
              No posts found matching your search criteria.
            </p>
          ) : (
            <>
              {/* Desktop Grid Layout (3 columns) */}
              <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
                {regularPosts.map((post) => (
                  <Link 
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="flex flex-col rounded-xl hover:bg-accent/50 dark:hover:bg-gray-800 p-3 -m-3 transition-colors"
                  >
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg mb-3"
                      style={{
                        backgroundImage: `url("${post.image}")`
                      }}
                      role="img"
                      aria-label={post.title}
                    />
                    <div className="flex flex-col gap-2">
                      <h3 className="text-text-light dark:text-text-dark text-xl font-display font-bold leading-tight tracking-tight">
                        {post.title}
                      </h3>
                      <p className="text-text-muted-light dark:text-gray-400 text-sm font-normal leading-normal">
                        {post.description}
                      </p>
                      <p className="text-text-muted-light dark:text-gray-400 text-xs font-normal leading-normal pt-1">
                        By {post.author} • {post.date} • {post.readTime}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Mobile List Layout */}
              <div className="space-y-6 lg:hidden">
                {regularPosts.map((post) => (
                  <Link 
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="flex items-start justify-start gap-4 rounded-xl hover:bg-accent/50 dark:hover:bg-gray-800 p-2 -m-2 transition-colors"
                  >
                    <div
                      className="w-1/3 shrink-0 bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                      style={{
                        backgroundImage: `url("${post.image}")`
                      }}
                      role="img"
                      aria-label={post.title}
                    />
                    <div className="flex w-2/3 grow flex-col items-stretch justify-center gap-1 py-1">
                      <h3 className="text-text-light dark:text-text-dark text-lg font-display font-bold leading-tight tracking-tight">
                        {post.title}
                      </h3>
                      <p className="text-text-muted-light dark:text-gray-400 text-sm font-normal leading-normal">
                        {post.description}
                      </p>
                      <p className="text-text-muted-light dark:text-gray-400 text-xs font-normal leading-normal pt-1">
                        By {post.author} • {post.date} • {post.readTime}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </section>

        {/* Load More Button */}
        <div className="py-8 lg:py-12 text-center">
          <button className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 lg:h-12 px-6 lg:px-8 bg-primary/20 text-primary text-sm lg:text-base font-medium leading-normal mx-auto hover:bg-primary/30 transition-colors">
            <span className="truncate">Load More</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
