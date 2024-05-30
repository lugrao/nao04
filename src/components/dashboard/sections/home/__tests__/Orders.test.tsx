import { render, screen } from "@testing-library/react";
import { Orders } from "../Orders";

describe("Orders", () => {
    render(<Orders amount={123} status="new"/>)
    
    const ordersNew = screen.getByRole('heading', {name:/pedidos nuevos/i})
    
    it('renders the Orders component', ()=>{
        expect(ordersNew).toBeTruthy()
    })
});
