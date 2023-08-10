/* eslint-disable jsx-a11y/no-redundant-roles */
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

const people = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl: ''
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl: ''
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl: ''
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl: ''
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl: ''
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl: ''
  },
]

export default function CallBack() {
  return (
    <><div className="mx-auto lg:mx-0">
          <h2 className="text-center text-3xl font-bold tracking-tight text-[#2597A2] sm:text-4xl">
              ILS PARLENT DE NOUS
          </h2>
          
      </div><ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pb-8 px-28 overflow-hidden bg-[#F6F6F6] py-24 sm:py-32">
              {people.map((person) => (
                  <li key={person.email} className="col-span-1 divide-y divide-gray-200 rounded-lg shadow bg-[#D9D9D9]">
                      <div className="flex w-full items-center justify-between space-x-6 p-6">
                          <div className="flex-1 truncate">
                              <div className="flex items-center space-x-3">
                                  <h3 className="truncate text-sm font-medium text-gray-900">{person.name}</h3>
                                  <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                      {person.role}
                                  </span>
                              </div>
                              <p className="mt-1 truncate text-sm text-gray-500">{person.title}</p>
                          </div>
                      </div>
                      <div>
                          <div className="-mt-px flex divide-x divide-gray-200">
                              <div className="flex w-0 flex-1">
                                  <a
                                      href={`mailto:${person.email}`}
                                      className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                                  >
                                      {/* <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            Email */}
                                  </a>
                              </div>
                              <div className="-ml-px flex w-0 flex-1">
                                  {/* <a
              href={`tel:${person.telephone}`}
              className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
            >
              <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              Call
            </a> */}
                              </div>
                          </div>
                      </div>
                  </li>
              ))}
          </ul></>
  )
}
