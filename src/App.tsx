import GlobalStyles from "./styles/GlobalStyles";
import Heading from "./styles/Heading";
import Button from "./styles/Button";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Heading as="h1">The Wild Oasis</Heading>
        <Heading as="h2">Check in and out</Heading>
        <Heading as="h3">Form</Heading>
        <Button size="small" variation="danger">
          Click in
        </Button>
        <Button>Click out</Button>
      </div>
    </>
  );
}
