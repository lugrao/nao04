import { render, screen } from "@testing-library/react";
import { FormButton } from "../FormButton";

describe("CompanyLogo", () => {
  it("renders the CompanyLogo component", () => {
    render(<FormButton />);
    const button = screen.getByRole('button');
    expect(button).toBeTruthy();
    screen.debug()
  });
});
