import { EvaIcon, EvaProps } from "../types.d.ts";

export const PlayCircleOutline: EvaIcon = (props: EvaProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? 24}
      height={props.size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.color ?? "currentColor"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...{ ...props, size: undefined, color: undefined }}
    >
      <g data-name="Layer 2">
        <g data-name="play-circle">
          <rect width="24" height="24" opacity="0" />
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
          <path d="M12.34 7.45a1.7 1.7 0 0 0-1.85-.3 1.6 1.6 0 0 0-1 1.48v6.74a1.6 1.6 0 0 0 1 1.48 1.68 1.68 0 0 0 .69.15 1.74 1.74 0 0 0 1.16-.45L16 13.18a1.6 1.6 0 0 0 0-2.36zm-.84 7.15V9.4l2.81 2.6z" />
        </g>
      </g>
    </svg>
  );
};
