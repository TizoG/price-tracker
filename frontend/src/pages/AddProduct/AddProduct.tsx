import { Button, Input, InputGroup, VStack } from "@chakra-ui/react";
import { useState } from "react";

export const AddProduct = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!url.trim()) return;

    setLoading(true);
    try {
      const response = await fetch("/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <VStack align="stretch">
      <InputGroup>
        <Input
          placeholder="https://tusitio.com/producto"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
      </InputGroup>
      <Button onClick={handleSubmit} loading={loading} colorScheme="blue">
        Añadir producto
      </Button>
    </VStack>
  );
};
