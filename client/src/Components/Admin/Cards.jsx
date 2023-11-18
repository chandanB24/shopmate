import Card from "./Card";
import { SimpleGrid } from "@chakra-ui/react";

function Cards() {
  let shops = [
    {
      img: "https://picsum.photos/200",
      name: "Ganesh Stores",
      addr: "lorem epsilon hi hello how are you",
    },
    {
      img: "https://picsum.photos/200",
      name: "Tirumals Stores",
      addr: "lorem epsilon hi hello how are you",
    },
    {
      img: "https://picsum.photos/200",
      name: "Eshwar Stores",
      addr: "lorem epsilon hi hello how are you",
    },
    {
      img: "https://picsum.photos/200",
      name: "Shetty Stores",
      addr: "lorem epsilon hi hello how are you",
    },
  ];
  return (
    <>
      <div className="w-4/5 m-auto">
        <h2 className="text-2xl font-bold mb-4">
          Stores with online delivery in Davanagere
        </h2>
        <SimpleGrid columns={[1, 2, 4]} spacing="30px">
          {shops.map((shop) => {
            return (
              <>
                <Card shop={shop} />
              </>
            );
          })}
        </SimpleGrid>
      </div>
    </>
  );
}

export default Cards;
