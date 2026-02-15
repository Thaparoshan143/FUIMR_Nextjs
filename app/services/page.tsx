import Card from "@/components/fm-comp/Card";
import FullPage from "@/components/FullPage";
import { _services } from "@/lib/static/_services";

interface IServiceCard {
  title: string;
  techStack: string[];
  description: string;
}

const Services = () => {
  return (
    <FullPage oClassName="py-5">
      <h1 className="text-4xl font-semibold my-10">Services we offer</h1>
      <div className="2xl:w-[75%] px-2 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-15">
        {_services.map((ci, ind) => {
          return <ServiceCard key={ind} {...ci} />;
        })}
      </div>
    </FullPage>
  );
};

const ServiceCard = ({ title, techStack, description }: IServiceCard) => {
  return (
    <Card oClassName="max-w-128 min-w-96 min-h-58">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="grid grid-cols-3 gap-10 my-5">
        {techStack.map((ts, i) => {
          return (
            <img
              title={ts}
              src={`/assets/${ts}.png`}
              alt={ts}
              className="rounded-md max-w-16 max-h-16 place-self-center hover:scale-105"
              key={i}
            />
          );
        })}
      </div>
      <p className="px-5">{description}</p>
    </Card>
  );
};

export default Services;
