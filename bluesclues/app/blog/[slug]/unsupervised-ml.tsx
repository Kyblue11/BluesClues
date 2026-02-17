import Image from "next/image";

export default function UnsupervisedML() {
  return (
    <>
      <a
        href="https://kyblue11.github.io/Travel-Behaviour-Segmentation/"
        target="_blank"
      >
        <div className="border-2 border-zinc-600 bg-white p-8 rounded-lg">
          <p className="text-center">View it live at Github Pages!</p>

          <div className="flex flex-col lg:flex-row items-center gap-8 mt-8">
            <div className="flex flex-col lg:w-1/2">
              <Image
                src="/dendrogram.png"
                alt="Dendrogram for Cluster Selection"
                width={800}
                height={100}
              />
            </div>
            <div className="flex flex-col lg:w-1/2">
              <Image
                src="/matrix.png"
                alt="Correlation Matrix for Park Characteristics"
                width={800}
                height={100}
              />
            </div>
          </div>
        </div>
      </a>
      <p className=" text-sm text-zinc-600 text-center mt-4">
        Topic: Visitor Travel Behaviour Segmentation and Satisfaction Modelling
        Using Machine Learning
      </p>
    </>
  );
}
