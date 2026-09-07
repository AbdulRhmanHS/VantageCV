import TemplateCard from "./TemplateCard";

export default function PersonalInfoCard() {
  return (
    <TemplateCard
      icon={"person"}
      title={"General Information"}
      addPos={false}
      isOpen={true}
    >
      <div className="border-t border-outline-variant/30">
        <div className="flex flex-col gap-6 mt-4">
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            <div className="grow">
              <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                Full Name
              </label>
              <input
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                type="text"
                x-model="personal.name"
              />
            </div>
            <div className="grow">
              <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                Email
              </label>
              <input
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                type="email"
                x-model="personal.email"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            <div className="grow">
              <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                Phone
              </label>
              <input
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                type="tel"
                x-model="personal.phone"
              />
            </div>
            <div className="grow">
              <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                Location
              </label>
              <input
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                type="text"
                x-model="personal.location"
              />
            </div>
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
    </TemplateCard>
  );
}
