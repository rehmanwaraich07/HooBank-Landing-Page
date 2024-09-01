import { clients } from "@/constants";
import styles from "@/app/style";
import Image from "next/image";
const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} gap-y-4 flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} min-w-[120px] sm:min-w-[192px]`}
          >
            <Image
              src={client.logo}
              alt="client"
              className="sm:w-[192px] w-[100px] object-contain"
              priority
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
