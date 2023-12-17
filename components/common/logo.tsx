interface LogoProps {
  class?: string;
}

export const Logo = (props: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class={props.class}
      width="128"
      height="128"
      viewBox="0 0 128 128"
    >
      <path d="M50.2.5H57c11.6.9 20.4 10.9 22.4 21.9 5-5.2 11.8-8.8 19.1-8.8 15.7-.3 29.1 16.2 25.6 31.5-1.6 7.5-7.1 13.5-13.6 17.2 7.9 4 14.3 11.5 15.1 20.6v-2.3V87c-1.3 11.4-10 22.1-21.4 24.2-7.8 1.5-15.9-1.4-21.7-6.6-1.2 7.2-4.7 14.3-10.8 18.5-3.4 2.6-7.6 3.7-11.7 4.4h2-6.6c-8.7-1-17.3-5.6-21.6-13.4-4.3-7.4-3.6-16.7-.2-24.4-6.2.9-12.9.5-18.5-2.9C7.6 82.9 3.4 75 2.5 67v-4.9c.7-7.1 4-14 9.7-18.3 5.2-4.1 12.1-5.4 18.6-5-3.4-7.3-4.5-16.1-.7-23.5C34.2 6.8 43.2 1.6 52.4.5h-2.2M33 17.9c-2.3 5.6-2 12.1.5 17.6.9 1.7 1.4 4.1 3.6 4.7 3.5 1.3 6.9 3.1 9.8 5.5 6-7.3 15.8-11 25.1-9.4.9-3.5 2.3-6.9 4.1-9.9-.6-7.4-4.1-15-10.5-19-11-7-27.5-1.5-32.6 10.5m56 1.9c-6.7 3.6-11.7 10.1-13.4 17.5C85.9 41 93.4 51 93.9 62.1c7.2.5 14.7-2 20-6.9 4.8-4.3 7.6-10.8 6.8-17.2-.9-7.6-5.8-14.4-12.4-18.1-6-3.3-13.4-3.3-19.3-.1M62.5 40.3c-5.1 1.2-9.8 4.2-13 8.3-5.3 6.8-6.6 16.6-2.7 24.4 3.1 6.9 9.8 12 17.3 13.1 7 1.3 14.4-1.5 19.3-6.5 5.9-5.9 8.3-15.1 5.9-23.1-3.2-11.2-15.5-19-26.8-16.2m-49.2 7.5c-8 7-9 19.9-3.8 28.8 5.1 8.9 17 11.9 26.2 8.4 2.9-2.6 5.3-5.8 8.7-7.9-5-8.6-5.1-19.8.2-28.3-8.4-7.5-22.5-8.7-31.3-1m80.4 18c-1.1 9.9-7.8 18.9-17.1 22.6 2.8 11.5 14.4 21.2 26.6 19.1 10.5-1.9 18.6-12.3 18.5-22.9-.1-9.2-7.2-17.2-15.7-19.9-4.1.4-8.1 1.5-12.3 1.1m-58.5 42.8c4.2 13.6 22.8 19.6 34.3 11.4 6-4.2 9-11.6 9.4-18.8-2.8-3.4-4.7-7.4-5.9-11.7-9.8 2.3-20.1-1.8-26.4-9.4-9.1 5.9-14.7 17.8-11.4 28.5z" />
      <path d="M69.8 53.8c2.2-.9 3.7 2.6 1.5 3.5-2.3 1-3.7-2.5-1.5-3.5zM57.7 57.6c2.2-.9 3.7 2.5 1.6 3.5-2.4.9-3.9-2.5-1.6-3.5zM76.5 58.7c1-.8 2.5.1 2.7 1.2 2.4 7-1.7 15.7-9 17.6-6.4 2-13.6-2.5-15.4-8.9-.9-1.7 2.2-3.3 3-1.6 1.6 3 3.6 6.3 7.2 7 6.2 1.6 12-4.9 10.9-10.9.1-1.4-1.1-3.5.6-4.4z" />
      <path
        d="M33 17.9C38 5.9 54.5.4 65.6 7.4c6.4 4 9.9 11.6 10.5 19-1.9 3.1-3.3 6.4-4.1 9.9-9.3-1.6-19.1 2.1-25.1 9.4-2.9-2.4-6.3-4.2-9.8-5.5-2.2-.6-2.7-3-3.6-4.7-2.5-5.5-2.8-12-.5-17.6zM89 19.8c5.9-3.1 13.4-3.2 19.3 0 6.6 3.6 11.5 10.5 12.4 18.1.8 6.4-2 13-6.8 17.2-5.3 5-12.7 7.4-20 6.9-.5-11-8-21-18.3-24.7 1.6-7.4 6.7-14 13.4-17.5zM13.3 47.8c8.8-7.7 22.9-6.5 31.5 1-5.3 8.5-5.2 19.7-.2 28.3-3.4 2-5.8 5.3-8.7 7.9-9.2 3.5-21.2.5-26.2-8.4-5.4-9-4.4-21.8 3.6-28.8zM93.7 65.8c4.2.4 8.2-.8 12.3-1.1 8.5 2.7 15.6 10.7 15.7 19.9.1 10.6-8 21-18.5 22.9-12.2 2.1-23.8-7.6-26.6-19.1 9.3-3.7 16.1-12.7 17.1-22.6zM35.2 108.6C31.9 97.9 37.5 86 46.6 80.2c6.3 7.6 16.7 11.6 26.4 9.4 1.2 4.2 3.1 8.2 5.9 11.7-.4 7.2-3.5 14.5-9.4 18.8-11.5 8.1-30.1 2.1-34.3-11.5z"
        fill="#ffffff"
      />
      <path
        d="M62.5 40.3c11.4-2.7 23.6 5 26.7 16.2 2.4 8 0 17.2-5.9 23.1-5 5-12.3 7.7-19.3 6.5C56.5 85 49.8 79.9 46.7 73c-3.8-7.8-2.5-17.6 2.7-24.4 3.3-4.2 8-7.1 13.1-8.3m7.3 13.5c-2.2.9-.8 4.5 1.5 3.5 2.1-.9.7-4.4-1.5-3.5m-12.1 3.8c-2.2 1-.7 4.5 1.6 3.5 2-1.1.6-4.4-1.6-3.5m18.8 1.1c-1.6.9-.5 3-.5 4.5 1.1 6-4.7 12.5-10.9 10.9-3.7-.7-5.6-4-7.2-7-.8-1.7-3.9-.1-3 1.6 1.7 6.4 8.9 10.8 15.4 8.9 7.3-1.9 11.4-10.6 9-17.6-.3-1.3-1.9-2.1-2.8-1.3z"
        fill="#ffe226"
      />
    </svg>
  );
};

export const SadLogo = (props: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class={props.class}
      width="128"
      height="128"
      viewBox="0 0 128 128"
    >
      <path
        d="M50.2.5H57c11.6.9 20.4 10.9 22.4 21.9 5-5.2 11.8-8.8 19.1-8.8 15.7-.3 29.1 16.2 25.6 31.5-1.6 7.5-7.1 13.5-13.6 17.2 7.9 4 14.3 11.5 15.1 20.6v-2.3V87c-1.3 11.4-10 22.1-21.4 24.2-7.8 1.5-15.9-1.4-21.7-6.6-1.2 7.2-4.7 14.3-10.8 18.5-3.4 2.6-7.6 3.7-11.7 4.4h2-6.6c-8.7-1-17.3-5.6-21.6-13.4-4.3-7.4-3.6-16.7-.2-24.4-6.2.9-12.9.5-18.5-2.9C7.6 82.9 3.4 75 2.5 67v-4.9c.7-7.1 4-14 9.7-18.3 5.2-4.1 12.1-5.4 18.6-5-3.4-7.3-4.5-16.1-.7-23.5C34.2 6.8 43.2 1.6 52.4.5h-2.2zM33 17.9c-2.3 5.6-2 12.1.5 17.6.9 1.7 1.4 4.1 3.6 4.7 3.5 1.3 6.9 3.1 9.8 5.5 6-7.3 15.8-11 25.1-9.4.9-3.5 2.3-6.9 4.1-9.9-.6-7.4-4.1-15-10.5-19-11-7-27.5-1.5-32.6 10.5zm56 1.9c-6.7 3.6-11.7 10.1-13.4 17.5C85.9 41 93.4 51 93.9 62.1c7.2.5 14.7-2 20-6.9 4.8-4.3 7.6-10.8 6.8-17.2-.9-7.6-5.8-14.4-12.4-18.1-6-3.3-13.4-3.3-19.3-.1zM62.5 40.3c-5.1 1.2-9.8 4.2-13 8.3-5.3 6.8-6.6 16.6-2.7 24.4 3.1 6.9 9.8 12 17.3 13.1 7 1.3 14.4-1.5 19.3-6.5 5.9-5.9 8.3-15.1 5.9-23.1-3.2-11.2-15.5-19-26.8-16.2zm-49.2 7.5c-8 7-9 19.9-3.8 28.8 5.1 8.9 17 11.9 26.2 8.4 2.9-2.6 5.3-5.8 8.7-7.9-5-8.6-5.1-19.8.2-28.3-8.4-7.5-22.5-8.7-31.3-1zm80.4 18c-1.1 9.9-7.8 18.9-17.1 22.6 2.8 11.5 14.4 21.2 26.6 19.1 10.5-1.9 18.6-12.3 18.5-22.9-.1-9.2-7.2-17.2-15.7-19.9-4.1.4-8.1 1.5-12.3 1.1zm-58.5 42.8c4.2 13.6 22.8 19.6 34.3 11.4 6-4.2 9-11.6 9.4-18.8-2.8-3.4-4.7-7.4-5.9-11.7-9.8 2.3-20.1-1.8-26.4-9.4-9.1 5.9-14.7 17.8-11.4 28.5z"
        fill="#000"
      />
      <path
        d="M33 17.9C38 5.9 54.5.4 65.6 7.4c6.4 4 9.9 11.6 10.5 19-1.9 3.1-3.3 6.4-4.1 9.9-9.3-1.6-19.1 2.1-25.1 9.4-2.9-2.4-6.3-4.2-9.8-5.5-2.2-.6-2.7-3-3.6-4.7-2.5-5.5-2.8-12-.5-17.6zm56 1.9c5.9-3.1 13.4-3.2 19.3 0 6.6 3.6 11.5 10.5 12.4 18.1.8 6.4-2 13-6.8 17.2-5.3 5-12.7 7.4-20 6.9-.5-11-8-21-18.3-24.7 1.6-7.4 6.7-14 13.4-17.5zm-75.7 28c8.8-7.7 22.9-6.5 31.5 1-5.3 8.5-5.2 19.7-.2 28.3-3.4 2-5.8 5.3-8.7 7.9-9.2 3.5-21.2.5-26.2-8.4-5.4-9-4.4-21.8 3.6-28.8zm80.4 18c4.2.4 8.2-.8 12.3-1.1 8.5 2.7 15.6 10.7 15.7 19.9.1 10.6-8 21-18.5 22.9-12.2 2.1-23.8-7.6-26.6-19.1 9.3-3.7 16.1-12.7 17.1-22.6zm-58.5 42.8C31.9 97.9 37.5 86 46.6 80.2c6.3 7.6 16.7 11.6 26.4 9.4 1.2 4.2 3.1 8.2 5.9 11.7-.4 7.2-3.5 14.5-9.4 18.8-11.5 8.1-30.1 2.1-34.3-11.5z"
        fill="#fff"
      />
      <path
        d="M62.5 40.3c11.4-2.7 23.6 5 26.7 16.2 2.4 8 0 17.2-5.9 23.1-5 5-12.3 7.7-19.3 6.5C56.5 85 49.8 79.9 46.7 73c-3.8-7.8-2.5-17.6 2.7-24.4 3.3-4.2 8-7.1 13.1-8.3z"
        fill="#FFE226"
      />
      <path
        d="M60.475 80.297c-1.075.695-2.477-.352-2.565-1.466-1.68-7.207 3.279-15.448 10.734-16.6 6.569-1.343 13.277 3.862 14.42 10.41.724 1.783-2.521 3.061-3.145 1.29-1.289-3.147-2.945-6.632-6.456-7.693-6.006-2.218-12.434 3.662-11.946 9.743-.241 1.382.74 3.593-1.042 4.316zM69.8 53.8c2.2-.9 3.7 2.6 1.5 3.5-2.3 1-3.7-2.5-1.5-3.5zm-12.1 3.8c2.2-.9 3.7 2.5 1.6 3.5-2.4.9-3.9-2.5-1.6-3.5z"
        fill="#000"
      />
    </svg>
  );
};
