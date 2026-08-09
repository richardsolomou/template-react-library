import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "../src/button";

describe("Button", () => {
  it("should render with default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeInTheDocument();
  });

  it("should render with different variants", () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    let button = screen.getByRole("button");
    expect(button).toHaveClass("bg-blue-600");

    rerender(<Button variant="secondary">Secondary</Button>);
    button = screen.getByRole("button");
    expect(button).toHaveClass("bg-gray-600");

    rerender(<Button variant="outline">Outline</Button>);
    button = screen.getByRole("button");
    expect(button).toHaveClass("border-2");
  });

  it("should render with different sizes", () => {
    const { rerender } = render(<Button size="small">Small</Button>);
    let button = screen.getByRole("button");
    expect(button).toHaveClass("px-3");

    rerender(<Button size="medium">Medium</Button>);
    button = screen.getByRole("button");
    expect(button).toHaveClass("px-4");

    rerender(<Button size="large">Large</Button>);
    button = screen.getByRole("button");
    expect(button).toHaveClass("px-6");
  });

  it("should pass through HTML button attributes", () => {
    render(
      <Button disabled type="submit">
        Submit
      </Button>,
    );
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "submit");
    expect(button).toBeDisabled();
  });

  it("should merge custom className with component styles", () => {
    render(<Button className="custom-class">Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
    expect(button).toHaveClass("rounded");
  });
});
