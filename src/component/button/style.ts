import styled from "styled-components";

interface IButton {
  width?: string;
  height?: string;
  maxwidth?: string;
  minwidth?: string;
  border?: string;
  borderradius?: string;
  backgroundcolor?: string;
  padding?: string;
  margin?: string;
  fontsize?: string;
  fontWeight?: string;
  color?: string;
  cursor?: string;
}
export const StyledButton = styled("button")<IButton>`
  width: ${({ width }) => width ?? "100%"};
  height: ${({ height }) => height ?? "fit-content"};
  max-width: ${({ maxwidth }) => maxwidth ?? "100%"};
  min-width: ${({ minwidth }) => minwidth ?? "100px"};
  border: ${({ border }) => border ?? "1px solid transparent"};
  border-radius: ${({ borderradius }) =>
    borderradius ?? '4px'};
  background-color: ${({ backgroundcolor }) =>
    backgroundcolor ?? '#C5181A'};
  padding: ${({ padding }) => padding ?? "0"};
  margin: ${({ margin }) => margin ?? "0"};
  font-size: ${({ fontsize }) => fontsize ?? '16px'};
  font-weight: ${({ fontWeight }) => fontWeight ?? "500"};
  color: ${({ color }) => color ?? '#fff'};
  cursor: ${({ cursor }) => cursor ?? "pointer"};
  font-family: "Manrope", "san-serif";
  
`;
