import { BRACET_DATA } from "@/data/bracet-description";

export const Presentation = () => {
  return (
    <div className="flex flex-col text-center justify-center">
      <h1 className="text-4xl font-bold">{BRACET_DATA.name}</h1>
      <p className="text-2xl font-bold text-gray-500">{BRACET_DATA.role}</p>
      <p className="text-lg font-light text-gray-500">
        {BRACET_DATA.description}
      </p>
    </div>
  );
};
