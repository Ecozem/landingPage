import { BiSolidCheckbox } from "react-icons/bi";
import { BsCheckAll } from "react-icons/bs"

const features = [
  {
    name: "Lorem ipsum",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",

    icon: BiSolidCheckbox,
  },
  {
    name: "Lorem ipsum",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",

    icon: BiSolidCheckbox,
  },
  {
    name: "Lorem ipsum",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",

    icon: BiSolidCheckbox,
  },
];

const features1 = [
  {
    name: "Environnement propre",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",

    icon: BsCheckAll,
  },
  {
    name: "Coûts d'exploitation réduits",
    description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",

    icon: BsCheckAll,
  },
  {
    name: "Trajet confortable ",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",

    icon: BsCheckAll,
  },
];

export default function Service() {
  return (
    <section id="get-started-today" className="relative overflow-hidden py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-center text-3xl font-bold tracking-tight text-[#2597A2] sm:text-4xl">
            NOS SERVICES
          </h2>
          <p className="text-center text-base font-semibold leading-7 text-[#6B7280] pt-4">
            Sed ut perspiciatis unde omnis natus error sit voluptatem
            accusantium
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex space-x-4 items-center justify-center text-center"
              >
                <dd className="mt-1 flex flex-auto flex-col space-y-2 text-base leading-7 text-gray-600 items-center">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-lg bg-[#2597A2]">
                      <feature.icon
                        className="h-6 w-6 text-[#2597A2]"
                        aria-hidden="true"
                      />
                    </div>
                  </dt>
                  <p className="text-lg font-semibold leading-7 text-gray-900">
                    {feature.name}
                  </p>
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-8">
        <div className="mx-auto lg:mx-0">
          <p className="text-center text-base font-semibold leading-7 text-[#6B7280] pt-4">
            Sed ut perspiciatis unde omnis natus error sit voluptatem
            accusantium
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features1.map((feature) => (
              <div key={feature.name} className="flex space-x-4">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center  bg-white pt-8">
                    <feature.icon
                      className="h-12 w-12 text-[#1191cd]"
                      aria-hidden="true"
                    />
                  </div>
                </dt>
                <dd className="mt-1 flex flex-auto flex-col space-y-2 text-base leading-7 text-gray-600">
                  <p className="text-lg font-semibold leading-7 text-gray-900">
                    {feature.name}
                  </p>
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
