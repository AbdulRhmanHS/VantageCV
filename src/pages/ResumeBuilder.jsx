import { Link } from "react-router-dom";

export default function ResumeBuilder() {
  return (
    <>
      <header className="fixed top-0 right-0 h-16 bg-surface/80 backdrop-blur-md border-b border-outline-variant z-40 flex items-center justify-between px-8 left-0">
        <div className="flex items-center gap-4 text-on-surface-variant">
          <Link
            to="/resumes"
            className="text-label-md flex items-center hover:text-on-surface"
          >
            <span className="material-symbols-outlined mr-2 text-sm">
              arrow_back
            </span>
            Back to Resumes
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-label-md px-4 py-2 border border-outline-variant rounded hover:bg-surface-container transition-colors hidden sm:block">
            Preview PDF
          </button>
          <button className="text-label-md px-4 py-2 bg-primary text-on-primary rounded hover:bg-primary/90 transition-colors shadow-sm">
            Download
          </button>
        </div>
      </header>
      <main className="pt-16 min-h-screen">
        <div className="flex flex-col w-full h-full relative">
          <div className="sticky top-0 z-30 flex items-center justify-between w-full px-6 py-4 bg-surface/90 backdrop-blur-md shadow-sm">
            <div className="flex items-center gap-6 md:flex">
              <div className="flex items-center gap-2 bg-surface-container rounded-lg p-1">
                <button
                  // className="{'bg-surface shadow-sm text-on-surface': layout === 'one-column', 'text-on-surface-variant hover:text-on-surface': layout !== 'one-column'}"
                  className="px-3 py-1.5 rounded-md text-label-md font-label-md transition-all flex items-center gap-2 bg-surface shadow-sm text-on-surface"
                >
                  <span className="material-symbols-outlined text-sm">
                    view_agenda
                  </span>
                  One Column
                </button>
                <button
                  // className="{'bg-surface shadow-sm text-on-surface': layout === 'two-column', 'text-on-surface-variant hover:text-on-surface': layout !== 'two-column'}"
                  className="px-3 py-1.5 rounded-md text-label-md font-label-md transition-all flex items-center gap-2 text-on-surface-variant hover:text-on-surface"
                >
                  <span className="material-symbols-outlined text-sm">
                    view_column
                  </span>
                  Two Column
                </button>
              </div>
              <div className="h-6 w-px bg-outline-variant"></div>
              <div className="flex items-center gap-4 text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <span className="text-label-md font-label-md">Font:</span>
                  <select
                    className="bg-surface-container text-on-surface text-body-md font-body-md px-3 py-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer"
                    x-model="font"
                  >
                    <option value="serif">Source Serif 4</option>
                    <option value="sans">Inter</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-label-md font-label-md">Spacing:</span>
                  <select
                    className="bg-surface-container text-on-surface text-body-md font-body-md px-3 py-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer"
                    x-model="spacing"
                  >
                    <option value="compact">Compact</option>
                    <option value="spacious">Spacious</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="md:hidden p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors">
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row flex-1 h-auto lg:h-[calc(100vh-140px)]">
            <div className="w-full lg:w-1/2 flex flex-col bg-surface overflow-y-auto">
              <div className="p-8 max-w-2xl mx-auto w-full">
                <h1 className="text-headline-lg font-headline-lg text-on-surface mb-8">
                  Build Your Resume
                </h1>
                <div className="space-y-4">
                  <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all duration-300">
                    <button className="w-full flex items-center justify-between p-6 bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">
                            person
                          </span>
                        </div>
                        <h2 className="text-headline-md font-headline-md text-on-surface">
                          General Information
                        </h2>
                      </div>
                      <span
                        // className="{'rotate-180': activeSection === 'general'}"
                        className="material-symbols-outlined text-on-surface-variant transition-transform duration-300"
                      >
                        expand_more
                      </span>
                    </button>
                    <div
                      className="p-6 pt-0 border-t border-outline-variant/30"
                      x-collapse=""
                      x-show="activeSection === 'general' || activeSection === 'all'"
                    >
                      <div className="grid grid-cols-2 gap-6 mt-4">
                        <div className="col-span-2">
                          <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                            Full Name
                          </label>
                          <input
                            className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            type="text"
                            x-model="personal.name"
                          />
                        </div>
                        <div className="col-span-1">
                          <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                            Email
                          </label>
                          <input
                            className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            type="email"
                            x-model="personal.email"
                          />
                        </div>
                        <div className="col-span-1">
                          <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                            Phone
                          </label>
                          <input
                            className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            type="tel"
                            x-model="personal.phone"
                          />
                        </div>
                        <div className="col-span-2">
                          <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                            Location
                          </label>
                          <input
                            className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            type="text"
                            x-model="personal.location"
                          />
                        </div>
                        <div className="col-span-2">
                          <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                            Professional Summary
                          </label>
                          <textarea
                            className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                            rows="4"
                            x-model="personal.summary"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all duration-300">
                    <button className="w-full flex items-center justify-between p-6 bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-secondary/5 flex items-center justify-center text-secondary">
                          <span className="material-symbols-outlined">
                            work
                          </span>
                        </div>
                        <h2 className="text-headline-md font-headline-md text-on-surface">
                          Experience
                        </h2>
                      </div>
                      <span
                        // className="{'rotate-180': activeSection === 'experience'}"
                        className="material-symbols-outlined text-on-surface-variant transition-transform duration-300"
                      >
                        expand_more
                      </span>
                    </button>
                    <div
                      className="p-6 pt-0 border-t border-outline-variant/30"
                      x-collapse=""
                      x-show="activeSection === 'experience' || activeSection === 'all'"
                    >
                      <template x-for="(exp, index) in experience">
                        <div className="mt-6 p-5 bg-surface rounded-lg relative group">
                          <div className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab">
                            <span className="material-symbols-outlined text-outline">
                              drag_indicator
                            </span>
                          </div>
                          <button className="absolute top-4 right-4 text-on-surface-variant hover:text-error transition-colors">
                            <span className="material-symbols-outlined text-sm">
                              delete
                            </span>
                          </button>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 sm:col-span-1">
                              <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                                Job Title
                              </label>
                              <input
                                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                type="text"
                                x-model="exp.title"
                              />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                              <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                                Company
                              </label>
                              <input
                                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                type="text"
                                x-model="exp.company"
                              />
                            </div>
                            <div className="col-span-2">
                              <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                                Dates
                              </label>
                              <input
                                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-on-surface-variant/50"
                                placeholder="e.g. Jan 2020 - Present"
                                type="text"
                                x-model="exp.date"
                              />
                            </div>
                            <div className="col-span-2">
                              <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                                Description
                              </label>
                              <textarea
                                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                                rows="3"
                                x-model="exp.desc"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </template>
                      <div className="mt-6 p-5 bg-surface rounded-lg relative group">
                        <div className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab">
                          <span className="material-symbols-outlined text-outline">
                            drag_indicator
                          </span>
                        </div>
                        <button className="absolute top-4 right-4 text-on-surface-variant hover:text-error transition-colors">
                          <span className="material-symbols-outlined text-sm">
                            delete
                          </span>
                        </button>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="col-span-2 sm:col-span-1">
                            <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                              Job Title
                            </label>
                            <input
                              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                              type="text"
                              x-model="exp.title"
                            />
                          </div>
                          <div className="col-span-2 sm:col-span-1">
                            <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                              Company
                            </label>
                            <input
                              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                              type="text"
                              x-model="exp.company"
                            />
                          </div>
                          <div className="col-span-2">
                            <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                              Dates
                            </label>
                            <input
                              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-on-surface-variant/50"
                              placeholder="e.g. Jan 2020 - Present"
                              type="text"
                              x-model="exp.date"
                            />
                          </div>
                          <div className="col-span-2">
                            <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                              Description
                            </label>
                            <textarea
                              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                              rows="3"
                              x-model="exp.desc"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 p-5 bg-surface rounded-lg relative group">
                        <div className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab">
                          <span className="material-symbols-outlined text-outline">
                            drag_indicator
                          </span>
                        </div>
                        <button className="absolute top-4 right-4 text-on-surface-variant hover:text-error transition-colors">
                          <span className="material-symbols-outlined text-sm">
                            delete
                          </span>
                        </button>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="col-span-2 sm:col-span-1">
                            <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                              Job Title
                            </label>
                            <input
                              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                              type="text"
                              x-model="exp.title"
                            />
                          </div>
                          <div className="col-span-2 sm:col-span-1">
                            <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                              Company
                            </label>
                            <input
                              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                              type="text"
                              x-model="exp.company"
                            />
                          </div>
                          <div className="col-span-2">
                            <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                              Dates
                            </label>
                            <input
                              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-on-surface-variant/50"
                              placeholder="e.g. Jan 2020 - Present"
                              type="text"
                              x-model="exp.date"
                            />
                          </div>
                          <div className="col-span-2">
                            <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                              Description
                            </label>
                            <textarea
                              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                              rows="3"
                              x-model="exp.desc"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <button className="mt-6 w-full py-4 border-2 border-dashed border-outline-variant rounded-lg text-primary hover:bg-primary/5 transition-colors flex items-center justify-center gap-2 font-label-md text-label-md">
                        <span className="material-symbols-outlined">
                          add_circle
                        </span>
                        Add Position
                      </button>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all duration-300">
                    <button className="w-full flex items-center justify-between p-6 bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-tertiary/5 flex items-center justify-center text-tertiary">
                          <span className="material-symbols-outlined">
                            school
                          </span>
                        </div>
                        <h2 className="text-headline-md font-headline-md text-on-surface">
                          Education
                        </h2>
                      </div>
                      <span
                        // className="{'rotate-180': activeSection === 'education'}"
                        className="material-symbols-outlined text-on-surface-variant transition-transform duration-300"
                      >
                        expand_more
                      </span>
                    </button>
                    <div
                      className="p-6 pt-0 border-t border-outline-variant/30"
                      x-collapse=""
                      x-show="activeSection === 'education' || activeSection === 'all'"
                    >
                      <template x-for="(edu, index) in education" className="">
                        <div className="mt-6 p-5 bg-surface rounded-lg relative group">
                          <div className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab">
                            <span className="material-symbols-outlined text-outline">
                              drag_indicator
                            </span>
                          </div>
                          <button className="absolute top-4 right-4 text-on-surface-variant hover:text-error transition-colors">
                            <span className="material-symbols-outlined text-sm">
                              delete
                            </span>
                          </button>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2">
                              <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                                School / University
                              </label>
                              <input
                                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                type="text"
                                x-model="edu.school"
                              />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                              <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                                Degree / Field of Study
                              </label>
                              <input
                                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                type="text"
                                x-model="edu.degree"
                              />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                              <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                                Graduation Date
                              </label>
                              <input
                                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                placeholder="e.g. 2017"
                                type="text"
                                x-model="edu.date"
                              />
                            </div>
                            <div className="col-span-2">
                              <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                                Description (Optional)
                              </label>
                              <textarea
                                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                                rows="3"
                                x-model="edu.desc"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </template>
                      <div className="mt-6 p-5 bg-surface rounded-lg relative group">
                        <div className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab">
                          <span className="material-symbols-outlined text-outline">
                            drag_indicator
                          </span>
                        </div>
                        <button className="absolute top-4 right-4 text-on-surface-variant hover:text-error transition-colors">
                          <span className="material-symbols-outlined text-sm">
                            delete
                          </span>
                        </button>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="col-span-2">
                            <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                              School / University
                            </label>
                            <input
                              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                              type="text"
                              x-model="edu.school"
                            />
                          </div>
                          <div className="col-span-2 sm:col-span-1">
                            <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                              Degree / Field of Study
                            </label>
                            <input
                              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                              type="text"
                              x-model="edu.degree"
                            />
                          </div>
                          <div className="col-span-2 sm:col-span-1">
                            <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                              Graduation Date
                            </label>
                            <input
                              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                              placeholder="e.g. 2017"
                              type="text"
                              x-model="edu.date"
                            />
                          </div>
                          <div className="col-span-2">
                            <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                              Description (Optional)
                            </label>
                            <textarea
                              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                              rows="3"
                              x-model="edu.desc"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 p-5 bg-surface rounded-lg relative group">
                        <div className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab">
                          <span className="material-symbols-outlined text-outline">
                            drag_indicator
                          </span>
                        </div>
                        <button className="absolute top-4 right-4 text-on-surface-variant hover:text-error transition-colors">
                          <span className="material-symbols-outlined text-sm">
                            delete
                          </span>
                        </button>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="col-span-2">
                            <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                              School / University
                            </label>
                            <input
                              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                              type="text"
                              x-model="edu.school"
                            />
                          </div>
                          <div className="col-span-2 sm:col-span-1">
                            <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                              Degree / Field of Study
                            </label>
                            <input
                              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                              type="text"
                              x-model="edu.degree"
                            />
                          </div>
                          <div className="col-span-2 sm:col-span-1">
                            <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                              Graduation Date
                            </label>
                            <input
                              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                              placeholder="e.g. 2017"
                              type="text"
                              x-model="edu.date"
                            />
                          </div>
                          <div className="col-span-2">
                            <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                              Description (Optional)
                            </label>
                            <textarea
                              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                              rows="3"
                              x-model="edu.desc"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <button className="mt-6 w-full py-4 border-2 border-dashed border-outline-variant rounded-lg text-primary hover:bg-primary/5 transition-colors flex items-center justify-center gap-2 font-label-md text-label-md">
                        <span className="material-symbols-outlined">
                          add_circle
                        </span>
                        Add Education
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex lg:w-1/2 bg-surface-container-low p-8 overflow-y-auto justify-center lg:sticky lg:top-4 lg:h-[calc(100vh-160px)]">
              <div
                // className="{'font-cv-preview-body text-cv-preview-body': font === 'serif', 'font-body-md text-body-md': font === 'sans', 'gap-y-6': spacing === 'compact', 'gap-y-10': spacing === 'spacious'}"
                className="bg-surface-container-lowest shadow-xl w-full max-w-[21cm] min-h-[29.7cm] p-12 transition-all duration-500 origin-top font-cv-preview-body text-cv-preview-body gap-y-10"
              >
                <div
                  // className="{'gap-6': spacing === 'compact', 'gap-10': spacing === 'spacious'}"
                  className="flex flex-col gap-10"
                >
                  <div className="border-b-2 border-primary pb-6">
                    <h1
                      className="text-display-lg font-display-lg text-primary mb-2"
                      x-text="personal.name || 'Your Name'"
                    >
                      Alex Johnson
                    </h1>
                    <div
                      // className="{'text-sm': font === 'sans'}"
                      className="flex flex-wrap items-center gap-x-4 gap-y-1 text-on-surface-variant"
                    >
                      <span
                        x-show="personal.email"
                        x-text="personal.email"
                        className=""
                      >
                        alex@example.com
                      </span>
                      <span
                        x-show="personal.email &amp;&amp; personal.phone"
                        className=""
                      >
                        •
                      </span>
                      <span
                        x-show="personal.phone"
                        x-text="personal.phone"
                        className=""
                      >
                        +1 (555) 123-4567
                      </span>
                      <span
                        x-show="(personal.email || personal.phone) &amp;&amp; personal.location"
                        className=""
                      >
                        •
                      </span>
                      <span
                        x-show="personal.location"
                        x-text="personal.location"
                        className=""
                      >
                        San Francisco, CA
                      </span>
                    </div>
                  </div>
                  <div
                    // className="{'flex flex-col gap-8': layout === 'one-column', 'grid grid-cols-[1fr_2fr] gap-8': layout === 'two-column'}"
                    className="flex flex-col gap-8"
                  >
                    <div className="flex flex-col gap-8">
                      <div x-show="personal.summary">
                        <h2
                          // className="{'font-cv-preview-title text-cv-preview-title normal-case text-xl mb-4': font === 'serif'}"
                          className="text-headline-md font-headline-md text-primary mb-3 uppercase tracking-wider text-sm text-cv-preview-title"
                        >
                          Profile
                        </h2>
                        <p
                          className="text-on-surface leading-relaxed"
                          x-text="personal.summary"
                        >
                          Creative technologist and senior product designer with
                          8+ years of experience building high-impact digital
                          experiences.
                        </p>
                      </div>
                      <div x-show="education.length &gt; 0">
                        <h2
                          // className="{'font-cv-preview-title text-cv-preview-title normal-case text-xl mb-4': font === 'serif'}"
                          className="text-headline-md font-headline-md text-primary mb-3 uppercase tracking-wider text-sm text-cv-preview-title"
                        >
                          Education
                        </h2>
                        <div className="flex flex-col gap-4">
                          <template x-for="edu in education">
                            <div>
                              <h3
                                className="font-bold text-on-surface"
                                x-text="edu.degree"
                              ></h3>
                              <div
                                className="text-on-surface-variant text-sm mt-0.5"
                                x-text="edu.school"
                              ></div>
                              <div
                                className="text-on-surface-variant text-sm italic mt-0.5"
                                x-text="edu.date"
                              ></div>
                            </div>
                          </template>
                          <div>
                            <h3
                              className="font-bold text-on-surface"
                              x-text="edu.degree"
                            >
                              M.S. Human-Computer Interaction
                            </h3>
                            <div
                              className="text-on-surface-variant text-sm mt-0.5"
                              x-text="edu.school"
                            >
                              Carnegie Mellon University
                            </div>
                            <div
                              className="text-on-surface-variant text-sm italic mt-0.5"
                              x-text="edu.date"
                            >
                              2017
                            </div>
                          </div>
                          <div>
                            <h3
                              className="font-bold text-on-surface"
                              x-text="edu.degree"
                            >
                              B.A. Graphic Design
                            </h3>
                            <div
                              className="text-on-surface-variant text-sm mt-0.5"
                              x-text="edu.school"
                            >
                              Rhode Island School of Design
                            </div>
                            <div
                              className="text-on-surface-variant text-sm italic mt-0.5"
                              x-text="edu.date"
                            >
                              2015
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-8">
                      <div x-show="experience.length &gt; 0">
                        <h2
                          // className="{'font-cv-preview-title text-cv-preview-title normal-case text-xl mb-6': font === 'serif'}"
                          className="text-headline-md font-headline-md text-primary mb-4 uppercase tracking-wider text-sm text-cv-preview-title"
                        >
                          Experience
                        </h2>
                        <div className="flex flex-col gap-6">
                          <template x-for="exp in experience">
                            <div className="relative pl-4 before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                              <div className="flex justify-between items-baseline mb-1">
                                <h3
                                  className="font-bold text-on-surface text-lg"
                                  x-text="exp.title"
                                ></h3>
                                <span
                                  className="text-on-surface-variant text-sm italic whitespace-nowrap"
                                  x-text="exp.date"
                                ></span>
                              </div>
                              <div
                                className="text-primary font-medium text-sm mb-2"
                                x-text="exp.company"
                              ></div>
                              <p
                                className="text-on-surface leading-relaxed"
                                x-text="exp.desc"
                              ></p>
                            </div>
                          </template>
                          <div className="relative pl-4 before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                            <div className="flex justify-between items-baseline mb-1">
                              <h3
                                className="font-bold text-on-surface text-lg"
                                x-text="exp.title"
                              >
                                Senior Product Designer
                              </h3>
                              <span
                                className="text-on-surface-variant text-sm italic whitespace-nowrap"
                                x-text="exp.date"
                              ></span>
                            </div>
                            <div
                              className="text-primary font-medium text-sm mb-2"
                              x-text="exp.company"
                            >
                              Acme Corp
                            </div>
                            <p
                              className="text-on-surface leading-relaxed"
                              x-text="exp.desc"
                            >
                              Led the redesign of the core flagship application,
                              increasing user engagement by 45%. Managed a team
                              of 4 designers.
                            </p>
                          </div>
                          <div className="relative pl-4 before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                            <div className="flex justify-between items-baseline mb-1">
                              <h3
                                className="font-bold text-on-surface text-lg"
                                x-text="exp.title"
                              >
                                UX Designer
                              </h3>
                              <span
                                className="text-on-surface-variant text-sm italic whitespace-nowrap"
                                x-text="exp.date"
                              ></span>
                            </div>
                            <div
                              className="text-primary font-medium text-sm mb-2"
                              x-text="exp.company"
                            >
                              TechNova
                            </div>
                            <p
                              className="text-on-surface leading-relaxed"
                              x-text="exp.desc"
                            >
                              Spearheaded user research initiatives and
                              developed design systems that reduced development
                              time by 30%.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-primary text-on-primary rounded-full shadow-xl flex items-center justify-center z-50 hover:scale-110 transition-transform active:scale-95">
          <span className="material-symbols-outlined text-2xl">visibility</span>
        </button>
      </main>
    </>
  );
}
