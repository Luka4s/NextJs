import { styled } from "../styles";

const Button = styled("button", {
  backgroundColor: "$green300",
  borderRadius: "5px",
  border: 0,
  padding: "10px 20px",

  span: {
    fontWeight: "bold",
  },
  "&:hover": {
    backgroundColor: "$green500",
  },
});

export default function Home() {
  return (
    <div>
      <h1>Hello Wolrd</h1>
      <Button>Teste</Button>
    </div>
  );
}
