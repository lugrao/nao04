import { render, screen } from "@testing-library/react";
import { CompanyLogo } from "../CompanyLogo";

describe("CompanyLogo", () => {
  it("renders the CompanyLogo component", () => {
    render(<CompanyLogo />);
    const logo = screen.getByAltText(/logo de capsule corporation/i);
    expect(logo).toBeTruthy();
  });
});
