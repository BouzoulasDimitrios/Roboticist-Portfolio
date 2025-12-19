import Image from "next/image";

const contactDetails = [
  { label: "Email", value: "name@example.com", href: "mailto:name@example.com" },
  { label: "Location", value: "Dublin, Ireland" },
  { label: "LinkedIn", value: "linkedin.com/in/username", href: "https://linkedin.com/in/username" },
  { label: "GitHub", value: "github.com/username", href: "https://github.com/username" },
  { label: "GrabCAD", value: "grabcad.com/username", href: "https://grabcad.com/username" },
  {
    label: "Google Scholar",
    value: "scholar.google.com/citations?user=XXXXX",
    href: "https://scholar.google.com/citations?user=XXXXX",
  },
  { label: "YouTube", value: "youtube.com/@username", href: "https://youtube.com/@username" },
];

export default function Contact() {
  return (
    <main className="container mx-auto px-4 py-10">
      <section className="project-card flex flex-col gap-6 p-6 md:flex-row md:items-start">
        <Image
          src="/images/profile.png"
          alt="Profile picture"
          width={144}
          height={144}
          className="h-36 w-36 rounded-full object-cover shadow-md"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-4">Get in touch</h1>
          <p className="mb-4 text-gray-200">
            Reach out for opportunities, collaborations, or questions about my work.
          </p>

          <dl className="space-y-4">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="rounded-lg border border-gray-800 bg-gray-900/70 p-4">
                <dt className="text-sm uppercase tracking-wide text-gray-400">{detail.label}</dt>
                <dd className="mt-1 text-lg font-semibold text-indigo-100">
                  {detail.href ? (
                    <a href={detail.href} className="hover:text-indigo-200">
                      {detail.value}
                    </a>
                  ) : (
                    detail.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
