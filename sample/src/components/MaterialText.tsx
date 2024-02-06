import { ReactNode } from "react";

interface MaterialTextProps {
  text: string;
  textStyle?: string;
  style?: React.CSSProperties;
  iconJsx: ReactNode;
  callback : (v : number) => void;
}

export const MaterialText = (props: MaterialTextProps) => {
  return (
    <div className="d-flex align-items-center justify-content-center" onClick={() => {props.callback()}}>
      {props.iconJsx} <span className={props.textStyle} style={props.style} >{props.text}</span>
    </div>
  );
};
