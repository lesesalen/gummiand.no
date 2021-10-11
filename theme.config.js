export default {
  github: "https://github.com/lesesalen/gummiand.no",
  docsRepositoryBase: "https://github.com/lesesalen/gummiand.no/blob/master",
  titleSuffix: " | Gummiand",
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null,
  darkMode: true,
  footer: true,
  footerText: ``,
  footerEditLink: `Endre på GitHub`,
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Gummiand</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        II Survival Guide
      </span>
    </>
  ),
  head: ({ title, meta }) => {
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="no" />
        <meta
          name="description"
          content={meta.description ?? "Gummiand: II Survival Guide"}
        />
        <meta
          name="og:description"
          content={meta.description ?? "Gummiand: II Survival Guide"}
        />
        <meta
          name="og:title"
          content={
            title ? `${title} | Gummiand` : "Gummiand: II Survival Guide"
          }
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </>
    );
  },
};
