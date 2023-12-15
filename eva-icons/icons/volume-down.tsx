import { EvaIcon, EvaProps } from "../types.d.ts";

export const VolumeDown: EvaIcon = (props: EvaProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? 24}
      height={props.size ?? 24}
      viewBox="0 0 24 24"
      fill={props.color ?? "currentColor"}
      stroke="none"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...{ ...props, size: undefined, color: undefined }}
    >
      <g data-name="Layer 2">
        <g data-name="volume-down">
          <rect width="24" height="24" opacity="0" />
          <path d="M20.78 8.37a1 1 0 1 0-1.56 1.26 4 4 0 0 1 0 4.74A1 1 0 0 0 20 16a1 1 0 0 0 .78-.37 6 6 0 0 0 0-7.26z" />
          <path d="M16.47 3.12a1 1 0 0 0-1 0L9 7.57H4a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4A1.06 1.06 0 0 0 16 21a1 1 0 0 0 1-1V4a1 1 0 0 0-.53-.88z" />
        </g>
      </g>
    </svg>
  );
};
